import React, {useEffect} from 'react';
import {Container} from 'native-base';
import CustomHeader from './components/Header';
import Home from './components/Home';
import {bindActionCreators} from 'redux';
import {getUsers} from './store/actions/actions';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import UserDetails from './components/UserDetails';

// eslint-disable-next-line no-shadow
const MyApplication = ({getUsers}) => {
  useEffect(() => {
    getUsers();
  });

  const Stack = createStackNavigator();

  return (
    <Container>
      <CustomHeader />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User Details" component={UserDetails} />
      </Stack.Navigator>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUsers,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(MyApplication);
