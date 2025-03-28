
const LoginScreen = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <i className="fas fa-user-circle profile-img logo"></i>
          <h2 className="title">Login</h2>
          <form action="#" method="POST" className="login-form">
            <input type="email" name="email" placeholder="Email" required className="input-field" />
            <input type="password" name="password" placeholder="Password" required className="input-field" />
            <button type="submit" className="btn-login">Login</button>
          </form>
          <p className="signup-text">Don't have an account? <a href="signup.html">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;