# 🍔 Food Ordering Website - Frontend Project

A fully functional food ordering website built with React, Tailwind CSS, and modern web technologies. This project demonstrates real-world UI/UX design, component architecture, and state management.

## 📋 Project Overview

Build a responsive food ordering website where users can:
- Browse food items and restaurants
- Search and filter foods by category
- Add/remove items to/from cart
- Manage cart quantities
- Place orders with delivery details
- Toggle between light and dark modes

---

## ✅ Blueprint Requirements - COMPLETE COVERAGE

### 1. Project Objective ✅
- [x] Responsive food ordering website
- [x] Browse food items with details
- [x] View restaurant menus
- [x] Add items to cart
- [x] Place orders (dummy order placement)

### 2. Tech Stack (Frontend Only) ✅
- [x] **HTML5** - Page structure
- [x] **CSS3 / Tailwind CSS** - Styling with Tailwind utility classes
- [x] **JavaScript (ES6+)** - Modern JavaScript
- [x] **React.js** - Component-based UI
- [x] **Axios / Fetch API** - Data handling (built-in with mock data)
- [x] **Local Storage** - Cart persistence

### 3. Core Features ✅
- [x] **Homepage with featured restaurants or food items** - Hero section + featured cards
- [x] **Menu page displaying food cards** - Grid layout with all items
- [x] **Search functionality for food items** - SearchBar component
- [x] **Add to Cart / Remove from Cart** - Full cart management
- [x] **Cart page with order summary** - Detailed cart with totals
- [x] **Checkout page (dummy order placement)** - Form with validation
- [x] **Responsive design for mobile and desktop** - Mobile-first approach

### 4. Pages Built ✅
1. [x] **Home Page** - Featured foods, categories, restaurants
2. [x] **Menu Page** - All food items with filtering & sorting
3. [x] **Food Details Page** - Description, price, rating, related items
4. [x] **Cart Page** - Items with quantity controls & order summary
5. [x] **Checkout Page** - Order confirmation with delivery details

### 5. Folder Structure ✅
```
src/
├── components/           # Reusable components
│   ├── Navbar.js        # Navigation & dark mode toggle
│   ├── FoodCard.js      # Food item card
│   ├── CartItem.js      # Cart item display
│   ├── SearchBar.js     # Search functionality
│   ├── CategoryFilter.js# Category filtering
│   └── SkeletonCard.js  # Loading skeleton
├── pages/               # Page components
│   ├── Home.js
│   ├── Menu.js
│   ├── FoodDetails.js
│   ├── Cart.js
│   └── Checkout.js
├── data/
│   └── foodData.js      # Mock food & restaurant data
├── App.js               # Main app component
├── App.css              # Custom styles
└── index.js
```

### 6. Important Components ✅
1. [x] **Navbar** - Navigation between pages, dark mode toggle, sticky header
2. [x] **FoodCard** - Displays food item with image, price, rating
3. [x] **CartItem** - Shows item in cart with quantity controls
4. [x] **SearchBar** - Real-time search filter
5. [x] **CategoryFilter** - Filter by veg/non-veg/dessert

### 7. UI/UX Expectations ✅
- [x] **Modern card-based design** - Clean card layouts with shadows
- [x] **Hover animations on food items** - Scale & shadow effects
- [x] **Clear Add to Cart button** - Prominent & interactive
- [x] **Sticky navbar** - Fixed navigation header
- [x] **Responsive grid layout** - Mobile-optimized grid

### 8. Extra Mid-Level Features (Optional but Recommended) ✅
- [x] **Filter food by category (veg / non-veg / dessert)** - Full implementation
- [x] **Sort by price or rating** - Sort dropdown on menu
- [x] **Loading skeleton UI** - SkeletonCard component
- [x] **Cart item quantity update** - +/- buttons
- [x] **Dark mode toggle** - Theme switcher in navbar

### 9. What This Project Demonstrates ✅
- [x] **Real-world UI development skills** - Professional design patterns
- [x] **Component architecture understanding** - Modular, reusable components
- [x] **State management** - React hooks (useState, useEffect, useContext)
- [x] **Responsive design ability** - Mobile-first Tailwind CSS
- [x] **Practical React development experience** - Routing, props, lifting state

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```bash
cd /home/sama/Desktop/itern/food-ordering-app
npm install
```

### Running the App
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```

---

## 📦 Tech Stack Used
- **React 18** - UI Library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Local Storage API** - Persistent cart data

---

## 🎨 Features Implemented

### Navigation & Layout
- ✅ Sticky navigation bar
- ✅ Dark mode toggle
- ✅ Mobile-responsive menu
- ✅ Active page indicators

### Home Page
- ✅ Hero banner section
- ✅ Featured restaurants grid
- ✅ Popular foods section
- ✅ Category buttons
- ✅ Call-to-action buttons

### Menu Page
- ✅ Search bar with real-time filtering
- ✅ Category filter buttons
- ✅ Sort dropdown (price, rating)
- ✅ Food cards grid
- ✅ Results counter

### Food Details Page
- ✅ Large product image
- ✅ Full description
- ✅ Price & ratings
- ✅ Add to cart functionality
- ✅ Related items suggestions
- ✅ Breadcrumb navigation

### Cart Management
- ✅ View all cart items
- ✅ Adjust quantities (+/- buttons)
- ✅ Remove items
- ✅ Clear entire cart
- ✅ Order summary with calculations
- ✅ Delivery fee logic
- ✅ Tax calculation

### Checkout
- ✅ Personal details form (name, email, phone)
- ✅ Delivery address form
- ✅ Payment method selection
- ✅ Form validation
- ✅ Order confirmation page
- ✅ Order summary display

### Data & Storage
- ✅ 16+ food items with details
- ✅ 6+ restaurants with info
- ✅ Local storage for cart persistence
- ✅ Local storage for dark mode preference

---

## 📊 Project Statistics
- **Components:** 6 reusable components
- **Pages:** 5 full-featured pages
- **Food Items:** 16 items across 4 categories
- **Restaurants:** 6 restaurants
- **Lines of Code:** 2000+

---

## ✨ Highlights
✅ **100% Blueprint Compliance** - All requirements covered
✅ **Production-Ready Code** - Clean, modular, maintainable
✅ **Fully Responsive** - Works on mobile, tablet, desktop
✅ **Dark Mode Support** - Complete theme switching
✅ **State Persistence** - Cart & preferences saved locally
✅ **User-Friendly** - Intuitive UI/UX with animations
✅ **Professional Design** - Modern card-based layout

---

## 🔗 Live Demo
- Local: http://localhost:3000
- Network: http://172.18.18.161:3000

---

## 📝 License
This project is open source and available for learning and portfolio purposes.

---

**Happy ordering! 🍕🍔🍰**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
