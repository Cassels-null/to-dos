import React from 'react';
import ReactDOM from 'react-dom';

class NewTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(<form onSubmit={this.createNewTask}>
                <input id="taskInput" type="text" placeholder="create new to-do"></input>
                <input type="submit" value="add to-do"></input>
                {/* <button></button> */}
            </form>
        )
    }

    createNewTask(e){
        e.preventDefault();
        let task = document.getElementById("taskInput").value;
        // window.alert(1 + task);
        this.props.addToList(task)//{task: document.getElementById("taskInput").value})
    }
}
// window.alert("ping!");
export default NewTodo;