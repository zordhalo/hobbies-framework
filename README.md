# Men's Wellbeing Framework

A comprehensive Next.js application for men's mental health and wellbeing through structured hobbies. Science-backed framework featuring physical hobbies, mental activities, and daily movement.

## 🚀 Features

- **Modern Next.js 15** with App Router
- **TypeScript** for type safety
- **Responsive Design** with CSS Modules
- **Multi-page Navigation** with client-side routing
- **Science-Backed Content** with 86+ peer-reviewed studies
- **Dark Mode Support** via CSS variables
- **Mobile-First** responsive layout

## 📋 Project Structure

```
hobbies-framework/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx             # Home page
│   │   ├── page.module.css      # Shared page styles
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── philosophy/          # Philosophy page
│   │   ├── science/             # Science page
│   │   ├── guide/               # Guide page
│   │   ├── implementation/      # Implementation page
│   │   ├── success/             # Success page
│   │   └── sources/             # Sources page
│   └── components/
│       ├── Navigation.tsx       # Navigation component
│       ├── Footer.tsx           # Footer component
│       └── Card.tsx             # Reusable card component
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette

The application uses a custom color system defined in CSS variables:

- **Primary**: Deep Ocean Blue (`#1D4A6D`)
- **Physical Pillar**: Energizing Orange (`#E68961`)
- **Mental Pillar**: Forest Green (`#4B8E7E`)
- **Movement Pillar**: Deep Teal (`#21808D`)

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Pages

1. **Home** (`/`) - Overview of the 3-pillar framework
2. **Philosophy** (`/philosophy`) - Core principles and third spaces concept
3. **Science** (`/science`) - Neuroscience and brain chemistry
4. **Guide** (`/guide`) - Step-by-step hobby selection
5. **Implementation** (`/implementation`) - Scheduling and time management
6. **Success** (`/success`) - Long-term habits and sustainability
7. **Sources** (`/sources`) - Research references and citations

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Icons**: Font Awesome 6
- **Deployment**: Vercel-ready

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📝 Migration Notes

This project was converted from a single-page HTML application to a modern Next.js React application with:

- ✅ Component-based architecture
- ✅ Client-side routing with Next.js App Router
- ✅ TypeScript for type safety
- ✅ Modular CSS with CSS Modules
- ✅ Improved maintainability and scalability
- ✅ SEO-friendly with Next.js metadata API

The original HTML file is preserved as `index.html.backup` for reference.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Based on 86+ peer-reviewed studies from APA, NIH, WHO, and CDC
- Inspired by research on men's mental health and wellbeing
- Font Awesome for icons

---

**Built with ❤️ using Next.js and React**
