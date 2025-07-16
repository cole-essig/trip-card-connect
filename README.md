# Virtual Business Card 💼

A modern virtual business card site built with React and TypeScript. This site acts as a clean, responsive personal profile with contact capabilities and subtle animations.

## 🛠 Tech Stack

- **React + TypeScript** – Component-based UI with type safety
- **TailwindCSS** – Utility-first CSS framework for modern styling
- **EmailJS** – Seamless contact form with direct-to-inbox messaging
- **GSAP** – Smooth animations and interactive transitions

## ✨ Features

- ✅ Responsive layout for all screen sizes
- ✅ Animated elements using GSAP for dynamic interactions
- ✅ Contact form powered by EmailJS
- ✅ Clean, minimal aesthetic with TailwindCSS

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/virtual-business-card.git
cd virtual-business-card
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add EmailJS environment variables

Create a `.env` file in the root directory and include the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> 💡 You can get these values from your [EmailJS dashboard](https://www.emailjs.com/).

### 4. Run the development server

```bash
npm run dev
```

The site should now be running at [http://localhost:5173](http://localhost:5173) (or the port Vite assigns).

---

## 🖼️ Preview

<!-- Optionally include a screenshot or GIF here -->

![Screenshot](./src/assets/cactus1.svg)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
