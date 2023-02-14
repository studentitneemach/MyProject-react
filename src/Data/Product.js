import React, { useEffect, useState } from "react";
import Data from './CardsData.json';
import './Cards.css';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const PAGE_PRODUCTS = 'products';
const PAGE_CARD = 'cart';
const PAGE_PRECARDS = 'lastcheckcards';


export const Product = () => {
  const [Page, setPage] = useState(PAGE_PRODUCTS)
  const [LastCard, setLastCard] = useState([])
  const [Cards, setCards] = useState([]);
  const [AddCard, setAddCard] = useState([]);
  const [Incre, setIncre] = useState(1);
    

  const addToCart = (product) => {
    setCards([...Cards, { ...product }]);
    setAddCard(product);
    navigetTo(PAGE_CARD);
    localStorage.setItem("Cards", JSON.stringify(Cards));
  }

  const removeCards = () => {
    navigetTo(PAGE_PRODUCTS);
    setIncre(1);
    // AddCard.pop();
    // if(AddCard !== null ) setAddCard(AddCard)
    // else     Page === PAGE_PRODUCTS && AddProduct();
    // setAddCard(Cards)
    // setAddCard(data)
    // let Add = AddCard[AddCard.length - 1];
    // console.log((Add.filter((prod) => prod.id === id)) || null)
    // console.log(Add !== 0 ?  null : Add.filter((prod) => prod.id === id))
    // console.log(Add === 0 ?  Page === PAGE_PRODUCTS && AddProduct()  : Add.pop());

      
      
    //setCards([...Cards.filter((products) => products.id !== productRemove.id)])

  }
//     const removeToCart = (productRemove) => {
//         setCards(Cards.filter((product)=> product.id !== productRemove.id))
//         console.log(Cards)
//         //  setCards(Cards.filter((products) => products.id !== productRemove.id))
//   }
  const AddCardsQut = () => {
   return <>{
        <div>
          <img src={AddCard.url} alt={AddCard.id} height='200px' width='300px' />
          <h3>{AddCard.title}</h3>
          <h5>{AddCard.content}</h5>
          <button className="Card_button"><FaPlusCircle onClick={() => setIncre(Incre + 1 )} /></button>{Incre}
          <button className="Card_button"><FaMinusCircle onClick={() => Incre === 1 ?  1 : setIncre(Incre - 1) } /></button><br />
           <button className="Card_button"><FaMinusCircle onClick={() => removeCards(AddCard.id)} />Remove </button>
         </div> 
        // Add.map((add,aid) => <div key={aid}>
        //   <img src={add.url} alt={add.id} height='200px' width='300px' />
        //   <h3>{add.title}</h3>
        //   <h5>{add.content}</h5>
        //    <button className="Card_button"><FaPlusCircle onClick={() => setIncre(Incre + 1 )} /></button>{Incre}
        //    <button className="Card_button"><FaMinusCircle onClick={() => Incre === 1 ?  1 : setIncre(Incre - 1) } /></button><br />
        //    <button className="Card_button"><FaMinusCircle onClick={() => remove(AddCard.id)} />Remove </button>
        // </div>)
    }
    </> 
  }

  const navigetTo = (nextPage) => setPage(nextPage);

    
  const AddProduct = () => (
    <> {
      Data.map((product, idx) => <div key={idx}>
        <img src={product.url} alt={product.id} height='200px' width='300px' />
        <h3>{product.title}</h3>
        <h5>{product.content}</h5><br />
        <button className="Card_button" onClick={() => addToCart(product)} >Add Cards</button>
        {/* <button className="Card_button"><FaMinusCircle onClick={() => removeToCart(product)} /></button> */}
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
      <button className="head_button" style={{ marginRight: '16px' }} onClick={() =>{ navigetTo(PAGE_PRODUCTS);setIncre(1)}}>View To Product  </button>
      {/* <button className="head_button" style={{ marginRight: '16px' }} onClick={() => navigetTo(PAGE_CARD)}>Adds Cards</button> */}
      <button className="head_button" onClick={() => navigetTo(PAGE_PRECARDS)}>Last Check Cards </button>
    </header>
   
    <div className="wrapper">
      {Page === PAGE_PRODUCTS && AddProduct()}
      {Page === PAGE_CARD  && AddCardsQut()}
      {Page === PAGE_PRECARDS && renderLastCards()}
    </div></>
}
//////////////////////////////////

  //   const [Cards, setCards] = useState([])
  //   const [Page, setPage] = useState(PAGE_PRODUCTS)
  //   const [products] = useState(Data);
  //   const [LastCard, setLastCard] = useState([])
///////jkjhkjhfk;lp[o0-p]

  //   const addToCart = (product) => {
  //     setCards([...Cards, { ...product }])
  //     localStorage.setItem("Cards", JSON.stringify(Cards));
  //     // if (Cards.length <= 4) {
  //     //   setCards([...Cards, { ...product }])
  //     //   localStorage.setItem("Cards", JSON.stringify(Cards,10));
  //     // } else return alert('You Add Cards Only 5');
  //   }

  // const removeToCart = (productRemove) =>  setCards(Cards.filter((products) => console.log(products === productRemove )//products !== productRemove 
  // ));
  //const navigetTo = (nextPage) => setPage(nextPage);

  // const renderProduct = () => (
  //   <> {
  //     products.map((product, idx) => <div key={idx}>
  //       <img src={product.url} alt={product.id} height='200px' width='300px' />
  //       <h3>{product.title}</h3>
  //       <h5>{product.content}</h5><br />
  //       <button className="Card_button"><FaPlusCircle onClick={() => addToCart(product)} /></button>
  //     </div>)}
  //   </>
  // )

  
  //  return <>{
  //     Cards.map((card, idx) => <div key={idx} >
  //       <img src={card.url} alt={card.id} height='200px' width='300px' />
  //       <h3>{card.title}</h3>
  //       <h5>{card.content}</h5><br />
  //       <button className="Card_button"><FaMinusCircle onClick={() => removeToCart(card)} /></button>
  //     </div>)
  //   }</>
  // }

  // const data = ()=>{
  //   let a = 0
  //   console.log(a+1)
  // }
  //   const renderProduct = () => (
  //     <> {
  //           products.map((product, idx) => <div key={idx}>
  //             <img src={product.url} alt={product.id} height='200px' width='300px' />
  //             <h3>{product.title}</h3>
  //             <h5>{product.content}</h5><br />
  //             <button className="Card_button"><FaPlusCircle onClick={() => addToCart(product)} /></button>
  //             <button className="Card_button"><FaMinusCircle onClick={()=>data(product)} /></button>
  //           </div>)}
  //         </>
  //       )
  //       const renderCards = () => { 
  //         return <>{
  //            Cards.map((card, idx) => <div key={idx} >
  //              <img src={card.url} alt={card.id} height='200px' width='300px' />
  //              <h3>{card.title}</h3>
  //              <h5>{card.content}</h5><br />
  //              {/* <button className="Card_button"><FaMinusCircle onClick={() => removeToCart(card)} /></button> */}
  //            </div>)
  //          }</>
  //        }

  //   useEffect(() => {
  //     const saved = localStorage.getItem("Cards");
  //     const initialValue = JSON.parse(saved);
  //     setLastCard(initialValue)
  //   }, [])

  
  //   const renderLastCards=()=> {
  //     if (LastCard == null) return 'Nothing Last Check Cards';
  //     else return <>
  //       {
  //         LastCard.map((last, idx) => <div key={idx}>
  //           <img src={last.url} alt={last.id} height='200px' width='300px' />
  //           <h3>{last.title}</h3>
  //           <h5>{last.content}</h5>
  //         </div>)
  //       }</>
  //   }

  
  //   return <>
  //     <header className="Header">
  //       <button className="head_button" style={{ marginRight: '16px' }} onClick={() => navigetTo(PAGE_PRODUCTS)}>View To Product {Cards.length}  </button>
  //       {/* <button className="head_button" style={{ marginRight: '16px' }} onClick={() => navigetTo(PAGE_CARD)}>Go To Card  {Cards.length}</button> */}
  //       <button className="head_button" onClick={() => navigetTo(PAGE_PRECARDS)}>Last Check Cards {LastCard.length || null}</button>
  //     </header>
  //     <br />
  //     <div className="wrapper">
  //       {Page === PAGE_PRODUCTS && renderProduct() }
  //       {/* {Page === PAGE_PRODUCTS && renderCards()} */}
  //       {/* {Page === PAGE_CARD && renderCards()} */}
  //       {Page === PAGE_PRECARDS && renderLastCards()}
  //     </div>
  //   </>

////////////        
//////////https://www.youtube.com/watch?v=02ieJ1YXZM4