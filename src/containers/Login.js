import { connect } from 'react-redux';
import userActions from '../actions';
import LoginComponent from '../components/Login';

const login = userActions.user.login;

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  login: user => {
    dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
