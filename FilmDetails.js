import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text, View, Image } from 'react-native';

export default class FilmDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {
        console.log('FilmDetails state: ', this.state);
        var showings = require('./assets/showings.json');

        return (
            <View>

                <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={{ height: 100, width: 100 }} />

                <Text>
                    Selected Film : {this.props.film.title}
                </Text>

                <Text>
                   Tagline : {this.props.film.tagline}
                </Text>

                <Text>
                   Overview : {this.props.film.overview}
                </Text>

                <Text>Showing times for {this.props.selected_date.toDateString()}</Text> 
                {
                    showings.map(showing => 
                        <Text key={showing.id}> {showing.showing_time} </Text> 
                    )
                }
            </View>
        );
    }
}