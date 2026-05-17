import React, { useEffect, useState } from 'react';
import Style from './Appointments.module.css';

const API_URL =
  'https://lungcancer.runasp.net/api/Doctor/appointments?PageNumber=1&PageSize=10';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const result = await response.json();

      console.log('API RESPONSE:', result);

      // IMPORTANT
      // appointments array exists here:
      // result.data.items

      if (
        result &&
        result.data &&
        Array.isArray(result.data.items)
      ) {
        setAppointments(result.data.items);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load appointments');
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.maindiv}>

        <div className={Style.topBar}>
          <div>
            <h2 className={Style.title}>Appointments</h2>

            <p className={Style.subtitle}>
              Total: {appointments.length}
            </p>
          </div>

          <button
            className={Style.refreshBtn}
            onClick={fetchAppointments}
          >
            Refresh
          </button>
        </div>

        {/* LOADING */}
        {loading && (
          <div className={Style.messageBox}>
            Loading appointments...
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className={Style.errorBox}>
            {error}
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          !error &&
          appointments.length === 0 && (
            <div className={Style.messageBox}>
              No appointments found
            </div>
          )}

        {/* APPOINTMENTS */}
        {!loading &&
          !error &&
          appointments.length > 0 && (
            <div className={Style.cards}>
              {appointments.map((appointment, index) => (
                <div
                  className={Style.card}
                  key={appointment.id || index}
                >
                  <div className={Style.cardTop}>

                    <div className={Style.avatar}>
                      {appointment.patientName
                        ? appointment.patientName.charAt(0)
                        : 'P'}
                    </div>

                    <span className={Style.statusBadge}>
                      {appointment.status || 'Unknown'}
                    </span>
                  </div>

                  <h3 className={Style.patientName}>
                    {appointment.patientName || 'No Name'}
                  </h3>

                  <p className={Style.patientType}>
                    {appointment.appointmentType ||
                      'Appointment'}
                  </p>

                  <div className={Style.divider}></div>

                  <div className={Style.cardInfo}>
                    <div className={Style.infoItem}>
                      <strong>Date:</strong>

                      <span>
                        {appointment.date || 'No Date'}
                      </span>
                    </div>

                    <div className={Style.infoItem}>
                      <strong>Time:</strong>

                      <span>
                        {appointment.time || 'No Time'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}