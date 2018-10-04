import React from 'react';
import { StyleSheet, Modal, Text, ScrollView, SafeAreaView, View, Image, DatePickerIOS, Button, DatePickerAndroid, Platform } from 'react-native';
import FilmBrief from './FilmBrief';
import FilmDetails from './FilmDetails';
import DatePicker from './DatePicker';
import { store } from './store/store';
import { Title } from './Title';

export default class Landing extends React.Component {

    static navigationOptions = { header: null,
    };
    constructor() {
        super();
        this.state = { ...store.getState()};
        store.subscribe(() => this.setState(store.getState()));
    }

    chooseTime = showing => { 
        this.props.navigation.navigate('PickSeats', { showing });
    }

    render() {
        return (
            <SafeAreaView style={styles.layout}>
            
                <View style={container}>
                    <Image source={require('./assets/daam.png')} style={{ height: 50, width: 50 }} />
                    <Title style={styles.statusBar} >Dinner and a movie</Title>
                </View>
                <Text>Pick a movie below and a date to see show times</Text>
                <Modal visible={this.state.showFilmDetails}>
                <SafeAreaView>
                    <View>
                        <FilmDetails film={this.state.selected_film} selected_date={this.state.selected_date} chooseTime={this.chooseTime}/>
                        <Button onPress={()=>store.dispatch({ type: "HIDE_FILM_DETAILS" })} title="Done" />
                    </View>
                    </SafeAreaView>
                </Modal>
                <ScrollView>
                    <View>
                        <DatePicker />
                        {
                            
                            this.state.films.map(film => {
                                console.log()
                                    return (
                                        <FilmBrief film={film} key={film.id} isSelected='true' />

                                    )
                                }
                            )
                        }
                </View>
                </ScrollView>
            </SafeAreaView >

        );
    }
}

const container = {
    flexDirection: 'row'
};

const styles = StyleSheet.create({
    statusBar: {
        fontFamily: Platform.OS=='ios'?'Papyrus':'Roboto'
    },
    layout: {
        margin: 10
    }
})

