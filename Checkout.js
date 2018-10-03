import React from 'react';
import { store } from './store/store';
import { TouchableHighlight, Text,TextInput,Button, View, Image,SafeAreaView, ScrollView,KeyboardAvoidingView } from 'react-native';
import { Title } from './Title';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {

        return (
            <SafeAreaView>
            <KeyboardAvoidingView behavior="padding">
            
            <ScrollView>
                <View>
                    <Title>We are Checking Out</Title>

                    <Text>Last Name</Text>
                    <TextInput style={{height: 40, borderColor: 'red', borderWidth: 1}} />
                    <Text>Credit Card</Text>
                    <TextInput style={{height: 40, borderColor: 'red', borderWidth: 1}} keyboardType = {'number-pad'} />
                    <Text>Email</Text>
                    <TextInput style={{height: 40, borderColor: 'red', borderWidth: 1}} keyboardType = {"email-address"} />
                    <Text>Phone</Text>
                    <TextInput style={{height: 40, borderColor: 'red', borderWidth: 1}} keyboardType = {"phone-pad"} />

                    <Button onPress={()=>this.Purchase()} title="Purchase" />
                
                </View>
            </ScrollView>
            
            </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    Purchase = () => {
    }
}