
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import CustomerForm from './components/CustomerForm';
import StatusForm from './components/StatusForm';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <>
      <div className="container mt-5">

        <MyNavbar />        


        <TodoForm />
        <CustomerForm />
        <StatusForm />


      </div>
    </>
  );
}

export default App;
