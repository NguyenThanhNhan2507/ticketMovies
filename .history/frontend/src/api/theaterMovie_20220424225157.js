import bookingApi from "./bookingApi";

const theaterMovie = {
    getThearterMovie(params){
        const url = `/QuanLyRap/LayThongTinCumRapTheoHeThong`;
        return axiosClient.get(url , { params: params } )
    }
}

export default bookingApi