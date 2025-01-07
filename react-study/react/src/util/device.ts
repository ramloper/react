import { isMobile } from "react-device-detect";


const getDevice = () => {
    return isMobile ? "MOBI" : "PC"
}


export { getDevice }