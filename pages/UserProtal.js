import React, { useState } from 'react'

import { useTranslation } from "react-i18next";

import { ScrollView, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'

import { SearchBar } from "react-native-elements";

import Avator from "../components/Avatar";

import families from '../data/families.json'
import users from '../data/users.json'

import { JiapuCover, AddIcon } from '../icons/icons'

const userId = 'u_0000_0000_0000_0001'; // 张伟

const ghost = "ghost"
const createJiapu = "createJiapu"

const paddingListData = (list) => {
    list.push(createJiapu)
    if (list.length % 3 === 1) {
        list.push(ghost, ghost)
        return list
    }
    if (list.length % 3 === 2) {
        list.push(ghost)
        return list
    }
    return list
}

var jiapuListData = paddingListData(users[userId].jiapu)

function UserProtal({ navigation }) {
    const { t, i18n } = useTranslation();
    const [search, updateSearch] = useState("")

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

            <Avator path={users[userId]["avatar"]} onPress={() => { }} height={70} width={70} margin={5} />
            <Text style={styles.headlineText}>{t("GreetingWithName", { name: users[userId]["moniker"] })}</Text>

            <ScrollView style={styles.jiapuContainer}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    numColumns={3}
                    data={jiapuListData}
                    renderItem={({ item }) => {
                        if (item == ghost) {
                            return (<View
                                style={styles.jiapuIcon}
                            ></View>)
                        }
                        if (item == createJiapu) {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('createJiapu', { familyId: item, userId: userId })}
                                    style={styles.jiapuIcon}
                                ><AddIcon
                                    style={styles.jiapuIcon}
                                ></AddIcon></TouchableOpacity>)
                        }
                        return (<TouchableOpacity
                            onPress={() => navigation.navigate('home', { familyId: item, userId: userId })}
                            style={styles.jiapuIcon}
                        ><JiapuCover text={families[item]["familyName"]} /></TouchableOpacity>)
                    }}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>

            <View style={styles.adsBlock}><Text>广告</Text></View>
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
    adsBlock: {
        height: 200,
        backgroundColor: 'white',
        margin: 10
    },
    jiapuIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        width: 80,
        height: 140,
        backgroundColor: 'transparent',
        borderRadius: 7
    },
    jiapuContainer: {
        backgroundColor: 'white',
        borderRadius: 7,
        height: 'fit-content',
        marginVertical: 15
    }
})

export default UserProtal;