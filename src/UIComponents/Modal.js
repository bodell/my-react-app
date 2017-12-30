import React, {Component} from 'react';    
import PropTypes from 'prop-types';
import Fade from './Transitions/Fade.js';


class Modal extends Component {  
  constructor(props) {
    super(props);
    
  }

  render() { 
    /*if(!this.props.show) {
        return null;
    }*/
    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50,
        visibility: this.props.show === true ? "visible" : "hidden"
    };
    return (   
        
        <Fade in={this.props.show} key={this}>
            <div className="backdrop" style={backdropStyle}></div>    
            <div className="modal" style={{
                visibility: this.props.show === true ? "visible" : "hidden",
                zIndex : 99999
                }}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3>{this.props.header}</h3>
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={this.props.onClose}>Cancel</button>
                    <button href="#" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
                </div>
            </div>             
        </Fade>
       
      );
  } 
  
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
export default Modal;