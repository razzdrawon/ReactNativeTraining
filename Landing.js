import React from 'react';
import { Text, View, Image   } from 'react-native';

export const Landing = (props) => {
    console.log('films Landing: ', props.films);
    return (
        <View>
            {/* <Text>Dinner And a Movie</Text>
            <Text>tap on a film to see its details and pick a date to see showtimes</Text> */}
            {
                props.films.map( film => {
                        return (
                            <View>
                                <Text key={film.id}>{film.title}</Text>
                                <Image source={{uri:`http://localhost:5000/${film.poster_path}`}} style={{height: 100, width: 100}} />
                            </View>
                        
                        )
                    }
                )
            }
        </View>
    );
}