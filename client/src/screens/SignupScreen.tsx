
const SignupScreen = () => {
  return (
<div className="container">
  <div className="form-container">
    <div className="form-content">
      <i className="fas fa-user-circle profile-img logo"></i>
      <h2 className="title">Sign Up</h2>
      <form action="#" method="POST" className="login-form">
        <input type="text" name="username" placeholder="Username" required className="input-field" />
        <input type="email" name="email" placeholder="Email" required className="input-field" />
        <input type="password" name="password" placeholder="Password" required className="input-field" />
        <button type="submit" className="btn-login">Sign Up</button>
      </form>
      <p className="signup-text">Already have an account? <a href="login.html">Log In</a></p>
    </div>
  </div>
</div>
  )
}

export default SignupScreen;
