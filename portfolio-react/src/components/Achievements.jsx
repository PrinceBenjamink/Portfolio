import useFadeIn from '../hooks/useFadeIn';

const achievements = [
  { icon: 'fas fa-globe', text: 'Participated in the ICPC India Preliminary Contest.' },
  { icon: 'fas fa-trophy', text: 'Finalist in the Internal Coding Carnival.' },
  { icon: 'fas fa-rocket', text: 'Participated in the Astranova Hackathon at Coimbatore Institute of Technology.' },
  { icon: 'fas fa-medal', text: 'Finalist in HackNCode at PSG Institute of Technology.' },
  { icon: 'fas fa-star', text: 'Secured 2nd Rank in the CSE Department during the 1st semester.' },
];

export default function Achievements() {
  const ref = useFadeIn();
  return (
    <section id="achievements">
      <h2 className="section-title">Achieve<span>ments</span></h2>
      <div className="achievements-list fade-in" ref={ref}>
        {achievements.map(({ icon, text }) => (
          <div className="achievement-card" key={text}>
            <div className="achievement-icon"><i className={icon} /></div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
