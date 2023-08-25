import React from 'react';
import { useState, useEffect } from 'react'
import './Intro.scss'


function Intro() {
    return(
        <>
        <div className="intro">
            <div className="intro_wrapper">
                <div className="intro_text">
                    <h1 className="intro_text_main">
                        Rocket single seater
                    </h1>
                    <a href='' className="intro_text_but" style={{textDecoration:"none",color:'black'}}>Shop Now</a>
                </div>
                <div className="intro_image ">
                    <img src="src/svg/chair.svg" alt="" className="intro_image_img animate__animated animate__fadeInLeft" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro