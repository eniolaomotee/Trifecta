import React from 'react';
import AdminRoutez from './Routes/AdminRoutez';
import UserRoutez from './Routes/UserRoute';
import './assets/css-styles/DashHomeStyle.css'
import './assets/css-styles/ModalStyle.css'
import './assets/css-styles/responsiveness.css'

function App() {

  return (
    <div className="App">
      <AdminRoutez/>   
    </div>
  );
}

export default App;
