import React from 'react';
import {Text, Card, CardItem} from 'native-base';
import {Image} from 'react-native';
import styles from '../styles/Styles';
import {setCurrentUser} from '../store/actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// eslint-disable-next-line no-shadow
const UserCard = ({deleted, user, setCurrentUser}) => {
  const customSetCurrentUser = () => {
    let payload = {
      id: user.id,
      deleted,
    };

    setCurrentUser(payload);
  };

  return (
    <Card style={(styles.userDetailsCard, deleted ? styles.deletedUser : null)}>
      <CardItem
        button
        onPress={customSetCurrentUser}
        // onPress={() => setCurrentUser(user.id)}
        style={{display: 'flex', flexDirection: 'column'}}>
        <CardItem style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={{uri: user.avatar}} />
        </CardItem>
        <CardItem style={styles.cardDescription}>
          <Text
            style={
              styles.cardUserName
            }>{`${user.first_name} ${user.last_name}`}</Text>
          <Text style={styles.cardUserEmail}>{user.email}</Text>
        </CardItem>
      </CardItem>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrentUser,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(UserCard);
