import { useEffect } from "react";
import { authInfo } from "../types/loginInfoType";
import { useNavigate } from "react-router-dom";

export const useLoginRedirect = (mainAuth: authInfo) => {
    const nav = useNavigate();
    useEffect(() => {
        if (!mainAuth) {
            nav('/login')
            return;
        }
    }, [mainAuth])
}