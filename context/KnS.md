### 關於庫力索法 (Kulicke & Soffa)
- 庫力索法 (KnS) 為全球領先的半導體與工業點膠設備製造商。
- 點膠技術 (Dispensing) 是在微電子、半導體製程中，將膠水或黏著劑以微米級的精確度塗佈於特定位置，用以進行晶片黏合、密封與保護。

### 在庫力索法的工作內容
我隸屬於軟體研發團隊，主要負責開發與維護點膠裝置專用的核心控制暨圖形介面軟體 **V2K**。
- **技術棧**：C# / .NET (WinForm), Python, SQL
- **核心職責**：維護大型 Legacy 系統、修正 Bug、並主導新模組的架構設計與功能開發。

#### 1. 核心系統優化與穩定性維護
- **架構重構與 Clean Code**：針對維護多年的 V2K 系統進行模組化重構，導入設計模式 (Design Patterns)，提升程式碼的可讀性與可維護性。
- **UPH (Unit Per Hour) 效能最佳化**：為追求極致的每小時產能 (UPH)，確保軟體在工廠 24 小時連續運作下依然保持高度穩定性與低延遲。

#### 2. AI 演算法整合與功能開發
我負責將內部演算法團隊研發的 AI/影像辨識核心，整合至 V2K 軟體中，並設計流暢的使用者互動流程 (Workflow & UI)：
- **Auto Parameter Tuning (APT)**：
  - **痛點**：傳統上設備工程師 (FAE) 需憑經驗手動耗費數小時調整點膠參數。
  - **解決方案**：我接手開發了 APT 模組，引導軟體自動化搜集機台物理參數與點膠結果，並與後端 AI 演算法串接分析，實現「一鍵自動最佳化參數」，大幅縮減 FAE 開發導入時間。此功能已被視為目前 V2K 的核心競爭力。
- **Underfill AI Wizard**：
  - **痛點**：Underfill 製程依賴膠水流動特性，若等待時間不精準會嚴重干擾 UPH。
  - **解決方案**：與影像辨識團隊緊密合作，將傳統人工透過相機肉眼觀察的流程，升級為由電腦視覺演算法自動辨識。我負責設計整個精靈導引系統 (Wizard UI) 與動態控制邏輯，實現更精準的時間控制並最佳化產線節奏。

#### 3. 開發自動化與日常工具 (提升團隊效率)
- 針對團隊每週需人工統計與分析內部 Bug 殘留比例的痛點，我利用 Python 獨立開發了一套 AI 輔助的自動化資料分析與報表生成工具，將原本繁瑣的人工作業自動化，大幅節省團隊成員的日常管理時間。
### Fantasy Castle (奇幻城堡)
**2021 年 4 月 - 2024 年 9 月 | 資深遊戲工程師 (Senior Software Engineer)**[cite: 1, 2]
- **產品類型**：手機平台卡片/經營類遊戲（專案：*BigWar / Richman Fight*）[cite: 1, 2]
- **開發工具與技術**：Unity, C#, MySQL, Photon Server, Entity Framework[cite: 1, 2]

#### 工作內容與核心成就：
- **核心 UI 架構設計 (Core UI Framework)**：
  - 負責主導並建立基於 **MVC 架構** 的可測試、事件驅動 UI 系統，大幅提升團隊成員在 Unity 中的 UI 組件開發效率與專案整合速度[cite: 1, 2]。
- **CI/CD 自動化導入 (Jenkins Integration)**：
  - 導入 Jenkins 自動化構建系統並持續研究插件更新，以符合 Google 應用的最新規範[cite: 1, 2]。
  - 將過去人工包版所需 **40 分鐘以上的時間壓進 20 分鐘以內**，並落實每日自動執行，加速專案疊代[cite: 1]。
- **效能優化與多執行緒 (Performance Optimization & Multi-Threading)**：
  - 針對多種手機設備進行系統效能優化，確保遊戲能順利流暢運行[cite: 1, 2]。
  - 增加 **Multi-Threading** 的異步處理優化效能，使遊戲在低效能裝置上仍能穩定維持 **30 FPS** 的表現[cite: 1]；同時指導團隊成員善用 C# `async/await` 語法，大幅提升整體開發效率[cite: 1]。
- **Shader 視覺特效開發 (Shader-Based Visual Effects)**：
  - 使用 Shader 技術為專案開發特殊的視覺與畫面特效，增強遊戲的畫面吸引力[cite: 1, 2]。
  - 優化部分過時的 Shader，降低硬體負荷，確保低端裝置的流暢度 (30 FPS)[cite: 1]。
- **測試驅動開發 (TDD 導入)**：
  - 成功在團隊中導入測試流程，確保產出皆經過完整測試，顯著提升產品開發的穩定性[cite: 1]。
- **後端 Web API 與資料庫設計 (Server-Client API & DB)**：
  - 負責設計與開發 Server 與 Client 之間的通訊 API，並負責 Server 端與資料庫表格 (Database Schemas/Tables) 的設計、建置與管理[cite: 1, 2]。
  - 新增 **CRUD 格式的 Web API 功能**，讓團隊成員能方便地擴展 API 以支援系統的後續擴展需求[cite: 1]。

---

### XRSpace
**2019 年 11 月 - 2021 年 4 月 | 資深工程師 - System Framework Team (Senior Software Engineer)**[cite: 1, 2]
- **專案名稱**：XRSPACE MANOVA / VR Platform SDK Development[cite: 1, 2]
- **開發工具與技術**：Unity, Android Studio, C#, C++, Java[cite: 1, 2]
- **團隊任務**：身處橫跨 Android、Java、C++、Unity 的技術團隊，主要目標是為第三方開發者研發高相容性的 SDK，使其應用程式能在公司的 Android-based VR 裝置上順暢運行[cite: 1, 2]。

#### 工作內容與核心成就：
- **核心系統介面開發 (Core System Interface)**：
  - 負責設計與實現 VR 裝置的核心系統級功能（如：電源控制、音量調整等）[cite: 2]。
  - 運用 Unity 渲染 3D UI，並將其重疊整合至透明的 Android 應用程式中，提供用戶在 VR 環境中具沉浸式的使用者體驗[cite: 1, 2]。
- **3D 虛擬鍵盤實作 (3D Virtual Keyboard)**：
  - 透過 Android 的 `InputMethodService` 自行開發 3D VR 環境內的虛擬鍵盤，實現沉浸式的用戶互動與文字輸入功能[cite: 1, 2]。
- **投影顯示優化 (Projection Optimization)**：
  - 開發畫面擷取功能，捕獲 Unity 的渲染結果，並將雙眼的 VR 畫面轉換以**單一視角 (Single-view perspective)** 呈現於投影裝置上[cite: 1, 2]。
  - 顯著提升了非 VR 觀看者（外部觀眾）的同步體驗與畫面清晰度[cite: 1, 2]。

---

### 競峰國際 (JFIGames)
**2017 年 3 月 - 2019 年 9 月 | 資深工程師 (Software Engineer - Product Developing Team)**[cite: 1, 2]
- **開發工具與技術**：Unity, PostgreSQL, Photon Server, C#, SQL, PHP, C/C++[cite: 1, 2]

#### 參與專案 1：SuperAcornCup (3對3多人派對遊戲，2017/12 ~ 2018/12 上線)**[cite: 1, 2]
- **架構導入**：參考 Overwatch 架構，團隊決策導入 **Entity Component System (ECS)** 建立核心邏輯，並搭配開源框架 **Entitas** 實作[cite: 1, 2]。
- **前後端幀同步與物理引擎導入 (Server-Side Physics Replication)**：
  - 專案使用幀同步 (Lockstep) 處理前後端資料傳遞[cite: 1]。為了在後端進行精確的物理模擬，導入了第三方物理引擎 **Bullet Physics**[cite: 1, 2]，確保客戶端與伺服器之間的物理表現高度同步[cite: 2]。
- **第三方引擎效能優化**：
  - 針對 Bullet Physics 在 C# 環境運行時的效能疑慮，進行深度的底層邏輯修改，成功降低邏輯運行時間，解除效能瓶頸[cite: 1]。
- **PlayerController 開發與優化**：
  - 設計並實現流暢的 PlayerController，優化玩家在複雜地形（平地、斜坡、斷崖）上的移動與操作体验[cite: 1, 2]。
  - **優化 Raycast 運算**：透過簡化射線碰撞的運算流程，顯著改善效能，使多種手機設備皆能流暢執行[cite: 1, 2]。
- **自訂特殊投擲邏輯**：
  - 開發道具投擲功能，導入**磁力概念**[cite: 1, 2]。不論物件進入斜坡的角度為何，都能確保道具貼合地面並維持預期的移動行為[cite: 1, 2]。

#### 參與專案 2：手機平台經營類遊戲 (2016/12 ~ 開發中)**[cite: 1]
- **UI 與後端邏輯整合**：負責經營類遊戲核心的「裝潢佈置」、「升級強化」等 UI 功能開發，包含前期 UI 架構設定、後端邏輯驗證、以及資料庫 (PostgreSQL) 儲存[cite: 1]。
- **任務/活動系統與 AI (Behavior Tree)**：
  - 模擬 **Behavior Tree (行為樹)** 的概念，獨立規劃並實作完整的遊戲任務與活動系統[cite: 1]。
  - 同樣使用 Behavior Tree 技術製作遊戲內與玩家互動的單位 AI[cite: 1]。
- **LBS (Location Based Service)**：從第三方的工具取得需求所需的資料，並建立主要邏輯[cite: 1]。
- **Web API 開發**：協助開發資料庫資料取得等營運方向功能[cite: 1]。
- **攝影機操控邏輯**：遊戲內俯視視角的攝影機平移、放大等操作邏輯[cite: 1]。

#### 研發階段專案 (Prototypes)：
- **大量單位碰撞迴避 (Prototype 1)**：
  - 針對手機平台單人策略模擬遊戲，研究並導入 **NavMesh** 與 **ORCA 演算法**[cite: 1, 2]。
  - 實現大量單位同時移動且「互不碰撞」的尋路與迴避邏輯，並讓畫面幀率成功維持在 **30 FPS 以上**[cite: 1, 2]。
- **隨機生成地圖編輯器 (Prototype 2)**：
  - 根據資料產生可填式的隨機地圖，並額外開發編輯器供企劃快速改動[cite: 1]。

---

### 磁力線上 (Gamemag)
**2015 年 7 月 - 2017 年 2 月 | 資深工程師 (Software Engineer - Product Developing Team)**[cite: 1, 2]
- **專案名稱**：スクール・オブ・セイヴァーズ ~聖剣使いの禁呪詠唱 ONLINE~ (手機多人線上遊戲)[cite: 1, 2]
- **開發工具與技術**：Unity, PostgreSQL, Photon Server, C#, SQL[cite: 1, 2]

#### 工作內容與核心成就：
- **跨平台金流系統研發 (In-App Purchase)**：
  - 負責開發跨平台 (Google, Apple) 內購功能[cite: 1, 2]。
  - 善用**物件導向程式設計 (OOP)** 將流程抽象化，使後續系統抽換與維護更為靈活、快速[cite: 1, 2]。
  - 為了滿足產品上線國家法令特殊，對後端資料做額外處理；並且根據客戶需求，製作後端資料查找功能[cite: 1]。
- **MMORPG 基礎系統與 UI 開發**：
  - 負責線上遊戲內常見的裝備、角色強化等功能的 UI 製作[cite: 1, 2]。
  - 獨立處理對應的前後端資料交換、Photon 伺服器邏輯以及 PostgreSQL 資料庫儲存[cite: 1, 2]。