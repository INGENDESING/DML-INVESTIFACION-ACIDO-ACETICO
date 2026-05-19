export const globalStats = {
  capacity: { value: 20000, unit: 'kt/año', label: 'Capacidad Global 2024' },
  marketValue: { value: 16.8, unit: 'B USD', label: 'Valor de Mercado' },
  cagr: { value: 5.2, unit: '%', label: 'CAGR Proyectado' },
  carbonylation: { value: 84, unit: '%', label: 'Carbonilación de Metanol' },
  chinaShare: { value: 55, unit: '%', label: 'Capacidad China' },
};

export const regionalCapacity = [
  { region: 'China', capacity: 12000, share: 55, color: 'hsl(0, 72%, 55%)' },
  { region: 'Resto Asia-Pac.', capacity: 4400, share: 20, color: 'hsl(25, 95%, 53%)' },
  { region: 'Norteamérica', capacity: 2600, share: 12, color: 'hsl(210, 100%, 56%)' },
  { region: 'Europa', capacity: 1600, share: 7, color: 'hsl(160, 84%, 39%)' },
  { region: 'Medio Oriente', capacity: 800, share: 4, color: 'hsl(45, 93%, 47%)' },
  { region: 'Otros', capacity: 600, share: 2, color: 'hsl(330, 80%, 60%)' },
];

export const applications = [
  { name: 'VAM', fullName: 'Vinil Acetato Monómero', share: 34, color: 'hsl(160, 84%, 39%)' },
  { name: 'PTA', fullName: 'Ác. Tereftálico Purif.', share: 22, color: 'hsl(210, 100%, 56%)' },
  { name: 'Ac. Etilo', fullName: 'Acetato de Etilo', share: 16, color: 'hsl(25, 95%, 53%)' },
  { name: 'Anh. Acético', fullName: 'Anhídrido Acético', share: 9, color: 'hsl(45, 93%, 47%)' },
  { name: 'Otros', fullName: 'Otros derivados', share: 19, color: 'hsl(330, 80%, 60%)' },
];

export const producers = [
  { rank: 1, name: 'Celanese', capacity: '~3,400 kt/a', share: '~15%', highlight: 'Clear Lake: 1.3 Mt/a', color: 'hsl(25, 95%, 53%)' },
  { rank: 2, name: 'INEOS', capacity: '~3,570 kt/a', share: '~16%', highlight: 'Adquirió BP Acetilos $5B', color: 'hsl(210, 100%, 56%)' },
  { rank: 3, name: 'Jiangsu SOPO', capacity: '~1,200 kt/a', share: '~6%', highlight: 'Mayor prod. indep. chino', color: 'hsl(0, 72%, 55%)' },
  { rank: 4, name: 'LyondellBasell', capacity: '~900 kt/a', share: '~4%', highlight: '3er mayor occidental', color: 'hsl(160, 84%, 39%)' },
  { rank: 5, name: 'Eastman', capacity: '~600 kt/a', share: '~3%', highlight: 'Integración con derivados', color: 'hsl(45, 93%, 47%)' },
];

export const rawMaterialPrices = [
  { region: 'USA', metanol: 802, etileno: 416, butano: 642 },
  { region: 'Europa', metanol: 623, etileno: 1310, butano: 662 },
  { region: 'China', metanol: 303, etileno: 783, butano: 781 },
  { region: 'M. Oriente', metanol: 217, etileno: 0, butano: 611 },
];

export const marketEvolution = [
  { year: 1970, carbonylation: 15, oxidation: 50, lpo: 31, bio: 4 },
  { year: 1990, carbonylation: 50, oxidation: 30, lpo: 14, bio: 6 },
  { year: 2000, carbonylation: 60, oxidation: 20, lpo: 8, bio: 12 },
  { year: 2010, carbonylation: 75, oxidation: 12, lpo: 3, bio: 10 },
  { year: 2024, carbonylation: 85, oxidation: 3, lpo: 0, bio: 12 },
];

export const comparisonData = [
  { param: 'T (°C)', monsanto: '150–200', cativa: '180–195', aoPlus: '180–195', wacker: '120–130', lpo: '150–230', fermentacion: '27–37' },
  { param: 'P (bar)', monsanto: '30–60', cativa: '30–40', aoPlus: '30–40', wacker: '3–10', lpo: '50–60', fermentacion: '1' },
  { param: 'Catalizador', monsanto: 'Rh', cativa: 'Ir+Ru', aoPlus: 'Rh+LiI', wacker: 'Pd/Cu', lpo: 'Co/Cr', fermentacion: 'Bacterias' },
  { param: 'Selectividad', monsanto: '>99%', cativa: '>99%', aoPlus: '>99%', wacker: '~89%', lpo: '40–70%', fermentacion: '0.55 g/g' },
  { param: 'Energía (MJ/kg)', monsanto: '5.8', cativa: '4.2–4.7', aoPlus: '<4.0', wacker: '8–12', lpo: '>60', fermentacion: '50–250' },
  { param: 'Costo (USD/t)', monsanto: '~350', cativa: '~330', aoPlus: '~326', wacker: '~400', lpo: '~500', fermentacion: '746–903' },
  { param: 'TRL', monsanto: '9', cativa: '9', aoPlus: '9', wacker: '9', lpo: '9', fermentacion: '6–7' },
];

export const radarData = [
  { metric: 'Selectividad', Cativa: 99, AO_Plus: 99, Monsanto: 99, Wacker: 89, Fermentacion: 55 },
  { metric: 'Efic. Energética', Cativa: 90, AO_Plus: 95, Monsanto: 65, Wacker: 40, Fermentacion: 15 },
  { metric: 'Escala', Cativa: 95, AO_Plus: 95, Monsanto: 50, Wacker: 15, Fermentacion: 5 },
  { metric: 'Costo', Cativa: 88, AO_Plus: 92, Monsanto: 80, Wacker: 70, Fermentacion: 30 },
  { metric: 'Sostenibilidad', Cativa: 60, AO_Plus: 65, Monsanto: 50, Wacker: 40, Fermentacion: 90 },
  { metric: 'Madurez', Cativa: 95, AO_Plus: 95, Monsanto: 95, Wacker: 95, Fermentacion: 60 },
];
