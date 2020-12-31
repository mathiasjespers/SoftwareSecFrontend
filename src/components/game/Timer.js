import React from 'react';
import PropTypes from 'prop-types';
import Clicker from './Clicker';
import { Link } from 'react-router-dom';
import saveScore from './../../API_calls/API_calls'
import { useAuth0 } from '@auth0/auth0-react';

class Timer extends React.Component {
    state = {
      elapsed: 0,
      settingSeconds: this.props.settingSeconds,
      running: false,
      completed: 100.0
    }

    const { user, isAuthenticated } = useAuth0();

    static propTypes = {
      settingSeconds: PropTypes.number.isRequired,
      start: new Date()
    }

    startTimer = () => {
      this.setState({running: true});
      this.start = Date.now();
      this.timer = setInterval(this.tick, 10);
    }

    componentWiilUnmount = () => {
      clearInterval(this.timer);
    }

    tick = () => {
      this.setState({elapsed: new Date() - this.start});
    }

    render() {
      let completed = this.state.completed;
      if (completed < 0) {completed = 0}
      if (completed > 100) {completed = 100}

      let buttonClass = 'btn btn-click btn-block';
      let againClass = 'btn again-btn hidden';
      if(this.state.running) {
        buttonClass = 'btn btn-primary btn-block'
      }

      let settingSeconds = this.props.settingSeconds;
      let elapsed = Math.round(this.state.elapsed / 100);

      let seconds = (elapsed / 10).toFixed(1);
      let leftSeconds = (settingSeconds - seconds).toFixed(1);
      completed = (leftSeconds / settingSeconds) * 100;

      let barStyle = {
        backgroundColor: this.props.color || '#0BD318',
        width: completed + '%',
        height: 10
      };

      if(leftSeconds <= 0.0) {
        clearInterval(this.timer);
        buttonClass = 'btn btn-danger btn-block disabled';
        againClass = 'again-btn';
      }

      if (isAuthenticated)  {
          return (
            <div>
                <div style={barStyle}></div>
                <p className="timer-message"><b>{leftSeconds}</b> seconds left</p>
                <div className="div-btn">
                    <Clicker class={buttonClass} startTimer={this.startTimer} />
                    <Link className={againClass} onClick={saveScore(Clicker.state.count)} to="/">Save Score & Play Again</Link>
                </div>
            </div>
          );
      }
      else  {
          return (
            <div>
                <div style={barStyle}></div>
                <p className="timer-message"><b>{leftSeconds}</b> seconds left</p>
                <div className="div-btn">
                    <Clicker class={buttonClass} startTimer={this.startTimer} />
                    <Link className={againClass} to="/">Save Score & Play Again</Link>
                </div>
            </div>
          );
      }
    }
  }

  export default Timer;
