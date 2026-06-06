import React from 'react';

export default function App() {
  const profile = {
    name: "Aswini Devi Medisetti",
    role: "Computer Science & Engineering Student | Full Stack & UI/UX Developer",
    email: "aswinidevimedisetti4@gmail.com",
    phone: "8688473213",
    address: "1-144/13, Kothuru Road, Bhavani Nagar, Rayadupalem (Near Sri Kamakshi Sametha Ekamreswara Swami Vari Aalayam Sivalayam)",
    education: {
      college: "Pragati Engineering College (2024-2028)",
      degree: "B.Tech in Computer Science and Engineering",
      gpa: "GPA: 7.81"
    },
    summary: "Detail-oriented Computer Science student experienced in designing and developing responsive web applications. Skilled at combining backend application logic with interactive, user-focused frontend UI/UX designs to build clean digital solutions.",
    skills: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "Java", 
      "Python", 
      "UI/UX Designing", 
      "Canva", 
      "Microsoft 365"
      "vibe coding"
      "AI content creater"
    ],
    projects: [
      {
        title: "🌐 1. Centralized Charity Platform",
        description: "Developed an architectural web framework focused on streamlining community charity initiatives, managing donor registration, and organizing resource distribution pipelines cleanly.",
        hasLink: false
      },
      {
        title: "📚 2. Paper Publication with MAT Journals",
        description: "Authored and published a recognized technical research paper exploring modern computing methodologies, documenting advanced engineering insights and workflows.",
        hasLink: false
      },
      {
        title: "🔥 3. 'Roast My CV' Interactive Application",
        description: "Built an engaging web application that analyzes resume layouts, structural formats, and content styles, providing playful yet highly constructive feedback to help users optimize their resumes.",
        hasLink: true,
        url: "https://roastmycv.lovable.app/" 
      },
      {
        title: "🎨 4. Creative UI/UX Design Portfolio",
        description: "Engineered user experience frameworks featuring custom wireframes, asset sheets, and responsive interface layouts, converting conceptual design maps into working frontend code architectures.",
        hasLink: false
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER SECTION */}
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #334155', paddingBottom: '30px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '3rem', margin: '0 0 10px 0' }}>{profile.name}</h1>
        <p style={{ fontSize: '1.4rem', color: '#94a3b8', margin: '0' }}>{profile.role}</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* CONTACT DETAILS & ADDRESS */}
        <section style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#38bdf8', marginTop: '0', fontSize: '1.5rem' }}>📍 Contact Details & Address</h2>
          <p style={{ margin: '8px 0' }}><strong>Email:</strong> {profile.email}</p>
          <p style={{ margin: '8px 0' }}><strong>Phone:</strong> {profile.phone}</p>
          <p style={{ margin: '8px 0', lineHeight: '1.6' }}><strong>Address:</strong> {profile.address}</p>
        </section>

        {/* EDUCATION SECTION */}
        <section style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#38bdf8', marginTop: '0', fontSize: '1.5rem' }}>🎓 Education</h2>
          <h3 style={{ color: '#e2e8f0', margin: '5px 0' }}>{profile.education.college}</h3>
          <p style={{ margin: '5px 0', color: '#94a3b8' }}>{profile.education.degree}</p>
          <p style={{ margin: '5px 0', color: '#38bdf8', fontWeight: 'bold' }}>{profile.education.gpa}</p>
        </section>

        {/* EXPERIENCE SUMMARY */}
        <section style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#38bdf8', marginTop: '0', fontSize: '1.5rem' }}>👤 Professional Summary</h2>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1', margin: '0' }}>{profile.summary}</p>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#38bdf8', marginTop: '0', fontSize: '1.5rem' }}>🛡️ Core Technical Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
            {profile.skills.map((skill, index) => (
              <span key={index} style={{ backgroundColor: '#38bdf8', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#38bdf8', marginTop: '0', fontSize: '1.5rem' }}>💼 Featured Projects & Publications</h2>
          {profile.projects.map((proj, index) => (
            <div key={index} style={{ marginTop: '20px', borderBottom: index !== profile.projects.length - 1 ? '1px dashed #334155' : 'none', paddingBottom: '15px' }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 8px 0' }}>{proj.title}</h3>
              <p style={{ lineHeight: '1.5', color: '#94a3b8', margin: '0 0 12px 0' }}>{proj.description}</p>
              
              {proj.hasLink && (
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-block', backgroundColor: '#38bdf8', color: '#0f172a', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem', marginTop: '5px' }}
                >
                  🚀 View Live Project
                </a>
              )}
            </div>
          ))}
        </section>

      </main>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#64748b', fontSize: '0.9rem' }}>
        <p>© 2026 {profile.name}. All Engineering Project Rights Reserved.</p>
      </footer>
    </div>
  );
}
