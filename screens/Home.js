import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Lista from '../Componentes/Lista';
import {
  getpokeKanto,
  getpokeJohto,
  getpokeSinnoh,
  getpokeHoenn,
  getpokeTeselia,
  getpokeKalos,
  getpokeAlola,
  getpokeGalar,
  getpokeFormas,
  getpokeMega,
} from '../servicios/servicio';

const image = {uri: 'https://cdn.wallpapersafari.com/17/45/F64GRq.png'};

const Home = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [kanto, setKanto] = useState();
  const [johto, setJohto] = useState();
  const [hoenn, setHoenn] = useState();
  const [sinnoh, setSinnoh] = useState();
  const [teselia, setTeselia] = useState();
  const [kalos, setKalos] = useState();
  const [alola, setAlola] = useState();
  const [galar, setGalar] = useState();
  const [formas, setFormas] = useState();
  const [mega, setMega] = useState();

  const getData = () => {
    return Promise.all([
      getpokeKanto(),
      getpokeJohto(),
      getpokeHoenn(),
      getpokeSinnoh(),
      getpokeTeselia(),
      getpokeKalos(),
      getpokeAlola(),
      getpokeGalar(),
      getpokeFormas(),
      getpokeMega(),
    ]);
  };

  useEffect(() => {
    getData().then(
      ([
        kantoData,
        johtoData,
        hoennData,
        sinnohData,
        teseliaData,
        kalosData,
        alolaData,
        galarData,
        formasData,
        megasData,
      ]) => {
        setKanto(kantoData);
        setJohto(johtoData);
        setHoenn(hoennData);
        setSinnoh(sinnohData);
        setTeselia(teseliaData);
        setKalos(kalosData);
        setAlola(alolaData);
        setGalar(galarData);
        setFormas(formasData);
        setMega(megasData);
        setLoaded(true);
      },
    );
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <View style={{backgroundColor: '#8B0000'}}>
            <View>
              <Lista
                title="Kanto Region"
                content={kanto}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Johto Region"
                content={johto}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Hoenn Region"
                content={hoenn}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Sinnoh Region"
                content={sinnoh}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Unova Region"
                content={teselia}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Kalos Region "
                content={kalos}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Alola Region"
                content={alola}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Galar Region"
                content={galar}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Mega Evolutions"
                content={mega}
                navigation={navigation}
              />
            </View>
            <View>
              <Lista
                title="Other Forms"
                content={formas}
                navigation={navigation}
              />
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

export default Home;

const styles = StyleSheet.create({
  imageB: {
    flex: 1,
    justifyContent: 'center',
  },
});
