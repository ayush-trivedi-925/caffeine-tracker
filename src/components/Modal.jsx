import { Children } from "react";
import ReactDom from "react-dom";
export default function Modal({ children, handleCloseModal }) {
  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay" />
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
