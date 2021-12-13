import { buttonsAndLollipop } from "./buttons_and_lollipop.js";
import { deleteBooking, fetchBookings, fetchClowns, fetchCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");




mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("booking--")) {
      const [, bookingId] = click.target.id.split("--");
      deleteBooking(parseInt(bookingId));
    }
  });

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});

const render = () => {
  fetchBookings()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
      mainContainer.innerHTML = buttonsAndLollipop();
    });
};

render();
