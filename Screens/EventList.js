import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
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

const EventList = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(async () => {
    // setInterval(() => {
    //   const eventList = require("../db.json").events.map((e) => ({
    //     ...e,
    //     date: new Date(e.date),
    //   }));
    //   setEvents(eventList);
    // }, 1000);

    const eventList = await getEvents();
    setEvents(eventList);

    setInterval(() => {
      if (!eventList) {
        return;
      }

      const newEventList = eventList.map((e) => ({
        ...e,
        date: new Date(e.date),
      }));

      setEvents(newEventList);
    }, 1000);

    props.navigation.addListener("didFocus", () => {
      getEvents().then((eventResponse) => setEvents(eventResponse));
    });

    return () => {
      console.log("clean up events component");
    };
  }, []);

  const handleAddNewEvent = () => {
    props.navigation.navigate("form");
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
