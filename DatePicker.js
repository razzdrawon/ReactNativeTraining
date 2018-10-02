import { store } from './store/store';
import { DatePickerIOS, Button, DatePickerAndroid, Platform   } from 'react-native';

export default class DatePicker extends React.Component {
    constructor() { super();
      this.state = store.getState();
    }

    static getDerivedStateFromProps(nextProps, prevState) { return { ...store.getState() };}

    render() {
        console.log('state: ', this.state);
        return (
            <Button onPress={this.showModal} title="Showing times for {this.state.selected_date.toDateString()}" />
        );
      }

    showModal(){
        { Platform.OS === "ios" && <DatePickerIOS date={new Date()} onDateChange={setDate}/> }
        { Platform.OS === "android" && <Button onPress={pickDate} title="Pick a showing date"/> }
    }

     pickDate(){
        DatePickerAndroid.open({date:new Date()}) .then( ({month,day,year}) =>
            store.dispatch( {type: "SET_SELECTED_DATE", date:new Date(date.year, date.month, date.day)} )
        );
    }

     setDate(date){
        console.log("Selected date", date);
    }
}