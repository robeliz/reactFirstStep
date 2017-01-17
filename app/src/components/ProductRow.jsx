import React from "react";

export default class ProductTable extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
                <h6>{this.props.product.name}  {this.props.product.price}</h6>
        )
    }
}