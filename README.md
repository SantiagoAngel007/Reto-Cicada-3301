# 🔐 Reto Cicada 3301 - Desafío de Ciberseguridad

![Terminal Hacker](https://img.shields.io/badge/Terminal-Hacker-00ff00?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![Bun](https://img.shields.io/badge/Bun-Runtime-f9f1e1?style=for-the-badge&logo=bun)

## 📖 Descripción

Proyecto de reto de ciberseguridad inspirado en las metodologías de **Cicada 3301**, diseñado específicamente para estudiantes universitarios. Esta experiencia inmersiva de aprendizaje combina elementos de gamificación, hacking ético y resolución de problemas complejos.

### 🎯 Características

- **Terminal hacker interactiva** con estética retro (texto verde sobre fondo negro)
- **Efecto typewriter** en tiempo real
- **3 desafíos ocultos** de ciberseguridad:
  - 🤖 **Gandalf AI** - Prompt Injection & AI Security
  - 💉 **PortSwigger** - SQL Injection Labs
  - 🛡️ **W3Challs** - Múltiples categorías de hacking ético
- **Sistema de pistas** activado con la tecla `H`
- **Contador de progreso** que rastrea enlaces descubiertos
- **Enlaces invisibles** que se revelan al hacer hover
- **Efectos visuales** con animaciones CSS y glitch ocasionales

## 🚀 Instalación

### Paso 1: Instalar Bun

#### En macOS/Linux:
```bash
curl -fsSL https://bun.sh/install | bash
```

#### En Windows:
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

#### Verificar instalación:
```bash
bun --version
```

### Paso 2: Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/Reto-Cicada-3301.git
cd Reto-Cicada-3301
```

### Paso 3: Instalar dependencias

```bash
bun install
```

## 🏃‍♂️ Ejecutar el proyecto

### Modo desarrollo:
```bash
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Crear build de producción:
```bash
bun run build
```

### Iniciar servidor de producción:
```bash
bun run start
```

## 📂 Estructura del Proyecto

```
proyecto-cicada/
├── app/
│   ├── page.js          # Página principal con terminal hacker
│   ├── layout.js        # Layout de Next.js
│   └── globals.css      # Estilos globales
├── public/              # Archivos estáticos
├── package.json         # Dependencias del proyecto
└── README.md           # Este archivo
```

## 🎮 Cómo jugar

1. **Escanea el código QR** para acceder a la página principal
2. **Explora la terminal** buscando elementos interactivos ocultos
3. **Encuentra los 3 enlaces secretos** (pista: usa la tecla `H`)
4. **Completa los desafíos** en cada plataforma externa
5. **Captura screenshots** de tus logros
6. **Envía las evidencias** para recibir tu premio

### 💡 Pistas
- Los enlaces están ocultos estratégicamente en el texto
- Pasa el cursor sobre palabras clave, símbolos y elementos decorativos
- Presiona `H` para obtener ayuda
- Busca en: imágenes, palabras técnicas, ASCII art y números

## 🛠️ Tecnologías utilizadas

- **[Next.js 15.5](https://nextjs.org/)** - Framework de React
- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS
- **[Bun](https://bun.sh/)** - Runtime JavaScript ultrarrápido
- **JavaScript (ES6+)** - Lógica de la aplicación

## 🌐 Desplegar en Vercel

### Opción 1: Con GitHub
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Click en "Deploy"

### Opción 2: Con Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📋 Requisitos

- **Node.js**: v18 o superior (si usas npm/yarn)
- **Bun**: v1.0 o superior (recomendado)
- Navegador moderno con soporte para ES6+
