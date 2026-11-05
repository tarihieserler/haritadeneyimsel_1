# Miras Atlası

Türkiye'nin kültürel mirasına yönelik, harita merkezli keşif prototipi. Haricî JavaScript bağımlılığı yoktur; Node.js 18+ yeterlidir.

## Çalıştırma

```sh
npm run dev
```

Sunucu varsayılan olarak 3000 portunda çalışır. `PORT` ile değiştirilebilir.

```sh
npm run build
```

Statik dağıtım dosyaları `dist/` dizinine kopyalanır.

## Kapsam

- Yedi seçilebilir bölge, kabartma etkili SVG harita, yakınlaşma ve görünüm kontrolleri.
- 81 il seçimi; 9 başlangıç miras kaydı. İl listeleri yaygın coğrafi sınıflandırmayı kullanır; coğrafi bölgeler il sınırlarıyla birebir örtüşmez.
- Kaynak bağlantılı bilgiler, keşif soruları, tarayıcıda saklanan keşif defteri.
- Canvas üzerinde perspektif izdüşümü ve yüz derinliği sıralamasıyla hafif 3D mimari etkileşim örneği; sürükleme, dokunma ve klavye desteği.
- Mobil ve yatay yerleşim desteği.

## Veri ve doğruluk sınırları

Harita, elle stilize edilmiş yaklaşık bölge geometrisidir; GIS veya resmî sınır verisi değildir. Miras işaretleri yaklaşık yerleşimlidir. Tüm iller için envanter henüz mevcut değildir. Uzaktan yüklenen fotoğraflar tematik örneklerdir, mekân kimlikleri doğrulanmamıştır. Gerçek mekân fotoğrafları ve lisans/atıf metadatası sonraki veri çalışmasında eklenmelidir. 3D sahne ortak bir mimari etkileşim demosudur; kayıtların gerçek geometrisini temsil etmez. Gerçekçi serbest gezinti için belgelendirilmiş, optimize edilmiş mekâna özgü modeller gerekir.

Görseller Unsplash, isteğe bağlı yazı tipleri Google Fonts üzerinden yüklenir; ağ erişimi yoksa sistem yazı tipleri kullanılır. Harita ve uygulama mantığı yereldir.

## Doğrulama

`node --check app.js` ve `npm run build` başarılı. Chromium'da yedi bölgenin oluşturulması, Ege → Kütahya → Aizanoi akışı, keşif defterine kayıt, 3D sahneye geçiş ve haritayı sıfırlama doğrulandı. 390 px mobil görünümde yatay taşma kontrol edildi.
