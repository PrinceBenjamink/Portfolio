import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.o})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero">
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
      <div className="hero-content">
        <p className="greeting">Hi, I'm</p>
        <h1>Prince <span>Benjamin K</span></h1>
        <p className="tagline">Full Stack Developer · CSE Student · Problem Solver</p>
        <p className="hero-intro">I build clean, efficient web applications and love solving complex problems. Currently pursuing B.E CSE while sharpening my skills in competitive programming and full stack development.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn primary">View Work</a>
          <a href="https://drive.google.com/file/d/1PtHi9KsDsqoG1PrTTBiWobFD5BGi42SH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn outline">View Resume <i className="fas fa-eye" /></a>
        </div>
      </div>
    </section>
  );
}
