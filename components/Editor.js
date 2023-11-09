import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Platform,
    Dimensions
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import RNDraftView from "react-native-draftjs-editor";

const ControlButton = ({ text, action, isActive }) => {
    return (
        <TouchableOpacity
            style={[
                styles.controlButtonContainer,
                isActive ? { backgroundColor: "beige" } : {}
            ]}
            onPress={action}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const EditorToolBar = ({
    activeStyles,
    blockType,
    toggleStyle,
    toggleBlockType
}) => {
    return (
        <View style={styles.toolbarContainer}>
            <ControlButton
                text={"B"}
                isActive={activeStyles.includes("BOLD")}
                action={() => toggleStyle("BOLD")}
            />
            <ControlButton
                text={"I"}
                isActive={activeStyles.includes("ITALIC")}
                action={() => toggleStyle("ITALIC")}
            />
            <ControlButton
                text={"H1"}
                isActive={blockType === "header-one"}
                action={() => toggleBlockType("header-one")}
            />
            <ControlButton
                text={"H2"}
                isActive={blockType === "header-two"}
                action={() => toggleBlockType("header-two")}
            />
            <ControlButton
                text={"H3"}
                isActive={blockType === "header-three"}
                action={() => toggleBlockType("header-three")}
            />
            <ControlButton
                text={"H4"}
                isActive={blockType === "header-four"}
                action={() => toggleBlockType("header-four")}
            />
            <ControlButton
                text={"ul"}
                isActive={blockType === "unordered-list-item"}
                action={() => toggleBlockType("unordered-list-item")}
            />
            <ControlButton
                text={"ol"}
                isActive={blockType === "ordered-list-item"}
                action={() => toggleBlockType("ordered-list-item")}
            />
            <ControlButton
                text={"--"}
                isActive={activeStyles.includes("STRIKETHROUGH")}
                action={() => toggleStyle("STRIKETHROUGH")}
            />
        </View>
    );
};

const styleMap = {
    STRIKETHROUGH: {
        textDecoration: "line-through"
    }
};

const Editor = (props) => {
    const _draftRef = React.createRef();
    const [activeStyles, setActiveStyles] = useState([]);
    const [blockType, setActiveBlockType] = useState("unstyled");
    const [editorState, setEditorState] = useState("");

    const editorLoaded = () => {
        _draftRef.current && _draftRef.current.focus();
    };

    const toggleStyle = style => {
        _draftRef.current && _draftRef.current.setStyle(style);
    };

    const toggleBlockType = blockType => {
        _draftRef.current && _draftRef.current.setBlockType(blockType);
    };

    useEffect(() => {
        /**
         * Get the current editor state in HTML.
         * Usually keep it in the submit or next action to get output after user has typed.
         */
        setEditorState(_draftRef.current ? _draftRef.current.getEditorState() : "");
    }, [_draftRef]);
    //console.log(editorState);

    return (
        <SafeAreaView style={styles.containerStyle}>
            <RNDraftView
                defaultValue={props.value}
                onEditorReady={editorLoaded}
                style={{ flex: 1 }}
                placeholder={props.placeholder}
                ref={_draftRef}
                onStyleChanged={setActiveStyles}
                onBlockTypeChanged={setActiveBlockType}
                styleMap={styleMap}
            />
            <EditorToolBar
                activeStyles={activeStyles}
                blockType={blockType}
                toggleStyle={toggleStyle}
                toggleBlockType={toggleBlockType}
            />
            {Platform.OS === "ios" ? <KeyboardSpacer /> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        height: Dimensions.get("window").height * 0.9,
        width: '100%',
        marginTop: 24
    },
    toolbarContainer: {
        height: 56,
        flexDirection: "row",
        backgroundColor: "silver",
        alignItems: "center",
        justifyContent: "space-around"
    },
    controlButtonContainer: {
        padding: 8,
        borderRadius: 2
    }
});

export default Editor;