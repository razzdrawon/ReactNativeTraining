import React from 'react';
import { Text, View, Image, DatePickerIOS, Button   } from 'react-native';
import {FilmBrief} from './FilmBrief';

export const Landing = (props) => {
    console.log('films Landing: ', props.films);
    return (
        <View>

             <DatePickerIOS date={new Date()} onDateChange={setDate}/>
             <Button onPress={pickDate} title="Pick a showing date"/>

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

function setDate(date){
    console.log("Selected date", date);
}

function pickDate(){
    DatePickerAndroid.open({date:new Date()}) .then( ({month,day,year}) =>
    setDate(new Date(year,month,day)));
}