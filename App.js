import React from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView, ScrollView } from 'react-native';
import  Landing  from './Landing';
import  Checkout  from './Checkout';
import { store } from './store/store';
import { PickSeats } from './PickSeats';
import { createStackNavigator } from 'react-navigation';

const routes = { 
  Landing: {
    screen: Landing
  },
};
const MyStackNavigator = createStackNavigator(routes, stackNavConfig);

const stackNavConfig = {
  initialRouteName: 'Landing', 
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'rgb(0, 1, 78)', // Or whatever color you like
    },
    headerTintColor: 'rgb(98, 190, 255)', // For the back/forward buttons 
    headerTitleStyle: {
      fontWeight: 'bold', 
    }
  }),
}

export default class App extends React.Component {
  constructor() { super();
    this.state = store.getState();
    store.subscribe( () => this.setState(store.getState()) ); 
  }

  render() {
    return (
      // <SafeAreaView style={styles.layout}>
      //   <ScrollView>
      // <View style={styles.container}>
      //   <StatusBar
      //     barStyle='light-content'
      //     hidden={true}
      //   />
      //   <MyStackNavigator/>
      //   <Landing films={this.state.films} selected_film={this.state.selected_film} 
      //             showFilmDetails={this.state.showFilmDetails}>
      //   </Landing>
      //   </View>
      // </ScrollView>
      // </SafeAreaView>

    <MyStackNavigator/>
      

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


