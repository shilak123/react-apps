import React  from 'react';
import UserForm from './UserForm';
import UserList from './UserList';


class Users extends React.Component {
   render() {
     return(
       <div className='users'>
         <h2>Users List</h2>
        <UserForm />

          <UserList />
       </div>
     );
}
}
export default Users;
