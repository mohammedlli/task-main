import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
export default function InfiniteScroll() {
    const [items, setItems] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {
    const newItems = data.items.slice(startIndex,startIndex + 10);
    setItems((prevItems) => [...prevItems, ...newItems]);
    }, [startIndex]);

    const handleScroll = (e) => {
        const {scrollHeight,scrollTop,clientHeight} = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
        setStartIndex((prevIndex) => prevIndex + 10);
    }
    };

    const deleteItem = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
        };
        console.log(items);
    return (
    <div className='container' onScroll={handleScroll} style={{ height: '300px', overflowY: 'scroll' }}>
    {items.map((item) => (
    <div className='container-item' >
        <div
            className="item"
            key={item.id} >
            {item.name}   {item.id}
        </div>
        <div 
        onClick={() => deleteItem(item.id)} 
        className='delete'>
            delete
        </div>
    </div>
    ))}
    </div>
    );
}