import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import ActionButton from "react-native-action-button";
import EventCard from "../Components/EventCard";
import { getEvents } from "../api";

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F3F3F3",
    paddingTop: 20,
    flex: 1,
  },
});

const EventList = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((data) => setEvents(data));

    setInterval((events) => {
      if (!events) {
        return;
      }

      const newEventList = events.map((e) => ({
        ...e,
        date: new Date(e.date),
      }));

      console.log("interval", newEventList);
      setEvents(newEventList);
    }, 1000);

    navigation.addListener("focus", () => {
      getEvents().then((eventResponse) => {
        const newEventList = eventResponse.map((e) => ({
          ...e,
          date: new Date(e.date),
        }));

        setEvents(newEventList);
      });
    });
  }, [navigation, , events]);

  const handleAddNewEvent = () => {
    navigation.navigate("form");
  };

  return [
    <FlatList
      style={styles.list}
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      keyExtractor={(item) => item.id}
    />,
    <ActionButton
      buttonColor="#1abc9c"
      key="fab"
      onPress={handleAddNewEvent}
    ></ActionButton>,
  ];
};

export default EventList;
