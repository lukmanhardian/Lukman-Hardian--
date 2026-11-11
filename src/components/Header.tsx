import React from 'react';
import { Language } from '../types';
import { Download, Globe, FileText } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenExport,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single Element) */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
          <span>BriquetteLab</span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onTabChange('flowchart')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              activeTab === 'flowchart'
                ? 'text-slate-900 dark:text-white font-semibold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'id' ? 'Alur Penelitian' : 'Research Flowchart'}
          </button>
          <button
            onClick={() => onTabChange('paper-structure')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              activeTab === 'paper-structure'
                ? 'text-slate-900 dark:text-white font-semibold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'id' ? 'Sistematika Penulisan' : 'Scientific Outline'}
          </button>
          <button
            onClick={() => onTabChange('optimizer')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              activeTab === 'optimizer'
                ? 'text-slate-900 dark:text-white font-semibold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'id' ? 'Simulasi Formulasi' : 'Formulation Optimizer'}
          </button>
          <button
            onClick={() => onTabChange('standards')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              activeTab === 'standards'
                ? 'text-slate-900 dark:text-white font-semibold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {lang === 'id' ? 'Variabel & Standar SNI' : 'Variables & SNI Standard'}
          </button>
        </nav>

        {/* Zone 3: Language Toggle & Primary Export Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Bilingual Switcher (Functional segmented button) */}
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all whitespace-nowrap ${
                lang === 'id'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Ekspor PDF / Panduan' : 'Export PDF / Guide'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-2 py-2 overflow-x-auto text-xs">
        <button
          onClick={() => onTabChange('flowchart')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'flowchart' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {lang === 'id' ? 'Alur Penelitian' : 'Flowchart'}
        </button>
        <button
          onClick={() => onTabChange('paper-structure')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'paper-structure' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {lang === 'id' ? 'Penulisan' : 'Paper Outline'}
        </button>
        <button
          onClick={() => onTabChange('optimizer')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'optimizer' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {lang === 'id' ? 'Simulasi' : 'Optimizer'}
        </button>
        <button
          onClick={() => onTabChange('standards')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'standards' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {lang === 'id' ? 'Standar SNI' : 'Standards'}
        </button>
      </div>
    </header>
  );
};
