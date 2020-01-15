import React from 'react';

// STYLESHEET
import './FullScreenMenuClose.css';

function FullScreenMenuClose(props) {
    return(
        <button className='fs-menu-close' onClick={props.fsMenuCloseClickHandler}>
            <div className='fs-menu-close-line-1'></div>
            <div className='fs-menu-close-line-2'></div>
        </button>
    );
}

export default FullScreenMenuClose;