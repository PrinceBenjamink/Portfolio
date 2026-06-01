import useFadeIn from '../hooks/useFadeIn';

const projects = [
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Website',
    desc: 'Full-stack e-commerce platform with product listings, cart, and order management.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/PrinceBenjamink/E-Commerce-Website',
  },
  {
    icon: 'fas fa-film',
    title: 'Movie Recommender',
    desc: 'ML-based movie recommendation system using collaborative filtering and content-based filtering.',
    tags: ['Python', 'Django', 'MongoDB'],
    github: 'https://github.com/PrinceBenjamink/Movie_Recommendation_System',
  },
  {
    icon: 'fas fa-dumbbell',
    title: 'Fitness Center Management',
    desc: 'Management system for gym operations including member registration, attendance, and billing.',
    tags: ['MongoDB', 'React', 'Node.js'],
    github: 'https://github.com/PrinceBenjamink/GYM-managament-System',
  },
];

export default function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-grid fade-in" ref={ref}>
        {projects.map(({ icon, title, desc, tags, github }) => (
          <div className="project-card" key={title}>
            <div className="project-img"><i className={icon} /></div>
            <div className="project-info">
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
              <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
