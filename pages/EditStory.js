import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native'

import Editor from '../components/Editor';

import storyDB from '../data/stories.json'

import { requireData } from '../data/createMockData'

function EditStory({ route }) {
    let storyId = ""
    let story = {}
    if (route && route.params) {
        storyId = route.params.storyId;
        story = requireData(storyDB[storyId]["path"])
    }
    let storyContent = story.content ? JSON.stringify(story.content).slice(1, -1) : ""
    const collection = storyDB[storyId] ? storyDB[storyId]["collection"] : null
    let collectionTitle = collection ? storyDB[collection]["collectionTitle"] : ""
    const [doc, setDoc] = useState({})

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>Write your family story</Text>
            <Text style={styles.itemText}>Title</Text>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                }}>
                <TextInput
                    editable
                    maxLength={101}
                    value={story["title"]}
                    onChangeText={text => {
                        doc.title = text;
                        setDoc(doc);
                    }}
                    style={styles.textInput}
                />
            </View>
            <Text style={styles.itemText}>Collection</Text>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                }}>
                <TextInput
                    editable
                    maxLength={101}
                    value={collectionTitle}
                    onChangeText={text => {
                        doc.collection = text;
                        setDoc(doc);
                    }}
                    style={styles.textInput}
                />
            </View>
            <Editor value={storyContent} placeholder="Add your story here..." />
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
    },
    itemText: {
        marginTop: 25,
        fontSize: 20,
        color: "#000"
    },
    textInput: {
        marginTop: 25,
        fontSize: 20,
        color: "000",
    }
})


export default EditStory;