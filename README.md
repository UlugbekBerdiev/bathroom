# Bathroom Remodeling Website

A modern, responsive single-page website for a bathroom remodeling business built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Smooth scrolling navigation
- Project gallery
- Customer testimonials
- Quote request form with EmailJS integration
- Contact information section

## Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd bathroom-remodeling-website
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email template
   - Copy your Service ID, Template ID, and Public Key
   - Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Hook Form
- EmailJS
- React Icons
- React Scroll

## Project Structure

```
src/
  ├── components/     # React components
  ├── assets/        # Images and other static files
  ├── styles/        # CSS styles
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Deployment

The website can be easily deployed to platforms like Netlify or Vercel. Make sure to:

1. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

2. Set up environment variables in your hosting platform's dashboard

## License

MIT 