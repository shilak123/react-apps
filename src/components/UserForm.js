import React, { Component } from 'react';
import {connect} from 'react-redux';
class UserForm extends Component {
  handleSubmit = (e) =>{
    e.preventDefault();
    const name = this.getName.value;
    const details = this.getDetails.value;
    const data = {
      id :new Date(),
      name,
      details
    }

  this.props.dispatch({
    type:'ADD_USER',
    data
  })
  this.getName.value = '';
  this.getDetails.value = '';
    }
render() {
return (
<div>
  <h1>Create User</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" placeholder="Enter Name"  ref={(input)=>this.getName = input}/><br /><br />
   <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getDetails= input}/><br /><br />
   <button>Submit</button>
  </form>
</div>
);
}
}
export default connect()(UserForm);
