import React, {Component} from 'react';  
import Text from '../FormComponents/Text.js'; 
import Select from '../FormComponents/Select.js'; 
import Modal from '../UIComponents/Modal.js';
import LeagueOfferingForm from './LeagueOfferingForm.js';
class LeagueOfferingEditor extends Component {  
  constructor(props) {
    super(props);
    this.state = {  
        offerings : props.data,  
        isOpen:false 
    };  
    // This binding is necessary to make `this` work in the callback
    this.onSave = this.onSave.bind(this);
    this.addLeagueOffering = this.addLeagueOffering.bind(this);
    this.removeLeaugeOffering =this.removeLeaugeOffering.bind(this);
  }
  toggleModal = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onSave = (event) => {
    event.preventDefault();
    this.setState({});
  }
  addLeagueOffering = (offering) => {
    const leagueOffering = this.leagueOfferingForm.state.offering;
    //event.preventDefault();
    this.setState({offerings : this.state.offerings.concat([leagueOffering])});
  };
  removeLeaugeOffering = (leagueOffering) => {

  };
  leagueOfferingFormRef = (leagueOfferingForm) => {
    this.leagueOfferingForm = leagueOfferingForm;
  }
  render() {     
    let rows = this.state.offerings.map(offering => {
        return <OfferingRow key = { offering.id} data = {offering} />
    });
    return (
      <div>
        <table >
            <tbody>{rows}</tbody> 
        </table>
        <button onClick={this.toggleModal}>Add</button>         
            <Modal header="Add League Offering" show={this.state.isOpen} onClose ={this.toggleModal} onSave={this.addLeagueOffering}>
              <LeagueOfferingForm data={{}} ref={this.leagueOfferingFormRef}/>  
            </Modal> 
      </div>
      );
  } 
  
}
const OfferingRow = (props) => {
    return (
      <tr>
        <td>
          { props.data.id }
        </td>
        <td>
          { props.data.name }
        </td>
      </tr>
    );
  }
export default LeagueOfferingEditor;