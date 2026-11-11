import React, { useState } from 'react';
import { Language, PaperSection } from '../types';
import { PAPER_STRUCTURE_ID, ABSTRACT_DATA, RESEARCH_TITLE } from '../data/researchData';
import { 
  BookOpen, 
  Copy, 
  Check, 
  FileText, 
  Bookmark, 
  HelpCircle, 
  ExternalLink,
  Sigma,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles
} from 'lucide-react';

interface ScientificPaperOutlineProps {
  lang: Language;
}

export const ScientificPaperOutline: React.FC<ScientificPaperOutlineProps> = ({ lang }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-ch1');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedSubsections, setExpandedSubsections] = useState<Record<string, boolean>>({
    'sub-1-1': true,
    'sub-1-2': true,
    'sub-3-3': true,
    'sub-4-2': true,
    'sub-5-1': true,
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const toggleSubsection = (id: string) => {
    setExpandedSubsections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeSection = PAPER_STRUCTURE_ID.find((s) => s.id === activeSectionId) || PAPER_STRUCTURE_ID[1];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase">
              <span>{lang === 'id' ? 'Sistematika Penulisan Karya Ilmiah' : 'Scientific Manuscript Structure'}</span>
              <span>·</span>
              <span>Format Standar IMRaD & Pedoman Skripsi/Jurnal</span>
              <span>·</span>
              <span>Bilingual Indonesian & English</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {lang === 'id'
                ? 'Panduan Urutan & Sistematika Penulisan Artikel Ilmiah'
                : 'Scientific Manuscript Writing Order & Chapter Blueprint'}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-4xl">
              {lang === 'id'
                ? 'Struktur lengkap bab per bab dari Abstrak, Pendahuluan, Tinjauan Pustaka, Metodologi, Hasil & Pembahasan hingga Kesimpulan, dilengkapi poin-poin panduan isi paragraf, rumus matematis, dan draf teks siap pakai.'
                : 'Complete section-by-section academic framework spanning Abstract, Introduction, Literature Review, Methodology, Results & Discussion, and Conclusions, enriched with writing prompts and mathematical equations.'}
            </p>
          </div>

          {/* Quick Copy Full Title Button */}
          <button
            onClick={() => handleCopy(RESEARCH_TITLE[lang], 'title')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 transition-colors shrink-0"
          >
            {copiedKey === 'title' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">{lang === 'id' ? 'Judul Tersalin!' : 'Title Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Salin Judul Lengkap' : 'Copy Full Title'}</span>
              </>
            )}
          </button>
        </div>

        {/* Title Display Strip */}
        <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
          <Bookmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {lang === 'id' ? 'Tema & Judul Penelitian Terstandar:' : 'Standardized Research Topic & Title:'}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              "{RESEARCH_TITLE[lang]}"
            </p>
          </div>
        </div>
      </div>

      {/* Structured Abstract Showcase Box */}
      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold tracking-wide uppercase text-slate-900 dark:text-slate-100">
              {ABSTRACT_DATA[lang].title} ({lang === 'id' ? 'Draf Abstrak Lengkap' : 'Full Publication Abstract'})
            </h3>
          </div>
          <button
            onClick={() => handleCopy(ABSTRACT_DATA[lang].content, 'abstract')}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {copiedKey === 'abstract' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-medium">{lang === 'id' ? 'Tersalin' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Salin Abstrak' : 'Copy Abstract'}</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify">
          {ABSTRACT_DATA[lang].content}
        </p>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-semibold text-slate-500 dark:text-slate-400">
            {lang === 'id' ? 'Kata Kunci:' : 'Keywords:'}
          </span>
          {ABSTRACT_DATA[lang].keywords.map((kw, i) => (
            <span key={i} className="text-slate-700 dark:text-slate-300">
              {kw}{i < ABSTRACT_DATA[lang].keywords.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      </div>

      {/* Main Structural Navigator (Left: Chapter list, Right: Subsections & Prompts) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Chapter / Section Navigation Strip (4 cols) */}
        <div className="lg:col-span-4 space-y-2 sticky top-20">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
              {lang === 'id' ? 'Daftar Bab & Struktur' : 'Chapters & Sections'}
            </h3>

            {PAPER_STRUCTURE_ID.map((sec) => {
              const isActive = sec.id === activeSection.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all border ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-slate-800 dark:border-emerald-500/50 shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold text-emerald-500">
                      {sec.number}
                    </span>
                    <span className="text-[11px] opacity-70">
                      {sec.subsections.length} {lang === 'id' ? 'Sub-bab' : 'Subsections'}
                    </span>
                  </div>
                  <div className="font-semibold text-xs mt-1 leading-snug">
                    {sec.title[lang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Academic Formulas Helper Card */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
              <Sigma className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'id' ? 'Rumus Matematis Kunci' : 'Core Analytical Equations'}</span>
            </div>
            
            <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-emerald-400">
              <span className="block text-[10px] text-slate-400 font-sans">1. Nilai Kalor (ASTM D5865):</span>
              GCV = [(W · ΔT) - e1 - e2 - e3] / m
            </div>

            <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-emerald-400">
              <span className="block text-[10px] text-slate-400 font-sans">2. Kadar Abu (ASTM D3174):</span>
              Ash (%) = (m_abu / m_kering) × 100%
            </div>

            <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-emerald-400">
              <span className="block text-[10px] text-slate-400 font-sans">3. Karbon Terikat (Fixed Carbon):</span>
              FC (%) = 100% - (Air% + Abu% + VM%)
            </div>
          </div>
        </div>

        {/* Right: Detailed Content of Active Chapter (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            {/* Active Chapter Header */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {activeSection.number}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {activeSection.title[lang]}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {activeSection.purpose[lang]}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-1.5">
                <button
                  onClick={() => {
                    const allIds = activeSection.subsections.reduce((acc, sub) => {
                      acc[sub.id] = true;
                      return acc;
                    }, {} as Record<string, boolean>);
                    setExpandedSubsections((prev) => ({ ...prev, ...allIds }));
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300"
                >
                  {lang === 'id' ? 'Buka Semua' : 'Expand All'}
                </button>
              </div>
            </div>

            {/* Subsections List */}
            <div className="space-y-4">
              {activeSection.subsections.map((sub) => {
                const isExpanded = !!expandedSubsections[sub.id];

                return (
                  <div
                    key={sub.id}
                    className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-all bg-white dark:bg-slate-900"
                  >
                    {/* Subsection Collapsible Trigger */}
                    <div
                      onClick={() => toggleSubsection(sub.id)}
                      className="p-4 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded">
                          {sub.code}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {sub.title[lang]}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        {sub.sampleDraft && (
                          <span className="text-[10px] font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 rounded border border-emerald-200 dark:border-emerald-800">
                            {lang === 'id' ? 'Ada Draf Teks' : 'Draft Included'}
                          </span>
                        )}
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Subsection Detailed Body */}
                    {isExpanded && (
                      <div className="p-4 space-y-4 text-xs">
                        {/* Guidelines & Prompts */}
                        <div>
                          <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400 block mb-2">
                            {lang === 'id' ? 'Panduan Isi & Susunan Paragraf Ilmiah:' : 'Academic Writing Guidelines & Argument Flow:'}
                          </span>
                          <ul className="space-y-2">
                            {sub.guidelines[lang].map((guide, gIdx) => (
                              <li key={gIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                                <span className="leading-relaxed">{guide}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Optional Sample Draft or Code */}
                        {sub.sampleDraft && (
                          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs">
                                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                                {lang === 'id' ? 'Contoh Redaksi Teks Ilmiah:' : 'Exemplar Scientific Draft:'}
                              </span>
                              <button
                                onClick={() => handleCopy(sub.sampleDraft![lang], sub.id)}
                                className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-white"
                              >
                                {copiedKey === sub.id ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-600" />
                                    <span className="text-emerald-600 font-medium">Tersalin</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Salin Teks</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <p className="font-sans text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-800">
                              {sub.sampleDraft[lang]}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
