
export default class Booking {
    bookingName: string
    bookingSeatNumber: number
    bookingPlan: number

    constructor(bookingName?: string, bookingSeatNumber?: number, bookingPlan?: number){
        this.bookingName = bookingName;
        this.bookingSeatNumber = bookingSeatNumber;
        this.bookingPlan = bookingPlan;
    }
}