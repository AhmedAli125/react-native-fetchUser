import React, {useEffect} from 'react';
import {Tabs, Tab, Badge, Text, TabHeading, Toast} from 'native-base';
import UserList from './UserList';
import DeletedUserList from './DeletedUserList';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Styles';
import Pagination from './Pagination';
import {bindActionCreators} from 'redux';
import {removeToast} from '../store/actions/actions';
import {Alert} from 'react-native';

const Home = ({currentUser, deletedUsers, users, removeToast, toast}) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (currentUser !== null) {
      navigation.navigate('User Details');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    toast.flag === true
      ? Alert.alert('Notification', toast.msg, [
          {
            text: 'Ok',
            onPress: removeToast,
          },
        ])
      : null;
  }, [toast]);

  return (
    <>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text>All Users</Text>
              <Badge style={styles.badge}>
                <Text style={styles.badgeText}>{users.length}</Text>
              </Badge>
            </TabHeading>
          }>
          <UserList />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Deleted Users</Text>
              <Badge style={styles.badge}>
                <Text style={styles.badgeText}>{deletedUsers.length}</Text>
              </Badge>
            </TabHeading>
          }>
          <DeletedUserList />
        </Tab>
      </Tabs>
      <Pagination />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.root.currentUser,
    deletedUsers: state.root.deletedUsers,
    users: state.root.users,
    toast: state.root.toast,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({removeToast}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
