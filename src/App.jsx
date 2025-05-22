import Accordion from "./accordion";

const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
const footware = {
  title: "Favorite Footware",
  contents: "Flipflops are the best",
};

const App = () => <Accordion items={[hats, footware]}></Accordion>;

export default App;
