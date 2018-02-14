import React from 'react';
import OverlayModel from './OverlayModel';
class Tiles extends React.Component{
	
	constructor(props) {
    super(props);
this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

	handleShow()
	{
		this.setState({show:true});
		//alert("true");
	}
	handleClose()
	{
		this.setState({show:false});
	}
	render()
	{
		return(
		<div>	
      <button onClick={this.handleShow}>Add Expense</button>
      {this.state.show?<OverlayModel/>:null}</div>
	);
	}
}

Tiles.defaultProps = {
};

export default Tiles;