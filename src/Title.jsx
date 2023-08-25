import React from 'react';
import  './Title.scss'

class Title extends React.Component{
    render(){
        return(
            <div className="title">
                <div className="title_wrapper">
                    <div className="title_con">
                        <img src="src/svg/Logo.png" alt="" className="title_con_img" />
                        <h1 className="title_con_main">Shop</h1>
                        <div className="title_con_links">
                            <a href="" className="title_con_links_link">Home</a>
                            <p className="title_con_links_more">→</p>
                            <a href="" className="title_con_links_link">Shop</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title