import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Ligth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { enabled } = this.props;
    return (
      <div>
        { enabled ? (
          <span> =//= enabled =//= </span>
        ) : (
          <span> =//= disabled =//= </span>
        )}
      </div>
    );
  }
}

Ligth.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  enabled: state.ligth.enabled,
});

export default connect(mapStateToProps)(Ligth);
