import {Route, Routes} from "react-router-dom";
import IndexPage from "./components/IndexPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/*<Route index element={<NavBar />} />*/}
                <Route path="/" element={<IndexPage />} />
            </Route>
        </Routes>
    )
}

export default App
