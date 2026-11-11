import React, { useState } from 'react';
import { Language, FlowchartStep } from '../types';
import { FLOWCHART_STEPS } from '../data/researchData';
import { 
  Flame, 
  Layers, 
  Beaker, 
  Thermometer, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  Activity, 
  Sliders, 
  Maximize2, 
  Eye, 
  ArrowDown, 
  FileCheck2,
  Cpu
} from 'lucide-react';

interface FlowchartViewProps {
  lang: Language;
}

export const FlowchartView: React.FC<FlowchartViewProps> = ({ lang }) => {
  const [selectedStepId, setSelectedStepId] = useState<string>('step-3');
  const [viewMode, setViewMode] = useState<'visual' | 'linear'>('visual');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedStep = FLOWCHART_STEPS.find((s) => s.id === selectedStepId) || FLOWCHART_STEPS[2];

  const categories = [
    { id: 'all', label: { id: 'Semua Tahapan (All Stages)', en: 'All Stages' } },
    { id: 'feedstock', label: { id: 'Bahan Baku', en: 'Feedstock' } },
    { id: 'pyrolysis', label: { id: 'Pirolisis', en: 'Pyrolysis' } },
    { id: 'binder', label: { id: 'Perekat Nasi', en: 'Rice Binder' } },
    { id: 'formulation', label: { id: 'Pencetakan', en: 'Compacting' } },
    { id: 'testing', label: { id: 'Pengujian Mutu', en: 'Testing' } },
    { id: 'optimization', label: { id: 'Optimasi', en: 'Optimization' } },
  ];

  const filteredSteps = filterCategory === 'all' 
    ? FLOWCHART_STEPS 
    : FLOWCHART_STEPS.filter((s) => s.category === filterCategory);

  const getCategoryBadge = (category: FlowchartStep['category']) => {
    switch (category) {
      case 'feedstock':
        return { label: lang === 'id' ? 'Bahan Mentah' : 'Raw Feedstock', color: 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
      case 'pyrolysis':
        return { label: lang === 'id' ? 'Pirolisis 400°C' : 'Pyrolysis 400°C', color: 'text-rose-700 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800' };
      case 'preparation':
        return { label: lang === 'id' ? 'Pengayakan' : 'Sieve Milling', color: 'text-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
      case 'binder':
        return { label: lang === 'id' ? 'Perekat Alami' : 'Natural Binder', color: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
      case 'formulation':
        return { label: lang === 'id' ? 'Kompaksi Hidrolik' : 'Hydraulic Press', color: 'text-indigo-700 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
      case 'testing':
        return { label: lang === 'id' ? 'Uji SNI / ASTM' : 'SNI / ASTM Assay', color: 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
      case 'optimization':
        return { label: lang === 'id' ? 'Optimasi RSM' : 'RSM Modeling', color: 'text-teal-700 bg-teal-50 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-800' };
      default:
        return { label: 'General', color: 'text-slate-700 bg-slate-50 border-slate-200' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase">
              <span>{lang === 'id' ? 'Bagan Alir Penelitian' : 'Research Design Flowchart'}</span>
              <span>·</span>
              <span>SNI 01-6235-2000 & ASTM D5865</span>
              <span>·</span>
              <span>True Experimental Factorial</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {lang === 'id' 
                ? 'Rancangan Alur Eksperimen Briket Bioarang Rendah Asap'
                : 'Experimental Workflow & Flowchart of Low-Smoke Biomass Briquettes'}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-4xl">
              {lang === 'id'
                ? 'Diagram interaktif seluruh tahapan laboratorium: dari pra-perlakuan ampas kopi dan kulit pisang, pirolisis lambat, gelatinisasi perekat nasi sisa, pencetakan hidrolik, hingga karakterisasi termal dan optimasi RSM.'
                : 'Interactive blueprint mapping all laboratory phases: feedstock decontamination, 400°C slow pyrolysis, leftover rice starch gelatinization, hydraulic compaction, ASTM/SNI fuel testing, and statistical optimization.'}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shrink-0">
            <button
              onClick={() => setViewMode('visual')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                viewMode === 'visual'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'id' ? 'Diagram Alir Interaktif' : 'Interactive Flowchart'}
            </button>
            <button
              onClick={() => setViewMode('linear')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                viewMode === 'linear'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'id' ? 'Protokol Laboratorium Rinci' : 'Laboratory Protocol Guide'}
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto pb-1">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 whitespace-nowrap mr-2">
            {lang === 'id' ? 'Filter Tahap:' : 'Filter Stage:'}
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors whitespace-nowrap ${
                filterCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flowchart & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center: Interactive Nodes (7 cols or full) */}
        <div className="lg:col-span-7 space-y-4">
          {viewMode === 'visual' ? (
            <div className="space-y-4">
              {filteredSteps.map((step, idx) => {
                const isSelected = step.id === selectedStep.id;
                const badge = getCategoryBadge(step.category);
                const isLast = idx === filteredSteps.length - 1;

                return (
                  <div key={step.id} className="relative">
                    {/* Node Card */}
                    <div
                      onClick={() => setSelectedStepId(step.id)}
                      className={`cursor-pointer p-4 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-white dark:bg-slate-800/90 border-emerald-500 dark:border-emerald-400 shadow-md ring-1 ring-emerald-500/20'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {/* Step Number Monospace Badge */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                            isSelected 
                              ? 'bg-emerald-600 text-white dark:bg-emerald-500' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}>
                            {step.stepNumber}
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${badge.color}`}>
                                {badge.label}
                              </span>
                              <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
                                {step.phaseTitle[lang]}
                              </span>
                            </div>

                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                              {step.title[lang]}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                              {step.subtitle[lang]}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                          <Eye className="w-4 h-4 text-slate-400" />
                          <span className="hidden sm:inline">{lang === 'id' ? 'Detail' : 'Inspect'}</span>
                        </div>
                      </div>

                      {/* Quick Parameter Snippet */}
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs">
                        {step.parameters.slice(0, 2).map((p, pIdx) => (
                          <div key={pIdx} className="bg-slate-50 dark:bg-slate-800/60 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                            <span className="font-semibold text-slate-700 dark:text-slate-200">{p.label[lang]}:</span>{' '}
                            <span className="font-mono text-slate-900 dark:text-emerald-400">{p.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flowchart Connector Line & Down Arrow */}
                    {!isLast && (
                      <div className="flex items-center justify-center py-1">
                        <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                          <ArrowDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 -mb-2" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Linear Guide Mode: Comprehensive Lab Manual */
            <div className="space-y-6">
              {filteredSteps.map((step) => (
                <div 
                  key={step.id} 
                  className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 rounded">
                        STEP {step.stepNumber}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100">
                        {step.title[lang]}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500">
                      {step.phaseTitle[lang]}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {lang === 'id' ? 'Tujuan Eksperimen' : 'Experimental Purpose'}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {step.objective[lang]}
                    </p>
                  </div>

                  {/* Standard Protocols List */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      {lang === 'id' ? 'Instruksi Langkah Kerja Laboratorium' : 'Laboratory Execution Steps'}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {step.protocol[lang].map((item, i) => (
                        <li key={i} className="pl-1 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Equipment & Critical Factors Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                        {lang === 'id' ? 'Instrumen & Peralatan:' : 'Instruments & Apparatus:'}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {step.equipment.join(', ')}
                      </p>
                    </div>

                    <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 rounded-lg border border-amber-200/50 dark:border-amber-800/40">
                      <span className="font-semibold text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {lang === 'id' ? 'Faktor Kritis / Mitigasi:' : 'Critical Control Factor:'}
                      </span>
                      <p className="text-amber-900 dark:text-amber-200/80">
                        {step.criticalFactors[lang].join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Step Inspector Drawer / Live Parameter Panel (5 cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-4">
          <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  DETAIL TAHAPAN {selectedStep.stepNumber}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedStep.phaseTitle[lang]}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {selectedStep.title[lang]}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {selectedStep.subtitle[lang]}
              </p>
            </div>

            {/* Objective */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === 'id' ? 'Fungsi & Target Ilmiah' : 'Scientific Objective'}
              </span>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                {selectedStep.objective[lang]}
              </p>
            </div>

            {/* Exact Lab Parameters */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === 'id' ? 'Parameter Operasional Terkendali' : 'Controlled Operational Parameters'}
              </span>
              <div className="space-y-2">
                {selectedStep.parameters.map((param, pIdx) => (
                  <div key={pIdx} className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs space-y-0.5">
                    <div className="flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium">
                      <span>{param.label[lang]}</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{param.value}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {param.description[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Laboratory Protocols */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {lang === 'id' ? 'SOP Langkah Pengerjaan' : 'Standard Operating Protocol'}
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedStep.protocol[lang].map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[10px] text-slate-400 shrink-0 mt-0.5">{i + 1}.</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instruments & Tools */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === 'id' ? 'Alat Laboratorium' : 'Apparatus & Instruments'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedStep.equipment.map((eq, eqIdx) => (
                  <span key={eqIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] rounded">
                    {eq}
                  </span>
                ))}
              </div>
            </div>

            {/* Critical Caution Box */}
            <div className="p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Perhatian Keselamatan & Kualitas' : 'Quality & Safety Hazards'}</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-amber-900 dark:text-amber-200/90 text-[11px]">
                {selectedStep.criticalFactors[lang].map((cf, i) => (
                  <li key={i}>{cf}</li>
                ))}
              </ul>
            </div>

            {/* Step Output */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">
                {lang === 'id' ? 'Hasil Keluaran Tahap Ini:' : 'Phase Output:'}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedStep.output[lang]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
