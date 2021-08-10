import React, { useState, useEffect } from 'react';
import Article from '../components/Article';
import '../components/News.css';

export default function News() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('r/ufos');
    useEffect(() => {
        fetch("https://www.reddit.com/r/UFOs.json").then(resp => {
            if (resp.status != 200) {
                console.log("ERROR");
                return;
            }
            resp.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        });
    }, [subreddit]);

    return (

        <div className="News">
            <div className="news-scoll-bg">
                <div className="news-scroll-div">
                    <div className="news-scroll-object"></div>
                    <i class="fab fa-reddit-alien fa-3x">  r/UFOs</i>

                    <div className="articles">
                        {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}

                    </div>
                </div>
            </div>


        </div >
    );
}
