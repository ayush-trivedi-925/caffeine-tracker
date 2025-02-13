import { FaMugHot } from "react-icons/fa";
export default function Layout({ children }) {
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">Caffeine Tracker</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up free</p>
        <FaMugHot />
      </button>
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffeine Tracker</span> was made by
        Ayush Trivedi.
        <br />
        Checkout the project on{" "}
        <a href="https://github.com/ayush-trivedi-925/caffeine-tracker">
          Github
        </a>
        !
      </p>
    </footer>
  );
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
