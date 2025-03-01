import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/search" className="nav-link">Search</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </div>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />\
                </Routes>
            </div>
        </Router>
    );
}

// Dummy Homepage
function Home() {
    return (
        <div>
            <h1> Welcome to JAY's NOOK </h1>
            <p>Your cozy corner for books and stories.</p>
            <div className="card">
                <h2>📚 Featured Books</h2>
                <ul>
                    <li>"The Secret Garden" by Frances Hodgson Burnett</li>
                    <li>"Anne of Green Gables" by L.M. Montgomery</li>
                    <li>"Little Women" by Louisa May Alcott</li>
                </ul>
            </div>
        </div>
    );
}

// Dummy Login Page
function Login() {
    return (
        <div>
            <h1> Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
}

// Dummy Register Page
function Register() {
    return (
        <div>
            <h1> Register</h1>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
}

// Dummy Search Page
function Search() {
    return (
        <div>
            <h1> Search for Books</h1>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            <div className="card">
                <h2> Results</h2>
                <ul>
                    <li>"The Night Circus" by Erin Morgenstern</li>
                    <li>"The Book Thief" by Markus Zusak</li>
                </ul>
            </div>
        </div>
    );
}

// Dummy Profile Page
function Profile() {
    return (
        <div>
            <h1> User Profile</h1>
            <div className="card">
                <p><strong>Name:</strong> Osasere Obazogbon </p>
                <p><strong>Email:</strong> osasereobazogbon@gmail.com</p>
                <h2>Order History</h2>
                <ul>
                    <li>Order #4321 - "Pride and Prejudice"</li>
                    <li>Order #8765 - "The Great Gatsby"</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
