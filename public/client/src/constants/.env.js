let API_BASE_URL = 'http://ec2-52-76-123-135.ap-southeast-1.compute.amazonaws.com/api/';
if (process.env.NODE_ENV === "development") {
    API_BASE_URL = 'http://kee.app/api/';
}
export default {
    API_BASE_URL
};