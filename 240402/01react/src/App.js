import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Buttons from "./components/Buttons.js";
import Footer from "./components/Footer.js";

const ChildComp = () => {
  return <div>child domponent</div>;
};

function App() {
  const BodyProps = {
    name: "Cielo",
    location: "서울시",
    // favorList: ["치킨", "김치찜", "파스타"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;
