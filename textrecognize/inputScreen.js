import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Text, Platform, Keyboard, TouchableWithoutFeedback,Dimensions, ScrollView}from 'react-native';
import {search} from '../words/colors';
import { Video } from 'expo-av';



export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          query: '',
          error: null,
          refreshing: false,
          textin:[],
          currentVideo: null,
          videoArr:["https://www.w3schools.com/html/mov_bbb.mp4"], 
        };
        this.translateText = this.translateText.bind(this); 
      }

      renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '86%',
              backgroundColor: '#CED0CE',
              marginLeft: '14%',
            }}
          />
        );
      };

  

      translateText=()=>{
      //  console.log("new run")
       this.setState({ videoArr: ["https://www.w3schools.com/html/mov_bbb.mp4"], currentVideo:1 });
          for(let k=0; k<this.state.textin.length; k++){
          for(var i=0; i<search.Search.length; i++) {
            for(let key in search.Search[i]) {
              if(search.Search[i][key].indexOf(this.state.textin[k].toLowerCase())!=-1) {
                this.setState({ videoArr: [...this.state.videoArr, search.Search[i].video] })
              //  this.state.videoArr.push(search.Search[i].video);
              }
            }
          }
        }
        
      //  console.log(this.state.videoArr)
       // console.log(this.state.currentVideo)
       // console.log(`${this.state.videoArr[this.state.currentVideo]}`)
      }

      searchFilterFunction = text => {
       
   
      this.setState({ query: text, textin:  text.split(' ') });
      };
      _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.didJustFinish){
    // this.setState({currentVideo: this.state.videoArr.length-1>this.state.currentVideo?this.state.currentVideo + 1:null});
    this.setState({currentVideo:this.state.currentVideo + 1}); 
        }
      };
  
    render() {
    return (
<ScrollView>
   <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "position" : null}
     
   >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <Video
  source={{ uri: this.state.videoArr[this.state.currentVideo]}}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  ref={(ref) => {this._player = ref}}
  //isLooping
 onPlaybackStatusUpdate= { (playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus) }
  style={styles.videoStyle}
/> 
{/* <Video
  source={ require('./../videoplayback.mp4')}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  ref={(ref) => {this._player = ref}}
  //isLooping
 //onPlaybackStatusUpdate= { (playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus) }
  style={{ width: 300, height: 300 }}
/> */}
    <TextInput
          style={styles.input}
          placeholder="Введіть текст для перекладу"
          value={this.state.query}
          onChangeText={this.searchFilterFunction}
          multiline={true}
        />
          <TouchableOpacity style={styles.translateButton}
          onPress={this.translateText}
         >
        <Text style={styles.bolderText}>Перекласти</Text>
    </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
      </KeyboardAvoidingView> 
      </ScrollView>
    );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      //marginTop:100
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
    translateButton:{
    //  backgroundColor:"red",
  
      borderWidth: 2,
      borderColor:"black",
  alignContent:"center",
marginLeft:"auto",
marginRight:"auto",
padding:30, 
borderRadius:10,
marginTop:20,

    },
    bolderText:{
      fontWeight:"bold",
      fontSize:18,
    },
    videoStyle:{
      marginBottom:50,
      marginTop:50,
      height:Dimensions.get("window").width-60,
      width:Dimensions.get("window").width-60,
      alignSelf:"center",
    }
  });
  
  
  
  