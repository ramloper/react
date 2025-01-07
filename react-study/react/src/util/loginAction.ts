import { loginResponse } from "../types/loginInfoType"

const setSettion = (res: loginResponse) => {
    const accessToken = res.tokeninfo.access_token
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("centList", JSON.stringify(res.cent_list))
    localStorage.setItem("mainAuth", JSON.stringify(res.main_auth))
    localStorage.setItem("subAuth", JSON.stringify(res.sub_auth))
}

export { setSettion }