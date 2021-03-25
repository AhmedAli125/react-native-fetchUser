import React, {useEffect} from 'react';
import {Tabs, Tab, Badge, Text, TabHeading} from 'native-base';
import UserList from './UserList';
import DeletedUserList from './DeletedUserList';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Styles';
import Pagination from './Pagination';

const Home = ({currentUser, deletedUsers, users}) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (currentUser !== null) {
      navigation.navigate('User Details');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

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
  };
};

export default connect(mapStateToProps, null)(Home);
