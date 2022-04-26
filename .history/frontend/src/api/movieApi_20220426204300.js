import axiosApi from "./axiosApi";

const movieApi = {
    getMovieApi() {
        const url = `/QuanLyPhim/LayDanhSachPhim`
        return axiosApi.get()
    }
}