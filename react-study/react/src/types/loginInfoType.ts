interface tokenInfo {
    access_token: string
}

interface cent_list {
    cent_type: string,
    centnumb_list: Array<centnumb_info>
}
interface centnumb_info {
    cent_numb: string,
    login_type: string,
    auth_clss: string,
    auth_type: string
}
export interface loginResponse {
    tokeninfo: tokenInfo,
    cent_list: cent_list,
    main_auth: authInfo,
    sub_auth: authInfo,
    cent_list_size: number
}
export interface authInfo {
    cent_numb: string,
    login_type: string,
    auth_clss: string,
    auth_type: string
}