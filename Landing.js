import React from 'react';
import { Modal, Text, ScrollView, SafeAreaView, View, Image, DatePickerIOS, Button, DatePickerAndroid, Platform } from 'react-native';
import FilmBrief from './FilmBrief';
import FilmDetails from './FilmDetails';
import DatePicker from './DatePicker';
import { store } from './store/store';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {
        console.log('Landing props: ', this.props)
        return (
            <SafeAreaView>
                <Modal visible={this.props.showFilmDetails}>
                <SafeAreaView>
                    <View>
                        <FilmDetails film = {this.props.selected_film} selected_date= {this.state.selected_date}/>
                        <Button onPress={()=>store.dispatch({ type: "HIDE_FILM_DETAILS" })} title="Done" />
                    </View>
                    </SafeAreaView>
                </Modal>
                <ScrollView>
                    <View>
                        <DatePicker />
                        {
                            this.props.films.map(film => {
                                return (
                                    <FilmBrief film={film} key={film.id} isSelected='true' />
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



