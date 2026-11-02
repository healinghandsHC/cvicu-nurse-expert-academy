module.exports = [
  {
    id: "valves",
    lessons: [
      {
        t: "Aortic Stenosis and Fixed Afterload", d: 6,
        s: [
          ["The Anatomy of Obstruction", "Aortic stenosis (AS) is a fixed mechanical obstruction at the LV outflow tract. To maintain stroke volume, the LV hypertrophies, becoming thick and non-compliant. A harsh systolic crescendo-decrescendo murmur is heard at the right upper sternal border, radiating to the carotids."],
          ["Preload Dependence", "Because the LV is stiff, it relies heavily on atrial kick and high filling pressures to stretch the muscle before contraction. Loss of normal sinus rhythm (e.g., new AFib) or aggressive diuresis can cause a catastrophic drop in cardiac output."],
          ["The Danger of Vasodilators", "The stenotic valve acts as a fixed resistor. If systemic vascular resistance drops (vasodilation, sepsis), the LV cannot increase stroke volume to compensate. The result is profound, refractory hypotension."]
        ],
        c: ["Harsh systolic murmur radiating to the neck", "Delayed, weak carotid upstrokes (pulsus parvus et tardus)", "Syncope, angina, or dyspnea on exertion"],
        sq: ["1. Maintain sinus rhythm; treat AFib aggressively.", "2. Avoid excessive diuresis; respect the need for higher filling pressures.", "3. Monitor for signs of ischemia (hypertrophied LV outstrips oxygen supply).", "4. Treat hypotension with alpha-agonists (phenylephrine) rather than pure inotropes."],
        sf: ["Avoid pure vasodilators like nitroglycerin or nitroprusside in severe AS.", "Do not assume a high PAOP means fluid overload; it may just be the stiff LV."],
        ex: ["A patient with severe AS is given nitroglycerin for chest pain. Their MAP plummets to 45.", "You recognize that dropping preload and afterload in a fixed-obstruction heart causes collapse.", "You lay them flat, give a small fluid bolus, and start phenylephrine to restore coronary perfusion pressure."],
        a: ["reflection", "Why is phenylephrine preferred over epinephrine in acute hypotension with severe AS?"],
        q: ["A patient with severe aortic stenosis develops new-onset atrial fibrillation with a heart rate of 120. They immediately become hypotensive. What is the primary physiological cause of the hypotension?", ["The rapid rate causes coronary vasospasm.", "Loss of atrial kick and reduced diastolic filling time in a stiff ventricle.", "The AFib causes sudden systemic vasodilation."], 1, "A hypertrophied, non-compliant LV is highly dependent on the 'atrial kick' to fill adequately. AFib destroys the atrial kick, and the rapid rate prevents filling, leading to a massive drop in stroke volume."]
      },
      {
        t: "Mitral Regurgitation and Forward Flow", d: 5,
        s: [
          ["The Path of Least Resistance", "In Mitral Regurgitation (MR), the mitral valve fails to close during systole. Blood takes the path of least resistance: some goes forward out the aorta, but much goes backward into the low-pressure left atrium. This causes a blowing holosystolic murmur at the apex."],
          ["Left Atrial Overload", "Chronic MR causes the LA to dilate, often leading to AFib. Acute MR (e.g., papillary rupture) dumps high-pressure blood into a normal-sized LA, causing instant, massive pulmonary edema (giant v-waves on a wedge tracing)."],
          ["Afterload Reduction is Key", "To maximize forward flow and minimize backward flow, systemic vascular resistance (afterload) must be lowered. Vasodilators (nitroprusside) or mechanical support (IABP) create a low-pressure systemic sink, pulling blood forward."]
        ],
        c: ["Holosystolic murmur at the apex radiating to the axilla", "Flash pulmonary edema in acute settings", "Giant v-waves on PAOP tracing"],
        sq: ["1. Assess respiratory status and work of breathing.", "2. Administer afterload-reducing agents as ordered (nitroprusside, IABP).", "3. Avoid massive volume loading which worsens the regurgitation.", "4. Prepare for definitive surgical repair in acute cases."],
        sf: ["Do not use pure vasoconstrictors (phenylephrine) unless absolutely necessary, as higher SVR forces more blood backward into the lungs.", "Acute MR is poorly tolerated and requires immediate escalation."],
        ex: ["Patient with acute MR is hypotensive and hypoxic.", "Instead of pressing the BP up with Norepinephrine (which would worsen the MR), the team places an IABP.", "The IABP drops systolic afterload, increasing forward stroke volume and reducing pulmonary edema."],
        a: ["calculation", "If SV is 100ml but 40ml regurgitates into the LA, what is the Regurgitant Fraction, and what is the effective forward SV?"],
        q: ["What is the primary hemodynamic goal when medically managing severe, acute mitral regurgitation?", ["Increase preload to maximize the Starling curve.", "Increase afterload to maintain a high mean arterial pressure.", "Decrease afterload to promote forward ejection into the aorta."], 2, "Decreasing afterload lowers the resistance in the aorta. Blood always takes the path of least resistance; lowering aortic pressure encourages forward flow rather than backward flow into the left atrium."]
      },
      {
        t: "Prosthetic Valves and Complications", d: 6,
        s: [
          ["Mechanical vs Bioprosthetic", "Mechanical valves last longer but are highly thrombogenic, requiring lifelong warfarin. Bioprosthetic (tissue) valves do not require lifelong anticoagulation but degenerate over 10-15 years. Both have distinct, crisp closing sounds."],
          ["Thrombosis and Pannus", "A mechanical valve that develops a clot (thrombosis) or tissue overgrowth (pannus) can become acutely stenotic or regurgitant. A muffled or absent 'click' from a mechanical valve is a massive red flag indicating restricted leaflet motion."],
          ["Endocarditis Risk", "Prosthetic valves are highly susceptible to infective endocarditis. New murmurs, unexplained fevers, petechiae, or embolic phenomena (stroke, cold limb) in a patient with a prosthetic valve require immediate blood cultures and echocardiography."]
        ],
        c: ["Muffled, changed, or absent mechanical valve clicks", "New embolic event (stroke, ischemic toe) with subtherapeutic INR", "Unexplained fever with a new murmur"],
        sq: ["1. Auscultate daily to memorize the baseline valve sounds.", "2. Monitor INR closely if on warfarin.", "3. Inspect skin for Janeway lesions or Osler nodes.", "4. Escalate immediately if valve sounds change."],
        sf: ["Never ignore a muffled mechanical valve sound; it indicates impending catastrophic failure.", "Ensure bridging anticoagulation (heparin) is flawless when warfarin is paused."],
        ex: ["A patient with a St. Jude mitral valve has a sudden drop in cardiac output and pulmonary edema.", "You auscultate and note the normally loud 'click' is completely absent.", "You call the provider stat; an echo reveals acute valve thrombosis locking the leaflets open."],
        a: ["interpretation", "Listen to a healthy mechanical valve online to recognize the sharp metallic closure sound."],
        q: ["A patient with a mechanical aortic valve is admitted with a GI bleed. Their warfarin is reversed. Three days later, you notice their mechanical 'click' is suddenly very soft, and they are dyspneic. What is the priority concern?", ["The valve has developed acute infective endocarditis.", "A thrombus has formed on the valve, restricting leaflet motion.", "The patient is experiencing a recurrent GI bleed."], 1, "Mechanical valves without anticoagulation thrombose rapidly. A muffled click means the leaflets cannot open/close fully due to clot, leading to acute stenosis/regurgitation and heart failure."]
      }
    ]
  },
  {
    id: "post-op",
    lessons: [
      {
        t: "The Golden Hours and Rewarming", d: 8,
        s: [
          ["The Immediate Post-Op State", "Patients arriving from cardiopulmonary bypass are cold, coagulopathic, and vasoconstricted. The 'Golden Hours' focus on rewarming, reversing vasoplegia, managing bleeding, and establishing adequate cardiac output while the stunned myocardium recovers."],
          ["The Rewarming Phase", "As the patient's core temperature rises, peripheral beds vasodilate. This causes a sudden drop in SVR and preload, leading to hypotension if not anticipated. Volume and low-dose vasopressors are often required to maintain MAP."],
          ["Shivering and Oxygen Demand", "Shivering during rewarming increases whole-body oxygen consumption (VO2) by up to 300-400%, rapidly draining the fragile cardiac reserve. Prevent shivering aggressively with paralytics, dexmedetomidine, or meperidine as ordered."]
        ],
        c: ["Sudden hypotension as core temp hits 36.5°C", "Visible muscle fasciculations/shivering", "Dropping SvO2 despite stable cardiac output"],
        sq: ["1. Monitor core temperature continuously (PA catheter or bladder).", "2. Anticipate vasodilation; have volume and pressors ready.", "3. Watch SvO2 and treat shivering immediately.", "4. Monitor chest tube output closely, as rewarming can unmask bleeding."],
        sf: ["Do not allow shivering in a fresh post-op cardiac patient.", "Never leave the bedside during the first active rewarming phase without a designated watcher."],
        ex: ["Patient's temp reaches 37.0°C. MAP drops from 75 to 55, and CVP drops from 10 to 4.", "Recognizing rewarming vasodilation, you administer a 250cc fluid bolus and slightly increase the norepinephrine drip.", "The MAP stabilizes without compromising the recovering heart."],
        a: ["reflection", "How does hypothermia affect the coagulation cascade?"],
        q: ["During the rewarming phase after CABG, a patient's SvO2 drops from 72% to 55% without a change in cardiac output or hemoglobin. What is the most likely cause?", ["Sudden onset of massive internal bleeding.", "Increased metabolic oxygen demand due to shivering.", "Acute failure of the left ventricle."], 1, "If CO and Hgb are stable, a drop in SvO2 means extraction (demand) has spiked. Shivering is the most common and dangerous cause of massive demand spikes during rewarming."]
      },
      {
        t: "Mediastinal Chest Tubes and Tamponade", d: 8,
        s: [
          ["Drainage Expectations", "Mediastinal tubes drain blood from around the heart. Output should steadily decrease (e.g., <100ml/hr for the first few hours, then tapering). A sudden spike in bright red blood indicates active surgical bleeding. A sudden cessation of drainage in a bleeding patient suggests clotting and impending tamponade."],
          ["Cardiac Tamponade Physiology", "Blood pooling in the inextensible pericardial sac compresses the right heart first, then the left. Filling is restricted, stroke volume plummets, and pressures equalize (CVP, PAD, and PAOP all approach 15-20 mmHg). MAP drops, and tachycardia ensues."],
          ["Becks Triad and Pulsus Paradoxus", "Classic signs are hypotension, JVD, and muffled heart sounds. Pulsus paradoxus (a >10 mmHg drop in systolic BP during inspiration) is a hallmark of tamponade on the arterial line tracing."]
        ],
        c: ["Sudden stop in previously heavy chest tube drainage", "Equalization of CVP and PAD", "Narrowing pulse pressure and tachycardia"],
        sq: ["1. Milk the chest tubes gently to clear clots (do not strip vigorously unless protocol dictates).", "2. Check for pulsus paradoxus on the art line.", "3. Assess CVP and PAD for equalization.", "4. Prepare for emergency bedside sternotomy if tamponade is confirmed."],
        sf: ["Never strip chest tubes vigorously without an order; it generates high negative pressure that can rupture grafts.", "Tamponade requires surgical decompression; volume loading only buys minutes."],
        ex: ["Chest tube output drops from 150ml/hr to zero. Ten minutes later, MAP is 50, CVP is 18, PAD is 18.", "You recognize tamponade, call the surgeon stat, and page for the emergency open-chest cart.", "The chest is opened at the bedside, releasing a massive clot and restoring BP instantly."],
        a: ["interpretation", "Look up how to measure pulsus paradoxus on an arterial line tracing using the freeze and cursor functions."],
        q: ["A patient 4 hours post-CABG has had 150ml/hr of chest tube drainage. Suddenly, drainage stops. The heart rate climbs to 120, MAP falls to 55, and CVP rises to 18. What is your immediate priority?", ["Administer a large fluid bolus and start high-dose norepinephrine.", "Strip the chest tubes aggressively and wait 30 minutes.", "Notify the surgical team immediately for suspected cardiac tamponade."], 2, "Sudden cessation of heavy bleeding combined with shock and high CVP is the classic presentation of clotted tubes leading to tamponade. It is a surgical emergency. Medical management will fail."]
      },
      {
        t: "Epicardial Pacing Strategies", d: 6,
        s: [
          ["Temporary Wires", "Epicardial wires are lightly sutured to the right atrium and right ventricle during surgery. They exit through the skin and attach to a pacing box. Atrial wires are usually on the right, ventricular on the left. Always secure them to prevent microshocks."],
          ["Modes and Settings", "AOO paces the atrium (needs intact AV node). VVI paces the ventricle (loses atrial kick). DDD paces both in sequence, maintaining AV synchrony and atrial kick, which provides up to 30% of cardiac output in a stiff, recovering post-op heart."],
          ["Troubleshooting Capture", "Failure to capture means the pacer fires (spike seen) but no QRS follows. Increase the mA (output) until capture is regained. Failure to sense means the pacer doesn't see the patient's native beats and fires randomly, potentially causing R-on-T and VFib. Increase sensitivity (lower the mV number) to fix it."]
        ],
        c: ["Pacer spikes not followed by a P-wave or QRS", "Pacer spikes landing on native T-waves", "Sudden drop in BP when atrial pacing is lost"],
        sq: ["1. Check connections from the patient to the cable, to the box.", "2. Ensure the battery is fresh and a spare is attached to the pole.", "3. If loss of capture, increase output (mA).", "4. If loss of sensing, adjust sensitivity (mV)."],
        sf: ["Wear gloves when handling bare epicardial wire pins to prevent microshock-induced VFib.", "Never leave the pacing box unlocked or hanging loosely."],
        ex: ["Patient's BP drops to 60/40. You look at the monitor and see pacing spikes, but no QRS complexes.", "You recognize failure to capture. You increase the ventricular output from 5 mA to 10 mA.", "Capture is restored, a wide QRS follows every spike, and the BP recovers to 110/70."],
        a: ["reflection", "Why is setting the sensitivity number *lower* (e.g., from 5mV to 2mV) actually making the pacemaker *more* sensitive?"],
        q: ["You observe pacing spikes occurring simultaneously with the patient's own native, narrow QRS complexes. What is this malfunction, and what is the risk?", ["Failure to capture; risk of asystole.", "Failure to sense; risk of R-on-T phenomenon causing VFib.", "Oversensing; risk of pacemaker mediated tachycardia."], 1, "The pacemaker is not 'seeing' the native beats (failure to sense), so it fires at its set rate blindly. If a spike lands on the vulnerable T-wave of a native beat (R-on-T), it can trigger lethal ventricular fibrillation."]
      }
    ]
  },
  {
    id: "ventilation",
    lessons: [
      {
        t: "ABG Interpretation and Compensation", d: 7,
        s: [
          ["The Core Equation", "pH is determined by the ratio of bicarbonate (HCO3, base, controlled by kidneys) to carbon dioxide (PaCO2, acid, controlled by lungs). Normal pH is 7.35-7.45. A primary respiratory problem (e.g., hypoventilation) causes a high PaCO2 and low pH."],
          ["Identifying Compensation", "The body attempts to maintain pH. If lungs fail (high PaCO2), the kidneys hold onto HCO3 to compensate, but this takes days. If kidneys fail (low HCO3), the lungs blow off CO2 (Kussmaul respirations) to compensate, which takes minutes to hours."],
          ["The Base Deficit", "Base Excess/Deficit measures the metabolic component independent of respiration. A Base Deficit > -4 indicates significant metabolic acidosis (lactic acidosis, DKA) and correlates tightly with mortality in shock states."]
        ],
        c: ["pH < 7.30 with a normal PaCO2 (Metabolic acidosis)", "pH < 7.30 with a high PaCO2 (Respiratory acidosis)", "Rapid, deep breathing in a non-pulmonary patient"],
        sq: ["1. Look at pH: Acidemia or Alkalemia?", "2. Look at PaCO2: Does it match the pH change? (If yes, respiratory).", "3. Look at HCO3/Base Deficit: Does it match? (If yes, metabolic).", "4. Check if the non-primary value is moving in the opposite direction to compensate."],
        sf: ["Do not 'correct' a low PaCO2 in a severely metabolic acidotic patient; they need that respiratory compensation to survive.", "Always treat the underlying cause (e.g., perfusion), not just the pH number."],
        ex: ["A patient in shock has a pH of 7.20, PaCO2 of 25, and HCO3 of 12.", "You recognize primary metabolic acidosis (low HCO3) with partial respiratory compensation (blowing off CO2).", "Instead of slowing the ventilator to 'fix' the CO2, you increase fluid and pressors to fix the lactic acidosis."],
        a: ["calculation", "Calculate the Anion Gap (Na - [Cl + HCO3]). A gap > 12 implies unmeasured acids like lactate or ketones."],
        q: ["A patient's ABG shows: pH 7.25, PaCO2 60, HCO3 26. What is the primary derangement?", ["Uncompensated respiratory acidosis", "Compensated metabolic acidosis", "Uncompensated metabolic alkalosis"], 0, "The pH is acidotic. The PaCO2 is high (acidic), matching the pH. The HCO3 is normal (22-26), meaning the kidneys have not yet compensated. This is an acute, uncompensated respiratory acidosis."]
      },
      {
        t: "PEEP and Right Heart Interactions", d: 6,
        s: [
          ["Intrathoracic Pressure", "Positive End-Expiratory Pressure (PEEP) keeps alveoli open, improving oxygenation. However, the lungs share a small box with the heart. High PEEP increases intrathoracic pressure, which physically squeezes the vena cava and right atrium, reducing venous return (preload)."],
          ["Right Ventricular Afterload", "High PEEP also compresses the pulmonary capillaries surrounding the alveoli. This increases Pulmonary Vascular Resistance (PVR), forcing the Right Ventricle (RV) to push against a higher afterload. In extreme cases, this causes acute cor pulmonale."],
          ["The Hemodynamic Tradeoff", "In ARDS, PEEP is life-saving for gas exchange, but it can cause profound hypotension. You must optimize intravascular volume and sometimes add inotropes (e.g., dobutamine) to help the RV overcome the ventilator-induced afterload."]
        ],
        c: ["Sudden drop in MAP immediately after increasing PEEP", "Rising CVP with a falling Cardiac Output", "Signs of acute right heart strain on echo"],
        sq: ["1. Monitor BP continuously during any PEEP titration.", "2. Assess volume status; a 'dry' patient will crash on high PEEP.", "3. Evaluate RV function (CVP trends, PA pressures).", "4. Balance oxygenation goals with perfusion goals."],
        sf: ["Do not increase PEEP in a hypovolemic patient without anticipating hypotension.", "A patient crashing after intubation is often suffering from the sudden switch from negative to positive intrathoracic pressure."],
        ex: ["Patient with severe ARDS is stepped up from PEEP 10 to 18 to fix hypoxemia.", "MAP drops to 50 within minutes. You quickly administer a fluid bolus and start low-dose norepinephrine.", "The volume restores venous return against the high intrathoracic pressure, stabilizing the MAP while allowing the high PEEP."],
        a: ["reflection", "Why do asthma/COPD patients with severe air-trapping (Auto-PEEP) frequently present with hypotension?"],
        q: ["How does applying 15 cmH2O of PEEP affect the hemodynamics of a hypovolemic patient?", ["It increases cardiac output by driving blood forward.", "It drastically decreases venous return, causing severe hypotension.", "It decreases pulmonary vascular resistance, unloading the right ventricle."], 1, "High intrathoracic pressure compresses the great veins, cutting off venous return. In a hypovolemic patient, the venous pressure is already too low to overcome this squeeze, leading to an abrupt loss of preload and cardiac output."]
      }
    ]
  },
  {
    id: "shock",
    lessons: [
      {
        t: "Cardiogenic Shock and Pump Failure", d: 8,
        s: [
          ["The Hemodynamic Profile", "Cardiogenic shock is a severe pump failure. The profile is classic: severely low Cardiac Index (<2.2), high filling pressures (CVP, PAOP > 15), and a compensatory high SVR (>1200) as the body clamps down to maintain MAP."],
          ["The Spiral of Death", "Low CO leads to hypotension, which reduces coronary perfusion. This causes more ischemia, further depressing contractility, lowering CO even more. The high SVR (afterload) makes it even harder for the failing LV to eject blood, accelerating the spiral."],
          ["Breaking the Spiral", "Treatment requires reducing afterload (if MAP tolerates) and increasing contractility. Inotropes (dobutamine, milrinone) provide temporary support, but mechanical support (IABP, Impella, ECMO) is often required to truly rest the myocardium and break the ischemia cycle."]
        ],
        c: ["Cool, clammy, mottled extremities with high CVP", "Narrow pulse pressure with a low CI", "Oliguria and rising lactate despite 'normal' MAP"],
        sq: ["1. Confirm the shock phenotype (Pump, not Tank or Pipes).", "2. Assess MAP; if < 60, use norepinephrine bridging before inotropes.", "3. Start inotropes to increase forward flow.", "4. Prepare for mechanical circulatory support."],
        sf: ["Do not give massive fluid boluses to cardiogenic shock; it worsens pulmonary edema and RV strain.", "Pure vasoconstrictors (phenylephrine) will kill a failing LV by maximizing afterload without supporting contractility."],
        ex: ["Patient has MAP 65, HR 110, CVP 18, extremities are ice cold.", "Instead of fluids, the team starts an Impella device to actively pull blood from the LV to the aorta.", "CI rises from 1.6 to 2.8, extremities warm, and the native heart is offloaded."],
        a: ["interpretation", "Compare the hemodynamic profiles of Cardiogenic vs Septic shock. Notice how SVR is the primary differentiator."],
        q: ["Which hemodynamic profile confirms a diagnosis of severe cardiogenic shock?", ["Low CI, Low PAOP, High SVR", "High CI, Low PAOP, Low SVR", "Low CI, High PAOP, High SVR"], 2, "Cardiogenic shock features a failing pump (Low CI) that backs up fluid (High PAOP/CVP) and triggers massive compensatory vasoconstriction (High SVR) to try and save the blood pressure."]
      },
      {
        t: "Distributive Shock and Vasoplegia", d: 8,
        s: [
          ["The Pipe Failure", "Distributive shock (Sepsis, Anaphylaxis, Neurogenic, Post-Bypass Vasoplegia) is a failure of vascular tone. The pipes dilate massively. The profile: profoundly low SVR (<800), normal or low filling pressures, and a compensatory high Cardiac Output (if the heart is healthy)."],
          ["Relative Hypovolemia", "Even with a normal blood volume, massive vasodilation makes the 'tank' too big for the volume. This creates relative hypovolemia. The extremities are initially warm and bounding (hyperdynamic phase) unlike the cold extremities of cardiogenic shock."],
          ["Restoring Tone", "Treatment requires filling the expanded tank (fluid resuscitation) and tightening the pipes (vasopressors like norepinephrine or vasopressin). In pure vasoplegia, cardiac contractility is usually fine initially, though sepsis can eventually cause myocardial depression."]
        ],
        c: ["Warm, flushed skin with bounding pulses but low MAP", "Profoundly low diastolic blood pressure", "Wide pulse pressure and high Cardiac Output"],
        sq: ["1. Administer aggressive fluid resuscitation (30cc/kg for sepsis).", "2. Initiate norepinephrine as the first-line pressor.", "3. Monitor lactate clearance to assess perfusion recovery.", "4. Add vasopressin if escalating doses of norepinephrine are required."],
        sf: ["Do not assume warm extremities mean the patient is stable; if MAP is 40, they are in profound shock.", "Late distributive shock can transition to cold, mottled shock as the heart tires."],
        ex: ["Post-CABG patient develops a MAP of 50. CI is 4.5, CVP is 8, SVR is 400.", "Recognizing vasoplegia (not pump failure), you start a vasopressin infusion.", "The vascular tone tightens, SVR rises to 900, and MAP stabilizes at 70 without stressing the heart."],
        a: ["calculation", "If MAP is 50, CVP is 5, and CO is 6.0, calculate the SVR. (50-5) / 6 * 80 = 600. This is profoundly low."],
        q: ["A patient in early septic shock has a MAP of 55 mmHg. When you touch their hands, they are remarkably warm. Why?", ["Massive systemic vasodilation shunts blood to the periphery despite low pressure.", "The patient is experiencing a severe allergic reaction to antibiotics.", "They have concurrent cardiogenic shock generating heat."], 0, "Distributive shock causes loss of vascular tone. Blood pools in the dilated peripheral capillaries, making the skin warm and flushed initially, even though the central driving pressure (MAP) is dangerously low."]
      }
    ]
  }
];