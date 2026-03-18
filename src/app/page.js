"use client";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // ESTADOS PARA PAGINACIÓN
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        const data = await res.json();

        // PROCESAR: Ordenar por año (opcional)
        const dataProcesada = data.sort((a, b) => b.year - a.year);

        setMovies(dataProcesada);
      } catch (error) {
        console.error("Error recogiendo datos:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  // LÓGICA DE PAGINACIÓN
  // 1. Calcular los índices del grupo de 6
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  // 2. Cortar el array original para mostrar solo 6
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // 3. Calcular total de páginas
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  if (loading)
    return <div className="text-center mt-20 font-bold">Cargando...</div>;

  return (
    <main className="p-6">
      <h1 className="text-center text-6xl font-black mb-10 uppercase">
        Galería de Películas
      </h1>
      <h1 className="text-center text-6xl font-black mb-10 uppercase">
        de Viajes en el Tiempo
      </h1>
      {/* MOSTRAR PELÍCULAS (Solo las 6 procesadas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      <div className="flex justify-center items-center mt-12 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 hover:bg-blue-700 transition-colors"
        >
          Anterior
        </button>

        <span className="font-bold">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 hover:bg-blue-700 transition-colors"
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}
