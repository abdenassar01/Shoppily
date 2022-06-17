import axios from "axios";

export const main = axios.create({
    baseURL: "http://springbootecommerceapi-env.eba-n8zcs5z8.eu-west-3.elasticbeanstalk.com"
    //baseURL: "http://localhost:5000"
});

export const extended = axios.create({
    baseURL: "http://springbootecommerceapi-env.eba-n8zcs5z8.eu-west-3.elasticbeanstalk.com/api/v1"
    //baseURL: "http://localhost:5000/api/v1"
})
