import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Maple & Mug Café. All rights reserved.
      </p>
      <div style={{ marginTop: "10px" }}>
        <Link
          to="/admin"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "0.8rem",
            opacity: "0.7",
          }}
        >
          Staff Management Portal
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
