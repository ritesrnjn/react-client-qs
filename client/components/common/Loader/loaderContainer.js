/**
 *  Wires in the actions and state
 *  necessary to render a presentational component
 *
 */

import { connect } from 'react-redux';
import { start, stop } from 'client/components/common/Loader/loaderModule';
// COMPONENT DEPENDENCIES
import Loader from 'client/components/common/Loader/Loader';

const mapDispatchToProps = {
  start: () => start(1),
  stop: () => stop(1),
};

const mapStateToProps = state => ({
  loader: state.loaderReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loader);
