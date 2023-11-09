import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Charts(props) {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>家族图表</Text>
            <Text style={styles.text}>1. 根据关系列表自动生成星丛图</Text>
            <Text style={styles.text}>2. 根据关系列表自动生成选定人物的父系图、母系图、五服图、称呼计算</Text>
            <Text style={styles.text}>3. 称呼计算器</Text>
            <Text style={styles.text}>4. 用户自定义图表</Text>
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


export default Charts;