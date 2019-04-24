import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from './listItem.jsx';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(this.props.list.map((ele)=>{return(
            <ListItem item={ele}/>
        )})
        )
    }
}
export default List;