import React, { useState, useEffect } from 'react';
import Article from '../components/Article';
import '../components/News.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUfoArticles } from '../actions/ufoNews';

export default function News() {
    const ufoNews = useSelector((state) => state.ufoNews);
    const dispatch = useDispatch();
    console.log(ufoNews);
    useEffect(() => {
        dispatch(getUfoArticles());
    }, []);

    return (
        <div className="News">
            <div className="news-scoll-bg">
                <div className="news-scroll-div">
                    <div className="news-scroll-object"></div>
                    <i class="fab fa-reddit-alien fa-3x">  r/UFOs</i>
                    <div className="articles">
                        {ufoNews.ufoArticlesError ? (
                            <p>{ufoNews.ufoArticlesError}</p>
                        ) : (
                            ufoNews.ufoArticles.map((article, index) => <Article key={index} article={article.data} />)
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}
