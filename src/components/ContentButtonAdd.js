import React, { Component } from "react";

class ContentButtonAdd extends Component{
    constructor(props){
      super(props);
    }

    
    
    render(){
        if (!this.props.enabled) return null;

        return(
            <button className="button content-add" onClick={this.props.onButtonClick}>Add
            </button>
        );
    }
    
};
  
export default ContentButtonAdd;