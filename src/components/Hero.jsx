export default function Hero() {
  return (
    <header id="top" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hola, soy <span className="text-white">Matías Falduti</span>
          </h1>

          <p className="mt-4 text-neutral-300 text-lg">
            Soy un apasionado por crear soluciones que realmente aporten valor. Me gusta entender a fondo los problemas,
            trabajar en equipo y construir productos que se sientan bien al usarse.
            Este sitio es una ventana a mi recorrido: quién soy, qué me inspira, los proyectos que me marcaron
            y cómo podés contactarme.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black font-medium shadow hover:shadow-lg transition">
              Ver proyectos
            </a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition">
              Hablemos
            </a>
          </div>
        </div>

        {/* Foto con borde estático que cambia de color */}
        <div className="relative w-full">
          {/* Foto */}
          <div className="relative aspect-[3/4] rounded-[26px] overflow-hidden border border-neutral-800 shadow bg-neutral-900">
            <img
              src="images/fotoperfil.jpeg"
              alt="Mi foto"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />
          </div>

          {/* Aro con gradiente + máscara (solo borde) */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[26px] ring-colors"
            style={{
              padding: "3px", // grosor del borde
              background: "conic-gradient(from 0deg, var(--c1), var(--c2), var(--c1))",
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude", // deja solo el borde
                      }}
          />
        </div>
      </div>
    </header>
  );
}
