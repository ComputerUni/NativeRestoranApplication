import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../component/ResultsList";

//Ucuz, orta ve pahalı restoranlar için üç tane ResultList kullanacağız ve bunun için bir de tane de props kullanacağız(filtreleme için).
function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  //girdiğimiz stringi ifade eder ve bu değeri tutar.
  const [term, setTerm] = useState("");
  //console.log(results);

  //price'a göre bir filtreleme işlemi yapıyoruz eğer aramadaki fiyat ile fiyat eşleşiyorsa değer döndürüyor.
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  //onTermSubmit={() => searchApi(term)} arama işlemimiz bittiğinde apiye bu değeri yollamamız gerekiyor bu satırla bunu sağlamış olacağız.
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        results.length !== 0 && (
          <>
            <ResultsList
              title="Ucuz Restoranlar"
              results={filterResultsByPrice("₺")}
            />
            <ResultsList
              title="Uygun Restoranlar"
              results={filterResultsByPrice("₺₺")}
            />
            <ResultsList
              title="Pahalı Restoranlar"
              results={filterResultsByPrice("₺₺₺")}
            />
          </>
        )
      )}
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({});
