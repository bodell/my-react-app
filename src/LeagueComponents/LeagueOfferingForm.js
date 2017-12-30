import React, {Component} from 'react';  
import Text from '../FormComponents/Text.js'; 
import Select from '../FormComponents/Select.js'; 

class LeagueOfferingForm extends Component {  
  constructor(props) {
    super(props);
    this.state = {  
        offering : this.props.data,  
        offeringTypeList : [
            {text : "Recreational", value : "Recreational"},
            {text : "Competitive", value : "Competitive"},
            {text : "Club", value : "Club"},
            {text : "Camp", value : "Camp"},
            {text : "Tournament", value : "Tournament"},
        ],
        genderTypeList : [
            {text : "Coed", value:"Coed"}, 
            {text : "Male", value:"Male"}, 
            {text : "Female", value : "Female"}
        ],
        monthList : [
            {text : "January", value: 1},
            {text : "February", value: 2},
            {text : "March", value: 3},
            {text : "April", value: 4},
            {text : "May", value: 5},
            {text : "June", value: 6},
            {text : "July", value: 7},
            {text : "August", value: 8},
            {text : "September", value: 9},
            {text : "October", value: 10},
            {text : "November", value: 11},
            {text : "December", value: 12},
        ]       
    }; 
    this.handleChange = this.handleChange.bind(this);  
}

handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
}
 
render() {     
    
    return (      
        <div>
            <Text
                inputType={'text'} title={'Offering Name'} name={'offering.name'} 
                controlFunc={this.handleChange}
                content={this.state.offering.name}
                placeholder={'Fall'}
                ref={(a) => this.name = a}  /> 
            <Select
                title={'Offering Type'}
                name={'type'}
                placeholder={'Select Offering Type'}
                controlFunc={this.handleChange}
                options={this.state.offeringTypeList}
                selectedOption={this.state.offering.type} /> 
            <Select
                name={'gender'}
                placeholder={'Select Gender Type'}
                controlFunc={this.handleChange}
                options={this.state.genderTypeList}
                selectedOption={this.state.offering.gender} /> 
            <Select
                name={'monthStart'}
                placeholder={'Select Offering Start Month'}
                controlFunc={this.handleChange}
                options={this.state.monthList}
                selectedOption={this.state.offering.monthStart} /> 
            <Select
                name={'monthEnd'}
                placeholder={'Select Offering End Month'}
                controlFunc={this.handleChange}
                options={this.state.monthList}
                selectedOption={this.state.offering.monthEnd} /> 
            <Text
                inputType={'text'} title={'Minimum Age'} name={'ageLowerBound'} 
                controlFunc={this.handleChange}
                content={this.state.offering.ageLowerBound}
                placeholder={'5'} />
            <Text
                inputType={'text'} title={'Maximum Age'} name={'ageUpperBound'} 
                controlFunc={this.handleChange}
                content={this.state.offering.ageUpperBound}
                placeholder={'18'} />      
            <Text
                inputType={'text'} title={'Fee'} name={'fee'} 
                controlFunc={this.handleChange}
                content={this.state.offering.fee}
                placeholder={'115.00'} />      
        </div>  
      );
  } 
  
}

export default LeagueOfferingForm;