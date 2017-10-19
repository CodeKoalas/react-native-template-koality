import { connect } from 'react-redux';
import { actionCreators } from '../ducks/user';
import LoginComponent from '../components/Login';

const { login } = actionCreators;

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  login: user => {
    dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
