"use client"; 
import { Zap } from "lucide-react";

import { useState, useTransition } from "react"; 
import { registerUserAction } from "@/app/auth/register/action";
import { useRouter } from "next/navigation";   
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition(); 
  const router = useRouter(); // 1. Herramienta para mover al usuario

  async function clientAction(formData: FormData) {
    setError(null); 

    startTransition(async () => {

      const data = Object.fromEntries(formData);
      
      const result = await registerUserAction(data);

      if (result.success) {
       
        router.push("/onboarding/biometrics"); 
        
      } else {

        setError(result.error || "Ocurrió un error inesperado"); 
      }
    }); 
  }

 return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-[#0A0A0A] text-white p-4 lg:p-6 gap-4 font-sans">
      
      {/* SECCIÓN IZQUIERDA: IMAGEN */}
      <section className="hidden lg:flex relative w-full h-full overflow-hidden bg-zinc-900/40 rounded-2xl items-center justify-center border border-white/5">
        <div className="text-zinc-700 italic flex flex-col items-center gap-4">
          <Zap size={48} className="opacity-20" />

          <span>IMAGEN / ILUSTRACIÓN</span>
        </div>
      </section>

      {/* SECCIÓN DERECHA: FORMULARIO */}
      <section className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 relative">
        
        {/* Logo superior */}
        <div className="absolute top-8 right-8 lg:right-16 flex items-center gap-2">
           <div className="text-xl font-bold tracking-tighter">
             <span className="text-[#C69774]">Meta</span>Fit
           </div>
        </div>

        <div className="w-full max-w-xl">
          {/* Header al estilo Jaime */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Register</h1>
            <p className="text-zinc-500 text-sm">Create your account to get started</p>
          </header>

          <form action={clientAction} className="flex flex-col gap-8">
            
            {/* Grid Nombre y Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-[#0A0A0A] px-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-widest z-10">
                  FIRST NAME
                </label>
                <input 
                  name="username" 
                  type="text" 
                  required
                  placeholder="Your first name"
                  className="w-full bg-transparent border border-zinc-800 rounded-md py-4 px-4 outline-none focus:border-[#C69774] transition-all placeholder:text-zinc-800 text-sm"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-[#0A0A0A] px-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-widest z-10">
                  LAST NAME
                </label>
                <input 
                  name="lastName" 
                  type="text" 
                  required
                  placeholder="Your last name"
                  className="w-full bg-transparent border border-zinc-800 rounded-md py-4 px-4 outline-none focus:border-[#C69774] transition-all placeholder:text-zinc-800 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="absolute -top-2.5 left-3 bg-[#0A0A0A] px-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-widest z-10">
                EMAIL
              </label>
              <input 
                name="email" 
                type="email" 
                required
                placeholder="example@email.com"
                className="w-full bg-transparent border border-zinc-800 rounded-md py-4 px-4 outline-none focus:border-[#C69774] transition-all placeholder:text-zinc-800 text-sm"
              />
            </div>

            {/* Contraseña */}
            <div className="relative">
              <label className="absolute -top-2.5 left-3 bg-[#0A0A0A] px-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-widest z-10">
                PASSWORD
              </label>
              <input 
                name="password" 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-transparent border border-zinc-800 rounded-md py-4 px-4 outline-none focus:border-[#C69774] transition-all placeholder:text-zinc-800 text-sm"
              />
            </div>

            <input type="hidden" name="birthDate" value="2000-01-01" />

            {error && (
              <div className="text-red-400 text-xs bg-red-500/5 border border-red-500/20 p-4 rounded-md">
                {error}
              </div>
            )}

            {/* Botón de acción */}
            <button 
              type="submit" 
              disabled={isPending}
              className="w-full bg-[#C69774] hover:bg-[#b08564] text-white font-bold py-5 rounded-md mt-4 transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-[#C69774]/10 text-sm uppercase tracking-widest"
            >
              {isPending ? "Processing..." : "Next"}
            </button>

            <p className="text-center text-zinc-500 text-sm">
              ¿Already have an account? <Link href="/" className="text-[#C69774] hover:underline font-semibold ml-1">Sign in</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

