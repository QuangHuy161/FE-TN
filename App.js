import './App.css';
import './App.scss';
import Main from './FE/main/Main';
import Supplies from './FE/main/Supplies/Supplies';
import Order from './FE/main/Order/Order';
import Staff from './FE/main/Staff/staff';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="/vattu" component={<Supplies/>} />
            <Route path="/nhanvien" component={Staff} />
            {/* <Route component={NotFound}/> */}
          </Route>
          <Route path="/banhang" element={<Order/>} />
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
