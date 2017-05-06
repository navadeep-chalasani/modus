import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsListItem from './news_list_item';

export default class NewsList extends Component {
    constructor(props){
        super(props);
        this.state = {data: [
            {
                id:1,
                category_tag : "Fashion",
                title:"Dark horse",
                abstract_content : "While I know ‘Dark Horse’ is supposed to invoke a sense of poetry or romance, I’ve been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month.",
                date:"19, Sept",
                time_to_read: 5,
                no_of_readers: 20,
                no_of_bookmarks:20,
                blogger_name:"Akanksha Redhu",
                no_of_subscribers:19,
                profile_pic:"images/akanksha_profile_pic.jpg",
                news_item_img:"images/akanksha_pose.jpg"

            },
            {
                id:2,
                category_tag : "Fashion",
                title: "What to wear to an outdoor Indian wedding",
                abstract_content : "So the wedding planning has finally started and step one is to decide on a location. We are still in the process of narrowing down the location for the wedding.",
                date:"28, July",
                time_to_read: 6,
                no_of_readers: 20,
                no_of_bookmarks:20,
                blogger_name:"Chandana Munipalle",
                no_of_subscribers:19,
                profile_pic:"images/profile_pic2.jpg",
                news_item_img:"images/pose2.jpg"
            }
        ]};

    }

    renderNews(){
        const newsArr = this.state.data;
        return newsArr.map((object) => {
            return <li className="list-group-item"><NewsListItem  newsItem={object} key={object.id}/></li>
        })
        console.log(newsArr);
    }

    render(){
        return(
            <div className="container-fluid news-list">
                <ul className="list-group">
                    {this.renderNews()}
                </ul>
                <div className=" container-fluid row modus-header">
                     <header className="col-xs-12">
                         <p>Modus</p>
                     </header>
                </div>
            </div>
        );
    }
}
