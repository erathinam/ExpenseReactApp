import React from 'react';
import Modal from 'react-modal';
import './modal.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');
class OverlayModel extends React.Component{
	
  constructor(props) {
    
    super(props);
    this.state = {
      startDate: moment(),
      nameOfExpense:'',
      expenseAmount:0,
      Comments:''
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveModal=this.saveModal.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.checkField=this.checkField.bind(this);
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleChange(e)
  {
    var obj={};
    obj[e.target.name]=e.target.value;
    this.setState(obj);
  }
  closeModal()
  {
    this.props.closeModal();
  }

  saveModal()
  {
    if(this.checkField())
    {
    this.props.closeModal();
    var obj={};
      obj['startDate']=this.state.startDate.format('MMMM Do YYYY, h:mm').toString();
      obj['nameOfExpense']=this.state.nameOfExpense;
      obj['expenseAmount']=this.state.expenseAmount;
      obj['Comments']=this.state.Comments;
      this.props.addtoArray(obj);
      }
  }
  checkField()
  {
    if(this.state.nameOfExpense!=='' && this.state.expenseAmount!==0 && this.state.Comments!=='')
      return true;
    return false;
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
          <div className="col-lg-12  modal-header">
            <div className="col-lg-10 nopadding">Add Expense
            </div>
            <div className="col-lg-2 nopadding">
              <button onClick={this.closeModal} className="modal-header-close close" aria-label="Close">
                <span aria-hidden="true">&times;
                </span>
              </button>
            </div>
          </div>
          <div className="modal-content-padding">
            <div className="col-lg-12 nopadding">
              <div className="col-lg-12 nopadding">
                <label  className="modal-expenseName-text">Enter the name for expense</label>
                <input className="form-control" onChange={this.handleChange} name="nameOfExpense" value={this.state.nameOfExpense} type="text"/>
              </div>
            </div>
          <div className="col-lg-12 nopadding modal-comment">
            <div className="col-lg-12 nopadding">
              <div className="col-lg-5 nopadding">
                <label className="modal-expenseName-text">Enter the expense</label>
                <input type="number" className="form-control" placeholder="0" onChange={this.handleChange} name="expenseAmount" />
              </div>
              <div className="col-lg-7 nopadding modal-comment">
                <label className="modal-expenseName-text">Enter the date</label>
                <div>
                  <div className="react-datepicker-wrapper">
                    <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChangeDate}  
    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 nopadding modal-comment">
            <div className="col-lg-12 nopadding">
              <label  className="modal-expenseName-text">Comments</label>
            </div>
            <div className="col-lg-12 nopadding">
              <textarea className="form-control" placeholder="Something to remember.." name="Comments" value={this.state.Comments} onChange={this.handleChange} rows="2"></textarea>
            </div>
          </div>
          <div className="col-lg-12 nopadding modal-comment">
            <div className="col-lg-10 nopadding"></div>
              <div className="col-lg-2 nopadding">
                <button className="btn btn-addExpense " onClick={this.saveModal}>Save</button>
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