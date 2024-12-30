import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Details from "../Details";

export default function Movie({ data }) {
    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View>
            <View style={ styles.card }>
                <Text style={ styles.title }>{ data.nome }</Text>
                
                <Image source={{ uri: data.foto }} style={ styles.cover } />

                <View style={ styles.areaButton }>
                    <TouchableOpacity style={ styles.button } onPress={ () => setVisibleModal(true) }>
                        <Text style={ styles.textButton }>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={ true } animationType="slide" visible={ visibleModal }>
                <Details movie={ data } back={ () => setVisibleModal(false) } />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        margin: 20,
        elevation: 2
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },
    cover: {
        height: 250,
        zIndex: 2
    },
    areaButton: {
        alignItems: "flex-end",
        marginTop: -50,
        zIndex: 3
    },
    button: {
        width: 100,
        backgroundColor: "black",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 10
    },
    textButton: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
});