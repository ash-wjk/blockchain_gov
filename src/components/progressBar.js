var InputRange = React.createClass({
  onChangeListener: function(event) {
    var el = this.refs.inputRangeRef.getDOMNode();
    jQuery("body").trigger("inputRange.changed", {
      value: el.value
    });
  },

  render: function() {
    return (
      <div className="input-range">
        <input type="range" ref="inputRangeRef" onChange={this.onChangeListener} className="input-range__slider" min="0" max="100" step=".1" defaultValue="0" />
      </div>
    );
  }
});

var ProgressBar = React.createClass({
  getInitialState: function() {
    return {
      value: "0%"
    };
  },

  onInputRangeChanged: function(event, data) {
    this.setState({
      value: (data.value + "%")
    });
  },

  componentDidMount: function() {
    jQuery("body").on("inputRange.changed", this.onInputRangeChanged);
  },

  render: function() {
    var style = {
      width: this.state.value
    };

    return (
      <div className="progress">
        <div className="progress__bar" style={style}></div>
        <span className="progress__value">{this.state.value}</span>
      </div>
    );
  }
});

var Title = React.createClass({
  render: function() {
    return (
      <h1>{this.props.value}</h1>
    );
  }
});

React.render(
  <div>
    <Title value="ReactJS progress bar example" />
    <ProgressBar />
    <InputRange />
  </div>,
  document.getElementById("app")
);
