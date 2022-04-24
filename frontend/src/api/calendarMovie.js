import axiosApi from "./axiosApi";



const calendarMovie = {

    getCalendarMovie(params){
        const url = `/QuanLyRap/LayThongTinLichChieuPhim`;
        return axiosApi.get(url , { params: params } )
    },

}

export default calendarMovie