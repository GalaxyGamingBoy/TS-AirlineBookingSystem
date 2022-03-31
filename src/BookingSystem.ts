import Booking from "./Booking"
import BookingPlan from "./Enums"

export default class BookingSystem {
    seatExists(cBookingList: Booking[], seatNumber: number) {
        cBookingList.forEach((booking) => {
            if(booking.bookingSeatNumber == seatNumber)
                return true;
        })
        return false;
    }

    bookPlanValid(plan: string) {
        switch (plan){
            case "ECONOMY":
                return true;
            case "ECONOMY_PLUS":
                return true;
            case "BUSINESS":
                return true;
            case "FIRST_CLASS":
                return true;
            default:
                return false;
        }
    }

    strToEnum(plan: string) {
        switch (plan) {
            case "ECONOMY":
                return BookingPlan.ECONOMY;
            case "ECONOMY_PLUS":
                return BookingPlan.ECONOMY_PLUS;
            case "BUSINESS":
                return BookingPlan.BUSINESS;
            case "FIRST_CLASS":
                return BookingPlan.FIRST_CLASS;
            default:
                return BookingPlan.ECONOMY;
        }
    }

    newBooking(cBookingList: Booking[], bookName: string, bookSeat: number, bookPlan: string) {
        if(this.seatExists(cBookingList, bookSeat))
            return;
        
        if(!this.bookPlanValid(bookPlan))
            return;
        
        let selectedBookPlan = this.strToEnum(bookPlan);
        let newBooking: Booking = new Booking(bookName, bookSeat, selectedBookPlan);
        return newBooking;
    }

    bookingChangeName(cBookingList: Booking[], seat: number, name: string) {
        if(this.seatExists(cBookingList, seat)){
            cBookingList.forEach((value, index) => {
                if(value.bookingSeatNumber == seat){
                    value.bookingName = name;
                    cBookingList[index] = value;
                }
            })
        }
        return cBookingList;
    }

    bookingChangeSeat(cBookingList: Booking[], seat: number, newSeat: number) {
        // todo   
    }

    bookingChangePlan(cBookingList: Booking[], seat: number, newPlan: string){
        // todo
    }
}
