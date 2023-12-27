import { AuthForm } from "../../Components/AuthForm";
import "../../Styles/Sign.css";
import { Link } from "react-router-dom";

function Register() {
  const { username, setUsername, email, setEmail, password, setPassword } =
    AuthForm();

  return (
    <div className="UserSign">
      <div className="UserSign-container">
        <div className="UserSign-container-bot">
          <form className="form-sign">
            <h3>Register</h3>

            <label className="sing-label">Username:</label>
            <input
              type="text"
              className="sign-input"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label className="sing-label">Gmail:</label>
            <input
              type="email"
              className="sign-input"
              value={email}
              placeholder="Username@gmail.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="sing-label">Password:</label>
            <input
              type="password"
              className="sign-input"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="sign-button" type="submit">
              Register
            </button>
            <p className="mini-text">
              Already have an account?{" "}
              <Link className="mini-link" to="/login">
                Log in here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
