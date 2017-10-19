import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import SettingsComponent from '../components/Settings';
import { actionCreators } from '../ducks/user';

const { update } = actionCreators;

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
