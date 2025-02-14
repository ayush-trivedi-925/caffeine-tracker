import { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";
export default function Layout({ children }) {
  const [modalState, setModalState] = useState(false);
  const handleCloseModal = () => {
    return setModalState(false);
  };
  const { globalUser, logout } = useAuth();
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">Caffeine Tracker</h1>
        <p>For Coffee Insatiates</p>
      </div>
      {!globalUser ? (
        <button onClick={() => setModalState(true)}>
          <p>Sign up free</p>
          <FaMugHot />
        </button>
      ) : (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      )}
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffeine Tracker</span> was made by
        Ayush Trivedi.
        <br />
        Checkout the project on{" "}
        <a
          className="text-gradient"
          href="https://github.com/ayush-trivedi-925/caffeine-tracker"
        >
          Github
        </a>
        !
      </p>
    </footer>
  );
  return (
    <>
      {modalState && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}

      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
