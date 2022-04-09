import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import './Shop.css'

export default function Shop () {

    // const [articles, setArticles] = useState([]);
    // const [isCompteur, setIsCompteur] = useState(false);
 
    return (
        <div id='Shop'>
            <Articles />
        </div>
    );
}