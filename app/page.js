'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [discoveredLinks, setDiscoveredLinks] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const fullText = `
> SISTEMA INICIADO...
> CONECTANDO A RED SEGURA...
> ACCESO CONCEDIDO

═══════════════════════════════════════════════════════════

    ██████╗██╗ ██████╗ █████╗ ██████╗  █████╗     ██████╗ ██████╗  ██████╗ ██╗
   ██╔════╝██║██╔════╝██╔══██╗██╔══██╗██╔══██╗    ╚════██╗╚════██╗██╔═████╗███║
   ██║     ██║██║     ███████║██║  ██║███████║     █████╔╝ █████╔╝██║██╔██║╚██║
   ██║     ██║██║     ██╔══██║██║  ██║██╔══██║     ╚═══██╗ ╚═══██╗████╔╝██║ ██║
   ╚██████╗██║╚██████╗██║  ██║██████╔╝██║  ██║    ██████╔╝██████╔╝╚██████╔╝ ██║
    ╚═════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚═════╝  ╚═════╝  ╚═╝

═══════════════════════════════════════════════════════════

En el reino del código binario,
donde el 1 y 0 danzan en eterno escenario,
se ocultan retos de sabiduría ancestral,
esperando al hacker de mente digital.

Tres senderos se bifurcan en la red,
cada uno guardando un secreto de poder.
Busca los enlaces que se esconden aquí,
resuelve los enigmas y llega hasta el fin.

Screenshot tras screenshot debes tomar,
evidencia de cada reto al completar.
Pues quien demuestre su habilidad suprema,
recibirá el premio que su astucia premia.

═══════════════════════════════════════════════════════════

> INSTRUCCIONES DEL RETO:

1. Explora esta terminal buscando elementos interactivos ocultos
2. Encuentra los TRES enlaces secretos a plataformas de hacking
3. Completa los desafíos en cada plataforma
4. Captura screenshots de tus logros
5. Envía las evidencias para recibir tu recompensa

> SISTEMAS ACTIVOS: █ exploit █ vulnerability █ cipher █
> PROTOCOLO: [CLASSIFIED]
> HASH: 7h3_7ru7h_15_0u7_7h3r3

═══════════════════════════════════════════════════════════

> Enlaces descubiertos: ${discoveredLinks}/3
> ¿Necesitas ayuda? Presiona [H] para obtener una pista...

> _
  `;

  // Efecto typewriter
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  // Cursor parpadeante
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Efecto glitch aleatorio
  useEffect(() => {
    const glitchTimer = setInterval(() => {
      if (Math.random() > 0.95) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 2000);

    return () => clearInterval(glitchTimer);
  }, []);

  // Detectar tecla H para pistas
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'h') {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 5000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const handleLinkClick = (linkNumber) => {
    if (!discoveredLinks.toString().includes(linkNumber)) {
      setDiscoveredLinks(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 overflow-hidden relative">
      {/* Efecto de matriz de fondo */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="text-xs leading-tight">
          {Array(50).fill('01').map((_, i) => (
            <div key={i} className="animate-pulse">
              01010101010101010101010101010101010101010101010101010101
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className={`relative z-10 max-w-4xl mx-auto ${glitch ? 'animate-pulse' : ''}`}>
        <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
          {text}
          {showCursor && <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse"></span>}
        </pre>

        {/* Enlaces ocultos */}
        <div className="mt-8 space-y-4">
          {/* Link 1: Oculto en "exploit" */}
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://gandalf.lakera.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(1)}
              className="text-green-400 hover:text-green-300 hover:underline"
            >
              &gt; [NIVEL 1: AI SECURITY] - Gandalf Prompt Injection Challenge
            </a>
          </div>

          {/* Link 2: Oculto en "vulnerability" */}
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://portswigger.net/web-security/sql-injection"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(2)}
              className="text-green-400 hover:text-green-300 hover:underline"
            >
              &gt; [NIVEL 2: SQL INJECTION] - PortSwigger Web Security Academy
            </a>
          </div>

          {/* Link 3: Oculto en "cipher" */}
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://w3challs.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(3)}
              className="text-green-400 hover:text-green-300 hover:underline"
            >
              &gt; [NIVEL 3: MULTI-CHALLENGE] - W3Challs Hacking Platform
            </a>
          </div>
        </div>

        {/* Sistema de pistas */}
        {showHint && (
          <div className="mt-8 p-4 border border-green-500 bg-green-900 bg-opacity-20 animate-pulse">
            <p className="text-yellow-400">
              💡 PISTA: Pasa el cursor sobre las palabras clave mencionadas en el texto...
              Los enlaces están invisibles pero se revelan al hacer hover.
            </p>
          </div>
        )}

        {/* Elementos decorativos interactivos */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-green-700 hover:border-green-400 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-xs">ENCRYPTION</div>
          </div>
          <div className="p-4 border border-green-700 hover:border-green-400 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">🛡️</div>
            <div className="text-xs">FIREWALL</div>
          </div>
          <div className="p-4 border border-green-700 hover:border-green-400 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-xs">EXPLOIT</div>
          </div>
        </div>

        {/* ASCII Art decorativo */}
        <div className="mt-8 text-xs opacity-30 hover:opacity-100 transition-opacity">
          <pre>
{`
    ▲
   ▲ ▲
  ▲   ▲
 ▲ ▲ ▲ ▲
▲       ▲
`}
          </pre>
        </div>

        {/* Contador de progreso */}
        <div className="mt-8 p-4 border border-green-500">
          <div className="flex justify-between items-center">
            <span>PROGRESO DEL RETO:</span>
            <span className="font-bold">{discoveredLinks}/3 ENLACES ENCONTRADOS</span>
          </div>
          <div className="mt-2 w-full bg-green-900 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(discoveredLinks / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Mensaje de completado */}
        {discoveredLinks === 3 && (
          <div className="mt-8 p-6 border-2 border-green-400 bg-green-900 bg-opacity-30 animate-pulse">
            <p className="text-green-300 text-center text-lg font-bold">
              🎉 ¡FELICIDADES! HAS DESCUBIERTO TODOS LOS ENLACES 🎉
            </p>
            <p className="text-center mt-2">
              Ahora completa los retos y envía tus screenshots para recibir tu premio.
            </p>
          </div>
        )}
      </div>

      {/* Estilos adicionales para efectos */}
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}