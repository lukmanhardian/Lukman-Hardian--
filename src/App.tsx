import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { FlowchartView } from './components/FlowchartView';
import { ScientificPaperOutline } from './components/ScientificPaperOutline';
import { CompositionOptimizer } from './components/CompositionOptimizer';
import { StandardsAndVariables } from './components/StandardsAndVariables';
import { ExportModal } from './components/ExportModal';
import { RESEARCH_TITLE } from './data/researchData';
import { 
  Flame, 
  Layers, 
  BookOpen, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  FileCheck2, 
  Coffee, 
  Apple, 
  CookingPot,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeTab, setActiveTab] = useState<string>('flowchart');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors antialiased selection:bg-emerald-500/20 selection:text-emerald-900 dark:selection:text-emerald-100">
      {/* Top Bar Navigation (3-zone contract compliant) */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Hero Showcase Strip (Research Title & Context Anchor) */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Metadata Row: Clean Unboxed Metadata with Typographic Separators (Zero-pill compliant) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {lang === 'id' ? 'Bioenergi Terbarukan' : 'Renewable Bioenergy'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'Standar SNI 01-6235-2000' : 'SNI 01-6235-2000 & ASTM'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'Valorisasi Limbah Rumah Tangga' : 'Household Waste Valorization'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'Format Bilingual (ID / EN)' : 'Bilingual Edition (ID / EN)'}</span>
          </div>

          {/* Research Title */}
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight text-balance max-w-5xl">
            {RESEARCH_TITLE[lang]}
          </h1>

          {/* Feedstock Cards Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-800 dark:text-amber-300 shrink-0">
                <Coffee className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block">
                  {lang === 'id' ? 'Ampas Kopi (SCG)' : 'Spent Coffee Grounds'}
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                  {lang === 'id' ? 'Kaya lipid & lignin (Nilai Kalor >6.000 cal/g)' : 'High lipid & lignin (>6,000 cal/g HHV)'}
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-yellow-100 dark:bg-yellow-950/60 flex items-center justify-center text-yellow-800 dark:text-yellow-300 shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block">
                  {lang === 'id' ? 'Kulit Pisang (Musa)' : 'Banana Peel Char'}
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                  {lang === 'id' ? 'Katalis kalium alami & penjaga stabilitas bara' : 'Catalytic potassium for steady ember glow'}
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0">
                <CookingPot className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block">
                  {lang === 'id' ? 'Perekat Nasi Sisa' : 'Leftover Rice Binder'}
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                  {lang === 'id' ? 'Pati amilosa tergelatinisasi, bebas asap & racun' : 'Gelatinized starch, non-toxic & low-smoke'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'flowchart' && <FlowchartView lang={lang} />}
        {activeTab === 'paper-structure' && <ScientificPaperOutline lang={lang} />}
        {activeTab === 'optimizer' && <CompositionOptimizer lang={lang} />}
        {activeTab === 'standards' && <StandardsAndVariables lang={lang} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 px-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">BriquetteLab</span>
            <span aria-hidden="true">·</span>
            <span>Rancangan Penelitian & Sistematika Penulisan Ilmiah Briket Rendah Asap</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExportOpen(true)}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {lang === 'id' ? 'Ekspor Markdown / PDF' : 'Export Markdown / PDF'}
            </button>
            <span aria-hidden="true">·</span>
            <span>SNI 01-6235-2000 & ASTM D5865 Compliant</span>
          </div>
        </div>
      </footer>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        lang={lang}
      />
    </div>
  );
}
