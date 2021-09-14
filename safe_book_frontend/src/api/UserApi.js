import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:44325/api/"
});

export const userApi = {
    getUser(id){ // setProjectsType only if you want to combine news with projects
        return instance(`users/${id}`)
        .then( response => {
            response.setUser(response.data);
        });
    }
}
