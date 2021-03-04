import React from 'react';
import './404.css'
import Btn from './Btn';

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
            <Btn text="Go Home" href="/"/>
        </div>
    )
}

export default NotFound;