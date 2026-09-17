import './App.css'
import HeaderContent from "./Components/HeaderContent/HeaderContent.tsx";
import BodyContent from "./Components/BodyContent/BodyContent.tsx";
function App() {


  return (
      <>
       <div id="wrapper">
       <HeaderContent/>
           <BodyContent>
               <button>click</button>
          <p>Lorem sjkahjofhbofhqpofhqfpe</p>
           </BodyContent>
           <BodyContent>
               <button>click</button>
           </BodyContent>
       </div>
      </>


  )
}

export default App
