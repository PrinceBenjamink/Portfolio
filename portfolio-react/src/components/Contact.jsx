import useFadeIn from '../hooks/useFadeIn';

const contacts = [
  { icon: 'fas fa-phone', label: 'Phone', value: '+91 6382822891', href: 'tel:+916382822891' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'princebenjamin13062006@gmail.com', href: 'mailto:princebenjamin13062006@gmail.com' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'PrinceBenjamink', href: 'https://github.com/PrinceBenjamink' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'prince-benjamin-k', href: 'https://www.linkedin.com/in/prince-benjamin-k-4a1a73333/' },
];

export default function Contact() {
  const ref = useFadeIn();
  return (
    <section id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="contact-intro">Have a project in mind or just want to connect? Feel free to reach out — I'm always open to new opportunities and conversations.</p>
      <div className="contact-grid fade-in" ref={ref}>
        {contacts.map(({ icon, label, value, href }) => (
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-card" key={label}>
            <i className={icon} />
            <div>
              <h4>{label}</h4>
              <p>{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
