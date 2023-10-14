function Heading() {
  let title = "This is some heading text";
  return (
    <h1>{title}</h1>
  );
};

const Navi = () => {
  return (
  <nav>
    <h1>Menu</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  </nav>
  );
}

function App() {
  return (
  <div id = "sample-head">
    <p>This is a sample paragraph text</p>
  <Heading />
  <Navi/>
  </div>
  );
}
export default App;