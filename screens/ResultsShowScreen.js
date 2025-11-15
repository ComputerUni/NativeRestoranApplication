import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import yelp from "../api/yelp";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function ResultsShowScreen({ route }) {
  //çektiğimiz bilgileri tutması için bir useState tanımlaması yapıyoruz.
  const [result, setResult] = useState(null);
  //Her bir işletmeye özel id tanımlıyoruz bunu şu yüzden yapıyoruz: İşletmenin üzerine tıkladığımızda ona ait bir id atanır ve öyle işleme devam edilir!!!
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  //sayfa açıldığında sürekli render edilmesini önlemek için useEffect tanımlıyoruz!!!
  useEffect(() => {
    //bu kısımda metoda atama yapıp buradaki id'nin yelp api'ye istek atmasını sağlayacağız.
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.closeIcon}>
        {result.is_closed ? (
          <AntDesign name="close-circle" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="green" />
        )}
      </View>

      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      {/* <FlatList
        data={result.photos}
        // benzersiz bir key için keyExtractor
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image
            style={{ width: 300, height: 200, marginVertical: 10 }}
            source={{ uri: item }}
          />
        )}
      /> */}
    </View>
  );
}

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    margin: 10,
    borderRadius: 20,
  },

  closeIcon: {
    alignSelf: "center",
    marginVertical: 10,
  },

  name: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },

  phone: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
