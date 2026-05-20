export interface ReactionStep {
  step: number;
  title: string;
  equation: string;
  description: string;
  notes?: string;
}

export interface ReactionMechanism {
  id: string;
  processName: string;
  overallEquation: string;
  enthalpy?: string;
  steps: ReactionStep[];
  kinetics?: {
    rateLaw?: string;
    activationEnthalpy?: string;
    activationEntropy?: string;
    rateDeterminingStep?: number;
  };
}

export const mechanisms: ReactionMechanism[] = [
  {
    id: 'monsanto',
    processName: 'Proceso Monsanto (Rh)',
    overallEquation: 'CH₃OH(l) + CO(g) → CH₃COOH(l)',
    enthalpy: 'ΔH°₂₉₈ = −135.6 kJ/mol',
    steps: [
      {
        step: 1,
        title: 'Adición Oxidativa (Etapa Determinante)',
        equation: '[Rh(CO)₂I₂]⁻ + CH₃I → [Rh(CH₃)(CO)₂I₃]⁻',
        description: 'El centro nucleofílico de Rh(I) ataca al carbono del CH₃I vía mecanismo Sₙ2. Cinética de primer orden respecto a [Rh] y [CH₃I].',
        notes: 'ΔH‡ = 63.6 kJ/mol; ΔS‡ = −116 J/(mol·K)',
      },
      {
        step: 2,
        title: 'Migración del Grupo Metilo',
        equation: '[Rh(CH₃)(CO)₂I₃]⁻ → [Rh(CH₃CO)(CO)I₃]⁻',
        description: 'El grupo metilo migra a un ligando carbonilo adyacente, formando un complejo acilo pentacoordinado.',
      },
      {
        step: 3,
        title: 'Coordinación de CO y Eliminación Reductiva',
        equation: '[Rh(CH₃CO)(CO)I₃]⁻ + CO → CH₃COI + [Rh(CO)₂I₂]⁻',
        description: 'Una molécula adicional de CO coordina al complejo acilo, seguida de eliminación reductiva de yoduro de acetilo, regenerando la especie activa de Rh(I).',
      },
      {
        step: 4,
        title: 'Hidrólisis del Yoduro de Acetilo',
        equation: 'CH₃COI + H₂O → CH₃COOH + HI',
        description: 'El CH₃COI sufre hidrólisis rápida con agua para dar ácido acético y regenerar HI, que recicla el yoduro de metilo.',
      },
    ],
    kinetics: {
      rateLaw: 'r = k[Rh(CO)₂I₂⁻][CH₃I] (mol L⁻¹ s⁻¹)',
      activationEnthalpy: 'ΔH‡ = 63.6 kJ/mol',
      activationEntropy: 'ΔS‡ = −116 J/(mol·K)',
      rateDeterminingStep: 1,
    },
  },
  {
    id: 'cativa',
    processName: 'Proceso Cativa (Ir + Ru)',
    overallEquation: 'CH₃OH(l) + CO(g) → CH₃COOH(l)',
    enthalpy: 'ΔH°₂₉₈ = −135.6 kJ/mol',
    steps: [
      {
        step: 1,
        title: 'Adición Oxidativa (150× más rápida que Rh)',
        equation: '[Ir(CO)₂I₂]⁻ + CH₃I → [Ir(CH₃)(CO)₂I₃]⁻',
        description: 'La adición oxidativa de CH₃I al centro de Ir(I) es aproximadamente 150 veces más rápida que al Rh(I), permitiendo productividades de ~50 mol L⁻¹ h⁻¹.',
      },
      {
        step: 2,
        title: 'Migración Metilo → Acilo',
        equation: '[Ir(CH₃)(CO)₂I₃]⁻ → [Ir(CH₃CO)(CO)I₃]⁻',
        description: 'Inserción migratoria del grupo metilo en un ligando CO, formando el complejo acilo.',
      },
      {
        step: 3,
        title: 'Eliminación Reductiva y Regeneración',
        equation: '[Ir(CH₃CO)(CO)I₃]⁻ + CO → CH₃COI + [Ir(CO)₂I₂]⁻',
        description: 'Eliminación reductiva de CH₃COI con regeneración del catalizador Ir(I).',
      },
      {
        step: 4,
        title: 'Promoción por Rutenio',
        equation: 'Ru(CO)₄I₂ + [Ir(CO)₂I₃(CH₃)]⁻ → agregado Ru-Ir → aceleración 700×',
        description: 'El rutenio forma agregados heterometálicos transitorios que abstraen un ligando yoduro del intermediario Ir(III), facilitando la coordinación de CO y la inserción migratoria.',
        notes: 'Relación molar Ru:Ir > 2:1. Reducción de ΔG‡ ≈ 20 kJ/mol.',
      },
    ],
    kinetics: {
      rateLaw: 'r = k[Ir][CO]/[I⁻] (mol L⁻¹ s⁻¹) (promovida por Ru)',
      rateDeterminingStep: 1,
    },
  },
  {
    id: 'acetica',
    processName: 'Proceso Acetica (KBR/Chiyoda - Rh Heterogéneo)',
    overallEquation: 'CH₃OH(l) + CO(g) → CH₃COOH(l)',
    enthalpy: 'ΔH°₂₉₈ = −135.6 kJ/mol',
    steps: [
      {
        step: 1,
        title: 'Adsorción y Reacción',
        equation: '[Rh(CO)₂I₂]⁻(sólido) + CH₃I(líquido) → Complejo Acilo',
        description: 'La química es similar al proceso Monsanto (catálisis por rodio), pero el centro activo [Rh(CO)₂I₂]⁻ está inmovilizado mediante enlaces iónicos fuertes en una resina de polivinilpiridina (PVP).',
      },
      {
        step: 2,
        title: 'Transferencia de Masa en Columna de Burbujas',
        equation: 'CO(g) → CO(l) → CO(superficie catalizador)',
        description: 'El CO se transfiere a la fase líquida y reacciona en la superficie de la resina sólida. La ausencia de agitación mecánica reduce la pérdida de energía y el riesgo de fugas.',
      }
    ],
  },
  {
    id: 'wacker',
    processName: 'Proceso Wacker (Pd/Cu)',
    overallEquation: 'C₂H₄(g) + ½O₂(g) → CH₃CHO(l) → CH₃COOH(l)',
    enthalpy: 'ΔH°₂₉₈ = −538 kJ/mol (reacción global)',
    steps: [
      {
        step: 1,
        title: 'Oxidación del Etileno',
        equation: '[PdCl₄]²⁻ + C₂H₄ + H₂O → CH₃CHO + Pd(0) + 2HCl + 2Cl⁻',
        description: 'El etileno se oxida a acetaldehído por el complejo de paladio(II) en medio acuoso ácido.',
      },
      {
        step: 2,
        title: 'Reoxidación del Paladio',
        equation: 'Pd(0) + 2CuCl₂ + 2Cl⁻ → [PdCl₄]²⁻ + 2CuCl',
        description: 'El paladio metálico se reoxida por el sistema redox CuCl₂/CuCl, regenerando el catalizador de Pd(II).',
      },
      {
        step: 3,
        title: 'Regeneración del Cobre',
        equation: '2CuCl + ½O₂ + 2HCl → 2CuCl₂ + H₂O',
        description: 'El CuCl se reoxida con oxígeno molecular (aire o O₂ puro) para cerrar el ciclo catalítico.',
      },
      {
        step: 4,
        title: 'Oxidación de Acetaldehído a Ácido Acético',
        equation: 'CH₃CHO + ½O₂ → CH₃COOH (Mn(OAc)₂ como catalizador)',
        description: 'Oxidación líquida del acetaldehído mediante mecanismo de radicales libres con ácido peracético como intermediario. El acetato de manganeso (0.5%) acelera la descomposición de peróxidos.',
        notes: 'T = 50–80 °C; P = 3–10 barg; selectividad >94%',
      },
    ],
  },
  {
    id: 'lpo',
    processName: 'LPO (Oxidación de Hidrocarburos)',
    overallEquation: 'n-C₄H₁₀(l) + ⁵⁄₂O₂(g) → 2CH₃COOH(l) + H₂O(l)',
    steps: [
      {
        step: 1,
        title: 'Iniciación Radical',
        equation: 'Co(II)(OAc)₂ → Co(III)(OAc)₃ + e⁻',
        description: 'El acetato de cobalto(II) se oxida a Co(III), generando radicales que inician la cadena de oxidación.',
      },
      {
        step: 2,
        title: 'Propagación Radical',
        equation: 'R· + O₂ → ROO· → productos oxidados',
        description: 'Mecanismo de radicales libres en fase líquida. La oxidación no selectiva produce mezcla de ácidos carboxílicos (acético, propiónico, fórmico).',
        notes: 'T = 150–200 °C; P = 48–62 barg; conversión butano 10–20%',
      },
    ],
  },
];

export const overallReactions = [
  { id: 'carbonylation', name: 'Carbonilación de Metanol', equation: 'CH₃OH + CO → CH₃COOH', conditions: '150–200 °C, 30–60 barg, catalizador Rh/Ir' },
  { id: 'wacker', name: 'Wacker (Etileno → Acetaldehído)', equation: 'C₂H₄ + ½O₂ → CH₃CHO', conditions: '120–130 °C, 3–10 barg, PdCl₂/CuCl₂' },
  { id: 'acetaldehyde_ox', name: 'Oxidación de Acetaldehído', equation: 'CH₃CHO + ½O₂ → CH₃COOH', conditions: '50–80 °C, 3–10 barg, Mn(OAc)₂' },
  { id: 'lpo', name: 'LPO (Butano)', equation: 'n-C₄H₁₀ + ⁵⁄₂O₂ → 2CH₃COOH + H₂O', conditions: '150–200 °C, 48–62 barg, acetato de Co' },
  { id: 'fermentation', name: 'Fermentación Aeróbica', equation: 'C₂H₅OH + O₂ → CH₃COOH + H₂O', conditions: '27–37 °C, 1.013 bara, Acetobacter' },
];
