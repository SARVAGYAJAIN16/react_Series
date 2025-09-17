import Chai from "./chai"; // when you run so in h2 tag whatever is there it will return but chai.js (is not returning why ?)

// Line 1:8:  'chai' is defined but never used (this warning we are geting)
// to solve warning we do capital of first letter of function.
function App() {
  return (
    <>
    <Chai/>
    <h1> sarvagya aur react </h1>
    </>
  );
}

export default App;
