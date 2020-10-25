import React from 'react';
import { View, FlatList, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView }from 'react-native';
import { ListItem } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {search} from '../words/colors';
import { Video } from 'expo-av';
const KEYS_TO_FILTERS = ['word', 'video'];

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          query: '',
          error: null,
          refreshing: false,
        };
      }
    
  
      componentDidMount() {
        this.makeRemoteRequest();
      }
      makeRemoteRequest = () => {
        
        this.setState({
          data: search.Search,
          loading: false,
          refreshing: false,
        });
    
      };
    
      handleRefresh = () => {
        this.setState(
          {
    
            refreshing: true,
          },
          () => {
            this.makeRemoteRequest();
          }
        );
      };
    
      handleLoadMore = () => {
        if (this.state.data.length > 3) {
          this.setState(
            {
    
            },
            () => {
              this.makeRemoteRequest();
            }
          );
        }
      };
    
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
    
      searchFilterFunction = text => {
        this.setState({ query: text, data: [] }, this.makeRemoteRequest);
      };
    
  
    
    render() {

      const filtered = search.Search.filter(createFilter(this.state.query, KEYS_TO_FILTERS))
    console.log(filtered.video)
    return (
      <KeyboardAvoidingView style={styles.container}>
    
        <FlatList
          data={filtered}
          renderItem={({ item }) => (
           
            <View>
              <ListItem
                titleStyle={{ fontWeight: 'bold' }}
                title={`${item.word}`}
               
                containerStyle={{ borderBottomWidth: 5 }}
              />
              <Video
  source={{ uri: item.video }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>
           </View>
          )}
       
        />
            <TextInput
          style={styles.input}
          placeholder="Search..."
          value={this.state.query}
          onChangeText={this.searchFilterFunction}
          multiline={true}
        />
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
      height: 40,
      borderColor: "grey",
      borderBottomColor: "black",
      borderRadius: 5,
      backgroundColor: "white",
    },
  });
  
  
  
  