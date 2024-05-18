const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.status(200).send(toDo);
}

module.exports.addToDo = async (req, res) => {
    const { text } = req.body;

    try {
        const data = await ToDoModel.create({ text });
        res.status(200).send({
            message: "Successfully add new ToDo",
            data: data
        });
    } catch (error) {
        console.error("Error adding new list:", error);
        res.status(500).send({ message: "Failed to add new list", error });
    }
}


module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const data = await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });

        if (!data) {
            console.log("No data found!");
            res.status(200).send({
                message: "The data is no longer in the list"
            });
            return
        }

        res.status(200).send({
            message: "Successfully updated ToDo",
            data: data
        });
    } catch (err) {
        console.error("Error updating ToDo:", err);
        res.status(500).send({
            message: "Failed to update ToDo",
            error: err
        });
    }
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    try {
        const data = await ToDoModel.findByIdAndDelete(_id);

        if (!data) {
            console.log("No data found!");
            res.status(200).send({
                message: "The data is no longer in the list"
            });
            return
        }
        
        res.status(200).send({
            message: "Successfully deleted ToDo",
            data: data
        });
    } catch (err) {
        console.error("Error deleting ToDo:", err);
        res.status(500).send({
            message: "Failed to delete ToDo",
            error: err
        });
    }
}
