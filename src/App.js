// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { PureComponent } from "react";
import SearchBarExample from './home/search'
import Bottom from "./pages/Bottom";
import Routers from "./routes";
// function App() {
//   return (
//     <div className="App">
//       hello
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends PureComponent{
  render(){
    return(
      <div>
        <Routers/>
      </div>
    )
  }
}
export default App;
