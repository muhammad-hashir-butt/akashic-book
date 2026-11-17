import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import SubjectsSidebar from "./components/SubjectsSidebar";
import HeroCarousel from "./components/HeroCarousel";
import HomeCards from "./components/HomeCards";
import EventsSidebar from "./components/EventsSidebar";
import BooksPage from "./components/BooksPage";
import AuthorsPage from "./components/AuthorsPage";
import NewsPage from "./components/NewsPage";
import EventsPage from "./components/EventsPage";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState("HOME");

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      
      {/* Global Full-Page Fixed Skyline Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          // Replace URL with '/images/skyline-bg.jpg' once you save your own image in public/images/
          backgroundImage: `linear-gradient(to bottom, rgba(168, 165, 142, 0.82), rgba(215, 220, 225, 0.78)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')`,
        }}
      />

      {/* 1. Top Dark Strip & 25% Off Corner Ribbon */}
      <TopBar />

      {/* 2. Header with Page Navigation */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* 3. Main Content Area (Switches between HOME, BOOKS, AUTHORS, NEWS & FEATURES, and EVENTS) */}
      <main className="max-w-[1140px] w-full mx-auto px-3 pb-10 flex-1">
        {activePage === "BOOKS" ? (
          <BooksPage />
        ) : activePage === "AUTHORS" ? (
          <AuthorsPage setActivePage={setActivePage} />
        ) : activePage === "NEWS & FEATURES" ? (
          <NewsPage setActivePage={setActivePage} />
        ) : activePage === "EVENTS" ? (
          <EventsPage setActivePage={setActivePage} />
        ) : (
          <div className="flex flex-col lg:flex-row items-start gap-4">
            {/* Left Column: Subjects + Featured Books */}
            <SubjectsSidebar />

            {/* Center White Box: Hero Banner + News & Insider + Social Cards */}
            <section className="flex-1 bg-white p-4 shadow-lg border border-gray-300 w-full">
              <HeroCarousel />
              <HomeCards />
            </section>

            {/* Right Column: Upcoming Events + Twitter Feed */}
            <EventsSidebar />
          </div>
        )}
      </main>

      {/* 4. Dark Classic Footer */}
      <Footer />

    </div>
  );
}