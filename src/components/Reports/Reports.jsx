import React, { useState, useEffect, useCallback } from 'react';
import Style from './Reports.module.css';

const API_BASE = '/api/Doctor';

export default function Reports() {
  const [activeTab, setActiveTab] = useState('list');
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    caseId: '',
    scanType: 'MRI — Brain',
    diagnosis: 'No Cancer',
    content: '',
  });

  const isEditing = !!selectedReport && activeTab === 'create';

  // Fetch all reports
  const fetchReports = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/reports`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setReports(data);
    } catch (err) {
      console.error('Failed to fetch reports', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const resetForm = () => {
    setFormData({
      patientName: '',
      caseId: '',
      scanType: 'MRI — Brain',
      diagnosis: 'No Cancer',
      content: '',
    });
    setSelectedReport(null);
  };

  const handleCreateOrUpdate = async () => {
    setActionLoading(isEditing ? 'update' : 'create');

    try {
      const payload = {
        patientName: formData.patientName,
        caseId: formData.caseId,
        scanType: formData.scanType,
        diagnosis: formData.diagnosis,
        content: formData.content,
      };

      if (isEditing && selectedReport) {
        await fetch(`${API_BASE}/reports/${selectedReport.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`${API_BASE}/reports`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      await fetchReports();
      setActiveTab('list');
      resetForm();
    } catch (err) {
      console.error('Failed to save report', err);
      alert('Failed to save report. Please try again.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleFinalize = async (id) => {
    setActionLoading(`finalize-${id}`);
    try {
      await fetch(`${API_BASE}/reports/${id}/finalize`, { method: 'POST' });
      await fetchReports();
      
      if (selectedReport?.id === id) {
        setSelectedReport({ ...selectedReport, status: 'Ready' });
      }
    } catch (err) {
      console.error(err);
      alert('Failed to finalize report');
    } finally {
      setActionLoading(null);
    }
  };

  const handleSend = async (id) => {
    if (!window.confirm('Send this report to the patient?')) return;
    
    setActionLoading(`send-${id}`);
    try {
      await fetch(`${API_BASE}/reports/${id}/send`, { method: 'POST' });
      alert('Report sent successfully!');
      await fetchReports();
    } catch (err) {
      console.error(err);
      alert('Failed to send report');
    } finally {
      setActionLoading(null);
    }
  };

  const openDetail = (report) => {
    setSelectedReport(report);
    setActiveTab('detail');
  };

  const openForEdit = (report) => {
    setSelectedReport(report);
    setFormData({
      patientName: report.patientName,
      caseId: report.caseId,
      scanType: report.scanType,
      diagnosis: report.diagnosis,
      content: report.content || '',
    });
    setActiveTab('create');
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.maindiv}>

        {/* Tabs */}
        <div className={Style.tabs}>
          <button 
            className={`${Style.tab} ${activeTab === 'list' ? Style.activeTab : ''}`}
            onClick={() => { setActiveTab('list'); resetForm(); }}
          >
            <i className="fa-solid fa-list"></i> Reports
          </button>
          <button 
            className={`${Style.tab} ${activeTab === 'create' ? Style.activeTab : ''}`}
            onClick={() => { 
              setActiveTab('create'); 
              if (!isEditing) resetForm(); 
            }}
          >
            <i className="fa-solid fa-file-pen"></i> {isEditing ? 'Edit Report' : 'Create Report'}
          </button>
          <button 
            className={`${Style.tab} ${activeTab === 'detail' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('detail')}
            disabled={!selectedReport}
          >
            <i className="fa-solid fa-file-medical"></i> Report Detail
          </button>
        </div>

        {/* List Tab */}
        {activeTab === 'list' && (
          <>
            <div className={Style.topBar}>
              <div>
                <h2 className={Style.title}>Medical Reports</h2>
                <p className={Style.subtitle}>{reports.length} reports found</p>
              </div>
              <button className={Style.addBtn} onClick={() => setActiveTab('create')}>
                <i className="fa-solid fa-plus"></i> New Report
              </button>
            </div>

            <div className={Style.list}>
              {reports.map((report) => (
                <div key={report.id} className={Style.row}>
                  <div className={Style.rowLeft}>
                    <div className={Style.iconWrap}>
                      <i className="fa-solid fa-brain"></i>
                    </div>
                    <div className={Style.rowInfo}>
                      <h3 className={Style.reportTitle}>{report.scanType}</h3>
                      <p className={Style.patientName}>
                        <i className="fa-solid fa-user"></i> {report.patientName}
                      </p>
                    </div>
                  </div>
                  <div className={Style.rowMeta}>
                    <span className={Style.date}>
                      <i className="fa-solid fa-calendar"></i> {report.date}
                    </span>
                    <span className={`${Style.badge} ${report.status === 'Ready' ? Style.ready : Style.inProgress}`}>
                      <span className={Style.dot}></span> {report.status}
                    </span>
                  </div>
                  <div className={Style.rowActions}>
                    <button className={Style.viewBtn} onClick={() => openDetail(report)}>
                      <i className="fa-solid fa-eye"></i> View
                    </button>
                    <button className={Style.downloadBtn} title="Download">
                      <i className="fa-solid fa-download"></i>
                    </button>
                    <button className={Style.sendBtn} onClick={() => handleSend(report.id)} title="Send to patient">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Create/Edit Tab */}
        {activeTab === 'create' && (
          <div className={Style.formSection}>
            <div className={Style.formCard}>
              <div className={Style.formCardHeader}>
                <div className={Style.formCardIcon}>
                  <i className="fa-solid fa-file-pen"></i>
                </div>
                <div>
                  <h3 className={Style.formCardTitle}>
                    {isEditing ? 'Edit Report' : 'Create Diagnosis Report'}
                  </h3>
                  <p className={Style.formCardSub}>Fill in report details below</p>
                </div>
              </div>

              <div className={Style.formGrid}>
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>Patient Name</label>
                  <input
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className={Style.formInput}
                  />
                </div>
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>Case ID</label>
                  <input
                    type="text"
                    value={formData.caseId}
                    onChange={(e) => setFormData({ ...formData, caseId: e.target.value })}
                    className={Style.formInput}
                  />
                </div>
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>Scan Type</label>
                  <select
                    value={formData.scanType}
                    onChange={(e) => setFormData({ ...formData, scanType: e.target.value })}
                    className={Style.formInput}
                  >
                    <option>MRI — Brain</option>
                    <option>CT Chest</option>
                    <option>X-Ray Hand</option>
                  </select>
                </div>
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>Diagnosis</label>
                  <select
                    value={formData.diagnosis}
                    onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
                    className={Style.formInput}
                  >
                    <option>No Cancer</option>
                    <option>Adenocarcinoma</option>
                    <option>LSCC</option>
                  </select>
                </div>
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>Report Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className={`${Style.formInput} ${Style.formTextarea}`}
                    placeholder="Enter diagnosis details…"
                  />
                </div>
              </div>

              <div className={Style.formActions}>
                <button className={Style.cancelBtn} onClick={() => { setActiveTab('list'); resetForm(); }}>
                  Cancel
                </button>
                <button 
                  className={Style.draftBtn} 
                  onClick={handleCreateOrUpdate}
                  disabled={actionLoading !== null}
                >
                  {actionLoading === 'update' ? 'Updating...' : 'Save Draft'}
                </button>
                <button 
                  className={Style.submitBtn} 
                  onClick={handleCreateOrUpdate}
                  disabled={actionLoading !== null}
                >
                  {isEditing ? 'Update Report' : 'Finalize Report'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detail Tab */}
        {activeTab === 'detail' && selectedReport && (
          <div className={Style.detailSection}>
            <button className={Style.backBtn} onClick={() => { 
              setActiveTab('list'); 
              setSelectedReport(null); 
            }}>
              <i className="fa-solid fa-arrow-left"></i> Back to Reports
            </button>

            <div className={Style.detailGrid}>
              <div className={Style.detailCard}>
                <div className={Style.detailCardHeader}>
                  <div className={Style.detailIcon}><i className="fa-solid fa-file-medical"></i></div>
                  <h3 className={Style.detailCardTitle}>Report Info</h3>
                </div>
                <div className={Style.detailRows}>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Patient</span>
                    <span className={Style.detailValue}>{selectedReport.patientName}</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Case ID</span>
                    <span className={`${Style.detailValue} ${Style.detailId}`}>{selectedReport.caseId}</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Scan Type</span>
                    <span className={Style.detailValue}>{selectedReport.scanType}</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Date</span>
                    <span className={Style.detailValue}>{selectedReport.date}</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Status</span>
                    <span className={`${Style.badge} ${selectedReport.status === 'Ready' ? Style.ready : Style.inProgress}`}>
                      <span className={Style.dot}></span> {selectedReport.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className={Style.detailCard}>
                <div className={Style.detailCardHeader}>
                  <div className={Style.detailIcon}><i className="fa-solid fa-user-doctor"></i></div>
                  <h3 className={Style.detailCardTitle}>Physician</h3>
                </div>
                <div className={Style.detailRows}>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Name</span>
                    <span className={Style.detailValue}>Dr. Sarah K.</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Specialty</span>
                    <span className={Style.detailValue}>Radiologist</span>
                  </div>
                </div>
              </div>

              <div className={`${Style.detailCard} ${Style.fullWidthCard}`}>
                <div className={Style.detailCardHeader}>
                  <div className={Style.detailIcon}><i className="fa-solid fa-notes-medical"></i></div>
                  <h3 className={Style.detailCardTitle}>Report Content</h3>
                </div>
                <p className={Style.reportContent}>{selectedReport.content}</p>

                <div className={Style.detailActions}>
                  <button className={Style.viewBtn} onClick={() => openForEdit(selectedReport)}>
                    <i className="fa-solid fa-pen"></i> Edit Report
                  </button>

                  {selectedReport.status !== 'Ready' && (
                    <button 
                      className={Style.submitBtn}
                      onClick={() => handleFinalize(selectedReport.id)}
                      disabled={actionLoading?.startsWith('finalize')}
                    >
                      <i className="fa-solid fa-check"></i> 
                      {actionLoading?.startsWith('finalize') ? 'Finalizing...' : 'Finalize Report'}
                    </button>
                  )}

                  <button className={Style.sendBtn} onClick={() => handleSend(selectedReport.id)}>
                    <i className="fa-solid fa-paper-plane"></i> Send to Patient
                  </button>

                  <button className={Style.downloadBtn} title="Download">
                    <i className="fa-solid fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}