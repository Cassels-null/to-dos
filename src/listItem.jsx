import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: this.props.done
        }
    }

    render(){
        return(
            <div className="listItem">
                <span>{(this.state.done === true)? 
                    <s>{this.props.item.task}</s> : 
                    this.props.item.task
                }</span>
                <input type="checkbox" onSubmit={this.toggleDone}/>
            </div>
        )
    }

    toggleDone(){
        if(this.state.done === false){
            this.setState({done: true})
        }
    }
}
export default ListItem;