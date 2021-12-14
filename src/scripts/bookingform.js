import { deleteBooking, sendBooking } from "./dataAccess.js"

export const bookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="bookingParent">Parent Name</label>
            <input type="text" name="bookingParent" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="bookingChild">Child Name</label>
            <input type="text" name="bookingChild" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="bookingHeadCount">Party Guest Count</label>
            <input type="number" name="bookingHeadCount" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="bookingAddress">Address</label>
            <input type="text" name="bookingAddress" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="bookingHours">Session Length</label>
            <input type="number" name="bookingHours" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="bookingDate">Date of Party</label>
            <input type="date" name="bookingDate" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    const getTimestamp = (date) => {
        const dt = Date.parse(date);
        return dt/1000
    } 
    if (clickEvent.target.id === "submitRequest") {
        const userParent = document.querySelector("input[name='bookingParent']").value
        const userChild = document.querySelector("input[name='bookingChild']").value
        const userHeadCount = document.querySelector("input[name='bookingHeadCount']").value
        const userAddress = document.querySelector("input[name='bookingAddress']").value
        const userHours = document.querySelector("input[name='bookingHours']").value
        const userDate = document.querySelector("input[name='bookingDate']").value

        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            headCount: userHeadCount,
            address: userAddress,
            hours: userHours,
            date: userDate,
            timeStamp: getTimestamp(userDate)
        }
        sendBooking(dataToSendToAPI)
    }
})

