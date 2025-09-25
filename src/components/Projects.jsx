import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      name: "Monitor Logística", 
      desc: "Sistema de seguimiento y gestión logística integrado con WMS y ERP. Desarrollado con .NET Framework, HTML, CSS, JavaScript y Bootstrap.", 
      tags: [".NET Framework", "HTML/CSS", "JavaScript", "Bootstrap", "SQL Server"],
      status: "green"
    },
    { 
      name: "Turnero WMS", 
      desc: "Sistema de turnos para clientes que interactúa con el WMS y ERP. Los clientes eligen los pedidos que van a retirar. Desarrollado con .NET Core, HTML, CSS y Bootstrap.", 
      tags: [".NET Core", "HTML/CSS", "Bootstrap", "WhatsApp Business API"],
      status: "blue"
    },
    { 
      name: "Implementación Softland", 
      desc: "Implementación de Softland en el área de cuenta corriente y contabilidad. Configuración de factura electrónica, impuestos, nuevas sucursales, reportes y procesos automáticos para facturación.", 
      tags: ["Softland", "Factura Electrónica", "Impuestos", "Automatización", "SQL Server"],
      status: "orange"
    },
    { 
      name: "Sistema de Cobranza Web", 
      desc: "Implementación del sistema de cobranza web con sincronización de comprobantes, interfaces API y tareas automáticas.", 
      tags: ["Cobranza Web", "API", "Sincronización", "Tareas Automáticas", "React", ".NET Core"],
      status: "red"
    },
    { 
      name: "Kiri Fan UTN", 
      desc: "Página web para el club de fans Kiri de la UTN. Implementación completa del frontend con React, CSS y HTML.", 
      tags: ["React", "CSS", "HTML", "JavaScript"],
      status: "purple"
    },
    { 
      name: "ARMAC", 
      desc: "Sistema de gestión para polígono de tiro desarrollado en C++ como proyecto final de Laboratorio II.", 
      tags: ["C++", "Sistema de Gestión", "Proyecto Académico"],
      status: "yellow"
    }
  ];

  const statusColor = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    red: "bg-red-500"
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12 border-t border-neutral-800">
      <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
      <p className="text-neutral-400 mb-8">Una selección de mis trabajos más relevantes</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card rounded-xl border border-neutral-800 p-6 relative">
            <div className="corner-glow corner-glow-tl"></div>
            <div className="corner-glow corner-glow-tr"></div>
            <div className="corner-glow corner-glow-bl"></div>
            <div className="corner-glow corner-glow-br"></div>
            
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            
            <div className="flex items-center mb-4">
              <div className={`w-3 h-3 rounded-full ${statusColor[project.status]} mr-2`}></div>
              <h3 className="project-title text-xl font-semibold">{project.name}</h3>
            </div>
            <p className="text-neutral-300 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag px-3 py-1 rounded-full text-xs border border-neutral-700 bg-neutral-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;