import React, {Component} from 'react';

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container">
        <h1>Enter Personal Details</h1>
        <input
          placeholder="Enter Your Occuption"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <input
          placeholder="Enter Your City"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <input
          placeholder="Enter Your Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
    )
  }
}

export default PersonalDetails