import React from 'react'
import { ScrollView, StyleSheet, Text, Button } from 'react-native'

import * as DocumentPicker from 'expo-document-picker';

const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);

}

function Album() {
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.text}>Album</Text>
            <Button
                title="Select file"
                onPress={_pickDocument}
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
    text: {
        fontSize: 15,
        color: "#000"
    }
})


export default Album;