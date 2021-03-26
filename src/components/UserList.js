import React from 'react';
import UserCard from './UserCard';
import {connect} from 'react-redux';
import {ScrollView, View, Text} from 'react-native';
import {Spinner} from 'native-base';
const UserList = ({users, loading}) => {
  if (loading) {
    return <Spinner color="blue" />;
  }

  return (
    <ScrollView>
      {users.map((user) => (
        <UserCard deleted={false} user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.root.users,
    loading: state.root.loading,
  };
};

export default connect(mapStateToProps, null)(UserList);
