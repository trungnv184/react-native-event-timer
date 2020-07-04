import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const EventForm = () => {
  const addHandler = () => {
    console.Console("Add Click");
  };

  return (
    <View>
      <TouchableHighlight onPress={addHandler}>
        <Text>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
