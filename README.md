# 🍽️ Restoran Uygulaması

React Native ve Expo kullanılarak geliştirilmiş, Yelp API ile entegre bir restoran arama uygulaması. İstanbul'daki restoranları arayabilir, fiyat kategorilerine göre filtreleyebilir ve detaylı bilgilerini görüntüleyebilirsiniz.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Gereksinimler](#-gereksinimler)
- [Kurulum](#-kurulum)
- [Yapılandırma](#-yapılandırma)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Teknolojiler](#-teknolojiler)
- [Ekranlar](#-ekranlar)

## ✨ Özellikler

- 🔍 Restoran arama (Yelp API entegrasyonu)
- 💰 Fiyat kategorilerine göre filtreleme (Ucuz, Uygun, Pahalı)
- 📱 Responsive tasarım
- 🎨 Modern ve kullanıcı dostu arayüz
- 📞 Restoran iletişim bilgileri
- 🖼️ Restoran görselleri
- 🚀 React Navigation ile çoklu ekran desteği

## 🔧 Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekir:

- **Node.js** (v14 veya üzeri)
- **npm** veya **yarn**
- **Expo CLI** (global olarak yüklü olmalı)
- **Yelp API Key** ([Yelp Fusion API](https://www.yelp.com/developers/documentation/v3/get_started) üzerinden alınabilir)

### Expo CLI Kurulumu

```bash
npm install -g expo-cli
```

veya

```bash
yarn global add expo-cli
```

## 📦 Kurulum

### Adım 1: Projeyi Klonlayın

```bash
git clone <repository-url>
cd Restoran
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
```

veya

```bash
yarn install
```

### Adım 3: Yelp API Key'i Yapılandırın

1. [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3/get_started) sayfasına gidin
2. Yelp hesabınızla giriş yapın
3. Yeni bir uygulama oluşturun ve API Key'inizi alın
4. `api/yelp.js` dosyasını açın ve Authorization header'ını ekleyin:

```javascript
import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer YOUR_YELP_API_KEY_HERE",
  },
});
```

**⚠️ Önemli:** API Key'inizi asla public repository'ye commit etmeyin! `.gitignore` dosyanıza `api/yelp.js` ekleyin veya environment variables kullanın.

### Adım 4: Uygulamayı Başlatın

```bash
npm start
```

veya

```bash
expo start
```

### Adım 5: Uygulamayı Çalıştırın

Expo başladıktan sonra:

- **iOS Simulator için:** `i` tuşuna basın veya `npm run ios` komutunu çalıştırın
- **Android Emulator için:** `a` tuşuna basın veya `npm run android` komutunu çalıştırın
- **Fiziksel cihaz için:** Expo Go uygulamasını indirin ve QR kodu tarayın
- **Web için:** `w` tuşuna basın veya `npm run web` komutunu çalıştırın

## ⚙️ Yapılandırma

### Konum Değiştirme

Varsayılan olarak uygulama İstanbul'daki restoranları arar. Farklı bir şehir için arama yapmak isterseniz, `hooks/useResults.js` dosyasındaki `location` parametresini değiştirebilirsiniz:

```javascript
const response = await yelp.get("/search", {
  params: {
    limit: 50,
    term: searchTerm,
    location: "Ankara", // İstediğiniz şehri buraya yazın
  },
});
```

### Arama Limitini Değiştirme

Aynı dosyada `limit` parametresini değiştirerek sonuç sayısını ayarlayabilirsiniz (maksimum 50).

## 🚀 Kullanım

1. **Arama Yapma:**
   - Ana ekranda arama çubuğuna restoran adı veya türü yazın (örn: "Kebap", "Pizza", "Sushi")
   - Enter tuşuna basın veya arama işlemini tamamlayın

2. **Sonuçları Görüntüleme:**
   - Sonuçlar fiyat kategorilerine göre otomatik olarak gruplandırılır:
     - **Ucuz Restoranlar** (₺)
     - **Uygun Restoranlar** (₺₺)
     - **Pahalı Restoranlar** (₺₺₺)
   - Her kategori yatay kaydırılabilir bir listede gösterilir

3. **Detayları Görüntüleme:**
   - Bir restorana tıklayarak detay sayfasına gidin
   - Burada restoran adı, telefon numarası, açık/kapalı durumu ve görseli görüntülenir

## 📁 Proje Yapısı

```
Restoran/
├── api/
│   └── yelp.js              # Yelp API yapılandırması
├── component/
│   ├── ResultDetail.js      # Restoran kartı bileşeni
│   ├── ResultsList.js       # Restoran listesi bileşeni
│   └── SearchBar.js         # Arama çubuğu bileşeni
├── hooks/
│   └── useResults.js        # Restoran arama custom hook'u
├── screens/
│   ├── SearchScreen.js      # Ana arama ekranı
│   └── ResultsShowScreen.js # Restoran detay ekranı
├── assets/                  # Görseller ve ikonlar
├── App.js                   # Ana uygulama dosyası
├── app.json                 # Expo yapılandırması
├── package.json             # Proje bağımlılıkları
└── README.md               # Bu dosya
```

## 🛠️ Teknolojiler

- **React Native** (0.81.5) - Mobil uygulama framework'ü
- **Expo** (~54.0.23) - React Native geliştirme platformu
- **React Navigation** (v7) - Navigasyon kütüphanesi
- **Axios** (^1.13.2) - HTTP istekleri için
- **Yelp Fusion API** - Restoran verileri için

## 📱 Ekranlar

### SearchScreen
Ana arama ekranı. Kullanıcılar burada restoran arayabilir ve sonuçları fiyat kategorilerine göre görüntüleyebilir.

### ResultsShowScreen
Restoran detay ekranı. Seçilen restoranın detaylı bilgileri burada gösterilir.

## 🔒 Güvenlik Notları

- API Key'inizi asla public repository'ye yüklemeyin
- Production ortamında environment variables kullanın
- `.gitignore` dosyanızda hassas bilgileri kontrol edin

## 📝 Lisans

Bu proje özel bir projedir.

## 👨‍💻 Geliştirici

Proje geliştirme sürecinde sorularınız için issue açabilirsiniz.

---

**Not:** Bu uygulama Yelp API'sini kullanmaktadır. API kullanım limitleri ve şartları için [Yelp API Dokümantasyonu](https://www.yelp.com/developers/documentation/v3)'na bakınız.

