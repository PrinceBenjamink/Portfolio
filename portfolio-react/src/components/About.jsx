import useFadeIn from '../hooks/useFadeIn';

export default function About() {
  const ref = useFadeIn();
  return (
    <section id="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-grid fade-in" ref={ref}>
        <div className="about-text">
          <p>I'm a passionate Computer Science student with a strong foundation in <span className="about-highlight">C, C++, Python, and Java</span>, and hands-on experience across the full web stack — <span className="about-highlight">HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, and PostgreSQL</span>. I'm deeply focused on <span className="about-highlight">problem solving</span>, constantly sharpening my skills through competitive programming and real-world projects. My goal is to build efficient, impactful software while growing as a developer.</p>
          <ul className="about-info">
            <li><i className="fas fa-graduation-cap" /> B.E CSE — 4th Semester</li>
            <li><i className="fas fa-map-marker-alt" /> India</li>
            <li><i className="fas fa-envelope" /> princebenjamin13062006@gmail.com</li>
          </ul>

        </div>
        <div className="about-stats">
          {[['10+', 'Projects Built'], ['4+', 'Certifications'], ['5+', 'Technologies'], ['1.5+', 'Years Coding']].map(([num, label]) => (
            <div className="stat" key={label}>
              <h3>{num}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
