export interface RawMaterial {
  id: string;
  name: string;
  formula: string;
  role: string;
  stoichiometry: string;
  sources: string[];
  purity?: string;
  criticalProperties: { label: string; value: string }[];
  notes?: string;
}

export const rawMaterials: RawMaterial[] = [
  {
    id: 'methanol',
    name: 'Metanol',
    formula: 'CH₃OH',
    role: 'Feedstock principal (85% de la producción global)',
    stoichiometry: '0.54 t metanol / t ácido acético',
    sources: ['Gas natural (reformado)', 'Carbón (gasificación)', 'Biomasa (pirolisis + síntesis)'],
    purity: '>99.8% (grado industrial)',
    criticalProperties: [
      { label: 'Temperatura crítica', value: '239.5 °C' },
      { label: 'Presión crítica', value: '80.9 bar' },
      { label: 'Punto de ebullición', value: '64.7 °C' },
      { label: 'Poder calorífico inferior', value: '19.9 MJ/kg' },
      { label: 'Densidad (20 °C)', value: '791 kg/m³' },
    ],
    notes: 'Representa el 50–65% del costo de producción en carbonilación. La fuente de metanol determina la huella de carbono de la ruta.',
  },
  {
    id: 'co',
    name: 'Monóxido de Carbono',
    formula: 'CO',
    role: 'Reactivo de carbonilación',
    stoichiometry: '0.509 kg CO / kg ácido acético',
    sources: ['Reformado de gas natural (plantas integradas)', 'Gasificación de carbón', 'Gas de horno de coque'],
    purity: '>98% (grado sintesis)',
    criticalProperties: [
      { label: 'Temperatura crítica', value: '−140.2 °C' },
      { label: 'Presión crítica', value: '34.9 bar' },
      { label: 'Punto de ebullición', value: '−191.5 °C' },
      { label: 'Densidad (1 bar, 0 °C)', value: '1.250 kg/m³' },
      { label: 'Toxicidad', value: 'TLV-TWA: 25 ppm' },
    ],
    notes: 'En instalaciones integradas se produce on-site a partir del mismo syngas utilizado para metanol, eliminando costos logísticos.',
  },
  {
    id: 'ethylene',
    name: 'Etileno',
    formula: 'C₂H₄',
    role: 'Feedstock ruta Wacker (en declive)',
    stoichiometry: '~1.4 t etileno / t ácido acético',
    sources: ['Cracking de nafta', 'Cracking de etano (shale gas)', 'Deshidratación de etanol'],
    criticalProperties: [
      { label: 'Temperatura crítica', value: '9.2 °C' },
      { label: 'Presión crítica', value: '50.4 bar' },
      { label: 'Punto de ebullición', value: '−103.7 °C' },
      { label: 'Densidad líquida', value: '567 kg/m³' },
    ],
    notes: 'Ruta Wacker obsoleta para ácido acético. El etileno es significativamente más caro que el metanol por unidad de producto.',
  },
  {
    id: 'butane',
    name: 'n-Butano',
    formula: 'C₄H₁₀',
    role: 'Feedstock ruta LPO (obsoleta)',
    stoichiometry: 'Variable (selectividad 40–70%)',
    sources: ['Gas natural asociado', 'Fraccionamiento de GLP', 'Refino de petróleo'],
    criticalProperties: [
      { label: 'Temperatura crítica', value: '152.0 °C' },
      { label: 'Presión crítica', value: '38.0 bar' },
      { label: 'Punto de ebullición', value: '−0.5 °C' },
      { label: 'Densidad líquida (15 °C)', value: '573 kg/m³' },
    ],
    notes: 'Ruta LPO requiere 13+ columnas de destilación por la mezcla compleja de productos. Última planta importante cerrada en 2009 (Pampa).',
  },
  {
    id: 'biomass',
    name: 'Biomasa / CO₂ / Syngas',
    formula: 'C₆H₁₀O₅ (glucosa) / CO₂',
    role: 'Feedstocks renovables (rutas emergentes)',
    stoichiometry: 'Variable según ruta biológica',
    sources: ['Residuos lignocelulósicos', 'CO₂ industrial capturado', 'Syngas de gasificación'],
    criticalProperties: [
      { label: 'Rendimiento teórico (aerobio)', value: '1.304 g AA / g etanol' },
      { label: 'Rendimiento teórico (anaerobio)', value: '3 mol AA / mol glucosa' },
      { label: 'Concentración máxima (AAB)', value: '15–20% (w/v)' },
      { label: 'Inhibición microbiana', value: '~34 g/L (0.58 M)' },
    ],
    notes: 'Las rutas bio presentan costos 2–4× mayores que la carbonilación. El valor está en créditos de carbono, no en el commodity.',
  },
];

export const catalysts = [
  { process: 'Monsanto', activeSpecies: '[Rh(CO)₂I₂]⁻', promoter: 'CH₃I (1–5%)', concentration: '200–400 ppm Rh', precursor: 'RhCl₃·3H₂O, RhI₃' },
  { process: 'Cativa', activeSpecies: '[Ir(CO)₂I₂]⁻', promoter: 'CH₃I (8–12%) + Ru(CO)₄I₂', concentration: '1,000–5,000 ppm Ir', precursor: 'IrI₃, H₂IrCl₆' },
  { process: 'AO Plus', activeSpecies: '[Rh(CO)₂I₂]⁻', promoter: 'CH₃I + LiI', concentration: '200–400 ppm Rh', precursor: 'Sales de Rh + LiI' },
  { process: 'Wacker', activeSpecies: '[PdCl₄]²⁻', promoter: 'CuCl₂ / CuCl redox', concentration: '0.1–0.5% Pd', precursor: 'PdCl₂' },
  { process: 'LPO', activeSpecies: 'Co(II)/Co(III) acetatos', promoter: 'Acetaldehído (opcional)', concentration: '0.5–5 ppm Co', precursor: 'Acetato de cobalto' },
  { process: 'Fermentación', activeSpecies: 'PQQ-ADH + ALDH (enzimas)', promoter: 'O₂ (aerobio) / CO₂ (anaerobio)', concentration: 'Células vivas', precursor: 'Cepas Acetobacter / Clostridium' },
];
