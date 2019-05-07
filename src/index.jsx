import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.jsx';

//normal react setup
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [//pre-seeded data in actual deployment, I reccomend useing a database,
                    //but I wanted to ensure that every user who opens this demo sees some prexisting data.
                    //and persitantly storeing todos for all users could have weakend the demo.
                {done: false,
                id:0,
                task: "Hello World!"},
                {done: false,
                id:1,
                task: "Lorum Ipsum Dolor Sit Amet"},
                {done: false,
                id:2,
                task: "this is a series of words that I am typeing with my hands"}
            ],
            maxId: 3
        }
        this.addToList = this.addToList.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    //add a new task to the todo the todo list
    //to be called by a form sumbition
    addToList(e){
        e.preventDefault();
        let tempList = this.state.list.slice();
        tempList.push({
            task: document.getElementById("taskInput").value,
            done: false,
            id: this.state.maxId});
        this.setState({list: tempList});
        this.setState({maxId: this.state.maxId + 1})
    }

    //accepts a task id, and toggels that task's "done" property to true/false
    toggleDone(id){
        let targetIndex = this.state.list.findIndex((ele)=>{return (ele.id === id)})
        if(targetIndex < 0){
            window.alert(targetIndex);
            return;
        }
        let tempList = this.state.list.slice();
        tempList[targetIndex].done = !tempList[targetIndex].done;
        this.setState({list: tempList});
    }

    //accepts a task id, and removes that task from the task list in App's state
    deleteTask(id){
        let targetIndex = this.state.list.findIndex((ele)=>{return (ele.id === id)})
        if(targetIndex < 0){
            window.alert(targetIndex);
            return;
        }
        let tempList = this.state.list.slice();
        tempList.splice(targetIndex, 1);
        this.setState({list: tempList});
    }

    render(){
        return(<div id="main">
                <div id="banner">To-Do List</div>
                {/* render input */}
                <form id="inputBar" onSubmit={this.addToList}>
                    <input id="taskInput" type="text" placeholder="create new to-do"></input>
                    <input id="submit" type="submit" value="add to-do"></input>
                </form>
                {/* render task list */}
                <List list={this.state.list} deleteTask={this.deleteTask} toggleDone={this.toggleDone}/>
            </div>
        )
    }


}
//render <App/> to page
ReactDOM.render(<App/>, document.getElementById("app"));