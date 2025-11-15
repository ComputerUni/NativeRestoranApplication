import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Bağlantı Hatası");
    }
    //isteğin türünü get olarak belirtiyoruz ve nereye istek atacağımızı belirliyoruz daha sonra virgül koyup hangi parametrelere göre search etmek istediğimi belirteceğim.
    // Belirteceğimiz kısımları ise params içerisinde belirteceğiz.(term=Kebap&location=İstanbul&limit=50)
    // get isteği attığımız kısmı input ile bağlayacağız o yüzden buna response adında bir değişken ismi veriyoruz. Çektiğimiz bilgileri response adlı değişkende tutuyoruz.
    // bu bilgileri de dışarıya açmak için useState kullanacağım.
  };
  useEffect(() => {
    searchApi();
  }, []);

  //bu ifade ile dışarıya açıyoruz!!!
  return [searchApi, results, errorMessage];
};
