import React from 'react';
import './List.scss'
import products from './products.js'
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dynamicClass : 'list_towars_wrapper cards list1',
            dynamicClassEach : 'list_towars_towar cardsFor',
            dynamicDesc:'list_towars_towar_txt_desc none',
            dynamicLink:'list_towars_towar_link',
            currItem : {},
        }
    }
    listClick(e) {
        this.setState({dynamicClass:'list_towars_wrapper list list1',
        dynamicClassEach:'list_towars_towar listFor',
        dynamicDesc:'list_towars_towar_txt_desc vision'})
    }
    cardClick(e) {
        this.setState({dynamicClass:'list_towars_wrapper cards list1',
        dynamicClassEach:'list_towars_towar cardsFor',
        dynamicDesc:'list_towars_towar_txt_desc none'})
    }
    copyItem(product){
        const { name, image, price, description } = product;
        this.setState({ currItem: { name, image, price, description } }, () => {
            console.log(this.state.currItem);
        });
        
    }
    render(){
        return(
            <div className="list">
                <div className="list_wrapper">
                    <div className="list_panel">
                        <img src="src/svg/card.svg" alt="" className="list_panel_card" onClick={e => this.cardClick()} />
                        <img src="src/svg/list.svg"alt=""className="list_panel_list" onClick={e => this.listClick()}/>
                    </div>
                    <div className="list_towars">
                        <div className={this.state.dynamicClass}>
                            {products.map((product,i) => (
                                <div key={i} className={this.state.dynamicClassEach}>
                                    <img src={product.image} alt="" className="list_towars_towar_img" />
                                    <div className="list_towars_towar_txt">
                                        <p className="list_towars_towar_txt_name">{product.name}</p>
                                        <p className={this.state.dynamicDesc}>{product.description}</p>
                                    </div>
                                    
                                    <p className="list_towars_towar_price">{product.price}$</p>
                                    <a href="item.html" className={this.state.dynamicLink} onClick={e => this.copyItem(product)}>More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List



