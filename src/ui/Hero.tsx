export default function Hero() {
  return (
    <div className="relative w-full mt- flex items-center justify-center h-96">
      {/* Imagen de fondo */}
      <img
        src="/hero.jpg"
        alt="Campamento de la Juventud"
        className="absolute z-0 object-cover w-full h-full"
      />
      {/* Overlay oscuro */}
      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>
      {/* Texto centrado */}
      <div className="z-20 text-center p-4">
        <h1 className="text-white text-5xl lg:text-8xl font-bold">YouthsCamp</h1>
        <p className="text-white text-2xl">Campamentos de Estaca</p>
      </div>
    </div>
  );
}