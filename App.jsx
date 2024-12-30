import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

import api from "./utils/services/api";
import Movie from "./utils/components/Movie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("...");
      setMovies(response.data);
      setLoading(false);
    }

    loadMovies();
  }, []);

  if(loading) {
    return(
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="black" size={50} />
      </SafeAreaView>
    );
  } else {
    return(
      <SafeAreaView style={ styles.container }>
        <FlatList data={ movies } keyExtractor={ item => String(item.id) } renderItem={ ({item}) => <Movie data={item} /> }/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});