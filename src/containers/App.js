import React, {Component} from 'react';
import Login from './Login';
import Navbar from './Navbar';


class App extends Component {

  constructor(){
    super();
    this.state= {
      path:'/',
      isLogin: false,
      username:'',
      password:'',
    }
  }

  onChangeLogin = (e) => {
    e.target.value === 'Login' ?
      this.setState({ isLogin: true , path:'/login'}) :
      this.setState({ isLogin: false , path: '/'})
  }

  onChangeValue = (e) => {
    let password,username;
    switch (e.target.id) {
      case 'email':
        username = e.target.value;
        this.setState({username})
        break;
      default:
        password = e.target.value;
        this.setState({password})
        break ;
    }
  }

  onRequestLogin = () =>{
    const url = "https://vue-course-api.hexschool.io/admin/sigin";
    const {password, username} = this.state;
    const user = {
      username,
      password
    }
    console.log(JSON.stringify(user))
    fetch(url,
      {body:JSON.stringify(user), method:'POST',mode: 'cors'})
      .then(response => console.log(response.json()))
      .catch(error => console.log(error))
  }

  render(){
    const {isLogin, path} = this.state;

    return (
      <div>
        <Navbar 
          onChangeLogin = {this.onChangeLogin}
          isLogin={isLogin} />
          {
            path ==='/login' ? 
            <Login 
              onChangeValue={this.onChangeValue}
              onRequestLogin = {this.onRequestLogin} /> 
            : ''
          }
      </div>
    )
  } 
}

export default App;



