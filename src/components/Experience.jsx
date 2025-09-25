const experiencias = [
  {
    empresa: "Cromosol",
    rol: "Analista–Desarrollador (.NET Core · T-SQL · Integraciones Softland)",
    periodo: "nov. 2021 – Actualidad",
    puntos: [
      "Desarrollo, mantenimiento y optimización de sistemas internos (ventas, logística, stock y administración) sobre .NET Core + SQL Server integrados con Softland ERP.",
      "Optimización de SPs críticos (picking, ofertas, stock): reducción de tiempos mediante TVF in-line, OUTER APPLY y mejor uso de índices.",
      "Automatizaciones y jobs de sincronización Softland ↔ WMS con auditoría, alertas y recuperación ante fallos.",
      "Reportes SSRS / Crystal con KPIs operativos y trazabilidad end-to-end.",
      "Integraciones y notificaciones transaccionales (WhatsApp Business / email) para turnos y estados de pedidos."
    ]
  },
  {
    empresa: "Car One",
    rol: "Empleado de administración",
    periodo: "dic. 2020 – abr. 2022",
    puntos: [
      "Control de cartera de morosidad y regularización de deudas.",
      "Atención y asesoramiento telefónico a clientes de planes de ahorro.",
      "Gestión administrativa y registración en sistemas internos."
    ]
  },
  {
    empresa: "PrestaCash (Feladak)",
    rol: "Asesor comercial",
    periodo: "ene. 2012 – ene. 2020",
    puntos: [
      "Asesoramiento comercial y atención al cliente durante el ciclo completo.",
      "Gestión y seguimiento de solicitudes, armado de propuestas y cierre.",
      "Administración básica y actualización de datos en herramientas internas."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 mx-auto max-w-4xl px-6 py-16 border-t border-neutral-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experiencia Profesional
        </h2>
        <p className="text-neutral-400 mt-2">Mi trayectoria y crecimiento profesional</p>
      </div>

      <div className="relative">
        {/* Línea de tiempo */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-blue-500/20"></div>
        
        <div className="space-y-8">
          {experiencias.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Ícono de línea de tiempo */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border-2 border-cyan-500/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                </div>
              </div>

              {/* Contenido de la experiencia */}
              <div className="flex-1 bg-neutral-900/50 rounded-xl border border-neutral-800 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.empresa}</h3>
                    <p className="text-cyan-400 font-medium mt-1">{exp.rol}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                    {exp.periodo}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.puntos.map((punto, puntoIndex) => (
                    <li key={puntoIndex} className="flex items-start gap-2 text-neutral-300">
                      <span className="text-cyan-500 mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{punto}</span>
                    </li>
                  ))}
                </ul>

                {/* Tecnologías destacadas (solo para el primer trabajo) */}
                {index === 0 && (
                  <div className="mt-4 pt-4 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-2">
                      {[".NET Core", "T-SQL", "SQL Server", "Softland", "WMS", "SSRS", "Crystal", "WhatsApp Business"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-neutral-800 rounded text-xs text-cyan-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}