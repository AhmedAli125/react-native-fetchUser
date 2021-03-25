import {Button, View, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import style from '../styles/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUsers} from '../store/actions/actions';
// import {bindActionCreators} from 'redux';

const Pagination = ({totalPages, getUsers}) => {
  useEffect(() => {
    const convertIntToArray = (totalPages) => {
      let pagesArray = [];
      for (let page = 1; page <= totalPages; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    };

    setPages(convertIntToArray(totalPages));
  }, [totalPages]);

  const [pages, setPages] = useState([]);
  return (
    <View style={style.paginationContainer}>
      {pages.map((page) => (
        <Button rounded dark key={page} onPress={() => getUsers(page)}>
          <Text>{page}</Text>
        </Button>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPages: state.root.totalPages,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUsers,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
