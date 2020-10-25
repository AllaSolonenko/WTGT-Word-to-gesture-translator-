import React from 'react';
import { View, FlatList, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Text, Platform, Keyboard, TouchableWithoutFeedback}from 'react-native';
import { ListItem } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {search} from '../words/colors';
import { Video } from 'expo-av';
const KEYS_TO_FILTERS = ['word'];

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
          currentVideo:0,
          videoArr:[], 
        };
        this.translateText = this.translateText.bind(this); 
      }
    
      componentDidMount() {
  // this.state.videoArr[0]="https://media.spreadthesign.com/video/mp4/31/105633.mp4"
   console.log(this.state.videoArr)
   console.log(this.state.currentVideo)
   console.log(`"${this.state.videoArr[this.state.currentVideo]}"`)
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

      videoPlayer=(url)=>{
return(
    <View>


    </View>
)

      }

      translateText=()=>{
        console.log("new run")
        this.setState({ videoArr: [] });
          for(let k=0; k<this.state.textin.length; k++){
          for(var i=0; i<search.Search.length; i++) {
            for(let key in search.Search[i]) {
              if(search.Search[i][key].indexOf(this.state.textin[k]!=-1)) {
                this.state.videoArr.push(search.Search[i].video);
              }
            }
          }
        }
        console.log(this.state.videoArr)
        console.log(this.state.currentVideo)
        console.log(`"${this.state.videoArr[this.state.currentVideo]}"`)
      }
  incVid=()=>{
this.setState({currentVideo:this.state.currentVideo+1})
  }
      searchFilterFunction = text => {
       
   
      this.setState({ query: text, textin:  text.split(' ') });
      };
      _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.didJustFinish){
     this.setState({currentVideo: this.state.videoArr.length-1>this.state.currentVideo?this.state.currentVideo + 1:null});
       
        //  console.log(this.state.currentVideo)
       
        }
      };
    //  style={styles.container}
    
    render() {
    return (
     
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"}>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
     <Text>{search.Search[this.state.currentVideo].word}</Text> 
 <Video
  source={{ uri: search.Search[this.state.currentVideo].video}}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  ref={(ref) => {this._player = ref}}
  //isLooping
 // onPlaybackStatusUpdate= { (playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus) }
  style={{ width: 300, height: 300 }}
/>
    <TextInput
          style={styles.input}
          placeholder="Введіть текст для перекладу"
          value={this.state.query}
          onChangeText={this.searchFilterFunction}
          multiline={true}
        />
          
    <TouchableOpacity style={styles.translateButton}
          onPress={this.incVid}
         >
        <Text>next</Text>
    </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
    );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:100
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
      backgroundColor:"red",
  alignContent:"center",
marginLeft:"auto",
marginRight:"auto",
padding:20, 
borderRadius:10,
marginTop:20,

    }
  });
  
  
  
  