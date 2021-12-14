import {
  deleteBooking,
  getBookings,
  getClowns,
  sendBooking,
  sendCompletion,
} from "./dataAccess.js";

export const Bookings = () => {
  const bookings = getBookings();
  const clowns = getClowns();
  let html = `<ul>`;

  const convertBookingToListElement = bookings.map((booking) => {
    return `
        <li id="booking_entry">${booking.date} A ${booking.hours} hour long party for ${booking.child}</li>
            
            <button class="booking__delete" id=booking--${booking.id}>Delete</button>
            
            <select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${clowns
              .map((clown) => {
                return `<option id="clowns"  value="${booking.id}--${clown.id}--${booking.date}--${clown.name}">${clown.name}</option>`;
              })
              .join("")}
            </select>`;
  });
  convertBookingToListElement.sort(bookings.timeStamp);
  html += convertBookingToListElement.join("");
  html += `</ul>`;
  return html;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("change", (event) => {
  if (event.target.id === "clowns") {
    const [bookingId, clownId, bookingDate, completionClownName] = event.target.value.split("--");
    const completionName = completionClownName
    const completionBookingId = bookingId;
    const completionClownId = clownId;
    

    const completion = {
      clownId: completionClownId,
      bookingId: completionBookingId,
      clownName: completionName,
      completionDate: bookingDate
    
    };
    sendCompletion(completion);
  }
});
