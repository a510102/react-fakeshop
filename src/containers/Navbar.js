import React from 'react'

const Navbar = ({ onChangeLogin, isLogin }) => {
  return (
    <div>
      <h1 className="">Fake shop</h1>
        {
          isLogin ? <input type="button" onClick={onChangeLogin} value="Signout" /> : <input type="button" onClick={onChangeLogin} value="Login" />
        }  
    </div>
  )
}
export default Navbar;