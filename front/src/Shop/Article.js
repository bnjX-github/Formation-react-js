import React, { useEffect, useState } from 'react';
import panda from './panda.png';
import './Article.css';

export default function Article (props) {

    const handleDeleteArticle = () => {
        console.log(props.id)
        let newArticles = [...props.articles];
        if (props.id > -1) {
            newArticles.splice(props.id, 1);
        }
        props.updateArticles(newArticles);
    }
 
    return (
        <div className='article'>
            <img src={panda} alt="panda"/>
            <p className='name'>{props.article.name}</p>
            <p className='price'>{props.article.price} €</p>
            <button onClick={handleDeleteArticle}>X</button>
        </div>
    );
}