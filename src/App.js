import './App.css';
import Navabr from './Component/Navabr';
import NewsComponent from './Component/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LiveNewsComponent from './Component/LiveNewsComponent';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navabr />
        <h1 className='text-center my-3'>Top Headlines</h1>
        <Routes>
          <Route exact path="/"element={<NewsComponent pageSize={8}/>}/>
          <Route exact path="/lazy-load"element={<LiveNewsComponent pageSize={8}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
