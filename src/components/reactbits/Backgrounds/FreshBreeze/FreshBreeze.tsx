import { useEffect, useRef } from 'react';

const COLORS = ['#14B8A6', '#38BDF8', '#A78BFA', '#FDE68A'];

const FreshBreeze = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 1;
    let height = 1;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawRibbon = (
      t: number,
      index: number,
      color: string,
      alpha: number,
      yBase: number,
      amplitude: number
    ) => {
      ctx.beginPath();
      const speed = 0.12 + index * 0.025;
      for (let x = -80; x <= width + 80; x += 18) {
        const normalized = x / Math.max(width, 1);
        const wave =
          Math.sin(normalized * Math.PI * (1.6 + index * 0.28) + t * speed + index) * amplitude +
          Math.sin(normalized * Math.PI * (4.2 + index * 0.18) - t * speed * 0.72) * amplitude * 0.28;
        const y = yBase + wave;
        if (x === -80) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1.2 + index * 0.42;
      ctx.lineCap = 'round';
      ctx.stroke();
    };

    const draw = (now: number) => {
      const t = (now - start) * 0.001;
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, '#F8FBFF');
      bg.addColorStop(0.34, '#EAFDF8');
      bg.addColorStop(0.68, '#F5F1FF');
      bg.addColorStop(1, '#FFFDF4');
      ctx.globalAlpha = 1;
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const wash = ctx.createLinearGradient(0, height * 0.14, width, height * 0.86);
      wash.addColorStop(0, 'rgba(20, 184, 166, 0.10)');
      wash.addColorStop(0.45, 'rgba(56, 189, 248, 0.08)');
      wash.addColorStop(1, 'rgba(167, 139, 250, 0.10)');
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 8; i++) {
        const yBase = height * (0.16 + i * 0.105);
        const amp = 18 + (i % 3) * 10;
        drawRibbon(t, i, COLORS[i % COLORS.length], 0.13 - i * 0.006, yBase, amp);
      }

      ctx.globalAlpha = 0.28;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 96) {
        ctx.beginPath();
        ctx.moveTo(x + ((t * 12) % 96), 0);
        ctx.lineTo(x - height * 0.28 + ((t * 12) % 96), height);
        ctx.stroke();
      }

      for (let i = 0; i < 42; i++) {
        const phase = i * 37.17;
        const x = ((phase * 19 + t * (12 + (i % 5) * 5)) % (width + 120)) - 60;
        const y = height * (0.08 + ((i * 0.073) % 0.86)) + Math.sin(t * 0.5 + i) * 12;
        const radius = 0.8 + (i % 4) * 0.35;
        ctx.globalAlpha = 0.18 + (i % 3) * 0.04;
        ctx.fillStyle = COLORS[i % COLORS.length];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="h-full w-full bg-[#f8fbff]">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default FreshBreeze;
