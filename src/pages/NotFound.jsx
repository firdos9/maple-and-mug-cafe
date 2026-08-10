import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="not-found"
    style={{ textAlign: "center", padding: "var(--spacing-8)" }}
  >
    <h1>404</h1>
    <p>The page you are looking for doesn't exist.</p>
    <Link to="/">Return Home</Link>
  </div>
);
export default NotFound;
