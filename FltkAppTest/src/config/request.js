
export default class CMSRequest{

    /**
     * GET请求
     * @param {字符串} url
     * @param {字典} param
     * @param {成功回调(param:JSON)} success
     * @param {失败回调(param:ERROR)} failure
     * @returns 功能:GET请求
     */
    static GET(url,param,success,failure){

        // 总长度
        var totalParamStr = '';

        // 判断字典参数是否有值
        // 把字典转换为字符串,如果字典为空,转换为'{}'
        var jsonStr = JSON.stringify(param);
        if (jsonStr != '{}') {
            // 符合
            var mark = '?';
            var i = 0;
            for (key in param){
                if (i > 0) {
                    mark = '&'
                }
                var value = param[key];
                var paramStr = mark + key + '=' + value;
                totalParamStr += paramStr;
                i++;
            }
        }

        // 拼接url
        url += totalParamStr;
        fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
                success(json);
            })
            .catch((error)=>{
                failure(error)
            })
    }
}
