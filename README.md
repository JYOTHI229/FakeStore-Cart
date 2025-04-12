# 🛒 Fake Store Cart - React E-commerce Web App

A **mobile-first**, fully responsive e-commerce application built with **React.js** and powered by the [Fake Store API](https://fakestoreapi.com/). This project demonstrates my front-end skills in authentication, API integration, dynamic routing, state management using Context API, and modern React best practices — designed for internship-level demonstration.

---

## ✅ Features

### 1. **User Authentication**
- Login with Fake Store API’s `/auth/login` endpoint
- JWT token stored in `localStorage`
- Redirects to product page after successful login
- Logout clears token and redirects to login page

### 2. **Product Listing Page**
- Fetches all products from `/products`
- Filter by category (`/products/category/:category`)
- Optional search functionality
- Mobile-first responsive grid layout

### 3. **Product Detail Page**
- Full product information (image, title, description, price)
- "Add to Cart" button functionality

### 4. **Cart Page**
- View all added products
- Update quantity or remove items
- Shows total price dynamically
- Checkout triggers a popup: “Order placed successfully!” that disappears after 4 seconds

### 5. **Header / Navigation**
- Links: Home | Cart | Logout
- Live cart item count

---

## 🧑‍💻 Tech Stack

- **Frontend**: React.js, React Router v6+, React Hooks
- **State Management**: Context API
- **Styling**: Plain CSS (Responsive, Mobile-first approach)
- **API**: [Fake Store API](https://fakestoreapi.com/)
