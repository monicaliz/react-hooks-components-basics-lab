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

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;



// DELIVERABLES
// 1. add the <Navbar> and <Home> components as child components of <App> by including them in the return statement of the App() function 
// 2. create third child component <About> to be child of <App> and it should return a <div id= "about"> and contain <h2>About</h2>