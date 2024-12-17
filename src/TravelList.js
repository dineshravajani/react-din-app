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

function Form( {onAddItems}) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;
        const newItem = {description, quantity, packed : false, id:Date.now()}
        console.log(newItem)
        onAddItems(newItem);
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

function PackingList( {items, onDeleteItems, onToggleItem }) {
    return(
        <div className="list">
            
            <ul>
                {items.map(item => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem}/>)}
            </ul>
        </div>
    )
}

function Item({item, onDeleteItems, onToggleItem}) {
    return (
        <li style={item.packed ? {textDecoration:'line-through' } : {}}>

            <input type="checkbox" value={item.packed} onChange={ () => onToggleItem(item.id)}/>
            <span>{item.quantity} {item.description}</span>
            <button onClick={()=> onDeleteItems(item.id)}>❌</button>
        </li>
    )
}

function Stats( {items}) {
    if( ! items.length ) {
        return (
            <p><em>Start adding your items to your list 🚀</em></p>
        )
    }
    const numItems = items.length
    const numPackedItems = items.filter( (item) => item.packed).length
    const percentage =  Math.round(( numPackedItems / numItems ) * 100);
    return <footer className="stats">
        { percentage === 100 ? <em>You got everthing.Ready to go !!</em> : <em>You have {numItems} items on your list, you have already packed {numPackedItems} items ({percentage}%)</em>}
        
    </footer>
}
function TravelList() {

    const [items, setItems] = useState([]);
    function handleAddItems(item) {
        setItems( (items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems( items => items.filter( item => item.id !== id ))
    }
    function handleToggleItem(id) {
        setItems( items => items.map( item => item.id === id ? { ...item, packed: !item.packed} : item))
    }

    return(
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItem={handleToggleItem}/>
            <Stats items={items}/>
        </div>
    )
    

}
export default TravelList;