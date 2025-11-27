import { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DotGrid from './DotGrid'
import FloatingImages from './FloatingImages'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const handleHashLink = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      // On home page, let browser handle hash navigation
      return
    } else {
      // From other pages, navigate to home then scroll to hash
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <>
      <DotGrid />
      <FloatingImages count={9} />
      <div className="site-header">
        <div className="container nav-wrap">
          <div className="nav">
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="logo-badge">S</div>
              Samad Qamar
            </Link>
            <nav className="menu" aria-label="Primary">
              <Link to="/">ABOUT ME</Link>
              <span className="slash">/</span>
              <a href={isHomePage ? "#projects" : "/#projects"} onClick={(e) => handleHashLink('#projects', e)}>PROJECTS</a>
              <span className="slash">/</span>
              <a href={isHomePage ? "#skills" : "/#skills"} onClick={(e) => handleHashLink('#skills', e)}>SKILLS</a>
              <span className="slash">/</span>
              <a href={isHomePage ? "#roles" : "/#roles"} onClick={(e) => handleHashLink('#roles', e)}>EXPERIENCE</a>
            </nav>
            <div className="nav-cta">
              <a className="btn accent" href="/Resume.pdf" download="Samad_Qamar_Resume.pdf">VIEW RESUME</a>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

