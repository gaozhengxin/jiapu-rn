import { md5 } from 'js-md5';

export function hash(payload) {
    var hasher = md5.hmac.create('jiapu');
    hasher.update(payload)
    let res = hasher.hex()
    return res
}

console.log(hash("张伟打官司"))