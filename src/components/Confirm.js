import React, {Component} from 'react';

class confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className='container'>
        <h1>Confirm Your Data</h1>
        <ul>
          <li><strong>First Name:</strong> {values.firstName}</li>
          <li><strong>Last Name:</strong> {values.lastName}</li>
          <li><strong>Email:</strong> {values.email}</li>
          <li><strong>Occupation:</strong> {values.occupation}</li>
          <li><strong>City:</strong> {values.city}</li>
          <li><strong>Bio:</strong> {values.bio}</li>
        </ul>
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
    )
  }
}

export default confirm