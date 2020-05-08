import React, {Component} from 'react';
import Login from './Login';
import Navbar from './Navbar';
import MainPage from './MainPage';
import CartList from './CartList';




class App extends Component {

  constructor(){
    super();
    this.state= {
      path:'/',
      isLogin: false,
      username:'',
      password:'',
      products:[],
      cartList:[],
    }
  }

  componentDidMount(){
    const ProductUrl = 'https://vue-course-api.hexschool.io/api/jay/products'
    //get product
    fetch(ProductUrl,{mode: 'cors'})
      .then(response => response.json())
      .then(datas =>{
        this.setState({products: datas.products})
      })
    const CartUrl = 'https://vue-course-api.hexschool.io/api/jay/cart'
    fetch(CartUrl,{mode: 'cors'})
      .then(response => response.json())
      .then(datas =>{
        this.setState({cartList: datas.data.carts})
      })

  }

  onChangeLogin = (e) => {
    e.target.value === 'Login' ?
      this.setState({ path:'/login'}) :
      this.setState({ isLogin: false , path: '/'});
      console.log(e)
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
    const url = "https://vue-course-api.hexschool.io/admin/signin";
    const {password, username} = this.state;
    const user = {
      username,
      password
    }
    fetch(url,
      { body:JSON.stringify(user), method:'POST',mode: 'cors',headers:{
        'content-type':'application/json',
      }})
      .then(response => response.json())
      .then(result => {if(result.success){this.setState({isLogin: true})} })
      .catch(error => console.log(error))
  }

  render(){
    const {isLogin, path, products, cartList} = this.state;

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
            : (<div>
              <MainPage products={products} />
              <CartList cartList= {cartList} /> </div>)
          }
      </div>
    )
  } 
}

export default App;



