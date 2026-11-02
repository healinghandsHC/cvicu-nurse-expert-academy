const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Add imports for MODULE_CONTENTS at the top
if (!code.includes('MODULE_CONTENTS')) {
  code = code.replace(
    "import { Link, Route, Router as WouterRouter, Switch, useLocation, useParams } from 'wouter';",
    "import { Link, Route, Router as WouterRouter, Switch, useLocation, useParams } from 'wouter';\nimport { MODULE_CONTENTS } from './data/module-content';"
  );
  code = code.replace(
    "Activity, ArrowLeft, ArrowRight, BookOpen, Bookmark, BrainCircuit, Check, ChevronRight, CircleHelp, Clock3, Crosshair, ExternalLink, FlaskConical, HeartPulse, Library, LockKeyhole, Menu, MonitorCog, Network, Pause, Play, Search, ShieldCheck, SlidersHorizontal, Sparkles, Stethoscope, Target, TrendingUp, UserRound, X, Zap",
    "Activity, ArrowLeft, ArrowRight, BookOpen, Bookmark, BrainCircuit, Check, ChevronDown, ChevronRight, ChevronUp, CircleHelp, Clock3, Crosshair, ExternalLink, FlaskConical, HeartPulse, Library, LockKeyhole, Menu, MonitorCog, Network, Pause, Play, Search, ShieldCheck, SlidersHorizontal, Sparkles, Stethoscope, Target, TrendingUp, UserRound, X, Zap"
  );
}

// 2. Replace LearnPage to unblock navigation
code = code.replace(
  `href={isLocked ? '/learn' : \`/learn/\${module.id}\`}`,
  `href={\`/learn/\${module.id}\`}`
);
code = code.replace(
  `onClick={(event) => { if (isLocked) event.preventDefault(); }}`,
  ``
);
code = code.replace(
  `isLocked ? 'cursor-default opacity-65' : 'hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]'`,
  `isLocked ? 'opacity-65 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]' : 'hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]'`
);
code = code.replace(
  `{!isLocked && <span className="flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">{isDone ? 'Review' : 'Open module'} <ArrowRight size={13} /></span>}`,
  `<span className="flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">{isDone ? 'Review' : isLocked ? 'Preview' : 'Open module'} <ArrowRight size={13} /></span>`
);

// 3. Replace ModuleDetailPage completely
const oldModuleDetailPageMatch = code.match(/function ModuleDetailPage\(\) \{[\s\S]*?\}\s*function LibraryPage/);

const newModuleDetailPage = `function ModuleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const module = MODULES.find((item) => item.id === id) || MODULES[0];
  const moduleData = MODULE_CONTENTS[module.id];
  const lessons = moduleData?.lessons || [];
  
  const [progress, setProgress] = useState(readProgress);
  const [lesson, setLesson] = useState(0);
  
  // Lesson state
  const [showExample, setShowExample] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    setShowExample(false);
    setShowCheck(false);
    setSelectedAnswer(null);
  }, [lesson, module.id]);

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
                    <span>{seq.replace(/^\\d+\\.\\s*/, '')}</span>
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
                        data-testid={\`button-kc-option-\${i}\`}
                        className={\`w-full rounded-lg border p-4 text-left text-sm transition-colors \${buttonClass}\`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={\`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold \${showResult && isCorrect ? 'border-teal-500 bg-teal-500 text-white' : showResult && isSelected ? 'border-red-400 bg-red-400 text-white' : 'border-[hsl(var(--border))]'}\`}>
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
                data-testid={\`button-lesson-\${index}\`} 
                className={cn('flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors', lesson === index ? 'bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]' : 'hover:bg-[hsl(var(--muted))]')}
              >
                <span className={cn('mt-0.5 shrink-0 font-mono-clinical text-[10px] font-bold', lesson > index && 'text-[hsl(var(--primary))]')}>
                  {lesson > index ? '✓' : \`0\${index + 1}\`}
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
function LibraryPage`;

if (oldModuleDetailPageMatch) {
  code = code.replace(oldModuleDetailPageMatch[0], newModuleDetailPage);
}

fs.writeFileSync('src/App.tsx', code);
