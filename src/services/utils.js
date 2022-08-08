

function setStorage(key, value){
    return localStorage.setItem(key,value);

}

function getStorage(key, value){
    return localStorage.getItem(key,value);

}

function removeStorage(key, value){
    return localStorage.removeItem(key,value);

}

function clearAllStorage(key, value){
    return localStorage.clear(key,value);


}

export { setStorage,getStorage,removeStorage,clearAllStorage}

