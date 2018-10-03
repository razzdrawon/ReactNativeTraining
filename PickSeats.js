import React from 'react';
import { SafeAreaView, Text, View, ScrollView, Button } from 'react-native';
import tables from './assets/tables.json';
import { TableSeats } from './TableSeats';


export class PickSeats extends React.Component {

    constructor(props) {
        super(props);
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