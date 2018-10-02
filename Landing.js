import React from 'react';
import { Modal,Text,ScrollView,SafeAreaView, View, Image, DatePickerIOS, Button, DatePickerAndroid, Platform   } from 'react-native';
import FilmBrief from './FilmBrief'; 
import DatePicker from './DatePicker';
import { store } from './store/store';

export default class Landing extends React.Component {
    constructor(props) { super(props);
      this.state = {...store.getState()};
    }
    
    render() {
    return (
        <SafeAreaView>
             <Modal
                visible = {this.props.showFilmDetails}>
                <View>
                    <Text>Just Something to see</Text>
                    <Button onPress={store.dispatch({type:"HIDE_FILM_DETAILS"})} title="Done"/>
                </View>
             </Modal>
            <ScrollView>
                <View>
                    <DatePicker />
                    {
                        this.props.films.map( film => {
                                return (
                                    <FilmBrief film={film.title} key={film.id} isSelected='true' image= {film.poster_path} />
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
}
}



