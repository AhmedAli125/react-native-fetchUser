import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userCard: {
    width: 180,
    margin: 5,
  },
  cardImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  cardDescription: {
    flexDirection: 'column',
  },
  cardUserName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardUserEmail: {
    fontSize: 11,
  },
  userDetailsCard: {
    margin: 10,
    padding: 10,
  },
  userDetailsImageContainer: {
    height: 300,
    backgroundColor: '#0c1729',
    margin: 10,
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userDetailsImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  userDetailsUserName: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    // flex: 2,
  },
  actionButton: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deletedUser: {
    borderColor: '#c62828',
  },
  badge: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  badgeText: {
    color: 'black',
  },
  paginationContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoText: {
    paddingTop: 60,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default styles;
