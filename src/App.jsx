import React from "react";

function App() {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}
export function Input(props) {
  const { handleChange, inputValue } = props;
  return <input onChange={handleChange} value={inputValue} />;
}

export default App;
