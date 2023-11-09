import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Health() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>家族健康档案</Text>
            <Text style={styles.text}>1. 家族内部生过的大病、遗传病</Text>
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


export default Health;