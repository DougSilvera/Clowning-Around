import { bookingForm } from "./bookingform.js"
import { Bookings } from "./bookings.js"

export const buttonsAndLollipop = () => {
    return `
    <h1>Buttons and Lollipop Birthday Bookings!</h1>
    <section class="bookingForm">
        ${bookingForm()}
    </section>

    <section class="bookingRequests">
        <h2>Party Requests</h2>
        ${Bookings()}
    </section>
    `
}
