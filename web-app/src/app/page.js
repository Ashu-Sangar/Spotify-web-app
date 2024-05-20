"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../app/pageStyle.css';
import { MusicNotes } from '@/components/MusicNotes';
import { SpotifyComponent } from '@/api/spotify';

const Page = () => {
  const textColors = [
    '#FF355E', '#FF6EFF', '#FFFF66', '#66FF66', '#50BFE6',
    '#FF00CC', '#FF6037', '#FF9933', '#CCFF00', '#AAF0D1',
    '#FF5050', '#FFD700', '#00CCFF', '#FA5B3D', '#FF0099',
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const message = "Explore Your Music";

  useEffect(() => {
    setDisplayText(""); // Reset the display text when the component mounts or the message changes
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        const nextChar = message[charIndex]; // Get the next character from the message
        if (nextChar !== undefined) { // Check if nextChar is not undefined
          setDisplayText((prev) => prev + nextChar);
        }
        charIndex++;
      } else {
        clearInterval(typingInterval); // Clear interval when the end of the message is reached
      }
    }, 100);
  
    return () => clearInterval(typingInterval);
  }, [message]);

  const currentColor = textColors[currentColorIndex];

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      setCurrentColorIndex(prev => (prev + 1) % textColors.length);
    }, 2000); // Changes color every 2 seconds

    return () => clearInterval(colorChangeInterval);
  }, []);

  return (
    <>
      <Head>
        <title>Spotify Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.landingPage} flex flex-col items-center justify-center min-h-screen p-4`} style={{ backgroundColor: '#000' }}>
        <MusicNotes count={15} />
        <section className={`${styles.heroSection} text-center`}>
          <h1 style={{ color: currentColor, transition: 'color 0.5s' }} className="text-6xl font-bold mt-5">
            {displayText}
          </h1>
          <p className="text-md mt-4 text-white">
            Visualize your Spotify favorites in a whole new way.
          </p>
        </section>
        <section className={`${styles.featuresSection} mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className={`${styles.featureCard} p-6`}>
              <h2 className="text-2xl font-semibold text-white">Interactive Experience</h2>
              <p>Engage with your music in a whole new way.</p>
            </div>
            <div className={`${styles.featureCard} p-6`}>
              <h2 className="text-2xl font-semibold">Share with Friends</h2>
              <p>Show off your unique music taste with easily shareable visuals.</p>
            </div>
          </div>
        </section>
        <section className={`${styles.pulseAnimation} mt-12`}>
          <SpotifyComponent />
        </section>
      </main>
    </>
  );
}

export default Page;