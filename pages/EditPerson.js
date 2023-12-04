import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { ScrollView, View, StyleSheet, Text, TextInput, Button, Image } from 'react-native'

import Checkbox from 'expo-checkbox';

import DateTimePicker from '@react-native-community/datetimepicker';

import personDB from '../data/person.json'
import Editor from '../components/Editor';
//import MDEditor from '../components/MDEditor';
import { requireData } from '../data/createMockData'

import * as DocumentPicker from 'expo-document-picker';

const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const storyTemplate = `
    <h2>生卒年</h2>
    <p>(生卒年)</p>
    
    <h2>人生经历</h2>
    <p>(人生经历)</p>
    
    <h2>成就</h2>
    <p>(成就)</p>
    
    <h2>才能</h2>
    <p>(才能)</p>
    
    <h2>言行轶事</h2>
    <p>(言行轶事)</p>
    
    <h2>著作</h2>
    <p>(著作)</p>
    
    <h2>人物关系</h2>
    <p>(人物关系)</p>
    
    <h2>评价</h2>
    <p>(评价)</p>
    
    <h2>本人寄语</h2>
    <p>(本人寄语)</p>
    `

function EditPerson({ route }) {
    const { t, i18n } = useTranslation(["person", "translation"]);
    let person = {}
    if (route && route.params) {
        const { personId } = route.params;
        person = personDB[personId]
    }
    const [profile, setProfile] = useState({})
    const [date1, setDate1] = useState(new Date(1598051730000)); // date of birth
    const [showDate1, setShowDate1] = useState(false);
    const [date2, setDate2] = useState(new Date(1598051730000)); // date of death
    const [showDate2, setShowDate2] = useState(false);
    const [isAlive, setIsAlive] = useState(true)

    let story = requireData(person.personStory)
    let storyContent = story.content ? JSON.stringify(story.content).slice(1, -1) : JSON.stringify(t("storyTemplate")).slice(1, -1)

    let portrait = requireData(person.portrait)
    portrait = portrait ? portrait : '/images/defaultPortrait.jpg'

    useEffect(() => {
        if (person["dateOfDeath"] !== "") {
            setIsAlive(false)
        }
        if (person["dateOfBirth"]) {
            let date = Date.parse(person["dateOfBirth"])
            setDate1(new Date(date))
        }
        if (person["dateOfDeath"]) {
            let date = Date.parse(person["dateOfDeath"])
            setDate2(new Date(date))
        }
    }, [])

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.itemText}>{t("surname")}</Text>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                }}>
                <TextInput
                    editable
                    maxLength={101}
                    value={person["surname"]}
                    onChangeText={text => {
                        profile.surname = text;
                        setProfile(profile);
                    }}
                    style={styles.textInput}
                />
            </View>

            <Text style={styles.itemText}>{t("name")}</Text>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                }}>
                <TextInput
                    editable
                    maxLength={100}
                    value={person["name"]}
                    onChangeText={text => {
                        profile.name = text;
                        setProfile(profile);
                    }}
                    style={styles.textInput}
                />
            </View>

            <Text style={styles.itemText}>{t("gender")}</Text>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                }}>
                <TextInput
                    editable
                    maxLength={100}
                    value={person["gender"]}
                    onChangeText={text => {
                        profile.gender = text;
                        setProfile(profile);
                    }}
                    style={styles.textInput}
                />
            </View>

            <Image
                style={styles.portrait}
                source={portrait}
                placeholder={blurhash}
                contentFit="cover"
            />
            <Button
                title={t("selectPortrait")}
                onPress={_pickDocument}
            />

            <Text style={styles.itemText}>{t("dateOfBirth")}</Text>
            {setShowDate1 && (
                <DateTimePicker
                    value={date1}
                    mode={'date'}
                    is24Hour={true}
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate;
                        setShowDate1(false);
                        setDate1(currentDate);
                    }}
                />
            )}

            <Text style={styles.itemText}>{t("isAlive")}</Text>
            <Checkbox
                value={isAlive}
                onValueChange={setIsAlive}
            />

            {
                (!isAlive) &&
                <>
                    <Text style={styles.itemText}>{t("dateOfDeath")}</Text>
                    <DateTimePicker
                        value={date2}
                        mode={'date'}
                        is24Hour={true}
                        onChange={(event, selectedDate) => {
                            const currentDate = selectedDate;
                            setShowDate2(false);
                            setDate2(currentDate);
                        }}
                    />
                </>
            }

            <Text style={styles.itemText}>{t("relations")}</Text>

            <Text style={styles.itemText}>{t("story")}</Text>
            <Editor style={styles.editor} value={storyContent} placeholder="Add your story here..." />
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
        margin: 5,
        fontSize: 20,
        color: "#000"
    },
    textInput: {
        margin: 5,
        fontSize: 20,
        color: "000",
    },
    portrait: {
        margin: 'auto',
        height: 200,
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    }
})


export default EditPerson;