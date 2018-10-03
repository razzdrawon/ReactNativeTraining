import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text, View, Image } from 'react-native';

export default class FilmDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {
        console.log('state: ', this.state);
        return (
            <View>
                <Text>Showing times for {this.props.selected_date.toDateString()}</Text> 
                {
                    this.props.showings.map(showing => 
                        <Text key={showing.id}> {showing.showing_time} </Text> 
                    )
                }
            </View>
        );
    }

    selectThisFilm = () => {
        console.log("selected film : ", this.props.film);
        store.dispatch({ type: "SET_SELECTED_FILM", film: this.props.film });
        store.dispatch({ type: "SHOW_FILM_DETAILS" });
    }


}