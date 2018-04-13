import './App.css';
import React from 'react';
class EachTile extends React.Component {
  render() {
    var listItems = this.props.expenses.map(function(item,i) {
      return (
      <div className="tiles-outline" key={i}>
        <div className="col-lg-12 tiles-flex">
          <div className="col-lg-10">
            <div className="tiles-header-expensename">{item.nameOfExpense}
            </div>
            <div className="tiles-expensedate">{item.startDate}
            </div>
            <div className="nopadding">{item.Comments}
            </div>
          </div>
          <div className="col-lg-2 tiles-amount">
            <div>You spent ${item.expenseAmount}
            </div>
          </div>
        </div>
      </div>
      )
  })
  return listItems;
}}

EachTile.defaultProps = {
};

export default EachTile;