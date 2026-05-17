import React, { useState } from 'react'
import Style from './AdminDoctors.module.css'

export default function AdminDoctors() {
  const [activeTab, setActiveTab] = useState('pending')

  return (
    <div className={Style.wrapper}>
      <div className={Style.maindiv}>

        {/* Tabs */}
        <div className={Style.tabs}>
          <button className={`${Style.tab} ${activeTab === 'pending' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('pending')}>
            <i className="fa-solid fa-clock"></i> Pending Approvals
          </button>
          <button className={`${Style.tab} ${activeTab === 'detail' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('detail')}>
            <i className="fa-solid fa-user-doctor"></i> Doctor Detail
          </button>
        </div>

        {/* ── Tab: Pending ── */}
        {activeTab === 'pending' && <>

          <div className={Style.topBar}>
            <div>
              <h2 className={Style.title}>Pending Doctor Approvals</h2>
              <p className={Style.subtitle}>4 doctors awaiting review</p>
            </div>
          </div>

          <div className={Style.list}>

            <div className={Style.row}>
              <div className={Style.rowLeft}>
                <div className={Style.avatar}>M</div>
                <div className={Style.rowInfo}>
                  <p className={Style.doctorName}>Dr. Mohamed Ali</p>
                  <p className={Style.doctorMeta}>Radiologist · Cairo, Egypt</p>
                </div>
              </div>
              <div className={Style.rowMeta}>
                <span className={Style.date}>
                  <i className="fa-solid fa-calendar"></i> Applied Apr 10, 2026
                </span>
                <span className={`${Style.badge} ${Style.pending}`}>
                  <span className={Style.dot}></span>Pending
                </span>
              </div>
              <div className={Style.rowActions}>
                <button className={Style.viewBtn} onClick={() => setActiveTab('detail')}>
                  <i className="fa-solid fa-eye"></i> Review
                </button>
                <button className={Style.approveBtn}>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className={Style.rejectBtn}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className={Style.row}>
              <div className={Style.rowLeft}>
                <div className={`${Style.avatar} ${Style.avatar2}`}>S</div>
                <div className={Style.rowInfo}>
                  <p className={Style.doctorName}>Dr. Sara Johnson</p>
                  <p className={Style.doctorMeta}>Oncologist · New York, USA</p>
                </div>
              </div>
              <div className={Style.rowMeta}>
                <span className={Style.date}>
                  <i className="fa-solid fa-calendar"></i> Applied Apr 09, 2026
                </span>
                <span className={`${Style.badge} ${Style.pending}`}>
                  <span className={Style.dot}></span>Pending
                </span>
              </div>
              <div className={Style.rowActions}>
                <button className={Style.viewBtn} onClick={() => setActiveTab('detail')}>
                  <i className="fa-solid fa-eye"></i> Review
                </button>
                <button className={Style.approveBtn}>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className={Style.rejectBtn}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className={Style.row}>
              <div className={Style.rowLeft}>
                <div className={`${Style.avatar} ${Style.avatar3}`}>K</div>
                <div className={Style.rowInfo}>
                  <p className={Style.doctorName}>Dr. Karim Nasser</p>
                  <p className={Style.doctorMeta}>Pulmonologist · London, UK</p>
                </div>
              </div>
              <div className={Style.rowMeta}>
                <span className={Style.date}>
                  <i className="fa-solid fa-calendar"></i> Applied Apr 08, 2026
                </span>
                <span className={`${Style.badge} ${Style.pending}`}>
                  <span className={Style.dot}></span>Pending
                </span>
              </div>
              <div className={Style.rowActions}>
                <button className={Style.viewBtn} onClick={() => setActiveTab('detail')}>
                  <i className="fa-solid fa-eye"></i> Review
                </button>
                <button className={Style.approveBtn}>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className={Style.rejectBtn}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className={Style.row}>
              <div className={Style.rowLeft}>
                <div className={`${Style.avatar} ${Style.avatar4}`}>L</div>
                <div className={Style.rowInfo}>
                  <p className={Style.doctorName}>Dr. Laila Mostafa</p>
                  <p className={Style.doctorMeta}>Radiologist · Dubai, UAE</p>
                </div>
              </div>
              <div className={Style.rowMeta}>
                <span className={Style.date}>
                  <i className="fa-solid fa-calendar"></i> Applied Apr 07, 2026
                </span>
                <span className={`${Style.badge} ${Style.pending}`}>
                  <span className={Style.dot}></span>Pending
                </span>
              </div>
              <div className={Style.rowActions}>
                <button className={Style.viewBtn} onClick={() => setActiveTab('detail')}>
                  <i className="fa-solid fa-eye"></i> Review
                </button>
                <button className={Style.approveBtn}>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className={Style.rejectBtn}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

          </div>
        </>}

        {/* ── Tab: Doctor Detail ── */}
        {activeTab === 'detail' && (
          <div className={Style.detailSection}>

            <button className={Style.backBtn} onClick={() => setActiveTab('pending')}>
              <i className="fa-solid fa-arrow-left"></i> Back to Pending
            </button>

            <div className={Style.detailGrid}>

              <div className={Style.detailCard}>
                <div className={Style.detailCardHeader}>
                  <div className={Style.detailIcon}><i className="fa-solid fa-user-doctor"></i></div>
                  <h3 className={Style.detailCardTitle}>Doctor Info</h3>
                </div>
                <div className={Style.detailRows}>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Name</span>
                    <span className={Style.detailValue}>Dr. Mohamed Ali</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Specialty</span>
                    <span className={Style.detailValue}>Radiologist</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Location</span>
                    <span className={Style.detailValue}>Cairo, Egypt</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Email</span>
                    <span className={Style.detailValue}>m.ali@hospital.com</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Applied</span>
                    <span className={Style.detailValue}>Apr 10, 2026</span>
                  </div>
                  <div className={Style.detailRow}>
                    <span className={Style.detailLabel}>Status</span>
                    <span className={`${Style.badge} ${Style.pending}`}>
                      <span className={Style.dot}></span>Pending
                    </span>
                  </div>
                </div>
              </div>

              <div className={Style.detailCard}>
                <div className={Style.detailCardHeader}>
                  <div className={Style.detailIcon}><i className="fa-solid fa-shield-halved"></i></div>
                  <h3 className={Style.detailCardTitle}>Approve or Reject</h3>
                </div>
                <p className={Style.statusDesc}>
                  Review the doctor's credentials and decide whether to approve or reject their registration.
                </p>
                <div className={Style.statusBtnsGroup}>

                  <button className={`${Style.statusGroupBtn} ${Style.statusApprove}`}>
                    <div className={Style.statusBtnLeft}>
                      <div className={Style.statusBtnIcon} style={{background:'#dcfce7', color:'#166534'}}>
                        <i className="fa-solid fa-circle-check"></i>
                      </div>
                      <div>
                        <p className={Style.statusBtnTitle}>Approve Doctor</p>
                        <p className={Style.statusBtnSub}>Grant access to the platform</p>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{fontSize:'0.7rem', color:'#94a3b8'}}></i>
                  </button>

                  <button className={`${Style.statusGroupBtn} ${Style.statusReject}`}>
                    <div className={Style.statusBtnLeft}>
                      <div className={Style.statusBtnIcon} style={{background:'#fee2e2', color:'#991b1b'}}>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </div>
                      <div>
                        <p className={Style.statusBtnTitle}>Reject Doctor</p>
                        <p className={Style.statusBtnSub}>Deny platform access</p>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{fontSize:'0.7rem', color:'#94a3b8'}}></i>
                  </button>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}