# Memoryplace 🌸✨

> A private, password-gated romantic memory showcase and digital love letter built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Overview

**Memoryplace** is an interactive, cinematic web experience designed to celebrate relationships, milestones, and cherished memories. With smooth page transitions, botanical aesthetics, ambient floating particles, music playback, interactive photo galleries, and an easy single-file configuration, it creates an unforgettable personalized keepsake.

---

## ✨ Features

- 🔐 **Password-Gated Entry**: Passcode verification formatted for special anniversary dates (e.g. `18042026` or `18.04.2026`).
- 📖 **Cinematic 9-Page Narrative Journey**:
  1. **Opening / Hero**: Romantic entry with floating animated hearts and warm botanical styling.
  2. **The Beginning**: Celebrating where the journey first began.
  3. **Month-by-Month Memories**: Interactive flip cards capturing each chapter and memory.
  4. **Special Memories Gallery**: Masonry photo grid with interactive click-to-enlarge Lightbox modal.
  5. **Little Things I Love**: Interactive expandable cards highlighting everyday quirks and heartfelt moments.
  6. **Relationship Timeline**: Milestone timeline chronicling key dates and achievements.
  7. **Love Letter**: Handcrafted heartfelt letter with elegant typography.
  8. **Next Chapter**: Looking forward to upcoming dreams and future adventures.
  9. **Final Note & Celebration**: Interactive closing celebration with hugs, warm wishes, and confetti effects.
- 🎵 **Background Music Player**: Audio player with toggle/mute controls (`public/music/our-song.mp3`).
- 🖼️ **Interactive Lightbox & Photo Frames**: Touch-friendly, elegant photo viewer with responsive zoom.
- 📱 **Fully Responsive & Touch-Ready**: Swipe navigation on mobile, arrow keys and bottom navigation bar on desktop.
- 🎨 **Botanical & Glassmorphic UI**: Warm curated color palettes, elegant typography, and micro-interactions.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/NamayMalekar/Memoryplace.git
cd Memoryplace
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ⚙️ Customization & Personalization

All content, text, dates, and images are managed in a single central file:

📁 **`src/data/loveData.js`**

| Field | Description |
| :--- | :--- |
| `password` | Passcode to unlock the site (digits only, e.g. `18042026`) |
| `names` & `dates` | Partner names, anniversary dates, and subtitle text |
| `monthsData` | Monthly memories, photos, and descriptions |
| `littleThings` | List of heartfelt little things you love |
| `timeline` | Milestone events and memories |
| `letter` | Custom love letter text and paragraphs |

### Adding Photos
Drop your photos into the `public/images/` directory:
- `hero.jpg`
- `us-01.jpg`, `us-02.jpg`
- `memory-01.jpg` through `memory-06.jpg`

*(Placeholder frames are automatically shown if an image hasn't been uploaded yet).*

### Adding Background Music
Place an MP3 audio file at:
```
public/music/our-song.mp3
```
The music button will automatically activate in the top-right corner.

---

## 📂 Project Structure

```
Memoryplace/
├── public/
│   ├── images/          # Photo gallery & memory images
│   └── music/           # Background soundtrack (our-song.mp3)
├── src/
│   ├── components/      # Reusable UI (Navigation, Lightbox, PhotoFrame, Hearts)
│   ├── data/            # loveData.js (Centralized content & config)
│   ├── pages/           # 9 story pages & PasswordGate
│   ├── App.jsx          # Main page switcher and layout
│   ├── index.css        # Tailwind directives and custom styles
│   └── main.jsx         # React application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🔄 Git Commands Cheat Sheet

### Initial Push to Repository (Already Configured)
```bash
git remote set-url origin https://github.com/NamayMalekar/Memoryplace.git
git branch -M main
git push -u origin main
```

### Daily Workflow to Push Future Changes
Whenever you update text, add new photos, or make design changes:

```bash
# 1. Check status of changed files
git status

# 2. Stage all modifications
git add .

# 3. Commit your changes with a message
git commit -m "Update memories and add new photos"

# 4. Push changes to GitHub
git push
```

---

## 📄 License

Created for personal and private celebrations. Feel free to use and customize!
