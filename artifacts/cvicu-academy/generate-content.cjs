const fs = require('fs');

const modulesData = {
  'cardiac-foundations': {
    titles: [
      'Preload and Ventricular Filling',
      'Afterload and Systemic Resistance',
      'Myocardial Contractility',
      'The Pressure-Volume Relationship',
      'Heart Rate and Cardiac Output'
    ],
    themes: [
      'Focus on how volume stretches the ventricle before contraction (Starling law).',
      'Analyze the resistance the heart must overcome to eject blood.',
      'Explore the intrinsic strength of the heart muscle independent of loading conditions.',
      'Connect the cardiac cycle phases to pressure and volume changes.',
      'Examine how extreme rates compromise filling time and stroke volume.'
    ]
  },
  'hemodynamics': {
    titles: [
      'Leveling and Zeroing the Transducer',
      'Arterial Waveform Analysis',
      'Central Venous Pressure (CVP) Interpretation',
      'Pulmonary Artery Pressure Tracings',
      'PAOP (Wedge) Pressure Logic',
      'Overdamped and Underdamped Systems',
      'Trending Hemodynamic Variables'
    ],
    themes: [
      'Accurate data requires standardizing the phlebostatic axis.',
      'Examine the anacrotic notch, dicrotic notch, and pulse pressure.',
      'Interpret right ventricular preload and compliance changes.',
      'Identify pulmonary hypertension and right heart strain markers.',
      'Assess left ventricular end-diastolic pressure indirectly.',
      'Troubleshoot the square wave test to ensure waveform fidelity.',
      'Connect multiple pressure readings to paint a full perfusion picture.'
    ]
  },
  'ecg-arrhythmia': {
    titles: [
      'Systematic Rhythm Analysis',
      'Sinus Node Dysfunction',
      'Atrial Arrhythmias in the ICU',
      'AV Blocks and Bradycardias',
      'Wide Complex Tachycardias',
      'Emergency Rhythm Response'
    ],
    themes: [
      'Master a step-by-step approach to rate, rhythm, axis, and intervals.',
      'Identify triggers for sinus bradycardia and tachycardia.',
      'Manage new-onset AFib and flutter with rapid ventricular response.',
      'Differentiate Wenckebach, Mobitz II, and Complete Heart Block.',
      'Distinguish VTach from SVT with aberrancy using morphology.',
      'Prioritize synchronized cardioversion vs defibrillation.'
    ]
  },
  'ischemia': {
    titles: [
      '12-Lead ECG Ischemia Patterns',
      'STEMI vs NSTEMI Pathology',
      'Cardiac Biomarkers in Context',
      'Post-PCI Sheath and Site Care',
      'Mechanical Complications of MI'
    ],
    themes: [
      'Identify ST elevation, depression, and T-wave inversions by territory.',
      'Understand plaque rupture, thrombosis, and myocardial oxygen supply/demand.',
      'Trend Troponin and CK-MB appropriately over time.',
      'Monitor for retroperitoneal bleeding, hematoma, and pseudoaneurysm.',
      'Recognize papillary muscle rupture and ventricular septal defects early.'
    ]
  },
  'valves': {
    titles: [
      'Aortic Stenosis and Aortic Regurgitation',
      'Mitral Valve Disease Dynamics',
      'Identifying Pathological Murmurs',
      'Prosthetic Valve Considerations',
      'Endocarditis and Acute Valvular Failure',
      'Post-Repair Hemodynamic Goals'
    ],
    themes: [
      'Manage fixed obstruction vs volume overload in the left ventricle.',
      'Address left atrial enlargement, pulmonary congestion, and AFib risk.',
      'Differentiate systolic and diastolic murmurs at the bedside.',
      'Anticipate anticoagulation needs and structural failure risks.',
      'Assess for septic emboli and rapidly worsening regurgitation.',
      'Optimize afterload and heart rate to protect the fresh surgical repair.'
    ]
  },
  'post-op': {
    titles: [
      'Receiving the Fresh Post-Op Patient',
      'Mediastinal Bleeding and Chest Tubes',
      'Rewarming and Vasoplegia',
      'Post-Operative Pain and Sedation',
      'Epicardial Pacing Strategies',
      'Early Extubation Protocols',
      'Glycemic Control and Infection Risk',
      'Mobilization and Recovery'
    ],
    themes: [
      'Execute a focused handoff prioritizing airway, bleeding, and hemodynamics.',
      'Trend chest tube output and recognize cardiac tamponade physiology.',
      'Manage vasodilation and shivering during the rewarming phase.',
      'Balance respiratory drive with adequate sternal pain relief.',
      'Troubleshoot temporary pacing thresholds and underlying rhythms.',
      'Assess readiness for liberation from mechanical ventilation.',
      'Implement tight insulin control without provoking hypoglycemia.',
      'Progress the patient safely from bed to chair to ambulation.'
    ]
  },
  'ventilation': {
    titles: [
      'Respiratory Mechanics and Work of Breathing',
      'Arterial Blood Gas Interpretation',
      'Oxygenation vs Ventilation Failure',
      'Non-Invasive Positive Pressure',
      'Ventilator Modes and Asynchrony',
      'Managing the Right Ventricle on PEEP',
      'Weaning and Extubation Readiness'
    ],
    themes: [
      'Observe accessory muscle use, tachypnea, and paradoxical breathing.',
      'Quickly identify uncompensated and partially compensated acid-base states.',
      'Distinguish hypoxic failure (ARDS/edema) from hypercapnic failure (fatigue).',
      'Use CPAP/BiPAP effectively for cardiogenic pulmonary edema.',
      'Troubleshoot high pressure, low volume, and patient-ventilator dyssynchrony.',
      'Understand how positive intrathoracic pressure affects venous return and RV afterload.',
      'Conduct spontaneous breathing trials (SBTs) and assess leak tests.'
    ]
  },
  'shock': {
    titles: [
      'The Phenotypes of Shock',
      'Cardiogenic Shock Assessment',
      'Distributive Shock in the CVICU',
      'Hypovolemic and Hemorrhagic States',
      'Obstructive Shock Physiology',
      'Mixed Shock States',
      'Monitoring End-Organ Perfusion',
      'Reassessing Interventions'
    ],
    themes: [
      'Classify shock rapidly into pump, tank, or pipe failures.',
      'Manage profound pump failure with inotropes and mechanical support.',
      'Identify sepsis or vasoplegia driving down systemic vascular resistance.',
      'Assess fluid responsiveness and manage massive transfusion protocols.',
      'Recognize tension pneumothorax, massive PE, and cardiac tamponade.',
      'Untangle the patient with both cardiogenic and septic features.',
      'Trend lactate, base deficit, urine output, and mental status changes.',
      'Evaluate whether a fluid bolus or vasoactive change met its clinical goal.'
    ]
  },
  'drips': {
    titles: [
      'Receptor Pharmacology Basics',
      'Norepinephrine and Vasopressin',
      'Epinephrine and Dopamine',
      'Inotropes: Milrinone and Dobutamine',
      'Vasodilators: Nitroglycerin and Nitroprusside',
      'Calcium Channel Blockers and Beta Blockers',
      'Sedatives and Analgesics',
      'Managing Extravasation',
      'Titrating to Clinical Effect'
    ],
    themes: [
      'Map alpha, beta, and dopaminergic receptors to clinical effects.',
      'Optimize SVR and vascular tone without sacrificing distal perfusion.',
      'Use mixed agents to support both contractility and pressure.',
      'Increase forward flow while managing the risk of hypotension and arrhythmias.',
      'Reduce preload and afterload to lower myocardial oxygen demand.',
      'Control rate and pressure using short-acting continuous infusions.',
      'Balance comfort, delirium risk, and respiratory drive using propofol, dexmedetomidine, and fentanyl.',
      'Recognize line infiltration and execute institutional rescue protocols (e.g., phentolamine).',
      'Adjust drips based on MAP, cardiac index, and urine output rather than arbitrary numbers.'
    ]
  },
  'mechanical-support': {
    titles: [
      'Indications for Mechanical Support',
      'Intra-Aortic Balloon Pump (IABP) Principles',
      'IABP Timing and Troubleshooting',
      'Impella Axial Flow Dynamics',
      'Impella Alarms and Positioning',
      'VA ECMO Hemodynamics',
      'VV ECMO Respiratory Support',
      'Anticoagulation and Hemolysis',
      'Protecting Distal Perfusion',
      'Weaning Mechanical Support'
    ],
    themes: [
      'Match the right device to the specific failure (LV, RV, or biventricular).',
      'Understand diastolic augmentation and systolic afterload reduction.',
      'Identify early, late, and loss of trigger errors on the arterial waveform.',
      'Grasp how continuous forward flow offloads the left ventricle.',
      'Respond to suction alarms, malposition indicators, and purge pressures.',
      'Manage extracorporeal flow replacing native cardiac and pulmonary function.',
      'Support profound respiratory failure while allowing lung rest.',
      'Monitor circuit integrity, PTT/Anti-Xa, and plasma free hemoglobin.',
      'Assess cannula sites frequently for acute limb ischemia and compartment syndrome.',
      'Assess native recovery during standardized flow reduction trials.'
    ]
  },
  'renal-electrolytes': {
    titles: [
      'Acute Kidney Injury in Heart Failure',
      'Diuretic Resistance Strategies',
      'CRRT Indications and Modalities',
      'Potassium and Magnesium Management',
      'Calcium and Phosphate Shifts',
      'Acid-Base Derangements'
    ],
    themes: [
      'Identify cardiorenal syndrome and the impact of elevated venous pressures.',
      'Implement sequential nephron blockade using loop and thiazide diuretics.',
      'Differentiate CVVH, CVVHD, and CVVHDF clearance mechanisms.',
      'Aggressively replete K+ and Mg2+ to prevent fatal ventricular arrhythmias.',
      'Manage ionized calcium in the context of massive transfusion and citrate CRRT.',
      'Correct severe acidosis that impairs catecholamine efficacy and myocardial function.'
    ]
  },
  'leadership': {
    titles: [
      'Structuring a Shift in the CVICU',
      'SBAR and Effective Escalation',
      'Crisis Resource Management',
      'Family Communication and Ethics',
      'Delegation and Closed-Loop Communication',
      'Mentoring and Bedside Teaching',
      'Debriefing and Reflective Practice'
    ],
    themes: [
      'Organize comprehensive assessments, medication titrations, and daily milestones.',
      'Communicate urgent changes concisely to providers to secure actionable orders.',
      'Adopt clear roles during a code or acute decompensation event.',
      'Navigate difficult goals-of-care conversations and end-of-life decisions.',
      'Assign tasks safely to assistive personnel and confirm completion.',
      'Share clinical pearls and foster a culture of inquiry among new nurses.',
      'Review critical events formally to improve team performance and process.'
    ]
  }
};

function generateLessons(moduleId, data) {
  return data.titles.map((title, i) => {
    const lessonNumber = i + 1;
    const theme = data.themes[i];
    return '    {\n' +
      '      id: "' + moduleId + '-lesson-' + lessonNumber + '",\n' +
      '      title: "' + title + '",\n' +
      '      durationMinutes: ' + (Math.floor(Math.random() * 6) + 5) + ',\n' +
      '      sections: [\n' +
      '        {\n' +
      '          heading: "Core Concept",\n' +
      '          content: "' + theme + ' In the context of ' + title + ', understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."\n' +
      '        },\n' +
      '        {\n' +
      '          heading: "Clinical Translation",\n' +
      '          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."\n' +
      '        },\n' +
      '        {\n' +
      '          heading: "Escalation and Response",\n' +
      '          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."\n' +
      '        }\n' +
      '      ],\n' +
      '      bedsideCues: [\n' +
      '        "Sudden variance in continuous monitoring data",\n' +
      '        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",\n' +
      '        "Changes in patient mentation or unexpected agitation",\n' +
      '        "Urine output falling below acceptable parameters"\n' +
      '      ],\n' +
      '      assessmentSequence: [\n' +
      '        "1. Secure ABCs immediately.",\n' +
      '        "2. Verify equipment and line integrity to rule out artifact.",\n' +
      '        "3. Perform a targeted physical exam focusing on tissue perfusion.",\n' +
      '        "4. Review recent medication titrations or fluid interventions.",\n' +
      '        "5. Formulate a structured SBAR to relay actionable findings."\n' +
      '      ],\n' +
      '      safetyPoints: [\n' +
      '        "Validate abnormal monitor readings with physical assessment before intervening.",\n' +
      '        "Follow institutional guidelines and specific device/drug IFUs closely.",\n' +
      '        "Maintain a low threshold for seeking help during rapid decline."\n' +
      '      ],\n' +
      '      workedExample: {\n' +
      '        context: "During an hourly assessment, you note a subtle but persistent negative trend related to ' + title.toLowerCase() + '.",\n' +
      '        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",\n' +
      '        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."\n' +
      '      },\n' +
      '      activity: {\n' +
      '        prompt: "Consider a recent patient interaction involving ' + title.toLowerCase() + '. What early warning signs were present, and how did your assessment drive the clinical response?",\n' +
      '        type: "reflection"\n' +
      '      },\n' +
      '      knowledgeCheck: {\n' +
      '        question: "When assessing a patient for complications related to ' + title.toLowerCase() + ', which clinical indicator warrants the most immediate intervention?",\n' +
      '        options: [\n' +
      '          "A mild, expected deviation in an isolated lab value",\n' +
      '          "A progressive decline in end-organ perfusion markers such as mentation and urine output",\n' +
      '          "A brief, self-resolving monitor alarm"\n' +
      '        ],\n' +
      '        answerIndex: 1,\n' +
      '        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."\n' +
      '      }\n' +
      '    }';
  });
}

let fileContent = 'export type Lesson = {\n' +
  '  id: string;\n' +
  '  title: string;\n' +
  '  durationMinutes: number;\n' +
  '  sections: { heading: string; content: string }[];\n' +
  '  bedsideCues: string[];\n' +
  '  assessmentSequence: string[];\n' +
  '  safetyPoints: string[];\n' +
  '  workedExample: {\n' +
  '    context: string;\n' +
  '    action: string;\n' +
  '    outcome: string;\n' +
  '  };\n' +
  '  activity: {\n' +
  '    prompt: string;\n' +
  '    type: "reflection" | "calculation" | "interpretation";\n' +
  '  };\n' +
  '  knowledgeCheck: {\n' +
  '    question: string;\n' +
  '    options: string[];\n' +
  '    answerIndex: number;\n' +
  '    rationale: string;\n' +
  '  };\n' +
  '};\n\n' +
  'export type ModuleContent = {\n' +
  '  moduleId: string;\n' +
  '  lessons: Lesson[];\n' +
  '};\n\n' +
  'export const MODULE_CONTENTS: Record<string, ModuleContent> = {\n';

for (const [moduleId, data] of Object.entries(modulesData)) {
  fileContent += '  "' + moduleId + '": {\n' +
    '    moduleId: "' + moduleId + '",\n' +
    '    lessons: [\n';
  const lessonsArray = generateLessons(moduleId, data);
  fileContent += lessonsArray.join(',\n') + '\n    ]\n  },\n';
}

fileContent += '};\n';

fs.writeFileSync('src/data/module-content.ts', fileContent);
