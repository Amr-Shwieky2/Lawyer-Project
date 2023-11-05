import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <p className="not-found">Page Not Found</p>
            <Link to={`/`} className="btn back-btn">Back</Link>

        </>
    )
}

export default NotFound