export default function PostCard({
  title,
  body,
  color, // Aquí recibimos el color como prop
}: {
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 transition-transform transform hover:scale-105">
      <div className="h-40 bg-cover bg-center rounded-t-xl"></div>
      <div className="p-4">
        {/* Aquí aplicamos el color al título */}
        <h3 className="font-semibold text-lg" style={{ color }}>{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{body}</p>
      </div>
      
    </div>
  );
}
