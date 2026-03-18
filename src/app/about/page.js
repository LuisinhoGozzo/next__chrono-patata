export default function About() {
  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <h2 className="text-6xl font-bold mb-6">Sobre este Proyecto</h2>
      <p className="text-3xl text-slate-500 mb-8">
        Esta aplicación fue diseñada para que usted pueda explorar el top 40 de mis películas favoritas de viajes en el tiempo.
      </p>
      <div className="bg-red-50 dark:bg-slate-800 p-6 rounded-2xl border border-blue-100 dark:border-slate-700">
        <p className="font-mono text-sm">
          Tecnologías utilizadas: Next.js, React y Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
