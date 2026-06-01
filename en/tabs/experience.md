---
layout: experience
lng_pair: id_experience

title: Work Experience
img: ":Profile.JPG"
meta_description: "Jack Tu — full work experience: Kulicke & Soffa, Fantasy Castle, XRSpace, JFIGames, Gamemag."
---

# Work Experience

For a shorter bio and skills, see [About]({{ '/en/tabs/about.html' | relative_url }}).

---

## Kulicke & Soffa

**Current role | Software Engineer**

### About the company

- Kulicke & Soffa (K&S) is a leading global supplier of semiconductor and industrial dispensing equipment.
- Dispensing applies adhesives or sealants with micron-level accuracy in microelectronics and semiconductor processes for die attach, sealing, and protection.

### Role and responsibilities

Member of the software R&D team, developing and maintaining **V2K**, the core control and GUI software for dispensing equipment.

- **Stack**: C# / .NET (WinForms), Python, SQL
- **Focus**: Maintaining a large legacy codebase, bug fixes, and leading architecture and feature work for new modules.

#### 1. Core system optimization and stability

- **Refactoring & clean code**: Modularized long-lived V2K components, applied **design patterns**, and improved readability and maintainability.
- **UPH (units per hour)**: Optimized throughput so the software stays stable and low-latency under **24/7 factory** operation.

#### 2. AI integration and product features

Integrated in-house **AI / computer vision** into V2K and owned workflow and UI design:

- **Auto Parameter Tuning (APT)**  
  - **Problem**: Field engineers (FAEs) often spent hours manually tuning dispensing parameters.  
  - **Solution**: Built the APT module to collect machine physics and dispensing results, call backend AI analysis, and deliver **one-click parameter optimization**, shortening FAE bring-up time. APT is a key differentiator for V2K.

- **Underfill AI Wizard**  
  - **Problem**: Underfill depends on fluid flow; imprecise wait times hurt UPH.  
  - **Solution**: Partnered with the vision team to replace manual camera inspection with **automated CV**; designed the **wizard UI** and dynamic control for tighter timing and better line rhythm.

#### 3. Automation and tooling

- Built a **Python** tool (with AI-assisted analysis) to automate weekly bug backlog reporting, replacing manual stats and saving team time.

---

## Fantasy Castle

**Apr 2021 – Sep 2024 | Senior Software Engineer**

- **Products**: Mobile card / management games (*BigWar / Richman Fight*)
- **Tech**: Unity, C#, MySQL, Photon Server, Entity Framework

### Highlights

- **Core UI framework**: Led an **MVC-based**, testable, event-driven UI system for faster Unity UI work and integration.
- **CI/CD (Jenkins)**: Automated builds and kept up with Google Play requirements; cut packaging from **over 40 minutes to under 20** with daily runs.
- **Performance & threading**: Device tuning; **multi-threading** and async patterns to hold **30 FPS** on low-end hardware; promoted C# `async/await` in the team.
- **Shaders**: Authored effects and refactored legacy shaders to reduce GPU load.
- **TDD**: Introduced testing practices to improve release quality.
- **Backend & data**: Designed client–server APIs and DB schemas; added **CRUD-style Web APIs** for extensibility.

---

## XRSpace

**Nov 2019 – Apr 2021 | Senior Software Engineer, System Framework Team**

- **Programs**: XRSPACE MANOVA / VR platform SDK
- **Tech**: Unity, Android Studio, C#, C++, Java
- **Mission**: Cross-stack (Android, Java, C++, Unity) SDK so third-party apps run well on the company’s Android-based VR hardware.

### Highlights

- **System UI**: Power, volume, and related system features; **Unity 3D UI** composited into a transparent Android shell for immersive UX.
- **3D virtual keyboard**: Custom **InputMethodService**-based keyboard for VR text entry.
- **Casting / projection**: Captured Unity output and converted stereo VR to a **single-view** feed for projectors, improving clarity for non-VR viewers.

---

## JFIGames

**Mar 2017 – Sep 2019 | Software Engineer, Product Development Team**

- **Tech**: Unity, PostgreSQL, Photon Server, C#, SQL, PHP, C/C++

### Project 1: SuperAcornCup (3v3 party game, Dec 2017 – Dec 2018 launch)

- **Architecture**: **ECS** with **Entitas**, inspired by Overwatch-style structure.
- **Networking & physics**: **Lockstep** replication; **Bullet Physics** on the server for deterministic simulation.
- **Performance**: Tuned Bullet in C# to remove hotspots.
- **Player controller**: Smooth movement on slopes and gaps; simplified **raycasts** for better mobile performance.
- **Throwing mechanics**: Magnet-style throws so props stay grounded across slopes.

### Project 2: Mobile management game (from Dec 2016, in development)

- **UI & backend**: Decoration, upgrades, early UI architecture, validation, and **PostgreSQL** persistence.
- **Quests / events / AI**: **Behavior-tree**-style quest and event systems and NPC AI.
- **LBS**: Third-party geo data and core logic.
- **Web APIs**: Ops-facing data access.
- **Camera**: Top-down pan and zoom.

### Prototypes

- **Crowd avoidance**: **NavMesh** + **ORCA** for many agents without collisions at **30+ FPS**.
- **Procedural map editor**: Data-driven fillable maps plus an editor for designers.

---

## Gamemag

**Jul 2015 – Feb 2017 | Software Engineer, Product Development Team**

- **Title**: *School of Savers / The Sacred Blacksmith* online (mobile MMO)
- **Tech**: Unity, PostgreSQL, Photon Server, C#, SQL

### Highlights

- **Cross-store IAP (Google / Apple)**: OOP abstractions for flexible swaps; legal/compliance-aware backend handling; ops lookup tools.
- **MMO systems & UI**: Gear, enhancement, and related UI with client–server sync, **Photon** logic, and **PostgreSQL** storage.
