import moment from "moment";
import { v4 as uuidV4 } from "uuid";
import Expo from "expo";

const url = "http://localhost:3000/events";

export function getEvents() {
  return fetch(url)
    .then((response) => response.json())
    .then((events) => events.map((e) => ({ ...e, date: new Date(e.date) })))
    .catch((err) => {
      console.log(err);
    });
}

export function saveEvent(title, date) {
  return fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      title,
      date,
      id: uuidV4(),
    }),
  });
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("DD/MM/YYYY");
}

export function getCountDownParts(evenDate) {
  const duration = moment.duration(moment(new Date(evenDate)).diff(new Date()));

  return {
    days: parseInt(duration.get("days")),
    hours: duration.get("hours"),
    minutes: duration.get("minutes"),
    seconds: duration.get("seconds"),
  };
}
