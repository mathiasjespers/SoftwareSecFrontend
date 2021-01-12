import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveScore } from './../../API_calls/API_calls'
import { withAuth0 } from '@auth0/auth0-react';

class Clicker extends React.Component   {
    state = {
      count: 0, func: this.props.startTimer, buttonTxt: 'Start'
    }

    static propTypes = {
      class: PropTypes.string.isRequired,
      startTimer: PropTypes.func.isRequired
    }

    onFirstClick = () => {
      let stylesheet = document.styleSheets[0];
      stylesheet.insertRule(".table-ul { pointer-events: none; }");
      this.state.func();
      this.setState({func: this.countClick});
      this.setState({buttonTxt: 'Click'});
    }

    countClick = () => {
      this.setState({count: this.state.count + 1});
    }

    render() {
      const { user, isAuthenticated } = this.props.auth0;

      if (isAuthenticated)  {
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
              <Link className="btn again-btn" onClick={saveScore(user.sub, user.name, this.state.count)} to="/">Save Score & Play Again</Link>
            </div>
          </div>
        );
      }
      else  {
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
              <Link className="btn again-btn" to="/">Play Again</Link>
            </div>
          </div>
        );
      }
    }
  }

  export default withAuth0(Clicker);
