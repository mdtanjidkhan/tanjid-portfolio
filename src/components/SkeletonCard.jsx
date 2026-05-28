export default function SkeletonCard() {
  return (
    <div className="w-full py-10 space-y-4">
      <div className="skeleton h-8 w-1/4 mx-auto mb-6"></div>
      
     
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-5/6"></div>
      <div className="skeleton h-4 w-2/3"></div>
      
      <div className="skeleton h-12 w-32 rounded-lg mx-auto mt-4"></div>
    </div>
  );
}