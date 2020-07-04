import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F3F3F3",
    paddingTop: 20,
    flex: 1,
  },
});

const EventList = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setInterval(() => {
      const eventList = require("../db.json").events.map((e) => ({
        ...e,
        date: new Date(e.date),
      }));

      setEvents(eventList);
    }, 1000);

    return () => {
      console.log("clean up events component");
    };
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventList;
