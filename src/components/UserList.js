import React from 'react';
import UserCard from './UserCard';
import {connect} from 'react-redux';
import {ScrollView, View, Text} from 'react-native';
const UserList = ({users}) => {
  if (users === undefined) {
    return (
      <View>
        <Text>No Users Found</Text>
      </View>
    );
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
  };
};

export default connect(mapStateToProps, null)(UserList);
