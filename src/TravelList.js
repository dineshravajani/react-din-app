import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
  ];
function Logo() {
    return(
        <h1>🌴 Far Away 💼</h1>
    )
}

function Form() {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;
        const newItems = {description, quantity, packed : false, id:Date.now()}
       setDescription('')
       setQuantity(1)
        

    }
    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip ?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from( {length:20}, (_, i) => i+1).map(
                    (num) => (<option value={num} key={num}>{num}</option>)
                )}
            </select>
            <input type="text" placeholder="Items..." value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

function PackingList() {
    return(
        <div className="list">
            <ul>
                {initialItems.map(item => <Item item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}

function Item({item}) {
    return (
        <li style={item.packed ? {textDecoration:'line-through' } : {}}>
            <span>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    )
}

function Stats() {
    return <footer className="stats">
        <em>You have X items on your list, you have already packed X items (X%)</em>
    </footer>
}
function TravelList() {

    return(
        <div className="app">
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </div>
    )
    

}
export default TravelList;