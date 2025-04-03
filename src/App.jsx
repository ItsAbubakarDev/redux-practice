import './App.css'
import Todo from "./Components/Todo";
import {Provider} from "react-redux";
import {store} from "./App/store";

function App() {
  return (
    <>
     <Provider store={store}>
      {/* now every component inside the Provider component can access the Reduc store  */}
      <Todo></Todo>
     </Provider>
    </>
  )
}

export default App
