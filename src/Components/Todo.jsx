import React, { useState } from 'react';
import '../Components/Todo.css';

const Todo = () => {

    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);


    const addItem = () => {
        setItems([...items, value]);
        setValue('');
    }

    const deleteItem = (id) => {
        const updatedItem = items.filter((e,i)=> {
            return i !== id;
        });
        setItems(updatedItem);
    }


    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <h1>
                        Todo-List
                    </h1>
                    <div className='addItems'>
                          <input type='text'  placeholder='Enter Your Task' value={value} onChange={(e)=> setValue(e.target.value)}/>
                          <button className='addbtn' onClick={addItem}>Add</button>
                    </div>
                   <div className='showItems'>
                   {
                    items.map((e,i)=>{
                        return (
                            <div className='eachItem' key={i}><h2>{e}</h2><i onClick={()=>{deleteItem(i)}} className='far fa-trash-alt add-btn add-btn'/></div>
                        )
                    })
                   }
                   </div>
                </div>
            </div>
        </>
    )
}

export default Todo;