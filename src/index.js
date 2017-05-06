import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/landing_page.js';
import NewsList from './components/news_list.js';
import DetailNews from './components/detail_news_item'



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/newslist" component={NewsList} />
            <Route path="/newsitem/:id" component={DetailNews} />
            <Route path="/" component={LandingPage}/>
        </Switch>
    </BrowserRouter>,
    document.querySelector('.wrapper'));
