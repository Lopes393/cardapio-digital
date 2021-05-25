import axios from "axios";

export const api = axios.create({
  //baseURL: "http://apicardapio.siagesc.com.br/api",
  baseURL: "http://192.168.0.181:8000/api",
});
