import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //   constructor () {
  //       super();
  //       this.state = {term: ''};
  //       this.onFormSubmit = this.onFormSubmit.bind(this);
  //   }

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //value refers to whatever is in the input field
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
