# Rock Paper Scissors - V 2.0 🎮
(img/rock-paper-scissors.gif)

Bu proje, temel web geliştirme becerilerini pekiştirmek amacıyla geliştirilmiş, skor takibi ve otomatik oynatma özellikleri sunan eğlenceli bir **Taş Kağıt Makas (Rock Paper Scissors)** oyunudur. Vanilla JavaScript kullanılarak, harici bir framework bağımlılığı olmadan (No-Framework) geliştirilmiştir.

## 🌟 Özellikler

*   **Oyun Mantığı:** Klasik Taş, Kağıt, Makas kuralları ile bilgisayara karşı oynama imkanı.
*   **Skor Takibi:** `localStorage` kullanılarak kazanma, kaybetme ve beraberlik sayılarının kalıcı olarak saklanması (Data Persistence).
*   **Auto Play Modu:** `setInterval` ile oyunun belirli aralıklarla otomatik olarak oynatılması.
*   **Klavye Kontrolleri:** `r` (Rock), `p` (Paper), `s` (Scissors) tuşları ile hızlı oyun deneyimi.
*   **Responsive Tasarım:** CSS Flexbox ile ortalanmış kullanıcı arayüzü.

## 🛠 Kullanılan Teknolojiler ve Yöntemler

*   **Core:** HTML5, CSS3, JavaScript (ES6)
*   **Data Handling:** `localStorage` (Skor Kaydı), `JSON` (Veri Dönüşümü)
*   **Logic:** `Math.random()` (Bilgisayar Hamlesi), `setInterval` (Otomatik Oyun), DOM Event Listeners (`click`, `keydown`).
*   **Styling:** CSS3, Google Fonts (Nabla Font).

## 📂 Proje Yapısı

```
/
├── img/            # Oyun görselleri (rock, paper, scissors)
├── index.html      # Ana Uygulama Sayfası
├── script.js       # Oyun Mantığı (Skor, Eventler, AutoPlay)
├── style.css       # Görsel Tasarım
```

## 🚀 Kurulum

Proje statik dosyalardan oluştuğu için herhangi bir kuruluma (npm install vb.) ihtiyaç duymaz.
1. Projeyi indirin.
2. `index.html` dosyasını tarayıcınızda açın veya VS Code **Live Server** eklentisi ile çalıştırın.
