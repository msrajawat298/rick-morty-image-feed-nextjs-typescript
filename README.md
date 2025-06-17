# Rick and Morty Image Feed

A React/Next.js application that displays episodes and characters from the Rick and Morty API.

## Features

- **Episode Navigation**: Browse all episodes in the left sidebar
- **Character Display**: View character images and details in the main area
- **Interactive Selection**: Click episodes to see their characters
- **Responsive Design**: Clean, modern interface with hover effects
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/msrajawat298/rick-morty-image-feed-nextjs-typescript.git
cd rick-morty-image-feed-nextjs-typescript
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Initial Load**: The app displays all episodes in the left sidebar and the first page of characters in the main area.

2. **Episode Selection**: Click on any episode to:
   - Highlight the selected episode with a blue border
   - Load and display characters from that episode

3. **Episode Unselection**: Click on the currently selected episode to:
   - Remove the highlight
   - Return to the initial view showing the first page of characters

## API Integration

The app uses the Rick and Morty API:
- Episodes: `https://rickandmortyapi.com/api/episode`
- Characters: `https://rickandmortyapi.com/api/character`

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Styled JSX**: Component-scoped CSS
- **Rick and Morty API**: External data source

## Project Structure

```
├── components/
│   ├── EpisodeList.tsx      # Left sidebar episode navigation
│   └── CharacterGrid.tsx    # Main character display grid
├── lib/
│   └── api.ts              # API integration functions
│── page.tsx                # Main page component
├── styles/
│   └── globals.css         # Global styles
├── types/
│   └── api.ts              # TypeScript type definitions
└── README.md
```

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.
