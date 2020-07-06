import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { formatDate, getCountDownParts } from "../api";

const EventCard = (props) => {
  const { event } = props;
  const { days, hours, minutes, seconds } = getCountDownParts(event.date);

  return (
    <TouchableHighlight>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.date}>{formatDate(event.date)}</Text>
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <View style={styles.counterContainer}>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{days}</Text>
            <Text style={styles.counterLabel}>DAYS</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{hours}</Text>
            <Text style={styles.counterLabel}>HOURS</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{minutes}</Text>
            <Text style={styles.counterLabel}>MINUTES</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{seconds}</Text>
            <Text style={styles.counterLabel}>SECONDS</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  }),
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 8,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  date: {
    color: "#bdbdbd",
    textAlign: "right",
    width: "30%",
  },
  title: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 7,
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  counter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
  },
  counterLabel: {
    color: "#a3a3a3",
    fontWeight: "100",
    fontSize: 13,
  },
});

export default EventCard;
