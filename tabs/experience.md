---
layout: experience
lng_pair: id_experience

title: 工作經歷
img: ":Profile.JPG"
meta_description: "Jack Tu 完整工作經歷：庫力索法、奇幻城堡、XRSpace、競峰國際、磁力線上。"
---

# 工作經歷

精簡版自我介紹與技能請見 [關於我]({{ '/tabs/about.html' | relative_url }})。

---

## 庫力索法 (Kulicke & Soffa)

**2024 年 11 月 - 現職 | 資深工程師 (Senior Software Engineer)**

### 關於庫力索法

- 庫力索法 (KnS) 為全球領先的半導體與工業點膠設備製造商。
- 點膠技術 (Dispensing) 是在微電子、半導體製程中，將膠水或黏著劑以微米級的精確度塗佈於特定位置，用以進行晶片黏合、密封與保護。

### 在庫力索法的工作內容

隸屬於軟體研發團隊，主要負責開發與維護點膠裝置專用的核心控制暨圖形介面軟體 **V2K**。

- **技術棧**：C# / .NET (WinForms), Python, SQL
- **核心職責**：維護大型 Legacy 系統、修正 Bug，並主導新模組的架構設計與功能開發。

#### 1. 核心系統優化與穩定性維護

- **架構重構與 Clean Code**：針對維護多年的 V2K 系統進行模組化重構，導入設計模式 (Design Patterns)，提升程式碼可讀性與可維護性。
- **UPH (Units Per Hour) 效能最佳化**：為追求極致的每小時產能 (UPH)，優化耗時邏輯與系統響應速度，確保軟體在工廠 24 小時連續運作下仍維持高度穩定性與低延遲。

#### 2. AI 演算法整合與功能開發

負責將內部演算法團隊研發的 AI／影像辨識核心整合至 V2K，並設計流暢的使用者互動流程 (Workflow & UI)：

- **Auto Parameter Tuning (APT)**  
  - **痛點**：傳統上設備工程師 (FAE) 需憑經驗手動耗費數小時調整點膠參數。  
  - **作法**：開發 APT 模組，引導軟體自動蒐集機台物理參數與點膠結果，並與後端 AI 演算法串接分析，實現「一鍵自動最佳化參數」，大幅縮短 FAE 導入時間。

- **Underfill AI Wizard**  
  - **痛點**：Underfill 製程依賴膠水流動特性，等待時間不精準會嚴重影響 UPH。  
  - **作法**：與影像辨識團隊合作，將傳統以相機肉眼觀察的流程改為電腦視覺演算法自動辨識；負責設計精靈導引 (Wizard UI) 與動態控制邏輯，達成更精準的時間控制並最佳化產線節奏。

#### 3. 開發自動化與日常工具

- 針對團隊每週需人工統計與分析內部 Bug 殘留比例的痛點，以 Python 獨立開發 AI 輔助的自動化資料分析與報表工具，將人工作業自動化，節省團隊日常管理時間。

---

## Fantasy Castle（奇幻城堡）

**2021 年 4 月 - 2024 年 9 月 | 資深遊戲工程師 (Senior Software Engineer)**

![BigWar](:BigWar.png)
- **產品類型**：手機平台卡片／經營類遊戲（專案：*BigWar / Richman Fight*）
- **開發工具與技術**：Unity, C#, MySQL, Photon Server, Entity Framework

### 工作內容與核心成就

- **核心 UI 架構設計與軟美術解耦 (MVC Architecture Refactoring)**  
  - **解決痛點**：解決原系統 UI 與遊戲邏輯高度耦合（Tight Coupling）導致修改 UI 易引發 Bug 的問題。
  - **具體實作**：主導重構並建立基於 **MVC**、事件驅動的 UI 系統。將資料狀態（Model）獨立管理，並透過 Event/UniRx 自動通知 UI 更新；同時設計抽象 Base Class，讓美術設計師能在 Editor 直接進行 UI 綁定與調整而無須碰觸底層邏輯。
  - **成果**：實現程式與美術團隊的「完全解耦與並行開發 (Parallel Workflow)」，顯著提升專案整合效率。

- **自動化測試與品質保證 (TDD & Unit Testing)**  
  - 將系統邏輯與 UI 徹底解耦後，成功在團隊中導入單元測試（Unit Testing）與測試驅動開發 (TDD) 流程，實現 Bug 的早期防禦與自動化驗證，大幅提升產出穩定性。

- **Shader 渲染與低階機台效能優化 (Noise Shader & Low-end Optimization)**  
  - **技術突破**：為呈現高質感水面浪花特效，針對高耗能的 Noise（雜訊）演算進行深度研究與多組演算法 Prototype 測試（試行錯誤）。
  - **成果**：成功在畫面視覺效果與硬體負載之間達成完美平衡，確保遊戲在**最低規格目標測試機（Low-end Target Device）**上依然能穩定維持 **30 FPS** 順暢運行。

- **CI/CD 自動化建置 (Jenkins Integration)**  
  - 導入 Jenkins 自動化建置並持續追蹤外掛與 Google 應用最新規範；將人工包版時間由 **40 分鐘以上壓縮至 20 分鐘以內**，並落實每日自動執行以加速產品迭代。

- **多執行緒與效能調校 (Multi-Threading & Async)**  
  - 針對多款手機裝置進行系統效能優化，導入 Multi-threading 異步處理耗時邏輯；指導團隊善用 C# `async/await` 語法，降低主執行緒負擔。

- **後端 Web API 與資料庫架構 (Server-Client API & DB)**  
  - 設計與實作 Server／Client 通訊 API，負責伺服器端邏輯與資料庫結構 (Database Schemas) 設計與管理；建立 **CRUD 風格 Web API**，便於後續擴充與營運維護。

---

## XRSpace

**2019 年 11 月 - 2021 年 4 月 | 資深工程師 - System Framework Team (Senior Software Engineer)**

![XRSpace](:XRSpace.jpg)
- **專案**：XRSPACE MANOVA／VR Platform SDK Development
- **開發工具與技術**：Unity, Android Studio, C#, C++, Java
- **團隊目標**：橫跨 Android、Java、C++、Unity，為第三方開發者打造高相容性 SDK，使應用程式能在公司 Android 型 VR 裝置上順暢運行。

### 工作內容與核心成就

- **核心系統介面**：設計與實作 VR 裝置系統級功能（如電源、音量等）；以 Unity 渲染 3D UI 並疊加整合至透明 Android 應用，提供沉浸式體驗。
- **3D 虛擬鍵盤**：透過 Android `InputMethodService` 在 VR 環境中實作 3D 虛擬鍵盤與文字輸入。
- **投影顯示優化**：擷取 Unity 渲染結果，將雙眼 VR 畫面轉為 **單一視角 (Single-view)** 輸出至投影裝置，提升非 VR 觀眾的觀看體驗與清晰度。

---

## 競峰國際 (JFIGames)

**2017 年 3 月 - 2019 年 9 月 | 資深工程師 (Software Engineer - Product Developing Team)**

- **開發工具與技術**：Unity, PostgreSQL, Photon Server, C#, SQL, PHP, C/C++

![SuperAcornCup](:SuperAcronCup.png)
### 參與專案 1：SuperAcornCup（3 對 3 多人派對遊戲，2017/12 ~ 2018/12 上線）

- **架構**：參考 Overwatch 式架構，導入 **Entity Component System (ECS)** 與 **Entitas** 實作核心邏輯。
- **幀同步與伺服器端物理**：採 Lockstep；後端導入 **Bullet Physics** 做精確物理模擬，維持前後端物理一致。
- **Bullet 效能**：針對 C# 環境下的效能瓶頸調整底層邏輯，降低運算時間。
- **PlayerController**：優化複雜地形（平地、斜坡、斷崖）移動；**簡化 Raycast 流程** 以改善多機種效能。
- **道具投擲**：實作含**磁力概念**的投擲邏輯，使物件在不同坡面仍能貼地並符合預期運動。

### 參與專案 2：手機平台經營類遊戲（2016/12 ~ 開發中）

- **UI 與後端**：裝潢佈置、升級強化等核心 UI；前期架構、後端驗證與 PostgreSQL 儲存。
- **任務／活動與 AI**：以 **Behavior Tree** 概念實作任務與活動系統，以及與玩家互動的單位 AI。
- **LBS**：串接第三方資料並建立主要邏輯。
- **Web API**：協助營運相關資料查詢等 API。
- **攝影機**：俯視視角的平移、縮放等操作邏輯。

### 研發原型 (Prototypes)

- **大量單位碰撞迴避**：研究並導入 **NavMesh** 與 **ORCA**，達成大量單位移動互不干擾，維持 **30 FPS 以上**。
- **隨機地圖編輯器**：依資料產生可填式隨機地圖，並提供企劃用編輯器。

---

## 磁力線上 (Gamemag)

**2015 年 7 月 - 2017 年 2 月 | 資深工程師 (Software Engineer - Product Developing Team)**

![WB](:WB.jpg)
- **專案**：スクール・オブ・セイヴァーズ ～聖剣使いの禁呪詠唱 ONLINE～（手機多人線上遊戲）
- **開發工具與技術**：Unity, PostgreSQL, Photon Server, C#, SQL

### 工作內容與核心成就

- **跨平台內購 (IAP)**：開發 Google／Apple 內購；以 **OOP** 抽象化流程，便於抽換與維護；因應各國法規處理後端資料，並製作營運用資料查詢功能。
- **MMORPG 基礎系統與 UI**：裝備、角色強化等 UI；獨立處理前後端資料交換、Photon 伺服器邏輯與 PostgreSQL 儲存。