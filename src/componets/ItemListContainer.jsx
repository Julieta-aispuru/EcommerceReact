import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer () {
    const [items, setItems] = useState ([]) /*solo se puede modificar el estado con su funcion setItems*/ 
    const { id } = useParams()
    const newProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${id}`


const GetProducts =  async () =>{
    const res = await fetch ('https://dummyjson.com/products')
    const parsed = await res.json ()
    setItems (parsed.products)
}

    useEffect (() => {
        fetch(id ? categoryProducts : newProducts ) /*pedimos la info a la api*/
        .then(res => res.json()) /*la parseamos*/ 
        .then(res => setItems(res.products));      
    }, [id]) /*queda vacio para que se ejecute una vez sola*/
return (

    <ItemList items= {items} />
)
}

export default ItemListContainer