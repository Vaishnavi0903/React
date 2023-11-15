function LiftingStateUp(p)
{
    const data = "Anil Siddhu"
    const item = {name:"anil" , email:"anil@gmail.com" , contact:"797794"}
    return(
          <div>
            <h2>User Name :  </h2>
            <button onClick={()=>p.alert(data)}>Click me</button><br></br>
            <button onClick={()=>p.alertp(item)}>Update me</button>
          </div>
    );
}

export default LiftingStateUp;


//#App.js

// import logo from './logo.svg';
// import './App.css';
// import LiftingStateUp from './liftingstateup';
// import React from 'react';

// function App() {
  
//   function ParentAlert(data)
//   {
//      alert(data)
//   }
//   function Alert(item)
//   {
//      alert(item.name)
//   }
//   return (
//     <div>
//       <h1>LIFTING STATE UP</h1>
//       <LiftingStateUp alert={ParentAlert} alertp={Alert}/>
//     </div>
//   );
// }

// export default App;
