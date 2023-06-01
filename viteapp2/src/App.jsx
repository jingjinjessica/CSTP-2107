// function App(){
//   return(
//     <h1>
//       Hello world
//     </h1>
//   )
// }
// Header -component
//Banner Section - component

import Header from "../compoments/Header/Header";
import Banner from"../compoments/Banner/Banner";
import Footer from"../compoments/Footer/Footer";

//Footer section -component
const App = () =>{
  return (
    <div>
      <Header/>
      <Banner/>
      <Footer/>
      {/* Footer */}
       {/* Footer Compnent */}
    </div>
  )
}
export default App;