import React from 'react';
import { SafeAreaView, Text, View, Table } from 'react-native';
import tables from './assets/tables.json';

export class PickSeats extends React.Component {

    constructor(props) {
        super(props);
        // this.state = { ...store.getState() };
    }

    render(){
        console.log(tables[0].id);
        return (
        <SafeAreaView>
            <View>
                <Text>Choose your seats for</Text>
                <Text>Movie Title</Text>
                <Text>on</Text>
                <Text>Wendnesday, October 3, 2018</Text>
                <Text>at 3:30</Text>
            </View>

            <Text>{tables[0].theater_id}</Text>
            {/* {
                tables.map(table => {
                    return (
                        <Text>{table.seat_number}</Text>
                    )
                })
            } */}


        </SafeAreaView>
        );

    }
}