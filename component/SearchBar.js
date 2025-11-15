import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons
        style={styles.iconStyle}
        name="search"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        //SearchBar'a girilen değer
        value={term}
        //SearchBar'da değişiklik olmasını algılamak için onChangeText kullanıyoruz.
        onChangeText={onTermChange}
        //Değişiklik bitip tamamlandığında yani submit edildiğinde onEndEditing kullanıyoruz.
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
