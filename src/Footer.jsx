import React from 'react';
import './Footer.scss'
import { useState, useEffect } from 'react'



function Footer(){

        return(
            <div className="footer">
                <div className="footer_wrapper">
                    <p className="footer_loc">400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>

                    <ul className="footer_links">
                        <li className="footer_links_link"><a href="">Home</a></li>
                        <li className="footer_links_link"><a href="shop.html">Shop</a></li>
                        <li className="footer_links_link"><a href="">About</a></li>
                        <li className="footer_links_link"><a href="">Contact</a></li>
                    </ul>
                    <ul className="footer_help">
                        <li className="footer_help_link"><a href="">Payment Options</a></li>
                        <li className="footer_help_link"><a href="">Returns</a></li>
                        <li className="footer_help_link"><a href="">Privacy Pollicies</a></li>
                    </ul>
                    <form className="footer_form" method='POST'>
                        <input id="name" type="text" name="email" ></input>
                        <input id="submit" type="submit" value="Save" name='send'></input>
                    </form>
                </div>
            </div>
        )
}

export default Footer