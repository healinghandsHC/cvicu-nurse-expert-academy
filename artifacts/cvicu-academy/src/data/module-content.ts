export type Lesson = {
  id: string;
  title: string;
  durationMinutes: number;
  sections: { heading: string; content: string }[];
  bedsideCues: string[];
  assessmentSequence: string[];
  safetyPoints: string[];
  workedExample: {
    context: string;
    action: string;
    outcome: string;
  };
  activity: {
    prompt: string;
    type: "reflection" | "calculation" | "interpretation";
  };
  knowledgeCheck: {
    question: string;
    options: string[];
    answerIndex: number;
    rationale: string;
  };
};

export type ModuleContent = {
  moduleId: string;
  lessons: Lesson[];
};

export const MODULE_CONTENTS: Record<string, ModuleContent> = {
  "cardiac-foundations": {
    moduleId: "cardiac-foundations",
    lessons: [
    {
      id: "cardiac-foundations-lesson-1",
      title: "Preload and Ventricular Filling",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Focus on how volume stretches the ventricle before contraction (Starling law). In the context of Preload and Ventricular Filling, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to preload and ventricular filling.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving preload and ventricular filling. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to preload and ventricular filling, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "cardiac-foundations-lesson-2",
      title: "Afterload and Systemic Resistance",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Analyze the resistance the heart must overcome to eject blood. In the context of Afterload and Systemic Resistance, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to afterload and systemic resistance.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving afterload and systemic resistance. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to afterload and systemic resistance, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "cardiac-foundations-lesson-3",
      title: "Myocardial Contractility",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Explore the intrinsic strength of the heart muscle independent of loading conditions. In the context of Myocardial Contractility, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to myocardial contractility.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving myocardial contractility. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to myocardial contractility, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "cardiac-foundations-lesson-4",
      title: "The Pressure-Volume Relationship",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Connect the cardiac cycle phases to pressure and volume changes. In the context of The Pressure-Volume Relationship, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to the pressure-volume relationship.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving the pressure-volume relationship. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to the pressure-volume relationship, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "cardiac-foundations-lesson-5",
      title: "Heart Rate and Cardiac Output",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Examine how extreme rates compromise filling time and stroke volume. In the context of Heart Rate and Cardiac Output, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to heart rate and cardiac output.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving heart rate and cardiac output. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to heart rate and cardiac output, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "hemodynamics": {
    moduleId: "hemodynamics",
    lessons: [
    {
      id: "hemodynamics-lesson-1",
      title: "Leveling and Zeroing the Transducer",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Accurate data requires standardizing the phlebostatic axis. In the context of Leveling and Zeroing the Transducer, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to leveling and zeroing the transducer.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving leveling and zeroing the transducer. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to leveling and zeroing the transducer, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-2",
      title: "Arterial Waveform Analysis",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Examine the anacrotic notch, dicrotic notch, and pulse pressure. In the context of Arterial Waveform Analysis, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to arterial waveform analysis.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving arterial waveform analysis. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to arterial waveform analysis, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-3",
      title: "Central Venous Pressure (CVP) Interpretation",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Interpret right ventricular preload and compliance changes. In the context of Central Venous Pressure (CVP) Interpretation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to central venous pressure (cvp) interpretation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving central venous pressure (cvp) interpretation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to central venous pressure (cvp) interpretation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-4",
      title: "Pulmonary Artery Pressure Tracings",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify pulmonary hypertension and right heart strain markers. In the context of Pulmonary Artery Pressure Tracings, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to pulmonary artery pressure tracings.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving pulmonary artery pressure tracings. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to pulmonary artery pressure tracings, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-5",
      title: "PAOP (Wedge) Pressure Logic",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess left ventricular end-diastolic pressure indirectly. In the context of PAOP (Wedge) Pressure Logic, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to paop (wedge) pressure logic.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving paop (wedge) pressure logic. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to paop (wedge) pressure logic, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-6",
      title: "Overdamped and Underdamped Systems",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Troubleshoot the square wave test to ensure waveform fidelity. In the context of Overdamped and Underdamped Systems, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to overdamped and underdamped systems.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving overdamped and underdamped systems. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to overdamped and underdamped systems, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "hemodynamics-lesson-7",
      title: "Trending Hemodynamic Variables",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Connect multiple pressure readings to paint a full perfusion picture. In the context of Trending Hemodynamic Variables, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to trending hemodynamic variables.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving trending hemodynamic variables. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to trending hemodynamic variables, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "ecg-arrhythmia": {
    moduleId: "ecg-arrhythmia",
    lessons: [
    {
      id: "ecg-arrhythmia-lesson-1",
      title: "Systematic Rhythm Analysis",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Master a step-by-step approach to rate, rhythm, axis, and intervals. In the context of Systematic Rhythm Analysis, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to systematic rhythm analysis.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving systematic rhythm analysis. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to systematic rhythm analysis, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ecg-arrhythmia-lesson-2",
      title: "Sinus Node Dysfunction",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify triggers for sinus bradycardia and tachycardia. In the context of Sinus Node Dysfunction, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to sinus node dysfunction.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving sinus node dysfunction. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to sinus node dysfunction, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ecg-arrhythmia-lesson-3",
      title: "Atrial Arrhythmias in the ICU",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage new-onset AFib and flutter with rapid ventricular response. In the context of Atrial Arrhythmias in the ICU, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to atrial arrhythmias in the icu.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving atrial arrhythmias in the icu. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to atrial arrhythmias in the icu, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ecg-arrhythmia-lesson-4",
      title: "AV Blocks and Bradycardias",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Differentiate Wenckebach, Mobitz II, and Complete Heart Block. In the context of AV Blocks and Bradycardias, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to av blocks and bradycardias.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving av blocks and bradycardias. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to av blocks and bradycardias, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ecg-arrhythmia-lesson-5",
      title: "Wide Complex Tachycardias",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Distinguish VTach from SVT with aberrancy using morphology. In the context of Wide Complex Tachycardias, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to wide complex tachycardias.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving wide complex tachycardias. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to wide complex tachycardias, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ecg-arrhythmia-lesson-6",
      title: "Emergency Rhythm Response",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Prioritize synchronized cardioversion vs defibrillation. In the context of Emergency Rhythm Response, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to emergency rhythm response.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving emergency rhythm response. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to emergency rhythm response, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "ischemia": {
    moduleId: "ischemia",
    lessons: [
    {
      id: "ischemia-lesson-1",
      title: "12-Lead ECG Ischemia Patterns",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify ST elevation, depression, and T-wave inversions by territory. In the context of 12-Lead ECG Ischemia Patterns, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to 12-lead ecg ischemia patterns.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving 12-lead ecg ischemia patterns. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to 12-lead ecg ischemia patterns, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ischemia-lesson-2",
      title: "STEMI vs NSTEMI Pathology",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Understand plaque rupture, thrombosis, and myocardial oxygen supply/demand. In the context of STEMI vs NSTEMI Pathology, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to stemi vs nstemi pathology.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving stemi vs nstemi pathology. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to stemi vs nstemi pathology, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ischemia-lesson-3",
      title: "Cardiac Biomarkers in Context",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Trend Troponin and CK-MB appropriately over time. In the context of Cardiac Biomarkers in Context, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to cardiac biomarkers in context.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving cardiac biomarkers in context. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to cardiac biomarkers in context, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ischemia-lesson-4",
      title: "Post-PCI Sheath and Site Care",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Monitor for retroperitoneal bleeding, hematoma, and pseudoaneurysm. In the context of Post-PCI Sheath and Site Care, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to post-pci sheath and site care.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving post-pci sheath and site care. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to post-pci sheath and site care, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ischemia-lesson-5",
      title: "Mechanical Complications of MI",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Recognize papillary muscle rupture and ventricular septal defects early. In the context of Mechanical Complications of MI, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mechanical complications of mi.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mechanical complications of mi. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mechanical complications of mi, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "valves": {
    moduleId: "valves",
    lessons: [
    {
      id: "valves-lesson-1",
      title: "Aortic Stenosis and Aortic Regurgitation",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage fixed obstruction vs volume overload in the left ventricle. In the context of Aortic Stenosis and Aortic Regurgitation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to aortic stenosis and aortic regurgitation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving aortic stenosis and aortic regurgitation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to aortic stenosis and aortic regurgitation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "valves-lesson-2",
      title: "Mitral Valve Disease Dynamics",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Address left atrial enlargement, pulmonary congestion, and AFib risk. In the context of Mitral Valve Disease Dynamics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mitral valve disease dynamics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mitral valve disease dynamics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mitral valve disease dynamics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "valves-lesson-3",
      title: "Identifying Pathological Murmurs",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Differentiate systolic and diastolic murmurs at the bedside. In the context of Identifying Pathological Murmurs, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to identifying pathological murmurs.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving identifying pathological murmurs. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to identifying pathological murmurs, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "valves-lesson-4",
      title: "Prosthetic Valve Considerations",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Anticipate anticoagulation needs and structural failure risks. In the context of Prosthetic Valve Considerations, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to prosthetic valve considerations.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving prosthetic valve considerations. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to prosthetic valve considerations, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "valves-lesson-5",
      title: "Endocarditis and Acute Valvular Failure",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess for septic emboli and rapidly worsening regurgitation. In the context of Endocarditis and Acute Valvular Failure, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to endocarditis and acute valvular failure.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving endocarditis and acute valvular failure. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to endocarditis and acute valvular failure, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "valves-lesson-6",
      title: "Post-Repair Hemodynamic Goals",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Optimize afterload and heart rate to protect the fresh surgical repair. In the context of Post-Repair Hemodynamic Goals, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to post-repair hemodynamic goals.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving post-repair hemodynamic goals. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to post-repair hemodynamic goals, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "post-op": {
    moduleId: "post-op",
    lessons: [
    {
      id: "post-op-lesson-1",
      title: "Receiving the Fresh Post-Op Patient",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Execute a focused handoff prioritizing airway, bleeding, and hemodynamics. In the context of Receiving the Fresh Post-Op Patient, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to receiving the fresh post-op patient.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving receiving the fresh post-op patient. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to receiving the fresh post-op patient, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-2",
      title: "Mediastinal Bleeding and Chest Tubes",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Trend chest tube output and recognize cardiac tamponade physiology. In the context of Mediastinal Bleeding and Chest Tubes, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mediastinal bleeding and chest tubes.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mediastinal bleeding and chest tubes. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mediastinal bleeding and chest tubes, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-3",
      title: "Rewarming and Vasoplegia",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage vasodilation and shivering during the rewarming phase. In the context of Rewarming and Vasoplegia, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to rewarming and vasoplegia.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving rewarming and vasoplegia. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to rewarming and vasoplegia, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-4",
      title: "Post-Operative Pain and Sedation",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Balance respiratory drive with adequate sternal pain relief. In the context of Post-Operative Pain and Sedation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to post-operative pain and sedation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving post-operative pain and sedation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to post-operative pain and sedation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-5",
      title: "Epicardial Pacing Strategies",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Troubleshoot temporary pacing thresholds and underlying rhythms. In the context of Epicardial Pacing Strategies, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to epicardial pacing strategies.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving epicardial pacing strategies. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to epicardial pacing strategies, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-6",
      title: "Early Extubation Protocols",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess readiness for liberation from mechanical ventilation. In the context of Early Extubation Protocols, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to early extubation protocols.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving early extubation protocols. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to early extubation protocols, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-7",
      title: "Glycemic Control and Infection Risk",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Implement tight insulin control without provoking hypoglycemia. In the context of Glycemic Control and Infection Risk, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to glycemic control and infection risk.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving glycemic control and infection risk. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to glycemic control and infection risk, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "post-op-lesson-8",
      title: "Mobilization and Recovery",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Progress the patient safely from bed to chair to ambulation. In the context of Mobilization and Recovery, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mobilization and recovery.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mobilization and recovery. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mobilization and recovery, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "ventilation": {
    moduleId: "ventilation",
    lessons: [
    {
      id: "ventilation-lesson-1",
      title: "Respiratory Mechanics and Work of Breathing",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Observe accessory muscle use, tachypnea, and paradoxical breathing. In the context of Respiratory Mechanics and Work of Breathing, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to respiratory mechanics and work of breathing.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving respiratory mechanics and work of breathing. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to respiratory mechanics and work of breathing, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-2",
      title: "Arterial Blood Gas Interpretation",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Quickly identify uncompensated and partially compensated acid-base states. In the context of Arterial Blood Gas Interpretation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to arterial blood gas interpretation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving arterial blood gas interpretation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to arterial blood gas interpretation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-3",
      title: "Oxygenation vs Ventilation Failure",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Distinguish hypoxic failure (ARDS/edema) from hypercapnic failure (fatigue). In the context of Oxygenation vs Ventilation Failure, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to oxygenation vs ventilation failure.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving oxygenation vs ventilation failure. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to oxygenation vs ventilation failure, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-4",
      title: "Non-Invasive Positive Pressure",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Use CPAP/BiPAP effectively for cardiogenic pulmonary edema. In the context of Non-Invasive Positive Pressure, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to non-invasive positive pressure.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving non-invasive positive pressure. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to non-invasive positive pressure, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-5",
      title: "Ventilator Modes and Asynchrony",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Troubleshoot high pressure, low volume, and patient-ventilator dyssynchrony. In the context of Ventilator Modes and Asynchrony, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to ventilator modes and asynchrony.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving ventilator modes and asynchrony. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to ventilator modes and asynchrony, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-6",
      title: "Managing the Right Ventricle on PEEP",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Understand how positive intrathoracic pressure affects venous return and RV afterload. In the context of Managing the Right Ventricle on PEEP, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to managing the right ventricle on peep.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving managing the right ventricle on peep. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to managing the right ventricle on peep, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "ventilation-lesson-7",
      title: "Weaning and Extubation Readiness",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Conduct spontaneous breathing trials (SBTs) and assess leak tests. In the context of Weaning and Extubation Readiness, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to weaning and extubation readiness.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving weaning and extubation readiness. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to weaning and extubation readiness, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "shock": {
    moduleId: "shock",
    lessons: [
    {
      id: "shock-lesson-1",
      title: "The Phenotypes of Shock",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Classify shock rapidly into pump, tank, or pipe failures. In the context of The Phenotypes of Shock, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to the phenotypes of shock.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving the phenotypes of shock. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to the phenotypes of shock, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-2",
      title: "Cardiogenic Shock Assessment",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage profound pump failure with inotropes and mechanical support. In the context of Cardiogenic Shock Assessment, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to cardiogenic shock assessment.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving cardiogenic shock assessment. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to cardiogenic shock assessment, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-3",
      title: "Distributive Shock in the CVICU",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify sepsis or vasoplegia driving down systemic vascular resistance. In the context of Distributive Shock in the CVICU, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to distributive shock in the cvicu.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving distributive shock in the cvicu. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to distributive shock in the cvicu, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-4",
      title: "Hypovolemic and Hemorrhagic States",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess fluid responsiveness and manage massive transfusion protocols. In the context of Hypovolemic and Hemorrhagic States, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to hypovolemic and hemorrhagic states.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving hypovolemic and hemorrhagic states. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to hypovolemic and hemorrhagic states, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-5",
      title: "Obstructive Shock Physiology",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Recognize tension pneumothorax, massive PE, and cardiac tamponade. In the context of Obstructive Shock Physiology, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to obstructive shock physiology.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving obstructive shock physiology. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to obstructive shock physiology, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-6",
      title: "Mixed Shock States",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Untangle the patient with both cardiogenic and septic features. In the context of Mixed Shock States, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mixed shock states.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mixed shock states. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mixed shock states, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-7",
      title: "Monitoring End-Organ Perfusion",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Trend lactate, base deficit, urine output, and mental status changes. In the context of Monitoring End-Organ Perfusion, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to monitoring end-organ perfusion.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving monitoring end-organ perfusion. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to monitoring end-organ perfusion, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "shock-lesson-8",
      title: "Reassessing Interventions",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Evaluate whether a fluid bolus or vasoactive change met its clinical goal. In the context of Reassessing Interventions, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to reassessing interventions.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving reassessing interventions. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to reassessing interventions, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "drips": {
    moduleId: "drips",
    lessons: [
    {
      id: "drips-lesson-1",
      title: "Receptor Pharmacology Basics",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Map alpha, beta, and dopaminergic receptors to clinical effects. In the context of Receptor Pharmacology Basics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to receptor pharmacology basics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving receptor pharmacology basics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to receptor pharmacology basics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-2",
      title: "Norepinephrine and Vasopressin",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Optimize SVR and vascular tone without sacrificing distal perfusion. In the context of Norepinephrine and Vasopressin, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to norepinephrine and vasopressin.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving norepinephrine and vasopressin. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to norepinephrine and vasopressin, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-3",
      title: "Epinephrine and Dopamine",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Use mixed agents to support both contractility and pressure. In the context of Epinephrine and Dopamine, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to epinephrine and dopamine.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving epinephrine and dopamine. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to epinephrine and dopamine, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-4",
      title: "Inotropes: Milrinone and Dobutamine",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Increase forward flow while managing the risk of hypotension and arrhythmias. In the context of Inotropes: Milrinone and Dobutamine, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to inotropes: milrinone and dobutamine.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving inotropes: milrinone and dobutamine. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to inotropes: milrinone and dobutamine, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-5",
      title: "Vasodilators: Nitroglycerin and Nitroprusside",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Reduce preload and afterload to lower myocardial oxygen demand. In the context of Vasodilators: Nitroglycerin and Nitroprusside, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to vasodilators: nitroglycerin and nitroprusside.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving vasodilators: nitroglycerin and nitroprusside. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to vasodilators: nitroglycerin and nitroprusside, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-6",
      title: "Calcium Channel Blockers and Beta Blockers",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Control rate and pressure using short-acting continuous infusions. In the context of Calcium Channel Blockers and Beta Blockers, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to calcium channel blockers and beta blockers.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving calcium channel blockers and beta blockers. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to calcium channel blockers and beta blockers, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-7",
      title: "Sedatives and Analgesics",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Balance comfort, delirium risk, and respiratory drive using propofol, dexmedetomidine, and fentanyl. In the context of Sedatives and Analgesics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to sedatives and analgesics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving sedatives and analgesics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to sedatives and analgesics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-8",
      title: "Managing Extravasation",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Recognize line infiltration and execute institutional rescue protocols (e.g., phentolamine). In the context of Managing Extravasation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to managing extravasation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving managing extravasation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to managing extravasation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "drips-lesson-9",
      title: "Titrating to Clinical Effect",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Adjust drips based on MAP, cardiac index, and urine output rather than arbitrary numbers. In the context of Titrating to Clinical Effect, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to titrating to clinical effect.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving titrating to clinical effect. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to titrating to clinical effect, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "mechanical-support": {
    moduleId: "mechanical-support",
    lessons: [
    {
      id: "mechanical-support-lesson-1",
      title: "Indications for Mechanical Support",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Match the right device to the specific failure (LV, RV, or biventricular). In the context of Indications for Mechanical Support, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to indications for mechanical support.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving indications for mechanical support. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to indications for mechanical support, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-2",
      title: "Intra-Aortic Balloon Pump (IABP) Principles",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Understand diastolic augmentation and systolic afterload reduction. In the context of Intra-Aortic Balloon Pump (IABP) Principles, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to intra-aortic balloon pump (iabp) principles.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving intra-aortic balloon pump (iabp) principles. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to intra-aortic balloon pump (iabp) principles, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-3",
      title: "IABP Timing and Troubleshooting",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify early, late, and loss of trigger errors on the arterial waveform. In the context of IABP Timing and Troubleshooting, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to iabp timing and troubleshooting.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving iabp timing and troubleshooting. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to iabp timing and troubleshooting, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-4",
      title: "Impella Axial Flow Dynamics",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Grasp how continuous forward flow offloads the left ventricle. In the context of Impella Axial Flow Dynamics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to impella axial flow dynamics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving impella axial flow dynamics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to impella axial flow dynamics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-5",
      title: "Impella Alarms and Positioning",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Respond to suction alarms, malposition indicators, and purge pressures. In the context of Impella Alarms and Positioning, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to impella alarms and positioning.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving impella alarms and positioning. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to impella alarms and positioning, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-6",
      title: "VA ECMO Hemodynamics",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage extracorporeal flow replacing native cardiac and pulmonary function. In the context of VA ECMO Hemodynamics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to va ecmo hemodynamics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving va ecmo hemodynamics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to va ecmo hemodynamics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-7",
      title: "VV ECMO Respiratory Support",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Support profound respiratory failure while allowing lung rest. In the context of VV ECMO Respiratory Support, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to vv ecmo respiratory support.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving vv ecmo respiratory support. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to vv ecmo respiratory support, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-8",
      title: "Anticoagulation and Hemolysis",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Monitor circuit integrity, PTT/Anti-Xa, and plasma free hemoglobin. In the context of Anticoagulation and Hemolysis, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to anticoagulation and hemolysis.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving anticoagulation and hemolysis. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to anticoagulation and hemolysis, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-9",
      title: "Protecting Distal Perfusion",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess cannula sites frequently for acute limb ischemia and compartment syndrome. In the context of Protecting Distal Perfusion, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to protecting distal perfusion.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving protecting distal perfusion. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to protecting distal perfusion, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "mechanical-support-lesson-10",
      title: "Weaning Mechanical Support",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Assess native recovery during standardized flow reduction trials. In the context of Weaning Mechanical Support, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to weaning mechanical support.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving weaning mechanical support. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to weaning mechanical support, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "renal-electrolytes": {
    moduleId: "renal-electrolytes",
    lessons: [
    {
      id: "renal-electrolytes-lesson-1",
      title: "Acute Kidney Injury in Heart Failure",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Identify cardiorenal syndrome and the impact of elevated venous pressures. In the context of Acute Kidney Injury in Heart Failure, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to acute kidney injury in heart failure.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving acute kidney injury in heart failure. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to acute kidney injury in heart failure, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "renal-electrolytes-lesson-2",
      title: "Diuretic Resistance Strategies",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Implement sequential nephron blockade using loop and thiazide diuretics. In the context of Diuretic Resistance Strategies, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to diuretic resistance strategies.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving diuretic resistance strategies. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to diuretic resistance strategies, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "renal-electrolytes-lesson-3",
      title: "CRRT Indications and Modalities",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Differentiate CVVH, CVVHD, and CVVHDF clearance mechanisms. In the context of CRRT Indications and Modalities, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to crrt indications and modalities.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving crrt indications and modalities. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to crrt indications and modalities, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "renal-electrolytes-lesson-4",
      title: "Potassium and Magnesium Management",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Aggressively replete K+ and Mg2+ to prevent fatal ventricular arrhythmias. In the context of Potassium and Magnesium Management, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to potassium and magnesium management.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving potassium and magnesium management. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to potassium and magnesium management, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "renal-electrolytes-lesson-5",
      title: "Calcium and Phosphate Shifts",
      durationMinutes: 9,
      sections: [
        {
          heading: "Core Concept",
          content: "Manage ionized calcium in the context of massive transfusion and citrate CRRT. In the context of Calcium and Phosphate Shifts, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to calcium and phosphate shifts.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving calcium and phosphate shifts. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to calcium and phosphate shifts, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "renal-electrolytes-lesson-6",
      title: "Acid-Base Derangements",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Correct severe acidosis that impairs catecholamine efficacy and myocardial function. In the context of Acid-Base Derangements, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to acid-base derangements.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving acid-base derangements. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to acid-base derangements, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
  "leadership": {
    moduleId: "leadership",
    lessons: [
    {
      id: "leadership-lesson-1",
      title: "Structuring a Shift in the CVICU",
      durationMinutes: 7,
      sections: [
        {
          heading: "Core Concept",
          content: "Organize comprehensive assessments, medication titrations, and daily milestones. In the context of Structuring a Shift in the CVICU, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to structuring a shift in the cvicu.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving structuring a shift in the cvicu. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to structuring a shift in the cvicu, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-2",
      title: "SBAR and Effective Escalation",
      durationMinutes: 10,
      sections: [
        {
          heading: "Core Concept",
          content: "Communicate urgent changes concisely to providers to secure actionable orders. In the context of SBAR and Effective Escalation, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to sbar and effective escalation.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving sbar and effective escalation. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to sbar and effective escalation, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-3",
      title: "Crisis Resource Management",
      durationMinutes: 8,
      sections: [
        {
          heading: "Core Concept",
          content: "Adopt clear roles during a code or acute decompensation event. In the context of Crisis Resource Management, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to crisis resource management.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving crisis resource management. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to crisis resource management, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-4",
      title: "Family Communication and Ethics",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Navigate difficult goals-of-care conversations and end-of-life decisions. In the context of Family Communication and Ethics, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to family communication and ethics.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving family communication and ethics. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to family communication and ethics, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-5",
      title: "Delegation and Closed-Loop Communication",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Assign tasks safely to assistive personnel and confirm completion. In the context of Delegation and Closed-Loop Communication, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to delegation and closed-loop communication.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving delegation and closed-loop communication. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to delegation and closed-loop communication, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-6",
      title: "Mentoring and Bedside Teaching",
      durationMinutes: 6,
      sections: [
        {
          heading: "Core Concept",
          content: "Share clinical pearls and foster a culture of inquiry among new nurses. In the context of Mentoring and Bedside Teaching, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to mentoring and bedside teaching.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving mentoring and bedside teaching. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to mentoring and bedside teaching, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    },
    {
      id: "leadership-lesson-7",
      title: "Debriefing and Reflective Practice",
      durationMinutes: 5,
      sections: [
        {
          heading: "Core Concept",
          content: "Review critical events formally to improve team performance and process. In the context of Debriefing and Reflective Practice, understanding the underlying mechanisms ensures you are reacting to the patient state rather than just the monitor. Changes in these parameters occur dynamically, requiring constant vigilance."
        },
        {
          heading: "Clinical Translation",
          content: "When applied at the bedside, this means observing the complete clinical picture. A single deranged value is a cue to look deeper, assess perfusion, and evaluate the efficacy of current therapies."
        },
        {
          heading: "Escalation and Response",
          content: "Determine the threshold for action. If physiological indicators trend negatively despite optimization, early notification to the medical team is imperative to prevent irreversible decompensation."
        }
      ],
      bedsideCues: [
        "Sudden variance in continuous monitoring data",
        "Physical signs of diminished perfusion (cool skin, delayed cap refill)",
        "Changes in patient mentation or unexpected agitation",
        "Urine output falling below acceptable parameters"
      ],
      assessmentSequence: [
        "1. Secure ABCs immediately.",
        "2. Verify equipment and line integrity to rule out artifact.",
        "3. Perform a targeted physical exam focusing on tissue perfusion.",
        "4. Review recent medication titrations or fluid interventions.",
        "5. Formulate a structured SBAR to relay actionable findings."
      ],
      safetyPoints: [
        "Validate abnormal monitor readings with physical assessment before intervening.",
        "Follow institutional guidelines and specific device/drug IFUs closely.",
        "Maintain a low threshold for seeking help during rapid decline."
      ],
      workedExample: {
        context: "During an hourly assessment, you note a subtle but persistent negative trend related to debriefing and reflective practice.",
        action: "You verify the finding, perform a rapid systemic assessment, and structure a concise communication to the provider outlining the change and your specific concern.",
        outcome: "The prompt escalation leads to a minor adjustment in therapy, stabilizing the patient and avoiding a potential crisis."
      },
      activity: {
        prompt: "Consider a recent patient interaction involving debriefing and reflective practice. What early warning signs were present, and how did your assessment drive the clinical response?",
        type: "reflection"
      },
      knowledgeCheck: {
        question: "When assessing a patient for complications related to debriefing and reflective practice, which clinical indicator warrants the most immediate intervention?",
        options: [
          "A mild, expected deviation in an isolated lab value",
          "A progressive decline in end-organ perfusion markers such as mentation and urine output",
          "A brief, self-resolving monitor alarm"
        ],
        answerIndex: 1,
        rationale: "A progressive decline in end-organ perfusion is a critical sign of decompensation that demands immediate reassessment and escalation. Isolated abnormal labs or transient alarms must be evaluated but do not automatically supersede actual perfusion markers."
      }
    }
    ]
  },
};
