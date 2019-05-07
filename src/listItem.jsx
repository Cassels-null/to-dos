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
        return(
            <div className="listItem">
                {/* render task name */}
                <span>
                    {(this.props.item.done === true)? 
                        <s>{this.props.item.task}</s> : //cross out task name if done is true
                        this.props.item.task}
                </span>
                <span className="tickBoxes">
                    {/* checkbok toggles "done" property */}
                    <input className="doneBox" type="checkbox" 
                        onClick={()=>{this.toggle()}}//changes state of App component
                        checked={this.props.item.done}//match checkbox appearance to value of "done"
                    />
                    {/* button deletes task from task list */}
                    <span className="deleteBox"
                        onClick={()=>{this.deleter()}}//changes state of App component
                    >x</span>
                </span>
            </div>
        )
    }

    //rename props functions to improve html readability
    toggle(){
        this.props.toggleDone(this.props.item.id)
    }
    
    deleter(){
        this.props.deleteTask(this.props.item.id);
    }
}
export default ListItem;