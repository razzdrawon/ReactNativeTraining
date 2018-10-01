import React from 'react';
import { Text, View } from 'react-native';

export const Landing = (props) => {
    console.log('films Landing: ', props.films);
    return (
        <View>
            <Text>Dinner And a Movie</Text>
            <Text>tap on a film to see its details and pick a date to see showtimes</Text>
            {props.films.map( film => {
                    <Text>{film.id}</Text>
                }
                )
            }
        </View>
    );
}