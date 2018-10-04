import React from 'react';
import { store } from './store/store';
import { StyleSheet, TouchableHighlight, Text, View, Image, ScrollView } from 'react-native';
import ShowingTimes from './ShowingTimes';
import { Title } from './Title';

export default class FilmDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
    }

    render() {
        var showings = require('./assets/showings.json');
        return (
            <View>

                <View style={viewImage}>
                        <Image style={styles.imagesStyle} source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={image} />
                    </View>

                {/* <ScrollView> */}

                    <Text style={styles.subHeaderText}>Showing times for {this.props.selected_date.toDateString()}</Text>
                    <ShowingTimes showings={showings}/>
                    {/*<View style={showingTimes}>
                        {
                            showings.map(showing => {
                                let date = new Date(showing.showing_time);
                                date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
                                return (<Text key={showing.id}> {date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) + ' hrs'} </Text>);
                            }
                            )
                        }
                    </View>*/}

                    <Text>
                        Selected Film : {this.props.film.title}
                    </Text>

                    <Text>
                        Tagline : {this.props.film.tagline}
                    </Text>

                    <Text>
                        Overview : {this.props.film.overview}
                    </Text>

                {/* </ScrollView> */}
                {/* <View>
                    <ShowingTimes selected_date={this.props.selected_date} showings={showings} />>
                </View> */}
                    <View>
                        <Text>
                            Rating: {this.props.film.vote_average}/<Text style={styles.rankingStyle}>10</Text>
                        </Text>
                        <Text>
                            {this.props.film.vote_count} Votes
                        </Text>
                    </View>
                    
            </View>
        );
    }
}

const image = {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
};

const viewImage = {
    flex: 1,
    flexBasis: 200
}

const test = { flexBasis: 400, flex: 1 };

const showingTimes = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
}

const styles = StyleSheet.create(
    {
        rankingStyle:{
            fontSize: 10
        },
        imagesStyle:{
            resizeMode: 'contain'
        },
        subHeaderText:{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 15
        }
    }
);
