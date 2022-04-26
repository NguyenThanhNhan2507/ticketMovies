import axiosApi from './axiosApi'


const theaterList = {
    getTheaterList(){
        const url = `/QuanLyRap/LayThongTinCumRapTheoHeThong`;
        return axiosApi.get(url , { params: params } )
    }
}
export default theaterList