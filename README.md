# Nike App

A modern, responsive Nike-themed web application built with React and Tailwind CSS.

## Features

- Responsive layout for desktop and mobile
- Product showcase with images and details
- Special offers and customer reviews
- Newsletter subscription form
- Social media integration in the footer
- Clean, modern UI using Tailwind CSS utility classes

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd nike-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

```
src/
  assets/
    icons/         # SVG icon files
    images/        # Product and logo images
  components/      # Reusable React components (Button, Nav, ServiceCard, etc.)
  sections/        # Page sections (Hero, Services, SpecialOffer, Footer, etc.)
  constants/       # Static data and configuration
  App.jsx          # Main app component
  index.css        # Tailwind CSS and custom styles
  main.jsx         # React entry point
```

## Customization
- **Colors & Styles:** Easily adjust colors and spacing using Tailwind utility classes or by editing `tailwind.config.js`.
- **Images:** Replace images in `src/assets/images` and icons in `src/assets/icons` as needed.
- **Content:** Update text and product data in the `constants` directory.

## Deployment
You can deploy this app to Vercel, Netlify, or any static hosting provider that supports React/Vite apps.

## License
This project is for educational/demo purposes. Please replace branding and assets if using for production.
