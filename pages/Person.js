import React from 'react'

import { useTranslation } from "react-i18next";

import { ScrollView, View, StyleSheet, Text, Image, Button, TouchableHighlight, useWindowDimensions } from 'react-native'

import RenderHtml from 'react-native-render-html';

import personDB from '../data/person.json'

import { makeName } from '../utils/name'

import { requireData } from '../data/createMockData'

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

function Person({ navigation, route }) {
    const { t, i18n } = useTranslation(["person", "translation"]);
    const { personId } = route.params;
    let person = personDB[personId]
    let portrait = requireData(person.portrait)
    portrait = portrait ? portrait : '/images/defaultPortrait.jpg'

    const { width } = useWindowDimensions();
    let story = requireData(person.personStory)

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.headlineText}>{makeName(person)}</Text>
            <TouchableHighlight>
                <Button style={styles.headlineText} onPress={() => navigation.navigate('person/edit', { personId: personId })} title={t("edit")} />
            </TouchableHighlight>
            <Image
                style={styles.portrait}
                source={portrait}
                placeholder={blurhash}
                contentFit="cover"
            />
            <View style={styles.block}>
                <Text style={styles.itemText}>{t(person.gender)}</Text>
                <View style={styles.oneLine}>
                    <Text style={styles.itemText}>{t("bornIn")}</Text>
                    <Text style={styles.itemText}>{person.dateOfBirth}</Text>
                </View>
                {
                    person.dateOfDeath !== "" &&
                    <View style={styles.oneLine}>
                        <Text style={styles.itemText}>{t("diedIn")}</Text>
                        <Text style={styles.itemText}>{person.dateOfDeath}</Text>
                    </View>
                }
            </View>
            <Text style={styles.headlineText}>{t("relations")}</Text>
            {person.personStory && (
                <>
                    <Text style={styles.headlineText}>{t("personStory", { person: makeName(person) })}</Text>
                    <RenderHtml
                        contentWidth={width}
                        source={{ html: story.content }}
                    />
                </>
            )}
            {(!person.personStory || (person.personStory === '')) && (<Text />)}
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
    block: {
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        padding: 5
    },
    oneLine: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemText: {
        margin: 5,
        fontSize: 15,
        color: "#000"
    },
    portrait: {
        margin: 'auto',
        height: 200,
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        margin: 10
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