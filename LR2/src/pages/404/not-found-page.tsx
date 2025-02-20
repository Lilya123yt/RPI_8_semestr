import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(): React.ReactElement {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404 - Page Not Found</h1>
            <p className="not-found__text">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="not-found__link">Go back to Home</Link>
        </div>
    );
}

export default NotFoundPage;
