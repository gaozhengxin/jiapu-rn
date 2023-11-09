import React from 'react'
import { ScrollView, StyleSheet, Text, Image, Button, useWindowDimensions } from 'react-native'

import RenderHtml from 'react-native-render-html';

import storyDB from '../data/stories.json'

import { requireData } from '../data/createMockData'

function Story({ navigation, route }) {
    const { storyId } = route.params;
    const { width } = useWindowDimensions();
    let story = requireData(storyDB[storyId]["path"])

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.headlineText}>{storyDB[storyId]["title"]}</Text>
            <Button style={styles.headlineText} onPress={() => navigation.navigate('story/edit', { storyId: storyId })} title="edit" />
            <RenderHtml
                contentWidth={width}
                source={{ html: story.content }}
            />
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
    headlineText: {
        marginTop: 25,
        fontSize: 25,
        color: "#000"
    },
    itemText: {
        marginTop: 25,
        fontSize: 20,
        color: "#000"
    },
    portrait: {
        margin: 'auto',
        height: 200,
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        right: 0
    },
    portrait2: {
        margin: 'auto',
        height: 200,
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 300,
        right: 0
    }
})

const mdStyles = StyleSheet.create({
    heading: {
        marginTop: 10,
    },
    heading1: {
        marginTop: 10,
        fontSize: 34,
    },
    heading2: {
        marginTop: 10,
        fontSize: 26,
    },
    heading3: {
        marginTop: 10,
        fontSize: 20,
    },
    heading4: {
        marginTop: 10,
        fontSize: 18,
    },
    heading5: {
        marginTop: 10,
        fontSize: 15,
    },
    heading6: {
        marginTop: 10,
        fontSize: 13,
    }
});

export default Story;