import axiosApi from './axiosApi'

const theaterMovie = {
    getThearterMovie(params){
        const url = `/QuanLyRap/LayThongTinCumRapTheoHeThong`;
        return axiosApi.get(url , { params: params } )
    }
}

export default theaterMovie