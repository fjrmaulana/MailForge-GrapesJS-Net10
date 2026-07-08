# MailForge Studio - WYSIWYG Drag-and-Drop Email Editor

MailForge Studio is a professional, high-performance drag-and-drop email template builder built on top of **ASP.NET Core MVC (.NET 8/10)** and powered by **GrapesJS v0.12**. 

This repository serves as a Phase 1 Proof of Concept (PoC), showing how to blend modern web user interfaces with structured email layout constraints. It is fully decoupled from active databases and utilizes entirely localized assets for bulletproof local execution.

---

## 🚀 Key Features

- **Advanced WYSIWYG Editor:** Seamless visual building via GrapesJS's out-of-the-box template structure.
- **Custom Content Blocks:** Reusable components ready for production (Text layouts, CTA action buttons, and responsive images).
- **Real-Time Live Preview:** Dynamic DOM injection sandbox that renders live email markup in a clean browser view.
- **Clean HTML/CSS Exporting:** Extracts normalized, production-ready, table-based HTML layouts compatible with strict email clients.
- **100% Self-Contained Aset:** Zero dependency on flaky CDN networks. All core JavaScript frameworks, CSS layouts, and icon libraries (Bootstrap, FontAwesome v4 Shims) run completely locally out of the `wwwroot` folder.

---

## 🛠️ Architecture & Tech Stack

- **Backend / Web Framework:** ASP.NET Core MVC (.NET 8 / .NET 10)
- **Frontend Core:** GrapesJS v0.12.17 (Engine UI Core)
- **Styling & Layout UI:** Bootstrap v5.3 (Self-contained integration)
- **Typography & Icons:** FontAwesome Icon Framework (Configured with v4-shims translation mapping for historical core alignment)
- **Dev-Experience Optimization:** Configured with `AddRazorRuntimeCompilation()` for hot-reloading markup changes seamlessly.

---

## 📂 Project Structure Alignment

```text
MailForge.GrapesJS.Net10/
│
├── Controllers/
│   └── HomeController.cs         # Core routing engine for the primary web view
│
├── Views/
│   └── Home/
│       └── Index.cshtml          # Lightweight entry view page (Layout isolated)
│
└── wwwroot/
    ├── lib/
    │   └── bootstrap/            # Bundled Bootstrap engine assets
    │
    └── grapesjs/
        ├── grapes.min.js         # Localized core JS wrapper
        ├── grapes.min.css        # Core workspace configuration styles
        ├── font-awesome.min.css  # Unified cross-platform element icons
        └── mailforge-setup.js    # Decoupled custom block configurations & preview logic
```

---

## ⚙️ Setup and Installation

### Prerequisites
- .NET 8 SDK or .NET 10 SDK installed.
- Visual Studio 2022 or VS Code.

### Step-by-Step Run
1. Clone this repository to your machine:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the application root folder:
   ```bash
   cd MailForge-GrapesJS-Net8
   ```
3. Run the application (Hot reload and development compilation are turned on):
   ```bash
   dotnet run
   ```
4. Access the web portal in your preferred modern browser at: `http://localhost:5180` (or the dynamic HTTPS/HTTP port designated by your system configuration).

---

## 🔮 Phase 2 Roadmap Capabilities
- **SQL Server Integration:** Template serialization/deserialization CRUD workflows.
- **AWS S3 Cloud Assets Hosting:** Automated direct multi-part asset storage bucket uploads directly via the frontend.
- **Cross-App UI Rendering Pipeline:** Litmus API web-hook connections to check real-time presentation accuracy across Android, iPhone, Outlook, and Gmail clients.
