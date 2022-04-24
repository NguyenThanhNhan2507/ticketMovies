import axiosApi from "./axiosApi";

const userApi = {
    addUserApi(data){
        const url = `/QuanLyNguoiDung/DangKy`;
        return axiosApi.post(url ,data )
    },
}

