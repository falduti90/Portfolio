import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 mx-auto max-w-6xl px-6 py-12 border-t border-neutral-900"
    >
      {/* Contenedor con perspectiva 3D más intensa */}
      <div className="group perspective-1500">
        {/* Tarjeta principal con efecto 3D más pronunciado */}
        <motion.div
          className="relative rounded-3xl overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500"
          initial={{ rotateY: 0, rotateX: 0 }}
          whileHover={{ 
            rotateY: 10, 
            rotateX: -5,
            boxShadow: "0 35px 60px -15px rgba(168, 85, 247, 0.6)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ 
            transformStyle: "preserve-3d",
          }}
        >
          {/* Brillo más intenso y grande */}
          <span className="pointer-events-none absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out translate-x-0 group-hover:opacity-100 group-hover:translate-x-[200%]" />
          
          {/* Contenido con elevación 3D más marcada */}
          <motion.div
            className="relative z-10 rounded-[calc(1.5rem-2px)] bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 p-8 md:p-10"
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)" // Más profundidad
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Presentación
            </motion.h2>

            {/* Contenedor de párrafos con más espacio y efectos 3D */}
            <motion.div 
              className="space-y-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Primer párrafo con efecto 3D más intenso */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/70 border-l-4 border-cyan-500 shadow-2xl"
                initial={{ opacity: 0, y: 40, rotateX: -15, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 8,
                  rotateX: 5,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -10px rgba(6, 182, 212, 0.6)",
                  borderLeftColor: "rgb(236, 72, 153)",
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ 
                  transformStyle: "preserve-3d",
                }}
              >
                <p className="text-neutral-200 text-lg">
                  Soy Matías, desarrollador orientado a resultados. Trabajo con <strong className="text-cyan-400">.NET Core</strong> y
                  <strong className="text-cyan-400"> SQL Server</strong> para diseñar APIs y servicios robustos, rápidos y fáciles de mantener.
                  Integro sistemas (Softland ERP, WMS, WhatsApp Business) y automatizo procesos con trazabilidad end-to-end.
                </p>
              </motion.div>

              {/* Segundo párrafo con efecto 3D más intenso */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/70 border-l-4 border-fuchsia-500 shadow-2xl"
                initial={{ opacity: 0, y: 40, rotateX: -15, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: -8,
                  rotateX: 5,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -10px rgba(236, 72, 153, 0.6)",
                  borderLeftColor: "rgb(6, 182, 212)",
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ 
                  transformStyle: "preserve-3d",
                }}
              >
                <p className="text-neutral-200 text-lg">
                  Me involucro con el negocio: defino métricas, mido impacto y reduzco tiempos operativos.
                  Dejo monitoreo, alertas y documentación para que todo sea observable, escalable y sostenible.
                </p>
              </motion.div>

              {/* Tercer párrafo con efecto 3D más intenso */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/70 border-l-4 border-cyan-400 shadow-2xl"
                initial={{ opacity: 0, y: 40, rotateX: -15, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -10px rgba(6, 182, 212, 0.6)",
                  borderLeftColor: "rgb(236, 72, 153)",
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ 
                  transformStyle: "preserve-3d",
                }}
              >
                <p className="text-neutral-200 text-lg">
                  Pero no todo es código: soy fanático del automovilismo, corro en karting y también en simuladores.
                  Me encanta entrenar, hacer deporte y mantenerme activo. Creo que la disciplina y la constancia que aplico
                  en lo personal también se reflejan en cómo encaro cada proyecto.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}