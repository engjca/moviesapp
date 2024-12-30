import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Details(props) {
    return(
        <View style={ styles.container }>
            <View style={ styles.modalContainer }>
                <TouchableOpacity style={ styles.backButton } onPress={ props.back }>
                    <Text style={ styles.textButton }>Fechar</Text>
                </TouchableOpacity>

                <Text style={ styles.title }>{ props.movie.nome }</Text>
                <Text style={ styles.subtitle }>Descrição</Text>
                <Text style={ styles.description }>{ props.movie.sinopse }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginLeft: 20,
        marginRight: 20
    },
    modalContainer: {
        width: "95%",
        height: "80%",
        backgroundColor: "black",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    backButton: {
        backgroundColor: "orange",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 10
    },
    textButton: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "right"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        padding: 20
    },
    subtitle: {
        fontSize: 18,
        color: "white",
        paddingLeft: 20
    },
    description: {
        fontSize: 15,
        color: "white",
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    }
});