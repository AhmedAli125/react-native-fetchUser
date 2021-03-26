import React from 'react';
import UserCard from './UserCard';
import {connect} from 'react-redux';
import {Text, View} from 'native-base';
import {ScrollView} from 'react-native';
import styles from '../styles/Styles';

const DeletedUserList = ({deletedUsers}) => {
  if (deletedUsers.length === 0) {
    return (
      <View>
        <Text style={styles.infoText}>No Deleted Users Found!</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      {deletedUsers.map((user) => (
        <UserCard deleted={true} user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    deletedUsers: state.root.deletedUsers,
  };
};

export default connect(mapStateToProps, null)(DeletedUserList);
