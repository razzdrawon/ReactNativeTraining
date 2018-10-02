import React from 'react';
import { Text, View, Image   } from 'react-native';
import {FilmBrief} from './FilmBrief';

export const Landing = (props) => {
    console.log('films Landing: ', props.films);
    return (
        <View>
            {/* <Text>Dinner And a Movie</Text>
            <Text>tap on a film to see its details and pick a date to see showtimes</Text> */}
            {
                props.films.map( film => {
                        return (
                            <FilmBrief film={film.title} key={film.id} image= {film.poster_path} />
                        )
                    }
                )
            }
        </View>
    );
}