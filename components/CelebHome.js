import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";

import celebJson from "../celebrities.json";
import styles from "./celebHome-styles";

// React code snippets

export default class celebHome extends Component {
    state={
        search: 0
    }

    handleChange(input){
        if (!(input >= 0)) input = 0;
        else if (input >= celebJson.length) input = celebJson.length - 1;
        else if (!input) input = 0
    
        console.log(input)
    
        this.setState({
          search: input
        });
    }

  render() {
    const renderFiveCelebs = celebJson.slice(0, 5).map(ele => {
      return (
        <TouchableOpacity
          key={ele.id}
          onPress={() => this.props.navigation.navigate("CelebDetail", { ele })}
        >
          <View>
            <Text>{ele.name}</Text>
            <Image
              style={{ height: 50, width: 50 }}
              source={{ uri: ele.pictureUrl }}
            />
          </View>
        </TouchableOpacity>
      );
    });

    const renderAllCelebs = celebJson.map((ele, index) => {
      let newStyle = styles.oddNumber;
      if (index % 2 == 0) newStyle = styles.evenNumber;

      return (
        <TouchableOpacity
          key={ele.id}
          onPress={() => this.props.navigation.navigate("CelebDetail", { ele })}
        >
          <View style={[styles.scrollWindow, newStyle]}>
            <Text>{ele.name}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/background-image.jpg")}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>CelebHome</Text>
          <TextInput
                  style={{
                    backgroundColor: "grey",
                    width: 150,
                    textAlign: "center",
                    marginBottom: 110,
                  }}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={(input) => this.handleChange(input)}
                />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
                {renderFiveCelebs}
                </View>
            <View style={{ height: "80%" }}>
              <ScrollView>{renderAllCelebs}</ScrollView>
              <View>
            </View>
              </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
