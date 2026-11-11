import { jsPDF } from 'jspdf';
import { Language } from '../types';
import { 
  RESEARCH_TITLE, 
  ABSTRACT_DATA, 
  FLOWCHART_STEPS, 
  PAPER_STRUCTURE_ID, 
  RESEARCH_VARIABLES, 
  QUALITY_STANDARDS 
} from '../data/researchData';

interface GeneratePdfOptions {
  lang: Language | 'both';
  scope: 'all' | 'outline' | 'flowchart';
}

export const generateResearchPdf = (options: GeneratePdfOptions): void => {
  const { lang, scope } = options;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  const bottomMargin = 20;

  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - bottomMargin) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 130, 145);
    doc.text('BriquetteLab · Research Design & Scientific Writing Blueprint', margin, 12);
    doc.text('SNI 01-6235-2000 / ASTM D5865', pageWidth - margin, 12, { align: 'right' });
    doc.setDrawColor(220, 225, 235);
    doc.setLineWidth(0.3);
    doc.line(margin, 14, pageWidth - margin, 14);
  };

  const printSectionTitle = (title: string, subtitle?: string) => {
    checkPageBreak(16);
    y += 4;
    doc.setFillColor(243, 244, 246);
    doc.roundedRect(margin, y, contentWidth, 8, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(24, 30, 42);
    doc.text(title, margin + 3, y + 5.5);
    y += 11;

    if (subtitle) {
      checkPageBreak(8);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.setTextColor(100, 110, 125);
      const subLines = doc.splitTextToSize(subtitle, contentWidth);
      doc.text(subLines, margin, y);
      y += subLines.length * 4 + 2;
    }
  };

  const renderContentForLang = (l: Language) => {
    const isId = l === 'id';

    // 1. Cover / Title Banner
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(5, 150, 105); // emerald-600
    doc.text(isId ? 'RANCANGAN PENELITIAN & SISTEMATIKA PENULISAN ILMIAH' : 'RESEARCH DESIGN & SCIENTIFIC WRITING BLUEPRINT', margin, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42); // slate-900
    const titleLines = doc.splitTextToSize(RESEARCH_TITLE[l], contentWidth);
    doc.text(titleLines, margin, y);
    y += titleLines.length * 6 + 4;

    // Metadata Strip
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const metaText = isId 
      ? 'Topik: Bioenergi Biomassa Organik · Standar: SNI 01-6235-2000 & ASTM · Model: Faktorial 3x3 (RAL)'
      : 'Topic: Household Biomass Bioenergy · Standard: SNI 01-6235-2000 & ASTM · Model: 3x3 Factorial (CRD)';
    doc.text(metaText, margin, y);
    y += 6;

    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    // 2. Abstract
    printSectionTitle(isId ? 'ABSTRAK' : 'ABSTRACT');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    const absLines = doc.splitTextToSize(ABSTRACT_DATA[l].content, contentWidth);
    checkPageBreak(absLines.length * 4.2 + 10);
    doc.text(absLines, margin, y);
    y += absLines.length * 4.2 + 3;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(isId ? 'Kata Kunci: ' : 'Keywords: ', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(ABSTRACT_DATA[l].keywords.join(', '), margin + (isId ? 18 : 16), y);
    y += 8;

    // 3. Flowchart Steps (if scope is 'all' or 'flowchart')
    if (scope === 'all' || scope === 'flowchart') {
      printSectionTitle(
        isId ? 'BAGAN ALIR & PROTOKOL LABORATORIUM' : 'RESEARCH DESIGN FLOWCHART & LAB PROTOCOLS',
        isId 
          ? 'Tahapan sistematis dari pra-perlakuan limbah, pirolisis lambat 400°C, perekat nasi sisa, kempa hidrolik hingga pengujian SNI.'
          : 'Systematic phases from organic waste sourcing, 400°C slow pyrolysis, rice starch gelatinization, hydraulic compaction to ASTM/SNI assays.'
      );

      FLOWCHART_STEPS.forEach((step) => {
        checkPageBreak(30);

        // Step Box Header
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(margin, y, contentWidth, 7, 1, 1, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(5, 150, 105);
        doc.text(`[${step.stepNumber}]`, margin + 2, y + 4.8);

        doc.setTextColor(15, 23, 42);
        doc.text(step.title[l], margin + 11, y + 4.8);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(100, 116, 139);
        doc.text(step.phaseTitle[l], pageWidth - margin - 2, y + 4.8, { align: 'right' });
        y += 10;

        // Objective
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(isId ? 'Tujuan Ilmiah:' : 'Objective:', margin + 2, y);
        y += 4;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        const objLines = doc.splitTextToSize(step.objective[l], contentWidth - 4);
        checkPageBreak(objLines.length * 4);
        doc.text(objLines, margin + 2, y);
        y += objLines.length * 4 + 2;

        // Controlled Parameters
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(isId ? 'Parameter Operasional:' : 'Controlled Parameters:', margin + 2, y);
        y += 4;

        step.parameters.forEach((param) => {
          checkPageBreak(5);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(15, 23, 42);
          doc.text(`• ${param.label[l]}: `, margin + 4, y);
          const labelWidth = doc.getTextWidth(`• ${param.label[l]}: `);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(5, 150, 105);
          doc.text(param.value, margin + 4 + labelWidth, y);
          y += 4;
        });

        // Protocol SOP
        checkPageBreak(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(isId ? 'Prosedur SOP Laboratorium:' : 'Laboratory Protocol SOP:', margin + 2, y);
        y += 4;

        step.protocol[l].forEach((sop, sIdx) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
          const sopLines = doc.splitTextToSize(`${sIdx + 1}. ${sop}`, contentWidth - 6);
          checkPageBreak(sopLines.length * 3.8);
          doc.text(sopLines, margin + 4, y);
          y += sopLines.length * 3.8 + 1;
        });

        // Equipment & Output
        checkPageBreak(9);
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        doc.setTextColor(100, 116, 139);
        doc.text(`${isId ? 'Alat' : 'Apparatus'}: ${step.equipment.join(', ')}`, margin + 2, y);
        y += 4;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
        doc.text(`${isId ? 'Hasil Output' : 'Output'}: ${step.output[l]}`, margin + 2, y);
        y += 7;
      });
    }

    // 4. Scientific Paper Outline (if scope is 'all' or 'outline')
    if (scope === 'all' || scope === 'outline') {
      printSectionTitle(
        isId ? 'URUTAN & SISTEMATIKA PENULISAN KARYA ILMIAH' : 'SCIENTIFIC PAPER STRUCTURE & WRITING OUTLINE',
        isId
          ? 'Pedoman bab demi bab untuk format skripsi dan artikel jurnal ilmiah nasional/internasional.'
          : 'Chapter-by-chapter and section-by-section guidelines for thesis and peer-reviewed journal publication.'
      );

      PAPER_STRUCTURE_ID.forEach((sec) => {
        checkPageBreak(25);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`${sec.number}: ${sec.title[l]}`, margin, y);
        y += 5;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        const purposeLines = doc.splitTextToSize(sec.purpose[l], contentWidth);
        doc.text(purposeLines, margin, y);
        y += purposeLines.length * 4 + 3;

        sec.subsections.forEach((sub) => {
          checkPageBreak(18);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(5, 150, 105);
          doc.text(`${sub.code} ${sub.title[l]}`, margin + 2, y);
          y += 4.5;

          sub.guidelines[l].forEach((guide) => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(51, 65, 85);
            const guideLines = doc.splitTextToSize(`- ${guide}`, contentWidth - 4);
            checkPageBreak(guideLines.length * 3.8);
            doc.text(guideLines, margin + 4, y);
            y += guideLines.length * 3.8 + 1;
          });

          if (sub.sampleDraft) {
            checkPageBreak(20);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(71, 85, 105);
            doc.text(isId ? 'Contoh Redaksi / Draf Teks:' : 'Exemplar Text Draft:', margin + 4, y);
            y += 3.5;

            doc.setFillColor(248, 250, 252);
            doc.setDrawColor(226, 232, 240);
            const draftLines = doc.splitTextToSize(sub.sampleDraft[l], contentWidth - 10);
            const boxH = draftLines.length * 3.5 + 4;
            checkPageBreak(boxH + 4);
            doc.roundedRect(margin + 4, y, contentWidth - 8, boxH, 1, 1, 'FD');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(30, 41, 59);
            doc.text(draftLines, margin + 7, y + 3.5);
            y += boxH + 3;
          }

          y += 2;
        });

        y += 4;
      });
    }

    // 5. Standards & Variables Matrix (Summary Table)
    if (scope === 'all') {
      printSectionTitle(
        isId ? 'STANDAR MUTU SNI 01-6235-2000 & VARIABEL OPERASIONAL' : 'SNI 01-6235-2000 QUALITY STANDARDS & VARIABLES'
      );

      // Standards Table
      checkPageBreak(40);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setFillColor(241, 245, 249);
      doc.rect(margin, y, contentWidth, 6, 'F');
      doc.setTextColor(15, 23, 42);
      doc.text(isId ? 'Parameter Mutu' : 'Fuel Parameter', margin + 2, y + 4.2);
      doc.text(isId ? 'Baku Mutu SNI' : 'SNI Benchmark', margin + 50, y + 4.2);
      doc.text('ASTM Standard', margin + 95, y + 4.2);
      doc.text(isId ? 'Instrumen Uji' : 'Apparatus', margin + 130, y + 4.2);
      y += 8;

      QUALITY_STANDARDS.forEach((std) => {
        checkPageBreak(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(15, 23, 42);
        doc.text(std.parameter[l], margin + 2, y);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(5, 150, 105);
        doc.text(std.sniValue, margin + 50, y);

        doc.setTextColor(71, 85, 105);
        doc.text(std.astmStandard, margin + 95, y);
        doc.text(std.testingApparatus, margin + 130, y);
        y += 4;

        if (std.formula) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(7);
          doc.setTextColor(100, 116, 139);
          doc.text(`Rumus: ${std.formula}`, margin + 4, y);
          y += 4;
        }
      });

      y += 6;

      // Variables Summary
      checkPageBreak(30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(isId ? 'Definisi Operasional Variabel:' : 'Operational Variables Definition:', margin, y);
      y += 5;

      RESEARCH_VARIABLES.forEach((v) => {
        checkPageBreak(10);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(30, 41, 59);
        doc.text(`[${v.symbol}] ${v.name[l]} (${v.units})`, margin + 2, y);
        y += 3.8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(71, 85, 105);
        doc.text(`Variasi / Level: ${v.levelsOrRange} · Uji: ${v.testingMethod[l]}`, margin + 5, y);
        y += 4.5;
      });
    }
  };

  // Execute rendering based on language choice
  drawHeader();

  if (lang === 'both') {
    // Indonesian First
    renderContentForLang('id');
    doc.addPage();
    y = margin;
    drawHeader();
    // English Second
    renderContentForLang('en');
  } else {
    renderContentForLang(lang);
  }

  // Draw Page Numbers in Footers
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      lang === 'id' 
        ? `Halaman ${i} dari ${totalPages} · Briket Arang Rendah Asap (SNI 01-6235-2000)` 
        : `Page ${i} of ${totalPages} · Low-Smoke Biomass Charcoal Briquettes`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the generated PDF
  const filename = lang === 'both'
    ? 'Rancangan_Penelitian_Briket_Arang_Bilingual.pdf'
    : lang === 'id'
    ? 'Rancangan_Penelitian_Briket_Arang_Indonesia.pdf'
    : 'Research_Design_Charcoal_Briquettes_English.pdf';

  doc.save(filename);
};
