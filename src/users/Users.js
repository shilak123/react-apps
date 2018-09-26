import React, {Component} from 'react';
import User from './User';

class Users extends Component {

state = {
	users: [
{name:'john',age:23},
{name:'marin',age:30},
{name:'sona',age:50}

	],
	title:'Users List'
}

makeMeYounger = () => {

const newUser = this.state.users.map((user) =>{
const tempUser = user;
tempUser.age -=10;
return tempUser; 

})
this.setState({
	newUser

});

}

	render() {
		return (
			<div>
<h1>{this.state.title}</h1>
<button onClick={this.makeMeYounger}>make me younger</button>
			{
				this.state.users.map((user) =>{
					return <User age={user.age}>{user.name}</User>
				})
			}

			</div>

			)
	}
} 

export default Users