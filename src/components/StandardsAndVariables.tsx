import React, { useState } from 'react';
import { Language } from '../types';
import { RESEARCH_VARIABLES, QUALITY_STANDARDS } from '../data/researchData';
import { 
  ShieldCheck, 
  Layers, 
  Beaker, 
  Flame, 
  HelpCircle, 
  FileCheck, 
  Scale, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';

interface StandardsAndVariablesProps {
  lang: Language;
}

export const StandardsAndVariables: React.FC<StandardsAndVariablesProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'independent' | 'dependent' | 'control'>('all');

  const filteredVariables = activeCategory === 'all'
    ? RESEARCH_VARIABLES
    : RESEARCH_VARIABLES.filter((v) => v.category === activeCategory);

  const getVariableCategoryBadge = (cat: 'independent' | 'dependent' | 'control') => {
    switch (cat) {
      case 'independent':
        return { label: lang === 'id' ? 'Variabel Bebas' : 'Independent Variable', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
      case 'dependent':
        return { label: lang === 'id' ? 'Variabel Terikat' : 'Dependent Variable', color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
      case 'control':
        return { label: lang === 'id' ? 'Variabel Kontrol' : 'Controlled Variable', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase">
            <span>{lang === 'id' ? 'Matriks Metodologi & Regulasi' : 'Methodology Matrix & Standards'}</span>
            <span>·</span>
            <span>SNI 01-6235-2000 & ASTM Standards</span>
            <span>·</span>
            <span>Biomass Characterization</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {lang === 'id'
              ? 'Variabel Penelitian & Baku Mutu Standar Briket Arang (SNI)'
              : 'Research Variables Matrix & Standard Quality Benchmarks (SNI / ASTM)'}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-4xl">
            {lang === 'id'
              ? 'Rincian klasifikasi variabel penelitian (bebas, terikat, dan kontrol) beserta instrumen ujinya, serta tabel baku mutu SNI 01-6235-2000 dibandingkan dengan standar ASTM internasional.'
              : 'Detailed operational taxonomy of independent, dependent, and controlled research variables alongside regulatory fuel quality thresholds from SNI 01-6235-2000 and ASTM.'}
          </p>
        </div>
      </div>

      {/* Section 1: Research Variables Matrix */}
      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {lang === 'id' ? 'Matriks Definisi Operasional Variabel Penelitian' : 'Operational Research Variables Taxonomy'}
            </h2>
          </div>

          {/* Filter Variable Categories */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeCategory === 'all' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {lang === 'id' ? 'Semua' : 'All'}
            </button>
            <button
              onClick={() => setActiveCategory('independent')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeCategory === 'independent' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {lang === 'id' ? 'Bebas' : 'Independent'}
            </button>
            <button
              onClick={() => setActiveCategory('dependent')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeCategory === 'dependent' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {lang === 'id' ? 'Terikat' : 'Dependent'}
            </button>
            <button
              onClick={() => setActiveCategory('control')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeCategory === 'control' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {lang === 'id' ? 'Kontrol' : 'Controlled'}
            </button>
          </div>
        </div>

        {/* Variables Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVariables.map((v, idx) => {
            const badge = getVariableCategoryBadge(v.category);

            return (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded">
                      {v.symbol}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {v.units}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {v.name[lang]}
                  </h3>
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {v.levelsOrRange}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {lang === 'id' ? 'Metode / Alat Ukur:' : 'Measurement Method:'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      {v.testingMethod[lang]}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {lang === 'id' ? 'Pengaruh Ilmiah & Relevansi:' : 'Scientific Mechanism & Impact:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                      {v.impact[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Quality Standards Benchmark (SNI vs ASTM) */}
      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {lang === 'id' ? 'Baku Mutu Briket Arang Kayu / Biomassa (SNI 01-6235-2000)' : 'Biomass Briquette Standard Thresholds (SNI 01-6235-2000 vs ASTM)'}
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            BSN & ASTM Standardized
          </span>
        </div>

        {/* Standards Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3">{lang === 'id' ? 'Parameter Uji' : 'Fuel Parameter'}</th>
                <th className="py-2.5 px-3">{lang === 'id' ? 'Baku Mutu SNI' : 'SNI Threshold'}</th>
                <th className="py-2.5 px-3">Standar ASTM</th>
                <th className="py-2.5 px-3">{lang === 'id' ? 'Instrumen Uji' : 'Apparatus'}</th>
                <th className="py-2.5 px-3">{lang === 'id' ? 'Rumus Perhitungan' : 'Equation'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {QUALITY_STANDARDS.map((std, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100">
                    <div>{std.parameter[lang]}</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">{std.significance[lang]}</div>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    {std.sniValue}
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {std.astmStandard}
                  </td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                    {std.testingApparatus}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40 rounded">
                    {std.formula || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: The Science Behind "Low-Smoke" (Mekanisme Rendah Asap) */}
      <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'id' ? 'Prinsip Ilmiah: Mengapa Briket Formulasi Ini Rendah Asap (Low-Smoke)?' : 'The Scientific Mechanism: Why Is This Briquette Formulation Low-Smoke?'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-1">
            <span className="font-bold text-white block">
              {lang === 'id' ? '1. Pirolisis Tuntas 400°C' : '1. Complete 400°C Pyrolysis'}
            </span>
            <p className="leading-relaxed">
              {lang === 'id'
                ? 'Asap disebabkan oleh zat volatil tar berantai panjang. Pirolisis terkontrol pada 400°C mendekomposisi zat menguap hingga di bawah 15%, mengeliminasi senyawa aromatik berjelaga.'
                : 'Pungent smoke stems from condensable long-chain volatile tars. Slow pyrolysis at 400°C devolatilizes precursor tars to <15%, preventing soot genesis.'}
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-1">
            <span className="font-bold text-white block">
              {lang === 'id' ? '2. Katalis Kalium Kulit Pisang' : '2. Potassium Catalysis'}
            </span>
            <p className="leading-relaxed">
              {lang === 'id'
                ? 'Kulit pisang kaya mineral kalium (K) yang bertindak sebagai katalis pembakaran alami, mempercepat transfer oksigen ke dalam pori briket dan menjaga bara membakar bersih tanpa nyala berasap.'
                : 'Banana peels are naturally enriched with alkali potassium (K), which acts as a catalytic agent promoting complete oxygen reaction and flameless glowing ember.'}
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-1">
            <span className="font-bold text-white block">
              {lang === 'id' ? '3. Perekat Pati Nasi Non-Sulfur' : '3. Non-Sulfur Starch Adhesive'}
            </span>
            <p className="leading-relaxed">
              {lang === 'id'
                ? 'Tidak seperti perekat kimia atau aspal/tar batubara yang mengeluarkan bau menyengat dan gas belerang SO2, pati nasi sisa tergelatinisasi hanya tersusun atas rantai C-H-O yang terbakar sempurna menjadi CO2 dan uap air.'
                : 'Unlike chemical resins or coal tar pitches that release noxious SO2, retrograded rice amylose-amylopectin consists purely of C-H-O chains that burn cleanly to CO2 and H2O.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
