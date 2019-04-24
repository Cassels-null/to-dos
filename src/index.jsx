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

    addToList(task){
        window.alert("_______");
        this.state.list.push(task);
    }

    render(){
        return(<div>
                One Cannot Eat Raw Sparklebunny
                <NewTodo addToList={this.addToList}/>
            </div>
        )
    }


}
// window.alert("ping!");
ReactDOM.render(<App/>, document.getElementById("app"));