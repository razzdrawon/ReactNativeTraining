import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text, View, Image } from 'react-native';

export default class FilmBrief extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {


        return (
            <TouchableHighlight onPress={()=>this.selectThisFilm(this.props.film)}>
                <View style={container}>
                    <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={{ height: 100, width: 100 }} />
                    <View key={this.props.key}>
                        <Text>{this.props.film.title}</Text>
                        <Text>{this.props.film.tagline}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    selectThisFilm = (film) => {
        store.dispatch({ type: "SET_SELECTED_FILM", film: film });
        store.dispatch({ type: "SHOW_FILM_DETAILS" });
    }


}

const container = {
    flexDirection: 'row'
};




