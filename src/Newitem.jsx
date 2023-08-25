import React from 'react';
import './Newitem.scss'

class Newitem extends React.Component{
    render(){
        return(
            <div className="new">
                <div className="new_wrapper">
                    <img src="src/svg/newSofa.png" alt="" className="new_img" />
                    <div className="new_con">
                        <p className="new_con_txt">New Arrivals</p>
                        <h1 className="new_con_main">Asgaard sofa</h1>
                        <div className='new_con_link'><a href="" className="new_con_link_txt">
                            Order Now
                        </a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newitem