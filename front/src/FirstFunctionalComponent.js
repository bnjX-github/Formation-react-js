import React, { useEffect, useState } from 'react';

export default function FirstFunctionalComponent (props) {

    const [compteur, setCompteur] = useState(0);
    // const [isCompteur, setIsCompteur] = useState(false);

    // useEffect(() => {
    //     console.log('componentDidMount')
    // }, []);

    // useEffect(() => {
    //     console.log('compteur has changed')
    // }, [compteur]);

    // useEffect(() => {
    //     return(() => {
    //         console.log('componentWillUnmount')
    //     })
    // });

    const incrementCompteur = () => {
        setCompteur(compteur + 1)

        props.printLucie();
        console.log(props.name);
    }
  
    return (
        <>
            <button onClick={incrementCompteur}>Click</button>
            <div>{compteur}</div>
        </>
    );
}