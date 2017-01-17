import React from "react";

export default class ProductTable extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
                <h4>{this.props.category}</h4>
        )
    }
}