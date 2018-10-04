import React from 'react';
import { SafeAreaView, Text, View, Table } from 'react-native';
import tables from './assets/tables.json';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export class TableSeats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Card>
                    <Text>Table {this.props.table.id}</Text>
                    <View style={tableSeats}>
                        {
                            this.props.table.seats.map(seat => {
                                return (
                                    <Text>Seat {seat.seat_number}</Text>
                                );
                            }
                            )
                        }
                    </View>
                </Card>
            </SafeAreaView>
        );

    }
}

const tableSeats = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
}