import { authInfo } from "../types/loginInfoType";
import axios from "axios";
import { menuInfo } from "../components/common/left/menuInfoType";

export const getMenuList = async (menuAuthData: authInfo, setMenuList: Function) => {
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

    setMenuList(menuList)
}


export const getChildMenuList = (pathName: string, menuList: Array<menuInfo>): Array<menuInfo> => {
    if (pathName === '/') {
        return []
    }
    const equalsMenu = menuList.find((menu) => pathName === menu.menu_prgm_name)
    if (!equalsMenu)
        return [];
    const childMenuList = equalsMenu.chlid_menu_list
    return childMenuList
}