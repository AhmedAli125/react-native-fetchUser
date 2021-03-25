import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Text, Card, CardItem, Button} from 'native-base';
import styles from '../styles/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  clearCurrentUser,
  deleteUser,
  removeFromDeleted,
} from '../store/actions/actions';
import {useNavigation} from '@react-navigation/native';

const UserDetails = ({
  currentUser,
  clearCurrentUser,
  deleteUser,
  removeFromDeleted,
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      clearCurrentUser();
    };
  });

  const customDeleteUser = () => {
    deleteUser(currentUser.id);
    navigation.navigate('Home');
  };

  const removeAndNavigateUser = () => {
    removeFromDeleted(currentUser.id);
    navigation.navigate('Home');
  };

  return (
    <View>
      <Card>
        <CardItem style={styles.userDetailsImageContainer}>
          <Image
            style={styles.userDetailsImage}
            source={{uri: currentUser.avatar}}
          />
        </CardItem>
        <CardItem style={styles.userDetailsUserName}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 24,
            }}>{`${currentUser.first_name} ${currentUser.last_name}`}</Text>
        </CardItem>
        <CardItem style={styles.userDetailsUserName}>
          <Text>{currentUser.email}</Text>
        </CardItem>
        <CardItem>
          {currentUser.deleted === true ? (
            <Button
              dark
              style={styles.actionButton}
              onPress={removeAndNavigateUser}>
              <Text>Remove From Deleted Users</Text>
            </Button>
          ) : (
            <Button
              danger
              style={styles.actionButton}
              onPress={customDeleteUser}>
              <Text>Delete Users</Text>
            </Button>
          )}
        </CardItem>
      </Card>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.root.currentUser,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearCurrentUser,
      deleteUser,
      removeFromDeleted,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
