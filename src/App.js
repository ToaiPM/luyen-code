import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "~/components/GlobalStyles";
import { publicRouter } from "./routes";
function App() {
    return ( 
        <GlobalStyles>
            <Router>
                <div className="App">
                    <Routes>
                        { publicRouter.map((route, index)=>{
                            const Page = route.component;
                            const Layout = route.layout;
                            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
                        }) }
                    </Routes>
                </div>
            </Router>
        </GlobalStyles>
    );
}

export default App;