import React from 'react'
import { ScrollView, StyleSheet, Text, Image, Button, useWindowDimensions } from 'react-native'

import RenderHtml from 'react-native-render-html';

import personDB from '../data/person.json'

import { makeName } from '../utils/name'

import { requireData } from '../data/createMockData'

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

function Person({ navigation, route }) {
    const { personId } = route.params;
    let person = personDB[personId]
    let portrait = requireData(person.portrait)
    portrait = portrait ? portrait : '/images/defaultPortrait.jpg'

    const { width } = useWindowDimensions();
    let story = requireData(person.personStory)

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.headlineText}>{makeName(person)}</Text>
            <Button style={styles.headlineText} onPress={() => navigation.navigate('person/edit', { personId: personId })} title="edit" />
            <Image
                style={styles.portrait}
                source={portrait}
                placeholder={blurhash}
                contentFit="cover"
            />
            <Text style={styles.itemText}>{person.gender}</Text>
            <Text style={styles.itemText}>Born in</Text>
            <Text style={styles.itemText}>{person.dateOfBirth}</Text>
            {
                person.dateOfDeath !== "" &&
                <>
                    <Text style={styles.itemText}>Died in</Text>
                    <Text style={styles.itemText}>{person.dateOfDeath}</Text>
                </>
            }
            <Text style={styles.itemText}>Related</Text>
            {person.personStory && (
                <>
                    <Text style={styles.itemText}>{makeName(person)}'s story</Text>
                    <RenderHtml
                        contentWidth={width}
                        source={{ html: story.content }}
                    />
                </>
            )}
            {(!person.personStory || (person.personStory === '')) && (<Text style={styles.itemText}>No person story</Text>)}
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

export default Person;