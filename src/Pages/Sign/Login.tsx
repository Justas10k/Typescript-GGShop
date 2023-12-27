import { AuthForm } from "../../Components/AuthForm";
import "../../Styles/Sign.css";
import { Link } from "react-router-dom";
function LogIn() {
  const { email, setEmail, password, setPassword } = AuthForm();

  return (
    <div className="UserSign">
      <div className="UserSign-container">
        <div className="UserSign-container-bot">
          <form className="form-sign">
            <h3>Welcome Back</h3>

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
              Don't have an account?{" "}
              <Link className="mini-link" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
