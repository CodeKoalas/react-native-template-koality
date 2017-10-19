import { connect } from 'react-redux';
import { actionCreators } from '../ducks/user';
import DrawerContentsComponent from '../components/DrawerContents';

const { logout } = actionCreators;

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DrawerContentsComponent,
);
