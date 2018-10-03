import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text, View, Image } from 'react-native';

export default class FilmBrief extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {
        console.log('props: ', this.props.film);
        return (
            <TouchableHighlight onPress={this.selectThisFilm}>
                <View style={container}>
                    <Image source={{ uri: `http://localhost:5000/${this.props.image}` }} style={{ height: 100, width: 100 }} />
                    <View key={this.props.key}>
                        <Text>{this.props.film.title}</Text>
                        <Text>{this.props.film.tagline}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    selectThisFilm = () => {
        console.log("selected film : ", this.props.film);
        store.dispatch({ type: "SET_SELECTED_FILM", film: this.props.film });
        store.dispatch({ type: "SHOW_FILM_DETAILS" });
    }


}

const container = {
    flexDirection: 'row'
};




