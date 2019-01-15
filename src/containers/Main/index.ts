import { connect } from 'react-redux';

import { notificationSent } from './actions';
import { MainScreen } from '../../screens/MainScreen';

const mapStateToProps = state => ({
  notificationSent: state.main.notificationSent
});

const mapDispatchToProps = dispatch => ({
  sendNotification: () => {
    alert("Test message");
    dispatch(notificationSent());
  }
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainScreen);
