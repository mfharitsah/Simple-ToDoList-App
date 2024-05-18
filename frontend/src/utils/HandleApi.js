import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getAllToDo = async (setToDo) => {
    try {
        const response = await axios.get(baseUrl);

        console.log('data ---> ', response.data)
        setToDo(response.data)
    } catch (error) {
        console.log("Internal server error");
    }
}

const addToDo = async (text, setText) => {
    try {
        if (text.length == 0) {
            alert("Field cannot be blank!")
            return
        }
        
        const response = await axios.post(baseUrl + "/add", {text});

        setText("")
        getAllToDo(response.data)
    } catch (error) {
        console.log("Internal server error");
    }
}

const updateToDo = async (_id, text, setIsUpdating, setText) => {
    try {
        const response = await axios.post(baseUrl + "/update", {_id: _id, text});

        setText("")
        setIsUpdating(false)
        getAllToDo(response.data)
    } catch (error) {
        console.log("Internal server error");
    }
}

const deleteToDo = async (_id) => {
    try {
        const response = await axios.post(baseUrl + "/delete", {_id: _id});

        getAllToDo(response.data)
    } catch (error) {
        console.log("Internal server error");
    }
}

export {getAllToDo, addToDo, updateToDo, deleteToDo}