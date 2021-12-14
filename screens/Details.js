import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {getpokeDetails} from '../servicios/servicio';

const image = {uri: 'https://cdn.wallpapersafari.com/17/45/F64GRq.png'};

const Details = ({route, navigation}) => {
  const pokeName = route.params.pokeName;

  const [pokeDetail, setPokeDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    getpokeDetails(pokeName).then(pokeData => {
      setPokeDetail(pokeData);
      setLoaded(true);
    });
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <View style={styles.cont}>
            <View style={styles.cont2}>
              <Text style={styles.title}>
                #{pokeDetail.id}{' '}
                {pokeDetail.name.replace(/^\w/, c => c.toUpperCase())}
              </Text>
              {shiny == false ? (
                <View style={{marginBottom: 5}}>
                  <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={{
                      uri: `https://img.pokemondb.net/artwork/${pokeDetail.name}.jpg`,
                    }}
                  />
                  <TouchableHighlight
                    onPress={() => {
                      setShiny(!shiny);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        backgroundColor: '#000000',
                        alignItems: 'center',
                      }}>
                      <Image
                        resizeMode="stretch"
                        style={styles.imageShiny}
                        source={require('../assets/image/normal.png')}
                      />
                      <Text style={styles.txtbtn}>Normal version</Text>
                      <Image
                        resizeMode="stretch"
                        style={styles.imageBtn}
                        source={require('../assets/image/change.png')}
                      />
                    </View>
                  </TouchableHighlight>
                </View>
              ) : (
                <View style={{marginBottom: 5}}>
                  <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={{
                      uri: `https://www.pokebip.com/pokedex-images/300-shiny/${pokeDetail.id}.png`,
                    }}
                  />

                  <TouchableHighlight
                    onPress={() => {
                      setShiny(!shiny);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        backgroundColor: '#000000',
                        alignItems: 'center',
                      }}>
                      <Image
                        resizeMode="stretch"
                        style={styles.imageShiny}
                        source={require('../assets/image/shiny.png')}
                      />
                      <Text style={styles.txtbtn}>Shiny version</Text>
                      <Image
                        resizeMode="stretch"
                        style={styles.imageBtn}
                        source={require('../assets/image/change.png')}
                      />
                    </View>
                  </TouchableHighlight>
                </View>
              )}

              {/*Types*/}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>Type</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {pokeDetail.types.map(({type}) => (
                  <Image
                    style={{height: 80, width: 100, resizeMode: 'contain'}}
                    source={{
                      uri: `https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/${type.name.replace(
                        /^\w/,
                        c => c.toUpperCase(),
                      )}.png`,
                    }}
                  />
                ))}
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {pokeDetail.types.map(({type}) => (
                  <Text style={styles.txtCont} key={type.name}>
                    {type.name.replace(/^\w/, c => c.toUpperCase())}
                  </Text>
                ))}
              </View>

              {/*Details */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.title}>Height</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={styles.txtCont}>{pokeDetail.weight / 10} kg</Text>
                <Text style={styles.txtCont}>{pokeDetail.height / 10} m</Text>
              </View>
              {/**Stats */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>HP</Text>
                <Text style={styles.title}>ATK</Text>
                <Text style={styles.title}>DEF</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[0].base_stat}
                </Text>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[1].base_stat}
                </Text>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[2].base_stat}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>SP_ATK</Text>
                <Text style={styles.title}>SP_DEF</Text>
                <Text style={styles.title}>SPD</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[3].base_stat}
                </Text>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[4].base_stat}
                </Text>
                <Text style={styles.txtCont}>
                  {pokeDetail.stats[5].base_stat}
                </Text>
              </View>

              {/**Abilities */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>Abilities</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {pokeDetail.abilities.map(({ability}) => (
                  <Text style={styles.txtCont} key={ability.name}>
                    {ability.name.replace(/^\w/, c => c.toUpperCase())}
                  </Text>
                ))}
              </View>

              {/**Moves */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#000',
                }}>
                <Text style={styles.title}>Moves</Text>
              </View>
              {pokeDetail.moves.length > 1 ? (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={styles.txtCont}>
                      +
                      {pokeDetail.moves[0].move.name.replace(/^\w/, c =>
                        c.toUpperCase(),
                      )}
                    </Text>
                    <Text style={styles.txtCont}>
                      +
                      {pokeDetail.moves[1].move.name.replace(/^\w/, c =>
                        c.toUpperCase(),
                      )}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={styles.txtCont}>
                      +
                      {pokeDetail.moves[2].move.name.replace(/^\w/, c =>
                        c.toUpperCase(),
                      )}
                    </Text>
                    <Text style={styles.txtCont}>
                      +
                      {pokeDetail.moves[3].move.name.replace(/^\w/, c =>
                        c.toUpperCase(),
                      )}
                    </Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.txtCont}> No movement available</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}

      {!loaded && (
        <View style={{flex: 1}}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.imageB}>
            <ActivityIndicator size="large" color="#000" />
          </ImageBackground>
        </View>
      )}
    </React.Fragment>
  );
};

export default Details;

const styles = StyleSheet.create({
  cont: {
    alignItems: 'center',
    backgroundColor: '#8B0000',
    flex: 1,
  },
  cont2: {
    borderColor: '#000',
    borderWidth: 3,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    width: 300,
  },
  title: {
    color: '#fff',
    backgroundColor: '#000',
    paddingVertical: 5,

    fontSize: 20,
  },
  txtCont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  imageB: {
    flex: 1,
    justifyContent: 'center',
  },
  imageShiny: {
    height: 50,
    width: 50,
    marginRight: 10,
    marginLeft: 10,
  },
  imageBtn: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  txtbtn: {
    color: '#fff',
    fontSize: 20,
  },
});
