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

// Subject Pages
import BlackInterest from "./BooksPages/BlackInterest";
import BlackSheep from "./BooksPages/BlackSheep";
import CaribbeanInterest from "./BooksPages/CaribbeanInterest";
import Childrens from "./BooksPages/Childrens";
import DigitsEBooks from "./BooksPages/DigitsEBooks";
import EdgeOfSports from "./BooksPages/EdgeOfSports";
import EnemyBooks from "./BooksPages/EnemyBooks";
import Forthcoming from "./BooksPages/Forthcoming";
import GiftBooks from "./BooksPages/GiftBooks";
import GracieBelle from "./BooksPages/GracieBelle";

export default function App() {
  const [activePage, setActivePage] = useState("HOME");

  return (
    <div className="relative min-h-screen w-full flex flex-col">

      {/* Global Full-Page Fixed Skyline Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(168, 165, 142, 0.82), rgba(215, 220, 225, 0.78)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')`,
        }}
      />

      {/* Top Bar */}
      <TopBar />

      {/* Header Navigation */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Content */}
      <main className="max-w-[1140px] w-full mx-auto px-3 pb-10 flex-1">

        {activePage === "BLACK_INTEREST" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <BlackInterest />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "BLACK_SHEEP" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <BlackSheep />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "CARIBBEAN_INTEREST" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <CaribbeanInterest />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "CHILDRENS" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <Childrens />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "DIGITS_EBOOKS" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <DigitsEBooks />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "EDGE_OF_SPORTS" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <EdgeOfSports />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "ENEMY_BOOKS" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <EnemyBooks />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "FORTHCOMING" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <Forthcoming />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "GIFT_BOOKS" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <GiftBooks />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "GRACIE_BELLE" ? (

          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 min-w-0 w-full">
              <GracieBelle />
            </section>

            <EventsSidebar />

          </div>

        ) : activePage === "BOOKS" ? (

          <BooksPage />

        ) : activePage === "AUTHORS" ? (

          <AuthorsPage setActivePage={setActivePage} />

        ) : activePage === "NEWS & FEATURES" ? (

          <NewsPage setActivePage={setActivePage} />

        ) : activePage === "EVENTS" ? (

          <EventsPage setActivePage={setActivePage} />

        ) : (

          /* Home Page */
          <div className="flex flex-col lg:flex-row items-start gap-4">

            <SubjectsSidebar setActivePage={setActivePage} />

            <section className="flex-1 bg-white p-4 shadow-lg border border-gray-300 w-full">

              <HeroCarousel />

              <HomeCards />

            </section>

            <EventsSidebar />

          </div>

        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}