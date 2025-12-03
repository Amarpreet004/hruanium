"use client";
import React, { useEffect, useState } from 'react'
import IphoneUI from './crousel/iphoneui'
import  Link  from 'next/link';

// Styles object for component-specific styles
const styles = {
  container: {
    width: '98%',
    minHeight: '40vh',
    maxHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: '#5C0632',
    color: 'white',
    borderRadius: '2vw',
    boxShadow: '0 2vw 6vw rgba(0,0,0,0.18)',
    margin: '2vw auto',
    position: 'relative' as const,
  },
  content: {
    textAlign: 'center' as const,
    width: '100%',
    padding: '0 4%',
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '2vw',
    letterSpacing: '0.2vw',
    textShadow: '0.3vw 0.3vw 0.6vw rgba(0,0,0,0.4)',
    background: 'linear-gradient(45deg, #ffffff, #e2e8f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    opacity: 0.9,
    fontWeight: '300',
    lineHeight: '1.6',
    marginTop: '2vw',
  },
  badge: {
    display: 'inline-block',
    padding: '0.5vw 1.5vw',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '2vw',
    fontSize: 'clamp(0.7rem, 1vw, 1rem)',
    fontWeight: '500',
    marginBottom: '2vw',
    backdropFilter: 'blur(1vw)',
    border: '0.1vw solid rgba(255,255,255,0.3)',
  }
}


function DEV() {
  const [showIphone, setShowIphone] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowIphone(window.innerWidth >= 1000);
      setShowFeatures(window.innerWidth >= 620);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive styles for content centering
  const contentStyle = {
    ...styles.content,
    textAlign: (showIphone ? 'left' : 'center') as React.CSSProperties['textAlign'],
    width: showIphone ? '60%' : '100%',
    maxWidth: showIphone ? 'clamp(320px, 60vw, 700px)' : '700px',
    margin: showIphone ? undefined : '0 auto',
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
    alignItems: showIphone ? 'flex-start' : 'center',
    justifyContent: 'center',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
    justifyContent: showIphone ? 'flex-start' : 'center',
  };

  return (
    <div style={{ ...styles.container, flexDirection: showIphone ? 'row' : 'column', paddingLeft: 'clamp(1rem, 8vw, 7rem)', paddingRight: 'clamp(1rem, 8vw, 7rem)', justifyContent: showIphone ? 'flex-start' : 'center' }}>
      <div style={contentStyle}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '2.2rem',
          letterSpacing: '-1px',
          color: 'white',
        }}>
          {showIphone ? (
            <>
              Your ideas.<br />Our execution.<br />Zero stress.<br /> Full impact
            </>
          ) : (
            <>
              Your ideas. Our execution.<br />Zero stress. Full impact
            </>
          )}
        </h1>
        {showFeatures && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
              <span style={{ fontSize: '1.3em', marginRight: 12 }}>⚙️</span>
              End-to-End Expertise
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
              <span style={{ fontSize: '1.3em', marginRight: 12 }}>💲</span>
              Performance-Driven Design
            </li>
            <li style={{ display: 'flex', alignItems: 'center', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
              <span style={{ fontSize: '1.3em', marginRight: 12 }}>💬</span>
              Brand Amplification
            </li>
          </ul>
        )}
        <div style={buttonGroupStyle}>
           <Link href="/services">
          <button style={{
            background: 'white',
            color: '#181818',
            border: 'none',
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: '1.1rem',
            padding: '0.85rem 2.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}>Explore Services</button>
          </Link>
          <Link href="/contact/Bookcall">
          <button style={{
            background: '#232323',
            color: 'white',
            border: 'none',
            borderRadius: 9999,
            fontWeight: 500,
            fontSize: '1.1rem',
            padding: '0.85rem 2.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}>Get In Touch</button>
          </Link>
        </div>
      </div>
      {showIphone && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            minWidth: 0,
            marginLeft: '2.5rem',
            left: 'clamp(1rem, 8vw, 7rem)',
          }}
        >
          <IphoneUI />
        </div>
      )}
    </div>
  );
}

export default DEV