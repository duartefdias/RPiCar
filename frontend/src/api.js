import axios from 'axios'

//Connection with server
export default () => {
    var myAxios

    // LOCAL DEVELOPMENT MODE
    if (window.location.href.includes('localhost')) {
        myAxios = axios.create({
            baseURL: 'http://192.168.1.' //need to add raspberry pi last IP digit
        })
    }
    // PRODUCTION MODE
    else {
        myAxios = axios.create({
            baseURL: process.env.VUE_APP_APIURL
        })
    }
    //console.log(myAxios)
    myAxios.interceptors.response.use(
        function(response) { return response;}, 
        function(error) {
        // handle error
        if (error.response) {
            return Promise.reject(error)
        }
    })
    return myAxios
}