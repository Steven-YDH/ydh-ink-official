# Website Sitemap & Structure

本文件定義「小琥哥」品牌形象網站的頁面架構、區塊功能及預計採用的 UI 元件，旨在實踐「極簡奢華 (Minimalist Premium)」的品牌願景。

---

## 1. Home (首頁)
沉浸式視覺體驗，作為品牌的第一印象，強調高品質動效與大氣的空間感。

| 區塊 (Section) | 功能描述 | 預計 UI 元件 (UI Components) |
| :--- | :--- | :--- |
| **Hero** | 展示品牌核心價值、小琥哥專業形象。 | `Fullscreen Hero Slider` (大氣轉場) / `Text Reveal Animation` |
| **About Preview** | 品牌簡介縮影，引導進入故事。 | `Split Layout` (左圖右文) / `Subtle Fade-in Scroll` |
| **Featured Gallery** | 精選作品或產品的高質感預覽。 | `Horizontal Smooth Scroll` / `Premium Hover Cards` |
| **Contact CTA** | 強而有力的行動呼籲，引向合作洽談。 | `Minimalist Dark Section` / `Ghost Button` (香檳金) |

---

## 2. About (關於我們)
講述職人精神與品牌故事，建立深度連結與信任感。

| 區塊 (Section) | 功能描述 | 預計 UI 元件 (UI Components) |
| :--- | :--- | :--- |
| **Story** | 從油墨工藝到品牌創新的歷程 (職人精神)。 | `Vertical Minimalist Timeline` / `Parallax Image Scroll` |
| **Expertise** | 核心專業能力、技術優勢展示。 | `Icon Grid` (極簡細線圖標) / `Animated Counter` (低調動效) |
| **Personal Branding** | 小琥哥的個人形象展示 (健身、創新、生活方式)。 | `Asymmetric Grid` (非對稱網格) / `Professional Photo Portfolio` |

---

## 3. Gallery (作品集)
高解析度視覺展示，強調產品細節與美學，減少文字干擾。

| 區塊 (Section) | 功能描述 | 預計 UI 元件 (UI Components) |
| :--- | :--- | :--- |
| **Category Filter** | 提供流暢的作品分類篩選。 | `Minimalist Filter Tabs` (純文字切換) |
| **Project Showcase** | 具比例美感的視覺展示牆。 | `Masonry Grid` / `Custom Lightbox` (大圖沉浸模式) |
| **Detail View** | 點擊進入後的細節展示區（如需）。 | `Side Drawer` / `Full-page Modal` |

---

## 4. Contact (聯繫我們)
極簡化、尊榮感的溝通通道。

| 區塊 (Section) | 功能描述 | 預計 UI 元件 (UI Components) |
| :--- | :--- | :--- |
| **Contact Form** | 高質感填寫表單。 | `Minimalist Form` (無框或底線輸入框) / `Success Feedback Micro-interaction` |
| **Business Info** | 辦公地點、社群連結、商務資訊。 | `Typography-focused Footer` / `Interactive Google Map` (灰階風格) |

---

## UX 原則落實指南
- **留白比例:** 各區塊間距（Section Padding）應保持在 `160px` 以上，確保呼吸感。
- **字體層次:** 標題使用 `Playfair Display` (襯線)，正文使用 `Inter` (無襯線)，字距略微拉開。
- **色彩應用:** 以 `Deep Charcoal` 為背景，`Champagne Gold` 僅用於強調 Button 或關鍵細節。
- **動效:** 使用 `Framer Motion` 實現緩慢的進入效果，禁止快速或閃爍的動效。
