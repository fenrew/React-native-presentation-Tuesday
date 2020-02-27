import React from 'react';
import {View, Text, Image, TextInput} from "react-native"

import DatePicker from "./DateComp"

const Celebrity = (props) => {

    console.log(props.navigation.state.params.ele.name)

    const {name, pictureUrl, popularity} = props.navigation.state.params.ele

    return (
        <View>
            <Text>OneCeleb</Text>
            <Text>{name}</Text>
            <Image style={{height: 200, width: 200}} source={{uri: pictureUrl}} />
            <Text>{popularity}</Text>
            <DatePicker />
        </View>
    );
};

export default Celebrity;