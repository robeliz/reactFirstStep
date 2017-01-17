import React from "react";
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

export default class FilterableProductTable extends React.Component {
    constructor(){
       super(); 
       this.state = {
               filter: null
       }
    }
    
    filterList(ev){
        let filter = ev.target.value;
        console.log("FilterList "+filter);
        setTimeout(()=>{
            this.setState({
                filter:filter,
            });
        },1000);
    }
    
    render(){
      /* Bind.this hace que la funcion haga su labor sobre este componente. La funcion se debe ir propagando por el componente
       * en este caso el seachBar
       */
        return(
           <div>
                <SearchBar onChange={ this.filterList.bind(this) }/>
                <ProductTable products={this.props.store} filter={this.state.filter}/>
           </div>
        )
    }
}