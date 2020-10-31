import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';


export default class FirstLaunchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.listH}>Перекласти у відео:</Text>
          <Text style={styles.listIt}>1.Натиснути на поле з підписом “Введіть текст для перекладу</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} resizeMode="contain"
              source={require('../screens/1.jpg')}
            />
          </View>

          <Text style={styles.listIt}>2.Ввести текст в поле для перекладу</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} resizeMode="contain"
              source={require('../screens/2.jpg')}
            />
          </View>

          <Text style={styles.listIt}>3.Натиснути кнопку з написом “Перекласти”</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} resizeMode="contain"
              source={require('../screens/3.jpg')}
            />
          </View>
          <Text style={styles.listH}>Переклад жестів є складною задачею, тому зворотній переклад буде відбуватися просто введенням текста в поле та прочитанням співбесідником</Text>
          <Text style={styles.listIt}>1.Натиснути на поле з підписом “Введіть текст для перекладу</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} resizeMode="contain"
              source={require('../screens/1.jpg')}
            />
          </View>

          <Text style={styles.listIt}>2.Ввести текст для прочитання співбесідником</Text>
          <View style={styles.imgView}>
            <Image style={styles.img} resizeMode="contain"
              source={require('../screens/4.jpg')}
            />
          </View>
          <TouchableOpacity style={styles.translateButton}
            onPress={() => this.props.navigation.navigate('Main')}
          >
            <Text style={styles.bolderText}>Перейти до використання застосунку</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: ((Dimensions.get('window').width - 50) / 591) * 1280,
    margin: 15
  },
  listH: {
    fontSize: 25,
    margin: 10,
    fontWeight: "bold"
  },
  listIt: {
    fontSize: 20,
    margin: 10,
  },
  img: {
    width: Dimensions.get('window').width - 50
  },
  container: {
    flex: 1,
    marginTop: 20
  },
  input: {
    margin: 5,
    borderWidth: 2,
    height: 80,
    borderColor: "grey",
    borderBottomColor: "black",
    borderRadius: 5,
    backgroundColor: "white",
  },
  translateButton: {
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 80,

  },
  bolderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  videoStyle: {
    marginBottom: 50,
    marginTop: 50,
    height: Dimensions.get("window").width - 60,
    width: Dimensions.get("window").width - 60,
    alignSelf: "center",
  }
});

