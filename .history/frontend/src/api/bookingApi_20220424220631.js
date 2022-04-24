import axiosApi from "./axiosApi";



const bookingApi = {
    bookTicket(data){
        const url = `/QuanLyDatVe/DatVe`;
        return axiosApi.post(url ,data )
    }
}

