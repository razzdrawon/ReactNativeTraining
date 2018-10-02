import React from 'react';
import { Text, View, Image   } from 'react-native';

export const FilmBrief = (props) => {
    console.log('films FilmBrief: ', props);
    return (
       
                            <View>
                                <Text key={props.key}>{props.film}</Text>
                                <Image source={{uri:`http://localhost:5000/${props.image}`}} style={{height: 100, width: 100}} />
                            </View>
                        
                        );
                    }
