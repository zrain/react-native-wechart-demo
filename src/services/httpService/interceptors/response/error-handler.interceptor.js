import { getHistory, getStore } from 'koot';

/**
 * 拦截器：统一处理 response status !== 200 的情况
 * 
 * @type {Array}
 */


const errorHandlerInterceptor = [
    function(responseData){
        const { code } = responseData;
        const history = getHistory();
        const store = getStore();
        switch( code ){
            case 200:
                return responseData;
            case 403:
                history.push('/login');
                store.dispatch('LOGOUT');
                return responseData;
            case 803:
                history.push('/login');
                store.dispatch('LOGOUT');
                return responseData;
            default:
                return responseData;
        }
    },
    function(error){
        return error;
    }
]

export default errorHandlerInterceptor;
