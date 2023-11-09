import React, { useEffect } from 'react'

import { useTranslation } from "react-i18next";

import { ScrollView, StyleSheet, Text, SectionList } from 'react-native'

import storyDB from '../data/stories.json'
import families from '../data/families.json'

const StoryList = ({ navigation, data, collectionTitle }) => {
    return (
        <SectionList
            data={data}
            sections={[
                { title: collectionTitle, data: data }]}
            renderItem={({ item }) => {
                if (storyDB[item]["title"]) {
                    return (<Text
                        onPress={() => navigation.navigate('story', { storyId: item })}
                        style={styles.itemText}
                    >{storyDB[item]["title"]}</Text>)
                }
                if (storyDB[item]["collectionTitle"]) {
                    return (
                        <>
                            <Text
                                style={styles.collectionText}
                            >{storyDB[item]["collectionTitle"]}</Text>
                            <StoryList navigation={navigation} data={storyDB[item]["stories"]} collectionTitle={storyDB[item]["collectionTitle"]} />
                        </>
                    )
                }
            }
            }
            keyExtractor={(item) => item.id}
        />
    )
}

function StoryHome({ navigation, route }) {
    const { t, i18n } = useTranslation();
    const { familyId, personId } = route.params;
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.headlineText} onPress={() => navigation.navigate('storyHome')}>{t("Stories")}</Text>

            <Text
                onPress={() => navigation.navigate('story/edit')}
                style={styles.itemText}
            >Add a story</Text>

            <StoryList navigation={navigation} data={families[familyId]["stories"]} collectionTitle={""} />
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
        fontSize: 26,
        fontWeight: "500",
        color: "#000"
    },
    collectionText: {
        marginTop: 25,
        fontSize: 23,
        fontWeight: "400",
        color: "#000"
    },
    itemText: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "300",
        color: "#000"
    }
})


export default StoryHome;