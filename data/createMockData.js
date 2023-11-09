/*var RNFS = require('react-native-fs');

function createMockData({ familiId }) {
    let root = RNFS.DocumentDirectoryPath + '/' + familiId;

    let p1 = root + '/stories/07ebd37d2878778d9b79d6d130df9e79'
    RNFS.writeFile(p1, `# 张家的祖先\n张家的祖先是张飞。`, 'utf8')
}

export default createMockData;*/

import { hash } from '../utils/hash'

const dataMap = new Map();

const img0 = require("./images/defaultPortrait.jpg");
const img1 = require("./images/pexels-pixabay-511313.jpg");
const img2 = require("./images/pexels-ike-louie-natividad-3310695.jpg");
dataMap.set(hash('/images/defaultPortrait.jpg'), img0)
dataMap.set(hash('/images/pexels-pixabay-511313.jpg'), img1)
dataMap.set(hash('/images/pexels-ike-louie-natividad-3310695.jpg'), img2)

import s0 from "./stories/07ebd37d2878778d9b79d6d130df9e79.json";
import s1 from "./stories/94d01659f3b0e0dfd283799004458b7e.json";
import s2 from "./stories/928eb6385b95d6765eb80c3a7d111813/24892dd801efb78a179f2b6d60e61416.json";
import s3 from "./stories/928eb6385b95d6765eb80c3a7d111813/c7af40988b1f1b9e9a4a3e9320142db7.json";

dataMap.set(hash('/stories/07ebd37d2878778d9b79d6d130df9e79.json'), s0)
dataMap.set(hash('/stories/94d01659f3b0e0dfd283799004458b7e.json'), s1)
dataMap.set(hash('/stories/928eb6385b95d6765eb80c3a7d111813/24892dd801efb78a179f2b6d60e61416.json'), s2)
dataMap.set(hash('/stories/928eb6385b95d6765eb80c3a7d111813/c7af40988b1f1b9e9a4a3e9320142db7.json'), s3)

export function requireData(url) {
    if (!url) {
        return img0
    }
    var parser = new URL(url);
    switch (parser.protocol) {
        case 'jiapu:':
            let path = parser.host === 'localhost' ? parser.pathname : ''
            return dataMap.get(hash(path))
        case 'http:', 'https:':
            return { uri: url }
        default:
            return undefined
    }
}