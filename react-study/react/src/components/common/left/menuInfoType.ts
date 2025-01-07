
interface img {
    file_name: string,
    file_path: string,
    file_orgn: string
}
export interface img_file {
    file_numb: number,
    file_list: Array<img>
}
export interface menuInfo {
    menu_name: string,
    menu_prgm_name: string,
    disp_name: string,
    img_file_list: Array<img_file>
    menu_numb: string
}