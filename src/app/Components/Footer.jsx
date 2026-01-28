
export default function Footer() {
  return (
    <footer style={{
      background: "var(--royal-ink)",
      padding: "3rem 0",
      color: "var(--royal-pearl)"
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              © {new Date().getFullYear()} Cuts & Grooves
            </span>
          </div>
          <div className="col-md-6 text-md-end">
            <span style={{ color: "var(--royal-gold)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
              Interior Design & Construction Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
