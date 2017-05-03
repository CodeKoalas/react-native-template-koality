import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import SettingsComponent from '../components/Settings';

import userActions from '../actions';

const update = userActions.user.update;

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => {
    dispatch(update(user));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SettingsComponent),
);
