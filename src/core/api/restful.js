import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = `https://site-poro.web.app/api/v1`;
// const API_ROOT = `http://localhost:8080/api/v1`;

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        //req.set('authorization', `${token}`);
    }
}

const getCurrentLang = () => {
    return encode(localStorage.getItem("lang"));
}

const requests = { //.withCredentials()
    del: url =>
        superagent.del(`${API_ROOT}${url}?lang=${getCurrentLang()}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}?lang=${getCurrentLang()}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}?lang=${getCurrentLang()}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}?lang=${getCurrentLang()}`, body).use(tokenPlugin).then(responseBody)
};

const Languagues = {
    list: () =>
        requests.get('/locales'),
    message: (locale) =>
        requests.get(`/locales/${encode(locale)}`),
}

const Landing = {
    setup: () => requests.get('/pages/landing')
}

const Footer = {
    setup: () => requests.get('/footer')
}

export default {
    Languagues,
    Landing,
    Footer,
    setToken: _token => { token = _token; }
};
