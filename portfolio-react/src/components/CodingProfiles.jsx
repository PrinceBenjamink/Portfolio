import { useEffect, useRef } from 'react';

const profiles = [
  {
    href: 'https://leetcode.com/u/Princeben_2006/',
    img: 'https://leetcode.com/favicon.ico',
    name: 'LeetCode',
    desc: 'Solving DSA problems',
    stats: [
      { label: 'Problems Solved', value: '500+' },
      { label: 'Contest Rating', value: '1671' },
      { label: 'Global Rank', value: '193,109' },
    ],
  },
  {
    href: 'http://www.skillrack.com/profile/515028/311de3f98d9ba168cf3975858e76a553ea274cb8',
    img: 'https://www.skillrack.com/favicon.ico',
    name: 'SkillRack',
    desc: 'Programming challenges',
    stats: [
      { label: 'Problems Solved', value: '1747' },
      { label: 'Rank', value: '5330' },
      { label: 'Certificates', value: '14+' },
    ],
  },
  {
    href: 'https://www.codechef.com/users/benjamin_2006',
    img: 'https://www.codechef.com/favicon.ico',
    name: 'CodeChef',
    desc: 'Competitive programming',
    stats: [
      { label: 'Rating', value: '1333' },
      { label: 'Global Rank', value: '57,774' },
      { label: 'Contests', value: '13' },
    ],
  },
];

export default function CodingProfiles() {
  const gridRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const title = titleRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.classList.add('visible');
          if (title) title.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="coding-profiles">
      <h2 className="section-title" ref={titleRef}>Coding <span>Profiles</span></h2>
      <p className="coding-intro">Here's where I sharpen my problem-solving skills and compete with developers worldwide.</p>
      <div className="profiles-grid fade-in" ref={gridRef}>
        {profiles.map(({ href, img, name, desc, stats }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="profile-card" key={name}>
            <img src={img} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
            <div className="profile-stats">
              {stats.map(({ label, value }) => (
                <div className="profile-stat" key={label}>
                  <span className="profile-stat-value">{value}</span>
                  <span className="profile-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
