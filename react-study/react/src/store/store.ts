import { create } from "zustand";
import { menuInfo } from "../components/common/left/menuInfoType";

interface MenuStoreType {
    menuNumber: string,
    inputMenuMember: (num: string) => void;
}

interface menuListStoreType {
    menuList: Array<menuInfo>,
    inputMenuList: (menuList: Array<menuInfo>) => void;
}

export const menuStore = create<MenuStoreType>()(set => ({
    menuNumber: '',
    inputMenuMember: (num) => set({ menuNumber: num })
}))


export const menuListStore = create<menuListStoreType>()(set => ({
    menuList: [],
    inputMenuList: (menuList) => set({ menuList: menuList })
}))