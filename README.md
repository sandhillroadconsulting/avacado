# avaca.do Landing Page

A premium landing page for avaca.do - Connecting Elite Asian Talent to the Fastest Growing Companies in Europe.

## Features

- Interactive world map showing talent migration from India to Europe
- Audience toggle between Employers and Employees
- Responsive design with mobile optimization
- Animated flight path between Bengaluru and Berlin
- Modern, clean UI with avocado-themed color scheme

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- react-simple-maps for map visualization
- Framer Motion for animations
- Inter and Space Grotesk fonts

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
  ├── components/
  │   ├── WorldMap.tsx      # Interactive map component
  │   └── AudienceToggle.tsx # Audience switcher
  ├── types/
  │   └── fonts.d.ts        # Font module declarations
  ├── App.tsx              # Main application component
  ├── index.css           # Global styles
  └── main.tsx            # Application entry point
```

## Customization

The landing page can be customized by:
1. Modifying the content object in `App.tsx`
2. Adjusting colors in `tailwind.config.js`
3. Updating map markers and paths in `WorldMap.tsx`

## License

MIT
