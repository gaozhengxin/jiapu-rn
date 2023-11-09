import React from 'react'

import { useTranslation } from "react-i18next";

import { ScrollView, StyleSheet, Text, FlatList } from 'react-native'

import families from '../data/families.json'
import personDB from '../data/person.json'

import { makeName } from '../utils/name'

function PersonHome({ navigation, route }) {
    const { t, i18n } = useTranslation();
    const { familyId, personId } = route.params;
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.headlineText}>{t("Person")}</Text>
            <Text
                onPress={() => navigation.navigate('person/edit')}
                style={styles.itemText}
            >Add a person</Text>
            <FlatList
                data={families[familyId]["person"]}
                renderItem={({ item }) => <Text
                    onPress={() => navigation.navigate('person', { personId: item })}
                    style={styles.itemText}
                >{makeName(personDB[item])}</Text>}
                keyExtractor={(item) => item.id}
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
        fontSize: 26,
        fontWeight: "500",
        color: "#000"
    },
    itemText: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "300",
        color: "#000"
    }
})


export default PersonHome;