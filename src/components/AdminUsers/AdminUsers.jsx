// import React, { useState } from 'react'
// import Style from './AdminUsers.module.css'

// export default function AdminUsers() {
//   const [activeTab, setActiveTab] = useState('list')
//   const [roleFilter, setRoleFilter] = useState('all')

//   return (
//     <div className={Style.wrapper}>
//       <div className={Style.maindiv}>

//         {/* Tabs */}
//         <div className={Style.tabs}>
//           <button className={`${Style.tab} ${activeTab === 'list' ? Style.activeTab : ''}`}
//             onClick={() => setActiveTab('list')}>
//             <i className="fa-solid fa-users"></i> All Users
//           </button>
//           <button className={`${Style.tab} ${activeTab === 'detail' ? Style.activeTab : ''}`}
//             onClick={() => setActiveTab('detail')}>
//             <i className="fa-solid fa-user"></i> User Detail
//           </button>
//         </div>

//         {/* ── Tab: List ── */}
//         {activeTab === 'list' && <>

//           <div className={Style.topBar}>
//             <div>
//               <h2 className={Style.title}>Users Management</h2>
//               <p className={Style.subtitle}>5 users found</p>
//             </div>
//           </div>

//           {/* Role Filter */}
//           <div className={Style.filterBar}>
//             <div className={Style.rolePills}>
//               <button className={`${Style.pill} ${roleFilter === 'all'    ? Style.pillActive : ''}`} onClick={() => setRoleFilter('all')}>All</button>
//               <button className={`${Style.pill} ${roleFilter === 'doctor' ? Style.pillActive : ''}`} onClick={() => setRoleFilter('doctor')}>
//                 <i className="fa-solid fa-user-doctor"></i> Doctors
//               </button>
//               <button className={`${Style.pill} ${roleFilter === 'patient' ? Style.pillActive : ''}`} onClick={() => setRoleFilter('patient')}>
//                 <i className="fa-solid fa-user"></i> Patients
//               </button>
//               <button className={`${Style.pill} ${roleFilter === 'admin' ? Style.pillActive : ''}`} onClick={() => setRoleFilter('admin')}>
//                 <i className="fa-solid fa-shield"></i> Admins
//               </button>
//             </div>
//           </div>

//           {/* Table */}
//           <div className={Style.tableContainer}>
//             <table className={Style.table}>
//               <thead>
//                 <tr className={Style.theadRow}>
//                   <th className={Style.th}>User</th>
//                   <th className={Style.th}>Role</th>
//                   <th className={Style.th}>Email</th>
//                   <th className={Style.th}>Status</th>
//                   <th className={Style.th}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>

//                 <tr className={Style.tr}>
//                   <td className={Style.td}>
//                     <div className={Style.nameCell}>
//                       <div className={Style.avatar}>S</div>
//                       <div>
//                         <p className={Style.userName}>Dr. Sarah K.</p>
//                         <p className={Style.userId}>#U001</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.roleBadge} ${Style.roleDoctor}`}>
//                       <i className="fa-solid fa-user-doctor"></i> Doctor
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={Style.emailCell}>sarah.k@hospital.com</span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.statusBadge} ${Style.active}`}>
//                       <span className={Style.dot}></span>Active
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <div className={Style.actions}>
//                       <button className={Style.actionBtn}
//                         onClick={() => setActiveTab('detail')} title="View">
//                         <i className="fa-solid fa-eye"></i>
//                       </button>
//                       <button className={`${Style.actionBtn} ${Style.deactivateBtn}`} title="Deactivate">
//                         <i className="fa-solid fa-ban"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//                 <tr className={Style.tr}>
//                   <td className={Style.td}>
//                     <div className={Style.nameCell}>
//                       <div className={`${Style.avatar} ${Style.avatar2}`}>J</div>
//                       <div>
//                         <p className={Style.userName}>John Doe</p>
//                         <p className={Style.userId}>#U002</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.roleBadge} ${Style.rolePatient}`}>
//                       <i className="fa-solid fa-user"></i> Patient
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={Style.emailCell}>john.doe@gmail.com</span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.statusBadge} ${Style.active}`}>
//                       <span className={Style.dot}></span>Active
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <div className={Style.actions}>
//                       <button className={Style.actionBtn}
//                         onClick={() => setActiveTab('detail')} title="View">
//                         <i className="fa-solid fa-eye"></i>
//                       </button>
//                       <button className={`${Style.actionBtn} ${Style.deactivateBtn}`} title="Deactivate">
//                         <i className="fa-solid fa-ban"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//                 <tr className={Style.tr}>
//                   <td className={Style.td}>
//                     <div className={Style.nameCell}>
//                       <div className={`${Style.avatar} ${Style.avatar3}`}>A</div>
//                       <div>
//                         <p className={Style.userName}>Ali Hassan</p>
//                         <p className={Style.userId}>#U003</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.roleBadge} ${Style.rolePatient}`}>
//                       <i className="fa-solid fa-user"></i> Patient
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={Style.emailCell}>ali.h@gmail.com</span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.statusBadge} ${Style.inactive}`}>
//                       <span className={Style.dot}></span>Inactive
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <div className={Style.actions}>
//                       <button className={Style.actionBtn}
//                         onClick={() => setActiveTab('detail')} title="View">
//                         <i className="fa-solid fa-eye"></i>
//                       </button>
//                       <button className={`${Style.actionBtn} ${Style.activateBtn}`} title="Activate">
//                         <i className="fa-solid fa-circle-check"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//                 <tr className={Style.tr}>
//                   <td className={Style.td}>
//                     <div className={Style.nameCell}>
//                       <div className={`${Style.avatar} ${Style.avatar4}`}>J</div>
//                       <div>
//                         <p className={Style.userName}>Dr. James</p>
//                         <p className={Style.userId}>#U004</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.roleBadge} ${Style.roleDoctor}`}>
//                       <i className="fa-solid fa-user-doctor"></i> Doctor
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={Style.emailCell}>dr.james@hospital.com</span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.statusBadge} ${Style.active}`}>
//                       <span className={Style.dot}></span>Active
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <div className={Style.actions}>
//                       <button className={Style.actionBtn}
//                         onClick={() => setActiveTab('detail')} title="View">
//                         <i className="fa-solid fa-eye"></i>
//                       </button>
//                       <button className={`${Style.actionBtn} ${Style.deactivateBtn}`} title="Deactivate">
//                         <i className="fa-solid fa-ban"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//                 <tr className={Style.tr}>
//                   <td className={Style.td}>
//                     <div className={Style.nameCell}>
//                       <div className={`${Style.avatar} ${Style.avatar5}`}>M</div>
//                       <div>
//                         <p className={Style.userName}>Admin Master</p>
//                         <p className={Style.userId}>#U005</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.roleBadge} ${Style.roleAdmin}`}>
//                       <i className="fa-solid fa-shield"></i> Admin
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={Style.emailCell}>admin@system.com</span>
//                   </td>
//                   <td className={Style.td}>
//                     <span className={`${Style.statusBadge} ${Style.active}`}>
//                       <span className={Style.dot}></span>Active
//                     </span>
//                   </td>
//                   <td className={Style.td}>
//                     <div className={Style.actions}>
//                       <button className={Style.actionBtn}
//                         onClick={() => setActiveTab('detail')} title="View">
//                         <i className="fa-solid fa-eye"></i>
//                       </button>
//                       <button className={`${Style.actionBtn} ${Style.deactivateBtn}`} title="Deactivate">
//                         <i className="fa-solid fa-ban"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//               </tbody>
//             </table>
//           </div>
//         </>}

//         {/* ── Tab: User Detail ── */}
//         {activeTab === 'detail' && (
//           <div className={Style.detailSection}>

//             <button className={Style.backBtn} onClick={() => setActiveTab('list')}>
//               <i className="fa-solid fa-arrow-left"></i> Back to Users
//             </button>

//             <div className={Style.detailGrid}>

//               {/* User Info */}
//               <div className={Style.detailCard}>
//                 <div className={Style.detailCardHeader}>
//                   <div className={Style.detailIcon}><i className="fa-solid fa-user"></i></div>
//                   <h3 className={Style.detailCardTitle}>User Info</h3>
//                 </div>
//                 <div className={Style.detailRows}>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>Name</span>
//                     <span className={Style.detailValue}>Dr. Sarah K.</span>
//                   </div>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>User ID</span>
//                     <span className={`${Style.detailValue} ${Style.detailId}`}>#U001</span>
//                   </div>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>Email</span>
//                     <span className={Style.detailValue}>sarah.k@hospital.com</span>
//                   </div>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>Role</span>
//                     <span className={`${Style.roleBadge} ${Style.roleDoctor}`}>
//                       <i className="fa-solid fa-user-doctor"></i> Doctor
//                     </span>
//                   </div>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>Status</span>
//                     <span className={`${Style.statusBadge} ${Style.active}`}>
//                       <span className={Style.dot}></span>Active
//                     </span>
//                   </div>
//                   <div className={Style.detailRow}>
//                     <span className={Style.detailLabel}>Joined</span>
//                     <span className={Style.detailValue}>Jan 12, 2025</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Status Control */}
//               <div className={Style.detailCard}>
//                 <div className={Style.detailCardHeader}>
//                   <div className={Style.detailIcon}><i className="fa-solid fa-sliders"></i></div>
//                   <h3 className={Style.detailCardTitle}>Update Status</h3>
//                 </div>
//                 <p className={Style.statusDesc}>
//                   Change this user's account status. Deactivating will block their access immediately.
//                 </p>
//                 <div className={Style.statusBtnsGroup}>

//                   <button className={`${Style.statusGroupBtn} ${Style.statusActivate}`}>
//                     <div className={Style.statusBtnLeft}>
//                       <div className={Style.statusBtnIcon} style={{background:'#dcfce7', color:'#166534'}}>
//                         <i className="fa-solid fa-circle-check"></i>
//                       </div>
//                       <div>
//                         <p className={Style.statusBtnTitle}>Activate</p>
//                         <p className={Style.statusBtnSub}>Grant full access</p>
//                       </div>
//                     </div>
//                     <i className="fa-solid fa-chevron-right" style={{fontSize:'0.7rem', color:'#94a3b8'}}></i>
//                   </button>

//                   <button className={`${Style.statusGroupBtn} ${Style.statusDeactivate}`}>
//                     <div className={Style.statusBtnLeft}>
//                       <div className={Style.statusBtnIcon} style={{background:'#fee2e2', color:'#991b1b'}}>
//                         <i className="fa-solid fa-ban"></i>
//                       </div>
//                       <div>
//                         <p className={Style.statusBtnTitle}>Deactivate</p>
//                         <p className={Style.statusBtnSub}>Block account access</p>
//                       </div>
//                     </div>
//                     <i className="fa-solid fa-chevron-right" style={{fontSize:'0.7rem', color:'#94a3b8'}}></i>
//                   </button>

//                 </div>
//               </div>

//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   )
// }



// import React, { useState, useEffect, useCallback } from 'react'
// import Style from './AdminUsers.module.css'

// const API_BASE = 'https://lungcancer.runasp.net/api/Admin/users'

// export default function AdminUsers() {
//   const [activeTab, setActiveTab]       = useState('list')
//   const [roleFilter, setRoleFilter]     = useState('all')
//   const [selectedUser, setSelectedUser] = useState(null)

//   const [users, setUsers]           = useState([])
//   const [loading, setLoading]       = useState(false)
//   const [error, setError]           = useState(null)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [pageNumber, setPageNumber] = useState(1)
//   const [pageSize]                  = useState(10)
//   const [totalCount, setTotalCount] = useState(0)

//   // ── Safely extract array from any response shape ──
//   const extractUsers = (data) => {
//     console.log('API raw response:', data)

//     if (!data) return []

//     // plain array
//     if (Array.isArray(data)) return data

//     // common wrapper keys
//     const keys = [
//       'users', 'data', 'items', 'result',
//       'results', 'records', 'list', 'content'
//     ]
//     for (const key of keys) {
//       if (data[key] && Array.isArray(data[key])) return data[key]
//     }

//     // nested: data.data, result.data …
//     if (data.data && typeof data.data === 'object') {
//       for (const key of keys) {
//         if (data.data[key] && Array.isArray(data.data[key])) return data.data[key]
//       }
//       if (Array.isArray(data.data)) return data.data
//     }

//     // single object → wrap in array
//     if (typeof data === 'object') return [data]

//     return []
//   }

//   const extractTotal = (data) => {
//     if (!data || Array.isArray(data)) return 0
//     return (
//       data.totalCount   ??
//       data.total        ??
//       data.totalItems   ??
//       data.count        ??
//       data.totalRecords ??
//       data.data?.totalCount ??
//       data.data?.total  ??
//       0
//     )
//   }

//   // ── Fetch ──
//   const fetchUsers = useCallback(async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const params = new URLSearchParams({ PageNumber: pageNumber, PageSize: pageSize })
//       if (searchTerm)           params.append('SearchTerm', searchTerm)
//       if (roleFilter !== 'all') params.append('role', roleFilter)

//       const token = localStorage.getItem('token')
//       const res = await fetch(`${API_BASE}?${params}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...(token && { Authorization: `Bearer ${token}` }),
//         },
//       })

//       if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

//       const data = await res.json()

//       const extractedUsers = extractUsers(data)
//       const extractedTotal = extractTotal(data)

//       console.log('Extracted users:', extractedUsers)
//       console.log('Extracted total:', extractedTotal)

//       setUsers(extractedUsers)
//       setTotalCount(extractedTotal || extractedUsers.length)

//     } catch (err) {
//       console.error('Fetch error:', err)
//       setError(err.message)
//       setUsers([])      // ← always reset to array on error
//     } finally {
//       setLoading(false)
//     }
//   }, [pageNumber, pageSize, searchTerm, roleFilter])

//   useEffect(() => { fetchUsers() }, [fetchUsers])
//   useEffect(() => { setPageNumber(1) }, [roleFilter, searchTerm])

//   const totalPages = Math.ceil(totalCount / pageSize)

//   // ── Helpers ──
//   const getRoleBadgeClass = (role) => {
//     const r = (role ?? '').toLowerCase()
//     if (r === 'doctor')  return Style.roleDoctor
//     if (r === 'patient') return Style.rolePatient
//     if (r === 'admin')   return Style.roleAdmin
//     return ''
//   }

//   const getRoleIcon = (role) => {
//     const r = (role ?? '').toLowerCase()
//     if (r === 'doctor')  return 'fa-solid fa-user-doctor'
//     if (r === 'patient') return 'fa-solid fa-user'
//     if (r === 'admin')   return 'fa-solid fa-shield'
//     return 'fa-solid fa-user'
//   }

//   const getAvatarLetter = (user) =>
//     ((user?.fullName ?? user?.name ?? user?.email ?? '?')[0] ?? '?').toUpperCase()

//   const avatarClasses = [
//     Style.avatar, Style.avatar2, Style.avatar3, Style.avatar4, Style.avatar5,
//   ]

//   const handleViewDetail = (user) => {
//     setSelectedUser(user)
//     setActiveTab('detail')
//   }

//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <div className={Style.wrapper}>
//       <div className={Style.maindiv}>

//         {/* Tabs */}
//         <div className={Style.tabs}>
//           <button
//             className={`${Style.tab} ${activeTab === 'list' ? Style.activeTab : ''}`}
//             onClick={() => setActiveTab('list')}
//           >
//             <i className="fa-solid fa-users"></i> All Users
//           </button>
//           <button
//             className={`${Style.tab} ${activeTab === 'detail' ? Style.activeTab : ''}`}
//             onClick={() => selectedUser && setActiveTab('detail')}
//             disabled={!selectedUser}
//           >
//             <i className="fa-solid fa-user"></i> User Detail
//           </button>
//         </div>

//         {/* ══ Tab: List ══ */}
//         {activeTab === 'list' && (
//           <>
//             <div className={Style.topBar}>
//               <div>
//                 <h2 className={Style.title}>Users Management</h2>
//                 <p className={Style.subtitle}>
//                   {loading
//                     ? 'Loading…'
//                     : `${totalCount} user${totalCount !== 1 ? 's' : ''} found`}
//                 </p>
//               </div>

//               {/* Search */}
//               <div className={Style.searchBox}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//                 <input
//                   type="text"
//                   placeholder="Search users…"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className={Style.searchInput}
//                 />
//                 {searchTerm && (
//                   <button className={Style.clearSearch} onClick={() => setSearchTerm('')}>
//                     <i className="fa-solid fa-xmark"></i>
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Role Filter Pills */}
//             <div className={Style.filterBar}>
//               <div className={Style.rolePills}>
//                 {[
//                   { key: 'all',     label: 'All',      icon: null },
//                   { key: 'doctor',  label: 'Doctors',  icon: 'fa-solid fa-user-doctor' },
//                   { key: 'patient', label: 'Patients', icon: 'fa-solid fa-user' },
//                   { key: 'admin',   label: 'Admins',   icon: 'fa-solid fa-shield' },
//                 ].map(({ key, label, icon }) => (
//                   <button
//                     key={key}
//                     className={`${Style.pill} ${roleFilter === key ? Style.pillActive : ''}`}
//                     onClick={() => setRoleFilter(key)}
//                   >
//                     {icon && <i className={icon}></i>} {label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Error Banner */}
//             {error && (
//               <div className={Style.errorBanner}>
//                 <i className="fa-solid fa-triangle-exclamation"></i> {error}
//                 <button onClick={fetchUsers} className={Style.retryBtn}>
//                   <i className="fa-solid fa-rotate-right"></i> Retry
//                 </button>
//               </div>
//             )}

//             {/* Table */}
//             <div className={Style.tableContainer}>
//               {loading ? (
//                 <div className={Style.loadingWrap}>
//                   <i className="fa-solid fa-spinner fa-spin"></i> Loading users…
//                 </div>
//               ) : (
//                 <table className={Style.table}>
//                   <thead>
//                     <tr className={Style.theadRow}>
//                       <th className={Style.th}>User</th>
//                       <th className={Style.th}>Role</th>
//                       <th className={Style.th}>Email</th>
//                       <th className={Style.th}>Status</th>
//                       <th className={Style.th}>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {!Array.isArray(users) || users.length === 0 ? (
//                       <tr>
//                         <td colSpan={5} className={Style.emptyRow}>
//                           <i className="fa-solid fa-users-slash"></i> No users found.
//                         </td>
//                       </tr>
//                     ) : (
//                       users.map((user, idx) => {
//                         const role = user?.role ?? user?.roles?.[0] ?? 'Unknown'
//                         const isActive =
//                           user?.isActive ??
//                           user?.status?.toLowerCase() === 'active' ??
//                           false

//                         return (
//                           <tr key={user?.id ?? idx} className={Style.tr}>

//                             {/* Name */}
//                             <td className={Style.td}>
//                               <div className={Style.nameCell}>
//                                 <div className={avatarClasses[idx % avatarClasses.length]}>
//                                   {getAvatarLetter(user)}
//                                 </div>
//                                 <div>
//                                   <p className={Style.userName}>
//                                     {user?.fullName ?? user?.name ?? '—'}
//                                   </p>
//                                   <p className={Style.userId}>#{user?.id ?? idx + 1}</p>
//                                 </div>
//                               </div>
//                             </td>

//                             {/* Role */}
//                             <td className={Style.td}>
//                               <span className={`${Style.roleBadge} ${getRoleBadgeClass(role)}`}>
//                                 <i className={getRoleIcon(role)}></i> {role}
//                               </span>
//                             </td>

//                             {/* Email */}
//                             <td className={Style.td}>
//                               <span className={Style.emailCell}>{user?.email ?? '—'}</span>
//                             </td>

//                             {/* Status */}
//                             <td className={Style.td}>
//                               <span className={`${Style.statusBadge} ${isActive ? Style.active : Style.inactive}`}>
//                                 <span className={Style.dot}></span>
//                                 {isActive ? 'Active' : 'Inactive'}
//                               </span>
//                             </td>

//                             {/* Actions */}
//                             <td className={Style.td}>
//                               <div className={Style.actions}>
//                                 <button
//                                   className={Style.actionBtn}
//                                   title="View"
//                                   onClick={() => handleViewDetail(user)}
//                                 >
//                                   <i className="fa-solid fa-eye"></i>
//                                 </button>
//                                 <button
//                                   className={`${Style.actionBtn} ${isActive ? Style.deactivateBtn : Style.activateBtn}`}
//                                   title={isActive ? 'Deactivate' : 'Activate'}
//                                 >
//                                   <i className={`fa-solid ${isActive ? 'fa-ban' : 'fa-circle-check'}`}></i>
//                                 </button>
//                               </div>
//                             </td>

//                           </tr>
//                         )
//                       })
//                     )}
//                   </tbody>
//                 </table>
//               )}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className={Style.pagination}>
//                 <button
//                   className={Style.pageBtn}
//                   disabled={pageNumber === 1}
//                   onClick={() => setPageNumber((p) => p - 1)}
//                 >
//                   <i className="fa-solid fa-chevron-left"></i>
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
//                   <button
//                     key={p}
//                     className={`${Style.pageBtn} ${p === pageNumber ? Style.pageBtnActive : ''}`}
//                     onClick={() => setPageNumber(p)}
//                   >
//                     {p}
//                   </button>
//                 ))}

//                 <button
//                   className={Style.pageBtn}
//                   disabled={pageNumber === totalPages}
//                   onClick={() => setPageNumber((p) => p + 1)}
//                 >
//                   <i className="fa-solid fa-chevron-right"></i>
//                 </button>
//               </div>
//             )}
//           </>
//         )}

//         {/* ══ Tab: User Detail ══ */}
//         {activeTab === 'detail' && selectedUser && (() => {
//           const u        = selectedUser
//           const role     = u?.role ?? u?.roles?.[0] ?? 'Unknown'
//           const isActive = u?.isActive ?? u?.status?.toLowerCase() === 'active' ?? false

//           return (
//             <div className={Style.detailSection}>
//               <button className={Style.backBtn} onClick={() => setActiveTab('list')}>
//                 <i className="fa-solid fa-arrow-left"></i> Back to Users
//               </button>

//               <div className={Style.detailGrid}>

//                 {/* Info Card */}
//                 <div className={Style.detailCard}>
//                   <div className={Style.detailCardHeader}>
//                     <div className={Style.detailIcon}><i className="fa-solid fa-user"></i></div>
//                     <h3 className={Style.detailCardTitle}>User Info</h3>
//                   </div>
//                   <div className={Style.detailRows}>
//                     {[
//                       { label: 'Name',  value: u?.fullName ?? u?.name ?? '—' },
//                       { label: 'User ID', value: `#${u?.id ?? '—'}` },
//                       { label: 'Email', value: u?.email ?? '—' },
//                       { label: 'Phone', value: u?.phoneNumber ?? u?.phone ?? '—' },
//                     ].map(({ label, value }) => (
//                       <div key={label} className={Style.detailRow}>
//                         <span className={Style.detailLabel}>{label}</span>
//                         <span className={Style.detailValue}>{value}</span>
//                       </div>
//                     ))}

//                     <div className={Style.detailRow}>
//                       <span className={Style.detailLabel}>Role</span>
//                       <span className={`${Style.roleBadge} ${getRoleBadgeClass(role)}`}>
//                         <i className={getRoleIcon(role)}></i> {role}
//                       </span>
//                     </div>

//                     <div className={Style.detailRow}>
//                       <span className={Style.detailLabel}>Status</span>
//                       <span className={`${Style.statusBadge} ${isActive ? Style.active : Style.inactive}`}>
//                         <span className={Style.dot}></span>
//                         {isActive ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>

//                     {u?.createdAt && (
//                       <div className={Style.detailRow}>
//                         <span className={Style.detailLabel}>Joined</span>
//                         <span className={Style.detailValue}>
//                           {new Date(u.createdAt).toLocaleDateString('en-US', {
//                             year: 'numeric', month: 'short', day: 'numeric',
//                           })}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Status Control Card */}
//                 <div className={Style.detailCard}>
//                   <div className={Style.detailCardHeader}>
//                     <div className={Style.detailIcon}><i className="fa-solid fa-sliders"></i></div>
//                     <h3 className={Style.detailCardTitle}>Update Status</h3>
//                   </div>
//                   <p className={Style.statusDesc}>
//                     Change this user's account status. Deactivating will block their access immediately.
//                   </p>
//                   <div className={Style.statusBtnsGroup}>
//                     <button className={`${Style.statusGroupBtn} ${Style.statusActivate}`}>
//                       <div className={Style.statusBtnLeft}>
//                         <div className={Style.statusBtnIcon} style={{ background: '#dcfce7', color: '#166534' }}>
//                           <i className="fa-solid fa-circle-check"></i>
//                         </div>
//                         <div>
//                           <p className={Style.statusBtnTitle}>Activate</p>
//                           <p className={Style.statusBtnSub}>Grant full access</p>
//                         </div>
//                       </div>
//                       <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: '#94a3b8' }}></i>
//                     </button>

//                     <button className={`${Style.statusGroupBtn} ${Style.statusDeactivate}`}>
//                       <div className={Style.statusBtnLeft}>
//                         <div className={Style.statusBtnIcon} style={{ background: '#fee2e2', color: '#991b1b' }}>
//                           <i className="fa-solid fa-ban"></i>
//                         </div>
//                         <div>
//                           <p className={Style.statusBtnTitle}>Deactivate</p>
//                           <p className={Style.statusBtnSub}>Block account access</p>
//                         </div>
//                       </div>
//                       <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: '#94a3b8' }}></i>
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           )
//         })()}

//       </div>
//     </div>
//   )
// }


///my code
import React, { useState, useEffect, useCallback } from 'react'
import Style from './AdminUsers.module.css'

const BASE      = 'https://lungcancer.runasp.net/api/Admin'
const USERS_API = `${BASE}/users`
const DOCS_API  = `${BASE}/doctors`

const getToken    = () => localStorage.getItem('token')
const authHeaders = () => ({
  'Content-Type': 'application/json',
  ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
})

// ── resolve ID: userId (GUID) for users, doctorId (int) for doctors ──
const resolveUserId   = (u) => u?.userId   ?? u?.UserId   ?? u?.id   ?? null
const resolveDoctorId = (d) => d?.doctorId ?? d?.DoctorId ?? d?.id   ?? null

// ── extract array from any response shape ──
const extractList = (data) => {
  if (!data) return []
  if (Array.isArray(data)) return data
  const keys = ['users','doctors','data','items','result','results','records','list','content']
  for (const k of keys) if (Array.isArray(data[k])) return data[k]
  if (data.data && typeof data.data === 'object') {
    for (const k of keys) if (Array.isArray(data.data[k])) return data.data[k]
    if (Array.isArray(data.data)) return data.data
  }
  if (typeof data === 'object') return [data]
  return []
}

const extractTotal = (data) => {
  if (!data || Array.isArray(data)) return 0
  return data.totalCount ?? data.total ?? data.totalItems ??
         data.count ?? data.totalRecords ??
         data.data?.totalCount ?? data.data?.total ?? 0
}

export default function AdminUsers() {
  const [activeTab, setActiveTab]       = useState('list')
  const [roleFilter, setRoleFilter]     = useState('all')
  const [selectedUser, setSelectedUser] = useState(null)

  // ── List ──
  const [users, setUsers]           = useState([])
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize]                  = useState(4)
  const [totalCount, setTotalCount] = useState(0)

  // ── Detail ──
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError]     = useState(null)

  // ── Status ──
  const [statusLoading, setStatusLoading] = useState(false)
  const [statusMsg, setStatusMsg]         = useState(null)

  // ── Pending Doctors ──
  const [pendingDocs, setPendingDocs]         = useState([])
  const [pendingLoading, setPendingLoading]   = useState(false)
  const [pendingError, setPendingError]       = useState(null)
  const [approvingId, setApprovingId]         = useState(null)
  const [approveMsg, setApproveMsg]           = useState(null)

  // ════════════════════════════════════════
  // Helpers
  // ════════════════════════════════════════
  const getRoleBadgeClass = (role) => {
    const r = (role ?? '').toLowerCase()
    if (r === 'doctor')  return Style.roleDoctor
    if (r === 'patient') return Style.rolePatient
    if (r === 'admin')   return Style.roleAdmin
    return ''
  }

  const getRoleIcon = (role) => {
    const r = (role ?? '').toLowerCase()
    if (r === 'doctor')  return 'fa-solid fa-user-doctor'
    if (r === 'patient') return 'fa-solid fa-user'
    if (r === 'admin')   return 'fa-solid fa-shield'
    return 'fa-solid fa-user'
  }

  const getAvatarLetter = (user) =>
    ((user?.fullName ?? user?.name ?? user?.email ?? '?')[0] ?? '?').toUpperCase()

  const avatarClasses = [
    Style.avatar, Style.avatar2, Style.avatar3, Style.avatar4, Style.avatar5,
  ]

  // ════════════════════════════════════════
  // 1. GET /users
  // ════════════════════════════════════════
  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({ PageNumber: pageNumber, PageSize: pageSize })
      if (searchTerm)           params.append('SearchTerm', searchTerm)
      if (roleFilter !== 'all') params.append('role', roleFilter)

      const res = await fetch(`${USERS_API}?${params}`, { headers: authHeaders() })
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
      const data = await res.json()

      const list  = extractList(data)
      const total = extractTotal(data)
      setUsers(list)
      setTotalCount(total || list.length)
    } catch (err) {
      setError(err.message)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }, [pageNumber, pageSize, searchTerm, roleFilter])

  useEffect(() => { fetchUsers() }, [fetchUsers])
  useEffect(() => { setPageNumber(1) }, [roleFilter, searchTerm])

  const totalPages = Math.ceil(totalCount / pageSize)

  // ════════════════════════════════════════
  // 2. GET /users/{userId}
  // Response: { success, data: { userId, fullName, email, role, isActive, createdAt } }
  // ════════════════════════════════════════
  const fetchUserDetail = async (uid) => {
    if (!uid) return
    setDetailLoading(true)
    setDetailError(null)
    setStatusMsg(null)
    try {
      const res  = await fetch(`${USERS_API}/${uid}`, { headers: authHeaders() })
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
      const json = await res.json()
      // shape: { success: true, data: { userId, fullName, … } }
      const user = json?.data ?? json?.user ?? json
      setSelectedUser(user)
    } catch (err) {
      setDetailError(err.message)
    } finally {
      setDetailLoading(false)
    }
  }

  const handleViewDetail = async (user) => {
    const uid = resolveUserId(user)
    setSelectedUser(user)     // show list data immediately
    setActiveTab('detail')
    if (uid) {
      await fetchUserDetail(uid)
    } else {
      setDetailError('User ID not found — showing cached data only.')
    }
  }

  // ════════════════════════════════════════
  // 3. PUT /users/{userId}/status
  // Body: { isActive: boolean }
  // ════════════════════════════════════════
  const updateStatus = async (user, newIsActive) => {
    const uid = resolveUserId(user)
    if (!uid) {
      setStatusMsg({ type: 'error', text: 'Cannot update: user ID missing.' })
      return
    }
    setStatusLoading(true)
    setStatusMsg(null)
    try {
      const res = await fetch(`${USERS_API}/${uid}/status`, {
        method:  'PUT',
        headers: authHeaders(),
        body:    JSON.stringify({ isActive: newIsActive }),
      })
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

      setStatusMsg({
        type: 'success',
        text: `User ${newIsActive ? 'activated' : 'deactivated'} successfully.`,
      })
      // update list in-place
      setUsers((prev) =>
        prev.map((u) => resolveUserId(u) === uid ? { ...u, isActive: newIsActive } : u)
      )
      // update detail if open
      if (resolveUserId(selectedUser) === uid) {
        setSelectedUser((prev) => ({ ...prev, isActive: newIsActive }))
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: err.message })
    } finally {
      setStatusLoading(false)
    }
  }

  // ════════════════════════════════════════
  // 4. GET /doctors/pending
  // ════════════════════════════════════════
  const fetchPendingDoctors = useCallback(async () => {
    setPendingLoading(true)
    setPendingError(null)
    try {
      const res  = await fetch(`${DOCS_API}/pending?PageNumber=1&PageSize=50`, { headers: authHeaders() })
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
      const data = await res.json()
      setPendingDocs(extractList(data))
    } catch (err) {
      setPendingError(err.message)
      setPendingDocs([])
    } finally {
      setPendingLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeTab === 'pending') fetchPendingDoctors()
  }, [activeTab, fetchPendingDoctors])

  // ════════════════════════════════════════
  // 5. POST /doctors/{doctorId}/approve
  // doctorId: integer
  // Body: { isApproved: true, rejectionReason: "" }
  // ════════════════════════════════════════
  const approveDoctor = async (doc, isApproved = true, rejectionReason = '') => {
    const did = resolveDoctorId(doc)
    if (!did) {
      setApproveMsg({ type: 'error', text: 'Cannot approve: doctor ID missing.' })
      return
    }
    setApprovingId(did)
    setApproveMsg(null)
    try {
      const res = await fetch(`${DOCS_API}/${did}/approve`, {
        method:  'POST',
        headers: authHeaders(),
        body:    JSON.stringify({ isApproved, rejectionReason }),
      })
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

      setApproveMsg({
        type: 'success',
        text: isApproved ? 'Doctor approved successfully.' : 'Doctor rejected.',
      })
      setPendingDocs((prev) => prev.filter((d) => resolveDoctorId(d) !== did))
    } catch (err) {
      setApproveMsg({ type: 'error', text: err.message })
    } finally {
      setApprovingId(null)
    }
  }

  // ════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════
  return (
    <div className={Style.wrapper}>
      <div className={Style.maindiv}>

        {/* ── Tabs ── */}
        <div className={Style.tabs}>
          <button
            className={`${Style.tab} ${activeTab === 'list' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('list')}
          >
            <i className="fa-solid fa-users"></i> All Users
          </button>

          <button
            className={`${Style.tab} ${activeTab === 'pending' ? Style.activeTab : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            <i className="fa-solid fa-user-clock"></i> Pending Doctors
            {pendingDocs.length > 0 && (
              <span className={Style.pendingBadge}>{pendingDocs.length}</span>
            )}
          </button>

          <button
            className={`${Style.tab} ${activeTab === 'detail' ? Style.activeTab : ''}`}
            onClick={() => selectedUser && setActiveTab('detail')}
            disabled={!selectedUser}
          >
            <i className="fa-solid fa-user"></i> User Detail
          </button>
        </div>

        {/* ══════════════════════════════════════
            Tab: List
        ══════════════════════════════════════ */}
        {activeTab === 'list' && (
          <>
            <div className={Style.topBar}>
              <div>
                <h2 className={Style.title}>Users Management</h2>
                <p className={Style.subtitle}>
                  {loading
                    ? 'Loading…'
                    : `${totalCount} user${totalCount !== 1 ? 's' : ''} found`}
                </p>
              </div>

              <div className={Style.searchBox}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search users…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={Style.searchInput}
                />
                {searchTerm && (
                  <button className={Style.clearSearch} onClick={() => setSearchTerm('')}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Role Pills */}
            <div className={Style.filterBar}>
              <div className={Style.rolePills}>
                {[
                  { key: 'all',     label: 'All',      icon: null },
                  { key: 'doctor',  label: 'Doctors',  icon: 'fa-solid fa-user-doctor' },
                  { key: 'patient', label: 'Patients', icon: 'fa-solid fa-user' },
                  { key: 'admin',   label: 'Admins',   icon: 'fa-solid fa-shield' },
                ].map(({ key, label, icon }) => (
                  <button
                    key={key}
                    className={`${Style.pill} ${roleFilter === key ? Style.pillActive : ''}`}
                    onClick={() => setRoleFilter(key)}
                  >
                    {icon && <i className={icon}></i>} {label}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className={Style.errorBanner}>
                <i className="fa-solid fa-triangle-exclamation"></i> {error}
                <button onClick={fetchUsers} className={Style.retryBtn}>
                  <i className="fa-solid fa-rotate-right"></i> Retry
                </button>
              </div>
            )}

            <div className={Style.tableContainer}>
              {loading ? (
                <div className={Style.loadingWrap}>
                  <i className="fa-solid fa-spinner fa-spin"></i> Loading users…
                </div>
              ) : (
                <table className={Style.table}>
                  <thead>
                    <tr className={Style.theadRow}>
                      <th className={Style.th}>User</th>
                      <th className={Style.th}>Role</th>
                      <th className={Style.th}>Email</th>
                      <th className={Style.th}>Status</th>
                      <th className={Style.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!Array.isArray(users) || users.length === 0 ? (
                      <tr>
                        <td colSpan={5} className={Style.emptyRow}>
                           No users found.
                        </td>
                      </tr>
                    ) : (
                      users.map((user, idx) => {
                        const uid      = resolveUserId(user)
                        const role     = user?.role ?? user?.roles?.[0] ?? 'Unknown'
                        const isActive = user?.isActive ?? false

                        return (
                          <tr key={uid ?? idx} className={Style.tr}>

                            {/* Name */}
                            <td className={Style.td}>
                              <div className={Style.nameCell}>
                                <div className={avatarClasses[idx % avatarClasses.length]}>
                                  {getAvatarLetter(user)}
                                </div>
                                <div>
                                  <p className={Style.userName}>
                                    {user?.fullName ?? user?.name ?? '—'}
                                  </p>
                                  <p className={Style.userId}>
                                    #{uid ? uid.toString().slice(0, 8) : idx + 1}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Role */}
                            <td className={Style.td}>
                              <span className={`${Style.roleBadge} ${getRoleBadgeClass(role)}`}>
                                <i className={getRoleIcon(role)}></i> {role}
                              </span>
                            </td>

                            {/* Email */}
                            <td className={Style.td}>
                              <span className={Style.emailCell}>{user?.email ?? '—'}</span>
                            </td>

                            {/* Status */}
                            <td className={Style.td}>
                              <span className={`${Style.statusBadge} ${isActive ? Style.active : Style.inactive}`}>
                                <span className={Style.dot}></span>
                                {isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className={Style.td}>
                              <div className={Style.actions}>
                                <button
                                  className={Style.actionBtn}
                                  title="View"
                                  onClick={() => handleViewDetail(user)}
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </button>
                                <button
                                  className={`${Style.actionBtn} ${isActive ? Style.deactivateBtn : Style.activateBtn}`}
                                  title={isActive ? 'Deactivate' : 'Activate'}
                                  disabled={statusLoading}
                                  onClick={() => updateStatus(user, !isActive)}
                                >
                                  <i className={`fa-solid ${isActive ? 'fa-ban' : 'fa-circle-check'}`}></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={Style.pagination}>
                <button
                  className={Style.pageBtn}
                  disabled={pageNumber === 1}
                  onClick={() => setPageNumber((p) => p - 1)}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`${Style.pageBtn} ${p === pageNumber ? Style.pageBtnActive : ''}`}
                    onClick={() => setPageNumber(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className={Style.pageBtn}
                  disabled={pageNumber === totalPages}
                  onClick={() => setPageNumber((p) => p + 1)}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )}
          </>
        )}

        {/* ══════════════════════════════════════
            Tab: Pending Doctors
        ══════════════════════════════════════ */}
        {activeTab === 'pending' && (
          <div className={Style.detailSection}>
            <div className={Style.topBar}>
              <div>
                <h2 className={Style.title}>Pending Doctor Approvals</h2>
                <p className={Style.subtitle}>
                  {pendingLoading ? 'Loading…' : `${pendingDocs.length} pending`}
                </p>
              </div>
              <button className={Style.retryBtn} onClick={fetchPendingDoctors}>
                <i className="fa-solid fa-rotate-right"></i> Refresh
              </button>
            </div>

            {approveMsg && (
              <div className={`${Style.errorBanner} ${approveMsg.type === 'success' ? Style.successBanner : ''}`}>
                <i className={`fa-solid ${approveMsg.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}`}></i>
                {' '}{approveMsg.text}
                <button className={Style.clearSearch} onClick={() => setApproveMsg(null)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}

            {pendingError && (
              <div className={Style.errorBanner}>
                <i className="fa-solid fa-triangle-exclamation"></i> {pendingError}
                <button onClick={fetchPendingDoctors} className={Style.retryBtn}>
                  <i className="fa-solid fa-rotate-right"></i> Retry
                </button>
              </div>
            )}

            <div className={Style.tableContainer}>
              {pendingLoading ? (
                <div className={Style.loadingWrap}>
                  <i className="fa-solid fa-spinner fa-spin"></i> Loading pending doctors…
                </div>
              ) : (
                <table className={Style.table}>
                  <thead>
                    <tr className={Style.theadRow}>
                      <th className={Style.th}>Doctor</th>
                      <th className={Style.th}>Email</th>
                      <th className={Style.th}>Specialization</th>
                      <th className={Style.th}>Submitted</th>
                      <th className={Style.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingDocs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className={Style.emptyRow}>
                         No pending approvals.
                        </td>
                      </tr>
                    ) : (
                      pendingDocs.map((doc, idx) => {
                        const did = resolveDoctorId(doc)
                        return (
                          <tr key={did ?? idx} className={Style.tr}>

                            <td className={Style.td}>
                              <div className={Style.nameCell}>
                                <div className={avatarClasses[idx % avatarClasses.length]}>
                                  {getAvatarLetter(doc)}
                                </div>
                                <div>
                                  <p className={Style.userName}>
                                    {doc?.fullName ?? doc?.name ?? '—'}
                                  </p>
                                  <p className={Style.userId}>#{did ?? idx + 1}</p>
                                </div>
                              </div>
                            </td>

                            <td className={Style.td}>
                              <span className={Style.emailCell}>{doc?.email ?? '—'}</span>
                            </td>

                            <td className={Style.td}>
                              <span className={Style.detailValue}>
                                {doc?.specialization ?? doc?.specialty ?? '—'}
                              </span>
                            </td>

                            <td className={Style.td}>
                              <span className={Style.detailValue}>
                                {doc?.createdAt
                                  ? new Date(doc.createdAt).toLocaleDateString('en-US', {
                                      year: 'numeric', month: 'short', day: 'numeric',
                                    })
                                  : '—'}
                              </span>
                            </td>

                            <td className={Style.td}>
                              <div className={Style.actions}>
                                {/* Approve */}
                                <button
                                  className={`${Style.actionBtn} ${Style.activateBtn}`}
                                  title="Approve"
                                  disabled={approvingId === did}
                                  onClick={() => approveDoctor(doc, true, '')}
                                >
                                  {approvingId === did
                                    ? <i className="fa-solid fa-spinner fa-spin"></i>
                                    : <><i className="fa-solid fa-circle-check"></i> Approve</>
                                  }
                                </button>
                                {/* Reject */}
                                <button
                                  className={`${Style.actionBtn} ${Style.deactivateBtn}`}
                                  title="Reject"
                                  disabled={approvingId === did}
                                  onClick={() => {
                                    const reason = window.prompt('Rejection reason (optional):') ?? ''
                                    approveDoctor(doc, false, reason)
                                  }}
                                >
                                  <i className="fa-solid fa-ban"></i> Reject
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════
            Tab: User Detail
        ══════════════════════════════════════ */}
        {activeTab === 'detail' && selectedUser && (() => {
          const u        = selectedUser
          const uid      = resolveUserId(u)
          const role     = u?.role ?? u?.roles?.[0] ?? 'Unknown'
          const isActive = u?.isActive ?? false

          return (
            <div className={Style.detailSection}>
              <button className={Style.backBtn} onClick={() => setActiveTab('list')}>
                <i className="fa-solid fa-arrow-left"></i> Back to Users
              </button>

              {detailLoading && (
                <div className={Style.loadingWrap}>
                  <i className="fa-solid fa-spinner fa-spin"></i> Loading full profile…
                </div>
              )}

              {detailError && (
                <div className={Style.errorBanner}>
                  <i className="fa-solid fa-triangle-exclamation"></i> {detailError}
                  {uid && (
                    <button onClick={() => fetchUserDetail(uid)} className={Style.retryBtn}>
                      <i className="fa-solid fa-rotate-right"></i> Retry
                    </button>
                  )}
                </div>
              )}

              {statusMsg && (
                <div className={`${Style.errorBanner} ${statusMsg.type === 'success' ? Style.successBanner : ''}`}>
                  <i className={`fa-solid ${statusMsg.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}`}></i>
                  {' '}{statusMsg.text}
                  <button className={Style.clearSearch} onClick={() => setStatusMsg(null)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              )}

              <div className={Style.detailGrid}>

                {/* Info Card */}
                <div className={Style.detailCard}>
                  <div className={Style.detailCardHeader}>
                    <div className={Style.detailIcon}><i className="fa-solid fa-user"></i></div>
                    <h3 className={Style.detailCardTitle}>User Info</h3>
                  </div>
                  <div className={Style.detailRows}>
                    {[
                      { label: 'Name',    value: u?.fullName ?? u?.name ?? '—' },
                      { label: 'User ID', value: uid ?? '—' },
                      { label: 'Email',   value: u?.email ?? '—' },
                     
                    ].map(({ label, value }) => (
                      <div key={label} className={Style.detailRow}>
                        <span className={Style.detailLabel}>{label}</span>
                        <span className={Style.detailValue}>{value}</span>
                      </div>
                    ))}

                    <div className={Style.detailRow}>
                      <span className={Style.detailLabel}>Role</span>
                      <span className={`${Style.roleBadge} ${getRoleBadgeClass(role)}`}>
                        <i className={getRoleIcon(role)}></i> {role}
                      </span>
                    </div>

                    <div className={Style.detailRow}>
                      <span className={Style.detailLabel}>Status</span>
                      <span className={`${Style.statusBadge} ${isActive ? Style.active : Style.inactive}`}>
                        <span className={Style.dot}></span>
                        {isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>

                    {u?.createdAt && (
                      <div className={Style.detailRow}>
                        <span className={Style.detailLabel}>Joined</span>
                        <span className={Style.detailValue}>
                          {new Date(u.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'short', day: 'numeric',
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Control Card */}
                <div className={Style.detailCard}>
                  <div className={Style.detailCardHeader}>
                    <div className={Style.detailIcon}><i className="fa-solid fa-sliders"></i></div>
                    <h3 className={Style.detailCardTitle}>Update Status</h3>
                  </div>
                  <p className={`${Style.statusDesc} pb-5 font-semibold text-sm`}>
                    Change this user's account status. Deactivating will block their access immediately.
                  </p>
                  <div className={Style.statusBtnsGroup}>

                    <button
                      className={`${Style.statusGroupBtn} ${Style.statusActivate}`}
                      disabled={statusLoading || isActive || !uid}
                      onClick={() => updateStatus(u, true)}
                    >
                      <div className={Style.statusBtnLeft}>
                        <div className={Style.statusBtnIcon} style={{ background: '#dcfce7', color: '#166534' }}>
                          {statusLoading
                            ? <i className="fa-solid fa-spinner fa-spin"></i>
                            : <i className="fa-solid fa-circle-check"></i>}
                        </div>
                        <div>
                          <p className={Style.statusBtnTitle}>Activate</p>
                          <p className={Style.statusBtnSub}>Grant full access</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: '#94a3b8' }}></i>
                    </button>

                    <button
                      className={`${Style.statusGroupBtn} ${Style.statusDeactivate}`}
                      disabled={statusLoading || !isActive || !uid}
                      onClick={() => updateStatus(u, false)}
                    >
                      <div className={Style.statusBtnLeft}>
                        <div className={Style.statusBtnIcon} style={{ background: '#fee2e2', color: '#991b1b' }}>
                          {statusLoading
                            ? <i className="fa-solid fa-spinner fa-spin"></i>
                            : <i className="fa-solid fa-ban"></i>}
                        </div>
                        <div>
                          <p className={Style.statusBtnTitle}>Deactivate</p>
                          <p className={Style.statusBtnSub}>Block account access</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem', color: '#94a3b8' }}></i>
                    </button>

                  </div>
                </div>

              </div>
            </div>
          )
        })()}

      </div>
    </div>
  )
}