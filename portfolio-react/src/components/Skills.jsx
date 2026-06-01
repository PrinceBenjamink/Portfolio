import useFadeIn from '../hooks/useFadeIn';

const skillGroups = [
  {
    label: 'Languages',
    icon: 'fas fa-code',
    skills: ['C', 'C++', 'Java', 'HTML', 'CSS'],
  },
  {
    label: 'Frontend',
    icon: 'fab fa-react',
    skills: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    label: 'Backend',
    icon: 'fas fa-server',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Database',
    icon: 'fas fa-database',
    skills: ['MongoDB', 'SQL', 'Mongoose'],
  },
  {
    label: 'Tools & Cloud',
    icon: 'fas fa-tools',
    skills: ['Git', 'GitHub', 'Postman', 'AWS', 'Vercel'],
  },
  {
    label: 'Concepts',
    icon: 'fas fa-brain',
    skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'OS'],
  },
];

export default function Skills() {
  const ref = useFadeIn();
  return (
    <section id="skills">
      <h2 className="section-title">Tech <span>Stack</span></h2>
      <div className="skill-groups fade-in" ref={ref}>
        {skillGroups.map(({ label, icon, skills }) => (
          <div className="skill-group" key={label}>
            <div className="skill-group-header">
              <i className={icon} />
              <h4>{label}</h4>
            </div>
            <div className="skill-tags">
              {skills.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
