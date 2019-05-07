import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from './listItem.jsx';

//react setup
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        //render one <ListItem/> element per task recived as props
        return(this.props.list.map((ele)=>{return(
            <ListItem 
                item={ele} 
                deleteTask={this.props.deleteTask} 
                toggleDone={this.props.toggleDone}
            />
        )})
        )
    }
}
export default List;