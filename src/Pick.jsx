import React from 'react';
import { useState, useEffect } from 'react'
import './Pick.scss'

class Pick extends React.Component{
    render(){
        return(
            <div className="pick">
                <div className="pick_wrapper">
                    <div className="pick_txt">
                        <p className="pick_txt_main">
                        Top Picks For You
                        </p>
                        <p className="pick_txt_sec">
                        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
                        </p>
                    </div>
                    <div className="pick_cards">
                        <a href="" className="pick_cards_card" id='card1'>
                            <img src="src/svg/sofa.svg" alt="" className="pick_cards_card_img" />
                            <p className="pick_cards_card_text">Trenton modular sofa_3</p>
                            <p className="pick_cards_card_price">Rs. 25,000.00</p>
                        </a>
                        <a href="" className="pick_cards_card" id='card2'>
                            <img src="src/svg/chairs.svg" alt="" className="pick_cards_card_img" />
                            <p className="pick_cards_card_text">Granite dining table with dining chair</p>
                            <p className="pick_cards_card_price">Rs. 25,000.00</p>
                        </a>
                        <a href="" className="pick_cards_card" id='card3'>
                            <img src="src/svg/barchairs.svg" alt="" className="pick_cards_card_img" />
                            <p className="pick_cards_card_text">Outdoor bar table and stool</p>
                            <p className="pick_cards_card_price">Rs. 25,000.00</p>
                        </a>
                        <a href="" className="pick_cards_card" id='card4'>
                            <img src="src/svg/lavachka.svg" alt="" className="pick_cards_card_img" />
                            <p className="pick_cards_card_text">Plain console with teak mirror</p>
                            <p className="pick_cards_card_price">Rs. 25,000.00</p>
                        </a>
                    </div>
                    <a href="" className="pick_more" style={{textDecoration:"none",color:"black"}}>View More</a>
                </div>
            </div>
        )
    }
}


export default Pick