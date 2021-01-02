import React,{ Component } from 'react';

class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container">
        <h1>Enter User Details</h1>
        <input
          placeholder="Enter Your First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <input
          placeholder="Enter Your Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <input
          placeholder="Enter Your Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
         />
        <button onClick={this.continue}>Continue</button>
      </div>
    )
  }
}

export default UserDetails