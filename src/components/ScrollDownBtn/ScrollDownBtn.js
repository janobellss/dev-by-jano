import React, { useRef } from 'react';

// STYLESHEET
import './ScrollDownBtn.css';

// COMPONENT
import { Link } from 'react-scroll';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollDownBtn = () => {

    let scrollBtn_el = useRef(null);

    const scrollBtnClick = () => {
        // setAllowScrollBtn(false);
    }

    const scrollBtnStyle = {
        // opacity: allowScrollBtn ? 1 : 0,
        // visibility: allowScrollBtn ? 'visible' : 'hidden'
    }

    return(
        <div className='scroll-down-btn-wrapper'>
            <Link 
                to="main-content-projects"
                spy={true}
                smooth={true}
                offset={0}
                duration= {800} 
                onClick={scrollBtnClick}
            >
                <button ref={el => {scrollBtn_el = el}} className='scroll-down-btn' style={scrollBtnStyle}>
                    <div className='scroll-down-btn-arrow'>
                        {/* <FontAwesomeIcon icon={['fas','chevron-down']} /> */}
                        {/* <div className='scroll-down-btn-line-1'></div> */}
                        {/* <div className='scroll-down-btn-line-2'></div> */}
                    </div>
                </button>
            </Link>
        </div>
    );
}

export default ScrollDownBtn;