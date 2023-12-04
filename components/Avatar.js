import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

import { requireData } from '../data/createMockData'

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const getContainerStyle = (margin, height, width) => {
    return {
        margin: margin ? margin : 0,
        height: height ? height : 50,
        width: width ? width : 50
    }
}

const getAvatarStyle = (height, width) => {
    return {
        resizeMode: 'cover',
        backgroundColor: 'blur',
        borderRadius: '50%',
        height: height ? height : 50,
        width: width ? width : 50
    }
}

const Avator = ({ path, margin, height, width, onPress }) => {
    let avator = requireData(path)
    let containerStyle = getContainerStyle(margin, height, width)
    let avatarStyle = getAvatarStyle(height, width)

    return (
        <TouchableOpacity style={containerStyle} onPress={onPress} >
            <Image
                style={avatarStyle}
                source={avator}
                placeholder={blurhash}
                contentFit="cover"
            />
        </TouchableOpacity >
    )
}

export default Avator