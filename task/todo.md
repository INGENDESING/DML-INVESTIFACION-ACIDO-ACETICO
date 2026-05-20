# Plan: Integración de Nueva Data (newdata20may2026) y Optimización Web (95% Calidad)

## Contexto
- **Objetivo:** Adaptar la aplicación web existente para incorporar la nueva investigación académica (`informe_acido_acetico.md`, imágenes y referencias), asegurando coherencia técnica, completitud y un diseño espectacular (calificación 95%).
- **Cliente / Proyecto DML:** P10-11 INVESTIGACION GERENCIA
- **Normas aplicables:** SI, rigor DML, trazabilidad estricta de fuentes.

## Supuestos clave
- [x] El esquema *dark engineering* y *glassmorphism* se mantendrá y refinará (verde, naranja, amarillo, azul, rosado translúcidos).
- [x] Las imágenes en la carpeta nueva (`fig1_production_routes.png`, etc.) pasarán a ser estáticos servidos en `app/public/`.
- [x] La información técnica sobre el proceso "Acetica" (KBR/Chiyoda) reportada en el informe será agregada como un proceso core del modelo de datos de la app.

## Tareas
- [x] T1. Archivos estáticos: Copiar los `.png` de `newdata20may2026` a `app/public/images/`.
- [x] T2. Actualización de core técnico (`processes.ts` y `reactions.ts`): Agregar el Proceso Acetica y actualizar valores del Proceso Cativa y Monsanto según las nuevas referencias, aplicando rigor termodinámico y dimensional.
- [x] T3. Actualización de mercado (`market.ts`): Integrar cifras macroeconómicas 2024/2025 y previsiones a 2035.
- [x] T4. Tendencias de Sostenibilidad: Ampliar `SustainabilitySection.tsx` con la sección 8 del informe (reducción de carbono, CMA, bio-metanol).
- [x] T5. Trazabilidad y Referencias: Construir un nuevo componente React (`ReferencesSection.tsx`) para inyectar bibliografía y asegurar citas en la UI.
- [x] T6. Refinamiento UI/UX: Auditar los componentes de React para garantizar la calidad del 95% solicitada en estética y navegabilidad, añadiendo gráficos.

## Tareas - Fase 3 (Despliegue en Producción)
- [ ] T7. Configuración de Render: Crear archivo `render.yaml` en `app/` como "Static Site", definiendo comandos de build (`npm install && npm run build`) y directorio público (`dist`).
- [ ] T8. Sincronización GitHub: Realizar commit de todos los cambios de la Fase 2 en el repositorio local (`app/`) e integrar el archivo `contexto.md` y `task/todo.md` en el repositorio para que toda la información quede versionada, para finalmente hacer push.

## Riesgos / Puntos de verificación
- [ ] **Validación dimensional:** Confirmar unidades SI y referencias cruzadas correctas en la interfaz.
- [ ] **Validación visual:** Revisar que las imágenes insertadas se comporten correctamente en diseño responsive (Tailwind).
- [ ] **Trazabilidad:** Cada dato macro o cinético debe contar con su correspondiente referencia visible para el usuario.
- [ ] **Build Check:** Verificar que `npm run build` pase las reglas de TypeScript/ESLint sin fallos antes de hacer push.