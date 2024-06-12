import "./AppModal.css";

export default function AppModal({ children, open, setOpen }) {
  return (
    <div
      className={open ? "modal-container open" : "modal-container"}
      onClick={() => setOpen(false)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
