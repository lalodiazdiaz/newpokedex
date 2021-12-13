import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

class Lista extends React.PureComponent {
  render() {
    const {title, content, navigation} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            renderItem={({item}) => (
              <Card item={item} navigation={navigation} />
            )}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}
Lista.propTypes = propTypes;

export default Lista;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 5,
    color: '#000',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 3,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
});
