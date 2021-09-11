import axios from "axios";
import {SERVER} from '../config';


export const apiClient = axios.create({
    baseURL: `${SERVER}`,
})
