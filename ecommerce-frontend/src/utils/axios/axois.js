import axios from "axios";

export const main = axios.create({
    baseURL: "http://springbootecommerceapi-env.eba-n8zcs5z8.eu-west-3.elasticbeanstalk.com"
});

export const extended = axios.create({
    baseURL: "http://springbootecommerceapi-env.eba-n8zcs5z8.eu-west-3.elasticbeanstalk.com/api/v1"
})
