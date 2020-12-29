import React from 'react';
import PropTypes from 'prop-types';

class Clicker extends React.Component   {
    state = {
      count: 0, func: this.props.startTimer, buttonTxt: 'Start'
    }

    static propTypes = {
      class: PropTypes.string.isRequired,
      startTimer: PropTypes.func.isRequired
    }

    onFirstClick = () => {
      let stylesheet = document.styleSheets.item(1);
      stylesheet.insertRule(".table-ul { pointer-events: none; }");
      this.state.func();
      this.setState({func: this.countClick});
      this.setState({buttonTxt: 'Click'});
    }

    countClick = () => {
      this.setState({count: this.state.count + 1});
    }

    render() {
      return (
      <div>
        <div className="row message">
          <div>
            <h3>You have clicked <b>{this.state.count}</b> times</h3>
          </div>
        </div>
        <div className="row">
          <div>
            <button onClick={this.onFirstClick} className={this.props.class}>{this.state.buttonTxt}</button>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Clicker;