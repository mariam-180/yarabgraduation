import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://lungcancer.runasp.net/api/Auth/forgot-password';

export default function ForgotPassword() {
  const [email, setEmail]     = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email address.'); return; }
    setLoading(true);
    setError('');
    try {
      await axios.post(API_URL, { email });
      setSuccess(true);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.title   ||
        'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <aside className={styles.promo}>
          <div className={styles.promoIcon}>
            <i className="fa-solid fa-lock-open"></i>
          </div>
          <h3 className={styles.promoTitle}>Forgot Your Password?</h3>
          <p className={styles.promoText}>
            No worries — it happens to the best of us. Enter your registered email
            address and we'll send you a link to reset your password securely.
          </p>
        </aside>

        <div className={styles.card}>
          {!success ? (
            <>
              <div className={styles.iconWrap}>
                <i className="fa-solid fa-envelope-circle-check"></i>
              </div>
              <h2 className={styles.title}>Reset Password</h2>
              <p className={styles.subtitle}>
                Enter your email and we'll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.group}>
                  <label>Email Address</label>
                  <div className={styles.inputWrap}>
                    <i className="fa-solid fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError(''); }}
                      className={error ? styles.inputError : ''}
                    />
                  </div>
                  {error && (
                    <p className={styles.errorMsg}>
                      <i className="fa-solid fa-circle-exclamation"></i> {error}
                    </p>
                  )}
                </div>

                <button className={styles.btn} type="submit" disabled={loading}>
                  {loading
                    ? <><i className="fa-solid fa-spinner fa-spin"></i> Sending…</>
                    : <><i className="fa-solid fa-paper-plane"></i> Send Reset Link</>
                  }
                </button>
              </form>

              <p className={styles.switch}>
                Remembered it?{' '}
                <Link to="/login"><span className={styles.link}>Back to Login</span></Link>
              </p>
            </>
          ) : (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h2 className={styles.title}>Check Your Email</h2>
              <p className={styles.subtitle}>
                We've sent a password reset link to <strong>{email}</strong>.
                Check your inbox and follow the instructions.
              </p>
              <Link to="/login">
                <button className={styles.btn}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Login
                </button>
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}