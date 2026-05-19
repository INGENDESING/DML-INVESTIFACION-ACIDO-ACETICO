export interface Insight {
  id: number;
  title: string;
  tagline: string;
  confidence: 'high' | 'medium' | 'exploratory';
  type: string;
  dimensions: string[];
  summary: string;
}

export const insights: Insight[] = [
  {
    id: 1, title: 'La Paradoja Costo-Carbono China',
    tagline: 'Metanol 462 USD/t más barato pero 4.7× más emisor',
    confidence: 'high', type: 'Predictivo', dimensions: ['Económico', 'Ambiental', 'Supply Chain'],
    summary: 'El CBAM europeo actuará como "tax equalizer" que podría erosionar hasta 150 USD/t de la ventaja competitiva china en exportaciones a Europa, bifurcando el mercado global en commodity carbon-intensive vs. low-carbon premium.',
  },
  {
    id: 2, title: 'El Efecto Cascada del Agua',
    tagline: 'Cada % de agua activa ineficiencias multiplicativas en Monsanto',
    confidence: 'high', type: 'Explicativo', dimensions: ['Monsanto', 'Cativa', 'Comparativa'],
    summary: 'La necesidad del proceso Monsanto de operar con 14-15% de agua genera una cascada: mayor WGS (selectividad CO 85% vs 94%), +30% energía de secado, +1 columna de destilación, y productividad 5× menor. Cativa eliminó esta restricción estructural.',
  },
  {
    id: 3, title: 'Mapa Predictivo LPO → Bio',
    tagline: 'La historia LPO advierte sobre el futuro de las bio-rutas',
    confidence: 'high', type: 'Predictivo', dimensions: ['LPO', 'Bio', 'Ambiental'],
    summary: 'Las bio-rutas comparten patrones alarmantes con el obsoleto proceso LPO: baja concentración inicial, complejidad de separación extrema, y purificación que consume más energía que la producción misma (50-250 MJ/kg).',
  },
  {
    id: 4, title: 'Dual Control Paradox de China',
    tagline: 'Expansión + cierres ambientales = volatilidad predecible',
    confidence: 'high', type: 'Predictivo', dimensions: ['Mercado', 'Regulaciones', 'Supply Chain'],
    summary: 'China añade 5.9 Mt de capacidad nueva basada en carbón mientras cierra plantas por incumplimiento ambiental. Los cierres temporales de 2021-2022 ya causaron picos de precios globales; se repetirán.',
  },
  {
    id: 5, title: 'Catalizadores Heterogéneos: el Próximo "Cativa Moment"',
    tagline: 'ReO₄/SiO₂ sin haluros podría democratizar la producción',
    confidence: 'medium', type: 'Predictivo', dimensions: ['Cat. Heterogéneos', 'Comparativa', 'Futuro'],
    summary: 'Al eliminar la corrosión por yoduro, permitir fase gaseosa a menor presión, y usar metales no nobles (Ni-Mo), esta tecnología podría reducir el CAPEX en 1.5-2× para nuevas plantas. Comercialización estimada: 2028-2032.',
  },
  {
    id: 6, title: 'Estrategia CCU-Dual de Celanese',
    tagline: 'Ventaja defensiva de primer movimiento no replicable',
    confidence: 'high', type: 'Estratégico', dimensions: ['Mercado', 'Ambiental', 'Supply Chain'],
    summary: 'ECO-CC (180 kt CO₂/año, ISCC certificado, aprobado DOE) es una barrera de entrada regulatoria. Depende de una combinación única: CO₂ industrial barato, planta masiva (1.3 Mt), integración vertical, y subsidios IRA.',
  },
  {
    id: 7, title: 'India como Greenfield Geoestratégico',
    tagline: 'De 85% dependencia de importaciones a posible exportador neto',
    confidence: 'medium', type: 'Geoestratégico', dimensions: ['Mercado', 'Supply Chain', 'Futuro'],
    summary: 'Reliance planea 3.0 Mt para 2030 + INEOS-GNFC 600 kt (2028). La capacidad combinada (3.6+ Mt) superaría el consumo local, desplazando exportaciones chinas hacia Asia-Pacífico.',
  },
  {
    id: 8, title: 'La Trampa de Purificación Universal',
    tagline: 'La concentración inicial determina la viabilidad, no el feedstock',
    confidence: 'high', type: 'Explicativo', dimensions: ['Bio', 'Electrosíntesis', 'LPO', 'Comparativa'],
    summary: 'Cativa produce AA a >99% con 2 columnas (<5 MJ/kg). Bio-rutas: 50-250 MJ/kg. Electrosíntesis: 117 MJ/kg solo para purificación. Cada orden de magnitud en concentración = 2-3× más costo.',
  },
  {
    id: 9, title: 'Contrato Again Bio-HELM como Señal',
    tagline: 'El modelo de negocio bio es "carbon-as-a-service"',
    confidence: 'medium', type: 'Estratégico', dimensions: ['Bio', 'Ambiental', 'Futuro'],
    summary: 'El contrato de 50 kt/año × 10 años no indica paridad de costo. El valor está en créditos de carbono Scope 3 certificados. A $100/ton CO₂, el crédito añade ~100 USD/ton de AA, cerrando parcialmente la brecha con el fósil.',
  },
  {
    id: 10, title: 'El Péndulo Rodio-Iridio',
    tagline: 'Dependencia cíclica de metales nobles como riesgo sistémico',
    confidence: 'medium', type: 'Riesgo', dimensions: ['Monsanto', 'Cativa', 'Cat. Heterogéneos'],
    summary: 'Cualquier shock en precio de Ir o Ru (producidos como subproductos de Pt en Sudáfrica y Rusia) afectaría al 70% de la producción global. Los cat. heterogéneos Ni-Mo eliminan esta dependencia.',
  },
  {
    id: 11, title: 'Moat Híbrido de Celanese AO+',
    tagline: 'Costo más bajo del mundo ($326/t) con sistema Rh optimizado',
    confidence: 'high', type: 'Competitivo', dimensions: ['Monsanto', 'Cativa', 'Económico'],
    summary: 'AO+ logró un "hack": mantener la ventaja de costo del Rh mientras adopta operación a baja agua. Menor CAPEX ($233/ton capacidad) y costo de producción ($326/ton) que cualquier alternativa.',
  },
  {
    id: 12, title: 'Convergencia Electrosíntesis + Membranas',
    tagline: 'Ruta híbrida como menor resistencia hacia AA de bajo carbono',
    confidence: 'exploratory', type: 'Tecnológico', dimensions: ['Electrosíntesis', 'Membranas', 'Futuro'],
    summary: 'Si la electrosíntesis alcanza >100 mM (vs 20 mM actual) integrada con pervaporación, el costo de purificación podría caer de 117 MJ/kg a <20 MJ/kg. Viable en regiones con electricidad <$30/MWh.',
  },
  {
    id: 13, title: 'Tensión de Escala Inversa Bio',
    tagline: 'Más grande = menos competitivo en bio-rutas',
    confidence: 'high', type: 'Estratégico', dimensions: ['Bio', 'Económico', 'Mercado'],
    summary: 'Bio-refinerías: CAPEX $1,630-2,030/ton capacidad vs. $233 para AO+. Relación inversa de 7-9×. Las bio-rutas solo son viables en nichos premium (alimentario, farmacéutico) con prima de sostenibilidad.',
  },
  {
    id: 14, title: 'Péndulo Wacker: la Corrosión Siempre Pierde',
    tagline: 'Patrón histórico: cada generación elimina la corrosión anterior',
    confidence: 'medium', type: 'Histórico-Predictivo', dimensions: ['Monsanto', 'Cativa', 'Wacker', 'Cat. Heterogéneos'],
    summary: 'Wacker (HCl) → Monsanto (HI menor) → Heterogéneos (sin haluros). La corrosión por haluros es una debilidad estratégica de Cativa que los catalizadores heterogéneos resolverán.',
  },
  {
    id: 15, title: 'Convergencia Digital Twin + DWC + Pervaporación',
    tagline: 'Oportunidad de bajo riesgo con ROI inmediato (1-3 años)',
    confidence: 'high', type: 'Oportunidad', dimensions: ['Digital', 'Económico', 'Ambiental'],
    summary: 'Tres tecnologías TRL 7-8 combinadas en plantas Cativa/AO+ existentes podrían reducir OPEX 25-35% sin cambiar reactor ni catalizador. Para 500 kt/año: $12.5-25M/año de ahorro con inversión de $5-50M.',
  },
];
