import React from 'react';

// STYLESHEET
import './FullScreenMenu.css';

// COMPONENT
// import FullScreenMenuClose from './FullScreenMenuClose';

// COMPONENT
import { Link } from 'react-scroll';

function FullScreenMenu(props) {
    
    let fsMenuClass = 'fs-menu-nav';
    // let fullScreenMenuClose;

    if(props.fsMenuShow) {
        fsMenuClass = 'fs-menu-nav open';
        // fullScreenMenuClose = <FullScreenMenuClose fsMenuCloseClickHandler={props.fsMenuCloseClickHandler}/>;
    }

    const menu = [
        { item: 'HOME', item2: 'home' },
        { item: 'PROJECTS', item2: 'projects' },
        { item: 'ABOUT', item2: 'about' },
        { item: 'RESUME', item2: 'work-exp' },
        { item: 'CONTACT', item2: 'contact' }
    ];

    const menuItems = menu.map((item, i) =>  
        // console.log("ITEMS: " + item.item + " " + i)
        // <li key={i}><a href="#"><span data-hover={item.item}>{item.item}</span></a></li>
        <Link 
            to={`main-content-${item.item2}`}
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={800}
            key={i}
        >
            <li onClick={props.fsMenuToggleClickHandler}><span data-hover={item.item}>{item.item}</span></li>
        </Link>
    );

    return(
        <nav className={fsMenuClass}>
            <div className='fs-menu-nav-bg bg-dark-3'>
                <div className='fs-menu-nav-items'>
                    <ul onClick={props.fsMenuToggleClickHandler}>
                        {menuItems}
                    </ul>
                </div>
            </div>
            
            {/* {fullScreenMenuClose} */}
        </nav>
    );
}

export default FullScreenMenu;