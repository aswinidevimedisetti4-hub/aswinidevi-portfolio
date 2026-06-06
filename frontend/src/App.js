import React from 'react';

export default function App() {
  const profile = {
    name: "Aswini Devi Medisetti",
    role: "CSE Student | Full Stack & UI/UX Developer",
    email: "aswinidevimedisetti4@gmail.com",
    phone: "8688473213",
    github: "https://github.com/aswinidevimedisetti4-hub",
    education: [
      { school: "Pragati Engineering College", year: "2024–2028", degree: "B.Tech – Computer Science & Engineering", score: "GPA: 7.81" },
      { school: "Aditya Junior College", year: "2022–2024", degree: "Group of MPC", score: "72%" },
      { school: "Sri Chaitanya School", year: "2021–2022", degree: "10th Class", score: "76%" },
    ],
    skills: ["HTML", "CSS", "JavaScript", "Java", "Python", "React.js", "Node.js", "UI/UX Design", "Figma", "Canva", "Microsoft 365","vibe coding","AI content creater"],
    projects: [
      { title: "Centralized Charity Platform", desc: "Web framework for streamlining community charity initiatives, donor registration, and resource distribution.", link: null },
      { title: "Event Planner To-Do Lists", desc: "Interactive event management app with task tracking and scheduling features.", link: null },
      { title: "Paper Publication – MAT Journals", desc: "Published a recognized technical research paper on modern computing methodologies.", link: "https://drive.google.com/file/d/1NFyx6086FTQ5HOurf2NxGA7BNJlcAOxp/view?usp=drive_link" },
      { title: "Travel Website UI/UX Prototype", desc: "Figma prototype with clean layout and interactive navigation to showcase destinations.", link: "https://www.figma.com/proto/Y2FKH2WUT0DHUFNWiYRLJ1/Untitled?node-id=0-1&t=H5JDlefHJYAPRBAd-1" },
    ],
    hobbies: ["Writing", "Drawing", "Dancing"],
  };

  const styles = {
    root: { background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#f1f5f9' },
    hero: { textAlign: 'center', padding: '60px 20px 40px', borderBottom: '1px solid #334155' },
    name: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 8px' },
    role: { fontSize: '1.1rem', color: '#94a3b8', margin: '0 0 24px' },
    contactRow: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
    contactLink: { color: '#38bdf8', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 14px', border: '1px solid #334155', borderRadius: '20px' },
    main: { maxWidth: '860px', margin: '0 auto', padding: '40px 20px' },
    section: { marginBottom: '40px' },
    sectionTitle: { fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8', borderBottom: '2px solid #1e40af', paddingBottom: '8px', marginBottom: '20px' },
    card: { background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '20px', marginBottom: '14px' },
    cardTitle: { fontWeight: 700, fontSize: '1.05rem', color: '#e2e8f0', margin: '0 0 4px' },
    cardSub: { color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 4px' },
    badge: { display: 'inline-block', background: '#0f3460', color: '#38bdf8', padding: '5px 14px', borderRadius: '20px', fontSize: '0.85rem', margin: '4px' },
    link: { display: 'inline-block', marginTop: '10px', color: '#818cf8', textDecoration: 'none', fontSize: '0.9rem', border: '1px solid #818cf8', padding: '4px 12px', borderRadius: '6px' },
    footer: { textAlign: 'center', padding: '30px 20px', color: '#475569', fontSize: '0.85rem', borderTop: '1px solid #1e293b' },
  };

  return (
    <div style={styles.root}>
      {/* HERO */}
      <header style={styles.hero}>
        <h1 style={styles.name}>{profile.name}</h1>
        <p style={styles.role}>{profile.role}</p>
        <div style={styles.contactRow}>
          <a href={`mailto:${profile.email}`} style={styles.contactLink}>✉ {profile.email}</a>
          <a href={`tel:${profile.phone}`} style={styles.contactLink}>📞 {profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>🐙 GitHub</a>
        </div>
      </header>

      <main style={styles.main}>

        {/* EDUCATION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🎓 Education</h2>
          {profile.education.map((edu, i) => (
            <div key={i} style={styles.card}>
              <p style={styles.cardTitle}>{edu.school} <span style={{ color: '#64748b', fontWeight: 400, fontSize: '0.9rem' }}>({edu.year})</span></p>
              <p style={styles.cardSub}>{edu.degree}</p>
              <p style={{ color: '#38bdf8', margin: 0, fontWeight: 600 }}>{edu.score}</p>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🛠 Technical Skills</h2>
          <div style={styles.card}>
            {profile.skills.map((s, i) => <span key={i} style={styles.badge}>{s}</span>)}
          </div>
        </section>

        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💼 Projects & Publications</h2>
          {profile.projects.map((proj, i) => (
            <div key={i} style={styles.card}>
              <p style={styles.cardTitle}>{proj.title}</p>
              <p style={{ ...styles.cardSub, lineHeight: 1.6 }}>{proj.desc}</p>
              {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={styles.link}>🔗 View Project</a>}
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>👩‍💻 Experience</h2>
          <div style={styles.card}>
            <p style={styles.cardTitle}>Frontend Developer (Freelance)</p>
            <p style={{ ...styles.cardSub, lineHeight: 1.6 }}>Designed and developed responsive web pages using HTML, CSS, and JavaScript. Translated UI/UX designs into interactive, user-friendly interfaces.</p>
            <p style={styles.cardTitle}>Project Management (Team Lead)</p>
            <p style={{ ...styles.cardSub, lineHeight: 1.6 }}>Led academic projects at Pragati Engineering College — managed team coordination, timelines, and delivery.</p>
          </div>
        </section>

        {/* HOBBIES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🎨 Hobbies</h2>
          <div style={styles.card}>
            {profile.hobbies.map((h, i) => <span key={i} style={{ ...styles.badge, background: '#1a1a2e', color: '#818cf8' }}>{h}</span>)}
          </div>
        </section>

      </main>

      <footer style={styles.footer}>
        <p>© 2026 Aswini Devi Medisetti · Built with React</p>
      </footer>
    </div>
  );
}
