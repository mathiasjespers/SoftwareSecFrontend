import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer'

class ClickButton extends React.Component    {
    state = {
      selectedSeconds: (5.0).toFixed(1)
    }

    static propTypes = {
      seconds: PropTypes.array.isRequired
    }

    setSeconds = (clicked, sec) => {
      this.setState({selectedSeconds: sec});
    }

    render() {
      return (
        <div>
          <ul className="table-ul">
            {this.props.seconds.map(function(items, i) {
              return (
                <li onClick={this.setSeconds.bind(this, i, this.props.seconds[i].toFixed(1))} key={i}>{this.props.seconds[i].toFixed(1)}ms</li>
              );
            }, this)}
          </ul>
          <Timer settingSeconds={this.state.selectedSeconds} />
        </div>
      );
    }
  }

  export default ClickButton;