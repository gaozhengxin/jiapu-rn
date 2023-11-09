import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Memorial() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>祭扫信息</Text>
            <Text style={styles.text}>1. 墓地信息</Text>
            <Text style={styles.text}>2. 朗读悼文</Text>
            <Text style={styles.text}>3. 祭扫日志 时间地点人物情节</Text>
            <Text style={styles.text}>4. 祭扫提示</Text>
            <Text style={styles.text}>5. 宗教习俗</Text>
            <Text style={styles.text}>6. 在线祭扫</Text>
            <Text style={styles.text}>7. 墓园信息，停车位置，建议祭扫时间（通过第三方接口获取）</Text>
            <Text style={styles.text}>8. 代客祭扫（第三方服务）</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'beige',
        padding: 15,
        flex: 1,
    },
    text: {
        fontSize: 15,
        color: "#000"
    }
})


export default Memorial;