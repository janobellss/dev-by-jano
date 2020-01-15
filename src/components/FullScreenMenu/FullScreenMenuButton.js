import React from 'react';

// STYLESHEET
import './FullScreenMenuButton.css';

function FullScreenMenuButton(props) {

    let fsMenuButtonClass = 'fs-menu-button';
    let txt = 'MENU';

    if(props.fsMenuShow) {
        fsMenuButtonClass = 'fs-menu-button open';
        txt = 'CLOSE';
    }

    const txtStyle = {
        letterSpacing: '0.2rem'
    }

    const lineStyle = {
        width: 35,
        height: 35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

    return(
        <button className={fsMenuButtonClass} onClick={props.fsMenuToggleClickHandler}>
            <div style={txtStyle} className='title'>{txt}</div>
            <div style={lineStyle}>
                <div className='fs-menu-button-line-1'></div>
                <div className='fs-menu-button-line-2'></div>
                <div className='fs-menu-button-line-3'></div>
            </div>
        </button>
    );
}

export default FullScreenMenuButton;