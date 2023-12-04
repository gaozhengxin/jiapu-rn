import React, { useState } from 'react'

import { useTranslation } from "react-i18next";

import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { SearchBar } from "react-native-elements";

import families from '../data/families.json'

import {
    PersonIcon,
    StoryIcon,
    AlbumIcon,
    ChartIcon,
    FamilyNewsIcon,
    ReunionIcon,
    MemorialIcon,
    CalendarIcon,
    HealthIcon
} from '../icons/icons'

function Home({ navigation, route }) {
    const { t, i18n } = useTranslation();
    const { familyId, userId } = route.params;
    const [search, updateSearch] = useState("")
    navigation.setOptions({ title: families[familyId]["familyName"] })
    return (
        <ScrollView style={styles.screen}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                inputStyle={searchBarStyles.inputStyle}
                inputContainerStyle={searchBarStyles.inputContainerStyle}
                containerStyle={searchBarStyles.containerStyle}
            />

            <Text style={styles.headlineText}>{families[familyId]["familyName"]}</Text>

            <View style={styles.naviBlock}>
                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('personHome', { familyId: familyId, userId: userId })}>
                    <PersonIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Person")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('storyHome', { familyId: familyId, userId: userId })}>
                    <StoryIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Stories")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('album', { familyId: familyId, userId: userId })}>
                    <AlbumIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Album")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('charts', { familyId: familyId, userId: userId })}>
                    <ChartIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Charts")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('news', { familyId: familyId, userId: userId })}>
                    <FamilyNewsIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("FamilyNews")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('reunion', { familyId: familyId, userId: userId })}>
                    <ReunionIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Reunion")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('memorial', { familyId: familyId, userId: userId })}>
                    <MemorialIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Memorial")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('calendar', { familyId: familyId, userId: userId })}>
                    <CalendarIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("Calendar")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviButton} onPress={() => navigation.navigate('health', { familyId: familyId, userId: userId })}>
                    <HealthIcon style={styles.naviButtonIcon} />
                    <Text style={styles.buttonText}>{t("HealthProfile")}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.adsBlock}><Text>广告</Text></View>
            <ScrollView style={styles.homeContentBlock}>
                <Text>首页推荐内容</Text>
                <Text>文章</Text>
                <Text>视频</Text>
            </ScrollView>
        </ScrollView >
    );
}

const searchBarStyles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        backgroundColor: 'beige',
        height: 30
    },
    containerStyle: {
        backgroundColor: 'beige',
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        height: 50
    }
})

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
    },
    naviBlock: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 7,
        flexWrap: 'wrap',
        height: 170,
        marginVertical: 15,
    },
    naviButton: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: '1.5%',
        width: '17%',
        height: 65,
    },
    naviButtonIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'steelblue'
    },
    buttonText: {
        fontSize: 13
    },
    adsBlock: {
        height: 200,
        backgroundColor: 'white',
        margin: 10
    },
    homeContentBlock: {
        height: 800,
        backgroundColor: 'white',
        margin: 10
    }
})

export default Home;