import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(){/* write an <About> component here */
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      {<Home /> /* render the <Home> component here */}
      {<About/> /* render the <About> component here */}
    </div>
  );
}

export default App;
