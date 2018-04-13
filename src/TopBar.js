
import React from 'react';
class TopBar extends React.Component {
  render() {
    return (
      <div>
      <div className="col-lg-12 topbar">
      <div className="col-lg-1"></div>
      <div className="col-lg-3">Expense Calculator</div>
      </div>
      </div>
    );
  }
}

TopBar.defaultProps = {
};

export default TopBar;