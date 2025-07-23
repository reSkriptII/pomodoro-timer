# Pomodoro timer app

**Live demo:** [https://pomodoro-timer-sandy-tau.vercel.app](https://pomodoro-timer-sandy-tau.vercel.app)  
**Source code:** [GitHub Repository](https://github.com/reSkriptII/pomodoro-timer)

---

## Overview

This is a minimal productivity timer designed to support the Pomodoro Technique, a time management method based on 25-minute focus sessions followed by short breaks.

The project was built to practice and showcase React fundamentals:

- Stateful timer logic
- Cross-component state sharing
- Customizable settings via props/hooks
- Clean component breakdown and layout

## Features

### Pomodoro Session Management
3 configurable stages:
- Pomodoro (Focus)
- Short Break
- Long Break

### Timer Logic
- Countdown display
- Pause/Resume/Reset
- Auto stage switch

### User Settings
- Adjust timer length for each stage
- Settings persist during session

## Tech Stack

- **React** (functional components, hooks)
- **Vite** (build tooling)
- **Tailwind CSS** (utility-first styling)
- **TypeScript** (for type safety)

## 🔜 Potential Future Enhancements

- Sound alerts & notifications
- Persistent user settings (localStorage or DB)
- Theme customization (dark mode, color palette)
- Better responsive design polish
- Export to Electron/Tauri for desktop use

Author note: This app would be better as a floating widget or native menu bar tool (e.g., Electron or Tauri). Its current form is best understood as a frontend logic demonstration.