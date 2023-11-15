//#App.js -- 1

// import logo from './logo.svg';
// import './App.css';
// import Home from './form/Home'
// import About from './form/About'
// import { BrowserRouter  , Route , Routes} from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<About/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

//<-----------------------------------Links/404 Page/Redirect--------------------------------------------->

//#App.js-2

// import logo from './logo.svg';
// import './App.css';
// import Home from './form/Home'
// import About from './form/About'
// import { BrowserRouter  , Route , Routes , Link} from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Link to="/about">About</Link>
//       <br/>
//       <Link to="/">Home</Link>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<About/>} />
      // 404 Page Not Found
//           <Route path="/*" element={<Page404/>} />
      //#Redirect directly to specific (here homepAge) page 
//           <Route path="/*" element={<Navigate to="/"/>} />    ---> Navigate

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

//<-----------------------------------Params------------------------->
// import logo from './logo.svg';
// import './App.css';
// import Home from './form/Home'
// import About from './form/About'
// //import Page404 from './form/Page404';
// import Param from './form/Params';
// import { BrowserRouter  , Navigate, Route , Routes} from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path='/user/:name' element={<Param/>}/>
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


