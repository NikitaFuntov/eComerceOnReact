import React from 'react';
import { useState, useEffect } from 'react'
import './Tfurn.scss'

class Tfurn extends React.Component{
    render(){
        return(
            <div className="tfurn">
                <div className="tfurn_wrapper">
                    <div className="tfurn_obj1">
                        <img src="src/svg/stol.svg" alt="" className="tfurn_obj1_img" />
                        <p className="tfurn_obj1_name">Side table</p>
                        <a href="" className="tfurn_obj1_link">Wiew more</a>
                    </div>
                    <div className="tfurn_obj2">
                        <img src="src/svg/armchair.svg" alt="" className="tfurn_obj2_img" />
                        <p className="tfurn_obj2_name">Soft armchairs</p>
                        <a href="" className="tfurn_obj2_link">Wiew more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tfurn