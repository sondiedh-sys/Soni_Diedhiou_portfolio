import { useState, useRef, useEffect } from 'react';
import styles from './Terminal.module.css';
import { useLanguage } from '../context/LanguageContext';

// Hidden CTF: ls -a -> cat .secret -> decode base64 -> submit FLAG{...}
const SECRET = 'RkxBR3tjdXJpMHNpdHlfcDR5c18wZmZ9';

const Terminal = () => {
    const { t, toggleLanguage } = useLanguage();
    const m = t.terminal;
    const [lines, setLines] = useState([]);
    const [input, setInput] = useState('');
    const outRef = useRef(null);

    useEffect(() => {
        console.log('%c' + m.consoleHint, 'color:#67e3f2;font-family:monospace');
        // Log once per page load, not on language change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
    }, [lines]);

    const run = (raw) => {
        const [cmd, ...args] = raw.trim().split(/\s+/);
        const arg = args.join(' ');
        switch (cmd) {
            case 'help': return m.help;
            case 'whoami': return [t.hero.role, t.hero.description];
            case 'projects': return t.projects.featured.map((p) => `• ${p.title} — ${p.category}`);
            case 'skills': return t.about.skillsCategories.map((c) => `${c.name}: ${c.skills.join(', ')}`);
            case 'contact': return ['sondiedh@gmail.com', 'github.com/sondiedh-sys'];
            case 'cv': window.open(t.hero.resumePath, '_blank', 'noopener'); return [m.opening];
            case 'lang': toggleLanguage(); return [];
            case 'ls': return [(args.includes('-a') || args.includes('-la') ? '.  ..  .secret  ' : '') + 'about/  projects/  contact/  cv.pdf'];
            case 'cd': {
                // Directories are the page sections: cd scrolls to them
                const dir = arg.replace(/\/$/, '');
                if (!dir || dir === '~' || dir === '.') return [];
                if (dir === '..') return [m.cdRoot];
                const el = ['about', 'projects', 'contact'].includes(dir) && document.getElementById(dir);
                if (!el) return [`cd: ${dir}: ${m.noFile}`];
                el.scrollIntoView();
                return [];
            }
            case 'cat':
                if (arg === '.secret') return [SECRET, m.secretHint];
                if (arg === 'cv.pdf') return [m.binary];
                return [`cat: ${arg || '?'}: ${m.noFile}`];
            case 'submit':
                return [arg === atob(SECRET) ? m.flagOk : m.flagKo];
            case 'sudo': return [m.sudo];
            case 'rm': return [m.rm];
            case 'nmap': return ['PORT    STATE  SERVICE', '443/tcp open   curiosity', m.nmap];
            case 'exit': return [m.exit];
            default: return [`${cmd}: ${m.notFound}`];
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        if (input.trim() === 'clear') { setLines([]); setInput(''); return; }
        setLines((l) => [...l, `$ ${input}`, ...run(input)]);
        setInput('');
    };

    return (
        <div className={styles.terminal}>
            {lines.length > 0 && (
                <div ref={outRef} className={styles.output} aria-live="polite">
                    {lines.map((line, i) => (
                        <p key={i} className={line.startsWith('$ ') ? styles.cmd : undefined}>{line}</p>
                    ))}
                </div>
            )}
            <form onSubmit={onSubmit} className={styles.line}>
                <span className={styles.arrow} aria-hidden="true">$</span>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={m.placeholder}
                    aria-label={m.label}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
            </form>
        </div>
    );
};

export default Terminal;
