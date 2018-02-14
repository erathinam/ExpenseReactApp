
import React from 'react';
class TopBar extends React.Component {
  render() {
    return (
      <div>
      <div className="row topbar">
      <div className="col-md-1"></div>
      <div className="col-md-3">Expense Calculator</div>
      </div>
      </div>
    );
  }
}

TopBar.defaultProps = {
};

export default TopBar;