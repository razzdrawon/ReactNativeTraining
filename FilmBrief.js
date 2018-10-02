import React from 'react';
import { store } from './store/store';
import { TouchableHighlight,Text, View, Image   } from 'react-native';

export default class  FilmBrief extends React.Component {
    constructor(props) { super(props);
      this.state = {...store.getState()};
    }

    render() {
        console.log('state: ', this.state);
        return (
            <TouchableHighlight onPress={store.dispatch({type:"SHOW_FILM_DETAILS"})}>
            <View>
                <Text key={this.props.key}>{this.props.film}</Text>
                <Image source={{uri:`http://localhost:5000/${this.props.image}`}} style={{height: 100, width: 100}} />
            </View>
        
       
        </TouchableHighlight>
        );
    }

    selectThisFilm= () => {
        console.log("selected film : ", this.props.film);
        store.dispatch({type: "SET_SELECTED_FILM", film: this.props.film});
    }


}



