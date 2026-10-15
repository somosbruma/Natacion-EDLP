# Natación EDELP · Panamericano Masters 2026

Micrositio responsive para los 8 nadadores de Estudiantes de La Plata, con 27 inscripciones individuales del brief. Los tiempos son de inscripción; no son resultados.

## Desarrollo

Requiere Node.js 22.13 o posterior.

```sh
npm ci
npm run dev
npm run build
npm test
```

## Contenido y comportamiento

- `app/athletes.ts`: datos del equipo y pruebas; campos futuros opcionales sin información inventada.
- `app/swim-app.tsx`: listado del equipo y perfiles con sus pruebas.
- `app/globals.css`: diseño responsive y accesibilidad.
- `public/escudo-edlp.webp`: escudo provisto por el usuario.
- Navegación mediante fragmentos de URL, compatible con volver/avanzar y enlaces directos.
- Pruebas, tiempos de inscripción, día, hora de inicio de la serie, serie y línea provienen de los start lists oficiales (21–27/10/2026, `docs/start-lists/`). Contra el brief original se corrigieron: Yanina Picchio nada 50 y 100 Espalda (eventos 33 y 29), Marcela Tobes suma 100 Libre (evento 11) y María Victoria Spacapan figura con 42 años.

## Validación

Las pruebas verifican las 28 inscripciones, sus series y líneas, y la página renderizada. No se realizó QA visual ni interacción de navegador porque el navegador integrado no estuvo disponible.
