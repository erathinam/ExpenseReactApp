import React from 'react';
class OverlayModel extends React.Component{
	render()
	{
		return(
      <div>
      <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div></div>
	);}
}

OverlayModel.defaultProps = {
};

export default OverlayModel;