import React from 'react';
import ReactDOM from 'react-dom';

import NewTodo from './newTodo.jsx';

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
        tempList.push(document.getElementById("taskInput").value);
        this.setState({list: tempList});
        window.alert(this.state.list.length);
    }

    render(){
        return(<div>
                One Cannot Eat Raw Sparklebunny
                    <form onSubmit={this.addToList}>
                    <input id="taskInput" type="text" placeholder="create new to-do"></input>
                    <input type="submit" value="add to-do"></input>
                </form>
            </div>
        )
    }


}
// window.alert("ping!");
ReactDOM.render(<App/>, document.getElementById("app"));