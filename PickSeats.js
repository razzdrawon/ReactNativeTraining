import React from 'react';
import { SafeAreaView, Text, View, ScrollView, Button } from 'react-native';
import tables from './assets/tables.json';
import { TableSeats } from './TableSeats';
import { store } from './store/store';


export class PickSeats extends React.Component {

    constructor() {
        super();
        this.state = { ...store.getState()};
        store.subscribe(() => this.setState(store.getState()));
    }

    render(){
        return (
        <SafeAreaView>
            <View>
                <Text>Choose your seats for</Text>
                <Text>Movie Title</Text>
                <Text>on</Text>
                <Text>Wendnesday, October 3, 2018</Text>
                <Text>at 3:30</Text>
            </View>

            <ScrollView>
            {/* <TableSeats table={tables[0]}></TableSeats> */}
            {
                tables.map(table => {
                    return (
                        <TableSeats table={table}></TableSeats>
                    )
                })
            }
            </ScrollView>
            <Button title='Checkout'></Button>

        </SafeAreaView>
        );

    }
}