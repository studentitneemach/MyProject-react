import React, { useEffect, useState } from "react";
import Data from './CardsData.json';
import './Cards.css';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const PAGE_PRODUCTS = 'products';
const PAGE_CARD = 'cart';
const PAGE_PRECARDS = 'lastcheckcards';


export const AddCard = () => {
    const [Page, setPage] = useState(PAGE_PRODUCTS)
    const [LastCard, setLastCard] = useState([])
    const [Cards, setCards] = useState([]);
    const [AddCard, setAddCard] = useState([]);
    const [Incre, setIncre] = useState(1);


    const addToCart = (product) => {
        setCards([...Cards, { ...product }])
        setAddCard(product)
        navigetTo(PAGE_CARD)
        let card = Cards.slice(0,5)
        localStorage.setItem("Cards", JSON.stringify(card))
    }

    const removeCards = () => {
        navigetTo(PAGE_PRODUCTS);
        setIncre(1);
    }

    const AddCardsQut = () => (
        <>{
            <div>
                <img src={AddCard.url} alt={AddCard.id} height='200px' width='300px' />
                <h3>{AddCard.title}</h3>
                <h5>{AddCard.content}</h5>
                <button className="Card_button"><FaPlusCircle onClick={() => setIncre(Incre + 1)} /></button>{Incre}
                <button className="Card_button"><FaMinusCircle onClick={() => Incre === 1 ? 1 : setIncre(Incre - 1)} /></button><br />
                <button className="Card_button" onClick={() => removeCards(AddCard.id)} >Remove </button>
            </div>
        }
        </>
    )

    const navigetTo = (nextPage) => setPage(nextPage);

    const AddProduct = () => (
        <> {
            Data.map((product, idx) => <div key={idx}>
                <img src={product.url} alt={product.id} height='200px' width='300px' />
                <h3>{product.title}</h3>
                <h5>{product.content}</h5><br />
                <button className="Card_button" onClick={() => addToCart(product)} >Add Cards</button>
            </div>)}
        </>
    )

    useEffect(() => {
        const saved = localStorage.getItem("Cards");
        const initialValue = JSON.parse(saved);
        setLastCard(initialValue)
    }, [])

    const renderLastCards = () => {
        if (LastCard == null) return 'Nothing Last Check Cards';
        else return <>{
            LastCard.map((last, idx) => <div key={idx}>
                <img src={last.url} alt={last.id} height='200px' width='300px' />
                <h3>{last.title}</h3>
                <h5>{last.content}</h5>
            </div>)
        }</>
    }

    return <>
        <header className="Header">
            <button className="head_button" style={{ marginRight: '16px' }} onClick={() => { navigetTo(PAGE_PRODUCTS); setIncre(1) }}>View To Product  </button>
            <button className="head_button" onClick={() => navigetTo(PAGE_PRECARDS)}>Last Check Cards </button>
        </header>

        <div className="wrapper">
            {Page === PAGE_PRODUCTS && AddProduct()}
            {Page === PAGE_CARD && AddCardsQut()}
            {Page === PAGE_PRECARDS && renderLastCards()}
        </div></>
}

///////http://magento2.magentech.com/themes/sm_topzstore/pub/german

