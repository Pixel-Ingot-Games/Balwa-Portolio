'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  position?: 'left' | 'right';
  items: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: string[];
  logoUrl?: string;
  accentColor?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  alwaysOpen?: boolean;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  colors = ['#B19EEF', '#5227FF'],
  logoUrl,
  accentColor = '#ff6b6b',
  onMenuOpen,
  onMenuClose,
  alwaysOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(alwaysOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (alwaysOpen) {
      setIsOpen(true);
      onMenuOpen?.();
    }
  }, [alwaysOpen, onMenuOpen]);

  const toggleMenu = () => {
    if (alwaysOpen) return;
    
    const newState = !isOpen;
    setIsOpen(newState);
    
    if (newState) {
      onMenuOpen?.();
    } else {
      onMenuClose?.();
    }
  };

  if (!mounted) return null;

  const menuStyle = {
    position: 'fixed' as const,
    top: 0,
    [position]: 0,
    height: '100vh',
    width: isOpen ? '320px' : '60px',
    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column' as const,
    padding: isOpen ? '2rem' : '1rem',
    boxShadow: position === 'right' 
      ? '-4px 0 20px rgba(0,0,0,0.15)' 
      : '4px 0 20px rgba(0,0,0,0.15)',
  };

  const buttonStyle = {
    position: 'absolute' as const,
    top: '2rem',
    [position === 'right' ? 'left' : 'right']: isOpen ? '1rem' : '0.75rem',
    background: 'transparent',
    border: 'none',
    color: changeMenuColorOnOpen ? (isOpen ? openMenuButtonColor : menuButtonColor) : menuButtonColor,
    fontSize: '1.5rem',
    cursor: alwaysOpen ? 'default' : 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 1001,
    padding: '0.5rem',
    borderRadius: '50%',
    display: alwaysOpen ? 'none' : 'block',
  };

  return (
    <div style={menuStyle}>
      {!alwaysOpen && (
        <button
          onClick={toggleMenu}
          style={buttonStyle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '×' : '☰'}
        </button>
      )}

      {/* Logo Section */}
      {isOpen && logoUrl && (
        <div style={{ 
          marginBottom: '2rem', 
          textAlign: 'center',
          paddingTop: alwaysOpen ? '0' : '3rem'
        }}>
          <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ 
              maxWidth: '120px', 
              height: 'auto',
              filter: 'brightness(0) invert(1)'
            }} 
          />
        </div>
      )}

      {/* Navigation Items */}
      {isOpen && (
        <nav style={{ flex: 1, paddingTop: logoUrl ? '0' : (alwaysOpen ? '2rem' : '4rem') }}>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {items.map((item, index) => (
              <li 
                key={index}
                style={{
                  opacity: 0,
                  transform: 'translateX(20px)',
                  animation: `slideIn 0.6s ease forwards ${index * 0.1}s`,
                }}
              >
                <Link
                  href={item.link}
                  aria-label={item.ariaLabel}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {displayItemNumbering && (
                    <span style={{ 
                      marginRight: '1rem', 
                      opacity: 0.7,
                      fontSize: '0.9rem'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Social Links */}
      {isOpen && displaySocials && socialItems.length > 0 && (
        <div style={{ 
          marginTop: 'auto',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  minWidth: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accentColor;
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {social.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
