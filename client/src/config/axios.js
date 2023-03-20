import axios from 'axios'

const api = axios.create({
    baseURL : 'https://slyderslash-snage-reimagined-train-qjgprgjp7v92gjr-3000.preview.app.github.dev',
    timeout : 30000,
    headers : {
        'key' : 'P47$QNDAv8PcFt(=n.7vb84f[8ChJB855*tb,^]',
        'Access-Control-Allow-Origin': 'https://slyderslash-snage-reimagined-train-qjgprgjp7v92gjr-3001.preview.app.github.dev/'
    }
})

export default api