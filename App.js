import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import  Landing  from './Landing';
import { store } from './store/store';

export default class App extends React.Component {
  constructor() { super();
    this.state = store.getState();
    store.subscribe( () => this.setState(store.getState()) ); 
  }

  render() {
    console.log('state: ', this.state);
    return (
      
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          hidden='true'
        />
        <Landing films={this.state.films} selected_film={this.state.selected_film} 
                  showFilmDetails={this.state.showFilmDetails}>
        </Landing>
      </View>
    );
  }
  
  componentDidMount(){
    store.dispatch({type:"FETCH_FILMS"});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
