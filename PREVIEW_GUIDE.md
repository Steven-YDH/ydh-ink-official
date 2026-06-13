# 專案預覽指南

小琥哥您好！本專案的基礎架構與主要頁面已開發完成。您可以透過本指南了解如何查看與執行目前的開發成果。

## 1. 檔案架構查看

專案的主要檔案結構如下，您可以快速了解各功能對應的目錄：

- **`src/app/`**: 核心頁面目錄。
  - `page.tsx`: 首頁 (Home)
  - `about/`: 關於我們 (About) 頁面
  - `gallery/`: 作品展示 (Gallery) 頁面
  - `contact/`: 聯絡我們 (Contact) 頁面
- **`public/`**: 存放所有靜態資源，如標誌 (Logo)、產品圖片等。
- **`BRAND_MANIFESTO.md`**: 品牌定義文件，包含色彩規範、字體選擇及品牌核心精神。

## 2. 如何在本地啟動預覽

請依照以下步驟在您的電腦上啟動開發伺服器：

1. **安裝依賴套件** (僅在第一次啟動或套件更新時需要)：
   ```bash
   npm install
   ```

2. **啟動開發伺服器**：
   ```bash
   npm run dev
   ```

3. **啟動成功**後，終端機將顯示伺服器已運行。

## 3. 訪問路徑

伺服器啟動後，請開啟瀏覽器並訪問以下網址：

- **首頁**: [http://localhost:3000](http://localhost:3000)
- **關於我們**: [http://localhost:3000/about](http://localhost:3000/about)
- **作品展示**: [http://localhost:3000/gallery](http://localhost:3000/gallery)
- **聯絡我們**: [http://localhost:3000/contact](http://localhost:3000/contact)

## 4. 未來部署建議

當您準備好將網站公開給客戶查看時，建議使用以下方式：

- **Vercel (推薦)**: 這是 Next.js 官方提供的部署平台，支援 GitHub 整合，只要程式碼更新，網站就會自動同步。
- **Netlify**: 另一個優秀的靜態網站與 SSR 部署平台。
- **傳統主機**: 若需部署至傳統 Linux 伺服器，需執行 `npm run build` 後使用 Node.js 環境執行。

---
若在預覽過程中遇到任何問題，請隨時告訴我！
