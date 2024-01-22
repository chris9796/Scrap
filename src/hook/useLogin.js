import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = () =>{
    return useMutation((data) => axios.post('/api/v1/auth/login',data));
}