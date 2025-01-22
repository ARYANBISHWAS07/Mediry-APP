import { devUrl } from "../constants/contants";

export default class ApiUtil {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
    async get(endpoint,header={}){
        try {
            let response = await fetch(this.baseUrl + endpoint, {
            method: "GET",
            headers: header,
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
    async post(endpoint,header={},body={}){
        try {
            let response = await fetch(this.baseUrl + endpoint, {
            method: "POST",
            headers: header,
            body: JSON.stringify(body),
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
    async put(endpoint,header={},body={}){
        try {
            let response = await fetch(this.baseUrl + endpoint, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(body),
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
    async delete(endpoint,header={}){
        try {
            let response = await fetch(this.baseUrl + endpoint, {
            method: "DELETE",
            headers: header,
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
    }
}}