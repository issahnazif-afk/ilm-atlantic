import { useRoute, href } from './lib/router';
import type { Exam, TaskCode } from './data/types';
import { EXAMS } from './data/taskTypes';
import { Logo } from './components/ui';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Library, TaskList } from './pages/Library';
import { Practice } from './pages/Practice';
import { MockHome, MockRunner, Report } from './pages/Mock';
import { Examiner, ReviewAttempt } from './pages/Examiner';
import { Scoring } from './pages/Scoring';
import { Resources } from './pages/Resources';
import { Vocabulary } from './pages/Vocabulary';

export default function App() {
  const [a, b, c, d] = useRoute();
  let page;
  if (!a) page = <Landing />;
  else if (a === 'dashboard') page = <Dashboard />;
  else if (a === 'practice') {
    // practice[/<exam>][/<task>][/<item>] — an omitted exam means PTE Academic (old links)
    const rest = [b, c, d].filter(Boolean) as string[];
    const exam = (EXAMS.some((e) => e.key === rest[0]) ? rest.shift() : 'pte-a') as Exam;
    const [task, id] = rest;
    page = id ? <Practice key={id} exam={exam} task={task as TaskCode} id={id} />
      : task ? <TaskList key={exam + task} exam={exam} task={task as TaskCode} />
      : <Library key={exam} exam={exam} />;
  }
  else if (a === 'mock' && b === 'run' && c) page = <MockRunner key={c} kind={c} />;
  else if (a === 'mock') page = <MockHome key={b ?? 'pte-a'} exam={(EXAMS.some((e) => e.key === b) ? b : 'pte-a') as Exam} />;
  else if (a === 'report' && b) page = <Report id={b} />;
  else if (a === 'review' && b) page = <ReviewAttempt id={b} />;
  else if (a === 'examiner') page = <Examiner />;
  else if (a === 'scoring') page = <Scoring />;
  else if (a === 'resources') page = <Resources />;
  else if (a === 'vocabulary') page = <Vocabulary />;
  else page = <div className="container page empty">Page not found. <a href={href('')}>Home</a></div>;

  const nav: [string, string][] = [['dashboard', 'Dashboard'], ['practice', 'Practice'], ['mock', 'Mock tests'], ['resources', 'Resources'], ['vocabulary', 'Vocabulary'], ['scoring', 'Scoring'], ['examiner', 'Examiner']];
  return (
    <>
      <header className="topbar">
        <div className="container">
          <a className="brand" href={href('')}><Logo /><span>Ilm Atlantic<small>PTE &amp; CELPIP made easy</small></span></a>
          <nav className="nav">
            {nav.map(([p, l]) => <a key={p} href={href(p)} className={a === p ? 'active' : ''}>{l}</a>)}
          </nav>
        </div>
      </header>
      <main>{page}</main>
      <footer className="footer">
        <div className="container row spread">
          <span className="row"><Logo size={22} /> <b style={{ color: '#fff' }}>Ilm Atlantic</b> · Knowledge that carries you across.</span>
          <span>Independent test preparation. Not affiliated with Pearson or Paragon Testing (CELPIP). All practice questions are original. Prototype v0.2</span>
        </div>
      </footer>
    </>
  );
}
