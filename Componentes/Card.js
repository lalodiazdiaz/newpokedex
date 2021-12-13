import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('Details', {
            pokeName: item.name,
          });
        }}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/artwork/${item.name}.jpg`,
          }}
        />
        <Text style={styles.namepoke}>
          {item.name.replace(/^\w/, c => c.toUpperCase())}
        </Text>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = propTypes;

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    marginHorizontal: 10,
    position: 'relative',
  },
  image: {
    height: 140,
    width: 150,
    padding: 5,
  },
  namepoke: {
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    width: 150,
    textAlign: 'center',
  },
});
