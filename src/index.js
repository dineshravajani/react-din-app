import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './ToDoList';
import DigitalClock from './DigitalClock';
import Autotype from './Autotype';
import Steps from './Steps';
import Counter from './Counter';
import TravelList from './TravelList';
import FlashCards from './FlashCards';

const pizzaData = [
	{
	  name: "Focaccia",
	  ingredients: "Bread with italian olive oil and rosemary",
	  price: 6,
	  photoName: "pizzas/focaccia.jpg",
	  soldOut: false,
	},
	{
	  name: "Pizza Margherita",
	  ingredients: "Tomato and mozarella",
	  price: 10,
	  photoName: "pizzas/margherita.jpg",
	  soldOut: false,
	},
	{
	  name: "Pizza Spinaci",
	  ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
	  price: 12,
	  photoName: "pizzas/spinaci.jpg",
	  soldOut: false,
	},
	{
	  name: "Pizza Funghi",
	  ingredients: "Tomato, mozarella, mushrooms, and onion",
	  price: 12,
	  photoName: "pizzas/funghi.jpg",
	  soldOut: false,
	},
	{
	  name: "Pizza Salamino",
	  ingredients: "Tomato, mozarella, and pepperoni",
	  price: 15,
	  photoName: "pizzas/salamino.jpg",
	  soldOut: true,
	},
	{
	  name: "Pizza Prosciutto",
	  ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
	  price: 18,
	  photoName: "pizzas/prosciutto.jpg",
	  soldOut: false,
	},
  ];

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<FlashCards/>
	
	{/* <TravelList/> */}
	{/* <Steps/> */}
	{/* <Counter/> */}
	{/* { <App />} */}
	{/*}
    { <App />}
    <TodoList/>
    <hr/>
    {<DigitalClock/>}
    <hr/>
    {<Autotype/>}
	<App/>
	{*/}
    
  </React.StrictMode>
);

function App() {
	return(
		<>
		<Header/>
		<Menu/>
		<div className='pizza-gallery'>
			{pizzaData.map(pizza =>
				( <Pizza pizzaObj={pizza} key={pizza.name}/>

				))}
			{ /*
			<Pizza 
				name="Sandwich" 
				ingredient="Tomato, Garlic, Onion and Crispy" 
				photoName="pizzas/spinaci.jpg" 
				price="10"
			/>
			<Pizza 
				name="Vadapav" 
				ingredient="Pav, Garlic and Butter" 
				photoName="pizzas/funghi.jpg" 
				price="11"
			/>

			<Pizza 
				name="Dabeli" 
				ingredient="Dabeli and Oil" 
				photoName="pizzas/margherita.jpg" 
				price="12"
			/>
			*/}
		</div>
		
		<Footer/>
		</>
	)
}
function Header() {
  return(
      <h1>Fast React Pizza Co.</h1>
  )
}

function Footer() {
	//return React.createElement('Footer',null, "We're currently open!")
	return(
		<footer>
			{new Date().toLocaleTimeString()}.
			We're currently open!
		</footer>
	)
}

function Menu() {
  return(
      <>
		<h2>Our Menu</h2>
      </>
  )
}

function Pizza(props) {
	if(props.pizzaObj.soldOut) return null;
	return(
		<div className='pizza-box'>
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
			<h2>{props.pizzaObj.name}</h2>
			<p>{props.pizzaObj.ingredients}</p>
		</div>
	)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
