import { assetPath } from '../../utils/assetPath';
import { SectionLabel } from './SectionLabel';

export const ResumeSection = () => (
  <section id="resume" className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20 scroll-mt-28">
    <SectionLabel number="">
      <span className="text-2xl font-bold text-text md:text-3xl">个人简历</span>
    </SectionLabel>

    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <p className="max-w-2xl text-sm leading-relaxed text-text/70">
        这里展示我的完整求职简历，包含教育背景、专业技能、工作经历、银行业务项目经验与联系方式。您可以直接浏览图片版本，也可以打开 PDF 原件用于下载、打印或转发。
      </p>
      <a
        href={assetPath('/resume/liuxiang-resume-2026.pdf')}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent transition-colors hover:border-accent/60 hover:bg-accent/15"
      >
        PDF
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>

    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/45 p-2 shadow-2xl backdrop-blur-md md:p-3">
      <img
        src={assetPath('/resume/liuxiang-resume-2026.png')}
        alt="刘翔 2026 个人简历"
        loading="lazy"
        className="block h-auto w-full rounded-xl bg-white"
      />
    </div>
  </section>
);
