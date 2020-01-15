import React from 'react';

// STYLESHEET
import './Btn3d.scss';

// const btnType = 'button';
// const btnType = 'anchor';
// const btnType = 'inputButton';
// const btnType = 'inputSubmit';
// const btnValue = 'EXPLORE';

{/* <Btn3d 
    btnType={btnType} 
    btnValue={btnValue} 
/> */}

const openLink = (btn, link) => {
    // console.log("OPEN THE GATE! " + btn);
    // console.log("GATE LINK " + link);
    // () => window.open(props.projectLink, "_blank")

    if(btn === 'button') {
        window.open(link, "_blank")
    }
}

const Btn3d = (props) => {

    // console.log("BUTTON TYPE IS: " + props.btnType);
    // console.log("BTN3D PROJECT LINK: " + props.projectLink);

    let btn;

    if(props.btnType === 'button') {
        btn = <button className="btn3d">{props.btnValue}</button>;
    } else if(props.btnType === 'anchor') {
        btn = <a href="#" className="btn3d">{props.btnValue}</a>;
    } else if(props.btnType === 'inputButton') {
        btn = <input className="btn3d" type='button' value={props.btnValue}/>;
    } else if(props.btnType === 'inputSubmit') {
        btn = <input className="btn3d" type='submit' value={props.btnValue}/>;
    }

    return(
        <div 
            className='btn-3d' 
            onClick={() => {
                // console.log("HAHA: " + props.projectLink);
                // console.log("HAHA: " + props.btnType);
                openLink(props.btnType, props.projectLink);
            }
        }>
            {btn}
        </div>
    );
}

export default Btn3d;