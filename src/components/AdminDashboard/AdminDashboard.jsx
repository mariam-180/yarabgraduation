import React, { useState, useEffect, useCallback } from 'react';
import Style from './AdminDashboard.module.css';

const BASE           = 'https://lungcancer.runasp.net/api/Admin';
const DASHBOARD_API  = `${BASE}/dashboard`;
const AUDIT_LOGS_API = `${BASE}/audit-logs`;
const STATS_API      = `${BASE}/stats`;
const POLL_INTERVAL  = 8000;
const LOGS_PER_PAGE  = 5;

const getToken = () => localStorage.getItem('token');

const extractArray = (json) => {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.items)) return json.items;
  if (Array.isArray(json.data?.items)) return json.data.items;
  return [];
};

/* ── Pill pagination component ── */
function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const btnBase = {
    width: '38px', height: '38px',
    borderRadius: '10px',
    border: '1px solid #3b4f7a',
    background: 'rgba(14,26,64,0.7)',
    cursor: 'pointer',
    fontSize: '15px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#93c5fd',
    transition: 'all 0.2s',
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      paddingTop: '24px',
    }}>

      {/* ‹ Prev */}
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          ...btnBase,
          opacity: currentPage === 1 ? 0.35 : 1,
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        ‹
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onChange(page)}
          style={{
            ...btnBase,
            border: page === currentPage ? 'none' : '1px solid #3b4f7a',
            background: page === currentPage
              ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
              : 'rgba(14,26,64,0.7)',
            color: page === currentPage ? '#fff' : '#93c5fd',
            fontWeight: page === currentPage ? '700' : '500',
            boxShadow: page === currentPage
              ? '0 4px 14px rgba(37,99,235,0.45)'
              : 'none',
          }}
        >
          {page}
        </button>
      ))}

      {/* › Next */}
      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          ...btnBase,
          opacity: currentPage === totalPages ? 0.35 : 1,
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        ›
      </button>

    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab,     setActiveTab]     = useState('overview');
  const [dashboardData, setDashboardData] = useState(null);
  const [stats,         setStats]         = useState(null);
  const [logs,          setLogs]          = useState([]);

  const [loading,      setLoading]      = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [logsLoading,  setLogsLoading]  = useState(false);

  const [error,      setError]      = useState(null);
  const [statsError, setStatsError] = useState(null);
  const [logsError,  setLogsError]  = useState(null);

  /* ── logs pagination ── */
  const [logsPage, setLogsPage] = useState(1);

  /* ── fetch dashboard ── */
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(DASHBOARD_API, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error('Failed to fetch dashboard');
      const json = await res.json();
      setDashboardData(json?.data ?? json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /* ── fetch stats ── */
  const fetchStats = useCallback(async () => {
    setStatsLoading(true);
    setStatsError(null);
    try {
      const res = await fetch(STATS_API, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error('Failed to fetch stats');
      const json = await res.json();
      setStats(json?.data ?? json);
    } catch (err) {
      setStatsError(err.message);
    } finally {
      setStatsLoading(false);
    }
  }, []);

  /* ── fetch logs ── */
  const fetchLogs = useCallback(async () => {
    setLogsLoading(true);
    setLogsError(null);
    try {
      const res = await fetch(AUDIT_LOGS_API, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error('Failed to fetch audit logs');
      const json = await res.json();
      setLogs(extractArray(json));
      setLogsPage(1); // reset to page 1 on fresh fetch
    } catch (err) {
      setLogsError(err.message);
      setLogs([]);
    } finally {
      setLogsLoading(false);
    }
  }, []);

  /* ── overview: initial fetch + polling ── */
  useEffect(() => {
    if (activeTab !== 'overview') return;
    fetchDashboard();
    fetchStats();
    const interval = setInterval(() => {
      fetchDashboard();
      fetchStats();
    }, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [activeTab, fetchDashboard, fetchStats]);

  /* ── logs: initial fetch + polling ── */
  useEffect(() => {
    if (activeTab !== 'logs') return;
    fetchLogs();
    const interval = setInterval(fetchLogs, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [activeTab, fetchLogs]);

  /* ── helpers ── */
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const utcDate     = new Date(dateString.endsWith('Z') ? dateString : dateString + 'Z');
    const diffSeconds = Math.floor((Date.now() - utcDate.getTime()) / 1000);
    if (diffSeconds < 60)    return 'Just now';
    if (diffSeconds < 3600)  return `${Math.floor(diffSeconds / 60)} min ago`;
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} hours ago`;
    return utcDate.toLocaleString();
  };

  const getMethodClass = (method) => {
    switch (method?.toUpperCase()) {
      case 'GET':    return Style.badgeGreen;
      case 'POST':   return Style.badgeBlue;
      case 'PUT':    return Style.badgeYellow;
      case 'DELETE': return Style.badgeRed;
      default:       return Style.badgeBlue;
    }
  };

  /* ── logs slice for current page ── */
  const totalLogPages  = Math.ceil(logs.length / LOGS_PER_PAGE);
  const pagedLogs      = logs.slice(
    (logsPage - 1) * LOGS_PER_PAGE,
    logsPage * LOGS_PER_PAGE,
  );

  /* stat cards */
  const statCards = stats
    ? [
        { icon: '👥', label: 'Total Users',        value: stats.totalUsers        ?? stats.users        },
        { icon: '🩺', label: 'Total Doctors',       value: stats.totalDoctors      ?? stats.doctors      },
        { icon: '🧪', label: 'Total Scans',         value: stats.totalScans        ?? stats.scans        },
        { icon: '📋', label: 'Appointments',        value: stats.totalAppointments ?? stats.appointments },
        { icon: '📊', label: 'Reports Generated',   value: stats.reportsGenerated  ?? stats.reports      },
        { icon: '✅', label: 'Active Doctors',       value: stats.activeDoctors     ?? stats.activeUsers  },
        { icon: '🔬', label: 'AI Scans Analyzed',   value: stats.aiScansAnalyzed   ?? stats.aiScans      },
        { icon: '📅', label: 'Appointments Today',  value: stats.appointmentsToday ?? stats.todayAppts   },
      ].filter(c => c.value !== undefined && c.value !== null)
    : [];

  const dash = dashboardData ?? {};

  return (
    <div className={Style.wrapper}>
      <div className={Style.maindiv}>

        {/* ── Tabs ── */}
        <div className={Style.tabs}>
          <button
            className={`${Style.tab} ${activeTab === 'overview' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`${Style.tab} ${activeTab === 'logs' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('logs')}
          >
            Audit Logs
          </button>
        </div>

        {/* ══════════════ OVERVIEW ══════════════ */}
        {activeTab === 'overview' && (
          <div className={Style.overview}>

            {/* LEFT — hero + stats grid */}
            <div className={Style.hero}>
              <div className={Style.badge}>AI-POWERED PLATFORM</div>

              <h1 className={Style.mainTitle}>
                Smart Medical <span>Dashboard</span>
              </h1>

              <p className={Style.subtitle}>
                Your intelligent assistant for patients, reports, and appointments.
              </p>

              {/* Metrics row */}
              <div className={Style.metrics}>
                {dash.totalUsers !== undefined && (
                  <div className={Style.metric}>
                    <h2>{loading ? '…' : dash.totalUsers}</h2>
                    <p>Total Patients</p>
                  </div>
                )}
                {dash.aiScansAnalyzed !== undefined && (
                  <div className={Style.metric}>
                    <h2>{loading ? '…' : dash.aiScansAnalyzed}</h2>
                    <p>AI Scans</p>
                  </div>
                )}
                {dash.activeDoctors !== undefined && (
                  <div className={Style.metric}>
                    <h2>{loading ? '…' : dash.activeDoctors}</h2>
                    <p>Active Doctors</p>
                  </div>
                )}
                {dash.totalAppointments !== undefined && (
                  <div className={Style.metric}>
                    <h2>{loading ? '…' : dash.totalAppointments}</h2>
                    <p>Appointments</p>
                  </div>
                )}
              </div>

              {error && <p className={Style.error}>{error}</p>}

              {statsLoading && !stats && (
                <p className={Style.loading}>Loading stats…</p>
              )}
              {statsError && <p className={Style.error}>{statsError}</p>}

              {statCards.length > 0 && (
                <div className={Style.statsGrid}>
                  {statCards.map((card) => (
                    <div key={card.label} className={Style.statCard}>
                      <span className={Style.statIcon}>{card.icon}</span>
                      <div className={Style.statInfo}>
                        <strong>{String(card.value)}</strong>
                        <span>{card.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — sidebar */}
            <aside className={Style.sidebar}>
              <div className={Style.sidebarCard}>
                <div className={Style.sidebarHeader}>
                  <span className={Style.sidebarIcon}>🏥</span>
                  <h3>Platform Status</h3>
                </div>
                <ul className={Style.sidebarList}>
                  {dash.totalUsers !== undefined && (
                    <li><span>Registered Users</span><strong>{loading ? '…' : dash.totalUsers}</strong></li>
                  )}
                  {dash.totalDoctors !== undefined && (
                    <li><span>Doctors</span><strong>{loading ? '…' : dash.totalDoctors}</strong></li>
                  )}
                  {dash.totalScans !== undefined && (
                    <li><span>Total Scans</span><strong>{loading ? '…' : dash.totalScans}</strong></li>
                  )}
                  {dash.totalAppointments !== undefined && (
                    <li><span>Appointments</span><strong>{loading ? '…' : dash.totalAppointments}</strong></li>
                  )}
                  {dash.reportsGenerated !== undefined && (
                    <li><span>Reports</span><strong>{loading ? '…' : dash.reportsGenerated}</strong></li>
                  )}
                  {dash.activeDoctors !== undefined && (
                    <li><span>Active Doctors</span><strong>{loading ? '…' : dash.activeDoctors}</strong></li>
                  )}
                  {dash.aiScansAnalyzed !== undefined && (
                    <li><span>AI Scans Analyzed</span><strong>{loading ? '…' : dash.aiScansAnalyzed}</strong></li>
                  )}
                  {dash.appointmentsToday !== undefined && (
                    <li><span>Appointments Today</span><strong>{loading ? '…' : dash.appointmentsToday}</strong></li>
                  )}
                </ul>
              </div>

              <div className={Style.sidebarPulse}>
                <span className={Style.pulseDot} />
                <p>Live — auto-refreshes every 8 s</p>
              </div>
            </aside>

          </div>
        )}

        {/* ══════════════ AUDIT LOGS ══════════════ */}
        {activeTab === 'logs' && (
          <div className={Style.logsContainer}>
            <div className={Style.logsHeader}>
              <span className={Style.logsTitle}>Audit Logs</span>
              {logs.length > 0 && (
                <span style={{ fontSize: '0.82rem', opacity: 0.5, marginLeft: 4 }}>
                  {logs.length} entries · page {logsPage} of {totalLogPages}
                </span>
              )}
              <div className={Style.livePill}>
                <span className={Style.pulseDot} />
                Live
              </div>
            </div>

            {logsLoading && logs.length === 0 && (
              <p className={Style.loading}>Loading logs…</p>
            )}
            {logsError && <p className={Style.error}>{logsError}</p>}

            {/* 5 logs for the current page */}
            <div className={Style.logList}>
              {pagedLogs.map((log, index) => (
                <div key={log.id ?? index} className={Style.logCard}>
                  <div className={`${Style.methodTag} ${getMethodClass(log.method)}`}>
                    {log.method}
                  </div>
                  <div className={Style.logContent}>
                    <div className={Style.logTitleRow}>
                      <span className={Style.logAction}>
                        {log.action ?? log.message}
                      </span>
                      <span className={Style.logTime}>
                        {formatDate(log.createdAt ?? log.timestamp)}
                      </span>
                    </div>
                    <div className={Style.logSub}>
                      {log.performedBy ?? 'System'} • {log.endpoint}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pill pagination */}
            <Pagination
              currentPage={logsPage}
              totalPages={totalLogPages}
              onChange={setLogsPage}
            />

          </div>
        )}

      </div>
    </div>
  );
}