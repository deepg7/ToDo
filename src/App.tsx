import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import View from "./Views";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          {/*<Header />*/}
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Route path="/">
                <View />
              </Route>
            </div>
          </div>
          <Footer />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
