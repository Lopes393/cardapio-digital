import axios from "axios";

export const api = axios.create({
  baseURL: "http://apicardapio.siagesc.com.br/api",
});
