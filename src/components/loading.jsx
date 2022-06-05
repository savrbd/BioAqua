import React from 'react';

const Loading = () => {
    return (  
        <div className="text-center m-5">
        <h5 className = "text-success" >Loading </h5>
        <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
}
 
export default Loading;