class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.props.handleChange(this.state.userInput);
  }

  handleInputChange(event) {
    this.setState({ userInput: event.target.value });
    this.props.handleChange(this.state.userInput);

  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control"
          type="text"
          placeholder="Find your cat videos..."
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <button className="btn hidden-sm-down" onClick={this.handleSubmit}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
