import React, { useState } from 'react';


// two states, todos and inputValue
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
// function to update todos array with new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, [inputValue,false]]); 
      setInputValue(''); 
   
    }
  };
//  used to remove todo from the list
  const removeTodo = (indexToRemove) => {
    
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      
       <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">Add a task</h1> 
        <input type="text" class="px-20 border-3 border-indigo-500 font-bold  p-2 m-2 text-gray-600" placeholder="Enter task" 
        value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button type="submit" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" onClick ={addTodo} > Add Task </button>
       </div>
        {/* taking the input from user */}
      <ul>
        {todos.map((todo, index) => {
            // mapping all the todos here
         return( <li key={index} class=" flex row bg-gray-300 rounded-xl mx-10 my-4 px-5 py-5 items-center justify-between" >
          
            <h1 class=" font-bold ">{todo[0]}</h1>
            <div class="">

    
            <button  class=" font-bold bg-green-500 rounded-xl  mx-5 p-5" onClick={()=>removeTodo(index)}> TickIt </button>
            <button  class=" font-bold bg-red-500 rounded-xl   p-5" onClick={() => removeTodo(index)}> X </button>
            
            </div>
        </li>

)})}
      </ul>
    </div>
  );
}

export default TodoList;