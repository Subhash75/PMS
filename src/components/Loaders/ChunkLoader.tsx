import "./loaders.css";

const ChunkLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <span className="absolute -top-4 -left-4 -right-4 -bottom-4  rounded-2xl animate-border-tracing loading-animation"></span>
        <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-ideaColor font-Montserrat tracking-widest">
          PMS
        </span>
      </div>
    </div>
  );
};

export default ChunkLoader;
