import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailNews extends Component {
    constructor(props){
        super(props);
        this.state = {data: dataArr};
    }

    //compares the id from url and id of the object and creates a dataToRender object in state object;
    componentWillMount(){
        const newsArr = this.state.data;
        const [dataToRender] = newsArr.filter((object) => {
            const urlId = this.props.match.params.id;
            if(urlId == object.id){
                return object;
            }
        });
        this.setState({
            dataToRender : dataToRender
        });
        console.log(this.state);
    }
// renders the inages from image_list array
    renderImages(){
        const imgArr = this.state.dataToRender.images_list;
        return imgArr.map((imgUrl, index) => {
            return <div className="col-xs-12 each-img">
                <img src={imgUrl} className="img-responsive" key={index} />
            </div>
        });
    }
// render function
    render(){
        const flexImgUrl = this.state.dataToRender.news_item_img;
        const category_tag = this.state.dataToRender.category_tag;
        const title = this.state.dataToRender.title;
        const date = this.state.dataToRender.date;
        const time_to_read = this.state.dataToRender.time_to_read;
        const no_of_readers = this.state.dataToRender.no_of_readers;
        const content = this.state.dataToRender.text_content;
        const style = {
            background:`url(${flexImgUrl})`
        };
        return(
            <div className="container-fluid detail-view">
                <div className="row ">
                    <div className="col-xs-12 post-img  " style={style}>
                        <div className="title-date-category">
                            <div className="col-xs-8 col-xs-push-2 col-xs-pull-2 detail-category-tag">Fashion</div>
                            <div className="col-xs-8 col-xs-push-2 col-xs-pull-2 detail-title">Dark Horse</div>
                            <section className="col-xs-8 col-xs-push-2 col-xs-pull-2 detail-date-rest">
                                {date} <span className="pipe">|</span> {time_to_read} min read <span className="pipe">|</span> {no_of_readers} readers
                            </section>
                        </div>
                    </div>
                    <div className="col-xs-12 detail-text-contnet">{content}</div>
                    <div className=" col-xs-12 image-list">
                        {this.renderImages()}
                    </div>
                    <div className="col-xs-12 pagination post-pagination">
                        <div className="col-xs-3 previous">Previous</div>
                        <div className="col-xs-6 more" > More Articles</div>
                        <div className="col-xs-3 next">Next</div>
                    </div>
                    <div className="col-xs-12 copyrights-block">
                        Copyright 2016. All Rights Reserved.
                    </div>
                </div>
                <div className=" container-fluid row modus-header details-view-header">
                     <header className="col-xs-12">
                         <Link className="col-xs-2" to="/newslist">
                             <img src={"/images/back-arrow.png"} className="image-responsive back-arrow"/>
                         </Link>
                     </header>
                </div>
            </div>
        )
    }

}

// array of data objects

let dataArr = [
    {
        id:1,
        category_tag : "Fashion",
        title:'Dark Horse',
        text_content : "While I know 'Dark Horse' is supposed to invoke a sense of poetry or romance, I've been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month. I recently got back from a day in Agra to be a part of the launch of a new watch by Ferragamo and am already feeling a bit under the weather. I think it's because I know that for the next month or so my body won't have the time to fall sick so it thought it might as well get a little rest now. The season is going to be changing soon which is why I thought of going for a slightly more Autumn look for this post. My favorite – plaid and black and dark lips. The heat is still on so ofcourse I went for a playful skirt, paired it with a buttoned-up plaid shirt, both from  SBUYS and the buttery Versace Palazzo Empire Bag.",
        date:"19, Sept",
        time_to_read: 5,
        no_of_readers: 20,
        blogger_name:"Akanksha Redhu",
        news_item_img:"/images/akanksha_pose.jpg",
        images_list :["/images/akanksha1.jpg", "/images/akanksha2.jpg", "/images/akanksha3.jpg", "/images/akanksha4.jpg", "/images/akanksha5.jpg"]
    },
    {
        id:2,
        category_tag : "Fashion",
        title: "What to wear to an outdoor Indian wedding",
        text_content : "So the wedding planning has finally started and step one is to decide on a location. We are still in the process of narrowing down the location for the wedding. Since it is going to be a super small affair with just close family, one option that we are considering is to have an outdoor wedding. Maybe a lovely garden or maybe transform the boy's terrace into a wedding venue and have a mandap with cushions all around for people to sit down upon. Now being in India, we mostly have just one season all year round and that is summer. Although we are blessed with a few cooler months, it is still pretty hot throughout the entire year. So when you are opting for an outdoor location with no AC hotel rooms and banquet halls, dressing appropriately is of utmost importance. Add to that, our Indian bridal wear and festive wear is usually on the heavier side. So its important that you pick something that is wedding appropriate and yet is comfortable enough to dance, run around, eat and have a good time in!  has a wide variety of ethnic wear from casual wear to wedding lehengas. They recently launched their new collection and it is full of pastel lehengas, floral motifs, and stunning anarkalis that are perfect for any festive occasion. If you were invited as a guest to an outdoor wedding, what would you wear? Here are some of my top picks!  has a wide variety of ethnic wear from casual wear to wedding lehengas. They recently launched their new collection and it is full of pastel lehengas, floral motifs, and stunning anarkalis that are perfect for any festive occasion. If you were invited as a guest to an outdoor wedding, what would you wear? Here are some of my top picks!",
        date:"28, July",
        time_to_read: 6,
        no_of_readers: 20,
        blogger_name:"Chandana Munipalle",
        news_item_img:"/images/pose2.jpg",
        images_list :["/images/pose2.jpg", "/images/chandana2.jpg", "/images/chandana3.jpg", "/images/chandana4.jpg", "/images/chandana5.jpg"]
    }
];
