import React from 'react';
import './Curit.scss'
import currItem from './List.jsx'

class Curit extends React.Component{
    render(){
        return(
            <div className="curit">
                <div className="curit_wrapper">
                    <h1 className="curit_name">{currItem}</h1>
                </div>
            </div>
        )
    }
}

export default Curit
