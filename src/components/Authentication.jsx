import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Authentication({ handleCloseModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState(null);

  const { signUp, login } = useAuth();

  async function handleAuthentication() {
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 5 ||
      isAuthenticating
    ) {
      return;
    }

    try {
      setIsAuthenticating(true);
      setError(null);
      if (isRegistered) {
        // Login
        await login(email, password);
      } else {
        //Sign Up
        await signUp(email, password);
      }
      handleCloseModal();
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      <h2 className="sign-up-text">{isRegistered ? "Login" : "Sign Up"}</h2>
      {error && <p>❌{error}</p>}
      <p>{isRegistered ? "Login to your account!" : "Create an account!"}</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="********"
      />
      <button onClick={handleAuthentication}>
        <p>{isAuthenticating ? "Authenticating..." : "Submit"}</p>
      </button>

      <div className="register-content">
        <p>
          {isRegistered ? "Don't have an account?" : "Already have an account?"}
        </p>
        <button onClick={() => setIsRegistered((prev) => !prev)}>
          <p>{isRegistered ? "Sign Up" : "Login"}</p>
        </button>
      </div>
    </>
  );
}
