import "./assets/styles/index.scss";
import Header from "./containers/Header";
import SideBar from "./containers/SideBar";
import Main from "./containers/Main";

function App() {
  return (
    <>
      <Header />
      <div className="galore-wrapper galore-bg-grey">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
