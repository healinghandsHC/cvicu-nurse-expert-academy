module.exports = [
  {
    id: "cardiac-foundations",
    lessons: [
      {
        t: "Preload and Diastole", d: 5,
        s: [
          ["Ventricular Stretch", "Preload is the end-diastolic stretch of myocardial fibers, dictated by venous return and compliance. Under the Frank-Starling law, optimized stretch maximizes actin-myosin overlap, enhancing stroke volume. Overstretch reduces output and dramatically raises end-diastolic pressures."],
          ["Measurement Pitfalls", "CVP and PAOP are pressure surrogates for volume. A stiff (hypertrophic) ventricle requires higher filling pressures to achieve the same actual volume. Never equate pressure directly to volume without assessing compliance."],
          ["Clinical Optimization", "Right ventricular infarcts require high preload to maintain pulmonary flow. Conversely, acute dilated cardiomyopathies require preload reduction (diuresis, nitrates) to shift back to the optimal point on the Starling curve."]
        ],
        c: ["Elevated JVD and hepatic congestion", "Peripheral edema vs central crackles", "CVP/PAOP trends out of proportion to exam"],
        sq: ["1. Assess CVP/PAOP trends.", "2. Examine right-sided (JVD) and left-sided (crackles) congestion.", "3. Assess dynamic indices (SVV) if ventilated.", "4. Evaluate response to PLR."],
        sf: ["Do not chase a CVP number if perfusion is normal.", "Over-resuscitation stretches the RV, bowing the septum into the LV (ventricular interdependence)."],
        ex: ["CVP is 14 mmHg post-MI, but MAP is 55 with clear lungs.", "Recognize isolated RV failure requiring forward flow support, not diuresis.", "Inotropic support improves MAP and urine output without altering preload."],
        a: ["reflection", "Recall a case where high filling pressures were driven by stiffness rather than true volume overload."],
        q: ["Why might a patient with severe left ventricular hypertrophy show a PAOP of 22 mmHg despite being intravascularly dry?", ["The hypertrophic muscle requires more true volume to stretch.", "A stiff, non-compliant ventricle generates high pressure with minimal volume.", "PAOP only measures right-sided volume, making it inaccurate."], 1, "A stiff (non-compliant) LV cannot relax normally during diastole, causing a rapid rise in pressure even with small volumes. Option A is incorrect as it needs less volume, not more. Option C is wrong because PAOP estimates left-sided pressure, not right."]
      },
      {
        t: "Afterload and Systemic Resistance", d: 6,
        s: [
          ["Resistance to Ejection", "Afterload is the wall stress the ventricle must overcome to eject blood, clinically represented by Systemic Vascular Resistance (SVR) for the left heart and Pulmonary Vascular Resistance (PVR) for the right. High afterload decreases stroke volume unless contractility increases."],
          ["SVR Calculation", "SVR = [(MAP - CVP) / CO] x 80. Normal is 800-1200 dynes-sec/cm⁻⁵. A high SVR indicates intense vasoconstriction, often compensating for low cardiac output, which can mask profound shock states if MAP alone is evaluated."],
          ["Manipulating Afterload", "Vasodilators (e.g., nitroprusside, nicardipine) reduce LV work and oxygen demand, improving forward flow in decompensated heart failure. Vasopressors increase SVR to maintain perfusion pressure in distributive shock."]
        ],
        c: ["Cool, clamped-down extremities with high MAP", "Bounding pulses with low MAP (low SVR)", "Narrow pulse pressure"],
        sq: ["1. Calculate MAP and SVR.", "2. Assess capillary refill and extremity temperature.", "3. Compare MAP to urine output and mentation.", "4. Review active vasoactive infusions."],
        sf: ["Never start a pure vasodilator in a hypotensive, volume-depleted patient.", "High MAP does not equal good perfusion if SVR is massively elevated."],
        ex: ["A post-op CABG patient has a MAP of 90 but cool toes and a CI of 1.8.", "You recognize excessive vasoconstriction and administer a low-dose vasodilator as ordered.", "SVR drops, CI improves to 2.4, and extremities warm up."],
        a: ["calculation", "Calculate the SVR for a patient with MAP 65, CVP 5, and CO 4.0 L/min."],
        q: ["A patient in septic shock has a MAP of 55, CVP of 4, and CO of 8 L/min. What is the primary hemodynamic derangement?", ["Profoundly low systemic vascular resistance", "Severe left ventricular failure", "Inadequate venous return and preload"], 0, "The CO is high but MAP is low, indicating a massive drop in SVR (vasoplegia) characteristic of distributive shock. The pump and volume are compensating, eliminating LV failure and inadequate preload as the primary issues."]
      },
      {
        t: "Myocardial Contractility", d: 5,
        s: [
          ["Intrinsic Pump Function", "Contractility (inotropy) is the myocardium's ability to shorten and generate force, independent of preload and afterload. It is driven by intracellular calcium dynamics and beta-1 adrenergic stimulation. Ischemia, acidosis, and hypoxia rapidly depress contractility."],
          ["Clinical Assessment", "Cardiac Output (CO) and Cardiac Index (CI) are primary indicators. Normal CI is 2.5-4.0 L/min/m². Echocardiography provides ejection fraction (EF), but remember EF is highly dependent on afterload; a normal EF does not guarantee adequate stroke volume if afterload is massively elevated."],
          ["Inotropic Support", "Agents like dobutamine and milrinone increase intracellular cAMP, boosting calcium availability. However, they increase myocardial oxygen demand and can provoke arrhythmias. Acidosis must be corrected for catecholamines to be effective."]
        ],
        c: ["Low CI despite adequate MAP and CVP", "Rising lactate and delayed capillary refill", "New S3 gallop or pulmonary edema"],
        sq: ["1. Verify preload and afterload are optimized first.", "2. Assess CI, SvO2, and lactate trends.", "3. Evaluate 12-lead ECG for new ischemia.", "4. Check ABG for uncorrected acidosis."],
        sf: ["Starting inotropes without fixing hypovolemia causes profound hypotension.", "Milrinone is renally cleared; watch for toxicity in AKI."],
        ex: ["Patient post-MI has CI 1.9, MAP 65, and CVP 12. Lactate is rising.", "You initiate dobutamine to directly augment contractility after ensuring volume is adequate.", "CI improves to 2.6, and urine output resumes."],
        a: ["interpretation", "Review a recent echocardiogram report. How did the EF correlate with the patient's clinical perfusion?"],
        q: ["Which physiological condition severely blunts the effectiveness of endogenous and exogenous catecholamines?", ["Severe metabolic acidosis", "Mild hypokalemia", "Elevated central venous pressure"], 0, "Acidosis alters receptor conformation and blunts catecholamine response. Restoring pH is necessary before escalating inotropic doses. Hypokalemia causes arrhythmias but doesn't blunt receptors, and elevated CVP implies a preload issue."]
      },
      {
        t: "Pressure-Volume Loop Logic", d: 6,
        s: [
          ["Mapping the Cardiac Cycle", "The PV loop plots left ventricular pressure against volume. It outlines four phases: ventricular filling (diastole), isovolumetric contraction, ejection, and isovolumetric relaxation. The width of the loop is the Stroke Volume (SV)."],
          ["Visualizing Pathophysiology", "In systolic failure, the loop shifts right with a reduced width (low SV) and elevated end-diastolic volume. In diastolic failure (stiff LV), the loop shifts upward, showing high end-diastolic pressure despite normal volume, maintaining SV but causing pulmonary edema."],
          ["Impact of Interventions", "Vasodilators make the loop narrower and taller by reducing afterload, increasing SV. Diuretics shift the entire loop left, decreasing pressure without heavily compromising SV in the overloaded heart."]
        ],
        c: ["Sudden widening of pulse pressure", "Signs of flash pulmonary edema (diastolic dysfunction)", "Poor response to volume challenges"],
        sq: ["1. Differentiate systolic vs diastolic failure from history/echo.", "2. Correlate pulse pressure with stroke volume.", "3. Assess how current therapies alter the loop's position.", "4. Anticipate the effect of sudden afterload increases."],
        sf: ["Do not aggressively diurese a patient with strict diastolic dysfunction who relies on high pressure for filling.", "Avoid rapid afterload drops in severe aortic stenosis."],
        ex: ["A patient with hypertrophic cardiomyopathy is tachycardic and hypotensive.", "Recognizing their stiff LV requires time to fill, you administer a beta-blocker to slow HR.", "Diastolic filling time increases, loop shifts right, SV improves."],
        a: ["reflection", "Draw a normal PV loop and trace how a fluid bolus alters its shape."],
        q: ["In acute left ventricular failure with massive afterload, how does the PV loop change?", ["It becomes wider with lower peak systolic pressure.", "It becomes narrower (decreased SV) and shifts to the right (increased ESV).", "It shifts entirely to the left with increased stroke volume."], 1, "High afterload forces the LV to stop ejecting earlier, increasing End-Systolic Volume (shifting right) and reducing the width of the loop (low SV). Options A and C describe conditions of low afterload or high contractility."]
      },
      {
        t: "Heart Rate and Cardiac Output", d: 5,
        s: [
          ["The Rate-Volume Tradeoff", "Cardiac Output = HR x Stroke Volume. While increasing HR initially boosts CO, tachycardia above 130-150 bpm drastically shortens diastole. Since coronary arteries perfuse and the ventricles fill during diastole, extreme rates cause ischemia and plummeting SV."],
          ["Pathological Tachycardia", "Sinus tachycardia is a compensatory response to low SV, hypovolemia, pain, or fever. Primary arrhythmias (e.g., rapid AFib) compromise filling directly. Differentiating compensatory from primary is critical before giving rate-controlling agents."],
          ["Bradycardia and Escapes", "Profound bradycardia reduces CO unless the ventricle can stretch to accommodate a massive SV. Escape rhythms (junctional, ventricular) are protective mechanisms when higher pacemakers fail; suppressing them without a backup pacemaker is lethal."]
        ],
        c: ["HR > 120 with dropping MAP", "New ST depressions during tachycardia", "Sudden widening of the QRS complex in bradycardia"],
        sq: ["1. Identify the underlying rhythm (primary vs compensatory).", "2. Assess MAP and perfusion indicators.", "3. Look for reversible causes of sinus tachycardia (fever, pain, volume).", "4. Prepare pacing equipment for symptomatic bradycardia."],
        sf: ["Never administer beta-blockers for compensatory sinus tachycardia in shock.", "Do not suppress ventricular escape rhythms with antiarrhythmics."],
        ex: ["A patient with pneumonia has a HR of 135 and MAP of 60.", "Instead of rate control, you administer IV fluids and antibiotics to treat the underlying sepsis.", "As stroke volume and vascular tone recover, the HR naturally drops to 95."],
        a: ["interpretation", "Evaluate a patient whose HR dropped from 110 to 60. Did their MAP improve or worsen? Why?"],
        q: ["A patient in hypovolemic shock develops sinus tachycardia at 140 bpm. Why is giving a beta-blocker contraindicated?", ["It will cause immediate coronary vasospasm.", "The tachycardia is maintaining cardiac output; blocking it will cause cardiovascular collapse.", "Beta-blockers are ineffective at heart rates above 130 bpm."], 1, "Sinus tachycardia is a vital compensatory mechanism to maintain CO when stroke volume is low. Removing it causes abrupt cardiogenic collapse. Coronary vasospasm is rare, and beta-blockers certainly work at high rates, just fatally here."]
      }
    ]
  },
  {
    id: "hemodynamics",
    lessons: [
      {
        t: "Leveling and Zeroing the Transducer", d: 5,
        s: [
          ["The Phlebostatic Axis", "Accurate hemodynamic monitoring requires the transducer to be leveled at the phlebostatic axis (4th intercostal space, mid-axillary line), approximating the right atrium. For every inch the transducer is below the axis, the pressure reads artificially high by roughly 2 mmHg."],
          ["The Zeroing Process", "Zeroing negates the effect of atmospheric pressure. By opening the transducer to air and pressing 'zero' on the monitor, the system establishes a baseline. This must be done at setup, after disconnection, or when readings do not match the clinical picture."],
          ["Dynamic Patient Positioning", "Measurements can be accurate with the head of bed up to 45 degrees, provided the transducer is leveled to the newly positioned phlebostatic axis. Never treat a drastic pressure change without first re-leveling the transducer."]
        ],
        c: ["Sudden drop or spike in all monitored pressures after moving the patient", "Pressure numbers that do not match the palpable pulse", "Transducer found lying on the bed"],
        sq: ["1. Locate the phlebostatic axis with a level.", "2. Align the air-fluid interface of the transducer.", "3. Open to air and zero the monitor.", "4. Perform a square wave test."],
        sf: ["Never administer vasoactive drugs based on un-leveled transducer data.", "Ensure the pressure bag is inflated to 300 mmHg to maintain patency."],
        ex: ["A patient returned from CT scan with a MAP reading of 110, up from 70.", "Before changing the nicardipine drip, you check the line and find the transducer fell to the floor.", "You level it to the axis, and the MAP reads 72, preventing accidental hypotension."],
        a: ["reflection", "How often does your unit require zeroing lines, and what is your personal trigger to re-zero?"],
        q: ["If a pressure transducer is inadvertently left 10 cm below the phlebostatic axis, how will the monitor display the pressure?", ["Artificially low by approximately 7.5 mmHg", "Artificially high by approximately 7.5 mmHg", "The waveform will dampen but the mean will remain accurate"], 1, "Hydrostatic pressure from the fluid column adds to the patient's pressure. Since 1 mmHg = 1.36 cmH2O, 10 cm below adds roughly 7.5 mmHg to the reading. It will not dampen the waveform or read low."]
      },
      {
        t: "Arterial Waveform Analysis", d: 7,
        s: [
          ["Waveform Components", "The arterial waveform consists of the anacrotic limb (systole/ejection), the systolic peak, the dicrotic notch (aortic valve closure), and the diastolic runoff. A steep upstroke indicates strong LV contractility, while a wide pulse pressure suggests a high stroke volume or low resistance."],
          ["Damping and Fidelity", "The square wave test checks system fidelity. An underdamped system (whip, artifact) shows multiple oscillations and artificially high systolic pressures. An overdamped system (air, clot, kink) shows slurred upstrokes, no dicrotic notch, and artificially low systolic pressures (though the MAP remains relatively accurate)."],
          ["Clinical Translation", "The MAP is the most reliable tissue perfusion pressure, as it integrates the entire cycle (MAP ≈ [2xDiastolic + Systolic]/3). Rely on the MAP for titration, especially when the systolic peak is heavily artifactual."]
        ],
        c: ["Loss of the dicrotic notch", "Ringing or 'whip' on the systolic peak", "A MAP that diverges from the non-invasive cuff pressure"],
        sq: ["1. Perform a fast-flush square wave test.", "2. Check for air bubbles, clots, or loose connections.", "3. Compare the arterial MAP to a manual cuff MAP if in doubt.", "4. Assess distal perfusion of the cannulated limb."],
        sf: ["Do not treat an artificially high systolic pressure in an underdamped line.", "Never forcefully flush an arterial line with a syringe; use the pigtail."],
        ex: ["The monitor alarms for a systolic BP of 85, but the waveform is slurred without a notch.", "You identify overdamping, flush the line to clear a small clot, and the true systolic of 110 returns.", "You avoid unnecessarily starting vasopressors."],
        a: ["interpretation", "Examine a patient's arterial line and perform a square wave test. Count the oscillations to determine damping status."],
        q: ["A square wave test reveals 3-4 oscillations before returning to baseline, and the systolic pressure reads 180 mmHg. What is the appropriate interpretation?", ["The system is overdamped; the true pressure is higher.", "The system is underdamped; the systolic pressure is artificially elevated.", "The system is optimally damped; treat the pressure of 180 mmHg."], 1, "Multiple oscillations (>2) indicate an underdamped system (ringing), which artificially spikes the systolic peak. The MAP is more accurate, and treating the 180 mmHg systolic could cause harmful hypotension. Overdamped shows no oscillations."]
      },
      {
        t: "Central Venous Pressure Interpretation", d: 6,
        s: [
          ["Right Heart Preload", "CVP measures pressure in the vena cava/right atrium, reflecting right ventricular preload. The normal waveform has three positive deflections: a-wave (atrial contraction), c-wave (tricuspid bulging during RV systole), and v-wave (atrial filling)."],
          ["Pathological Waves", "Large 'cannon' a-waves occur when the right atrium contracts against a closed tricuspid valve (e.g., AV dissociation, CHB). Giant v-waves indicate tricuspid regurgitation, where RV systolic pressure forces blood backward into the atrium."],
          ["Volume vs. Compliance", "A low CVP (0-4 mmHg) usually indicates hypovolemia or vasodilation. A high CVP (>12 mmHg) can mean hypervolemia, right heart failure, pulmonary hypertension, or cardiac tamponade. It does NOT reliably predict fluid responsiveness on its own."]
        ],
        c: ["Elevated CVP with clear lungs and low MAP", "New giant v-waves on the CVP tracing", "Negative CVP values in a tachycardic patient"],
        sq: ["1. Correlate CVP with JVD and peripheral edema.", "2. Examine the waveform for cannon a-waves or giant v-waves.", "3. Look at respiratory variation to assess volume status.", "4. Compare with left-sided filling pressures if a PAC is present."],
        sf: ["Do not use CVP as the sole indicator for fluid boluses.", "A CVP >15 mmHg drastically impairs venous return from the kidneys and brain."],
        ex: ["A patient has a CVP of 16 and low urine output.", "Instead of assuming fluid overload and giving Lasix, you note giant v-waves and an echocardiogram confirms severe tricuspid regurgitation.", "You optimize RV afterload rather than diuresing dry."],
        a: ["interpretation", "Locate the CVP waveform on your monitor and identify the a, c, and v waves in relation to the ECG."],
        q: ["You observe large 'cannon a-waves' on the CVP tracing. Which ECG rhythm most likely correlates with this finding?", ["Sinus tachycardia", "Atrial fibrillation", "Complete (third-degree) heart block"], 2, "Cannon a-waves occur when the atrium contracts against a closed tricuspid valve. In complete heart block, atria and ventricles beat independently, causing this collision. AFib lacks an organized atrial contraction entirely (no a-wave)."]
      },
      {
        t: "Pulmonary Artery Pressures", d: 6,
        s: [
          ["Right Ventricular Ejection", "The Pulmonary Artery (PA) catheter measures right heart output and pulmonary vascular resistance. Normal PAS (systolic) is 15-25 mmHg and PAD (diastolic) is 8-15 mmHg. The waveform has a distinct dicrotic notch representing pulmonic valve closure."],
          ["Pathological Changes", "High PAS indicates elevated right ventricular afterload (e.g., pulmonary embolism, ARDS, hypoxemia). High PAD, assuming normal pulmonary vascular resistance, closely correlates with PAOP and left ventricular end-diastolic pressure."],
          ["Continuous Monitoring", "Always keep the catheter tip in the PA position with the balloon deflated. Spontaneous wedging (waveform flattens and drops) is a medical emergency that risks pulmonary artery rupture or infarction if not immediately corrected."]
        ],
        c: ["Loss of the dicrotic notch on the PA tracing", "PA waveform flattening without balloon inflation", "Gradual climbing of PAS/PAD over a shift"],
        sq: ["1. Verify the PA tracing has a distinct systolic peak and dicrotic notch.", "2. Ensure the balloon is fully deflated (syringe detached/locked).", "3. Evaluate interventions affecting pulmonary resistance (e.g., oxygen, iNO).", "4. Notify provider immediately for spontaneous wedging."],
        sf: ["Never flush a wedged PA catheter.", "Do not leave the balloon inflated for more than 10-15 seconds (2-3 respiratory cycles)."],
        ex: ["The PA waveform suddenly flattens, resembling a wedge tracing, though the syringe is empty.", "Recognizing spontaneous wedging, you ask the patient to cough and turn them laterally.", "The catheter dislodges back into the PA, preventing pulmonary infarction."],
        a: ["reflection", "Review your unit's policy on pulling back a spontaneously wedged PA catheter."],
        q: ["A patient's PA pressures increase from 25/12 to 55/28 mmHg acutely, with an abrupt drop in SpO2. What is the most likely cause?", ["Acute pulmonary embolism", "Left ventricular failure", "Hypovolemic shock"], 0, "An acute, massive rise in PA pressures coupled with hypoxemia suggests a sudden obstruction in the pulmonary bed, such as a PE. LV failure raises PA pressures but usually more gradually with crackles. Hypovolemia lowers PA pressures."]
      },
      {
        t: "PAOP / Wedge Logic", d: 6,
        s: [
          ["Surrogate for the Left Heart", "The Pulmonary Artery Occlusion Pressure (PAOP/Wedge) is obtained by inflating the balloon, blocking flow from the right heart. The catheter 'looks' through the pulmonary capillaries into the left atrium. Normal is 8-12 mmHg. It estimates Left Ventricular End-Diastolic Pressure (LVEDP)."],
          ["Measurement Technique", "Read the PAOP at end-expiration (when intrathoracic pressure is closest to atmospheric). In spontaneously breathing patients, read the highest point before inspiration; in ventilated patients on PEEP, read the lowest point before the machine breath."],
          ["Clinical Disconnects", "PAOP overestimates LVEDP in the presence of severe PEEP, mitral stenosis, or pulmonary veno-occlusive disease. It underestimates LVEDP in stiff, non-compliant ventricles (diastolic dysfunction) where the true pressure is much higher than the volume suggests."]
        ],
        c: ["Wedge tracing that does not return to PA waveform upon deflation", "Over-wedging (waveform climbs off scale)", "PAOP > 18 with signs of pulmonary edema"],
        sq: ["1. Inflate the balloon slowly with 1.5cc of air until the waveform changes.", "2. Freeze the monitor trace and locate end-expiration.", "3. Deflate immediately and confirm return of the PA tracing.", "4. Lock the syringe."],
        sf: ["Never force air into the balloon if resistance is felt.", "Ensure the syringe passively deflates; do not actively pull back, which ruins the balloon."],
        ex: ["You inflate the balloon with 1.0cc and see a wedge tracing. You measure PAOP as 18 at end-expiration.", "The patient is on 15 of PEEP, meaning the true PAOP is likely lower due to intrathoracic pressure transmission.", "You document the PEEP level alongside the reading for accurate trending."],
        a: ["interpretation", "Practice locating end-expiration on a respiratory waveform alongside a pressure tracing."],
        q: ["When reading a PAOP tracing on a patient receiving mechanical ventilation with positive pressure, where should the measurement be taken?", ["At the peak of the inspiratory wave", "At the trough of the inspiratory wave (end-expiration)", "Averaged across the entire respiratory cycle"], 1, "Measurements must be taken at end-expiration because intrathoracic pressure is lowest, minimizing artifactual elevation from the ventilator. Peak inspiration adds positive pressure, falsely elevating the PAOP."]
      },
      {
        t: "SvO2 and Oxygen Extraction", d: 7,
        s: [
          ["The Fick Principle", "Mixed venous oxygen saturation (SvO2, normal 60-75%) measures the oxygen left over after tissue extraction. It is the best indicator of oxygen supply/demand balance. It depends on Cardiac Output, Hemoglobin, SaO2, and tissue metabolic rate (VO2)."],
          ["Low SvO2 States", "An SvO2 < 60% means tissues are extracting more O2 because supply dropped (low CO, bleeding/low Hgb, hypoxia) or demand increased (fever, shivering, pain, seizures). If uncorrected, cells shift to anaerobic metabolism, producing lactate."],
          ["High SvO2 States", "An SvO2 > 80% can mean demand is very low (hypothermia, anesthesia), or more dangerously, that tissues are unable to extract oxygen despite adequate delivery (sepsis, cyanide toxicity, left-to-right shunting)."]
        ],
        c: ["Sudden drop in SvO2 > 10%", "SvO2 < 55% with rising lactate", "Normal SpO2 but dropping SvO2"],
        sq: ["1. Check SpO2 (arterial saturation).", "2. Check Hemoglobin (recent bleeding?).", "3. Assess Cardiac Output (hypovolemia, pump failure?).", "4. Assess metabolic demand (fever, pain, work of breathing)."],
        sf: ["Do not assume adequate perfusion just because arterial SpO2 is 100%.", "A normal SvO2 in deep sepsis may mask profound microvascular failure."],
        ex: ["Post-op patient's SvO2 drops from 70% to 52%. SpO2 is 99%, Hgb is 10.", "You assess the patient and find them shivering violently during rewarming.", "You initiate anti-shivering protocols; demand decreases, and SvO2 normalizes to 68%."],
        a: ["calculation", "If SaO2 is 100%, Hgb is 8, and SvO2 is 50%, which intervention (blood, inotropes, or sedation) would best improve supply?"],
        q: ["A patient in distributive (septic) shock has a rising lactate, yet their continuous SvO2 is 84%. What is the most likely physiological explanation?", ["Cardiac output is massively elevated, matching the oxygen demand.", "Tissues are unable to extract and utilize oxygen due to mitochondrial dysfunction.", "The pulmonary artery catheter has migrated into the right ventricle."], 1, "In severe sepsis, microthrombi and mitochondrial failure prevent cells from extracting oxygen, so blood returns to the right heart highly saturated. This is a sign of profound metabolic failure, not adequate perfusion. Option C would show a right ventricular waveform."]
      },
      {
        t: "Dynamic Indices of Responsiveness", d: 5,
        s: [
          ["Heart-Lung Interactions", "Static pressures (CVP, PAOP) poorly predict fluid responsiveness. Dynamic indices like Stroke Volume Variation (SVV) and Pulse Pressure Variation (PPV) use the mechanical ventilator's positive pressure breath to test the heart's preload reserve. A breath decreases venous return; if the SV drops significantly (>12-15%), the patient is preload-dependent."],
          ["Strict Criteria for Validity", "SVV/PPV are only valid if the patient is fully mechanically ventilated (no spontaneous breaths), in normal sinus rhythm (no AFib or ectopy), and receiving a tidal volume of at least 8 mL/kg. Open chests or severe right heart failure invalidate the numbers."],
          ["Passive Leg Raise (PLR)", "If SVV criteria aren't met, a PLR mimics a 300cc fluid bolus by auto-transfusing venous blood from the legs. If stroke volume or pulse pressure rises by >10% within 60-90 seconds, the patient is fluid responsive, without the risk of actual volume overload."]
        ],
        c: ["SVV > 15% on a Flotrac/Vigileo", "Swinging amplitude of the arterial waveform with each breath", "Lack of MAP improvement after fluid bolus"],
        sq: ["1. Verify validity criteria (NSR, controlled vent, 8ml/kg TV).", "2. Note the baseline SV or MAP.", "3. Perform a PLR or administer ordered fluid challenge.", "4. Reassess SVV and stroke volume immediately."],
        sf: ["Do not give fluids based on high SVV if the patient is taking spontaneous breaths.", "A high SVV in right heart failure represents RV overload, not hypovolemia."],
        ex: ["Patient has MAP 55, CVP 14. Provider asks for SVV, which reads 18%.", "You note the patient is in atrial fibrillation, invalidating the SVV.", "You perform a PLR instead; SV does not change, avoiding a harmful fluid bolus in a failing heart."],
        a: ["interpretation", "Look at an arterial line tracing on a ventilated patient. Can you visually see the respiratory variation in the pulse pressure?"],
        q: ["Which of the following patients is an appropriate candidate for using Stroke Volume Variation (SVV) to guide fluid resuscitation?", ["A patient breathing spontaneously on CPAP.", "A patient in atrial fibrillation on a ventilator.", "A deeply sedated patient on assist-control ventilation with a tidal volume of 8 ml/kg."], 2, "SVV requires strict mechanical ventilation without spontaneous efforts (Option A) and a regular sinus rhythm (Option B) to accurately measure the respiratory-induced changes in stroke volume. Option C meets all validity criteria."]
      }
    ]
  },
  {
    id: "ecg-arrhythmia",
    lessons: [
      {
        t: "Systematic 12-Lead Analysis", d: 6,
        s: [
          ["The Structured Approach", "Never look at a 12-lead randomly. Always assess: Rate, Rhythm, Axis, Hypertrophy, and Infarction (ST/T changes). This structured approach ensures subtle findings, like bundle branch blocks or axis deviations indicative of hemiblocks, are not missed."],
          ["Axis and Hypertrophy", "A normal axis has positive QRS complexes in Leads I and aVF. Left axis deviation (negative aVF) can indicate left anterior fascicular block. High voltage QRS complexes in precordial leads (S in V1 + R in V5 > 35mm) suggest Left Ventricular Hypertrophy, which mimics ischemic changes."],
          ["Interval Context", "A prolonged QTc (>450ms men, >470ms women) predisposes to Torsades de Pointes. Always check the QTc before administering antiarrhythmics (amiodarone), psychotropics (haloperidol), or antiemetics (ondansetron)."]
        ],
        c: ["New left or right axis deviation", "QTc prolonging on telemetry", "Voltage criteria for LVH"],
        sq: ["1. Calculate rate and confirm rhythm.", "2. Check intervals (PR, QRS, QTc).", "3. Determine QRS axis (Leads I, aVF).", "4. Scan contiguous leads for ST elevation/depression."],
        sf: ["Do not give QTc-prolonging drugs if the baseline QTc is >500ms.", "A new left bundle branch block (LBBB) can mask or mimic acute STEMI."],
        ex: ["A patient is prescribed IV amiodarone for AFib. You note the QTc is 520ms.", "You hold the medication and notify the provider.", "Electrolytes are checked, magnesium is repleted, and the plan is shifted to rate control to avoid Torsades."],
        a: ["calculation", "Calculate the rate of a rhythm strip by counting the large boxes between R waves (300 / boxes)."],
        q: ["In evaluating a 12-lead ECG, lead I is positive and lead aVF is strongly negative. What does this indicate?", ["Normal axis", "Left axis deviation", "Right axis deviation"], 1, "Lead I evaluates left-to-right (positive = left). Lead aVF evaluates top-to-bottom (negative = up). A vector pointing left and up is Left Axis Deviation. Normal is positive in both. Right is negative I, positive aVF."]
      },
      {
        t: "Atrial Arrhythmias in the ICU", d: 5,
        s: [
          ["AFib and Flutter Dynamics", "Atrial fibrillation lacks organized atrial contraction, losing the 'atrial kick' (up to 30% of cardiac output). Rapid Ventricular Response (RVR) further reduces diastolic filling time. Atrial flutter has an organized macro-reentrant circuit, often conducting at 2:1 (flutter waves at 300, ventricular rate 150)."],
          ["Rate vs Rhythm Control", "In the ICU, rate control (beta-blockers, diltiazem, digoxin) is typically prioritized unless the patient is hemodynamically unstable, requiring immediate synchronized cardioversion. Amiodarone is often used for rhythm conversion or rate control when EF is low."],
          ["Anticoagulation Window", "Cardioverting AFib that has been present for >48 hours carries a high risk of systemic embolization (stroke) unless the patient has been therapeutically anticoagulated or a TEE confirms no atrial appendage thrombus."]
        ],
        c: ["Irregularly irregular rhythm with narrow QRS", "Loss of distinct P-waves", "Sudden drop in MAP upon onset of RVR"],
        sq: ["1. Assess patient stability (MAP, mentation, chest pain).", "2. Check a 12-lead ECG to rule out underlying ischemia.", "3. Review electrolyte panel (K, Mg).", "4. Prepare for rate control or synchronized cardioversion."],
        sf: ["Never cardiovert stable AFib >48h old without anticoagulation or TEE clearance.", "Avoid calcium channel blockers in severe uncompensated heart failure."],
        ex: ["Patient flips into AFib with RVR at 145 bpm. MAP drops from 75 to 55.", "Because the patient is unstable (hypotensive, diaphoretic), rate control is abandoned.", "You prep for synchronized cardioversion, and 100J restores sinus rhythm and normal MAP."],
        a: ["interpretation", "Look at a patient's monitor in AFib. Note how the pulse oximeter plethysmograph changes amplitude beat-to-beat due to varying stroke volume."],
        q: ["A patient with new-onset Atrial Fibrillation with RVR has a heart rate of 150 bpm and a MAP of 85. What is the most appropriate initial pharmacological strategy?", ["Synchronized cardioversion", "Administering IV diltiazem or metoprolol", "Administering IV adenosine"], 1, "The patient is hemodynamically stable (MAP 85), so rate control with AV nodal blocking agents is preferred. Synchronized cardioversion is for unstable patients. Adenosine is for SVT, not AFib."]
      },
      {
        t: "AV Blocks and Bradycardias", d: 5,
        s: [
          ["The AV Node Blockades", "First-degree block is a simple delay (PR > 200ms). Second-degree Type I (Wenckebach) features progressive PR lengthening until a beat drops; it is usually benign. Second-degree Type II (Mobitz II) has fixed PR intervals with suddenly dropped beats; it indicates infranodal disease and can rapidly progress to Complete Heart Block (CHB)."],
          ["Complete Heart Block", "In third-degree (Complete) Heart Block, the atria and ventricles beat entirely independently. The ventricular escape rate determines stability: junctional (40-60 bpm, narrow QRS) or ventricular (20-40 bpm, wide QRS). CHB requires immediate pacing."],
          ["Atropine's Role", "Atropine works by blocking vagal tone at the SA/AV node. It is highly effective for sinus bradycardia and Wenckebach. It is ineffective (and potentially harmful, by increasing atrial rate without conduction) in Mobitz II and Complete Heart Block with wide QRS escape rhythms."]
        ],
        c: ["More P-waves than QRS complexes", "Profound, unremitting bradycardia", "Cannon a-waves in the neck or CVP tracing"],
        sq: ["1. Differentiate the block (look for PR consistency).", "2. Apply transcutaneous pacing pads immediately for Mobitz II or CHB.", "3. Ensure transvenous pacing supplies are at the bedside.", "4. Assess for ischemic triggers (especially inferior MI)."],
        sf: ["Do not rely on atropine for Mobitz II or third-degree blocks.", "Transcutaneous pacing is painful; medicate if the patient is conscious."],
        ex: ["You note a rhythm of 35 bpm with wide QRS complexes and dissociated P-waves.", "You recognize third-degree block, apply pacing pads, and initiate transcutaneous pacing at 70 bpm.", "Capture is achieved, MAP stabilizes, and the team preps a transvenous wire."],
        a: ["interpretation", "Measure the PR interval of a patient in sinus rhythm. Is it between 0.12 and 0.20 seconds?"],
        q: ["A patient presents with second-degree AV block, Mobitz Type II. They are dizzy and hypotensive. What is the priority intervention?", ["Administer IV Atropine 1mg", "Initiate transcutaneous pacing", "Observe and obtain a 12-lead ECG"], 1, "Mobitz II indicates structural disease below the AV node. It is prone to sudden progression to asystole and is notoriously unresponsive to atropine. Immediate pacing is the definitive treatment. Observation is unsafe in a symptomatic patient."]
      },
      {
        t: "Wide Complex Tachycardias", d: 6,
        s: [
          ["VT vs SVT with Aberrancy", "A wide complex tachycardia (>120ms) must be assumed to be Ventricular Tachycardia (VT) until proven otherwise. SVT with aberrancy (e.g., pre-existing bundle branch block) is possible, but treating VT as SVT (e.g., with verapamil) can cause fatal cardiovascular collapse."],
          ["Monomorphic vs Polymorphic", "Monomorphic VT has uniform QRS complexes, often originating from a single ischemic scar. Polymorphic VT (e.g., Torsades de Pointes) constantly changes axis/morphology and is driven by active ischemia or a prolonged QTc interval."],
          ["Amiodarone vs Cardioversion", "Stable monomorphic VT can be treated with antiarrhythmics like Amiodarone or Lidocaine. Unstable VT (hypotension, altered mental status) requires immediate synchronized cardioversion. Torsades requires IV Magnesium and overdrive pacing."]
        ],
        c: ["Wide, regular tachycardia at 150-200 bpm", "Concordance (all QRS complexes entirely positive or negative in chest leads)", "Fusion beats or capture beats (hallmarks of VT)"],
        sq: ["1. Assess patient responsiveness and pulse.", "2. If unstable with a pulse, prepare synchronized cardioversion.", "3. If pulseless, call a code and defibrillate.", "4. Obtain 12-lead ECG if patient is entirely stable."],
        sf: ["Never administer AV-nodal blockers (diltiazem, verapamil) to an undiagnosed wide complex tachycardia.", "Assume VT in any patient with a history of MI or heart failure."],
        ex: ["Monitor alarms for a wide rhythm at 160 bpm. The patient is awake but feels 'dizzy' and MAP is 60.", "Recognizing unstable VT with a pulse, you sedate briefly, sync the defibrillator, and cardiovert at 100J.", "The rhythm converts to sinus, preventing cardiac arrest."],
        a: ["reflection", "Where is the synchronized cardioversion button on your unit's defibrillator?"],
        q: ["You identify a wide-complex tachycardia at 170 bpm in a patient with a history of ischemic cardiomyopathy. They are stable. Why should you avoid giving Adenosine?", ["It will immediately cause ventricular fibrillation.", "While safe, it is entirely ineffective for ventricular tissue.", "If the rhythm is VT, blocking the AV node removes competing rhythms but causes hypotension, and if it's Wolff-Parkinson-White, it can trigger fatal VFib."], 2, "While adenosine is sometimes used diagnostically for regular wide-complex tachycardias, it can cause severe hypotension if the rhythm is VT, and in pre-excitation syndromes (WPW), blocking the AV node forces all conduction down the accessory pathway, causing VFib."]
      },
      {
        t: "Cardiac Arrest & Defibrillation", d: 5,
        s: [
          ["Shockable vs Non-Shockable", "Pulseless VT and Ventricular Fibrillation (VF) are shockable rhythms. Defibrillation stops all chaotic electrical activity, allowing the SA node to reset. PEA and Asystole are non-shockable; they require CPR and Epinephrine while hunting for reversible causes (H's and T's)."],
          ["Unsynchronized vs Synchronized", "Defibrillation is unsynchronized; it delivers energy immediately upon button press. Cardioversion is synchronized to the R-wave to avoid shocking on the T-wave (relative refractory period), which can trigger VFib. Never synchronize a pulseless arrest."],
          ["CPR Quality and Perfusion", "High-quality compressions (rate 100-120, depth 2 inches, full recoil) maintain a minimal coronary perfusion pressure. Pauses in compressions rapidly drop coronary flow to zero, requiring multiple compressions to build it back up."]
        ],
        c: ["Unresponsiveness and apnea", "Loss of palpable carotid or femoral pulse", "ETCO2 dropping below 10 mmHg during CPR"],
        sq: ["1. Verify pulselessness and call for help.", "2. Initiate high-quality compressions immediately.", "3. Apply pads and analyze rhythm.", "4. Defibrillate if VF/pVT, then immediately resume compressions."],
        sf: ["Do not pause compressions to feel for a pulse immediately after a shock.", "Ensure 'Sync' is turned OFF if a patient loses their pulse during cardioversion prep."],
        ex: ["Patient in VT loses consciousness. You check a pulse: none.", "You turn off the sync mode, charge to 200J, clear the bed, and shock.", "You immediately resume chest compressions for 2 minutes before checking the monitor again."],
        a: ["reflection", "During your next shift, verify the location of the defibrillator pads, backboard, and epinephrine in your room/unit."],
        q: ["A patient with pulseless electrical activity (PEA) at a rate of 40 bpm is receiving CPR. What is the most critical pharmacological intervention?", ["Atropine 1mg IV", "Amiodarone 300mg IV", "Epinephrine 1mg IV"], 2, "Epinephrine is the only indicated drug for PEA/Asystole to increase aortic diastolic pressure and coronary perfusion during CPR. Atropine is no longer recommended in arrest algorithms, and Amiodarone is strictly for shockable rhythms (VF/pVT)."]
      }
    ]
  },
  {
    id: "ischemia",
    lessons: [
      {
        t: "Supply and Demand", d: 5,
        s: [
          ["The Coronary Balance", "Myocardial ischemia occurs when oxygen demand exceeds supply. Demand is driven by heart rate, contractility, and wall tension (preload/afterload). Supply is governed by coronary perfusion pressure (Diastolic BP - LVEDP), oxygen saturation, and hemoglobin."],
          ["Coronary Anatomy", "The Left Anterior Descending (LAD) perfuses the anterior wall and septum (V1-V4). The Circumflex (LCx) perfuses the lateral wall (I, aVL, V5-V6). The Right Coronary Artery (RCA) perfuses the inferior wall (II, III, aVF) and the right ventricle."],
          ["Manipulating the Balance", "In acute ischemia, lower demand by dropping heart rate (beta-blockers) and reducing afterload/preload (nitrates). Increase supply by optimizing oxygenation, transfusing severe anemia, and ensuring a robust diastolic blood pressure."]
        ],
        c: ["Chest pressure radiating to jaw or left arm", "Unexplained diaphoresis or nausea", "New ST depressions or T-wave inversions"],
        sq: ["1. Obtain a stat 12-lead ECG.", "2. Administer oxygen if SpO2 < 90%.", "3. Give aspirin and consider nitroglycerin if BP allows.", "4. Draw cardiac biomarkers."],
        sf: ["Avoid nitroglycerin in suspected right ventricular infarction (inferior STEMI), as it causes profound hypotension.", "Tachycardia is highly lethal to ischemic myocardium; treat it aggressively."],
        ex: ["Patient complains of chest pain. Heart rate is 115, MAP is 90.", "You give a beta-blocker to reduce heart rate to 75.", "Diastolic filling time increases, coronary perfusion improves, and the chest pain resolves."],
        a: ["reflection", "Why do subendocardial tissues suffer ischemia before epicardial tissues during demand mismatch?"],
        q: ["In a patient with severe coronary artery disease, which vital sign change most drastically reduces myocardial oxygen supply?", ["An increase in systolic blood pressure to 160 mmHg", "A decrease in diastolic blood pressure to 40 mmHg", "An increase in central venous pressure to 12 mmHg"], 1, "Coronary arteries fill during diastole. Coronary Perfusion Pressure = Diastolic BP - LVEDP. A profound drop in diastolic pressure directly starves the coronaries of blood flow. High systolic pressure increases demand, but low diastolic kills supply."]
      },
      {
        t: "STEMI vs NSTEMI Pathology", d: 5,
        s: [
          ["The Plaque Event", "Both STEMI and NSTEMI begin with plaque rupture. In STEMI, an occlusive thrombus completely blocks the artery, causing full-thickness (transmural) infarction. In NSTEMI, the thrombus is partial or transient, causing subendocardial ischemia."],
          ["ECG Hallmarks", "STEMI shows ST-segment elevation (≥1mm) in contiguous leads, often with reciprocal ST depression in opposite leads. NSTEMI presents with ST depression or deep T-wave inversions, alongside elevated biomarkers."],
          ["Intervention Timelines", "STEMI requires immediate reperfusion (PCI within 90 minutes or fibrinolytics). NSTEMI requires aggressive medical management (heparin, antiplatelets, beta-blockers) and urgent, but not immediate, angiography (within 24-48 hours) unless hemodynamically unstable."]
        ],
        c: ["ST elevation >1mm in two contiguous leads", "Reciprocal ST depressions confirming injury", "Pain unresponsive to sublingual nitroglycerin"],
        sq: ["1. Recognize STEMI on ECG immediately.", "2. Activate the cath lab/STEMI protocol.", "3. Ensure dual IV access and defibrillator readiness.", "4. Administer loading doses of antiplatelets as ordered."],
        sf: ["Time is muscle: do not delay cath lab transport for non-essential tasks.", "Monitor closely for VFib, the most common cause of pre-hospital STEMI death."],
        ex: ["12-lead shows 3mm ST elevation in II, III, and aVF.", "You recognize an inferior STEMI, hold the ordered nitroglycerin to protect preload, and activate the cath lab.", "The patient is reperfused with a door-to-balloon time of 42 minutes."],
        a: ["interpretation", "Memorize the contiguous leads: Anterior (V1-V4), Lateral (I, aVL, V5, V6), Inferior (II, III, aVF)."],
        q: ["A patient presents with crushing chest pain. The ECG shows ST depression in leads V2-V4. Troponin is pending. What is the most likely diagnosis?", ["Anterior STEMI", "Subendocardial ischemia (NSTEMI/Unstable Angina) or Posterior STEMI", "Pericarditis"], 1, "ST depression indicates ischemia that has not fully infarcted the transmural wall (NSTEMI), OR it represents reciprocal changes of a true posterior STEMI. Either way, it is an ischemic event. STEMI requires elevation. Pericarditis shows diffuse, non-contiguous elevation."]
      },
      {
        t: "Mechanical Complications of MI", d: 6,
        s: [
          ["The Vulnerable Myocardium", "In the 3-14 days following a massive transmural MI, the necrotic tissue is soft and macrophage-infiltrated before scar tissue forms. This makes it highly susceptible to catastrophic mechanical rupture."],
          ["Papillary Muscle Rupture", "Most common in inferior MIs (RCA supplies the posteromedial papillary muscle). Rupture causes acute, massive mitral regurgitation. The patient rapidly develops cardiogenic shock and flash pulmonary edema. A new, loud holosystolic murmur is heard."],
          ["Ventricular Septal Defect (VSD)", "Rupture of the septum causes a massive left-to-right shunt. Blood from the high-pressure LV floods the RV and pulmonary bed. Suspect VSD if a harsh, thrill-producing systolic murmur appears accompanied by a sudden drop in cardiac output and high SvO2 (step-up in oxygenation)."]
        ],
        c: ["Sudden, loud systolic murmur in a post-MI patient", "Abrupt onset of cardiogenic shock and pulmonary edema", "Acute biventricular failure out of proportion to infarct size"],
        sq: ["1. Assess vital signs and apply oxygen.", "2. Auscultate the precordium for new murmurs.", "3. Obtain a stat echocardiogram.", "4. Prepare for IABP insertion to reduce afterload and buy time for surgery."],
        sf: ["Vasopressors (high afterload) worsen the shunting/regurgitation in mechanical complications.", "These are surgical emergencies; medical management is only a bridge."],
        ex: ["On day 4 post-MI, a patient suddenly drops their MAP to 50 and becomes dyspneic.", "You hear a new loud murmur at the apex. You notify the provider immediately of a suspected papillary rupture.", "An IABP is placed to drop afterload and increase forward flow until emergency valve replacement."],
        a: ["reflection", "Why does an IABP help in acute mitral regurgitation?"],
        q: ["A patient 5 days post-anterior STEMI develops sudden hypotension, JVD, and a harsh pansystolic murmur at the left sternal border. An ABG shows an unexpected jump in SvO2. What is the likely complication?", ["Papillary muscle rupture", "Ventricular septal rupture (VSD)", "Left ventricular free wall rupture"], 1, "The harsh murmur, shock, and oxygen 'step-up' (high SvO2 because oxygenated blood from the LV is crossing into the right heart) are classic for a VSD. Papillary rupture causes mitral regurgitation (no SvO2 jump). Free wall rupture causes instant tamponade/PEA."]
      },
      {
        t: "Post-PCI Site Care and Bleeding", d: 5,
        s: [
          ["Arterial Access Sites", "Percutaneous Coronary Intervention (PCI) uses either the femoral or radial artery. Post-procedure, these high-pressure, fully anticoagulated sites are prone to catastrophic bleeding, hematoma, and pseudoaneurysm formation."],
          ["Femoral vs Radial Nuances", "Radial sites use a compression band; watch for compartment syndrome (pain, pallor, pulselessness). Femoral sites may use closure devices or manual hold; watch for retroperitoneal bleeding, which hides entirely inside the pelvis without a visible groin hematoma."],
          ["Retroperitoneal Hemorrhage", "Suspect RP bleed if a femoral PCI patient develops sudden hypotension, tachycardia, back/flank pain, and a dropping hematocrit. The abdomen may feel rigid. This is a life-threatening emergency requiring fluid/blood resuscitation and possible surgical or interventional repair."]
        ],
        c: ["Sudden flank or back pain post-femoral PCI", "Hard, expanding mass at the groin site", "Loss of distal pulses in the catheterized limb"],
        sq: ["1. Check the access site for bleeding/hematoma.", "2. Palpate distal pulses and check capillary refill.", "3. Assess for flank pain or signs of hypovolemic shock.", "4. If bleeding, apply immediate, hard manual pressure above the puncture site."],
        sf: ["Never let a post-femoral PCI patient raise their head >30 degrees or bend the leg.", "Do not ignore unexplained tachycardia and back pain after a cath."],
        ex: ["A patient returns from a femoral PCI. Two hours later, they complain of severe lower back pain and MAP drops to 60.", "You check the groin (clear), but suspect an RP bleed. You drop the head of the bed, hang fluids, and page the cardiologist stat.", "CT confirms RP hematoma, saving the patient from fatal exsanguination."],
        a: ["interpretation", "Practice locating the exact anatomical point to apply pressure (1-2 cm above the skin puncture, over the arteriotomy)."],
        q: ["A patient is 3 hours post-femoral PCI. They report new, intense right flank pain. Their heart rate is 115 and BP is 85/50. The groin dressing is dry. What is your primary suspicion?", ["Acute stent thrombosis", "Retroperitoneal hemorrhage", "Vasovagal reaction"], 1, "The triad of post-femoral flank pain, tachycardia, and hypotension points directly to a retroperitoneal bleed. The blood pools internally, leaving the external groin dry. Vasovagal reactions cause bradycardia. Stent thrombosis causes chest pain."]
      }
    ]
  }
];