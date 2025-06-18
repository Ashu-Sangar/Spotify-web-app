# Spotify Web App 🎵

A modern web application that allows users to visualize and interact with their Spotify music data in creative ways. Built with Next.js and Tailwind CSS, this app provides an engaging way to explore your favorite albums, artists, and upcoming events.

## ✨ Features

- **Spotify Authentication**: Secure login with your Spotify account
- **Interactive Music Visualization**: Beautiful animated interface with floating music notes
- **Top Albums Grid**: Create customizable grids of your most-played albums
  - Adjustable grid dimensions (1x1 to 10x10)
  - Randomize album positions
  - Download your album grid as PNG
  - Direct links to albums on Spotify
- **Top Artists**: View your most-listened-to artists
- **Upcoming Events**: Discover upcoming music events (in development)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **API Integration**: Spotify Web API
- **Additional Libraries**:
  - Axios for HTTP requests
  - html2canvas for image generation
  - React Router DOM for navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm, yarn, pnpm, or bun
- Spotify Developer Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Spotify-web-app.git
   cd Spotify-web-app
   ```

2. **Navigate to the web app directory**
   ```bash
   cd web-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Set up Spotify API credentials**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Add `http://localhost:3000/` to your app's redirect URIs
   - Create a `.env.local` file in the web-app directory:
   ```env
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

1. **Login**: Click "Get Started By Logging In" to authenticate with your Spotify account
2. **Explore Features**: After login, you'll see three main options:
   - **Top Albums**: Create and download visual grids of your favorite albums
   - **Top Artists**: View your most-played artists
   - **Upcoming Events**: Discover music events (feature in development)
3. **Customize**: Use the album grid controls to adjust size, randomize layout, and download your creation

## 🎨 Features in Detail

### Album Grid Visualization
- Creates beautiful grids from your most-played Spotify albums
- Adjustable grid size (1x1 up to 10x10 depending on available albums)
- Randomize button to shuffle album positions
- Download functionality to save your grid as a PNG image
- Direct links to albums on Spotify for easy listening

### Interactive UI
- Animated typing effect for the main title
- Color-changing text animations
- Floating musical notes background animation
- Smooth transitions and hover effects

## 📁 Project Structure

```
web-app/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── top-albums/      # Album grid page
│   │   ├── top-artists/     # Artists page
│   │   ├── upcoming-events/ # Events page
│   │   ├── layout.js        # Root layout
│   │   └── page.js          # Home page
│   ├── api/                 # API integration
│   │   └── spotify.js       # Spotify authentication & API calls
│   ├── components/          # Reusable components
│   │   ├── MusicNotes.js    # Floating notes animation
│   │   └── Navbar.js        # Navigation component
│   └── css/                 # Stylesheets
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind configuration
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file in the web-app directory:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to add your environment variables in your deployment platform's settings.