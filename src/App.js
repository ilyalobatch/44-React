// components
import Header from "./containers/Header";
import Banner from "./containers/Banner";
import Blog from "./containers/Blog";
import News from "./containers/News";

// assets
import "./assets/styles/containers/app.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main className="main-wrapper">
        <Blog />
        <News />
      </main>
    </>
  );
}

export default App;
