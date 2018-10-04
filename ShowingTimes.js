import React from 'react';
import { store } from './store/store';
import { StyleSheet, TouchableHighlight, Text, View, Image, ScrollView } from 'react-native';

export default class ShowingTimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {

        return (
                <View style={styles.showingTimes}>
                    {
                        this.props.showings.map(showing => {
                            let date = new Date(showing.showing_time);
                            date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
                            return (<Text key={showing.id}> {date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) + ' hrs'} </Text>);
                        }
                        )
                    }
                </View>
        );
    }   
}

const styles = StyleSheet.create(
    {
        showingTimes: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: 10
        },
        subHeaderText:{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 15
        }
    }
);