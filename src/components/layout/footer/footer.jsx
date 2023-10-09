import "./footer.css";

export default function Footer() {
  return (
    <div className="copyright">
      <div className="copy">
        <label htmlFor="text">
          © Copyright <b>Arsha.</b> All Rights Reserved
        </label>
      </div>
      <div className="designed">
        <label htmlFor="text">
          Designed by <span style={{ color: "#47b2e4" }}>BootstrapMade</span>
        </label>
      </div>
    </div>
  );
}
