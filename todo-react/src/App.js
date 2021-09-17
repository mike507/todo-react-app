import './App.css';
import ItemContextProvider from "./context/ItemContext";
import ContainerTodoList from "./components/ContainerTodoList";
import ItemFormInput from "./components/ItemFormInput";

const App = () => {
   return (
       <ItemContextProvider>
           <div>
               <h1 className="text-center fs-4 m-3">Todo App (made with React)</h1>
               <ItemFormInput />
               <ContainerTodoList />
           </div>
       </ItemContextProvider>
   )};

export default App;
