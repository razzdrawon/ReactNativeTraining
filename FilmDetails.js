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


                <View style={viewImage}>
                    <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={image} />
                </View>

                <Text>Showing times for {this.props.selected_date.toDateString()}</Text>
                <View style={showingTimes}>
                {
                    showings.map(showing =>
                        {
                            let date = new Date(showing.showing_time);
                            date.toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit'});
                            return (<Text key={showing.id}> {date.toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit'}) + ' hrs'} </Text>);
                        }
                    )
                }
                </View>

                <Text>
                    Selected Film : {this.props.film.title}
                </Text>

                <Text>
                    Tagline : {this.props.film.tagline}
                </Text>

                <Text>
                    Overview : {this.props.film.overview}
                </Text>

                
            </View>
        );
    }
}

const image = {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
};

const viewImage ={
    flex: 1,
    flexBasis: 200
} 

const test = { flexBasis: 400, flex: 1 };

const showingTimes = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
}