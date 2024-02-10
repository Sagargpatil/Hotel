import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./component/Header.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slides from "./component/Slides";
import Home from "./component/Home";
import StarterData from "./component/StarterData";
import MyComponent from "./component/Sample";
import SpecialStarter from "./component/SpecialStarter";
import TeaCoffee from "./component/TeaCoffee";
import Salad from "./component/Salad";
import Soups from "./component/Soups";
import MainCourse from "./component/MainCourse";
import Dal from "./component/Dal";
import Chinese from "./component/Chinese";
import Roti from "./component/Roti";
import PaneerSpecial from "./component/PaneerSpecial";
import Rice from "./component/Rice";
import SpecialVeg from "./component/SpecialVeg";
import ColdDrinks from "./component/ColdDrinks";
import Snacks from "./component/Snacks";
import Declaration from "./component/Declaration";





const App = () => {
  // // Function to check if the screen is a mobile or tablet
  // const isMobileOrTablet = () => {
  //   return window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile/tablet
  // };

  // // Render the mobile message if not on mobile or tablet
  // if (!isMobileOrTablet()) {
  //   return (
  //     <div className="app">
  //       <div className="mobile-message">
  //         <p>Please open this site on a mobile or tablet device.</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Render the regular content if on mobile or tablet
  return (
    <div className="app">
      <div>
        <Header />
      </div>

      <div className="main-content container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sdata" Component={StarterData} />
          <Route path="/specialstarter" Component={SpecialStarter} />
          <Route path="/tea" Component={TeaCoffee} />
          <Route path="/salad" Component={Salad} />
          <Route path="/soup" Component={Soups} />
          <Route path="/maincourse" Component={MainCourse} />
          <Route path="/dal" Component={Dal} />
          <Route path="/chinese" Component={Chinese} />
          <Route path="/roti" Component={Roti}/>
          <Route path="/paneer" Component={PaneerSpecial}/>
          <Route path="/rice" Component={Rice}/>
          <Route path="/specialveg" Component={SpecialVeg}/>
          <Route path="/colddrinks" Component={ColdDrinks}/>
          <Route path="/snacks" Component={Snacks}/>
          <Route path="/declaration" Component={Declaration}/>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

// function App() {

//   const isMobileOrTablet = () => {
//     return window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile/tablet
//   };

//   // Render the mobile message if not on mobile or tablet
//   if (!isMobileOrTablet()) {
//     return (
//       <div className="app">
//         <div className="mobile-message">
//           <p>Please open this site on a mobile or tablet device.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <div>
//         <Header />
//       </div>
//       <div className="main-content container">
//         <Routes>
//           <Route path="/" Component={Home} />

//         </Routes>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

export default App;
