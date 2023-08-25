import React from 'react';
import './Inst.scss'

class Inst extends React.Component{
    render(){
        return(
            <div className="inst">
                <div className="inst_wrapper">
                    <h1 className="inst_main">Our Instagram</h1>
                    <p className="inst_txt">Follow our store on Instagram</p>
                    <a href="" className="inst_link"><p className="inst_link_con">Follow Us</p></a>
                </div>
            </div>
            
        )
    }
}

export default Inst