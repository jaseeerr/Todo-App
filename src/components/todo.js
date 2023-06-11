import { useState } from "react"

const Todo=()=>{

    const [todoInput,setTodoInput] = useState("")
    const [todo,setTodo] = useState([])

    const handleCheckboxChange = (id) => {
        setTodo((prevTodo) => {
          return prevTodo.map((item) => {
            if (item.id === id) {
              return { ...item, status: !item.status };
            }
            return item;
          });
        });
      };

      const handleRemoveTodo = (id) => {
        setTodo((prevTodo) => {
          return prevTodo.filter((item) => item.id !== id);
        });
      };

    return(
        <>

<div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={(e)=>{setTodoInput(e.target.value)}} value={todoInput} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
            setTodo([...todo,{id:Date.now(),text:todoInput,status:false}])
            setTodoInput("")
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">

      

             
              
        {
            todo.map((values)=>{
                return(<div className="todo" key={values.id}>
                <div className="left">
                  <input type="checkbox" onChange={() => handleCheckboxChange(values.id)} name="" id="" />
                  {
                    values.status ?  <p style={{textDecoration:" line-through"}}>{values.text}</p> :  <p>{values.text}</p>
                  }
                 
                </div>
                <div className="right">
                  <i onClick={()=>handleRemoveTodo(values.id)} className="fas fa-times"></i>
                </div>
              </div>)
            })
        }
        
      </div>
    </div>
        </>
    )
}

export default Todo