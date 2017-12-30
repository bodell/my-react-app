import React from 'react';
import CheckboxRadioGroup from './FormComponents/CheckboxRadioGroup.js';  
import Text from './FormComponents/Text.js';  
import TextArea from './FormComponents/TextArea.js';  
import Select from './FormComponents/Select.js';
import LeagueOfferingEditor from './LeagueComponents/LeagueOfferingEditor.js';
class LeagueForm extends React.Component
{
    constructor(){
        super(); //Always set your super when using a constructor
        this.state = this.getDefaultState();
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleLeagueNameChange = this.handleLeagueNameChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getDefaultState() {
        return {
            leagueName : '',
            sport: '',
            address : {},
            contactInfo:{},
            stateList:[],
            offerings:[]
        };
    }
    handleClearForm(event) {
        event.preventDefault();
        this.setState(this.getDefaultState());
    }
    handleLeagueNameChange(e) {
        this.setState({leagueName : e.target.value});
    }
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const { leagueName, sport} = this.state;
        //do post here;
    }
    render() {
        return(           
            <form>
                <fieldset>
                    <legend>Add a League</legend>
                    <Text
                        inputType={'text'} title={'League Name'} name={'leagueName'} 
                        controlFunc={this.handleLeagueNameChange}
                        content={this.state.leagueName}
                        placeholder={'Pa\'ani Soccer League'} />  
                    <Text
                        inputType={'text'} title={'League Name Abbreviation'} name={'abbreviation'} 
                        controlFunc={this.handleChange}
                        content={this.state.abbreviation}
                        placeholder={'PSL'} />                      
                    <Text
                        inputType={'text'}
                        title={'Sport'}
                        name={'sport'}
                        controlFunc={this.handleChange}
                        content={this.state.sport}
                        placeholder={'Soccer'} />
                    <TextArea
                        inputType={'text'}
                        title={'Description'}
                        name={'description'}
                        controlFunc={this.handleChange}
                        content={this.state.description}
                        placeholder={'Paani soccer league provides world class youth soccer programs. '} />
                    
                </fieldset>
                <fieldset>
                    <legend>League Address</legend>
                    <Text
                        inputType={'text'} title={'Address Line 1'} name={'addressLine1'} 
                        controlFunc={this.handleChange}
                        content={this.state.address.addressLine1}
                        placeholder={'123 Ala Moana Blvd.'} />  
                    <Text
                        inputType={'text'} title={'Address Line 2'} name={'addressLine2'} 
                        controlFunc={this.handleChange}
                        content={this.state.address.addressLine2}
                        placeholder={'Suite 100'} />  
                    <Text
                        inputType={'text'} title={'City'} name={'city'} 
                        controlFunc={this.handleChange}
                        content={this.state.address.city}
                        placeholder={'Honolulu'} /> 
                    <Select
                        name={'state'}
                        placeholder={'Select State'}
                        controlFunc={this.handleChange}
                        options={this.state.stateList}
                        selectedOption={this.state.state} /> 
                    <Text
                        inputType={'text'} title={'Zip'} name={'city'} 
                        controlFunc={this.handleChange}
                        content={this.state.address.zip}
                        placeholder={'96814'} /> 
                </fieldset>
                <fieldset>
                    <legend>League Contact Info</legend>
                    <Text
                        inputType={'text'} title={'Contact Name'} name={'mainContactName'} 
                        controlFunc={this.handleChange}
                        content={this.state.contactInfo.mainContactName}
                        placeholder={'John Doe'} /> 
                    <Text
                        inputType={'text'} title={'Contact Title'} name={'mainContactTitle'} 
                        controlFunc={this.handleChange}
                        content={this.state.contactInfo.mainContactTitle}
                        placeholder={'President'} />  
                    <Text
                        inputType={'text'} title={'Email'} name={'email'} 
                        controlFunc={this.handleChange}
                        content={this.state.contactInfo.email}
                        placeholder={'email@playpaani.com'} /> 
                    <Text
                        inputType={'text'} title={'Phone'} name={'phone'} 
                        controlFunc={this.handleChange}
                        content={this.state.contactInfo.phone}
                        placeholder={'(808) 799-0565'} />   
                    <Text
                        inputType={'text'} title={'Website Address'} name={'websiteUrl'} 
                        controlFunc={this.handleChange}
                        content={this.state.contactInfo.websiteUrl}
                        placeholder={'www.playpaani.com'} />   
                </fieldset>
                <fieldset>
                    <legend>League Offerings</legend>
                    <LeagueOfferingEditor data={this.state.offerings}/>
                </fieldset>
                <button type="submit">Add League!</button>
                <button className="btn btn-link float-left" onClick={this.handleClearForm}>Clear form</button>
            </form> 
                     
        );
    }
}

export default LeagueForm;