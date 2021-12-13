const applicationState = {
  bookings: [],
  completions: [],
  clowns: []
};

const API = "http://localhost:8088";

export const fetchBookings = () => {
  return fetch(`${API}/bookings`)
    .then((response) => response.json())
    .then((bookingRequests) => {
      applicationState.bookings = bookingRequests;
    });
};

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
      .then((response) => response.json())
      .then((assignedClown) => {
        applicationState.clowns = assignedClown;
      });
  };

  export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
      .then((response) => response.json())
      .then((completions) => {
        applicationState.completions = completions;
      });
  };


export const getBookings = () => {
  return applicationState.bookings.map((booking) => ({ ...booking }));
};
export const getClowns = () => {
    return applicationState.clowns.map((clown) => ({...clown}))
}

export const sendBooking = (userBookingRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userBookingRequest),
  };

  return fetch(`${API}/bookings`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const deleteBooking = (id) => {
  return fetch(`${API}/bookings/${id}`, { method: "DELETE" }).then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

export const sendCompletion = (userCompletion) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCompletion),
    };
  
    return fetch(`${API}/completions`, fetchOptions)
      .then((response) => response.json())
      .then(() => {
        document.dispatchEvent(new CustomEvent("stateChanged"));
      });
  };


