export default function Authentication() {
  return (
    <>
      <h2 className="sign-up-text">Sign In / Login</h2>
      <p>Sign in to your account!</p>
      <input placeholder="example@gmail.com" />
      <input type="password" placeholder="********" />
      <button>
        <p>Submit</p>
      </button>
      <div className="register-content">
        <p>Don&apos;t have an account</p>
        <button>
          <p>Sign up</p>
        </button>
      </div>
    </>
  );
}
