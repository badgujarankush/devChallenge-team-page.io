
import "./App.css";
import Card from "../src/components/Card";
function App() {
  return (
    <div className="App">
      <div className="head-container">
        <div className="banner">
          <h1>The creative crew</h1>
        </div>
        <div className="description">
          <h3>who are we</h3>
          <p>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="grid">
        <Card className="item1" photo={"photo1"} designation={"Product owner"} name={"Bill Mahoney"}/>
        <Card className="item2" photo={"photo2"} designation={"Art director"} name={"Saba Cabrera"}/>
        <Card className="item3" photo={"photo3"} designation={"Shae Le"} name={"Tech Lead"}/>
        <Card className="item4" photo={"photo4"} designation={"UX Designer"} name={"Skylah Lu"}/>
        <Card className="item5" photo={"photo5"} designation={"Developer"} name={"Griff Richards"}/>
        <Card className="item6" photo={"photo6"} designation={"DEverloper"} name={"Stan John"}/>
      </div>
    </div>
  );
}

export default App;
