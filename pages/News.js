import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function News() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>家族新闻</Text>
            <Text style={styles.text}>结婚、生孩子、上学、考试、参加工作、获奖、旅行、中大奖、上电视、相亲、失恋、生病、去世</Text>
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


export default News;