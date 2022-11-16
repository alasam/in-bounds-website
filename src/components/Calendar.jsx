import React from "react";

function Calendar() {
  const gapi = window.gapi;
  var CLIENT_ID =
    "6a7284b769a3d441c2ca2d0f54cf72408f3a5d52eb4a8c940fd3905f99fd65b7@group.calendar.google.com";
  var API_KEY = "AIzaSyALO7DLa1MThBJs-iTzYpoViob41sN68Mc";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  // Get Event
  // get events
  gapi.client.calendar.events
    .list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    })
    .then((response) => {
      const events = response.result.items;
      console.log("EVENTS: ", events);
    });

  return;
}

export default Calendar;
