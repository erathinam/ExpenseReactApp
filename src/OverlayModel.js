import React from 'react';
import Modal from 'react-modal';
import './modal.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
class OverlayModel extends React.Component{
	
  constructor(props) {
    
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  closeModal()
  {
    this.props.closeModal();
  }
  render()
	{

		return(
      <div>
        <Modal
          aria-labelledby='modal-label'
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
          className="modal-size">
          <div className="row modal-header">
            <div className="col-md-10 ">Add Expense
            </div>
            <div className="col-md-2">
              <button onClick={this.closeModal} className="modal-header-close close" aria-label="Close">
                <span aria-hidden="true">&times;
                </span>
              </button>
            </div>
          </div>
          <div className="modal-content-padding">
            <div className="row"><div className="col-md-10"><label  className="modal-expenseName-text">Enter the name for expense</label><input className="form-control" id="expenseName" type="text"/>
            </div></div>
          <div className="row">
          <div className="col-md-12 modal-datepicker-header-padding"><label  className="col-md-5 nopadding modal-expenseName-text">Enter the expense</label><label  className="col-md-7 nopadding modal-expenseName-text">Enter the date</label></div>
          <i className="fas modal-dollar-sign fa-dollar-sign"></i><div className="col-md-4"><input className="form-control" placeholder="0" id="expenseAmount" type="number"/></div><div className="col-md-4"><DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}  
    /></div><div class="col-md-4"></div>
</div>

<div className="row modal-comment">
<div className="col-md-12">
<label  className="modal-expenseName-text">Comments</label>
</div>
<div className="col-md-12">
<textarea class="form-control" placeholder="Something to remember.." id="expenseComment" rows="2"></textarea>
</div>
</div>

<div className="row modal-comment">
<div className="col-md-10"></div>
<div className="col-md-2">
<button className="btn btn-addExpense ">Save</button>
</div>
</div>

</div>
        </Modal>

    </div>
      );
}};

OverlayModel.defaultProps = {
};

export default OverlayModel;