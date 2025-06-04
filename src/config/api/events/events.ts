import axios from 'axios';
// import {eventDto} from "../dtos/eventDto.ts";

// Get all events
export function getEvents() {
    const events = axios.get('http://localhost:3000/api/events');
    return events;
}

// Get event by ID
export function getEventById(id: number) {
    const event = axios.get(`http://localhost:3000/api/events/${id}`);
    return event;
}

// export function createEvent(eventDto: event): Promise<boolean> {
//     try {
//         axios.post('http://localhost:8080/api/events', event);
//         return true;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }