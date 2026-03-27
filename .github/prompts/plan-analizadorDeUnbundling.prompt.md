## Plan: Analizador de Unbundling

TL;DR: Implementar un flujo MVP que permita subir o pegar la descripción de una app, analizarla (API), extraer funcionalidades, generar una puntuación ligera de "desagregado" y proponer un esquema de MVP. Empezar con una versión híbrida: heurísticas en frontend + endpoints simples para ejecutar/anotar y persistir resultados.

**Steps**

1. Discovery: revisar código existente y puntos de integración (ya completado).
2. Diseñar API spec (MVP): endpoints `POST /api/analyze`, `POST /api/extract`, `POST /api/score`, `POST /api/generate-mvp`, `GET /api/results/:id`.
3. Implementar capa de persistencia MVP: agregar carpeta `server/` con servidor Node+Express y SQLite (ligero), o alternativa sin servidor usando `localStorage` para prototipo rápido. _Depends on decision in step 2._
4. Backend: implementar endpoints que acepten input texto/URL, devuelvan estructura `IAnalyzeResult` compatible con frontend (reusar `src/services/types.d.ts`). Guardar resultados en DB y devolver `id`.
5. Frontend API client: ampliar `src/services/unbundle-api.tsx` para consumir los nuevos endpoints; agregar manejo de errores y mocks.
6. UI: actualizar `src/pages/analyze.tsx` para invocar `POST /api/analyze` y redirigir a `/analyze/results/:id`; mejorar `src/pages/results.tsx` para mostrar estado guardado y permitir re-evaluar con diferentes parámetros (scoring/generador).
7. Feature extraction + scoring (Lite): definir reglas heurísticas en backend (o en frontend si se elige prototipo sin servidor). Scoring ejemplo: aislamiento de feature (0-10), mercado (0-10), infra necesaria (0-10) → score composite.
8. Generador de esquema de MVP (Lite): plantilla que toma features seleccionadas y crea objetivo, usuarios, métricas, scope mínimo.
9. Tests y verificación: pruebas manual + unitarias para scoring + e2e mínima (abrir dev server, analizar sample, verificar persistencia).
10. Documentar: `README.md` con cómo ejecutar backend y frontend y ejemplos de payloads.

**Relevant files**

- `src/services/unbundle-api.tsx` — ampliar cliente API y mocks
- `src/services/types.d.ts` — reutilizar modelos de datos
- `src/hooks/useFetch.ts` — validar para consumo de endpoints
- `src/pages/analyze.tsx` — invocar análisis y navegación a resultados
- `src/pages/results.tsx` — mostrar análisis, re-evaluar y persistir
- `server/` (nuevo) — `server/index.js`, `server/routes/analyze.js`, `server/db.sqlite` (SQL schema)

**Verification**

1. Levantar frontend con `pnpm dev` y servidor con `node server/index.js` (o `pnpm start:server` si se añade script).
2. En `Analyze` pegar texto de app ejemplo → debería redirigir a `/analyze/results/:id` y mostrar datos.
3. Verificar que `GET /api/results/:id` devuelve la misma estructura y que el registro existe en `server/db.sqlite`.
4. Pruebas unitarias para la función de scoring (input conocido → score esperado).

**Decisions (recomendadas)**

- Persistencia inicial: usar Node+Express + SQLite en `server/` para mantener datos entre sesiones y facilitar compartir `id`.
- Scoring/Generador: implementar heurísticas en backend para mantener consistencia y permitir re-evaluación desde frontend.

**Further Considerations**

1. ¿Prefieres prototipo rápido sin servidor (persistencia en `localStorage`) o empezar directo con `server/` y SQLite? Recomendado: `server/` para persistencia real.
2. Si deseas escalabilidad: planificar migración a Postgres y añadir autenticación (fuera de alcance del MVP).
