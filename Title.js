import React from 'react';
import { Text} from 'react-native';

export const Title = props => { 
return (<Text style={{
    fontSize: 30, 
    fontWeight: 'bold'
}}>
    {props.children}
</Text>);
}