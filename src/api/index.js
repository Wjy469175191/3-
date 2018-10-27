

// 获取数据
export function get(url){
    return fetch(Host+url).then(response=>response.json())
}



