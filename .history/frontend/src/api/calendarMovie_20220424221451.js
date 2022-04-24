import bookingApi from "./bookingApi";



const calendarMovie = {

    getCalendarMovie(params){
        const url = `/QuanLyRap/LayThongTinLichChieuPhim`;
        return axiosClient.get(url , { params: params } )
    },

}

export default calendarMovie