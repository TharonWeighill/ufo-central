import React from 'react';

export default function Article(props) {
    let base_url = 'https://reddit.com';

    return (
        <article>
            <a href={base_url + props.article.permalink} target="_blank" rel="noreferrer">
                <h3>{props.article.title}</h3>
            </a>
        </article>
    );
}
