

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-base-200 text-base-content border-t border-base-content/5 py-8 mt-12 rounded-t-3xl">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-tight">
            Tanjid<span className="text-primary">.dev</span>
          </span>
          <p className="text-xs sm:text-sm text-base-content/60 mt-1 max-w-xs sm:max-w-sm">
            Creating seamless user experiences with modern full-stack technologies.
          </p>
        </div>

        <div className="flex items-center gap-6 justify-center">
          
          {/* */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanjidkhan.dev@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-base-100 hover:bg-primary/10 text-base-content/70 hover:text-primary rounded-xl border border-base-content/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
            title="Email Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>

          {/*  */}
          <a 
            href="https://wa.me/8801831562894"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-base-100 hover:bg-green-500/10 text-base-content/70 hover:text-green-500 rounded-xl border border-base-content/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
            title="WhatsApp Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.976 14.076  Bristout 12.01 1.97c-5.442 0-9.866 4.372-9.87 9.802 0 1.689.445 3.333 1.296 4.789l-.973 3.555 3.644-.943zm10.742-7.077c-.295-.148-1.748-.859-2.015-.954-.267-.099-.461-.148-.655.148-.194.297-.749.954-.919 1.143-.17.189-.341.213-.636.065-.295-.148-1.248-.46-2.378-1.461-.877-.78-1.47-1.744-1.642-2.04-.17-.296-.018-.456.13-.603.133-.132.295-.346.442-.519.148-.173.197-.297.296-.495.099-.198.05-.371-.025-.519-.075-.148-.655-1.574-.896-2.153-.235-.567-.476-.49-.655-.491-.168-.002-.362-.003-.557-.003-.195 0-.513.073-.78.363-.268.296-1.02 1.012-1.02 2.467 0 1.456 1.06 2.861 1.208 3.058.147.198 2.086 3.167 5.053 4.434.706.301 1.257.482 1.687.617.709.224 1.353.193 1.863.118.569-.085 1.748-.709 1.992-1.392.243-.684.243-1.269.171-1.392-.072-.123-.267-.197-.561-.345z" />
            </svg>
          </a>
          <a 
            href="www.linkedin.com/in/md-tanjid-khan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-base-100 hover:bg-blue-500/10 text-base-content/70 hover:text-blue-500 rounded-xl border border-base-content/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
            title="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

        </div>
        <div className="text-center md:text-right border-t md:border-t-0 border-base-content/5 pt-4 md:pt-0 w-full md:w-auto">
          <p className="text-xs text-base-content/50 font-medium">
            © {currentYear} Md. Tanjid Hasan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}