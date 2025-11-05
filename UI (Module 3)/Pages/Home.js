// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  MapPin,
  TrendingUp,
  Shield,
  MessageCircle,
  X,
} from "lucide-react";
import "./Home.css";
import IndiaMap from "../components/shared/IndiaMap";
import ChatBot from "../components/shared/ChatBot";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <HomeIcon size={28} />
            <span>EstateAI</span>
          </div>
          <div className="nav-links">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-btn">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your <span className="gradient-text">Dream Home</span> with
            AI-Powered Insights
          </h1>
          <p className="hero-description">
            Discover the perfect property with intelligent price predictions,
            comprehensive listings across India's major cities, and direct
            seller connections.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary-large">
              Start Exploring
            </Link>
            <Link to="/login" className="btn-secondary-large">
              Sign In
            </Link>
          </div>

          <div className="features-grid-mini">
            <div className="feature-mini">
              <TrendingUp size={24} />
              <span>AI Price Predictions</span>
            </div>
            <div className="feature-mini">
              <MapPin size={24} />
              <span>7 Major Cities</span>
            </div>
            <div className="feature-mini">
              <Shield size={24} />
              <span>Verified Listings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-container">
          <h2 className="section-title">Explore Properties Across India</h2>
          <p className="section-subtitle">
            Click on a city to discover available properties in that location
          </p>
          <IndiaMap />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose EstateAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Predictions</h3>
              <p>
                Get accurate price estimates using advanced machine learning
                models trained on real market data.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏘️</div>
              <h3>Wide Coverage</h3>
              <p>
                Properties across Bangalore, Mumbai, Delhi, Chennai, Hyderabad,
                Kolkata, and Lucknow.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Direct Seller Contact</h3>
              <p>
                Connect directly with property owners through phone, email, or
                WhatsApp.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Smart Favourites</h3>
              <p>
                Save properties you love and let sellers know you're interested.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Seller Analytics</h3>
              <p>
                Sellers get insights on property performance and interested
                buyers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>
                Your data is protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Perfect Property?</h2>
          <p>Join thousands of buyers and sellers using EstateAI</p>
          <Link to="/register" className="cta-button">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <HomeIcon size={24} />
            <span>EstateAI</span>
          </div>
          <p>
            © 2024 EstateAI. Powered by AI for smarter real estate decisions.
          </p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="chat-fab" onClick={() => setShowChat(!showChat)}>
        {showChat ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Widget */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Home;
