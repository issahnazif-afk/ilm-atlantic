import { useRoute, href } from './lib/router';
import type { TaskCode } from './data/types';
import { Logo } from './components/ui';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Library, TaskList } from './pages/Library';
import { Practice } from './pages/Practice';
import { MockHome, MockRunner, Report } from './pages/Mock';
import { Examiner, ReviewAttempt } from './pages/Examiner';
import { Scoring } from './pages/Scoring';

export default function App() {
  const [a, b, c] = useRoute();
  let page;
  if (!a) page = <Landing />;
  else if (a === 'dashboard') page = <Dashboard />;
  else if (a === 'practice' && c) page = <Practice key={c} task={b as TaskCode} id={c} />;
  else if (a === 'practice' && b) page = <TaskList key={b} task={b as TaskCode} />;
  else if (a === 'practice') page = <Library />;
  else if (a === 'mock' && b === 'run' && c) page = <MockRunner key={c} kind={c} />;
  else if (a === 'mock') page = <MockHome />;
  else if (a === 'report' && b) page = <Report id={b} />;
  else if (a === 'review' && b) page = <ReviewAttempt id={b} />;
  else if (a === 'examiner') page = <Examiner />;
  else if (a === 'scoring') page = <Scoring />;
  else page = <div className="container page empty">Page not found. <a href={href('')}>Home</a></div>;

  const nav: [string, string][] = [['dashboard', 'Dashboard'], ['practice', 'Practice'], ['mock', 'Mock tests'], ['scoring', 'How scoring works'], ['examiner', 'Examiner']];
  return (
    <>
      <header className="topbar">
        <div className="container">
          <a className="brand" href={href('')}><Logo /><span>Ilm Atlantic<small>PTE made easy</small></span></a>
          <nav className="nav">
            {nav.map(([p, l]) => <a key={p} href={href(p)} className={a === p ? 'active' : ''}>{l}</a>)}
          </nav>
        </div>
      </header>
      <main>{page}</main>
      <footer className="footer">
        <div className="container row spread">
          <span className="row"><Logo size={22} /> <b style={{ color: '#fff' }}>Ilm Atlantic</b> · Knowledge that carries you across.</span>
          <span>Independent test preparation. Not affiliated with Pearson. All practice items are original. Prototype v0.1</span>
        </div>
      </footer>
    </>
  );
}
