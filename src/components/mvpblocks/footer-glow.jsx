export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pb-8 pt-16">
  <style jsx global>{`
    .glass {
      backdrop-filter: blur(3px) saturate(180%);
      background: radial-gradient(circle, rgba(224, 242, 254, 0.3) 0%, rgba(191, 219, 254, 0.15) 60%, rgba(147, 197, 253, 0.1) 100%);
      border: 1px solid rgba(147, 197, 253, 0.15); /* soft blue border */
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      display: flex;
    }
    .glass:where(.dark, .dark *) {
      display: flex;
      backdrop-filter: blur(2px) !important;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(30, 58, 138, 0.04) 60%, rgba(15, 23, 42, 0.1) 100%) !important;
      border: 1px solid rgba(59, 130, 246, 0.08) !important;
      border-radius: 16px !important;
      justify-content: center !important;
      align-items: center !important;
    }
  `}</style>

  {/* Background glow elements */}
  <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-full -translate-x-1/2 select-none">
    <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
    <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>
  </div>

  {/* Main glass footer box */}
  <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
    <div className="flex flex-col items-center md:items-start">
      <a href="#" className="mb-4 flex items-center gap-2">
        <img src="/tokari-logo.png" alt="Tokari Logo" className="h-8 w-8" />
        <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
          Tokari Core
        </span>
      </a>
      <p className="mb-6 max-w-xs text-center text-sm text-gray-500 md:text-left">
        Tokari Core is the developer-first AI infrastructure that helps you integrate smart features into your apps — fast, affordable, and token-free.
      </p>
      <div className="mt-2 flex gap-3 text-blue-300">
        {/* Twitter */}
        <a href="https://x.com/realcw_bishop" aria-label="Twitter" className="transition hover:text-blue-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605A11.561 11.561 0 010 18.29c.373.044.734.074 1.12.074a8.189 8.189 0 005.065-1.737 4.102 4.102 0 01-3.834-2.85c.25.04.5.065.765.065.37 0 .734-.049 1.08-.147A4.092 4.092 0 01.8 8.582v-.05a4.119 4.119 0 001.853.522A4.099 4.099 0 01.812 5.847c0-.02 0-.042.002-.062a11.653 11.653 0 008.457 4.287A4.62 4.62 0 0122 5.924a8.215 8.215 0 002.018-.559 4.108 4.108 0 01-1.803 2.268 8.233 8.233 0 002.368-.648 8.897 8.897 0 01-2.062 2.112z" />
          </svg>
        </a>
        {/* GitHub */}
        <a href="https://github.com/crypticcodedeveloper" aria-label="GitHub" className="transition hover:text-blue-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29"></path>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/bishop-abraham/" aria-label="LinkedIn" className="transition hover:text-blue-100">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom text */}
  <div className="relative z-10 mt-10 text-center text-xs text-gray-500">
    <span>&copy; {new Date().getFullYear()} Tokari Core. Made with ❤️ by builders, for builders.</span>
  </div>
</footer>

  );
}

{/* <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Product
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </nav> */}