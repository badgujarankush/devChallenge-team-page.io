import React from 'react';
import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';
import photo5 from '../images/photo5.png';
import photo6 from '../images/photo6.png';

import '../components/Card.css';
function Card(props){
    var imgTemp = "";
    if(props.photo === "photo1"){
        imgTemp = photo1;
    }
    else if(props.photo === "photo2"){
        imgTemp = photo2;
    }
    else if(props.photo === "photo3"){
        imgTemp = photo3;
    }
    else if(props.photo === "photo4"){
        imgTemp = photo4;
    }
    else if(props.photo === "photo5"){
        imgTemp = photo5;
    }
    else{
        imgTemp = photo6;
    }
        
    return (
        <div className='Card'>
            <div className='header'>
            <img src={imgTemp} alt='{props.photo}'/>
            <h3 className='designation'>{props.designation}</h3>
            </div>
            
            <h3 className='name'>{props.name}</h3>
        </div>
    );
}

export default Card;
