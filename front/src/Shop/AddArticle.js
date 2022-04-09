import React, { useEffect, useState } from 'react';
import './AddArticle.css';

export default function AddArticle (props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
 
    const handleAddArticle = () => {
        let newArticle = {name: name, price: price};
        let newArticles = [...props.articles];
        newArticles.push(newArticle);
        props.updateArticles(newArticles);
    }

    return (
        <div className='addArticle'>
            <p>Add article</p>
            <input 
                type="text"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Enter the price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAddArticle}>
                Confirm
            </button>
        </div>
    );
}