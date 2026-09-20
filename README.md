# Five Months — A Romantic Anniversary & Memory Showcase

> A private, password-gated romantic love letter & memory gallery web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🔐 **Password-Gated Entry**: Secure, browser-verified unlock gate formatted for anniversary/special dates (default: `18042026` / `18.04.2026`).
- 📖 **Cinematic 9-Page Narrative Journey**:
  - **Page 1: Opening** — Animated introduction with floating hearts and botanical aesthetics.
  - **Page 2: The Beginning** — Where the journey started.
  - **Page 3: Five Months** — Interactive month-by-month memories (April through September) with photo flip cards and memories.
  - **Page 4: Special Memories** — Masonry photo gallery with interactive lightbox view.
  - **Page 5: Little Things I Love** — Interactive expanding cards for the cute and meaningful everyday quirks.
  - **Page 6: Relationship Timeline** — Milestone timeline tracking meaningful moments.
  - **Page 7: Love Letter** — Beautifully crafted, heartfelt letter with elegant typography.
  - **Page 8: Next Chapter** — Looking forward to future dreams and milestones.
  - **Page 9: Final Note** — Closing celebration with interactive hugs and warm wishes.
- 🎵 **Background Music Player**: Built-in audio player with mute/pause controls (`public/music/our-song.mp3`).
- 🖼️ **Interactive Lightbox & Photo Frames**: Click-to-enlarge photo modal with responsive touch & swipe support.
- 📱 **Fully Responsive**: Smooth touch gestures and keyboard navigation across mobile, tablet, and desktop devices.
- 🎨 **Botanical & Glassmorphism Aesthetics**: Tailored warm palette, custom serif and modern fonts, micro-animations, and ambient floating hearts.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/NamayMalekar/love-site.git
cd love-site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory, ready to deploy on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ⚙️ Customization & Personalization

All content and configuration can be personalized in a single file without touching component code:

📁 **`src/data/loveData.js`**

| Field | Description |
| :--- | :--- |
| `password` | The entry passcode (digits only, e.g. `18042026`) |
| `names` & `dates` | Partner names, anniversary dates, and subtitle text |
| `monthsData` | Month-by-month photos, titles, and descriptions |
| `littleThings` | List of heartfelt little things you love |
| `timeline` | Milestone events and memories |
| `letter` | Custom love letter text and paragraphs |

### Adding Photos
Add images to `public/images/`:
- Formats supported: `.jpeg`, `.jpg`, `.png`, `.webp`
- Update the image references in `src/data/loveData.js` to point to `/images/<filename>`.

### Adding Background Music
Place an MP3 audio file at:
```
public/music/our-song.mp3
```
The music button will automatically activate on the site.

---

## 📂 Project Structure

```
love-site/
├── public/
│   ├── images/          # Photo gallery assets
│   └── music/           # Background audio track
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

## 🔄 Git Workflow: Pushing Changes to GitHub

### Initial Setup (One-time)
If you haven't created the repository on GitHub yet:
1. Go to [GitHub New Repository](https://github.com/new).
2. Set Repository Name to **`love-site`**.
3. Keep it **Public** or **Private** and do **NOT** check "Initialize with README".
4. Click **Create repository**.

Then link and push from your terminal:
```bash
git remote add origin https://github.com/NamayMalekar/love-site.git
git branch -M main
git push -u origin main
```

### Daily Commands to Push Changes
Whenever you make updates or add new photos/text:

```bash
# 1. Check changed files
git status

# 2. Stage all modifications
git add .

# 3. Commit with a descriptive message
git commit -m "Update memories and add new photos"

# 4. Push to GitHub
git push
```

---

## 📄 License

This project is created for personal and private use. Feel free to customize it for your own special celebrations!
