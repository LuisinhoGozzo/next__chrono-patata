// src/components/MovieCard.js
export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl border border-gray-200 dark:border-slate-700 flex flex-col h-full">
      
      <div className="w-full h-146 overflow-hidden flex-shrink-0">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* CONTENEDOR DE TEXTO (Abajo) */}
      <div className="p-4 flex flex-col flex-grow">
        <div>
          {/* Títulos */}
          <div className="mb-2">
            <h2 className="text-lg font-black leading-tight uppercase text-blue-700 dark:text-blue-400">
              {movie.title}
            </h2>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-0.5">
              {movie.spanishTitle}
            </p>
          </div>

          <div className="flex justify-between items-center mb-3">
             <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
              {movie.year}
            </span>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs">
              <span className="font-semibold text-gray-600 dark:text-gray-400 uppercase">Director:</span> {movie.director}
            </p>
            <p className="text-xs">
              <span className="font-semibold text-gray-600 dark:text-gray-400 uppercase">Actores:</span> {movie.actors.join(", ")}
            </p>
          </div>
        </div>

        {/* Separador sutil */}
        <hr className="my-3 border-gray-300 dark:border-slate-700" />

        {/* Sinopsis completa (sin line-clamp) */}
        <p className="text-sm text-gray-700 dark:text-gray-200 italic border-l-2 border-gray-300 dark:border-slate-600 pl-3 leading-relaxed">
          {movie.synopsis}
        </p>
      </div>
    </div>
  );
}