# Interactive Quote Generator

A beautiful, interactive portfolio website featuring an inspirational quote generator with magical cursor effects. Built with Express.js backend and vanilla JavaScript frontend.

## ✨ Features

- **Random Quote Generator**: Displays inspirational quotes from a curated collection of 500 quotes
- **Interactive UI**: Click anywhere to get a new random quote
- **Magical Cursor Effect**: Colorful sprinkles follow your mouse cursor as you move
- **Dynamic Backgrounds**: Random background images change with each quote
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Styling**: Beautiful gradient overlays and smooth animations

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Styling**: Bootstrap 5.3.8
- **Fonts**: Google Fonts (Playfair Display, Sansita, Lato, Amiko)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Background images and cursor assets
│   ├── index.html       # Main HTML file
│   ├── main.js          # Frontend JavaScript logic
│   └── style.css        # Styling and animations
├── quotes_500.min.json  # Quote database (500 quotes)
├── server.js            # Express.js server
├── package.json         # Project dependencies
└── README.md           # This file
```

## 🎯 Usage

- **Get a new quote**: Click anywhere on the page
- **Interactive effect**: Move your mouse to see colorful sprinkles
- **API endpoint**: Access quotes programmatically at `/api/quote`

## 🔌 API Endpoints

### GET `/api/quote`
Returns a random quote from the collection.

**Response:**
```json
{
  "Quote": "Love is the beauty of the soul.",
  "Author": "Plato"
}
```

## 🎨 Customization

### Changing Background Images
Replace images in `public/images/` directory. Name them as `bg-1.jpg`, `bg-2.jpg`, etc. (up to `bg-9.jpg`).

### Adding More Quotes
Edit `quotes_500.min.json` to add or modify quotes. Ensure the JSON structure follows:
```json
[
  {
    "Quote": "Your quote here",
    "Author": "Author Name"
  }
]
```

### Modifying Colors
Edit the sprinkle colors in `public/style.css`:
- Red sprinkle: `.sprinkle.red`
- Blue sprinkle: `.sprinkle.blue`
- Yellow sprinkle: `.sprinkle.yellow`

## 🚢 Deployment

### Deploy to Heroku
1. Create a `Procfile` in the root directory:
   ```
   web: node server.js
   ```
2. Update the port in `server.js` to use environment variable:
   ```javascript
   const port = process.env.PORT || 3000
   ```
3. Deploy using Heroku CLI or GitHub integration

### Deploy to Vercel/Netlify
For static hosting, you may need to configure the server as a serverless function or use a different deployment approach.

## 📝 Scripts

- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm test` - Run tests (currently not configured)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sufyan Ikram**
- GitHub: [@sufyanikramofficial](https://github.com/yourusername)

## 🙏 Acknowledgments

- Quotes sourced from various inspirational collections
- Bootstrap for responsive UI components
- Google Fonts for beautiful typography

---

⭐ If you found this project helpful, please consider giving it a star!

