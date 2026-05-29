"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme("dark")
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home") 
  useEffect(() => {
    setMounted(true)
  }, [])
  //  
 
  const scrollToSection = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
     
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", 
      });
    }

    const sidebarToggle = document.getElementById("portfolio-sidebar");
    if (sidebarToggle && sidebarToggle.checked) {
      sidebarToggle.checked = false;
    }
  };


  useEffect(() => {
   
    // First, I will check whether the user has previously visited, changed the theme, and saved it.
     const savedTheme = localStorage.getItem("theme");
     if (savedTheme) {
      // If a theme (dark or light) has already been saved, that is what will be displayed.
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // And if the user is visiting for the very first time (i.e., no saved theme exists),
       // then we will force-set 'dark' mode as the default!
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }


    const sections = ["home", "about", "skills", "projects", "contact"]
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", 
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect() 
  }, [])

  if (!mounted) return null

  // Toggle theme 
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); 
  };


  const renderNavLinks = (isSidebar = false) => {
    const links = [
      { id: "home", label: "Home",item:'home' },
      { id: "about", label: "About",item:'about' },
      { id: "skills", label: "Skills" ,item:'skills' },
      { id: "projects", label: "Projects",item:'projects' },
      { id: "contact", label: "Contact",item:'contact' },
    ]

    return links.map((link) => {
      const isActive = activeSection === link.id
      return (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className={`transition-all duration-300 ${
              isActive 
                ? "text-primary font-medium bg-base-200 md:bg-transparent  md:border-primary rounded-none" 
                : "hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        </li>
      )
    })
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-base-100/80 backdrop-blur-md shadow-md">
      <div className="drawer drawer-end">
      <input id="portfolio-sidebar" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col sticky top-0 z-40 backdrop-blur bg-base-100/80">
        {/*  */}
        <div className="w-full navbar px-4 md:px-8 py-3 shadow-sm">
          
          {/*  */}
          <div className="flex-1">
            <a href="#home" className="text-2xl font-bold tracking-wider text-primary">
              <span className="text-secondary">TA</span>
            </a>
          </div>

          {/*  */}
          <div className="flex-none hidden md:flex mx-auto">
            <ul className="menu menu-horizontal px-1 font-medium gap-2">
              {renderNavLinks()}
            </ul>
          </div>

          {/*  */}
          <div className="flex-none gap-2">
            {/* Theme toggle*/}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle hidden sm:inline-flex"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 16.243l.707.707M8.343 6.343l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            {/*  */}
            <label htmlFor="portfolio-sidebar" className="btn btn-ghost btn-circle drawer-button md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </label>
          </div>

        </div>
      </div>

      {/*(Sidebar Menu) */}
      <div className="drawer-side z-50">
        <label htmlFor="portfolio-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-6 w-60 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-primary">Menu</span>
              <label htmlFor="portfolio-sidebar" className="btn btn-sm btn-circle btn-ghost">✕</label>
            </div>
            
            <ul className="menu menu-vertical gap-4 text-lg font-medium">
              {renderNavLinks(true)}
            </ul>
          </div>

          <div className="text-xs text-center opacity-50">
            © {new Date().getFullYear()} Tanjid Hasan
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}