import React, { useState } from 'react';
import { Language } from '../types';
import { 
  RESEARCH_TITLE, 
  ABSTRACT_DATA, 
  FLOWCHART_STEPS, 
  PAPER_STRUCTURE_ID, 
  RESEARCH_VARIABLES, 
  QUALITY_STANDARDS 
} from '../data/researchData';
import { X, Copy, Check, Download, Printer, FileText, CheckCircle2, FileDown, Loader2 } from 'lucide-react';
import { generateResearchPdf } from '../utils/pdfGenerator';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, lang }) => {
  const [exportScope, setExportScope] = useState<'all' | 'outline' | 'flowchart'>('all');
  const [exportLang, setExportLang] = useState<Language | 'both'>(lang);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [pdfDownloaded, setPdfDownloaded] = useState<boolean>(false);

  if (!isOpen) return null;

  const generateMarkdown = () => {
    let md = '';

    const renderTitle = (l: Language) => {
      return `# ${RESEARCH_TITLE[l]}\n\n`;
    };

    const renderAbstract = (l: Language) => {
      return `## ${ABSTRACT_DATA[l].title}\n\n${ABSTRACT_DATA[l].content}\n\n**Keywords / Kata Kunci:** ${ABSTRACT_DATA[l].keywords.join(', ')}\n\n---\n\n`;
    };

    const renderFlowchart = (l: Language) => {
      let fText = `## ${l === 'id' ? 'BAGAN ALIR & RANCANGAN PENELITIAN' : 'RESEARCH DESIGN & FLOWCHART'}\n\n`;
      FLOWCHART_STEPS.forEach((step) => {
        fText += `### [${step.stepNumber}] ${step.title[l]}\n`;
        fText += `*${step.phaseTitle[l]}*\n\n`;
        fText += `**${l === 'id' ? 'Tujuan' : 'Objective'}:** ${step.objective[l]}\n\n`;
        fText += `**${l === 'id' ? 'Parameter Kunci' : 'Key Parameters'}:**\n`;
        step.parameters.forEach((p) => {
          fText += `- **${p.label[l]}:** ${p.value} (${p.description[l]})\n`;
        });
        fText += `\n**${l === 'id' ? 'Langkah Prosedur' : 'Protocol SOP'}:**\n`;
        step.protocol[l].forEach((sop, sIdx) => {
          fText += `${sIdx + 1}. ${sop}\n`;
        });
        fText += `\n**${l === 'id' ? 'Alat' : 'Equipment'}:** ${step.equipment.join(', ')}\n\n`;
        fText += `**${l === 'id' ? 'Keluaran Tahap' : 'Output'}:** ${step.output[l]}\n\n`;
        fText += `---\n\n`;
      });
      return fText;
    };

    const renderOutline = (l: Language) => {
      let oText = `## ${l === 'id' ? 'URUTAN & SISTEMATIKA PENULISAN KARYA ILMIAH' : 'SCIENTIFIC PAPER STRUCTURE & OUTLINE'}\n\n`;
      PAPER_STRUCTURE_ID.forEach((sec) => {
        oText += `### ${sec.number}: ${sec.title[l]}\n`;
        oText += `*${sec.purpose[l]}*\n\n`;
        sec.subsections.forEach((sub) => {
          oText += `#### ${sub.code} ${sub.title[l]}\n`;
          oText += `**${l === 'id' ? 'Panduan Penulisan' : 'Writing Guidelines'}:**\n`;
          sub.guidelines[l].forEach((g) => {
            oText += `- ${g}\n`;
          });
          if (sub.sampleDraft) {
            oText += `\n**${l === 'id' ? 'Contoh Draf Teks' : 'Exemplar Text'}:**\n> ${sub.sampleDraft[l].replace(/\n/g, '\n> ')}\n\n`;
          }
          oText += `\n`;
        });
        oText += `---\n\n`;
      });
      return oText;
    };

    const renderStandardsAndVars = (l: Language) => {
      let sText = `## ${l === 'id' ? 'STANDAR MUTU SNI 01-6235-2000 & VARIABEL PENELITIAN' : 'SNI 01-6235-2000 STANDARDS & VARIABLES'}\n\n`;
      sText += `| Parameter | SNI 01-6235-2000 | ASTM Standard | Testing Apparatus |\n`;
      sText += `| :--- | :--- | :--- | :--- |\n`;
      QUALITY_STANDARDS.forEach((std) => {
        sText += `| ${std.parameter[l]} | ${std.sniValue} | ${std.astmStandard} | ${std.testingApparatus} |\n`;
      });
      sText += `\n\n`;
      return sText;
    };

    if (exportLang === 'both') {
      md += `<!-- DUAL LANGUAGE DOCUMENTATION (INDONESIAN & ENGLISH) -->\n\n`;
      md += `# [VERSI BAHASA INDONESIA]\n\n`;
      md += renderTitle('id');
      md += renderAbstract('id');
      if (exportScope === 'all' || exportScope === 'flowchart') md += renderFlowchart('id');
      if (exportScope === 'all' || exportScope === 'outline') md += renderOutline('id');
      md += renderStandardsAndVars('id');

      md += `\n\n# ==========================================================\n\n`;
      md += `# [ENGLISH VERSION]\n\n`;
      md += renderTitle('en');
      md += renderAbstract('en');
      if (exportScope === 'all' || exportScope === 'flowchart') md += renderFlowchart('en');
      if (exportScope === 'all' || exportScope === 'outline') md += renderOutline('en');
      md += renderStandardsAndVars('en');
    } else {
      const activeL = exportLang as Language;
      md += renderTitle(activeL);
      md += renderAbstract(activeL);
      if (exportScope === 'all' || exportScope === 'flowchart') md += renderFlowchart(activeL);
      if (exportScope === 'all' || exportScope === 'outline') md += renderOutline(activeL);
      md += renderStandardsAndVars(activeL);
    }

    return md;
  };

  const handleCopyMarkdown = () => {
    const text = generateMarkdown();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const text = generateMarkdown();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rancangan_Penelitian_Briket_Arang_${exportLang}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdf = () => {
    try {
      setIsGeneratingPdf(true);
      setTimeout(() => {
        generateResearchPdf({
          lang: exportLang,
          scope: exportScope,
        });
        setIsGeneratingPdf(false);
        setPdfDownloaded(true);
        setTimeout(() => setPdfDownloaded(false), 3000);
      }, 80);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                {lang === 'id' ? 'Ekspor Rancangan & Urutan Penulisan Ilmiah' : 'Export Research Blueprint & Outline'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {lang === 'id' ? 'Dapat diunduh langsung dalam format PDF (.pdf) atau Markdown (.md)' : 'Directly downloadable in PDF (.pdf) or Markdown (.md) format'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body & Configuration */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Quick PDF Highlight Box */}
          <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                PDF
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                  {lang === 'id' ? 'Dokumen PDF Siap Cetak (A4 Standard)' : 'Print-Ready A4 PDF Document'}
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  {lang === 'id' ? 'Lengkap dengan nomor halaman, kop header, tabel baku mutu SNI, dan tata letak akademis rapi.' : 'Includes pagination, running headers, SNI standard tables, and structured academic layout.'}
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{lang === 'id' ? 'Membuat PDF...' : 'Creating PDF...'}</span>
                </>
              ) : pdfDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'PDF Terunduh!' : 'PDF Downloaded!'}</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Unduh PDF Sekarang' : 'Download PDF Now'}</span>
                </>
              )}
            </button>
          </div>

          {/* Export Language Selection */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-slate-300 block">
              {lang === 'id' ? 'Pilih Bahasa Dokumen:' : 'Select Document Language:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setExportLang('id')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportLang === 'id'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                Bahasa Indonesia
              </button>
              <button
                onClick={() => setExportLang('en')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportLang === 'en'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                English (International)
              </button>
              <button
                onClick={() => setExportLang('both')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportLang === 'both'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                Kedua Versi (Bilingual)
              </button>
            </div>
          </div>

          {/* Export Scope */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-slate-300 block">
              {lang === 'id' ? 'Cakupan Bagian yang Diekspor ke PDF/MD:' : 'Sections to Include in Export:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setExportScope('all')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportScope === 'all'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {lang === 'id' ? 'Lengkap (Semua Bagian)' : 'Complete (All Sections)'}
              </button>
              <button
                onClick={() => setExportScope('flowchart')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportScope === 'flowchart'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {lang === 'id' ? 'Bagan Alir & SOP Saja' : 'Flowchart & SOP Only'}
              </button>
              <button
                onClick={() => setExportScope('outline')}
                className={`p-2 rounded-lg border font-medium text-xs transition-colors cursor-pointer ${
                  exportScope === 'outline'
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:border-emerald-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {lang === 'id' ? 'Urutan Bab Penulisan' : 'Paper Chapters Only'}
              </button>
            </div>
          </div>

          {/* Preview Box */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300 block">
              {lang === 'id' ? 'Ringkasan Konten Dokumen:' : 'Document Content Preview:'}
            </label>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700 max-h-40 overflow-y-auto font-mono text-[11px] text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
              {generateMarkdown().slice(0, 1000)}...
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">{lang === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Salin Teks' : 'Copy Text'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Unduh .md' : 'Download .md'}</span>
            </button>
          </div>

          {/* Primary PDF Download Action */}
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{lang === 'id' ? 'Mengunduh PDF...' : 'Downloading PDF...'}</span>
              </>
            ) : pdfDownloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>{lang === 'id' ? 'Berhasil Diunduh!' : 'Download Complete!'}</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4" />
                <span>{lang === 'id' ? 'Unduh PDF (.pdf)' : 'Download PDF (.pdf)'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
