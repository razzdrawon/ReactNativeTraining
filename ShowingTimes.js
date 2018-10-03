import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text, View, Image, ScrollView } from 'react-native';

export default class ShowingTimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {

        return (
                <View>
                    <Text>Showing times for {this.props.selected_date.toDateString()}</Text> 
                    {
                        this.props.showings.map(showing => 
                            <Text key={showing.id}> {showing.showing_time} </Text> 
                        )
                    }
            </View>
        );
    }
}