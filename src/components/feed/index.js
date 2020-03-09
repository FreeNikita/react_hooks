import React from 'react'
import {Link} from "react-router-dom";
import { PAGE_PROFILE_URL, PAGE_ARTICLE_URL } from "constants/router";

const Feed = ({articles}) => {
    return (
        <div>
            {articles.map((article, index) => (
                <div className="article-preview" key={index}>
                    <div className='article-meta'>
                        <Link to={`${PAGE_PROFILE_URL}${article.author.username}`}>
                            <img src={article.author.image} alt=''/>
                        </Link>
                    </div>
                    <div className='info'>
                        <Link to={`${PAGE_PROFILE_URL}${article.author.username}`} className='author'>
                            {article.author.username}
                        </Link>
                    </div>
                    <span className='date'>{article.createdAt}</span>
                    <Link to={`${PAGE_ARTICLE_URL}${article.slug}`} className='preview-link'>
                        <h1>{article.name}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                        <ul className='tag-list'>
                            {article.tagList.map((tag)=> (
                              <li className='tag-pill tag-default tag-outline' key={tag}>
                                  {tag}
                              </li>
                            ))}

                        </ul>
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default Feed