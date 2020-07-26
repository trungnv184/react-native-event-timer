import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate, saveEvent } from "../api";
import moment from "moment";

const EventForm = (props) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addEventHandler = () => {
    // console.log("Add Click", props.navigation);

    if (!date) {
      date = new Date().toString();
    } else {
      date.toString();
    }

    const newEventDateString = moment()
      .add(3, "days")
      .format("YYYY-MM-DDTHH:mm:ss");

    saveEvent(title, newEventDateString).then(() => props.navigation.goBack());
  };

  const changeTitleHandler = (title) => {
    setTitle(title);
  };

  const changeDateHandler = (event, selectedDate) => {
    console.log(selectedDate);
    setTimeout(() => {
      setShowDatePicker(false);
    }, 1000);
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.textInput}
          spellCheck={false}
          onChangeText={changeTitleHandler}
          value={title}
          placeholder="Enter your event"
        />
      </View>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter date event"
          spellCheck={false}
          value={formatDate(date)}
          onFocus={handleDatePress}
          editable={!showDatePicker}
        ></TextInput>
        {
          <View>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                is24Hour={true}
                mode="datetime"
                minimumDate={new Date()}
                onChange={changeDateHandler}
              />
            )}
          </View>
        }
      </View>
      <TouchableHighlight style={styles.button} onPress={addEventHandler}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 10,
  },
  fieldContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 0.55,
    borderColor: "#CCC",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: "#48d1cc",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  buttonText: {
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: 18,
  },
});

export default EventForm;
