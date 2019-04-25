import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: this.props.item.done
        }
    }

    render(){
        // window.alert(this.props.item.done);
        return(
            <div className="listItem">
                <span>{(this.props.item.done === true)? <s>{this.props.item.task}</s> : this.props.item.task}</span>
                <span className="tickBoxes">
                    <input className="doneBox" type="checkbox" onClick={()=>{this.toggle()}}/>
                    <span className="deleteBox" onClick={()=>{this.deleter()}}>X</span>
                </span>
            </div>
        )
    }

    toggle(){
        this.props.toggleDone(this.props.item.id)
        // if(this.state.done === false){
        //     this.setState({done: true})
        // }
    }

    deleter(){
        this.props.deleteTask(this.props.item.id);
        // window.alert("wub");
    }
}
export default ListItem;