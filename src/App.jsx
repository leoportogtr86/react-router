import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/index.jsx";
import Page1 from "./components/pages/Page1/index.jsx";
import Page2 from "./components/pages/Page2/index.jsx";
import FilhaPage1 from "./components/pages/FilhaPage1/index.jsx";

function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/page1"}>Page 1</Link>
                    </li>
                    <li>
                        <Link to={"/page2"}>Page 2</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/page1"} element={<Page1/>}>
                    <Route path={"filhaPage1"} element={<FilhaPage1/>}/>
                </Route>
                <Route path={"/page2"} element={<Page2/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
