import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from './Bar.jsx'
import Title from './Title.jsx'
import './index.scss'
import List from './List.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Bar/>
    <Title/>
    <List/>
    </React.StrictMode>,
)