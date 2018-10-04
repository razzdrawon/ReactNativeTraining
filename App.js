import React from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView, ScrollView } from 'react-native';
import  Landing  from './Landing';
import  Checkout  from './Checkout';
import { store } from './store/store';
import { PickSeats } from './PickSeats';

export default class App extends React.Component {
  constructor() { super();
    this.state = store.getState();
    store.subscribe( () => this.setState(store.getState()) ); 
  }

  render() {
    console.log("Selected film app main", this.state.selected_film);
    return (
      <SafeAreaView style={styles.layout}>
        <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          hidden={true}
        />
        <Landing films={this.state.films} selected_film={this.state.selected_film} 
                  showFilmDetails={this.state.showFilmDetails}>
        </Landing>
        {/* <PickSeats></PickSeats> */}
        </View>
      </ScrollView>
      </SafeAreaView>

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
    justifyContent: 'center',
  },
  layout: {
    margin: 10
  }
});
