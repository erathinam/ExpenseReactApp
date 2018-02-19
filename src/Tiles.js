import React from 'react';
import OverlayModel from './OverlayModel';
import './index.css';
import EachTile from './EachTile'
class Tiles extends React.Component{
	
	constructor(props) {
    super(props);
this.state = {
      modelShow: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

	handleShow()
	{
		this.setState({modelShow:true});
		//alert("true");
	}
	handleClose()
	{
		this.setState({modelShow:false});
	}
	render()
	{ 
		return(
		<div>	
			<div className="tiles-margin">
				<div className="tiles-padding">
					<div className="row input-group">
						<div className="col-md-4 nopadding">
							<input type="text" className="form-control" placeholder="Search for expenses"/>
						</div>
      					<div className="col-md-2">
      						<span className="input-group-btn">
      							<button className="btn btn-addExpense " onClick={this.handleShow}>Add Expense</button>
      						</span>
      					</div>
      				</div>
      				<OverlayModel closeModal={this.handleClose} isOpen={this.state.modelShow}/>
      			</div>
      		</div>
      	</div>
	);
	}
}

Tiles.defaultProps = {
	expenses:[]
};

export default Tiles;