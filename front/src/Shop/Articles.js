import React, { useEffect, useState } from 'react';
import Article from './Article';
import AddArticle from './AddArticle';
import './Articles.css'

export default function Articles () {

    const [articles, setArticles] = useState([
        {name: 'Veste', price: 15},
        {name: 'Pantalon', price: 22},
        {name: 'Chaussure', price: 33},
        {name: 'Casquette', price: 44}
    ]);
    const [priceMax, setPriceMax] = useState(100);

    const updateArticles = (newArticles) => {
        setArticles(newArticles)
    }
    
    return (
        <div className='articles'>
            <div className='actions'>

                <div className='filters'>
                    <p>Filtres</p>
                    <input 
                        type="text"
                        placeholder="Enter the max price"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                    />
                </div>

                <div className='edit'>
                    <AddArticle articles={articles} updateArticles={updateArticles}/>
                </div>

            </div>

            <ul>
                {
                    articles.map((article, index) =>
                        <div key={index}>
                            {
                                (article.price <= priceMax) ? 
                                    <li key={index}>
                                        <Article 
                                            article={article} 
                                            id={index} 
                                            articles={articles} 
                                            updateArticles={updateArticles}/>
                                    </li> : <></>
                            }
                        </div>
                    )
                }
            </ul>
        </div>
    );
}