import React from 'react';
import ReactDOM from 'react-dom';

import NewTodo from './newTodo.jsx';
import List from './list.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.addToList = this.addToList.bind(this);
    }

    addToList(e){
        e.preventDefault();
        let tempList = this.state.list.slice();
        tempList.push({
            task: document.getElementById("taskInput").value,
            done: false});
        this.setState({list: tempList});
        // window.alert(this.state.list.length);
    }

    // toggleDone(id){
    //     let targetIndex = this.list.findIndex((ele)=>{ele.id ===id})
    //     if(targetIndex < 0) return;
    //     let tempList = this.state.list.slice();
    //     templist[targetIndex].done = true;
    //     this.setState({list: tempList});
    // }

    render(){
        return(<div id="main">
                <div>One Cannot Eat Raw Sparklebunny</div>
                    <form id="inputBar" onSubmit={this.addToList}>
                    <input id="taskInput" type="text" placeholder="create new to-do"></input>
                    <input id="submit" type="submit" value="add to-do"></input>
                </form>
                <List list={this.state.list}/>
            </div>
        )
    }


}
// window.alert("ping!");
ReactDOM.render(<App/>, document.getElementById("app"));