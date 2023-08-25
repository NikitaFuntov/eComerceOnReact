import React from 'react';
import { useState } from 'react'
import './Bar.scss'

function Bar() {

  return (
    <>
      <div className="bar">
        <div className="bar_wrapper">
          <div className="bar_links">
            <a href="" className="bar_links_home">Home</a>
            <a href="shop.html" className="bar_links_shop">Shop</a>
            <a href="" className="bar_links_about">About</a>
            <a href="" className="bar_links_contact">Contact</a>
          </div>
          <div className="bar_icons">
            <a href="" className="bar_icons_user"><img src="src/svg/user.svg" alt="" style={{width:"20px"}}/></a>
            <a href="" className="bar_icons_search"><img src="src/svg/search.svg" alt="" style={{width:"20px"}}/></a>
            <a href="" className="bar_icons_favorite"><img src="src/svg/favorite.svg" alt="" style={{width:"20px"}}/></a>
            <a href="" className="bar_icons_cart"><img src="src/svg/cart.svg" alt="" style={{width:"20px"}}/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bar
