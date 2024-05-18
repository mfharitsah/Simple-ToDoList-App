import React from 'react'
import edit from '../assets/todo/edit.png'
import hapus from '../assets/todo/delete.png'

const ToDoCard = ({text, updateToDo, deleteToDo}) => {
  return (
    <div className='w-full h-12 py-3 bg-blue-600 text-white rounded-md flex items-center justify-between px-5 gap-3 hover:bg-blue-700 duration-150 hover:cursor-pointer'>
        <div className='w-full h-5 overflow-hidden'>
            <p className='truncate'>{text}</p>
        </div>
        <div className='flex items-center gap-1'>
            <img src={edit} onClick={updateToDo} alt="" className='w-5 h-5 hover:scale-y-125 duration-150'/>
            <img src={hapus} onClick={deleteToDo}alt="" className='w-5 h-5 hover:scale-y-125 duration-150'/>
        </div>
    </div>
  )
}

export default ToDoCard