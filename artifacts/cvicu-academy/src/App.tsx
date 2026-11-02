import { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, BookOpen, Bookmark, BrainCircuit, Check, ChevronDown, ChevronRight, ChevronUp, CircleHelp, Clock3, Crosshair, ExternalLink, FlaskConical, HeartPulse, Library, LockKeyhole, Menu, MonitorCog, Network, Pause, Play, Search, ShieldCheck, SlidersHorizontal, Sparkles, Stethoscope, Target, TrendingUp, UserRound, X, Zap } from 'lucide-react';
import { Link, Route, Router as WouterRouter, Switch, useLocation, useParams } from 'wouter';
import { MODULE_CONTENTS } from './data/module-content';
import { FOUNDATIONAL_MODULE_CONTENTS } from './data/foundational-module-content';

type Module = { id: string; number: string; title: string; phase: string; description: string; lessons: number; minutes: number; progress: number; status: 'complete' | 'active' | 'locked'; accent: string; objectives: string[] };
type Question = { id: string; domain: string; difficulty: 'Foundational' | 'Intermediate' | 'Advanced'; stem: string; choices: string[]; answer: number; rationale: string };
type CaseClinicalDetail = {
  history: string[];
  currentSupport: string[];
  initialAssessment: string[];
  trend: { time: string; findings: string[] }[];
  diagnostics: string[];
  decisionPoints: { prompt: string; coaching: string }[];
  calculations: { prompt: string; answer: string }[];
  escalation: string;
  fullDebrief: { heading: string; content: string }[];
};
type CaseStudy = { id: string; acuity: 'High acuity' | 'Moderate acuity' | 'Foundational'; title: string; diagnosis: string; setting: string; summary: string; tags: string[]; prompt: string; debrief: string[]; detail: CaseClinicalDetail };
type Resource = { id: string; name: string; category: string; type: 'Medication / drip' | 'Equipment'; snapshot: string; details: string[]; caution: string };
type ProgressState = { completedModules: string[]; dailyDone: boolean; answers: { questionId: string; domain: string; correct: boolean; difficulty: string }[] };

const MODULES: Module[] = [
  { id: 'heart-anatomy-physiology', number: '01', title: 'Complete heart anatomy & physiology', phase: 'Cardiac fundamentals', description: 'Master cardiac structures, blood flow, valves, coronary circulation, conduction, mechanics, output, and whole-body physiologic regulation.', lessons: 8, minutes: 109, progress: 0, status: 'active', accent: 'teal', objectives: ['Trace anatomy and circulation precisely', 'Connect electrical and mechanical cardiac function', 'Explain pressure, flow, oxygen delivery, and neurohormonal control'] },
  { id: 'heart-pathophysiology', number: '02', title: 'Comprehensive heart pathophysiology', phase: 'Cardiac fundamentals', description: 'Study the mechanisms, remodeling, hemodynamics, complications, and bedside patterns across the major families of heart disease.', lessons: 12, minutes: 232, progress: 0, status: 'locked', accent: 'coral', objectives: ['Differentiate major cardiovascular disease mechanisms', 'Connect pathology to assessment and hemodynamics', 'Recognize decompensation and time-critical complications'] },
  { id: 'cardiac-foundations', number: '03', title: 'Cardiac foundations', phase: 'Cardiac fundamentals', description: 'Build a reliable mental model for perfusion, preload, afterload, contractility, and the pressure-volume relationship.', lessons: 5, minutes: 48, progress: 100, status: 'complete', accent: 'teal', objectives: ['Connect cardiac output to bedside findings', 'Differentiate preload, afterload, and contractility', 'Recognize compensatory responses to low output'] },
  { id: 'hemodynamics', number: '04', title: 'Hemodynamics & waveform logic', phase: 'Cardiac fundamentals', description: 'Read the patient behind the number: pressure transducers, waveform quality, and trends that change a plan.', lessons: 7, minutes: 62, progress: 64, status: 'active', accent: 'coral', objectives: ['Level and zero a pressure transducer', 'Interpret CVP, PAP, and PAOP in context', 'Identify overdamped and underdamped waveforms'] },
  { id: 'ecg-arrhythmia', number: '05', title: 'ECG & rhythm recognition', phase: 'Cardiac fundamentals', description: 'Move from rate and rhythm to a focused first response for unstable and evolving dysrhythmias.', lessons: 6, minutes: 55, progress: 0, status: 'locked', accent: 'sky', objectives: ['Use a systematic rhythm approach', 'Distinguish wide-complex rhythms', 'Prioritize synchronized versus unsynchronized therapy'] },
  { id: 'ischemia', number: '06', title: 'Ischemia & acute coronary syndromes', phase: 'Cardiac fundamentals', description: 'Translate ischemic changes, biomarkers, and symptoms into safe escalation and post-intervention surveillance.', lessons: 5, minutes: 44, progress: 0, status: 'locked', accent: 'gold', objectives: ['Recognize STEMI and NSTEMI patterns', 'Monitor for mechanical complications', 'Anticipate post-PCI priorities'] },
  { id: 'valves', number: '07', title: 'Valves, sounds & mechanical support', phase: 'Cardiac stepdown', description: 'Sharpen assessment of valve disease and the early signals of decompensation after repair or replacement.', lessons: 6, minutes: 58, progress: 0, status: 'locked', accent: 'violet', objectives: ['Link murmurs to valve lesions', 'Assess prosthetic valve patients', 'Escalate new heart failure findings'] },
  { id: 'post-op', number: '08', title: 'Post-op cardiac recovery', phase: 'Cardiac stepdown', description: 'Structure the first hours after CABG and valve surgery around perfusion, bleeding, temperature, and pain.', lessons: 8, minutes: 74, progress: 0, status: 'locked', accent: 'coral', objectives: ['Trend chest tube output', 'Prevent common post-op complications', 'Prioritize handoff information'] },
  { id: 'ventilation', number: '09', title: 'Ventilation & oxygenation', phase: 'Cardiac stepdown', description: 'Use respiratory mechanics, ABGs, and clinical work of breathing to support the failing heart.', lessons: 7, minutes: 69, progress: 0, status: 'locked', accent: 'sky', objectives: ['Interpret core ABG patterns', 'Recognize acute respiratory fatigue', 'Coordinate oxygen and diuresis priorities'] },
  { id: 'shock', number: '10', title: 'Shock states & perfusion', phase: 'CVICU proficiency', description: 'Compare shock phenotypes quickly and build a bedside response from assessment through reassessment.', lessons: 8, minutes: 76, progress: 0, status: 'locked', accent: 'gold', objectives: ['Differentiate distributive and cardiogenic shock', 'Trend perfusion markers', 'Connect intervention to response'] },
  { id: 'drips', number: '11', title: 'Vasoactive infusions', phase: 'CVICU proficiency', description: 'Safely reason through titratable vasoactive infusions, access, compatibility, and the response you expect.', lessons: 9, minutes: 82, progress: 0, status: 'locked', accent: 'teal', objectives: ['Compare common vasoactive agents', 'Titrate to ordered endpoints', 'Recognize extravasation and adverse effects'] },
  { id: 'mechanical-support', number: '12', title: 'Mechanical circulatory support', phase: 'CVICU proficiency', description: 'Orient to IABP, Impella, and ECMO concepts without losing the fundamentals of patient assessment.', lessons: 10, minutes: 94, progress: 0, status: 'locked', accent: 'violet', objectives: ['Perform a device-focused assessment', 'Recognize alarms and urgent changes', 'Protect limb and end-organ perfusion'] },
  { id: 'renal-electrolytes', number: '13', title: 'Renal, electrolytes & acid-base', phase: 'CVICU proficiency', description: 'Make electrolyte and renal trends clinically useful in the patient with limited cardiac reserve.', lessons: 6, minutes: 61, progress: 0, status: 'locked', accent: 'sky', objectives: ['Prioritize dangerous electrolyte shifts', 'Use urine output as a perfusion trend', 'Anticipate acid-base consequences'] },
  { id: 'leadership', number: '14', title: 'CVICU practice & clinical leadership', phase: 'CVICU proficiency', description: 'Integrate surveillance, communication, delegation, and reflective practice into your shift rhythm.', lessons: 7, minutes: 66, progress: 0, status: 'locked', accent: 'coral', objectives: ['Frame a concise clinical escalation', 'Delegate with closed-loop communication', 'Build a plan for a changing assignment'] },
];

const ALL_MODULE_CONTENTS = { ...FOUNDATIONAL_MODULE_CONTENTS, ...MODULE_CONTENTS };

const BASE_QUESTIONS: Question[] = [
  { id: 'q1', domain: 'Hemodynamics', difficulty: 'Foundational', stem: 'A patient’s arterial waveform is visibly dampened after a line was repositioned. Which first action best validates the pressure reading?', choices: ['Increase the monitor gain', 'Inspect the tubing and flush system for air or clot', 'Raise the transducer above the phlebostatic axis', 'Silence the monitor alarm'], answer: 1, rationale: 'A dampened tracing can reflect air, clot, a kink, or a problem at the catheter. Inspect the system before acting on the number.' },
  { id: 'q2', domain: 'Perfusion', difficulty: 'Intermediate', stem: 'Which finding most strongly suggests worsening systemic perfusion in a patient receiving norepinephrine?', choices: ['Warm hands with brisk capillary refill', 'Urine output falling with a rising lactate', 'Heart rate decreasing from 104 to 92', 'CVP changing from 10 to 9 mmHg'], answer: 1, rationale: 'Falling urine output and rising lactate are concerning end-organ and metabolic markers that require prompt reassessment.' },
  { id: 'q3', domain: 'Rhythm management', difficulty: 'Foundational', stem: 'A patient becomes unresponsive with no pulse and the monitor shows ventricular fibrillation. What is the priority?', choices: ['Obtain a 12-lead ECG', 'Administer a beta blocker', 'Begin CPR and defibrillate as soon as possible', 'Prepare synchronized cardioversion'], answer: 2, rationale: 'Pulseless VF is a shockable arrest rhythm. High-quality CPR and unsynchronized defibrillation are immediate priorities.' },
  { id: 'q4', domain: 'Vasoactive infusions', difficulty: 'Intermediate', stem: 'When titrating a vasoactive infusion, which practice best protects the patient from an unintended abrupt change?', choices: ['Use the closest available peripheral IV', 'Change the rate in small increments and reassess the ordered endpoint', 'Titrate by doubling the rate when pressure is low', 'Pause the infusion during every assessment'], answer: 1, rationale: 'Small, ordered titrations with reassessment connect the dose to the patient response and limit overshoot.' },
  { id: 'q5', domain: 'Post-operative care', difficulty: 'Intermediate', stem: 'Four hours after CABG, chest tube output increases to 180 mL in the last hour. Your best next step is to:', choices: ['Document and reassess at the end of the shift', 'Strip the tubing vigorously', 'Assess the patient and notify the surgical team per protocol', 'Clamp the chest tube'], answer: 2, rationale: 'A sudden increase in output warrants immediate patient assessment and escalation under the unit’s post-op bleeding protocol.' },
  { id: 'q6', domain: 'Mechanical support', difficulty: 'Advanced', stem: 'A patient with an Impella has a new drop in support level and dark urine. Which concern should move highest on your assessment?', choices: ['Mild anxiety', 'Hemolysis or device-position problem', 'Expected response to mobilization', 'Isolated sinus tachycardia'], answer: 1, rationale: 'A drop in support with dark urine raises concern for hemolysis and/or malposition; assess alarms, position, perfusion, and escalate.' },
  { id: 'q7', domain: 'Ventilation', difficulty: 'Foundational', stem: 'Which patient finding signals increasing work of breathing and a need for prompt reassessment?', choices: ['Respiratory rate 16 with relaxed speech', 'New accessory muscle use and inability to speak full sentences', 'SpO₂ 97% on baseline oxygen', 'Clear breath sounds after coughing'], answer: 1, rationale: 'Work of breathing and the ability to speak are early clinical signals; a single oxygen saturation should not delay reassessment.' },
  { id: 'q8', domain: 'Electrolytes', difficulty: 'Advanced', stem: 'Which rhythm risk is most associated with significant hypokalemia in a post-operative cardiac patient?', choices: ['Ventricular dysrhythmia', 'First-degree AV block only', 'Sinus bradycardia with no ectopy', 'A fixed paced rhythm'], answer: 0, rationale: 'Low potassium increases myocardial irritability and raises the risk of ventricular ectopy and dysrhythmia, especially post-operatively.' },
];

const questionContexts = [
  'During morning assessment',
  'Following bedside handoff',
  'After a change in the monitor trend',
  'While preparing an SBAR escalation',
  'During reassessment after an intervention',
  'In the first hour after transfer',
  'While reviewing the overnight trend',
  'During a focused safety check',
];

const difficultyLevels: Question['difficulty'][] = ['Foundational', 'Intermediate', 'Advanced'];

const QUESTIONS: Question[] = Array.from({ length: 400 }, (_, index) => {
  const source = BASE_QUESTIONS[index % BASE_QUESTIONS.length];
  const context = questionContexts[Math.floor(index / BASE_QUESTIONS.length) % questionContexts.length];
  const difficulty = difficultyLevels[index % difficultyLevels.length];
  return {
    ...source,
    id: `q-${String(index + 1).padStart(3, '0')}`,
    difficulty,
    stem: `${context}, ${source.stem.charAt(0).toLowerCase()}${source.stem.slice(1)}`,
  };
});

const BASE_CASES: CaseStudy[] = [
  { id: 'case-01', acuity: 'High acuity', title: 'The narrowing margin', diagnosis: 'Post-CABG low cardiac output', setting: 'CVICU · 4 hours post-op', summary: 'A 67-year-old is cool, increasingly confused, and making less urine after an initially stable post-operative course.', tags: ['Perfusion', 'Post-op', 'Escalation'], prompt: 'You are receiving the 1600 assessment. What do you assess first, what trends matter, and how will you communicate the change?', debrief: ['Start with airway, breathing, circulation, mental status, and a focused device/tube check.', 'Trend MAP, cardiac index if available, urine output, lactate, temperature, rhythm, chest tube output, and the trajectory rather than a single value.', 'Use a concise escalation that states the change, supporting data, concern, and the response you need from the team.'], detail: {} as CaseClinicalDetail },
  { id: 'case-02', acuity: 'High acuity', title: 'Pressure without flow', diagnosis: 'Cardiogenic shock', setting: 'CVICU · vasoactive support', summary: 'A patient with acute LV failure has an adequate MAP on norepinephrine but worsening mottling and lactate.', tags: ['Shock', 'Drips', 'Perfusion'], prompt: 'How do you distinguish a pressure target from adequate tissue perfusion in this patient?', debrief: ['MAP is one part of perfusion assessment; follow mental status, skin, urine output, lactate, capillary refill, and hemodynamics.', 'Review the ordered goals and response to each infusion rather than treating a monitor value in isolation.', 'Escalate a mismatch between pressure and perfusion promptly.'], detail: {} as CaseClinicalDetail },
  { id: 'case-03', acuity: 'Moderate acuity', title: 'The rhythm that moved', diagnosis: 'New atrial fibrillation after valve surgery', setting: 'Cardiac stepdown · post-op day 2', summary: 'A patient reports new palpitations and lightheadedness; the telemetry rate has climbed from 88 to 146.', tags: ['Rhythm', 'Post-op', 'Assessment'], prompt: 'What makes this an urgent rhythm change, and what information belongs in your first call?', debrief: ['Assess stability first: blood pressure, mental status, ischemic symptoms, respiratory status, and signs of poor perfusion.', 'Confirm the rhythm with a focused assessment and obtain a 12-lead when appropriate.', 'Communicate onset, rate, symptoms, vital trend, relevant history, electrolytes, and current orders.'], detail: {} as CaseClinicalDetail },
  { id: 'case-04', acuity: 'Foundational', title: 'Read the whole patient', diagnosis: 'Volume overload with impaired gas exchange', setting: 'Cardiac stepdown · heart failure', summary: 'A patient has gained weight, is orthopneic, and now needs more oxygen than yesterday despite a reassuring resting saturation.', tags: ['Ventilation', 'Fluid balance', 'Clinical reasoning'], prompt: 'Which pieces of assessment help you separate a fluid problem from a primary respiratory change?', debrief: ['Compare weight, intake/output, lung sounds, edema, work of breathing, oxygen requirement, and response to prior therapy.', 'Ask what changed from baseline and use the timeline to shape the differential.', 'Reassess after any intervention; response is part of the clinical data.'], detail: {} as CaseClinicalDetail },
  { id: 'case-05', acuity: 'High acuity', title: 'Alarm to action', diagnosis: 'Impella support change', setting: 'CVICU · temporary mechanical support', summary: 'A support alarm sounds during a turn. The patient is awake but the waveform is smaller and the affected leg is cooler.', tags: ['Mechanical support', 'Safety', 'Device assessment'], prompt: 'Walk through your immediate safety check before troubleshooting the device alarm.', debrief: ['Stay with the patient, assess ABCs and perfusion, and call for help according to local protocol.', 'Check the console message, access/site, position-related changes, connections, and distal pulses without delaying escalation.', 'Do not silence or reset an alarm without understanding the cause and following the device protocol.'], detail: {} as CaseClinicalDetail },
];

const CASE_DETAILS: Record<string, CaseClinicalDetail> = {
  'case-01': {
    history: ['Three-vessel coronary artery disease; hypertension; type 2 diabetes', 'CABG ×3 completed four hours ago; bypass time 112 minutes', 'Preoperative LVEF 40%; baseline creatinine 1.1 mg/dL'],
    currentSupport: ['Volume-control ventilation, FiO₂ 40%, PEEP 5 cm H₂O', 'Norepinephrine and low-dose epinephrine per postoperative orders', 'Arterial line, central venous line, pulmonary artery catheter, mediastinal and pleural chest tubes, temporary epicardial pacing wires'],
    initialAssessment: ['HR 92 sinus rhythm; MAP 72 mmHg; CVP 9 mmHg', 'PAP 30/15 mmHg; cardiac index 2.3 L/min/m²', 'Warm extremities, brisk capillary refill, urine output 55 mL in the prior hour', 'Chest tube output 45 mL in the prior hour; hemoglobin 9.6 g/dL; lactate 2.1 mmol/L'],
    trend: [
      { time: '1400', findings: ['MAP 70; CI 2.2; CVP 10', 'Urine output 45 mL/hr; lactate 2.4', 'Patient follows commands during sedation pause'] },
      { time: '1500', findings: ['MAP 68; CI 1.9; CVP 13', 'Urine output 25 mL/hr; chest tube output 70 mL', 'Hands cooler; capillary refill 3 seconds'] },
      { time: '1600', findings: ['MAP 66 despite unchanged vasoactive support; CI 1.6; CVP 16', 'Urine output 10 mL/hr; lactate 4.0', 'Increasing confusion, narrow pulse pressure, cool mottled knees'] },
    ],
    diagnostics: ['Rhythm remains sinus without new ST change', 'ABG: pH 7.31, PaCO₂ 39, HCO₃⁻ 19, consistent with metabolic acidosis without adequate compensation yet', 'Hemoglobin 8.9 g/dL; potassium 4.2; ionized calcium below the unit target', 'Chest tube output is increasing but there is no abrupt cessation suggesting obvious tube obstruction'],
    decisionPoints: [
      { prompt: 'What is the immediate priority?', coaching: 'Assess airway and ventilation, verify invasive waveforms and equipment, perform a rapid perfusion and bleeding assessment, call for help, and prepare a concise escalation. Do not treat the cardiac index before validating the waveform and examining the patient.' },
      { prompt: 'Which pattern is most concerning?', coaching: 'Falling CI with rising filling pressure, oliguria, metabolic acidosis, and worsening mentation suggests declining forward flow. The trend is more important than any single MAP.' },
      { prompt: 'What alternatives belong in the differential?', coaching: 'Consider hypovolemia or bleeding, pump failure, tamponade, RV dysfunction, dysrhythmia, vasoplegia, tension physiology, graft ischemia, and measurement error. The pressure pattern and focused examination help narrow them.' },
    ],
    calculations: [
      { prompt: 'If cardiac output is 3.2 L/min and BSA is 2.0 m², calculate cardiac index.', answer: 'CI = CO ÷ BSA = 3.2 ÷ 2.0 = 1.6 L/min/m². Interpret it with the patient and trend; do not use a single value in isolation.' },
      { prompt: 'What does a rising CVP with a falling CI suggest?', answer: 'The right side is seeing more pressure while effective forward flow is falling. Possible explanations include ventricular dysfunction, tamponade physiology, excessive volume, pulmonary vascular load, or measurement error.' },
    ],
    escalation: '“Four hours after CABG, the patient has new confusion, cool mottled legs, urine output 10 mL this hour, lactate up from 2.1 to 4.0, CI down from 2.3 to 1.6, and CVP up from 9 to 16. Waveforms and tubing have been checked. I am concerned about acute low-output physiology and need the surgical and critical-care team at bedside now.”',
    fullDebrief: [
      { heading: 'Recognize the syndrome', content: 'Low cardiac output is inadequate forward blood flow. A nurse recognizes it through converging signs: altered mentation, cool skin, oliguria, rising lactate, narrowing pulse pressure, and a falling measured output. A “reasonable” MAP does not cancel evidence of poor tissue perfusion.' },
      { heading: 'Interpret pressure and flow together', content: 'CVP is a pressure, not a direct volume measurement. A rising CVP with falling cardiac index suggests congestion or impaired ejection rather than automatically proving the patient needs more fluid. Verify leveling, zeroing, waveform quality, and respiratory timing before using invasive numbers.' },
      { heading: 'Reassess the intervention', content: 'After any ordered change, compare the same endpoints: mentation, skin, urine output, lactate trajectory, rhythm, pressure, filling pressures, and cardiac output. The response helps confirm or challenge the working explanation.' },
    ],
  },
  'case-02': {
    history: ['Large anterior STEMI treated with PCI to the LAD', 'LVEF estimated at 20%; pulmonary edema on admission', 'No known chronic kidney disease; weight 82 kg'],
    currentSupport: ['High-flow oxygen; arterial and pulmonary artery monitoring', 'Norepinephrine titrated to the ordered MAP goal; dobutamine at the ordered rate', 'Urinary catheter and continuous ECG/ST monitoring'],
    initialAssessment: ['MAP 67; HR 108 sinus tachycardia; CI 1.8 L/min/m²', 'CVP 14; PAP 48/28; PAOP 24 mmHg', 'Cool feet, delayed capillary refill, crackles, urine output 20 mL/hr', 'Lactate 3.2 mmol/L'],
    trend: [
      { time: '0900', findings: ['MAP 67; CI 1.8; lactate 3.2', 'Patient anxious but oriented'] },
      { time: '1000', findings: ['MAP 71 after norepinephrine increase; CI 1.7', 'Lactate 4.1; urine output 15 mL'] },
      { time: '1100', findings: ['MAP 73; CI 1.5; lactate 5.0', 'New mottling, increasing somnolence, cooler extremities'] },
    ],
    diagnostics: ['SvO₂ has fallen from 58% to 48%', 'Creatinine rising from 1.0 to 1.4 mg/dL', 'No new sustained dysrhythmia; ST segments unchanged from post-PCI baseline', 'Chest radiograph shows pulmonary vascular congestion'],
    decisionPoints: [
      { prompt: 'Has the patient improved because MAP increased?', coaching: 'No. Pressure improved while flow and end-organ perfusion worsened. MAP is a treatment endpoint only when interpreted with cardiac output, mentation, skin, urine output, lactate, and venous oxygen saturation.' },
      { prompt: 'What does the hemodynamic profile suggest?', coaching: 'Low CI with high PAOP and high filling pressures is consistent with a cold-and-wet cardiogenic profile, assuming accurate measurements.' },
      { prompt: 'What should the nurse prepare for?', coaching: 'Immediate team reassessment, verification of all hemodynamic data, review of inotrope and vasopressor response, evaluation for mechanical complications, and possible escalation of mechanical circulatory support under local policy.' },
    ],
    calculations: [{ prompt: 'Why can lactate rise despite an adequate MAP?', answer: 'MAP reflects pressure, not oxygen delivery. If cardiac output and hemoglobin-mediated oxygen transport are inadequate, tissues may extract more oxygen and develop anaerobic metabolism even while vasoconstriction preserves pressure.' }],
    escalation: '“MAP is now 73, but the patient is more somnolent and mottled. CI fell from 1.8 to 1.5, SvO₂ from 58% to 48%, urine output is 15 mL/hr, and lactate rose to 5.0. I am concerned that vascular pressure is being maintained without adequate forward flow.”',
    fullDebrief: [
      { heading: 'Pressure is not perfusion', content: 'Vasoconstriction may raise arterial pressure while increasing afterload and leaving cardiac output inadequate. Expert assessment asks whether oxygenated blood is reaching organs, not merely whether the monitor displays the target MAP.' },
      { heading: 'Use a hemodynamic profile', content: 'Cardiogenic shock commonly combines reduced CI, elevated left-sided filling pressure, pulmonary congestion, cool skin, and impaired end-organ function. Mixed or evolving shock states are possible, so trends and bedside findings must continually update the differential.' },
      { heading: 'Escalate mismatch early', content: 'A worsening lactate, SvO₂, urine output, mentation, or skin examination despite a pressure response is a high-risk mismatch. The nurse should verify data and trigger urgent multidisciplinary reassessment rather than simply continuing the same titration strategy.' },
    ],
  },
  'case-03': {
    history: ['Bioprosthetic aortic valve replacement two days ago', 'History of hypertension; no prior atrial fibrillation', 'Temporary epicardial pacing wires remain in place'],
    currentSupport: ['Telemetry, peripheral IV access, supplemental oxygen at 2 L/min', 'Scheduled postoperative medications and electrolyte replacement protocol', 'Chest tubes removed earlier in the day'],
    initialAssessment: ['HR 88 sinus rhythm; BP 118/64; SpO₂ 96%', 'Pain controlled; alert and ambulatory with assistance', 'Potassium 3.7 mmol/L; magnesium 1.8 mg/dL'],
    trend: [
      { time: '1315', findings: ['Telemetry shows frequent PACs; patient denies symptoms'] },
      { time: '1330', findings: ['Irregular narrow-complex rhythm 128–146/min', 'Patient reports palpitations and lightheadedness'] },
      { time: '1340', findings: ['BP 92/54; RR 24; new mild chest pressure', 'Skin pale; patient remains oriented'] },
    ],
    diagnostics: ['12-lead ECG confirms atrial fibrillation with rapid ventricular response', 'No ST-elevation; postoperative changes require comparison with prior ECG', 'Repeat potassium and magnesium are pending', 'Hemoglobin stable; temperature 37.8°C'],
    decisionPoints: [
      { prompt: 'What comes before naming the rhythm?', coaching: 'Determine stability: airway, breathing, blood pressure, mental status, ischemic discomfort, heart failure signs, and perfusion. Rhythm identification and patient assessment occur together.' },
      { prompt: 'Which data belong in the first call?', coaching: 'Onset, rate and rhythm, symptoms, blood-pressure trend, oxygen requirement, current medications, electrolyte values, temporary-wire status, and any signs of ischemia or congestion.' },
      { prompt: 'Why are electrolytes relevant?', coaching: 'Potassium and magnesium abnormalities can increase atrial and ventricular irritability. Replacement must follow the active order set and account for renal function.' },
    ],
    calculations: [{ prompt: 'Estimate MAP for BP 92/54.', answer: 'MAP ≈ (SBP + 2×DBP) ÷ 3 = (92 + 108) ÷ 3 ≈ 67 mmHg. The symptoms and downward pressure trend matter even if the estimate appears near a common target.' }],
    escalation: '“Postoperative day two after AVR, new atrial fibrillation began about 15 minutes ago. Rate is 128–146, BP fell from 118/64 to 92/54, and the patient now has lightheadedness and mild chest pressure. A 12-lead confirms AF with RVR; electrolytes are pending. I need immediate evaluation for an unstable evolving rhythm.”',
    fullDebrief: [
      { heading: 'Stability determines urgency', content: 'Atrial fibrillation is common after cardiac surgery, but hypotension, ischemic discomfort, altered mentation, shock, or acute pulmonary edema changes the response. Never let a familiar rhythm label make symptoms seem routine.' },
      { heading: 'Look for correctable contributors', content: 'Pain, hypoxemia, fever, volume shifts, inflammation, electrolyte abnormalities, ischemia, and adrenergic medications may contribute. Identifying contributors supports the team plan but must not delay response to instability.' },
      { heading: 'Communicate time and trajectory', content: 'The onset time affects decision-making. A useful escalation states when the rhythm began, how fast it is, how the patient changed, and which diagnostics or protocol steps are already underway.' },
    ],
  },
  'case-04': {
    history: ['Heart failure with reduced ejection fraction, LVEF 30%', 'Chronic kidney disease stage 3 and hypertension', 'Admitted for worsening edema and exertional dyspnea'],
    currentSupport: ['Telemetry and oxygen increased from room air to 3 L/min', 'IV loop diuretic per active order; strict intake/output and daily weights', 'Fluid and sodium plan per the treating team'],
    initialAssessment: ['Weight 86.2 kg, up 2.4 kg from admission', 'BP 146/82; HR 102; RR 22; SpO₂ 94% on 3 L/min', 'Bibasilar crackles, elevated neck veins, 2+ leg edema, orthopnea'],
    trend: [
      { time: 'Day 1', findings: ['Urine output 1.8 L; oxygen 2 L/min', 'Weight decreased 0.6 kg'] },
      { time: 'Day 2 morning', findings: ['Urine output declined overnight; creatinine rose 1.5 to 1.9', 'More orthopnea; oxygen increased to 3 L/min'] },
      { time: 'Day 2 afternoon', findings: ['RR 28 with accessory muscle use', 'SpO₂ 93% on 4 L/min; patient cannot lie flat'] },
    ],
    diagnostics: ['Chest radiograph: bilateral interstitial opacities and small pleural effusions', 'BNP elevated but interpreted against prior values and clinical context', 'Sodium 131; potassium 3.4; bicarbonate 25', 'ECG shows sinus tachycardia without acute ischemic change'],
    decisionPoints: [
      { prompt: 'Which finding matters more than the resting saturation?', coaching: 'Increasing work of breathing, escalating oxygen need, inability to lie flat, and a worsening respiratory rate signal deterioration even when saturation remains in the low-to-mid 90s.' },
      { prompt: 'How do you judge diuretic response?', coaching: 'Use urine output timing, net balance, weight, symptoms, lung and edema findings, renal function, electrolytes, blood pressure, and oxygen need. No single measure is sufficient.' },
      { prompt: 'What competing concern requires attention?', coaching: 'Congestion is worsening while creatinine rises. The nurse should report both rather than independently withholding or intensifying therapy; perfusion, congestion, and the treatment goal need team reassessment.' },
    ],
    calculations: [{ prompt: 'What does a 2.4 kg weight increase roughly represent?', answer: 'In a short interval, 1 kg is often approximated as 1 liter of retained fluid, so 2.4 kg suggests about 2.4 liters. Measurement conditions and non-fluid causes can reduce precision.' }],
    escalation: '“The patient’s oxygen need increased from 2 to 4 L, RR is now 28 with accessory muscle use, orthopnea is worse, and weight remains 2.4 kg above admission. Urine output fell overnight and creatinine rose to 1.9. I am concerned about worsening congestion with declining renal tolerance and need reassessment now.”',
    fullDebrief: [
      { heading: 'Read respiratory effort early', content: 'Oxygen saturation can look temporarily acceptable while work of breathing rises. Respiratory rate, accessory-muscle use, speech, posture, fatigue, and oxygen trajectory often reveal deterioration earlier than a single saturation.' },
      { heading: 'Congestion and perfusion coexist', content: 'Heart-failure assessment asks whether the patient is congested, adequately perfused, or both. Renal dysfunction may reflect congestion, reduced forward flow, medication effects, or chronic disease. The trend must be interpreted with the whole examination.' },
      { heading: 'Measure response deliberately', content: 'A strong reassessment compares pre- and post-intervention findings using consistent weights, accurate intake/output, symptoms, oxygen needs, renal and electrolyte data, and physical findings.' },
    ],
  },
  'case-05': {
    history: ['Acute anterior MI with severe LV dysfunction and cardiogenic shock', 'Impella placed through the right femoral artery earlier today', 'Systemic anticoagulation and purge solution managed by the device protocol'],
    currentSupport: ['Impella at the ordered performance level, arterial line, central access', 'Norepinephrine and inotropic support per hemodynamic goals', 'Hourly neurovascular and device assessments'],
    initialAssessment: ['MAP 70; HR 104; CI improving after device placement', 'Right foot warm with palpable/dopplerable pulses; access site soft', 'Urine yellow; plasma-free hemoglobin within current reference range', 'Placement signal and motor current stable'],
    trend: [
      { time: 'Before turn', findings: ['Stable placement waveform and motor current', 'Both feet warm; pulses unchanged'] },
      { time: 'During turn', findings: ['Suction alarm appears; placement waveform changes', 'Flow estimate drops and arterial pulsatility narrows'] },
      { time: 'After returning supine', findings: ['Alarm persists; right foot cooler with weaker Doppler signal', 'Urine appears tea-colored; patient reports new groin discomfort'] },
    ],
    diagnostics: ['Hemoglobin has fallen 1 g/dL since placement; access site has no large visible hematoma', 'Plasma-free hemoglobin and LDH are now rising; haptoglobin result pending', 'Bedside echo/device-position evaluation requested', 'ACT/aPTT interpretation follows the active anticoagulation protocol'],
    decisionPoints: [
      { prompt: 'What is the first response to the alarm?', coaching: 'Assess the patient, call trained help, read the exact alarm, verify connections and position-related change, and follow the device-specific algorithm. Do not simply silence or reset the console.' },
      { prompt: 'What do the cool limb and weaker pulse suggest?', coaching: 'Possible limb ischemia or access-related vascular compromise. Compare color, temperature, capillary refill, sensation, movement, and Doppler signals bilaterally and escalate immediately.' },
      { prompt: 'Why does dark urine matter?', coaching: 'Tea-colored urine with changing device parameters can indicate hemolysis. Trend urine, hemoglobin, plasma-free hemoglobin, LDH, renal function, and the device position/suction pattern.' },
    ],
    calculations: [{ prompt: 'Why can low preload trigger a suction alarm?', answer: 'The pump may draw the ventricular wall or another structure toward the inlet when filling is inadequate or position changes. Causes can include hypovolemia, RV failure, tamponade physiology, excessive support, or malposition; the nurse follows the device algorithm and avoids assuming fluid is always the answer.' }],
    escalation: '“The Impella developed a persistent suction alarm during turning with a changed placement signal and lower displayed flow. The right foot is newly cool with a weaker Doppler pulse, urine is tea-colored, and hemolysis markers are rising. The patient is back supine, connections are intact, and I need the trained device and vascular teams at bedside immediately.”',
    fullDebrief: [
      { heading: 'Treat alarms as clinical data', content: 'An Impella alarm can reflect preload, afterload, rhythm, position, or equipment issues. The safe sequence begins with the patient and the exact alarm, then uses console information, hemodynamics, access assessment, and local device guidance.' },
      { heading: 'Protect limb and blood', content: 'Large-bore arterial access can threaten distal perfusion. Axial-flow support can also contribute to hemolysis, especially with suction or malposition. Neurovascular changes and dark urine are time-sensitive findings.' },
      { heading: 'Never improvise device management', content: 'Performance-level changes, repositioning, purge manipulation, and alarm overrides require the trained team and device-specific instructions. The bedside nurse’s expertise is early recognition, precise assessment, immediate escalation, and safe preparation.' },
    ],
  },
};

const caseContexts = [
  { age: 44, timing: 'during admission stabilization' },
  { age: 52, timing: 'after a change in vasoactive support' },
  { age: 61, timing: 'during the first focused reassessment' },
  { age: 67, timing: 'following interdisciplinary rounds' },
  { age: 73, timing: 'after bedside handoff' },
  { age: 79, timing: 'during overnight surveillance' },
  { age: 56, timing: 'while preparing for mobility' },
  { age: 70, timing: 'after a new laboratory result' },
];

const CASES: CaseStudy[] = Array.from({ length: 200 }, (_, index) => {
  const source = BASE_CASES[index % BASE_CASES.length];
  const context = caseContexts[Math.floor(index / BASE_CASES.length) % caseContexts.length];
  return {
    ...source,
    detail: CASE_DETAILS[source.id],
    id: `case-${String(index + 1).padStart(3, '0')}`,
    title: `${source.title} · ${String(index + 1).padStart(3, '0')}`,
    summary: `A ${context.age}-year-old ${source.summary.replace(/^A \d+-year-old /, '')} The change is recognized ${context.timing}.`,
  };
});

const BASE_RESOURCES: Resource[] = [
  { id: 'r1', name: 'Norepinephrine', category: 'Vasopressor', type: 'Medication / drip', snapshot: 'Raises vascular tone to support perfusion pressure.', details: ['Titrate only to ordered hemodynamic goals.', 'Use a dedicated line when possible and verify concentration.', 'Assess distal perfusion, rhythm, and the response—not MAP alone.'], caution: 'Follow your institution’s concentration, access, and extravasation protocol.' },
  { id: 'r2', name: 'Epinephrine', category: 'Inotrope / vasopressor', type: 'Medication / drip', snapshot: 'Supports contractility and vascular tone with dose-dependent effects.', details: ['Expect potential increases in heart rate and myocardial oxygen demand.', 'Trend lactate and glucose alongside perfusion findings.', 'Use an infusion pump and independent dose verification.'], caution: 'Dosing and indication are patient- and protocol-specific.' },
  { id: 'r3', name: 'Milrinone', category: 'Inodilator', type: 'Medication / drip', snapshot: 'Improves contractility with pulmonary and systemic vasodilation.', details: ['Hypotension and dysrhythmia are important adverse effects.', 'Renal clearance affects exposure and requires clinical context.', 'Assess pressure, rhythm, and perfusion after titration.'], caution: 'Do not use a reference entry as a substitute for the current medication guide.' },
  { id: 'r4', name: 'Vasopressin', category: 'Vasopressor', type: 'Medication / drip', snapshot: 'Provides non-adrenergic vascular support in selected shock states.', details: ['Monitor skin, digits, gut, and other signs of vasoconstriction.', 'Confirm the ordered fixed or titrated strategy.', 'Reassess perfusion when other vasoactives change.'], caution: 'Use only within a defined team plan and local protocol.' },
  { id: 'r5', name: 'Arterial line', category: 'Invasive pressure monitoring', type: 'Equipment', snapshot: 'Continuous arterial pressure and blood sampling with waveform context.', details: ['Level and zero at the phlebostatic axis.', 'Inspect the waveform before accepting a number.', 'Assess site, distal perfusion, securement, and infection prevention.'], caution: 'Never flush or manipulate a line without checking the institutional safety standard.' },
  { id: 'r6', name: 'Pulmonary artery catheter', category: 'Advanced hemodynamics', type: 'Equipment', snapshot: 'Provides right-sided, pulmonary, and cardiac output data when clinically indicated.', details: ['Know which port is transduced and what the waveform should look like.', 'Interpret numbers with timing, respiratory phase, and clinical condition.', 'Trend relationships rather than isolated values.'], caution: 'Only trained staff should manipulate or interpret advanced monitoring per local policy.' },
  { id: 'r7', name: 'IABP', category: 'Mechanical support', type: 'Equipment', snapshot: 'Counterpulsation timed to the cardiac cycle to reduce afterload and augment diastolic pressure.', details: ['Confirm timing and augmentation on the console and waveform.', 'Assess insertion site and both lower extremities.', 'Keep the leg straight and follow mobility restrictions.'], caution: 'Alarm response and troubleshooting must follow device-specific policy.' },
  { id: 'r8', name: 'Temporary pacing box', category: 'Rhythm support', type: 'Equipment', snapshot: 'Provides temporary atrial, ventricular, or dual-chamber pacing after cardiac surgery.', details: ['Identify mode, rate, output, sensitivity, and capture/sensing.', 'Keep emergency backup equipment available.', 'Assess the patient first when capture or sensing is uncertain.'], caution: 'Confirm settings against the provider order and handoff documentation.' },
];

const RESOURCES: Resource[] = [
  ...BASE_RESOURCES,
  { id: 'r9', name: 'Phenylephrine', category: 'Vasopressor', type: 'Medication / drip', snapshot: 'Predominantly alpha-adrenergic vasoconstriction for selected hypotension states.', details: ['Watch for reflex bradycardia and reduced forward flow.', 'Trend extremity temperature, capillary refill, urine output, and pressure.', 'Use the ordered concentration and titration range.'], caution: 'A higher pressure is not automatically improved perfusion; reassess the whole patient.' },
  { id: 'r10', name: 'Dobutamine', category: 'Inotrope', type: 'Medication / drip', snapshot: 'Beta-adrenergic inotropy used when contractility and forward flow need support.', details: ['Monitor for tachyarrhythmia, ischemia, and hypotension.', 'Pair pressure data with cardiac output and perfusion findings.', 'Reassess after every ordered titration.'], caution: 'Follow the hemodynamic plan and medication-library guidance for dosing.' },
  { id: 'r11', name: 'Dopamine', category: 'Inotrope / vasopressor', type: 'Medication / drip', snapshot: 'Dose-dependent adrenergic effects with important rhythm and perfusion implications.', details: ['Continuous ECG and blood-pressure monitoring are expected.', 'Assess for ectopy, tachycardia, and peripheral ischemia.', 'Confirm the clinical endpoint before titrating.'], caution: 'Do not use low-dose dopamine as a renal-protective strategy.' },
  { id: 'r12', name: 'Nitroglycerin', category: 'Vasodilator', type: 'Medication / drip', snapshot: 'Reduces preload and myocardial oxygen demand in selected ischemic or hypertensive states.', details: ['Trend blood pressure, chest discomfort, and signs of impaired perfusion.', 'Review recent PDE-5 inhibitor exposure and ordered hold parameters.', 'Protect tubing and follow the unit’s administration standard.'], caution: 'Hypotension can be rapid; follow ordered parameters and reassess symptoms.' },
  { id: 'r13', name: 'Nicardipine', category: 'Afterload reduction', type: 'Medication / drip', snapshot: 'Titrated arterial vasodilator used for controlled blood-pressure reduction.', details: ['Trend pressure at the ordered interval and watch for reflex tachycardia.', 'Assess the target organ concern driving the pressure goal.', 'Confirm line, concentration, and pump settings at handoff.'], caution: 'Treat the ordered goal and the patient context, not a generic number.' },
  { id: 'r14', name: 'Amiodarone', category: 'Antiarrhythmic', type: 'Medication / drip', snapshot: 'Used for selected atrial and ventricular dysrhythmias with rhythm-specific monitoring.', details: ['Assess rhythm, rate, blood pressure, QT interval, and infusion site.', 'Verify whether the order is for loading, maintenance, or bolus therapy.', 'Review medication interactions and organ-function context.'], caution: 'Follow current ACLS and institutional rhythm-management protocols.' },
  { id: 'r15', name: 'Esmolol', category: 'Rate control', type: 'Medication / drip', snapshot: 'Short-acting beta blocker for carefully selected tachyarrhythmia or pressure control.', details: ['Trend heart rate, blood pressure, perfusion, and bronchospasm risk.', 'Clarify hold parameters and target rate.', 'Reassess immediately after rate changes.'], caution: 'Use caution when contractility or perfusion is already marginal.' },
  { id: 'r16', name: 'Unfractionated heparin', category: 'Anticoagulant', type: 'Medication / drip', snapshot: 'Anticoagulation used in selected ACS, device, thromboembolic, and post-procedural plans.', details: ['Trend ordered coagulation results, platelets, bleeding, and access sites.', 'Verify weight-based protocol and independent dose check.', 'Communicate interruptions around procedures.'], caution: 'Use the active order set and institutional monitoring protocol.' },
  { id: 'r17', name: 'Insulin infusion', category: 'Metabolic support', type: 'Medication / drip', snapshot: 'Titrated glucose management for selected critically ill and post-operative patients.', details: ['Use point-of-care checks at the ordered frequency.', 'Coordinate rate changes with nutrition, steroids, and procedures.', 'Keep hypoglycemia rescue supplies available.'], caution: 'Never rely on memory for the current titration algorithm.' },
  { id: 'r18', name: 'Dexmedetomidine', category: 'Sedation', type: 'Medication / drip', snapshot: 'Sedation option that may preserve arousability while affecting heart rate and pressure.', details: ['Trend bradycardia, hypotension, delirium, and sedation target.', 'Pair the infusion with a sedation-assessment scale.', 'Use non-pharmacologic comfort and communication strategies too.'], caution: 'Follow the unit’s sedation and ventilator-weaning protocols.' },
  { id: 'r19', name: 'Propofol', category: 'Sedation', type: 'Medication / drip', snapshot: 'Rapid-onset sedative requiring close airway, pressure, and infusion monitoring.', details: ['Assess sedation target, blood pressure, triglycerides, and infusion duration.', 'Protect airway and ventilation while titrating.', 'Coordinate daily sedation interruption when ordered and appropriate.'], caution: 'Escalate unexplained metabolic or hemodynamic changes promptly.' },
  { id: 'r20', name: 'Fentanyl', category: 'Analgesia', type: 'Medication / drip', snapshot: 'Opioid analgesic used for pain control in mechanically supported and post-operative patients.', details: ['Assess pain with an appropriate scale and watch respiratory depression.', 'Trend bowel function, sedation, chest-wall rigidity risk, and blood pressure.', 'Use multimodal analgesia when ordered.'], caution: 'Sedation may mask deterioration; continue a structured assessment.' },
  { id: 'r21', name: 'Furosemide', category: 'Diuretic', type: 'Medication / drip', snapshot: 'Loop diuretic used to manage selected congestion and volume-overload states.', details: ['Trend urine output, daily weight, renal function, potassium, and magnesium.', 'Assess response rather than assuming diuresis occurred.', 'Coordinate replacement and fluid goals with the team.'], caution: 'Avoid treating a low urine output reflexively without assessing perfusion.' },
  { id: 'r22', name: 'Potassium chloride', category: 'Electrolyte replacement', type: 'Medication / drip', snapshot: 'Electrolyte replacement that requires concentration, route, rate, and rhythm awareness.', details: ['Verify the level, replacement protocol, renal function, and telemetry.', 'Use a pump and required independent double check.', 'Recheck the level at the ordered time.'], caution: 'Never administer IV potassium by direct IV push.' },
  { id: 'r23', name: 'Magnesium sulfate', category: 'Electrolyte replacement', type: 'Medication / drip', snapshot: 'Replacement and rhythm-support medication used in selected clinical situations.', details: ['Review renal function, reflexes, respiratory status, and repeat laboratory plan.', 'Clarify the indication and target level.', 'Continue rhythm assessment while treating.'], caution: 'Follow the active replacement or ACLS protocol; concentrations vary.' },
  { id: 'r24', name: 'Mechanical ventilator', category: 'Respiratory support', type: 'Equipment', snapshot: 'Supports oxygenation and ventilation while the nurse integrates mechanics with perfusion.', details: ['Review mode, settings, alarms, synchrony, and the patient’s work of breathing.', 'Trend blood gases and clinical response rather than chasing a single value.', 'Confirm emergency bag-mask equipment is available.'], caution: 'A ventilator alarm is a patient assessment trigger, not just a button to silence.' },
  { id: 'r25', name: 'ECMO circuit', category: 'Mechanical support', type: 'Equipment', snapshot: 'Extracorporeal support requiring circuit, cannula, oxygenation, flow, and perfusion surveillance.', details: ['Know the circuit configuration, flows, sweep, oxygenator, and alarm plan.', 'Assess cannulation sites, limb perfusion, bleeding, and neurologic status.', 'Escalate abrupt flow or color changes immediately.'], caution: 'Only trained ECMO staff should manipulate the circuit or respond to device-specific alarms.' },
  { id: 'r26', name: 'Impella console', category: 'Mechanical support', type: 'Equipment', snapshot: 'Tracks and controls temporary axial-flow support with device-specific alarms and parameters.', details: ['Review support level, placement signal, purge system, and alarm message.', 'Assess access site, distal perfusion, hemolysis indicators, and urine color.', 'Keep the patient and console in view during turns and transfers.'], caution: 'Use the current device manual and local response pathway for every alarm.' },
  { id: 'r27', name: 'Chest tube system', category: 'Post-operative drainage', type: 'Equipment', snapshot: 'Collects mediastinal or pleural drainage while providing a trend for bleeding and air leak.', details: ['Trend hourly output and characterize sudden changes.', 'Check connections, suction, water seal, tubing position, and insertion site.', 'Assess respiratory status and hemodynamics with every meaningful change.'], caution: 'Do not strip, milk, clamp, or disconnect outside the institutional protocol.' },
  { id: 'r28', name: 'CRRT machine', category: 'Renal support', type: 'Equipment', snapshot: 'Provides continuous fluid and solute management for selected unstable patients.', details: ['Trend access and return pressures, filter status, net balance, electrolytes, and temperature.', 'Verify the prescribed net fluid goal and interruptions.', 'Assess the patient before troubleshooting an alarm.'], caution: 'Follow the trained CRRT response pathway and anticoagulation protocol.' },
  { id: 'r29', name: '12-lead ECG', category: 'Diagnostic monitoring', type: 'Equipment', snapshot: 'Captures a diagnostic rhythm and ischemia snapshot that complements continuous telemetry.', details: ['Obtain promptly for new symptoms, rhythm change, or ischemic concern.', 'Confirm lead placement and patient symptoms at the time of capture.', 'Compare with prior ECGs and communicate the clinical context.'], caution: 'A normal snapshot does not exclude evolving ischemia or instability.' },
  { id: 'r30', name: 'Defibrillator / pacing system', category: 'Emergency rhythm support', type: 'Equipment', snapshot: 'Supports synchronized cardioversion, defibrillation, and external pacing when indicated.', details: ['Know the unit location, self-test status, pads, cables, and emergency roles.', 'Confirm rhythm and pulse before selecting synchronized or unsynchronized therapy.', 'Use closed-loop communication during a rhythm emergency.'], caution: 'Follow current resuscitation guidance and local emergency policy.' },
];

const DEFAULT_PROGRESS: ProgressState = { completedModules: ['cardiac-foundations'], dailyDone: false, answers: [] };
const phases = ['Cardiac fundamentals', 'Cardiac stepdown', 'CVICU proficiency'];
const navItems = [
  { href: '/', label: 'Overview', icon: Activity, testId: 'link-overview' },
  { href: '/learn', label: 'Learn', icon: BookOpen, testId: 'link-learn' },
  { href: '/library', label: 'Reference library', icon: Library, testId: 'link-library' },
  { href: '/cases', label: 'Case studies', icon: BrainCircuit, testId: 'link-cases' },
  { href: '/practice', label: 'Practice', icon: Target, testId: 'link-practice' },
  { href: '/progress', label: 'My progress', icon: TrendingUp, testId: 'link-progress' },
];

function cn(...values: (string | false | undefined)[]) { return values.filter(Boolean).join(' '); }
function readProgress(): ProgressState {
  try { return JSON.parse(localStorage.getItem('cvicu-progress') || JSON.stringify(DEFAULT_PROGRESS)); } catch { return DEFAULT_PROGRESS; }
}
function saveProgress(next: ProgressState) { localStorage.setItem('cvicu-progress', JSON.stringify(next)); }

function Badge({ children, tone = 'neutral' }: { children: string; tone?: 'neutral' | 'teal' | 'coral' | 'gold' | 'sky' | 'violet' }) {
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[.04em]', tone === 'teal' && 'bg-teal-50 text-teal-800', tone === 'coral' && 'bg-orange-50 text-orange-800', tone === 'gold' && 'bg-amber-50 text-amber-800', tone === 'sky' && 'bg-sky-50 text-sky-800', tone === 'violet' && 'bg-violet-50 text-violet-800', tone === 'neutral' && 'bg-slate-100 text-slate-600')}>{children}</span>;
}

function Button({ children, variant = 'primary', className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'quiet' | 'coral' }) {
  return <button {...props} className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-transform duration-200 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-45', variant === 'primary' && 'bg-[hsl(var(--primary))] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[hsl(174_55%_26%)]', variant === 'outline' && 'border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] hover:-translate-y-0.5 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]', variant === 'quiet' && 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]', variant === 'coral' && 'bg-[hsl(var(--accent))] text-white shadow-sm hover:-translate-y-0.5', className)}>{children}</button>;
}

function ProgressRing({ value, size = 62 }: { value: number; size?: number }) {
  return <div className="relative shrink-0" style={{ width: size, height: size }} aria-label={`${value}% complete`} data-testid={`progress-ring-${value}`}>
    <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(hsl(var(--primary)) ${value * 3.6}deg, hsl(var(--muted)) 0deg)` }} />
    <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-white"><span className="font-mono-clinical text-[11px] font-bold text-[hsl(var(--primary))]">{value}%</span></div>
  </div>;
}

function BrandMark() {
  return <div className="flex items-center gap-3" data-testid="brand-mark">
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]">
      <HeartPulse size={22} strokeWidth={2.5} />
      <span className="absolute bottom-1 left-2 right-2 h-px bg-current opacity-30" />
    </div>
    <div><p className="font-display text-[15px] font-bold tracking-[-.02em] text-white">CVICU Academy</p><p className="font-mono-clinical text-[9px] uppercase tracking-[.16em] text-slate-400">Nurse expert pathway</p></div>
  </div>;
}

function Sidebar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (value: boolean) => void }) {
  const [location] = useLocation();
  return <aside className={cn('fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col bg-[hsl(var(--sidebar))] px-4 py-5 text-[hsl(var(--sidebar-foreground))] transition-transform duration-300 lg:translate-x-0', mobileOpen ? 'translate-x-0' : '-translate-x-full')} data-testid="navigation-sidebar">
    <div className="mb-9 flex items-center justify-between px-2"><Link href="/" onClick={() => setMobileOpen(false)} data-testid="link-brand"><BrandMark /></Link><button className="rounded-md p-1 text-slate-400 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation" data-testid="button-close-navigation"><X size={18} /></button></div>
    <div className="mb-3 px-3 font-mono-clinical text-[9px] font-bold uppercase tracking-[.2em] text-slate-500">Your workspace</div>
    <nav className="space-y-1" aria-label="Primary navigation">
      {navItems.map(({ href, label, icon: Icon, testId }) => {
        const active = href === '/' ? location === '/' : location === href || location.startsWith(`${href}/`);
        return <Link key={href} href={href} onClick={() => setMobileOpen(false)} data-testid={testId} className={cn('group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors', active ? 'bg-[hsl(var(--sidebar-accent))] text-white' : 'text-slate-400 hover:bg-[hsl(var(--sidebar-accent))] hover:text-white')}><Icon size={17} className={active ? 'text-[hsl(var(--sidebar-primary))]' : 'text-slate-500 group-hover:text-slate-300'} /><span>{label}</span>{active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[hsl(var(--sidebar-primary))]" />}</Link>;
      })}
    </nav>
    <div className="mt-auto space-y-4">
      <div className="rounded-xl border border-[hsl(var(--sidebar-border))] bg-[hsl(215_31%_20%/.6)] p-4">
        <div className="mb-3 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><ShieldCheck size={16} /><span className="text-[11px] font-bold uppercase tracking-[.08em]">Clinical standard</span></div>
        <p className="text-xs leading-5 text-slate-400">Built for deliberate practice, supervised learning, and safer handoffs.</p>
      </div>
      <div className="flex items-center gap-3 border-t border-[hsl(var(--sidebar-border))] px-2 pt-4"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--sidebar-accent))] text-sm font-bold text-[hsl(var(--sidebar-primary))]">AL</div><div><p className="text-sm font-bold text-slate-200">Alex Lee, RN</p><p className="font-mono-clinical text-[9px] uppercase tracking-[.12em] text-slate-500">New-to-practice</p></div><button className="ml-auto text-slate-500 hover:text-white" aria-label="Profile options" data-testid="button-profile-options"><UserRound size={15} /></button></div>
    </div>
  </aside>;
}

function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const titles: Record<string, string> = { '/': 'Overview', '/learn': 'Learning pathway', '/library': 'Reference library', '/cases': 'Case study bank', '/practice': 'Adaptive practice', '/progress': 'My progress' };
  const detail = location.startsWith('/learn/') ? 'Module detail' : location.startsWith('/cases/') ? 'Case debrief' : '';
  return <div className="app-shell min-h-[100dvh] bg-[hsl(var(--background))]"><Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><div className="lg:pl-[264px]"><header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(210_30%_97%/.92)] px-5 backdrop-blur-md sm:px-8"><div className="flex items-center gap-3"><button className="rounded-lg border border-[hsl(var(--border))] bg-white p-2 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation" data-testid="button-open-navigation"><Menu size={18} /></button><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">CVICU Academy / <span className="text-[hsl(var(--primary))]">{detail || titles[location] || 'Workspace'}</span></p><div className="mt-1 hidden items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />Local learning workspace</div></div></div><div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-white px-3 py-1.5 text-[11px] font-bold text-[hsl(var(--muted-foreground))] sm:flex"><div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />Shift study mode</div><button className="rounded-lg p-2 text-[hsl(var(--muted-foreground))] hover:bg-white hover:text-[hsl(var(--foreground))]" aria-label="Notifications" data-testid="button-notifications"><CircleHelp size={19} /></button></div></header><main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10">{children}</main><SafetyNotice /></div></div>;
}

function SafetyNotice() { return <div className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-10"><div className="flex gap-3 rounded-xl border border-[hsl(42_81%_54%/.28)] bg-[hsl(42_81%_54%/.09)] p-4 text-[11px] leading-5 text-[hsl(35_37%_31%)]"><ShieldCheck className="mt-0.5 shrink-0 text-[hsl(42_81%_42%)]" size={16} /><p><strong>Educational supplement.</strong> CVICU Academy does not replace institutional protocols, current guidelines, credentialing requirements, or preceptor and faculty oversight. Clinical decisions must follow the resources and escalation pathways in your practice setting.</p></div></div>; }

function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--primary))]">{eyebrow}</p><h1 className="font-display text-3xl font-bold tracking-[-.04em] text-[hsl(var(--foreground))] sm:text-4xl">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{description}</p></div>{action}</div>;
}

function StatCard({ label, value, detail, icon: Icon, tone = 'teal' }: { label: string; value: string; detail: string; icon: typeof Activity; tone?: 'teal' | 'coral' | 'sky' | 'gold' }) {
  return <div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5 shadow-[var(--shadow-sm)]" data-testid={`stat-card-${label.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-5 flex items-start justify-between"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{label}</p><div className={cn('rounded-lg p-2', tone === 'teal' && 'bg-teal-50 text-teal-700', tone === 'coral' && 'bg-orange-50 text-orange-700', tone === 'sky' && 'bg-sky-50 text-sky-700', tone === 'gold' && 'bg-amber-50 text-amber-700')}><Icon size={16} /></div></div><p className="font-display text-3xl font-bold tracking-[-.05em]">{value}</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{detail}</p></div>;
}

function DashboardPage() {
  const [progress, setProgress] = useState(readProgress);
  const completeCount = progress.completedModules.length;
  const overall = Math.round((completeCount / MODULES.length) * 100);
  const activeModule = MODULES.find((module) => module.status === 'active') || MODULES[1];
  const toggleDaily = () => { const next = { ...progress, dailyDone: !progress.dailyDone }; setProgress(next); saveProgress(next); };
  return <div className="animate-enter-up"><PageIntro eyebrow="Monday · 06:40 local time" title="Good morning, Alex." description="A focused study plan for the next step in your cardiac practice." action={<Link href="/practice" data-testid="link-dashboard-practice" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5">Start a practice set <ArrowRight size={16} /></Link>} />
    <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Pathway progress" value={`${overall}%`} detail={`${completeCount} of ${MODULES.length} modules underway`} icon={TrendingUp} /><StatCard label="Practice accuracy" value={progress.answers.length ? `${Math.round(progress.answers.filter((a) => a.correct).length / progress.answers.length * 100)}%` : '—'} detail={progress.answers.length ? `${progress.answers.length} answered locally` : 'Complete your first set'} icon={Crosshair} tone="coral" /><StatCard label="Case studies" value="200" detail="Representative cases in bank" icon={BrainCircuit} tone="sky" /><StatCard label="Question capacity" value="400" detail="Adaptive questions available" icon={Zap} tone="gold" /></div>
    <div className="grid gap-6 xl:grid-cols-[1.35fr_.65fr]"><section className="rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white shadow-[var(--shadow-md)] sm:p-8" data-testid="card-daily-plan"><div className="mb-8 flex items-start justify-between gap-4"><div><div className="mb-3 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><Activity size={18} /><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.18em]">Today’s study plan</span></div><h2 className="font-display text-2xl font-bold tracking-[-.04em] sm:text-3xl">Read the waveform,<br /><span className="text-[hsl(var(--sidebar-primary))]">then read the patient.</span></h2></div><div className="hidden h-16 w-28 overflow-hidden opacity-70 sm:block"><svg viewBox="0 0 120 60" className="h-full w-full"><path d="M0 34h18l6-19 8 39 8-26 8 10h14l6-18 8 24 8-10h22" fill="none" stroke="hsl(174 55% 54%)" strokeWidth="2" className="animate-pulse-line" /></svg></div></div><div className="space-y-2">{[{ title: `Continue: ${activeModule.title}`, meta: 'Hemodynamics & waveform logic · 18 min', icon: Play, href: `/learn/${activeModule.id}`, done: false }, { title: 'One case, one escalation', meta: 'The narrowing margin · 12 min', icon: BrainCircuit, href: '/cases/case-01', done: false }, { title: 'Close with 10 questions', meta: 'Adaptive practice · 8 min', icon: Target, href: '/practice', done: progress.dailyDone }].map((item, index) => <Link key={item.title} href={item.href} data-testid={`link-daily-item-${index}`} className={cn('group flex items-center gap-4 rounded-xl border px-4 py-4 transition-colors', item.done ? 'border-[hsl(var(--sidebar-primary)/.28)] bg-[hsl(var(--sidebar-primary)/.1)]' : 'border-[hsl(var(--sidebar-border))] hover:bg-[hsl(var(--sidebar-accent))]')}><div className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', item.done ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]' : 'bg-[hsl(var(--sidebar-accent))] text-[hsl(var(--sidebar-primary))]')}>{item.done ? <Check size={16} /> : <item.icon size={16} />}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{item.title}</p><p className="mt-1 truncate text-xs text-slate-400">{item.meta}</p></div><ChevronRight size={17} className="text-slate-500 transition-transform group-hover:translate-x-1" /></Link>)}</div><button onClick={toggleDaily} data-testid="button-toggle-daily-plan" className="mt-5 text-xs font-bold text-[hsl(var(--sidebar-primary))] hover:underline">{progress.dailyDone ? 'Mark plan as open again' : 'Mark today’s plan complete'}</button></section>
      <section className="space-y-6"><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]" data-testid="card-pathway-progress"><div className="mb-5 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Your pathway</p><h2 className="mt-1 font-display text-xl font-bold">A measured climb</h2></div><ProgressRing value={overall} /></div><div className="space-y-4">{phases.map((phase, index) => { const phaseModules = MODULES.filter((m) => m.phase === phase); const done = phaseModules.filter((m) => progress.completedModules.includes(m.id)).length; return <div key={phase}><div className="mb-2 flex justify-between text-xs"><span className={cn('font-bold', index === 0 ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))')}>{phase}</span><span className="font-mono-clinical text-[10px] text-[hsl(var(--muted-foreground))]">{done}/{phaseModules.length}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className={cn('h-full rounded-full transition-all', index === 0 ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--border))]')} style={{ width: `${(done / phaseModules.length) * 100}%` }} /></div></div>; })}</div><Link href="/learn" data-testid="link-view-pathway" className="mt-6 flex items-center justify-between border-t border-[hsl(var(--border))] pt-4 text-xs font-bold text-[hsl(var(--primary))]">View full learning pathway <ArrowRight size={14} /></Link></div><div className="rounded-2xl border border-[hsl(174_55%_31%/.2)] bg-[hsl(174_55%_31%/.07)] p-6" data-testid="card-return-note"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--primary))]"><Bookmark size={16} /><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">A note to carry</span></div><p className="font-display text-lg font-semibold leading-7 text-[hsl(var(--foreground))]">“Trend the patient, not just the monitor.”</p><p className="mt-3 text-xs leading-5 text-[hsl(var(--muted-foreground))]">Your next shift will reward the habit of asking what changed, what matters, and what you need to do next.</p></div></section></div>
  </div>;
}

function LearnPage() {
  const [progress] = useState(readProgress);
  const totalMinutes = MODULES.reduce((sum, module) => sum + module.minutes, 0);
  return <div className="animate-enter-up"><PageIntro eyebrow="The pathway" title="Build the whole picture." description="Fourteen modules move from complete cardiac anatomy and disease mechanisms to confident CVICU surveillance. Each step is structured for focused study and review." action={<div className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2 text-xs font-bold"><BookOpen size={15} className="text-[hsl(var(--primary))]" />{MODULES.length} modules · {(totalMinutes / 60).toFixed(1)} hours</div>} /><div className="mb-8 flex flex-wrap gap-2">{phases.map((phase, index) => <div key={phase} className="flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))]"><span className={cn('flex h-6 w-6 items-center justify-center rounded-full font-mono-clinical text-[10px]', index === 0 ? 'bg-[hsl(var(--primary))] text-white' : 'bg-[hsl(var(--muted))]')}>{String(index + 1).padStart(2, '0')}</span>{phase}{index < 2 && <ChevronRight size={14} className="text-[hsl(var(--border))]" />}</div>)}</div><div className="space-y-8">{phases.map((phase, phaseIndex) => <section key={phase} data-testid={`section-phase-${phaseIndex}`}><div className="mb-3 flex items-end justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Phase 0{phaseIndex + 1}</p><h2 className="mt-1 font-display text-xl font-bold">{phase}</h2></div><span className="text-xs text-[hsl(var(--muted-foreground))]">{MODULES.filter((m) => m.phase === phase).length} modules</span></div><div className="grid gap-3">{MODULES.filter((m) => m.phase === phase).map((module) => { const isDone = progress.completedModules.includes(module.id); const isLocked = module.status === 'locked' && !isDone; return <Link key={module.id} href={`/learn/${module.id}`} data-testid={`card-module-${module.id}`} className={cn('group grid gap-4 rounded-xl border bg-white p-5 shadow-[var(--shadow-sm)] transition-all md:grid-cols-[56px_1fr_auto] md:items-center', isLocked ? 'opacity-65 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]' : 'hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]')} ><div className={cn('flex h-12 w-12 items-center justify-center rounded-xl font-mono-clinical text-xs font-bold', module.accent === 'teal' && 'bg-teal-50 text-teal-700', module.accent === 'coral' && 'bg-orange-50 text-orange-700', module.accent === 'sky' && 'bg-sky-50 text-sky-700', module.accent === 'gold' && 'bg-amber-50 text-amber-800', module.accent === 'violet' && 'bg-violet-50 text-violet-700')}>{module.number}</div><div className="min-w-0"><div className="mb-1 flex flex-wrap items-center gap-2"><h3 className="font-display text-base font-bold group-hover:text-[hsl(var(--primary))]">{module.title}</h3>{isDone && <Badge tone="teal">Complete</Badge>}{isLocked && <LockKeyhole size={13} className="text-[hsl(var(--muted-foreground))]" />}</div><p className="max-w-2xl text-sm leading-5 text-[hsl(var(--muted-foreground))]">{module.description}</p><div className="mt-3 flex gap-4 text-[11px] font-medium text-[hsl(var(--muted-foreground))]"><span className="flex items-center gap-1"><BookOpen size={13} />{module.lessons} lessons</span><span className="flex items-center gap-1"><Clock3 size={13} />{module.minutes} min</span></div></div><div className="flex items-center gap-4 md:flex-col md:items-end"><ProgressRing value={isDone ? 100 : module.progress} size={52} /><span className="flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">{isDone ? 'Review' : isLocked ? 'Preview' : 'Open module'} <ArrowRight size={13} /></span></div></Link>; })}</div></section>)}</div></div>;
}

function ModuleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const module = MODULES.find((item) => item.id === id) || MODULES[0];
  const moduleData = ALL_MODULE_CONTENTS[module.id];
  const lessons = moduleData?.lessons || [];
  
  const [progress, setProgress] = useState(readProgress);
  const [lesson, setLesson] = useState(0);
  
  // Lesson state
  const [showExample, setShowExample] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    setLesson(0);
    setShowExample(false);
    setShowCheck(false);
    setSelectedAnswer(null);
  }, [module.id]);

  useEffect(() => {
    setShowExample(false);
    setShowCheck(false);
    setSelectedAnswer(null);
  }, [lesson]);

  const done = progress.completedModules.includes(module.id);
  const current = lessons[lesson] || { title: 'Loading...', durationMinutes: 0, sections: [], bedsideCues: [], assessmentSequence: [], safetyPoints: [], workedExample: { context: '', action: '', outcome: '' }, activity: { prompt: '', type: 'reflection' }, knowledgeCheck: { question: '', options: [], answerIndex: 0, rationale: '' } };
  
  const complete = () => { 
    const next = progress.completedModules.includes(module.id) ? progress : { ...progress, completedModules: [...progress.completedModules, module.id] }; 
    setProgress(next); 
    saveProgress(next); 
  };
  
  return <div className="animate-enter-up">
    <Link href="/learn" data-testid="link-back-to-learn" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">
      <ArrowLeft size={14} /> Back to pathway
    </Link>
    
    <div className="grid gap-7 xl:grid-cols-[1fr_320px]">
      <article className="overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-white shadow-[var(--shadow-sm)]">
        <div className="relative overflow-hidden bg-[hsl(var(--sidebar))] px-6 py-8 text-white sm:px-10 sm:py-12">
          <div className="absolute right-8 top-8 opacity-25">
            <svg width="180" height="85" viewBox="0 0 180 85"><path d="M0 45h26l8-24 11 47 12-31 12 16h28l8-19 10 27 12-16h51" fill="none" stroke="hsl(174 55% 54%)" strokeWidth="2" /></svg>
          </div>
          <Badge tone="teal">{module.phase}</Badge>
          <p className="mt-4 font-mono-clinical text-[10px] uppercase tracking-[.18em] text-slate-400">Module {module.number} · {module.lessons} lessons · {module.minutes}m</p>
          <h1 className="relative mt-2 max-w-xl font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{module.title}</h1>
          <p className="relative mt-4 max-w-xl text-sm leading-6 text-slate-300">{module.description}</p>
        </div>
        
        <div className="p-6 sm:p-10">
          <div className="mb-7 flex items-center justify-between border-b border-[hsl(var(--border))] pb-6">
            <div>
              <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.15em] text-[hsl(var(--primary))]">Lesson {lesson + 1} of {lessons.length}</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-balance">{current.title}</h2>
            </div>
            <div className="text-right">
              <span className="flex items-center gap-1 font-mono-clinical text-xs text-[hsl(var(--muted-foreground))]">
                <Clock3 size={13} /> {current.durationMinutes} min
              </span>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none text-base leading-8 text-[hsl(var(--muted-foreground))]">
            {current.sections.map((section: any, i: number) => (
              <div key={i} className="mb-8">
                <h3 className="mb-3 font-display text-lg font-bold text-[hsl(var(--foreground))]">{section.heading}</h3>
                <p>{section.content}</p>
              </div>
            ))}
            
            <div className="my-8 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted)/.5)] p-6">
              <h4 className="mb-4 flex items-center gap-2 font-mono-clinical text-xs font-bold uppercase tracking-[.1em] text-[hsl(var(--foreground))]">
                <Target size={16} className="text-[hsl(var(--primary))]" /> Bedside Assessment Sequence
              </h4>
              <ul className="space-y-2">
                {current.assessmentSequence.map((seq: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm leading-6">
                    <span className="font-bold text-[hsl(var(--primary))]">{i + 1}.</span>
                    <span>{seq.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--accent))]">
                  <MonitorCog size={14} /> Key Bedside Cues
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm leading-6">
                  {current.bedsideCues.map((cue: string, i: number) => (
                    <li key={i}>{cue}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--primary))]">
                  <ShieldCheck size={14} /> Safety & Escalation
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm leading-6">
                  {current.safetyPoints.map((pt: string, i: number) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="my-8 rounded-xl border border-[hsl(var(--card-border))] bg-white shadow-sm">
            <button 
              onClick={() => setShowExample(!showExample)} 
              data-testid="button-toggle-example"
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[hsl(var(--muted)/.5)] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]">
                  <FlaskConical size={16} />
                </div>
                <div>
                  <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--primary))]">Clinical Context</p>
                  <p className="font-bold text-[hsl(var(--foreground))]">Worked Example</p>
                </div>
              </div>
              {showExample ? <ChevronUp size={20} className="text-[hsl(var(--muted-foreground))]" /> : <ChevronDown size={20} className="text-[hsl(var(--muted-foreground))]" />}
            </button>
            {showExample && (
              <div className="border-t border-[hsl(var(--border))] p-5 pb-6 text-sm leading-6" data-testid="container-worked-example">
                <p className="mb-3"><span className="font-bold text-[hsl(var(--foreground))]">Context:</span> {current.workedExample.context}</p>
                <p className="mb-3"><span className="font-bold text-[hsl(var(--foreground))]">Action:</span> {current.workedExample.action}</p>
                <p><span className="font-bold text-[hsl(var(--foreground))]">Outcome:</span> {current.workedExample.outcome}</p>
              </div>
            )}
          </div>
          
          <div className="my-8 rounded-xl border border-[hsl(var(--card-border))] bg-white shadow-sm">
            <button 
              onClick={() => setShowCheck(!showCheck)} 
              data-testid="button-toggle-knowledge-check"
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[hsl(var(--muted)/.5)] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent)/.1)] text-[hsl(var(--accent))]">
                  <BrainCircuit size={16} />
                </div>
                <div>
                  <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--accent))]">Knowledge Check</p>
                  <p className="font-bold text-[hsl(var(--foreground))]">Test your understanding</p>
                </div>
              </div>
              {showCheck ? <ChevronUp size={20} className="text-[hsl(var(--muted-foreground))]" /> : <ChevronDown size={20} className="text-[hsl(var(--muted-foreground))]" />}
            </button>
            {showCheck && (
              <div className="border-t border-[hsl(var(--border))] p-5 pb-6" data-testid="container-knowledge-check">
                <p className="mb-5 text-base font-medium leading-6 text-[hsl(var(--foreground))]">{current.knowledgeCheck.question}</p>
                <div className="space-y-3">
                  {current.knowledgeCheck.options.map((opt: string, i: number) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrect = i === current.knowledgeCheck.answerIndex;
                    const showResult = selectedAnswer !== null;
                    
                    let buttonClass = 'border-[hsl(var(--border))] bg-white text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary)/.5)]';
                    if (showResult) {
                      if (isCorrect) {
                        buttonClass = 'border-teal-500 bg-teal-50 text-teal-900';
                      } else if (isSelected) {
                        buttonClass = 'border-red-300 bg-red-50 text-red-900 opacity-60';
                      } else {
                        buttonClass = 'border-[hsl(var(--border))] bg-[hsl(var(--muted)/.3)] opacity-60 text-[hsl(var(--muted-foreground))]';
                      }
                    } else if (isSelected) {
                      buttonClass = 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.05)] text-[hsl(var(--primary))]';
                    }
                    
                    return (
                      <button 
                        key={i} 
                        onClick={() => setSelectedAnswer(i)}
                        disabled={showResult}
                        data-testid={`button-kc-option-${i}`}
                        className={`w-full rounded-lg border p-4 text-left text-sm transition-colors ${buttonClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${showResult && isCorrect ? 'border-teal-500 bg-teal-500 text-white' : showResult && isSelected ? 'border-red-400 bg-red-400 text-white' : 'border-[hsl(var(--border))]'}`}>
                            {showResult && isCorrect ? <Check size={12} /> : showResult && isSelected ? <X size={12} /> : String.fromCharCode(65 + i)}
                          </div>
                          <span className="leading-5">{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswer !== null && (
                  <div className="mt-5 rounded-lg bg-[hsl(var(--sidebar))] p-5 text-white animate-enter-up" data-testid="container-kc-rationale">
                    <p className="mb-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--sidebar-primary))]">Rationale</p>
                    <p className="text-sm leading-6 text-slate-300">{current.knowledgeCheck.rationale}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="mb-8 rounded-xl bg-[hsl(var(--muted)/.5)] p-6">
            <h4 className="mb-2 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--foreground))]">
              <Activity size={14} className="text-[hsl(var(--primary))]" /> {current.activity.type === 'reflection' ? 'Reflective Practice' : 'Clinical Activity'}
            </h4>
            <p className="text-sm italic leading-6 text-[hsl(var(--muted-foreground))]">"{current.activity.prompt}"</p>
          </div>

          <div className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-6">
            <Button variant="quiet" onClick={() => setLesson(Math.max(0, lesson - 1))} disabled={lesson === 0} data-testid="button-previous-lesson">
              <ArrowLeft size={15} /> Previous
            </Button>
            {lesson < lessons.length - 1 ? (
              <Button onClick={() => setLesson(lesson + 1)} data-testid="button-next-lesson">
                Next lesson <ArrowRight size={15} />
              </Button>
            ) : (
              <Button variant={done ? 'outline' : 'primary'} onClick={complete} data-testid="button-complete-module">
                {done ? <><Check size={15} /> Completed</> : <><Check size={15} /> Mark module complete</>}
              </Button>
            )}
          </div>
        </div>
      </article>
      
      <aside className="space-y-4">
        <div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-5 shadow-[var(--shadow-sm)]">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Module map</p>
          <div className="mt-4 space-y-2 max-h-[400px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
            {lessons.map((item: any, index: number) => (
              <button 
                key={item.id} 
                onClick={() => setLesson(index)} 
                data-testid={`button-lesson-${index}`} 
                className={cn('flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors', lesson === index ? 'bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]' : 'hover:bg-[hsl(var(--muted))]')}
              >
                <span className={cn('mt-0.5 shrink-0 font-mono-clinical text-[10px] font-bold', lesson > index && 'text-[hsl(var(--primary))]')}>
                  {lesson > index ? '✓' : `0${index + 1}`}
                </span>
                <span className={cn('text-xs font-bold leading-4', lesson === index ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--foreground))]')}>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="rounded-2xl border border-[hsl(var(--border))] p-5">
          <p className="text-sm font-bold">Need a clinical example?</p>
          <p className="mt-2 text-xs leading-5 text-[hsl(var(--muted-foreground))]">Test this concept against a case study before your next practice set.</p>
          <Link href="/cases/case-01" data-testid="link-module-case" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">Open a case <ArrowRight size={13} /></Link>
        </div>
      </aside>
    </div>
  </div>;
}
function LibraryPage() {
  const [tab, setTab] = useState<Resource['type']>('Medication / drip');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Resource | null>(null);
  const filtered = useMemo(() => RESOURCES.filter((resource) => resource.type === tab && `${resource.name} ${resource.category} ${resource.snapshot}`.toLowerCase().includes(query.toLowerCase())), [tab, query]);
  return <div className="animate-enter-up"><PageIntro eyebrow="Reference, not replacement" title="Keep the essentials close." description="A concise, searchable bedside refresher for common CVICU medications, infusions, and equipment. Always confirm against current local references." action={<div className="flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]"><MonitorCog size={16} /> {RESOURCES.length} core entries</div>} /><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-1 rounded-lg bg-[hsl(var(--muted))] p-1"><button onClick={() => setTab('Medication / drip')} data-testid="button-library-medications" className={cn('rounded-md px-4 py-2 text-xs font-bold', tab === 'Medication / drip' ? 'bg-white text-[hsl(var(--primary))] shadow-sm' : 'text-[hsl(var(--muted-foreground))]')}>Medication / drip</button><button onClick={() => setTab('Equipment')} data-testid="button-library-equipment" className={cn('rounded-md px-4 py-2 text-xs font-bold', tab === 'Equipment' ? 'bg-white text-[hsl(var(--primary))] shadow-sm' : 'text-[hsl(var(--muted-foreground))]')}>Equipment</button></div><label className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2.5 sm:w-72"><Search size={16} className="text-[hsl(var(--muted-foreground))]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the library" data-testid="input-library-search" className="w-full bg-transparent text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))]" /></label></div><div className="grid gap-3 lg:grid-cols-2">{filtered.map((resource) => <button key={resource.id} onClick={() => setSelected(resource)} data-testid={`card-resource-${resource.id}`} className="group rounded-xl border border-[hsl(var(--card-border))] bg-white p-5 text-left shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]"><div className="mb-4 flex items-start justify-between"><div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', resource.type === 'Equipment' ? 'bg-sky-50 text-sky-700' : 'bg-teal-50 text-teal-700')}>{resource.type === 'Equipment' ? <MonitorCog size={18} /> : <FlaskConical size={18} />}</div><ExternalLink size={15} className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><div className="flex items-center gap-2"><h2 className="font-display text-lg font-bold">{resource.name}</h2><Badge tone={resource.type === 'Equipment' ? 'sky' : 'teal'}>{resource.category}</Badge></div><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{resource.snapshot}</p><p className="mt-4 text-xs font-bold text-[hsl(var(--primary))]">Open clinical notes <ArrowRight size={13} className="ml-1 inline" /></p></button>)}</div>{filtered.length === 0 && <div className="rounded-xl border border-dashed border-[hsl(var(--border))] p-12 text-center"><Search className="mx-auto mb-3 text-[hsl(var(--muted-foreground))]" /><p className="font-bold">No reference matches that search.</p><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Try the generic name or switch views.</p></div>}{selected && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[hsl(215_40%_16%/.45)] p-4 sm:items-center" role="dialog" aria-modal="true" data-testid="dialog-resource"><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[var(--shadow-md)] sm:p-8"><div className="flex items-start justify-between"><div><Badge tone={selected.type === 'Equipment' ? 'sky' : 'teal'}>{selected.category}</Badge><h2 className="mt-3 font-display text-2xl font-bold">{selected.name}</h2></div><button onClick={() => setSelected(null)} className="rounded-lg p-1 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]" aria-label="Close resource" data-testid="button-close-resource"><X size={18} /></button></div><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{selected.snapshot}</p><ul className="mt-6 space-y-3">{selected.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6"><Check size={15} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{detail}</li>)}</ul><div className="mt-6 rounded-lg bg-amber-50 p-4 text-xs leading-5 text-amber-900"><strong>Safety note:</strong> {selected.caution}</div><Button variant="outline" className="mt-6 w-full" onClick={() => setSelected(null)} data-testid="button-done-resource">Close reference</Button></div></div>}</div>;
}

function CasesPage() {
  const [filter, setFilter] = useState<'All' | CaseStudy['acuity']>('All');
  const filtered = CASES.filter((item) => filter === 'All' || item.acuity === filter);
  return <div className="animate-enter-up"><PageIntro eyebrow="Think in sequences" title="Cases that ask more of you." description="Practice the moment before the call: recognize a changing patient, organize the signal, and choose the safest next question." action={<div className="rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2 text-xs font-bold"><span className="font-mono-clinical text-[hsl(var(--primary))]">200</span> case-study capacity</div>} /><div className="mb-6 flex flex-wrap gap-2">{(['All', 'High acuity', 'Moderate acuity', 'Foundational'] as const).map((value) => <button key={value} onClick={() => setFilter(value)} data-testid={`button-case-filter-${value.toLowerCase().replaceAll(' ', '-')}`} className={cn('rounded-full border px-3 py-2 text-xs font-bold transition-colors', filter === value ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white' : 'border-[hsl(var(--border))] bg-white text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]')}>{value}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{filtered.map((item, index) => <Link href={`/cases/${item.id}`} key={item.id} data-testid={`card-case-${item.id}`} className={cn('group relative overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1', index === 0 && 'md:col-span-2 md:grid md:grid-cols-[1fr_1fr] md:gap-8 md:bg-[hsl(var(--sidebar))] md:text-white')}><div className={cn('absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[hsl(var(--primary)/.07)]', index === 0 && 'md:bg-[hsl(var(--sidebar-primary)/.08)]')} /><div className="relative"><div className="mb-5 flex items-center justify-between"><Badge tone={item.acuity === 'High acuity' ? 'coral' : item.acuity === 'Moderate acuity' ? 'gold' : 'teal'}>{item.acuity}</Badge><span className={cn('font-mono-clinical text-[10px]', index === 0 ? 'text-slate-400' : 'text-[hsl(var(--muted-foreground))]')}>CASE {item.id.slice(-2)}</span></div><h2 className="font-display text-2xl font-bold tracking-[-.03em]">{item.title}</h2><p className={cn('mt-1 text-sm font-bold', index === 0 ? 'text-[hsl(var(--sidebar-primary))]' : 'text-[hsl(var(--primary))]')}>{item.diagnosis}</p></div><div className="relative mt-5 md:mt-0"><p className={cn('text-sm leading-6', index === 0 ? 'text-slate-300' : 'text-[hsl(var(--muted-foreground))]')}>{item.summary}</p><div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className={cn('rounded-full px-2 py-1 text-[10px] font-bold', index === 0 ? 'bg-[hsl(var(--sidebar-accent))] text-slate-300' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]')}>{tag}</span>)}</div><span className={cn('mt-6 inline-flex items-center gap-1 text-xs font-bold', index === 0 ? 'text-[hsl(var(--sidebar-primary))]' : 'text-[hsl(var(--primary))]')}>Open case <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div></div>;
}

export function LegacyCaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = CASES.find((item) => item.id === id) || CASES[0];
  const [revealed, setRevealed] = useState(false);
  return <div className="animate-enter-up"><Link href="/cases" data-testid="link-back-to-cases" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><ArrowLeft size={14} /> Back to case bank</Link><div className="grid gap-7 xl:grid-cols-[1fr_310px]"><article className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-10"><div className="flex flex-wrap items-center justify-between gap-3"><Badge tone={caseStudy.acuity === 'High acuity' ? 'coral' : 'teal'}>{caseStudy.acuity}</Badge><span className="font-mono-clinical text-[10px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{caseStudy.setting}</span></div><h1 className="mt-5 font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{caseStudy.title}</h1><p className="mt-2 text-base font-bold text-[hsl(var(--primary))]">{caseStudy.diagnosis}</p><div className="my-8 rounded-xl bg-[hsl(var(--background))] p-6"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Situation</p><p className="mt-3 text-base leading-8">{caseStudy.summary}</p></div><div className="border-l-4 border-[hsl(var(--accent))] pl-5"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Critical-thinking prompt</p><p className="mt-2 text-lg font-semibold leading-8">{caseStudy.prompt}</p></div><Button onClick={() => setRevealed(!revealed)} variant={revealed ? 'outline' : 'primary'} className="mt-8" data-testid="button-reveal-debrief">{revealed ? 'Hide debrief' : 'Reveal debrief'} <ArrowRight size={15} /></Button>{revealed && <div className="mt-7 animate-enter-up rounded-xl border border-[hsl(var(--primary)/.2)] bg-[hsl(var(--primary)/.06)] p-6" data-testid="section-case-debrief"><div className="mb-4 flex items-center gap-2 text-[hsl(var(--primary))]"><ShieldCheck size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">A safe reasoning sequence</p></div><ol className="space-y-4">{caseStudy.debrief.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6"><span className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span>{item}</li>)}</ol></div>}</article><aside className="space-y-4"><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Case lens</p><div className="mt-5 space-y-4"><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Primary domain</p><p className="mt-1 text-sm font-bold">{caseStudy.tags[0]}</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Decision habit</p><p className="mt-1 text-sm font-bold">Trend · assess · escalate</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Suggested time</p><p className="mt-1 flex items-center gap-1 text-sm font-bold"><Clock3 size={14} /> 12 minutes</p></div></div></div><Link href="/practice" data-testid="link-case-practice" className="flex items-center justify-between rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white transition-transform hover:-translate-y-0.5"><div><p className="font-display font-bold">Pressure-test your reasoning</p><p className="mt-1 text-xs text-slate-400">Build a short adaptive set</p></div><ArrowRight size={18} className="text-[hsl(var(--sidebar-primary))]" /></Link></aside></div></div>;
}

function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = CASES.find((item) => item.id === id) || CASES[0];
  const detail = caseStudy.detail;
  const [debriefOpen, setDebriefOpen] = useState(false);
  const [revealedDecision, setRevealedDecision] = useState<number | null>(null);

  return <div className="animate-enter-up">
    <Link href="/cases" data-testid="link-back-to-cases" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><ArrowLeft size={14} /> Back to case bank</Link>
    <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_310px]">
      <article className="space-y-6">
        <section className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white shadow-[var(--shadow-sm)] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3"><Badge tone={caseStudy.acuity === 'High acuity' ? 'coral' : caseStudy.acuity === 'Moderate acuity' ? 'gold' : 'teal'}>{caseStudy.acuity}</Badge><span className="font-mono-clinical text-[10px] uppercase tracking-[.14em] text-slate-400">{caseStudy.setting}</span></div>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{caseStudy.title}</h1>
          <p className="mt-2 text-base font-bold text-[hsl(var(--sidebar-primary))]">{caseStudy.diagnosis}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{caseStudy.summary}</p>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <CaseInfoPanel title="History and context" items={detail.history} testId="case-history" />
          <CaseInfoPanel title="Current support" items={detail.currentSupport} testId="case-support" />
        </div>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-initial-assessment">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Baseline assessment</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Before the condition changes</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">{detail.initialAssessment.map((item) => <div key={item} className="rounded-xl bg-[hsl(var(--background))] p-4 text-sm leading-6">{item}</div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-case-timeline">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Condition change</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Read the trend, not one number</h2>
          <div className="mt-7 space-y-0">
            {detail.trend.map((event, index) => <div key={event.time} className="relative grid gap-3 border-l-2 border-[hsl(var(--border))] pb-7 pl-6 sm:grid-cols-[90px_1fr]" data-testid={`timeline-event-${index}`}>
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[hsl(var(--primary))]" />
              <p className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">{event.time}</p>
              <ul className="space-y-2">{event.findings.map((finding) => <li key={finding} className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">{finding}</li>)}</ul>
            </div>)}
          </div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-diagnostics">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Diagnostics and corroborating data</p>
          <div className="mt-5 grid gap-3">{detail.diagnostics.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-[hsl(var(--border))] p-4 text-sm leading-6"><FlaskConical size={16} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{item}</div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-decision-points">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Critical-thinking checkpoints</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Commit to your reasoning before revealing guidance</h2>
          <div className="mt-6 space-y-4">{detail.decisionPoints.map((point, index) => <div key={point.prompt} className="rounded-xl border border-[hsl(var(--border))] p-5">
            <p className="font-semibold leading-7">{index + 1}. {point.prompt}</p>
            <Button variant="outline" className="mt-4" onClick={() => setRevealedDecision(revealedDecision === index ? null : index)} data-testid={`button-reveal-decision-${index}`}>{revealedDecision === index ? 'Hide coaching' : 'Reveal coaching'}</Button>
            {revealedDecision === index && <p className="mt-4 rounded-lg bg-[hsl(var(--primary)/.07)] p-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]" data-testid={`text-decision-coaching-${index}`}>{point.coaching}</p>}
          </div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-case-calculations">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Interpretation activity</p>
          <h2 className="mt-2 font-display text-xl font-bold">Calculate, then explain what it means</h2>
          <div className="mt-5 space-y-4">{detail.calculations.map((item) => <details key={item.prompt} className="group rounded-xl bg-[hsl(var(--background))] p-5">
            <summary className="cursor-pointer list-none text-sm font-bold" data-testid="summary-case-calculation">{item.prompt}<span className="float-right text-[hsl(var(--primary))]">Reveal answer</span></summary>
            <p className="mt-4 border-t border-[hsl(var(--border))] pt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{item.answer}</p>
          </details>)}</div>
        </section>

        <section className="rounded-2xl border-l-4 border-[hsl(var(--accent))] bg-[hsl(8_76%_61%/.07)] p-6 sm:p-8" data-testid="section-sbar-example">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Escalation practice</p>
          <h2 className="mt-2 font-display text-xl font-bold">Example urgent SBAR</h2>
          <p className="mt-4 text-sm font-semibold leading-7">{detail.escalation}</p>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8">
          <Button onClick={() => setDebriefOpen(!debriefOpen)} variant={debriefOpen ? 'outline' : 'primary'} data-testid="button-reveal-full-debrief">{debriefOpen ? 'Hide full debrief' : 'Reveal full clinical debrief'} <ArrowRight size={15} /></Button>
          {debriefOpen && <div className="mt-7 space-y-6 animate-enter-up" data-testid="section-full-case-debrief">{detail.fullDebrief.map((item, index) => <div key={item.heading} className="grid gap-2 border-t border-[hsl(var(--border))] pt-5 sm:grid-cols-[42px_1fr]"><span className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span><div><h3 className="font-display text-lg font-bold">{item.heading}</h3><p className="mt-2 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{item.content}</p></div></div>)}</div>}
        </section>
      </article>

      <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
        <div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Case lens</p><div className="mt-5 space-y-4"><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Primary domain</p><p className="mt-1 text-sm font-bold">{caseStudy.tags[0]}</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Decision habit</p><p className="mt-1 text-sm font-bold">Trend · verify · interpret · escalate</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Suggested time</p><p className="mt-1 flex items-center gap-1 text-sm font-bold"><Clock3 size={14} /> 20–30 minutes</p></div></div></div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-amber-950"><strong>Educational simulation.</strong> Values and responses are for clinical-reasoning practice. Follow current orders, institutional policy, device instructions, and the treating team in patient care.</div>
        <Link href="/practice" data-testid="link-case-practice" className="flex items-center justify-between rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white transition-transform hover:-translate-y-0.5"><div><p className="font-display font-bold">Pressure-test your reasoning</p><p className="mt-1 text-xs text-slate-400">Build a short adaptive set</p></div><ArrowRight size={18} className="text-[hsl(var(--sidebar-primary))]" /></Link>
      </aside>
    </div>
  </div>;
}

function CaseInfoPanel({ title, items, testId }: { title: string; items: string[]; testId: string }) {
  return <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]" data-testid={testId}><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">{title}</p><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check size={15} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{item}</li>)}</ul></section>;
}

function PracticePage() {
  const [mode, setMode] = useState<'setup' | 'taking' | 'feedback'>('setup');
  const [length, setLength] = useState(10);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [sessionAnswers, setSessionAnswers] = useState<{ questionId: string; domain: string; correct: boolean; difficulty: string }[]>([]);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<Question['difficulty']>('Foundational');
  const [progress, setProgress] = useState(readProgress);
  const question = useMemo(() => {
    const answeredIds = new Set(sessionAnswers.map((item) => item.questionId));
    const matching = QUESTIONS.filter((item) => item.difficulty === difficulty && !answeredIds.has(item.id));
    const remaining = matching.length ? matching : QUESTIONS.filter((item) => !answeredIds.has(item.id));
    return remaining[questionIndex % remaining.length] || QUESTIONS[0];
  }, [difficulty, questionIndex, sessionAnswers]);
  const score = sessionAnswers.length ? Math.round(sessionAnswers.filter((item) => item.correct).length / sessionAnswers.length * 100) : 0;
  const begin = () => { setMode('taking'); setQuestionIndex(0); setSelected(null); setSessionAnswers([]); setStreak(0); setDifficulty('Foundational'); };
  const answer = () => {
    if (selected === null) return;
    const correct = selected === question.answer;
    const current = { questionId: question.id, domain: question.domain, correct, difficulty: question.difficulty };
    const nextAnswers = [...sessionAnswers, current];
    const nextStreak = correct ? streak + 1 : 0;
    setSessionAnswers(nextAnswers);
    setStreak(nextStreak);
    setDifficulty(correct ? (nextStreak >= 4 ? 'Advanced' : nextStreak >= 2 ? 'Intermediate' : difficulty) : 'Foundational');
    if (nextAnswers.length >= length) { const next = { ...progress, answers: [...progress.answers, ...nextAnswers] }; setProgress(next); saveProgress(next); setMode('feedback'); } else { setQuestionIndex(questionIndex + 1); setSelected(null); }
  };
  if (mode === 'feedback') {
    const domainCounts = sessionAnswers.reduce<Record<string, { total: number; correct: number }>>((acc, item) => { acc[item.domain] = acc[item.domain] || { total: 0, correct: 0 }; acc[item.domain].total += 1; if (item.correct) acc[item.domain].correct += 1; return acc; }, {});
    const weak = Object.entries(domainCounts).filter(([, value]) => value.correct / value.total < .7).map(([key]) => key);
    return <div className="animate-enter-up"><PageIntro eyebrow="Session complete" title="Your feedback sheet." description="Use this as a study signal, not a verdict. The strongest next step is the one you can return to consistently." action={<Button variant="outline" onClick={() => setMode('setup')} data-testid="button-new-practice">New practice set <ArrowRight size={15} /></Button>} /><div className="grid gap-6 lg:grid-cols-[280px_1fr]"><div className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Session score</p><p className="mt-4 font-display text-6xl font-bold text-[hsl(var(--sidebar-primary))]">{score}%</p><p className="mt-2 text-sm text-slate-300">{sessionAnswers.filter((item) => item.correct).length} correct of {sessionAnswers.length}</p><div className="mt-8 border-t border-[hsl(var(--sidebar-border))] pt-5"><p className="text-xs font-bold text-slate-300">Difficulty reached</p><p className="mt-1 font-display text-lg font-bold">{difficulty}</p></div></div><div className="space-y-4"><div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5" data-testid="card-practice-strengths"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--primary))]"><TrendingUp size={16} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">What you did well</p></div><p className="text-sm leading-6">{score >= 70 ? 'You kept the patient context in view while moving through the set. Keep building speed without dropping the assessment sequence.' : 'You completed the full set and surfaced clear signals about where to focus next. That is useful practice data.'}</p></div><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5" data-testid="card-practice-weaknesses"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--accent))]"><Crosshair size={16} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">Weak domains</p></div><p className="text-sm leading-6">{weak.length ? weak.join(' · ') : 'No domain fell below the focus threshold in this set.'}</p></div></div><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Recommended next modules</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{(weak.length ? MODULES.filter((module) => weak.some((domain) => module.title.toLowerCase().includes(domain.toLowerCase().split(' ')[0]))).slice(0, 2) : MODULES.slice(1, 3)).map((module) => <Link href={`/learn/${module.id}`} key={module.id} data-testid={`link-recommended-${module.id}`} className="flex items-center justify-between rounded-lg bg-[hsl(var(--background))] p-3 text-sm font-bold hover:text-[hsl(var(--primary))]"><span>{module.title}</span><ArrowRight size={14} /></Link>)}</div></div></div></div></div>;
  }
  if (mode === 'taking') return <div className="mx-auto max-w-3xl animate-enter-up"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Adaptive practice · {difficulty}</p><p className="mt-2 font-display text-xl font-bold">Question {sessionAnswers.length + 1} <span className="text-[hsl(var(--muted-foreground))]">of {length}</span></p></div><button onClick={() => setMode('setup')} className="rounded-lg p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]" aria-label="Exit practice" data-testid="button-exit-practice"><X size={18} /></button></div><div className="mb-7 h-2 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className="h-full rounded-full bg-[hsl(var(--primary))] transition-all" style={{ width: `${sessionAnswers.length / length * 100}%` }} /></div><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-10"><div className="mb-8 flex items-center justify-between"><Badge tone="teal">{question.domain}</Badge><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{question.difficulty}</span></div><h1 className="font-display text-2xl font-bold leading-9 tracking-[-.025em] sm:text-3xl">{question.stem}</h1><div className="mt-8 space-y-3">{question.choices.map((choice, index) => <button key={choice} onClick={() => setSelected(index)} data-testid={`button-answer-${index}`} className={cn('flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm leading-6 transition-all', selected === index ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.08)] text-[hsl(var(--primary))]' : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/.55)]')}><span className={cn('flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono-clinical text-[10px] font-bold', selected === index ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white' : 'border-[hsl(var(--border))]')}>{String.fromCharCode(65 + index)}</span>{choice}</button>)}</div><div className="mt-8 flex items-center justify-between border-t border-[hsl(var(--border))] pt-6"><p className="text-xs text-[hsl(var(--muted-foreground))]">{streak > 0 ? `${streak} consecutive correct · next item may increase in difficulty` : 'Select the best answer to continue'}</p><Button onClick={answer} disabled={selected === null} data-testid="button-submit-answer">{sessionAnswers.length + 1 === length ? 'Finish set' : 'Submit answer'} <ArrowRight size={15} /></Button></div></div></div>;
  return <div className="animate-enter-up"><PageIntro eyebrow="Deliberate practice" title="Make the next call clearer." description="Choose a set length and the engine will shift difficulty as your reasoning stays consistent. Every answer is saved locally to your workspace." /><div className="grid gap-7 lg:grid-cols-[1fr_340px]"><section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-9"><div className="mb-8 flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]"><Target size={22} /></div><div><h2 className="font-display text-xl font-bold">Build an adaptive set</h2><p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Start at foundational difficulty. Two consecutive correct answers move the set up; an incorrect answer returns it to a foundational concept.</p></div></div><p className="mb-3 font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">How much time do you have?</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-5">{[10, 25, 50, 100, 200].map((value) => <button key={value} onClick={() => setLength(value)} data-testid={`button-practice-length-${value}`} className={cn('rounded-xl border p-4 text-left transition-all', length === value ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.08)]' : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/.45)]')}><p className="font-display text-xl font-bold">{value}</p><p className="mt-1 text-[11px] text-[hsl(var(--muted-foreground))]">{value <= 10 ? '8 min' : value <= 25 ? '18 min' : value <= 50 ? '35 min' : value <= 100 ? '70 min' : '2+ hrs'}</p></button>)}</div><Button className="mt-8 w-full sm:w-auto" onClick={begin} data-testid="button-start-practice">Start adaptive set <ArrowRight size={16} /></Button></section><aside className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white"><div className="mb-5 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><SlidersHorizontal size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">What changes</p></div><ul className="space-y-5">{['Difficulty follows your consecutive answers', 'Domain signals feed your feedback sheet', 'Answers and progress stay on this device'].map((text, index) => <li key={text} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="font-mono-clinical text-xs text-[hsl(var(--sidebar-primary))]">0{index + 1}</span>{text}</li>)}</ul><div className="mt-8 border-t border-[hsl(var(--sidebar-border))] pt-5"><p className="text-xs text-slate-400">Question capacity</p><p className="mt-1 font-display text-2xl font-bold text-white">400</p><p className="text-xs text-slate-400">Seeded topics across the pathway</p></div></aside></div></div>;
}

function ProgressPage() {
  const [progress] = useState(readProgress);
  const total = progress.answers.length;
  const correct = progress.answers.filter((answer) => answer.correct).length;
  const byDomain = Object.entries(progress.answers.reduce<Record<string, { total: number; correct: number }>>((acc, item) => { acc[item.domain] = acc[item.domain] || { total: 0, correct: 0 }; acc[item.domain].total += 1; if (item.correct) acc[item.domain].correct += 1; return acc; }, {}));
  return <div className="animate-enter-up"><PageIntro eyebrow="Your signal over time" title="Progress you can act on." description="This is a local snapshot of your learning rhythm. Use the pattern to choose what to revisit before your next supervised shift." action={<Link href="/practice" data-testid="link-progress-practice" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--primary))] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5">Practice now <ArrowRight size={15} /></Link>} /><div className="grid gap-4 sm:grid-cols-3"><StatCard label="Modules complete" value={`${progress.completedModules.length}/${MODULES.length}`} detail="Keep one concept moving forward" icon={BookOpen} /><StatCard label="Questions answered" value={String(total)} detail={total ? `${Math.round(correct / total * 100)}% overall accuracy` : 'Your first signal is waiting'} icon={Crosshair} tone="coral" /><StatCard label="Study rhythm" value={progress.dailyDone ? 'On plan' : 'Open'} detail={progress.dailyDone ? 'Today’s plan is logged' : 'Complete today’s plan'} icon={Activity} tone="sky" /></div><div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]"><section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="card-domain-performance"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Domain performance</p><h2 className="mt-1 font-display text-xl font-bold">Where to place your next hour</h2></div><Network size={19} className="text-[hsl(var(--primary))]" /></div>{byDomain.length ? <div className="space-y-5">{byDomain.map(([domain, result]) => { const value = Math.round(result.correct / result.total * 100); return <div key={domain} data-testid={`row-domain-${domain.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-2 flex items-center justify-between text-xs"><span className="font-bold">{domain}</span><span className={cn('font-mono-clinical text-[10px]', value < 70 ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--primary))')}>{value}% · {result.total} answered</span></div><div className="h-2 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className={cn('h-full rounded-full', value < 70 ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--primary))')} style={{ width: `${value}%` }} /></div></div>; })}</div> : <div className="rounded-xl border border-dashed border-[hsl(var(--border))] p-8 text-center"><Crosshair className="mx-auto mb-3 text-[hsl(var(--muted-foreground))]" size={24} /><p className="text-sm font-bold">No domain signal yet</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">Complete a 10-question set to see strengths and focus areas.</p><Link href="/practice" data-testid="link-empty-progress-practice" className="mt-4 inline-flex text-xs font-bold text-[hsl(var(--primary))]">Start your first set <ArrowRight size={13} className="ml-1" /></Link></div>}</section><section className="rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white shadow-[var(--shadow-md)] sm:p-8"><div className="mb-7 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><Sparkles size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">Actionable feedback</p></div><h2 className="font-display text-2xl font-bold leading-8">Small repetitions become calm decisions.</h2><div className="mt-7 space-y-4">{[progress.completedModules.length < 2 ? 'Finish the anatomy and pathophysiology modules, then return to waveform logic.' : 'Revisit the module where your last two answers missed.', total === 0 ? 'Start with 10 questions to reveal a baseline.' : 'Review the rationale after every miss before starting another set.', 'Use one case study to rehearse your escalation language.'].map((item, index) => <div key={item} className="flex gap-3 border-t border-[hsl(var(--sidebar-border))] pt-4"><span className="font-mono-clinical text-xs text-[hsl(var(--sidebar-primary))]">0{index + 1}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div><Link href="/learn" data-testid="link-progress-learning" className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--sidebar-primary))]">Return to the pathway <ArrowRight size={14} /></Link></section></div></div>;
}

function NotFoundPage() { return <div className="flex min-h-[55vh] flex-col items-center justify-center text-center"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]"><Activity /></div><h1 className="font-display text-3xl font-bold">That page is off the monitor.</h1><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Return to your workspace and pick up where you left off.</p><Link href="/" data-testid="link-not-found-home" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">Back to overview <ArrowRight size={15} /></Link></div>; }

function Router() {
  return <AppShell><Switch><Route path="/" component={DashboardPage} /><Route path="/learn" component={LearnPage} /><Route path="/learn/:id" component={ModuleDetailPage} /><Route path="/library" component={LibraryPage} /><Route path="/cases" component={CasesPage} /><Route path="/cases/:id" component={CaseDetailPage} /><Route path="/practice" component={PracticePage} /><Route path="/progress" component={ProgressPage} /><Route component={NotFoundPage} /></Switch></AppShell>;
}

function App() { return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>; }

export default App;