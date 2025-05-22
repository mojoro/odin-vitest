// accordion.js
import * as React from "react";

class Accordion extends React.Component {
  state = { openIndexes: [0] };
  setOpenIndex = (openIndex) => this.setState({ openIndexes: [openIndex] });
  render() {
    const { openIndexes } = this.state;
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div key={item.title}>
            <button id={item.title} onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {openIndexes.includes(index) ? <p>{item.contents}</p> : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;
