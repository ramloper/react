import { authInfo } from "../../../types/loginInfoType";
import axios from "axios";
import { menuInfo } from "./menuInfoType";
export const getMenuList = async (menuAuthData: authInfo) => {
    const requestParam = {
        auth_type: menuAuthData.auth_type,
        trgt_clss: "CNTR",
        trgt_numb: menuAuthData.cent_numb,
        auth_clss: menuAuthData.auth_clss
    }
    let menuList: Array<menuInfo> = []
    let url = "/api/v2/menu/TOPM?" + new URLSearchParams(requestParam);

    const response = await axios.get<{ menu_list: Array<menuInfo> }>(url);
    menuList = response.data.menu_list
    return menuList
}