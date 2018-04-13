import React from 'react';
import OverlayModel from './OverlayModel';
import './index.css';
import EachTile from './EachTile'
class Tiles extends React.Component{
	
	constructor(props) {
    super(props);
this.state = {
      modelShow: false,
      expenses:[]
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.addArray=this.addArray.bind(this);
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

	addArray(obj)
	{
		this.state.expenses.push(obj);
	}
	render()
	{ 
		return(
		<div>	
			<div className="tiles-margin">
				<div className="maintile-padding">
					<div className="col-lg-12 input-group">
						<div className="col-lg-2 mobile-nopadding">
							<span className="input-group-btn">
								<button className="btn btn-addExpense " onClick={this.handleShow}>Add Expense</button>
							</span>
						</div>
						<div className="col-lg-6">
						</div>
					</div>
      			</div>
      		<OverlayModel closeModal={this.handleClose} isOpen={this.state.modelShow} addtoArray={this.addArray}/>
      		<EachTile expenses={this.state.expenses}/>
      		</div>
      	</div>
	);
	}
}



export default Tiles;