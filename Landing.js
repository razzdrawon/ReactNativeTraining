import React from 'react';
import { Text, View, Image, DatePickerIOS, Button, DatePickerAndroid, Platform   } from 'react-native';
import {FilmBrief} from './FilmBrief'; 




export const Landing = (props) => {
    console.log('films Landing: ', props.films);
    return (
        <View>
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



