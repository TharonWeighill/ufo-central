import React, { useEffect } from 'react';
import Article from '../components/Article';
import '../styles/News.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUfoArticles } from '../actions/ufoNews';

export default function News() {
    const ufoNews = useSelector((state) => state.ufoNews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUfoArticles());
    }, [dispatch]);

    return (
        <div className='News'>
            <div className='news-scoll-bg'>
                <div className='news-scroll-div'>
                    <div className='news-scroll-object'></div>
                    <i className='fab fa-reddit-alien fa-3x'>  r/UFOs</i>
                    <div className='articles'>
                        {ufoNews.error ? (
                            <p>{ufoNews.error}</p>
                        ) : (
                            ufoNews.articles.map((article, index) => <Article key={index} article={article.data} />)
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}
