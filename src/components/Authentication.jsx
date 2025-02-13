import { useState } from "react";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  return (
    <>
      <h2 className="sign-up-text">{isRegistered ? "Login" : "Sign Up"}</h2>
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
      <button>
        <p>Submit</p>
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
