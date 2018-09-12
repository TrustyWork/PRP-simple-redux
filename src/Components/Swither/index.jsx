import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ligthToogle } from 'actions/ligth';

class Swither extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { toogle } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={toogle}
        >
          toogle
        </button>
      </div>
    );
  }
}

Swither.propTypes = {
  toogle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toogle: () => dispatch(ligthToogle()),
});

export default connect(null, mapDispatchToProps)(Swither);
