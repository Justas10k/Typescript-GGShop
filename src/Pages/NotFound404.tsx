import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <h1>Not found</h1>
      <h2>404</h2>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NotFound404;
