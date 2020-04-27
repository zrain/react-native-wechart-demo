import { CookieService, LocalStorageService } from '@services';

/**
 * 拦截器：给 request Header 统一增加 Header
 *
 * header : {
 *     Authorization: token
 * }
 *
 * @type {Array}
 */
const authorizationInterceptor = [
    config => {
        const token =
            CookieService.get('token') || LocalStorageService.get('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        throw error;
    }
];

export default authorizationInterceptor;
