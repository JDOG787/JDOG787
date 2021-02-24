import React from 'react';
import './404.css'

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <pre><code className="not-found-code">
                if (page.notFound()) {
                    return 404;
                }
            </code>
            </pre>
        </div>
    )
}

export default NotFound;