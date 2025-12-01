import React from 'react';
import { Link } from 'react-router-dom'; 

const ConfirmationPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Thank You for Signing Up!</h1>
      <p style={styles.message}>
        We’ve sent a confirmation email to your inbox. Please check your email and click the confirmation link to activate your account.
      </p>
      <Link to="/signin" style={styles.link}>
        Go to Sign In
      </Link>
      <button className="btn btn-primary mb-4"  onClick={resendEmail}>
        Resend Confirmation Email
      </button>
    </div>
  );
};

const resendEmail = () => {
  alert('A new confirmation email has been sent.');
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  message: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
    marginBottom: '12px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    // backgroundColor: '#007bff',
    
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ConfirmationPage;