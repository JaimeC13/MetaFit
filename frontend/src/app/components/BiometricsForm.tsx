"use client";
import React, { useState } from 'react';
import { Activity, Zap } from 'lucide-react';
interface Props {
  userName: string;
}

export default function BiometricsForm({ userName }: Props) {
  const [selectedActivity, setSelectedActivity] = useState(0);

  // Datos para las 6 tarjetas (3 filas x 2 columnas)
  const activities = [
    { id: 0, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
    { id: 1, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
    { id: 2, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
    { id: 3, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
    { id: 4, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
    { id: 5, title: "Sedentary", desc: "Office job or student, sitting most of the day. No sports practiced." },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-white flex flex-col items-center pt-10 pb-20 px-4">
      
      {/* Logo Central */}
      <div className="flex items-center gap-2 mb-16">
        <Zap size={24} className="text-[#c69774]" fill="currentColor" />
        <span className="text-xl font-semibold tracking-tight">Meta Fit</span>
      </div>

      {/* Contenedor principal con ancho controlado para el grid de 452px */}
      <div className="w-full max-w-[960px]">
        
        {/* Saludo */}
        <h1 className="text-3xl font-bold mb-8">Hello! {userName}</h1>

        {/* Inputs Superiores (Pequeños como en la imagen) */}
        <div className="flex flex-wrap gap-4 mb-14">
          <div className="relative w-full md:w-[160px]">
            <label className="absolute -top-2.5 left-3 bg-[#111111] px-2 text-[11px] text-zinc-400 uppercase tracking-wider">Weight</label>
            <input placeholder="0" name="weight" type="number" className="w-full bg-transparent border border-zinc-700 rounded-md py-3 px-4 outline-none focus:border-[#c69774] transition-all" />
            
          </div>
          <div className="relative w-full md:w-[160px]">
            <label className="absolute -top-2.5 left-3 bg-[#111111] px-2 text-[11px] text-zinc-400 uppercase tracking-wider">Height</label>
            <input placeholder="0" name="height" type="number" className="w-full bg-transparent border border-zinc-700 rounded-md py-3 px-4 outline-none focus:border-[#c69774] transition-all" />
          </div>
          <div className="relative w-full md:w-[160px]">
            <label className="absolute -top-2.5 left-3 bg-[#111111] px-2 text-[11px] text-zinc-400 uppercase tracking-wider">Age</label>
            <input placeholder="0" name="age" type="number" className="w-full bg-transparent border border-zinc-700 rounded-md py-3 px-4 outline-none focus:border-[#c69774] transition-all" />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-medium text-zinc-300 mb-6">Physical activity</h2>
          
          {/* GRID de 2 Columnas. Cada tarjeta medirá aprox 452px de ancho */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {activities.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedActivity(index)}
                className={`
                  relative flex items-center gap-5 p-6 rounded-md border transition-all cursor-pointer
                  h-[111px] w-full max-w-[452px]
                  ${selectedActivity === index 
                    ? 'border-[#c69774] bg-[#c69774]/5' 
                    : 'border-zinc-800 hover:border-zinc-700 bg-transparent'}
                `}
              >
                {/* Icono similar al del tapete/scroll */}
                <div className={`${selectedActivity === index ? 'text-[#c69774]' : 'text-zinc-400'}`}>
                   <Activity size={32} />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-[12px] text-zinc-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón Siguiente Centrado y Ancho */}
        <div className="mt-16 flex flex-col items-center">
          <button className="w-full max-w-[660px] bg-[#c69774] hover:bg-[#b5815d] text-white font-semibold py-4 rounded-md transition-all shadow-lg shadow-[#c69774]/10">
            Next
          </button>
        </div>

      </div>
    </main>
  );
}