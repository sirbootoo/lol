import "./App.css";
import Home from "./screens/Home/Home";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Earning from './screens/Earning/Earning'
import SwapToken from './screens/Swaptoken/SwapToken';
import Dashboard from './component/Dashboard'

function App() {
    return ( <
        div >
        <
        Home / > {
            /* <Router>
                    <Routes>
                    <Dashboard/>

                      <Route path="/" element={<Earning />} exact />
                      <Route path="/swapToken" element={<SwapToken />} />


                    </Routes>
                  </Router>   */
        } <
        /div>
    );
}

export default App;