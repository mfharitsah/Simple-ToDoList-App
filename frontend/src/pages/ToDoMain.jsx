import React, { useEffect, useState } from 'react'
import ToDoCard from '../components/ToDoCard'
import { deleteToDo, updateToDo, addToDo, getAllToDo } from '../utils/HandleApi'

const ToDoMain = () => {

    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [toDoId, setToDoId] = useState("")
    
    const WAIT_TIME = 3000;
    const toDoDeleted = []

    const fetchToDoList = async () => {
        const apiResponse = await getAllToDo();

        if (apiResponse) {
            //See the result in the console from the browser
            console.log("Response In App");
            console.log(apiResponse.data);
      
            setToDo(apiResponse.data);
          } else {
            alert("Failed to fetch list");
          }
    }

    useEffect(() => {
        const id = setInterval(() => {
            fetchToDoList()
        }, WAIT_TIME);
        return () => clearInterval(id)
    }, [toDo])

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)
    }

  return (
    <div className='w-screen h-fit flex flex-col items-center justify-center my-20'>
        <p className='font-semibold text-3xl py-10'>What have you accomplished today, sir?</p>
        <div className='w-2/5 flex flex-col gap-2'>
            {
                toDo.map((todo) => (
                    < ToDoCard 
                        key={todo._id}
                        text={todo.text}
                        updateToDo={() => updateMode(todo._id, todo.text)}
                        deleteToDo={() => {
                            deleteToDo(todo._id)
                        }}
                    />
                ))
            }
            
        </div>
        <div className='w-1/2 flex gap-3 mt-10'>
            <input 
                type="text" 
                className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1  focus:ring-blue-300 block w-full p-2.5" 
                placeholder='Add new work'
                value={text}
                onChange={(e) => setText(e.target.value)}    
            />
            <button 
                className='text-white bg-blue-600 hover:scale-110 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={ isUpdating ?
                    () => updateToDo(toDoId, text, setIsUpdating, setText) : () => addToDo(text, setText)
                }
            >
                { isUpdating ? "Update" : "Add"}
            </button>
        </div>
        <a className='mt-8 text-blue-500 hover:text-blue-600 hover:cursor-pointer' href='/'>Back to Landing Page</a>
    </div>
  )
}

export default ToDoMain