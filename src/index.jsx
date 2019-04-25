import React from 'react';
import ReactDOM from 'react-dom';

import NewTodo from './newTodo.jsx';
import List from './list.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            maxId: 0
        }
        this.addToList = this.addToList.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    addToList(e){
        e.preventDefault();
        let tempList = this.state.list.slice();
        tempList.push({
            task: document.getElementById("taskInput").value,
            done: false,
            id: this.state.maxId});
        this.setState({list: tempList});
        this.setState({maxId: this.state.maxId + 1})
        // window.alert(this.state.list.length);
    }

    toggleDone(id){
        // window.alert("0")
        let targetIndex = this.state.list.findIndex((ele)=>{return (ele.id === id)})
        // window.alert(targetIndex + "_");
        if(targetIndex < 0){
            window.alert(targetIndex);
            return;
        }
        let tempList = this.state.list.slice();
        tempList[targetIndex].done = !tempList[targetIndex].done;
        this.setState({list: tempList});
    }

    render(){
        return(<div id="main">
                <div>One Cannot Eat Raw Sparklebunny</div>
                    <form id="inputBar" onSubmit={this.addToList}>
                    <input id="taskInput" type="text" placeholder="create new to-do"></input>
                    <input id="submit" type="submit" value="add to-do"></input>
                </form>
                <List list={this.state.list} toggleDone={this.toggleDone}/>
            </div>
        )
    }


}
// window.alert("ping!");
ReactDOM.render(<App/>, document.getElementById("app"));