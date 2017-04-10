import { connect } from 'react-redux';
import actions from '../actions';
import DrawerContentsComponent from '../components/DrawerContents';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(actions.user.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentsComponent);
