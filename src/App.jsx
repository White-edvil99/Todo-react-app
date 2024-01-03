import AppName from "./Components/AppName";
import Doto from "./Components/Doto";
import Itemcontainer from "./Components/Itemcontainer";
import Enjoyholiday from "./Components/Enjoyholiday";
import TodoSeniorContextProvider from "./Store/Todo-item-store";

import "./App.css";



function App() {
  
  return (
    <>
      <TodoSeniorContextProvider>
        <center className="contentholder">
          <AppName></AppName>
          <Doto></Doto>
          <Enjoyholiday></Enjoyholiday>
          <Itemcontainer></Itemcontainer>
        </center>
      </TodoSeniorContextProvider>
    </>
  );
}

export default App;
