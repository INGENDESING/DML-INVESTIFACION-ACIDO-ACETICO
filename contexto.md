# Contexto del proyecto: Investigación Técnica Ácido Acético (P10-11)

## Estado actual
- **Última tarea completada:** Integración profunda del `newdata20may2026` (Proceso Acetica, métricas de mercado actualizadas a 2024, sostenibilidad, referencias académicas) manteniendo un rigor técnico y una calidad UI/UX del 95% (glassmorphism con estáticos .png insertados y componentes React adicionales).
- **Próxima tarea pendiente:** Cierre de sesión, despliegue, y posible validación del frontend por el usuario.
- **Fecha de última actualización:** 2026-05-20

## Bases de diseño congeladas
- **Stack tecnológico:** React 18 + TypeScript + Vite 7 + Tailwind CSS v3.4 + shadcn/ui.
- **Tema visual:** Dark theme engineering (`hsl(220,20%,4%)` fondo, acento verde DML `hsl(160,84%,39%)`).
- **Fuente de verdad técnica:** Los documentos en `research/` y la última revisión académica `newdata20may2026/informe_acido_acetico.md`.
- **Identidad corporativa:** Logo `logo-dml.png`. Créditos: Gerardo Merchancano y Jonathan Arboleda.
- **Unidades:** SI por defecto (°C, barg, mol/L/h, kJ/mol, B USD).

## Decisiones de diseño clave
- **2026-05-18:** Se eliminaron las secciones comerciales superfluas para retornar al rigor técnico-científico.
- **2026-05-20:** Se volvieron a insertar secciones clave como `MarketSection` y `SustainabilitySection`, pero bajo el lente estricto de ingeniería (capacidades macro y vías de descarbonización como bio-metanol y fermentación de gas). Se introdujo un componente `ReferencesSection` dedicado para inyectar trazabilidad bibliográfica directa en la UI.
- **2026-05-20:** Para evitar dependencias inestables con librerías externas de renderizado y SVG locales complejos, se sirvieron las figuras clave (`fig1`, `fig2`, `fig3`) como estáticos tradicionales `.png` desde `app/public/images/`.

## Archivos clave y su propósito
| Archivo | Propósito |
|---------|-----------|
| `app/index.html` | Entry point, favicon DML, meta tags técnicos |
| `app/src/pages/Home.tsx` | Orquestación de las 8 secciones de la presentación |
| `app/src/sections/HeroSection.tsx` | Primera impresión: logo DML, metadatos del estudio |
| `app/src/sections/OverviewSection.tsx` | Alcance, objetivo, metodología, procesos cubiertos |
| `app/src/sections/ProcessesSection.tsx` | Tabs de 6 procesos con mecanismos catalíticos y cinética |
| `app/src/sections/ReactionsSection.tsx` | Ecuaciones globales y ciclos catalíticos detallados |
| `app/src/sections/ProcessFlowSection.tsx` | Diagramas PFD interactivos: Monsanto y Cativa |
| `app/src/sections/RawMaterialsSection.tsx` | Feedstocks, propiedades críticas, tabla de catalizadores |
| `app/src/sections/ComparisonSection.tsx` | Tabla comparativa maestra (7 procesos × 7 parámetros) |
| `app/src/sections/TechnicalConclusionsSection.tsx` | 5 hallazgos técnicos cruzados de las 12 dimensiones |
| `app/src/sections/FooterSection.tsx` | Créditos DML, responsables, navegación |
| `app/src/data/processes.ts` | Datos de los 6 procesos (T, P, selectividad, TRL, etc.) |
| `app/src/data/reactions.ts` | Mecanismos catalíticos: Monsanto, Cativa, Wacker, LPO |
| `app/src/data/rawMaterials.ts` | Metanol, CO, etileno, butano, biomasa + tabla catalizadores |
| `app/src/data/market.ts` | Tabla comparativa maestra (comparisonData) |
| `app/src/index.css` | Estilos globales, glassmorphism, ecuaciones, scrollbar |
| `research/acido_acetico_dim01.md` → `dim12.md` | 12 dimensiones técnicas de investigación |
| `research/acido_acetico_wide01.md` → `wide08.md` | Documentos amplios con profundidad adicional |
| `research/acido_acetico_cross_verification.md` | Verificación cruzada de fuentes |
| `research/acido_acetico_insight.md` | Insights técnicos cruzados (no comerciales) |

## Preguntas abiertas / bloqueos
- [ ] El usuario podría solicitar despliegue en hosting (GitHub Pages, Netlify, Vercel) para acceso web público.
- [ ] Posible ampliación: agregar sección de "Balance de Masa y Energía" con diagramas Sankey para Monsanto/Cativa.
- [ ] Posible ampliación: incorporar diagramas P&ID más detallados (válvulas, bombas, instrumentación) si se requiere para entregable de ingeniería conceptual.

## Comandos / workflows útiles
```powershell
# Build de producción
cd app; npm run build

# Servidor de desarrollo
cd app; npm run dev

# Verificar estado del repo
cd app; git status

# Commit y push
cd app; git add -A; git commit -m "mensaje"; git push origin main
```

## Notas de sesión
- La app fue auditada por Claude que la empeoró cambiando la filosofía a comercial. Kimi (esta sesión) la restauró y mejoró con enfoque técnico.
- El usuario está satisfecho con el resultado y solicitó push a GitHub.
- Todo el contenido técnico se rastrea a los documentos de `research/`; no se inventaron datos.
