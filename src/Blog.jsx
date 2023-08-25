import React from 'react';
import './Blog.scss'

class Blog extends React.Component {
    blogsCard = [
        { naming: "Conseption of the shoping",pictPath : "src/svg/1.png",dateofcreating:"12th Oct 2022"},
        { naming: "Developing of new feature of this shop",pictPath : "src/svg/2.png" ,dateofcreating:"17th Oct 2022"},
        { naming: "Production of new items of this shop",pictPath : "src/svg/3.png" ,dateofcreating:"23th Oct 2022"},
    ];

    render() {
        return (
            <div className="blog">
                <div className="blog_wrapper">
                    <div className="blog_main">
                        <h3 className="blog_main_name">Our Blogs</h3>
                        <p className="blog_main_txt">Find a bright ideal to suit your taste with our great selection</p>
                    </div>
                    <div className="blog_cards">
                        {this.blogsCard.map((item, index) => (
                            <div key={index} className="blog_cards_card">
                                <img key={index} src={item.pictPath} alt="" className="blog_cards_card_img" />
                                <p key={index} className="blog_cards_card_txt">{item.naming}</p>
                                <a href="" className="blog_cards_card_link">Read More</a>
                                <p key={index} className="blog_cards_card_txt1">{item.dateofcreating}</p>
                            </div>
                        ))}
                    </div>
                    <a href="" className="blog_link">Wiev All Post</a>
                </div>
            </div>
        );
    }
}


export default Blog