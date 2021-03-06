import React from 'react';
import { store } from './store/store';
import { View, DatePickerIOS, Button, DatePickerAndroid, Platform , StyleSheet  } from 'react-native';

export default class DatePicker extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {...store.getState()};
    }

    static getDerivedStateFromProps(nextProps, prevState) { return { ...store.getState() };}

    render() {
        return (
                <View >
                    <Button onPress={this.showModal} title={"Showing times for " + this.state.selected_date.toDateString()} />
                    {this.state.showIOSPicker ? <DatePickerIOS date={this.state.selected_date} mode="date" onDateChange={this.setDate} /> : null}
                </View>
        );
    }

    showModal= () => {
        if( Platform.OS  === 'ios'){
            this.setState({ showIOSPicker: !this.state.showIOSPicker });
        }else{
            DatePickerAndroid.open({date:new Date()}) .then( ({month,day,year}) =>
            store.dispatch( {type: "SET_SELECTED_DATE", date:new Date(year, month, day)} )
        );
        }
    }


     setDate = (date) =>{
        this.setState({ showIOSPicker : false });
        store.dispatch( {type: "SET_SELECTED_DATE", date:date} );
    }
}
