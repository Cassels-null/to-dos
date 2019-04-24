import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="listItem">{this.props.item}</div>
        )
    }
}
export default ListItem;