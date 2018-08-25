import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { changeFilter } from '../../actions/actions';
import './Filter.scss';


function Filter(props) {
  const {
    changeFilter,
    filter,
    ownFilter,
    children,
  } = props;
  if (ownFilter === filter) {
    return (
      <span className="filter filter--active">
        {children}
      </span>
    );
  }
  return (
    <button
      type="button"
      className="filter filter--inactive"
      onClick={() => changeFilter(ownFilter)}
    >
      {children}
    </button>
  );
}


Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  ownFilter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  filter: state.filter,
  ownProps,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
