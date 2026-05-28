export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100">
      {/* daisyUI Loading Spinner */}
      <span className="loading loading-dots loading-xs"></span>
      <p className="mt-4 text-sm font-medium text-base-content/70 tracking-widest animate-pulse">
        LOADING PORTFOLIO...
      </p>
    </div>
  );
}