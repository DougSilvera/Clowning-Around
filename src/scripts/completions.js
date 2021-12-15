import { getClowns, getCompletions } from "./dataAccess.js";




export const completions = () => {
    const completions = getCompletions();
    const clowns = getClowns();
    let html = `<ul>`;
  
    const convertCompletionToListElement = completions.map((completion) => {
      return `
          <li id="completion_entry">${completion.clownName} performed at a party for ${completion.bookingChild} on ${completion.completionDate}
              
              </li>`;
    });
    html += convertCompletionToListElement.join("");
    html += `</ul>`;
    return html;
  };