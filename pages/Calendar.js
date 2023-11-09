import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Calendar() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>Calendar</Text>
            <Text style={styles.text}>显示全部家族活动 / 显示用户相关的家族活动</Text>
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


export default Calendar;