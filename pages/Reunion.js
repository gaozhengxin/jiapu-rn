import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Reunion() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>家族聚会活动列表</Text>
            <Text style={styles.text}>1. 家族聚会活动时间、地点、聚会类型、主题、主持人、邀请人、活动记录、照片录像、文档、留言</Text>
            <Text style={styles.text}>2. 通过 App 推送、微信小程序推送通知主持人和受邀请人</Text>
            <Text style={styles.text}>3. 家庭成员可以分享活动，主持人可以设置分享权限</Text>
            <Text style={styles.text}>4. 常用活动主题：聚餐、游玩、访亲串门、结婚、过寿、白事、过年过节、生小孩、升学/成人/工作/退休、探病、交流合作</Text>
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


export default Reunion;