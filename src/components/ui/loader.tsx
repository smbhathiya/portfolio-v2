export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-primary rounded-full opacity-75 animate-ping"></div>
        <div className="absolute inset-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute inset-4 bg-white dark:bg-black rounded-full"></div>
      </div>
    </div>
  );
}
