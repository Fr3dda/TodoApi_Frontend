import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './Views/TodoView';
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateView from './Views/CreateView';



 function App() {





return (
  <BrowserRouter>
    <>
      <div className="container mt-5">
        <MyNavbar/>
          <Routes>
            <Route path="/" element={<CreateView/>} />
            <Route path='/todos' element={<TodoView/>} />
          </Routes>
      </div>
    </>
  </BrowserRouter>
  );
}

export default App;