import React from 'react';

// STYLESHEET
import './Header.css';

// COMPONENT
import FullScreenMenuButton from '../FullScreenMenu/FullScreenMenuButton';

function Header(props) {

    let logo = 'JQ';
    let headerClass = 'header-main';
    let headerNavClass = 'header-nav';

    if(props.fsMenuShow) {
        // headerClass = 'header-main open';
        headerNavClass = 'header-nav open';
    }

    return(
        <header className={headerClass}>
            <nav className={headerNavClass}>
                <div className='header-hamburger'>
                    <FullScreenMenuButton 
                        fsMenuShow={props.fsMenuShow} 
                        fsMenuToggleClickHandler={props.fsMenuToggleClickHandler}
                    />
                </div>
                <div className='header-logo'><a href="index.html">{logo}</a></div>
                <div className='header-spacer'></div>
                <div className='header-nav-items'>
                    <ul>
                        <li><a href="#" onClick={() => {props.goToPage(0)}}>HOME</a></li>
                        <li><a href="#" onClick={() => {props.goToPage(1)}}>ABOUT</a></li>
                        <li><a href="#" onClick={() => {props.goToPage(2)}}>RESUME</a></li>
                        <li><a href="#" onClick={() => {props.goToPage(3)}}>PROJECTS</a></li>
                        <li><a href="#" onClick={() => {props.goToPage(4)}}>CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;