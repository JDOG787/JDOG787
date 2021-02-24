import React from 'react';
import './404.css'

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1><em>404 - Not Found</em></h1>
            <div className="not-found-code">
                <pre>
                    {`
                    if (page.notFound()) {
                        return 404;
                    }
                    `}
                </pre>
            </div>
            <a href="/">
                <div className="btn">Go Home</div>
            </a>
        </div>
    )
}

export default NotFound;