import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewsListItem extends Component {
    constructor(props){
        super(props);

    }
    render(){
        console.log("@ news_list_item", this.props);
        const postImgUrl = this.props.newsItem.news_item_img;
        const profileImgUrl = this.props.newsItem.profile_pic;
        const name = this.props.newsItem.blogger_name;
        const category_tag = this.props.newsItem.category_tag;
        const title = this.props.newsItem.title;
        const abstract_content = this.props.newsItem.abstract_content;
        const date = this.props.newsItem.date;
        const time_to_read = this.props.newsItem.time_to_read;
        const no_of_readers = this.props.newsItem.no_of_readers;
        const no_of_bookmarks = this.props.newsItem.no_of_bookmarks;
        const no_of_subscribers = this.props.newsItem.no_of_subscribers;
        const style = {
            background:`url(${postImgUrl})`
        }
        return(
            <div className = "container-fluid news-list-item">
                <div className="col-xs-12 post-img " style={style}></div>
                <div className="row content-block">
                    <div className="col-xs-8 col-xs-push-2 col-xs-pull-2 category-tag">{category_tag}</div>
                    <div className="row title-date">
                        <h3 className="col-xs-12   title">{title}</h3>
                        <section className="col-xs-12 date-rest">
                            {date} <span className="pipe">|</span> {time_to_read} min read <span className="pipe">|</span> {no_of_readers} readers
                        </section>
                    </div>
                    <div className="row">
                        <div className="col-xs-11  abstract-content">{abstract_content}</div>
                    </div>

                    <div className="row read-more-bookmarks">
                        <div className="col-xs-6 read-more">
                            <Link  to={`/newsitem/${this.props.newsItem.id}`}>
                                Read More...
                            </Link>
                        </div>
                        <div className="col-xs-4 col-xs-push-2 bookmarks">{no_of_bookmarks} bookmarks</div>
                    </div>
                </div>
                <div className="border-div"></div>
                <section className="row blogger-profile">
                    <div className="col-xs-8">
                        <span className="col-xs-3 profile-pic"><img src={profileImgUrl} /></span>
                        <span className=" col-xs-9   blogger-name">{name}</span>
                    </div>
                    <p className="col-xs-4 subscribers">{no_of_subscribers} subscribers</p>
                </section>
            </div>
        )
    }
}
