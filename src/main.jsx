import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from './Bar.jsx'
import './index.scss'
import Intro from './Intro.jsx'
import './Intro.scss'
import Tfurn from './Tfurn.jsx'
import './Tfurn.scss'
import Pick from './Pick.jsx'
import './Pick.scss'
import Newitem from './Newitem.jsx'
import './Newitem.scss'
import Blog from './Blog.jsx'
import './Blog.scss'
import 'animate.css'
import Inst from './Inst.jsx'
import './Inst.scss'
import Footer from './Footer.jsx'
import './Footer.scss'
                                                                                                                                                                                   



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bar />
    <Intro />
    <Tfurn />
    <Pick/>
    <Newitem/>
    <Blog/>
    <Inst/>
    <Footer/>
  </React.StrictMode>,
)
