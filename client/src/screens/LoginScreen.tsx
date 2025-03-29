import { FormEvent, useState } from "react";
import AlertPanelComponent from "../components/AlertPanelComponent";
import { useNavigate } from "react-router-dom";

interface Alert {
  show: boolean;
  message: string;
  type: string; // 'success', 'error', 'info'
}

const LoginScreen = () => {

  const navigate = useNavigate();

  const [alert, setAlert] = useState<Alert>({
    show: false,
    message: '',
    type: '', // 'success', 'error', 'info'
  });

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        setAlert({
          show: true,
          message: data.message || 'Login successful!',
          type: 'success',
        });

        setTimeout(() => {
          navigate("/");  // Navigate to the homepage
        }, 2000);
      } else {
        // Handle invalid credentials or other errors
        setAlert({
          show: true,
          message: data.message || 'An error occurred!',
          type: 'error',
        });

        setTimeout(() => {
          (e.target as HTMLFormElement).reset();
          window.location.href = '/login';
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setAlert({
        show: true,
        message: 'Server error occurred. Please try again later.',
        type: 'error',
      });
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        window.location.href = '/login';
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="form-container">

        {alert.show && (
          <AlertPanelComponent
            backgroundColor={alert.type === 'success' ? '#d4edda' : '#f8d7da'}
            content={alert.message}
          />)}

        <div className="form-content">
          <i className="fas fa-user-circle profile-img logo"></i>
          <h2 className="title">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required className="input-field" />
            <input type="password" name="password" placeholder="Password" required className="input-field" />
            <button type="submit" className="btn-login">Login</button>
          </form>
          <p className="signup-text">Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;