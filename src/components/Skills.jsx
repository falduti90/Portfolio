import { motion } from "framer-motion";
import { useRef, useState } from "react";

const skills = {
  Backend: [".NET Core", "C#", "REST APIs", "Workers/Services","C++","Visual Basic"],
  "Bases de datos": ["SQL Server", "T-SQL", "Índices/Planes", "SSRS","MySQL"],
  Integraciones: ["Softland ERP", "WMS", "WhatsApp Business API"],
  DevOps: ["Jobs SQL Agent", "Windows Services", "Logging (Serilog)", "Git/CI","GitHub"],
  Frontend: ["HTML", "CSS/Tailwind", "JavaScript","React"],
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const containerRef = useRef(null);

  // Nueva paleta de colores - Verde/Esmeralda y Naranja/Ámbar
  const categoryColors = {
    Backend: { primary: "rgb(16, 185, 129)", secondary: "rgba(16, 185, 129, 0.1)", gradient: "from-emerald-500 to-green-500" },
    "Bases de datos": { primary: "rgb(245, 158, 11)", secondary: "rgba(245, 158, 11, 0.1)", gradient: "from-amber-500 to-orange-500" },
    Integraciones: { primary: "rgb(59, 130, 246)", secondary: "rgba(59, 130, 246, 0.1)", gradient: "from-blue-500 to-indigo-500" },
    DevOps: { primary: "rgb(239, 68, 68)", secondary: "rgba(239, 68, 68, 0.1)", gradient: "from-red-500 to-rose-500" },
    Frontend: { primary: "rgb(168, 85, 247)", secondary: "rgba(168, 85, 247, 0.1)", gradient: "from-purple-500 to-fuchsia-500" },
  };

  // Íconos personalizados para cada categoría
  const categoryIcons = {
    Backend: "⚙️",
    "Bases de datos": "🗄️",
    Integraciones: "🔗",
    DevOps: "🚀",
    Frontend: "🎨"
  };

  return (
    <section 
      id="skills" 
      className="relative mx-auto max-w-6xl px-6 py-20 border-t border-neutral-900 overflow-hidden"
      ref={containerRef}
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
      }}
    >
      {/* Fondo único con patrones geométricos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px'
        }} />
      </div>

      {/* Efecto de partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-1 h-1 bg-amber-400 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Cabecera con efecto especial */}
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Efecto de destello detrás del título */}
        <div className="absolute inset-0 flex justify-center">
          <motion.div
            className="w-64 h-64 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ background: "linear-gradient(45deg, #10b981, #f59e0b)" }}
          />
        </div>

        <motion.h2 
          className="text-5xl font-bold mb-6 relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(45deg, #10b981, #f59e0b, #10b981)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradientShift 3s ease infinite"
          }}
        >
          Habilidades Técnicas
        </motion.h2>

        <motion.p 
          className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Tecnologías y herramientas que utilizo para crear soluciones robustas y escalables
        </motion.p>

        {/* Línea decorativa */}
        <motion.div
          className="w-24 h-1 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ background: "linear-gradient(90deg, #10b981, #f59e0b)" }}
        />
      </motion.div>

      {/* Navegación de categorías estilo píldoras modernas */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {Object.keys(skills).map((category) => (
          <motion.button
            key={category}
            className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category 
                ? "text-white shadow-lg" 
                : "text-neutral-400 hover:text-neutral-300 bg-neutral-900/50 backdrop-blur-sm"
            }`}
            style={{
              background: activeCategory === category 
                ? `linear-gradient(135deg, ${categoryColors[category].primary}20, ${categoryColors[category].secondary})`
                : "",
              border: activeCategory === category 
                ? `1px solid ${categoryColors[category].primary}40` 
                : "1px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
          >
            <span className="text-lg">{categoryIcons[category]}</span>
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Contenedor de habilidades - Diseño de tarjetas hexagonales */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Efecto de gradiente detrás de las tarjetas */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{ 
            background: `linear-gradient(45deg, ${categoryColors[activeCategory].primary}20, transparent)`
          }}
        />

        {/* Grid de habilidades con diseño hexagonal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              {/* Tarjeta hexagonal con efecto 3D */}
              <motion.div
                className="p-6 rounded-2xl border relative overflow-hidden"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  rotateY: 3,
                  boxShadow: `0 20px 40px -10px ${categoryColors[activeCategory].primary}30,
                              0 0 20px ${categoryColors[activeCategory].primary}15`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.9))",
                  border: `1px solid ${categoryColors[activeCategory].primary}30`,
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Efecto de esquina */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${categoryColors[activeCategory].primary} 50%)`
                  }}
                />

                {/* Contenido */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[activeCategory].primary}20, ${categoryColors[activeCategory].secondary})`,
                      border: `1px solid ${categoryColors[activeCategory].primary}30`
                    }}
                  >
                    <span>{skill.includes(".NET") ? "⚙️" : 
                           skill.includes("SQL") ? "🗄️" : 
                           skill.includes("API") ? "🔗" : 
                           skill.includes("Dev") ? "🚀" : "💻"}</span>
                  </div>

                  <div className="flex-1">
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ color: categoryColors[activeCategory].primary }}
                    >
                      {skill}
                    </h3>
                    
                    {/* Nivel de experiencia con puntos */}

                  </div>
                </div>

                {/* Efecto de brillo al hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${categoryColors[activeCategory].primary}05, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contador de habilidades */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium"
            style={{
              background: `linear-gradient(135deg, ${categoryColors[activeCategory].primary}15, ${categoryColors[activeCategory].secondary})`,
              border: `1px solid ${categoryColors[activeCategory].primary}30`,
              color: categoryColors[activeCategory].primary
            }}
          >
            <span className="text-2xl">{categoryIcons[activeCategory]}</span>
            <span>{skills[activeCategory].length} habilidades en <strong>{activeCategory}</strong></span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}