# One Piece Yayın Durumu Kontrolü

Bu proje, Puppeteer kullanarak "One Piece" dizisinin yayın durumunu kontrol eden ve belirli bilgileri terminalde gösteren bir Node.js uygulamasıdır. Uygulama, `https://diziwatch.net/calendar/` sayfasındaki belirli elementleri bulur ve bunların içeriklerini kontrol eder.

## Kurulum

1. Bu repoyu klonlayın veya indirin.
2. Proje dizinine gidin.
3. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:
    ```sh
    npm install
    ```

## Kullanım

Aşağıdaki adımları takip ederek projeyi çalıştırabilirsiniz:

1. Proje dizininde aşağıdaki komutu çalıştırarak uygulamayı başlatın:
    ```sh
    node main.js
    ```

2. Uygulama, belirli aralıklarla terminale "loading" efektini yazdıracak ve işlemi tamamladıktan sonra "One Piece" dizisiyle ilgili bilgileri gösterecektir.

## Çıktı

Uygulama çalıştırıldığında aşağıdaki bilgileri terminalde gösterir:

- Tarih: Dizinin yayınlandığı tarih
- Bölüm: Dizinin mevcut bölümü
- Statü: Dizinin yayınlanma durumu

## Örnek Çıktı
- ....
- Tarih : 24 Temmuz 2023
- Bölüm : One Piece 1. Sezon 4. Bölüm
- Statü : Published
- İşlem Süresi : 2345ms

## Açıklamalar

- `main.js` dosyası, Puppeteer kullanarak belirli elementleri kontrol eder ve sonuçları terminalde gösterir.
- `console.time` ve `console.timeEnd` ile işlemin ne kadar sürdüğünü ölçer.
- `setInterval` ve `clearInterval` kullanarak "loading" efektini terminale yazdırır.

## Katkıda Bulunma

Katkıda bulunmak için lütfen bir pull request oluşturun veya bir issue açın.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.


