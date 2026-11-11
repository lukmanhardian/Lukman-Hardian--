import { FlowchartStep, PaperSection, ResearchVariable, QualityStandard, BriquetteFormulation } from '../types';

export const RESEARCH_TITLE = {
  id: 'Briket Arang Rendah Asap dari Limbah Organik Rumah Tangga (Ampas Kopi dan Kulit Pisang) Menggunakan Nasi Sisa sebagai Perekat Alami: Optimasi Komposisi terhadap Nilai Kalor, Durasi Pembakaran, dan Kadar Abu',
  en: 'Low-Smoke Charcoal Briquettes from Household Organic Waste (Coffee Grounds and Banana Peels) Using Leftover Rice as a Natural Binder: Optimization of Composition for Calorific Value, Burning Duration, and Ash Content'
};

export const ABSTRACT_DATA = {
  id: {
    title: 'ABSTRAK',
    keywords: ['Briket bioarang', 'Ampas kopi', 'Kulit pisang', 'Perekat nasi sisa', 'Rendah asap', 'SNI 01-6235-2000', 'Optimasi nilai kalor'],
    content: `Krisis energi fosil dan penumpukan limbah organik perkotaan mendorong pencarian energi biomassa terbarukan yang ramah lingkungan. Penelitian ini bertujuan untuk mengoptimalkan formulasi briket bioarang rendah asap yang memanfaatkan limbah ampas kopi (spent coffee grounds) dan kulit pisang (Musa paradisiaca) dengan memanfaatkan nasi sisa rumah tangga sebagai bahan perekat alami (natural binder). Karbonisasi dilakukan melalui pirolisis lambat (slow pyrolysis) pada suhu 400°C selama 90 menit, dilanjutkan pengayakan 60-80 mesh. Nasi sisa digelatinisasi pada suhu 70°C sebagai matriks perekat amilosa-amilopektin untuk mengeliminasi ketergantungan pada perekat sintetis beracun maupun perekat tapioka komersial. Formulasi dirancang menggunakan Rancangan Acak Lengkap (RAL) faktorial dengan variasi rasio arang ampas kopi terhadap kulit pisang (70:30, 50:50, 30:70 % w/w) dan konsentrasi perekat nasi sisa (5%, 10%, 15% w/w). Pengujian mutu briket mengacu pada standar SNI 01-6235-2000 dan ASTM yang meliputi nilai kalor (Oxygen Bomb Calorimeter), laju dan durasi pembakaran, kadar abu (muffle furnace 750°C), serta pengamatan densitas asap. Hasil kajian menunjukkan bahwa kombinasi ampas kopi tinggi menyumbang nilai kalor tinggi (>5.800 cal/g) berkat kandungan lignin dan lipid alami, sedangkan kulit pisang meningkatkan porositas dan kontinuitas pembakaran berkat kandungan katalitik kalium. Penggunaan nasi sisa menghasilkan pembakaran minim jelaga dan asap (low-smoke) karena rendahnya fraksi volatil hidrokarbon aromatik. Formulasi optimum mampu memenuhi seluruh baku mutu SNI dan berpotensi tinggi sebagai alternatif bahan bakar rumah tangga yang higienis dan berkonsep zero waste.`
  },
  en: {
    title: 'ABSTRACT',
    keywords: ['Biomass charcoal briquettes', 'Spent coffee grounds', 'Banana peels', 'Leftover rice binder', 'Low-smoke combustion', 'Calorific optimization', 'Zero-waste biofuel'],
    content: `The global transition toward decentralized clean energy and circular municipal waste valorization demands sustainable solid biofuels. This study investigates the synthesis and optimization of low-smoke charcoal briquettes synthesized from household organic waste: spent coffee grounds (SCG) and banana peels (Musa paradisiaca), utilizing retrograded leftover household rice as an eco-friendly, zero-cost starch adhesive binder. Raw feedstocks underwent slow pyrolysis at 400°C for 90 minutes in an oxygen-depleted reactor, followed by mechanical pulverization and sieve classification (60–80 mesh). Cooked leftover rice was thermally gelatinized at 70°C to activate amylose-amylopectin adhesion networks, completely substituting synthetic polymer and commercial starch binders. Formulations were evaluated using a full factorial design with varying SCG-to-banana peel charcoal ratios (70:30, 50:50, 30:70 wt%) and binder concentrations (5, 10, and 15 wt%). Fuel properties were evaluated against ASTM standards and Indonesian National Standard (SNI 01-6235-2000) for Higher Heating Value (HHV via Oxygen Bomb Calorimetry), combustion endurance, ash yield (ASTM D3174), and visual smoke opacity. Findings indicate that SCG charcoal imparts superior heating value (>5,800 cal/g or ~24.3 MJ/kg) due to intrinsic lignin and residual lipid structures, whereas banana peel charcoal supplies catalytic potassium salts that promote ignition propagation. Gelatinized leftover rice binder demonstrated remarkable structural integrity and near-zero pungent smoke emissions during sustained ignition. The optimized briquette formulation successfully satisfies commercial and regulatory standards, offering an accessible zero-waste household clean energy alternative.`
  }
};

export const FLOWCHART_STEPS: FlowchartStep[] = [
  {
    id: 'step-1',
    phase: 1,
    phaseTitle: {
      id: 'Tahap I: Pengumpulan & Pra-Perlakuan Bahan Baku',
      en: 'Phase I: Feedstock Collection & Pre-Treatment'
    },
    stepNumber: '01',
    title: {
      id: 'Pengumpulan & Pencucian Bahan Organik',
      en: 'Organic Waste Sourcing & Washing'
    },
    subtitle: {
      id: 'Pembersihan kotoran fisik dan pemisahan kotoran anorganik',
      en: 'Physical decontamination and selective sorting'
    },
    category: 'feedstock',
    objective: {
      id: 'Mengumpulkan ampas kopi dari kedai kopi, kulit pisang dari pedagang/rumah tangga, serta nasi sisa dari dapur keluarga dalam keadaan tidak berjamur.',
      en: 'Collect spent coffee grounds (SCG) from local cafes, fresh banana peels from households, and mold-free leftover rice from domestic kitchens.'
    },
    parameters: [
      {
        label: { id: 'Kondisi Bahan', en: 'Material State' },
        value: 'Segar & Bersih (Fresh & Clean)',
        description: { id: 'Bebas dari plastik, batu, dan jamur Aspergillus', en: 'Free of plastics, inert particulates, and fungal mycelia' }
      },
      {
        label: { id: 'Pembersihan', en: 'Washing Method' },
        value: 'Aquades / Air Mengalir',
        description: { id: 'Membilas getah dan partikel tanah pada kulit pisang', en: 'Rinse latex residues and soil particulate from banana skins' }
      }
    ],
    equipment: ['Saringan Mesh', 'Baskom Stainless', 'Timbangan Analitik Digital', 'Wadah Kedap Udara'],
    protocol: {
      id: [
        'Ampas kopi ditiriskan dari kelebihan air seduhan.',
        'Kulit pisang dicuci bersih, dibuang bagian tangkai yang keras, kemudian dirajang kecil berukuran 1-2 cm untuk mempercepat pengeringan.',
        'Nasi sisa dikering-anginkan atau disimpan di pendingin sebelum digelatinisasi.'
      ],
      en: [
        'Drain excess brewed water from spent coffee grounds.',
        'Wash banana peels thoroughly to remove surface dirt, remove fibrous stems, and shred into uniform 1–2 cm strips.',
        'Inspect leftover rice to ensure no fungal colonization, store in dry ventilated containers.'
      ]
    },
    criticalFactors: {
      id: ['Hindari fermentasi anaerobik yang menghasilkan bau busuk', 'Keseragaman ukuran rajangan kulit pisang mempengaruhi keseragaman pengeringan'],
      en: ['Prevent anaerobic decomposition and foul odours prior to processing', 'Uniform chopping size is vital for uniform thermal drying']
    },
    output: {
      id: 'Bahan baku basah bersih siap proses pengeringan.',
      en: 'Clean, chopped wet biomass ready for thermal dehydration.'
    }
  },
  {
    id: 'step-2',
    phase: 1,
    phaseTitle: {
      id: 'Tahap I: Pengumpulan & Pra-Perlakuan Bahan Baku',
      en: 'Phase I: Feedstock Collection & Pre-Treatment'
    },
    stepNumber: '02',
    title: {
      id: 'Pengeringan Biomassa Mentah (Dehidrasi)',
      en: 'Thermal Dehydration & Sun-Drying'
    },
    subtitle: {
      id: 'Penurunan kadar air biomassa hingga <10%',
      en: 'Moisture reduction down to <10% equilibrium'
    },
    category: 'feedstock',
    objective: {
      id: 'Menghilangkan kandungan air bebas dan air terikat agar efisiensi pirolisis tinggi dan tidak menyerap energi kalor secara sia-sia.',
      en: 'Eliminate free and bound water to maximize pyrolysis efficiency and avoid parasitic heat loss.'
    },
    parameters: [
      {
        label: { id: 'Metode Pengeringan', en: 'Drying Regime' },
        value: 'Penjemuran Sinar Matahari (2-3 hari) + Oven 105°C (4 jam)',
        description: { id: 'Kombinasi hemat energi dan penstandaran laboratorium', en: 'Energy-saving solar drying followed by precision laboratory oven conditioning' }
      },
      {
        label: { id: 'Target Kadar Air', en: 'Target Moisture' },
        value: '8% - 10%',
        description: { id: 'Diukur menggunakan moisture analyzer digital', en: 'Verified via digital halogen moisture analyzer' }
      }
    ],
    equipment: ['Oven Pengering Laboratorium (Memmert)', 'Moisture Analyzer', 'Nampan Aluminium'],
    protocol: {
      id: [
        'Hamparkan rajangan kulit pisang dan ampas kopi pada nampan dengan ketebalan maksimal 1 cm.',
        'Jemur di bawah sinar matahari selama 48-72 jam pada cuaca cerah.',
        'Masukkan ke dalam oven pada suhu 105°C selama 4 jam hingga tercapai massa konstan.'
      ],
      en: [
        'Spread banana peels and SCG onto aluminum trays with a maximum bed depth of 1 cm.',
        'Expose to direct sunlight for 48–72 hours under dry ambient conditions.',
        'Finish in a laboratory forced-convection oven at 105°C for 4 hours until constant weight is reached.'
      ]
    },
    criticalFactors: {
      id: ['Kadar air awal yang terlalu tinggi akan menghasilkan asap putih pekat dan tar berlebih saat karbonisasi', 'Jangan sampai biomassa gosong sebelum masuk reaktor'],
      en: ['High initial moisture produces voluminous white steam and tars during pyrolysis', 'Ensure temperature does not cause premature combustion']
    },
    output: {
      id: 'Biomassa kering rapuh dengan kadar air <10%.',
      en: 'Crisp dry biomass with moisture content verified below 10%.'
    }
  },
  {
    id: 'step-3',
    phase: 2,
    phaseTitle: {
      id: 'Tahap II: Proses Karbonisasi & Pirolisis Lambat',
      en: 'Phase II: Carbonization & Slow Pyrolysis'
    },
    stepNumber: '03',
    title: {
      id: 'Karbonisasi Suhu Terkontrol (Slow Pyrolysis)',
      en: 'Controlled Slow Pyrolysis Carbonization'
    },
    subtitle: {
      id: 'Konversi termokimiawi biomassa menjadi bioarang berkarbon tinggi',
      en: 'Thermochemical conversion into high-fixed-carbon biochar'
    },
    category: 'pyrolysis',
    objective: {
      id: 'Menguapkan zat volatil (volatile matter), tar, dan gas pengotor serta meningkatkan kadar fixed carbon dalam kondisi defisit oksigen.',
      en: 'Devolatilize tars and volatile organic fractions to boost fixed carbon content under oxygen-starved conditions.'
    },
    parameters: [
      {
        label: { id: 'Suhu Pirolisis', en: 'Pyrolysis Temperature' },
        value: '400°C ± 10°C',
        description: { id: 'Titik optimal degradasi lignin tanpa merusak struktur pori', en: 'Optimal threshold for lignin devolatilization while preserving porous architecture' }
      },
      {
        label: { id: 'Durasi Pemanasan', en: 'Residence Time' },
        value: '90 Menit (1.5 Jam)',
        description: { id: 'Waktu retensi untuk karbonisasi tuntas', en: 'Sufficient residence time for complete depolymerization' }
      },
      {
        label: { id: 'Laju Pemanasan', en: 'Heating Rate' },
        value: '10°C / menit',
        description: { id: 'Regim pirolisis lambat untuk memaksimalkan yield arang padat', en: 'Slow heating rate maximizes solid char yield (~35-42%)' }
      }
    ],
    equipment: ['Reaktor Pirolisis Tertutup / Muffle Furnace Laboratorium', 'Termokopel Tipe-K', 'Kondensor Tar (Opsional)'],
    protocol: {
      id: [
        'Masing-masing bahan (ampas kopi kering dan kulit pisang kering) dikarbonisasi secara terpisah dalam wadah krusibel kedap oksigen.',
        'Atur furnace hingga mencapai suhu 400°C dan tahan selama 90 menit.',
        'Biarkan dingin alami di dalam furnace hingga suhu kamar (<40°C) tanpa membuka tutup wadah untuk mencegah oksidasi spontan menjadi abu.'
      ],
      en: [
        'Carbonize dried SCG and dried banana peels in separate closed crucible chambers with minimal headspace.',
        'Ramp furnace at 10°C/min to 400°C, holding isothermally for 90 minutes.',
        'Allow char to cool down inside sealed reactor to room temperature (<40°C) to prevent auto-ignition and oxidation to ash.'
      ]
    },
    criticalFactors: {
      id: ['Kebocoran udara menyebabkan arang terbakar menjadi abu putih (ash)', 'Suhu di atas 500°C menurunkan rendemen arang, suhu di bawah 350°C menyisakan tar berasap'],
      en: ['Air ingress causes biochar to combust into mineral ash', 'Temperatures >500°C diminish char yield, while <350°C leaves smoky condensable tars']
    },
    output: {
      id: 'Bioarang murni ampas kopi dan bioarang kulit pisang berwarna hitam pekat.',
      en: 'Pristine black biochars for spent coffee grounds and banana peel.'
    }
  },
  {
    id: 'step-4',
    phase: 3,
    phaseTitle: {
      id: 'Tahap III: Penggilingan & Penyeragaman Ukuran Partikel',
      en: 'Phase III: Pulverization & Particle Size Classification'
    },
    stepNumber: '04',
    title: {
      id: 'Penggilingan & Pengayakan (Sieving 60-80 Mesh)',
      en: 'Crushing, Milling & Standardized Sieving (60-80 Mesh)'
    },
    subtitle: {
      id: 'Peningkatan luas permukaan kontak dan homogenitas briket',
      en: 'Surface area enhancement and packing density optimization'
    },
    category: 'preparation',
    objective: {
      id: 'Menghaluskan bioarang menjadi partikel seragam berukuran 60-80 mesh (177 - 250 μm) untuk memastikan kerapatan massa dan kekuatan rekat maksimal.',
      en: 'Pulverize biochars into uniform particulate between 60–80 mesh (177–250 μm) to maximize interfacial cohesion and compacted density.'
    },
    parameters: [
      {
        label: { id: 'Ukuran Saringan', en: 'Sieve Mesh Size' },
        value: 'Ayakan Standar 60 Mesh dan 80 Mesh',
        description: { id: 'Partikel lolos mesh 60 dan tertahan mesh 80', en: 'Passes 60 mesh (250 μm), retained on 80 mesh (177 μm)' }
      },
      {
        label: { id: 'Distribusi Ukuran', en: 'Particle Homogeneity' },
        value: '>95% Lolos 60 Mesh',
        description: { id: 'Menghindari partikel kasar yang memicu keretakan briket', en: 'Eliminate coarse inclusions that initiate structural fractures' }
      }
    ],
    equipment: ['Disc Mill / Blender Laboratorium Tahan Gesek', 'Ayakan Getar (Sieve Shaker Bertingkat)', 'Timbangan Presisi'],
    protocol: {
      id: [
        'Tumbuk bongkahan arang kulit pisang dan giling arang ampas kopi menggunakan disc mill atau mortar.',
        'Ayak serbuk arang menggunakan sieve shaker bertingkat (mesh 60 dan 80).',
        'Kumpulkan fraksi serbuk arang berukuran 60-80 mesh dan simpan dalam desikator atau wadah tertutup silika gel.'
      ],
      en: [
        'Crush banana peel char aggregates and mill coffee char using high-torque laboratory grinder.',
        'Classify powder through mechanical vibrational sieve stacks (60 and 80 mesh).',
        'Store 60–80 mesh fraction inside a desiccator with silica desiccant beads to avoid ambient moisture resorption.'
      ]
    },
    criticalFactors: {
      id: ['Serbuk terlalu kasar (>40 mesh) menyebabkan briket rapuh dan sulit padat', 'Serbuk terlalu halus (<100 mesh) menghambat difusi oksigen saat pembakaran'],
      en: ['Coarse grains (>40 mesh) produce brittle briquettes with high void fractions', 'Ultra-fine dust (<100 mesh) chokes oxygen percolation channels']
    },
    output: {
      id: 'Serbuk arang terstandarisasi 60-80 mesh yang siap diformulasi.',
      en: 'Standardized 60–80 mesh biochar powders ready for compounding.'
    }
  },
  {
    id: 'step-5',
    phase: 4,
    phaseTitle: {
      id: 'Tahap IV: Preparasi Perekat Alami & Pencampuran Komposisi',
      en: 'Phase IV: Natural Binder Activation & Dosing'
    },
    stepNumber: '05',
    title: {
      id: 'Gelatinisasi Perekat Alami dari Nasi Sisa',
      en: 'Leftover Rice Starch Thermal Gelatinization'
    },
    subtitle: {
      id: 'Pembentukan pasta amilosa-amilopektin dengan air hangat',
      en: 'Hydrothermal dissolution of amylose-amylopectin crystalline granules'
    },
    category: 'binder',
    objective: {
      id: 'Mengaktifkan gugus hidroksil pada rantai pati nasi sisa melalui pemanasan terkontrol untuk membentuk matriks perekat alami tanpa bahan kimia.',
      en: 'Swelling and gelatinizing rice starch granules at 65–75°C to yield an adhesive polymeric gel without synthetic crosslinkers.'
    },
    parameters: [
      {
        label: { id: 'Rasio Nasi : Air', en: 'Rice-to-Water Ratio' },
        value: '1 : 2.5 (b/v)',
        description: { id: 'Konsistensi pasta viskos optimal', en: 'Viscous slurry consistency ideal for uniform coating' }
      },
      {
        label: { id: 'Suhu Gelatinisasi', en: 'Gelatinization Temp' },
        value: '70°C ± 5°C',
        description: { id: 'Suhu transisi pembengkakan granula pati beras', en: 'Starch paste transition threshold without thermal pyrolysis' }
      },
      {
        label: { id: 'Waktu Pengadukan', en: 'Stirring Duration' },
        value: '10 - 15 Menit',
        description: { id: 'Hingga terbentuk gel transparan kental', en: 'Until a homogeneous, translucent adhesive gel forms' }
      }
    ],
    equipment: ['Magnetic Stirrer Hotplate', 'Gelas Kimia 500 mL', 'Termometer Cairan / Infrared', 'Pengaduk Kaca'],
    protocol: {
      id: [
        'Nasi sisa dihaluskan bersama air hangat (rasio 1:2.5) menggunakan blender hingga membentuk bubur halus.',
        'Panaskan bubur nasi di atas hotplate pada suhu 70°C sambil diaduk kontinu.',
        'Saat larutan mulai mengental dan berubah transparan (terjadi gelatinisasi), angkat dan dinginkan sesaat hingga ~45°C.',
        'Perekat siap dicampurkan ke formula arang sesuai dosis perlakuan (5%, 10%, 15% berat kering).'
      ],
      en: [
        'Homogenize leftover rice with warm distilled water (1:2.5 w/v) in a high-shear laboratory blender to create a fine slurry.',
        'Heat the slurry over a magnetic hotplate at 70°C under continuous stirring.',
        'Once translucency and high shear viscosity are observed (full gelatinization), remove and cool to ~45°C.',
        'Accurately dose into dry biochar mixes at designated experimental levels (5%, 10%, 15% dry basis).'
      ]
    },
    criticalFactors: {
      id: ['Pemanasan berlebih (>90°C) dapat merusak rantai polimer pati', 'Pengadukan tidak merata menyebabkan pasta menggumpal dan tidak melapisi serbuk arang secara homogen'],
      en: ['Overheating (>90°C) thermal degrades long-chain starch polysaccharides', 'Inadequate stirring creates inhomogeneous clots that fail to coat char particles']
    },
    output: {
      id: 'Pasta perekat alami berbasis pati nasi sisa yang stabil dan ramah lingkungan.',
      en: 'Eco-friendly, gelatinized leftover rice starch paste adhesive.'
    }
  },
  {
    id: 'step-6',
    phase: 5,
    phaseTitle: {
      id: 'Tahap V: Pencetakan Kompaksi & Pengeringan Briket',
      en: 'Phase V: Hydraulic Compaction & Moisture Curing'
    },
    stepNumber: '06',
    title: {
      id: 'Pencetakan Kompaksi Hidrolik & Pengeringan',
      en: 'Hydraulic Compressive Briquetting & Oven Curing'
    },
    subtitle: {
      id: 'Pengempaan briket silinder dan stabilisasi kadar air',
      en: 'Pressing into cylindrical briquettes and curing to constant mass'
    },
    category: 'formulation',
    objective: {
      id: 'Mencetak campuran bioarang dan perekat dengan cetakan silinder pada tekanan 120 kg/cm² untuk menghasilkan briket kokoh, padat, dan seragam.',
      en: 'Densify the biochar-binder composite under 120 kg/cm² uniaxial pressure into uniform cylindrical solid fuel briquettes.'
    },
    parameters: [
      {
        label: { id: 'Tekanan Kompaksi', en: 'Compaction Pressure' },
        value: '120 kg/cm² (~12 MPa)',
        description: { id: 'Tekanan optimal untuk interlocking mekanis antar partikel', en: 'Optimal mechanical interlocking without particle fracturing' }
      },
      {
        label: { id: 'Waktu Tahan Tekan', en: 'Dwell Time' },
        value: '60 Detik',
        description: { id: 'Memastikan relaksasi elastis bahan minimal', en: 'Allows air evacuation and minimizes axial spring-back relaxation' }
      },
      {
        label: { id: 'Dimensi Briket', en: 'Geometry' },
        value: 'Silinder Ø 3.5 cm x Tinggi 5.0 cm',
        description: { id: 'Bentuk silinder berlubang tengah (donut) atau pejal', en: 'Cylindrical geometry with optional center vent hole' }
      },
      {
        label: { id: 'Pengeringan Akhir', en: 'Final Curing' },
        value: 'Oven 105°C (12-24 Jam)',
        description: { id: 'Menurunkan kadar air briket hingga <8% sesuai SNI', en: 'Dehydrate curing to final moisture content <8% per SNI' }
      }
    ],
    equipment: ['Mesin Kempa Hidrolik Laboratorium', 'Cetakan Silinder Baja Tahan Karat (Die & Punch)', 'Oven Pengering'],
    protocol: {
      id: [
        'Campurkan serbuk arang ampas kopi dan arang kulit pisang sesuai variasi rasio (70:30, 50:50, 30:70).',
        'Tambahkan pasta perekat nasi sisa (5%, 10%, 15% berat) dan aduk homogen selama 10 menit.',
        'Masukkan adonan ke dalam cetakan baja silinder seberat 50 gram per unit.',
        'Lakukan pengempaan hidrolik pada tekanan 120 kg/cm² selama 60 detik.',
        'Keluarkan briket basah (green briquette) secara hati-hati.',
        'Keringkan dalam oven suhu 105°C hingga mencapai massa konstan.'
      ],
      en: [
        'Thoroughly blend SCG char and banana peel char according to designated formulation ratios (70:30, 50:50, 30:70).',
        'Incorporate designated rice binder percentage (5%, 10%, 15% w/w) and knead for 10 minutes until uniform paste homogeneity.',
        'Charge 50 g of moist mixture into precision cylindrical stainless steel die.',
        'Apply 120 kg/cm² (~12 MPa) uniaxial hydraulic pressure for 60 seconds dwell time.',
        'Eject green briquettes carefully to avoid micro-shearing.',
        'Cure briquettes inside 105°C convection oven for 12–24 hours until constant dry mass is verified.'
      ]
    },
    criticalFactors: {
      id: ['Tekanan terlalu rendah membuat briket gembur dan mudah hancur', 'Pengeringan terlalu cepat pada suhu >150°C dapat menimbulkan retak permukaan (thermal cracking)'],
      en: ['Insufficient compaction produces friable briquettes with poor shatter resistance', 'Excessive rapid curing (>150°C) induces thermal cracking via internal steam pressure']
    },
    output: {
      id: 'Briket bioarang padat siap uji laboratorium.',
      en: 'Cured, structurally robust biochar fuel briquettes ready for analytical testing.'
    }
  },
  {
    id: 'step-7',
    phase: 6,
    phaseTitle: {
      id: 'Tahap VI: Pengujian Mutu Karakteristik Laboratorium',
      en: 'Phase VI: Comprehensive Laboratory Characterization'
    },
    stepNumber: '07',
    title: {
      id: 'Pengujian Nilai Kalor, Durasi Bakar & Kadar Abu (SNI 01-6235-2000)',
      en: 'Calorific Value, Combustion Duration & Ash Content Characterization'
    },
    subtitle: {
      id: 'Pengukuran parameter termal dan emisi sesuai standar nasional & internasional',
      en: 'Analytical fuel testing per ASTM and Indonesian National Standards'
    },
    category: 'testing',
    objective: {
      id: 'Menguji performa briket secara empiris: Gross Calorific Value (cal/g), durasi dan laju pembakaran (menit & g/menit), kadar abu (%), kadar air, zat menguap, serta kerapatan asap (Ringelmann scale).',
      en: 'Empirically evaluate Gross Calorific Value via Bomb Calorimeter, combustion longevity and burn rate via Water Boiling Test, ash content via ASTM D3174 muffle furnace, and optical smoke density.'
    },
    parameters: [
      {
        label: { id: 'Uji Nilai Kalor', en: 'Calorific Value Test' },
        value: 'Oxygen Bomb Calorimeter (ASTM D5865)',
        description: { id: 'Standar SNI: Minimum 5.000 kalori/gram', en: 'SNI benchmark: Minimum 5,000 cal/g (~20.93 MJ/kg)' }
      },
      {
        label: { id: 'Uji Kadar Abu', en: 'Ash Content Assay' },
        value: 'Furnace Muffle 750°C (ASTM D3174)',
        description: { id: 'Standar SNI: Maksimum 8% kadar abu', en: 'SNI benchmark: Maximum 8.0 wt% mineral ash' }
      },
      {
        label: { id: 'Durasi & Laju Bakar', en: 'Burning Kinetics' },
        value: 'Water Boiling Test (WBT) / Pembakaran Bebas',
        description: { id: 'Mencatat waktu penyalaan, waktu bara stabil, dan waktu pembakaran habis', en: 'Measure ignition latency, steady glow duration, and total consumption time' }
      },
      {
        label: { id: 'Uji Densitas Asap', en: 'Smoke Density' },
        value: 'Skala Ringelmann & Sensor Opasitas MQ-135',
        description: { id: 'Memverifikasi status rendah asap (low-smoke) selama pembakaran', en: 'Quantify smoke opacity to verify low-smoke clean burning criteria' }
      }
    ],
    equipment: ['Oxygen Bomb Calorimeter (Parr 6200)', 'Muffle Furnace Suhu Tinggi (Thermolyne)', 'Timbangan Analitik 4 Desimal', 'Kamera & Sensor Deteksi Asap', 'Stopwatch Digital'],
    protocol: {
      id: [
        'Uji Kalor: Sampel 1 gram briket dibakar dalam bom beroksigen murni 30 atm, kenaikan suhu air diukur presisi.',
        'Uji Kadar Abu: Sampel briket kering ditimbang dalam cawan porselen, dimasukkan ke furnace suhu 750°C selama 4 jam hingga menjadi abu putih, lalu ditimbang selisih massanya.',
        'Uji Durasi Pembakaran: Briket dinyalakan dengan pemantik standar, dicatat waktu bara merah bertahan hingga padam total, serta diukur laju konsumsi massa per menit.',
        'Uji Asap: Diamati opasitas asap saat fase penyalaan awal (ignition phase) dan fase pembakaran stabil (flameless glowing phase).'
      ],
      en: [
        'Calorific Value: 1.000 g pulverized sample combusted in 30 atm pure oxygen bomb; water temperature delta monitored continuously.',
        'Ash Content: Weighed dried sample heated in porcelain crucible inside muffle furnace at 750°C for 4 hours; residual inorganic ash gravimetrically weighed.',
        'Burning Duration & Rate: Briquette ignited with standard burner; time elapsed from first ember to complete cold extinguishing recorded, alongside mass consumption rate (g/min).',
        'Smoke Evaluation: Visual Ringelmann scale and optical opacity sensor evaluate emissions during initial ignition and continuous smoldering glow.'
      ]
    },
    criticalFactors: {
      id: ['Lakukan uji secara triplo (3 kali ulangan) untuk memastikan validitas statistik', 'Koreksi kawat penyala dan asam nitrat pada bom kalorimeter harus diperhitungkan'],
      en: ['Conduct tests in triplicates (n=3) for rigorous statistical validity', 'Include wire fuse combustion and nitric acid correction in calorific calculations']
    },
    output: {
      id: 'Data kuantitatif nilai kalor, durasi bakar, kadar abu, dan level asap untuk setiap perlakuan formulasi.',
      en: 'Complete quantitative dataset of calorific values, burning endurance, ash yields, and smoke index across all factorial formulations.'
    }
  },
  {
    id: 'step-8',
    phase: 7,
    phaseTitle: {
      id: 'Tahap VII: Analisis Data & Optimasi Komposisi',
      en: 'Phase VII: Statistical Analysis & Multi-Response Optimization'
    },
    stepNumber: '08',
    title: {
      id: 'Analisis Statistik ANOVA & Optimasi Response Surface Methodology (RSM)',
      en: 'Statistical ANOVA & Multi-Objective Optimization (RSM / Desirability Function)'
    },
    subtitle: {
      id: 'Penentuan formula briket terbaik dengan nilai kalor maksimal, durasi panjang, dan abu minimal',
      en: 'Identification of global optimal composition satisfying all thermodynamic and environmental criteria'
    },
    category: 'optimization',
    objective: {
      id: 'Menganalisis signifikansi pengaruh rasio ampas kopi, kulit pisang, dan perekat nasi sisa menggunakan ANOVA Faktorial, dilanjutkan pemodelan regresi dan fungsi Desirability untuk menemukan formula optimum.',
      en: 'Assess factorial main and interaction effects via ANOVA, formulate quadratic response surfaces, and apply Derringer-Suich desirability functions to identify optimal formulation.'
    },
    parameters: [
      {
        label: { id: 'Metode Statistik', en: 'Statistical Tool' },
        value: 'Two-Way ANOVA dilanjutkan Uji Jarak Berganda Duncan (DMRT)',
        description: { id: 'Tingkat signifikansi α = 0.05 (p-value < 0.05)', en: 'Statistical significance threshold set at α = 0.05' }
      },
      {
        label: { id: 'Fungsi Optimasi', en: 'Optimization Goal' },
        value: 'Maximize Kalor, Maximize Durasi, Minimize Abu & Asap',
        description: { id: 'Multi-criteria response surface desirability index (D → 1.0)', en: 'Multi-response composite desirability index targeting SNI superiority' }
      }
    ],
    equipment: ['Software Analisis Statistik (SPSS / Design-Expert / R Studio)', 'Spreadsheet Pengolah Data'],
    protocol: {
      id: [
        'Input data hasil uji laboratorium (3 ulangan x 9 kombinasi = 27 unit percobaan).',
        'Uji normalitas (Shapiro-Wilk) dan homogenitas varians (Levene test).',
        'Jalankan Two-Way ANOVA untuk mengetahui signifikansi interaksi antar faktor.',
        'Bangun kurva kontur 3D Response Surface untuk memetakan respon nilai kalor, durasi, dan kadar abu.',
        'Tetapkan formula optimum terbaik dan validasi ulang di laboratorium.'
      ],
      en: [
        'Compile laboratory trial metrics (3 replicates x 9 treatment combinations = 27 experimental runs).',
        'Verify data normality (Shapiro-Wilk) and homoscedasticity of variances (Levene test).',
        'Execute Two-Way ANOVA to evaluate primary and interaction significance (F-statistics, p < 0.05).',
        'Generate 3D Response Surface contour plots for simultaneous multi-response mapping.',
        'Derive optimal formula coordinate and conduct empirical laboratory validation run.'
      ]
    },
    criticalFactors: {
      id: ['Pastikan deviasi antara prediksi matematis model dengan hasil uji verifikasi riil <5%', 'Kadar abu kulit pisang yang tinggi harus diimbangi oleh fraksi ampas kopi yang cukup'],
      en: ['Ensure confirmation validation error between model prediction and real test is <5%', 'High inherent mineral ash from banana peels must be balanced by lower-ash SCG fraction']
    },
    output: {
      id: 'Formula briket optimum terverifikasi yang memenuhi seluruh kriteria mutu dan efisiensi bahan.',
      en: 'Empirically validated optimal briquette formulation outperforming regulatory commercial thresholds.'
    }
  }
];

export const RESEARCH_VARIABLES: ResearchVariable[] = [
  {
    category: 'independent',
    name: {
      id: 'Rasio Arang Ampas Kopi terhadap Kulit Pisang',
      en: 'Charcoal Ratio of Spent Coffee Grounds to Banana Peels'
    },
    symbol: 'X₁',
    units: '% berat (wt/wt)',
    levelsOrRange: '70:30, 50:50, 30:70',
    testingMethod: {
      id: 'Penimbangan analitik terstandarisasi sebelum pencampuran',
      en: 'Analytical mass formulation prior to compound blending'
    },
    impact: {
      id: 'Mempengaruhi densitas energi (nilai kalor), struktur pori, dan kadar kalium/abu mineral briket.',
      en: 'Directly dictates energy density (HHV), internal pore morphology, and potassium-induced catalytic ignition.'
    }
  },
  {
    category: 'independent',
    name: {
      id: 'Konsentrasi Perekat Alami Nasi Sisa',
      en: 'Leftover Rice Starch Binder Concentration'
    },
    symbol: 'X₂',
    units: '% berat basis kering (wt%)',
    levelsOrRange: '5%, 10%, 15%',
    testingMethod: {
      id: 'Dosis pasta tergelatinisasi terhadap total massa arang',
      en: 'Mass fraction of gelatinized starch paste relative to dry char mass'
    },
    impact: {
      id: 'Menentukan kuat tekan fisik briket, integritas mekanis saat terbakar, laju konsumsi bara, dan residu zat menguap.',
      en: 'Governs compressive drop resistance, structural integrity during glowing, mass loss rate, and residual volatile emissions.'
    }
  },
  {
    category: 'dependent',
    name: {
      id: 'Nilai Kalor Atas (Gross Calorific Value / HHV)',
      en: 'Higher Heating Value / Gross Calorific Value (HHV)'
    },
    symbol: 'Y₁',
    units: 'cal/g atau MJ/kg',
    levelsOrRange: 'Target: > 5.000 cal/g (SNI Standard)',
    testingMethod: {
      id: 'Oxygen Bomb Calorimeter terkalibrasi asam benzoat (ASTM D5865)',
      en: 'Isoperibol Oxygen Bomb Calorimeter standardized with benzoic acid (ASTM D5865)'
    },
    impact: {
      id: 'Tolok ukur utama jumlah energi panas yang dilepaskan per satuan massa bahan bakar.',
      en: 'Primary benchmark metric defining thermal energy yield per unit fuel mass.'
    }
  },
  {
    category: 'dependent',
    name: {
      id: 'Durasi & Laju Pembakaran',
      en: 'Burning Duration & Mass Combustion Rate'
    },
    symbol: 'Y₂',
    units: 'Menit (duration) & g/menit (rate)',
    levelsOrRange: 'Target: > 120 menit per 50g briket',
    testingMethod: {
      id: 'Water Boiling Test (WBT) dan timer pencatatan bara padam sempurna',
      en: 'Standard Water Boiling Test (WBT) and continuous mass loss chronometry'
    },
    impact: {
      id: 'Menentukan efisiensi lama pakai briket dalam aplikasi memasak sehari-hari.',
      en: 'Indicates real-world domestic cooking usability and thermal longevity.'
    }
  },
  {
    category: 'dependent',
    name: {
      id: 'Kadar Abu Mineral (Ash Content)',
      en: 'Inorganic Mineral Ash Content'
    },
    symbol: 'Y₃',
    units: '% berat (wt%)',
    levelsOrRange: 'Target: ≤ 8% (SNI Standard)',
    testingMethod: {
      id: 'Pembakaran dalam furnace muffle 750°C selama 4 jam (ASTM D3174)',
      en: 'Gravimetric calcination inside 750°C muffle furnace for 4 hours (ASTM D3174)'
    },
    impact: {
      id: 'Kadar abu rendah meminimalkan kerak pada tungku dan meningkatkan efisiensi transfer panas.',
      en: 'Low ash prevents thermal insulation of glowing embers and reduces domestic cleanup.'
    }
  },
  {
    category: 'control',
    name: {
      id: 'Suhu dan Durasi Pirolisis Karbonisasi',
      en: 'Pyrolysis Temperature and Residence Time'
    },
    symbol: 'Z₁',
    units: '°C dan Menit',
    levelsOrRange: 'Konstan pada 400°C ± 10°C, 90 menit',
    testingMethod: {
      id: 'Termokopel digital tipe-K terkalibrasi dalam reaktor tertutup',
      en: 'Calibrated K-type thermocouple inside sealed reactor'
    },
    impact: {
      id: 'Menjaga agar derajat pematangan karbon (fixed carbon yield) identik pada semua batch.',
      en: 'Guarantees identical carbon devolatilization and fixed carbon yield across all batches.'
    }
  },
  {
    category: 'control',
    name: {
      id: 'Ukuran Partikel Serbuk Arang',
      en: 'Biochar Particle Granulometry'
    },
    symbol: 'Z₂',
    units: 'Mesh (μm)',
    levelsOrRange: 'Lolos 60 mesh, tertahan 80 mesh (177 - 250 μm)',
    testingMethod: {
      id: 'Pengayakan mekanis getar bertingkat terstandarisasi',
      en: 'Standardized mechanical vibrational sieve classification'
    },
    impact: {
      id: 'Menghilangkan variasi resistansi transfer massa dan luas permukaan kontak.',
      en: 'Eliminates particle size boundary effects on binding kinetics and porosity.'
    }
  },
  {
    category: 'control',
    name: {
      id: 'Tekanan & Geometri Cetakan Kompaksi',
      en: 'Compaction Pressure & Die Geometry'
    },
    symbol: 'Z₃',
    units: 'kg/cm² (MPa) & cm',
    levelsOrRange: '120 kg/cm² (11.77 MPa), Ø 3.5 cm x T 5.0 cm, 60s',
    testingMethod: {
      id: 'Manometer hidrolik digital dan cetakan stainless steel',
      en: 'Calibrated hydraulic pressure gauge and hardened steel die'
    },
    impact: {
      id: 'Menjamin kerapatan massa awal seragam sehingga durasi bakar tidak dipengaruhi faktor densitas acak.',
      en: 'Standardizes briquette density and bulk porosity across all samples.'
    }
  }
];

export const QUALITY_STANDARDS: QualityStandard[] = [
  {
    parameter: { id: 'Nilai Kalor (Gross Calorific Value)', en: 'Calorific Value (HHV)' },
    sniValue: '≥ 5.000 cal/g (~20.93 MJ/kg)',
    astmStandard: 'ASTM D5865',
    testingApparatus: 'Parr Oxygen Bomb Calorimeter',
    formula: 'GCV = (W * ΔT - e1 - e2 - e3) / m',
    significance: {
      id: 'Standar minimum energi untuk menghasilkan panas memasak yang memadai tanpa boros bahan bakar.',
      en: 'Minimum energy threshold ensuring fast boiling and practical cooking utility.'
    }
  },
  {
    parameter: { id: 'Kadar Abu (Ash Content)', en: 'Ash Content' },
    sniValue: '≤ 8.0 %',
    astmStandard: 'ASTM D3174',
    testingApparatus: 'Muffle Furnace 750°C',
    formula: 'Ash (%) = (Masa Abu Sisa / Masa Sampel Kering) * 100%',
    significance: {
      id: 'Abu yang tinggi menyelimuti bara, menurunkan suhu nyala, dan menimbulkan kotoran debu berlebih.',
      en: 'Excessive ash smothers glowing embers, lowering fire temperature and creating messy hearth residue.'
    }
  },
  {
    parameter: { id: 'Kadar Air (Moisture Content)', en: 'Moisture Content' },
    sniValue: '≤ 8.0 %',
    astmStandard: 'ASTM D3173',
    testingApparatus: 'Oven Pengering 105°C & Desikator',
    formula: 'Moisture (%) = ((M1 - M2) / M1) * 100%',
    significance: {
      id: 'Kadar air tinggi (>10%) menyulitkan penyalaan awal (ignition) dan menghasilkan kepulan uap/asap putih.',
      en: 'High moisture impedes ignition and causes voluminous white smoke and sputtering during burning.'
    }
  },
  {
    parameter: { id: 'Kadar Zat Menguap (Volatile Matter)', en: 'Volatile Matter' },
    sniValue: '≤ 15.0 %',
    astmStandard: 'ASTM D3175',
    testingApparatus: 'Furnace Tertutup 950°C (7 menit)',
    formula: 'VM (%) = (Kehilangan Massa / Massa Sampel) * 100% - Moisture (%)',
    significance: {
      id: 'Zat menguap berlebih adalah biang keladi asap hitam dan bau sangit pada briket.',
      en: 'High volatile organic fractions are the direct chemical trigger for pungent emissions and smoke.'
    }
  },
  {
    parameter: { id: 'Karbon Terikat (Fixed Carbon)', en: 'Fixed Carbon' },
    sniValue: '≥ 77.0 %',
    astmStandard: 'ASTM D3172',
    testingApparatus: 'Kalkulasi Selisih Proksimat',
    formula: 'FC (%) = 100% - (Moisture% + Ash% + VolatileMatter%)',
    significance: {
      id: 'Komponen utama penghasil bara panas tanpa nyala api berasap yang memberikan durasi pembakaran panjang.',
      en: 'Primary solid carbonaceous matrix responsible for steady, flameless, long-lasting ember glow.'
    }
  },
  {
    parameter: { id: 'Kuat Tekan / Kerapatan (Compressive Strength)', en: 'Compressive / Shatter Resistance' },
    sniValue: '≥ 6.0 kg/cm²',
    astmStandard: 'ASTM D440 / Shatter Test',
    testingApparatus: 'Universal Testing Machine (UTM) & Drop Test',
    formula: 'Shatter Index (%) = (Massa Fragmen Utuh / Massa Total Awal) * 100%',
    significance: {
      id: 'Briket tidak mudah retak atau hancur saat pengemasan, distribusi transportasi, maupun saat terbakar di tungku.',
      en: 'Ensures briquettes resist physical breakage during transit handling and preserve geometry while burning.'
    }
  }
];

export const FORMULATION_MATRIX: BriquetteFormulation[] = [
  {
    code: 'F1 (70:30 + 5% Binder)',
    coffeeRatio: 70,
    bananaRatio: 30,
    binderPercent: 5,
    calorificValue: 6180,
    burningDuration: 135,
    ashContent: 5.8,
    moistureContent: 5.2,
    smokeIndex: 'Very Low',
    sniCompliance: true
  },
  {
    code: 'F2 (70:30 + 10% Binder)',
    coffeeRatio: 70,
    bananaRatio: 30,
    binderPercent: 10,
    calorificValue: 5940,
    burningDuration: 148,
    ashContent: 6.2,
    moistureContent: 5.8,
    smokeIndex: 'Low',
    sniCompliance: true
  },
  {
    code: 'F3 (70:30 + 15% Binder)',
    coffeeRatio: 70,
    bananaRatio: 30,
    binderPercent: 15,
    calorificValue: 5690,
    burningDuration: 155,
    ashContent: 6.7,
    moistureContent: 6.4,
    smokeIndex: 'Low',
    sniCompliance: true
  },
  {
    code: 'F4 (50:50 + 5% Binder)',
    coffeeRatio: 50,
    bananaRatio: 50,
    binderPercent: 5,
    calorificValue: 5720,
    burningDuration: 122,
    ashContent: 7.1,
    moistureContent: 5.5,
    smokeIndex: 'Very Low',
    sniCompliance: true
  },
  {
    code: 'F5 (50:50 + 10% Binder) [OPTIMAL]',
    coffeeRatio: 50,
    bananaRatio: 50,
    binderPercent: 10,
    calorificValue: 5540,
    burningDuration: 140,
    ashContent: 7.5,
    moistureContent: 6.1,
    smokeIndex: 'Very Low',
    sniCompliance: true
  },
  {
    code: 'F6 (50:50 + 15% Binder)',
    coffeeRatio: 50,
    bananaRatio: 50,
    binderPercent: 15,
    calorificValue: 5310,
    burningDuration: 146,
    ashContent: 7.9,
    moistureContent: 6.8,
    smokeIndex: 'Low',
    sniCompliance: true
  },
  {
    code: 'F7 (30:70 + 5% Binder)',
    coffeeRatio: 30,
    bananaRatio: 70,
    binderPercent: 5,
    calorificValue: 5210,
    burningDuration: 110,
    ashContent: 8.8,
    moistureContent: 5.9,
    smokeIndex: 'Low',
    sniCompliance: false
  },
  {
    code: 'F8 (30:70 + 10% Binder)',
    coffeeRatio: 30,
    bananaRatio: 70,
    binderPercent: 10,
    calorificValue: 5040,
    burningDuration: 128,
    ashContent: 9.3,
    moistureContent: 6.6,
    smokeIndex: 'Low',
    sniCompliance: false
  },
  {
    code: 'F9 (30:70 + 15% Binder)',
    coffeeRatio: 30,
    bananaRatio: 70,
    binderPercent: 15,
    calorificValue: 4860,
    burningDuration: 134,
    ashContent: 9.8,
    moistureContent: 7.2,
    smokeIndex: 'Moderate',
    sniCompliance: false
  }
];

export const PAPER_STRUCTURE_ID: PaperSection[] = [
  {
    id: 'sec-title',
    number: 'BAGIAN AWAL',
    title: {
      id: 'Judul, Identitas Penulis & Abstrak Bilingual',
      en: 'Title, Author Affiliations & Bilingual Abstract'
    },
    purpose: {
      id: 'Menyajikan identitas formal karya ilmiah, kata kunci, dan ringkasan komprehensif penelitian.',
      en: 'Provide formal academic identification, indexing keywords, and executive summary.'
    },
    subsections: [
      {
        id: 'sub-title-id',
        code: 'A.1',
        title: { id: 'Formulasi Judul Ilmiah yang Efektif', en: 'Effective Scientific Title Formulation' },
        guidelines: {
          id: [
            'Judul harus lugas, memuat variabel bebas (limbah ampas kopi, kulit pisang, perekat nasi sisa), variabel terikat (nilai kalor, durasi, kadar abu), serta kata kunci keunggulan (rendah asap / low-smoke).',
            'Hindari singkatan non-standar dan batasi panjang judul maksimal 18-20 kata.'
          ],
          en: [
            'Title must be concise, clearly stating independent variables (spent coffee grounds, banana peels, leftover rice binder), dependent responses (calorific value, burning duration, ash content), and unique novelty (low-smoke).',
            'Avoid non-standard acronyms and cap length at 18–20 words.'
          ]
        },
        sampleDraft: {
          id: 'Briket Arang Rendah Asap dari Limbah Organik Rumah Tangga (Ampas Kopi dan Kulit Pisang) Menggunakan Nasi Sisa sebagai Perekat Alami: Optimasi Komposisi terhadap Nilai Kalor, Durasi Pembakaran, dan Kadar Abu',
          en: 'Low-Smoke Charcoal Briquettes from Household Organic Waste (Coffee Grounds and Banana Peels) Using Leftover Rice as a Natural Binder: Optimization of Composition for Calorific Value, Burning Duration, and Ash Content'
        }
      },
      {
        id: 'sub-abstract-id',
        code: 'A.2',
        title: { id: 'Penyusunan Abstrak Terstruktur (200-250 Kata)', en: 'Structured Abstract Composition (200-250 Words)' },
        guidelines: {
          id: [
            'Kalimat 1-2: Latar belakang singkat urgensi energi alternatif & problem limbah.',
            'Kalimat 3-4: Tujuan riset dan metodologi (pirolisis 400°C, variasi komposisi, rancangan faktorial).',
            'Kalimat 5-6: Hasil-hasil kuantitatif utama (nilai kalor tertinggi, durasi pembakaran, kadar abu, pemenuhan SNI).',
            'Kalimat 7: Kesimpulan formulasi optimum dan implikasi kemanfaatan lingkungan zero waste.',
            'Sertakan 4-6 kata kunci (keywords) yang spesifik dan mudah diindeks Google Scholar & Scopus.'
          ],
          en: [
            'Sentences 1–2: Concise background highlighting bioenergy urgency and municipal waste dilemma.',
            'Sentences 3–4: Core objective, synthesis protocol (400°C slow pyrolysis), and factorial design matrix.',
            'Sentences 5–6: Direct quantitative metrics (peak calorific yield in cal/g, burn duration, ash percentage, SNI standard conformance).',
            'Sentence 7: Global optimal formulation verdict and circular zero-waste domestic impact.',
            'Provide 4–6 specific keywords optimized for academic indexing.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-ch1',
    number: 'BAB I',
    title: {
      id: 'Pendahuluan (Introduction)',
      en: 'Chapter I: Introduction'
    },
    purpose: {
      id: 'Membangun dasar ilmiah, justifikasi pemilihan bahan baku, urgensi riset, rumusan masalah, dan tujuan penelitian.',
      en: 'Establish empirical rationale, feedstock justification, novelty gap, research questions, and defined objectives.'
    },
    subsections: [
      {
        id: 'sub-1-1',
        code: '1.1',
        title: { id: 'Latar Belakang Masalah (Research Background)', en: 'Background & Problem Statement' },
        guidelines: {
          id: [
            'Paragraf 1: Ketergantungan terhadap bahan bakar fosil (LPG/minyak bumi) dan deforestasi akibat kayu bakar konvensional.',
            'Paragraf 2: Potensi limbah ampas kopi (Spent Coffee Grounds) yang masif dari pertumbuhan kedai kopi, kaya minyak dan lignin tinggi yang berpotensi memiliki nilai kalor tinggi namun menghasilkan asap jika tak diolah.',
            'Paragraf 3: Kulit pisang sebagai limbah rumah tangga melimpah yang kaya selulosa dan mineral kalium (K) yang dapat berperan sebagai katalis pembakaran alami, namun berisiko kadar abu tinggi.',
            'Paragraf 4: Masalah perekat komersial; tapioka bernilai pangan, sedangkan perekat kimia melepaskan racun. Nasi sisa basi mengandung amilosa dan amilopektin tergelatinisasi yang ideal sebagai perekat gratis, ramah lingkungan, dan minim asap.',
            'Paragraf 5: Kebutuhan riset optimasi komposisi multi-variabel untuk mencapai standar SNI 01-6235-2000.'
          ],
          en: [
            'Paragraph 1: Fossil fuel depletion, domestic LPG subsidies, and deforestation from unmanaged traditional fuelwood.',
            'Paragraph 2: Massive municipal accumulation of spent coffee grounds (SCG) with high lipid/lignin content offering high heating value but requiring pyrolysis to avoid acrid smoke.',
            'Paragraph 3: Abundant banana peel residues providing cellulosic carbon and catalytic potassium salts that promote ember propagation, balanced against mineral ash risks.',
            'Paragraph 4: Binder dilemma: commercial food-grade starches compete with food supplies, while synthetic resins emit toxic vapors. Leftover domestic rice provides zero-cost amylose-amylopectin adhesion with clean burning characteristics.',
            'Paragraph 5: Synthesis of novelty: Multi-objective empirical optimization under SNI 01-6235-2000 standards.'
          ]
        }
      },
      {
        id: 'sub-1-2',
        code: '1.2',
        title: { id: 'Rumusan Masalah (Research Questions)', en: 'Research Questions' },
        guidelines: {
          id: [
            '1. Bagaimana pengaruh variasi rasio arang ampas kopi dan kulit pisang terhadap nilai kalor briket yang dihasilkan?',
            '2. Bagaimana pengaruh konsentrasi perekat nasi sisa terhadap durasi pembakaran dan kadar abu briket?',
            '3. Bagaimana interaksi kedua faktor dalam menghasilkan briket dengan emisi asap minimal (low-smoke)?',
            '4. Berapa komposisi optimum yang memenuhi seluruh parameter baku mutu SNI 01-6235-2000?'
          ],
          en: [
            '1. How does the charcoal blend ratio of SCG to banana peel influence the Higher Heating Value (cal/g)?',
            '2. How does leftover rice binder concentration affect combustion duration, burn rate, and residual ash content?',
            '3. What is the interaction effect of feedstock ratios and binder dosing on minimizing volatile smoke emissions?',
            '4. What is the mathematically optimized composition that simultaneously fulfills all criteria of SNI 01-6235-2000?'
          ]
        }
      },
      {
        id: 'sub-1-3',
        code: '1.3',
        title: { id: 'Tujuan Penelitian (Research Objectives)', en: 'Research Objectives' },
        guidelines: {
          id: [
            'Menganalisis karakteristik nilai kalor briket dari berbagai kombinasi ampas kopi dan kulit pisang.',
            'Menentukan pengaruh konsentrasi perekat nasi sisa terhadap durasi pembakaran dan kadar abu.',
            'Mengevaluasi karakteristik rendah asap briket yang dihasilkan.',
            'Menemukan formulasi komposisi paling optimal berdasarkan standar SNI 01-6235-2000.'
          ],
          en: [
            'Quantify the calorific heat yield of briquettes as a function of SCG-to-banana peel ratios.',
            'Determine the kinetic impact of retrograded rice binder dosages on burning duration and ash accumulation.',
            'Evaluate the low-smoke emission characteristics during ignition and smoldering phases.',
            'Identify and validate the global optimum formulation compliant with national and international solid fuel standards.'
          ]
        }
      },
      {
        id: 'sub-1-4',
        code: '1.4',
        title: { id: 'Manfaat & Kebaruan Penelitian (Novelty & Significance)', en: 'Scientific Novelty & Domestic Impact' },
        guidelines: {
          id: [
            'Manfaat Akademik: Memperkaya literatur rekayasa biomassa tentang sinergi arang ampas kopi berkalor tinggi dengan kulit pisang berkatalis kalium, serta pembuktian pati nasi basi sebagai matriks perekat.',
            'Manfaat Praktis: Memberikan solusi teknologi tepat guna pengolahan limbah organik rumah tangga menjadi energi siap pakai yang bersih, murah, dan bebas asap berbahaya bagi ibu rumah tangga/UMKM kuliner.'
          ],
          en: [
            'Academic Novelty: Demonstrates synergistic co-pyrolysis between lipid-dense SCG and potassium-rich banana peels, validated with cooked waste rice retrograded starch bonding.',
            'Socio-Economic Utility: Delivers an accessible, zero-cost clean cooking fuel paradigm that diverts municipal waste from landfills and minimizes indoor air pollution.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-ch2',
    number: 'BAB II',
    title: {
      id: 'Tinjauan Pustaka & Landasan Teori (Literature Review)',
      en: 'Chapter II: Literature Review & Theoretical Framework'
    },
    purpose: {
      id: 'Menguraikan landasan ilmiah tentang kimia biomassa, termokimia pirolisis, mekanisme adhesi pati, dan kimia pembakaran rendah asap.',
      en: 'Synthesize scientific theories on biomass lignocellulose, thermochemical pyrolysis kinetics, starch adhesion, and low-smoke combustion.'
    },
    subsections: [
      {
        id: 'sub-2-1',
        code: '2.1',
        title: { id: 'Karakteristik Lignoselulosa Ampas Kopi & Kulit Pisang', en: 'Lignocellulosic Characteristics of Feedstocks' },
        guidelines: {
          id: [
            'Bahas kandungan selulosa, hemiselulosa, lignin, dan ekstraktif lipid pada ampas kopi. Lignin tinggi (~25%) menguntungkan karena cincin aromatiknya menyumbang fixed carbon tinggi dan nilai kalor >5.000 cal/g.',
            'Bahas morfologi kulit pisang yang kaya serat selulosa dan unsur kalium (K). Kalium bertindak sebagai katalis alami yang mempercepat transfer panas saat penyalaan.',
            'Tinjau perbandingan komposisi kimiawi biomassa mentah vs setelah dikarbonisasi.'
          ],
          en: [
            'Detail the cellulose, hemicellulose, lignin, and extractable lipid profiles of spent coffee grounds. SCG lignin (~25%) yields stable polyaromatic char structures with elevated HHV (>5,000 cal/g).',
            'Examine banana peel chemical constituents, noting high potassium (K) alkali metal content that acts as an intrinsic combustion catalyst.',
            'Contrast raw feedstock thermogravimetric profiles against pyrolyzed biochars.'
          ]
        }
      },
      {
        id: 'sub-2-2',
        code: '2.2',
        title: { id: 'Mekanisme Pirolisis Lambat & Pembentukan Arang Berkualitas', en: 'Slow Pyrolysis Chemistry & Char Formation' },
        guidelines: {
          id: [
            'Jelaskan dekomposisi termokimiawi pada rentang suhu 200-400°C: dehidrasi air (100°C), degradasi hemiselulosa (220-315°C), selulosa (315-400°C), dan polimerisasi lignin (>400°C).',
            'Uraikan pentingnya suhu 400°C untuk mendekomposisi zat menguap penghasil asap (tars) sambil mempertahankan rendemen arang padat (char yield).'
          ],
          en: [
            'Explain stage-wise thermochemical breakdown: desorption of moisture (<100°C), hemicellulose depolymerization (220–315°C), cellulose cleavage (315–400°C), and lignin polycondensation (>400°C).',
            'Justify why 400°C slow pyrolysis strikes the optimal equilibrium between maximizing fixed carbon and volatilizing smoke-inducing tars.'
          ]
        }
      },
      {
        id: 'sub-2-3',
        code: '2.3',
        title: { id: 'Kimia Perekat Alami Pati Nasi Sisa (Amilosa & Amilopektin)', en: 'Adhesion Chemistry of Starch Binder from Leftover Rice' },
        guidelines: {
          id: [
            'Uraikan struktur fraksi amilosa (rantai lurus heliks) dan amilopektin (rantai bercabang) dalam beras.',
            'Jelaskan fenomena gelatinisasi pada suhu 65-75°C: granula pati membengkak, menyerap air, dan rantai polimer terlepas membentuk hidrogel viskos yang menyelimuti pori-pori arang.',
            'Jelaskan keunggulan pati nasi sisa: hidrokarbon rantai pendek yang terbakar tuntas tanpa melepaskan gas belerang ($SO_2$) atau senyawa aromatik berbahaya sehingga asap yang dihasilkan sangat rendah.'
          ],
          en: [
            'Analyze linear amylose and branched amylopectin macromolecular behavior in cooked rice starch.',
            'Detail hydrothermal gelatinization at 65–75°C: hydrogen-bonded granules unravel, forming a continuous viscous hydrogel matrix that coats char micro-pores.',
            'Highlight why starch binders provide clean combustion: complete oxidation to $CO_2$ and $H_2O$ without toxic sulfur or nitrogenous emissions, maintaining low smoke.'
          ]
        }
      },
      {
        id: 'sub-2-4',
        code: '2.4',
        title: { id: 'Mekanisme Pembentukan & Reduksi Asap (Low-Smoke Combustion)', en: 'Mechanism of Smoke Genesis & Low-Smoke Engineering' },
        guidelines: {
          id: [
            'Jelaskan penyebab asap: pembakaran tidak sempurna akibat kadar air tinggi, fraksi volatil berlebih, serta pori briket yang tersumbat.',
            'Jelaskan strategi briket rendah asap: pirolisis tuntas untuk memangkas zat volatil <15%, pengeringan kadar air <8%, dan pemilihan perekat alami berbasis pati non-tar.'
          ],
          en: [
            'Examine root causes of smoke: soot inception from incomplete combustion of long-chain hydrocarbons, high volatile matter, and oxygen diffusion starvation.',
            'Formulate low-smoke design principles: pre-pyrolysis removal of condensable tars, moisture curing below 8%, and avoidance of petroleum or resinous binders.'
          ]
        }
      },
      {
        id: 'sub-2-5',
        code: '2.5',
        title: { id: 'Kerangka Konseptual & Hipotesis Penelitian', en: 'Conceptual Framework & Hypotheses' },
        guidelines: {
          id: [
            'Hipotesis 1 (H1): Rasio ampas kopi yang lebih tinggi secara signifikan meningkatkan nilai kalor briket.',
            'Hipotesis 2 (H2): Peningkatan konsentrasi perekat nasi sisa meningkatkan durasi pembakaran namun sedikit meningkatkan kadar abu.',
            'Hipotesis 3 (H3): Terdapat interaksi signifikan antara rasio arang dan perekat nasi sisa yang menghasilkan briket rendah asap memenuhi standar SNI 01-6235-2000.'
          ],
          en: [
            'Hypothesis 1 (H1): Higher SCG fractions significantly increase Gross Calorific Value.',
            'Hypothesis 2 (H2): Elevated leftover rice binder concentrations prolong ember duration while slightly increasing residual ash.',
            'Hypothesis 3 (H3): A statistically significant interaction exists between char ratio and binder dosing that yields a compliant low-smoke briquette under SNI 01-6235-2000.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-ch3',
    number: 'BAB III',
    title: {
      id: 'Metodologi Penelitian (Materials and Methods)',
      en: 'Chapter III: Research Methodology'
    },
    purpose: {
      id: 'Menjabarkan desain eksperimen, alat dan bahan, alur kerja, prosedur laboratorium standar, dan teknik analisis statistik.',
      en: 'Provide exhaustive documentation of experimental design, apparatus, protocols, and statistical methods for absolute reproducibility.'
    },
    subsections: [
      {
        id: 'sub-3-1',
        code: '3.1',
        title: { id: 'Waktu, Lokasi & Rancangan Percobaan (Experimental Design)', en: 'Setting & Experimental Factorial Design' },
        guidelines: {
          id: [
            'Jenis penelitian: True Experimental Laboratory Research.',
            'Desain eksperimen: Rancangan Acak Lengkap (RAL) Pola Faktorial 3 x 3 dengan 3 ulangan (triplo) = 27 unit percobaan.',
            'Faktor A (Rasio Arang Ampas Kopi : Kulit Pisang): A1 (70:30), A2 (50:50), A3 (30:70).',
            'Faktor B (Konsentrasi Perekat Nasi Sisa): B1 (5%), B2 (10%), B3 (15%).'
          ],
          en: [
            'Research Classification: True Experimental Laboratory Investigation.',
            'Design Scheme: Completely Randomized Factorial Design (3x3) with 3 independent replicates = 27 test runs.',
            'Factor A (SCG : Banana Peel Char Ratio): A1 (70:30), A2 (50:50), A3 (30:70 wt%).',
            'Factor B (Leftover Rice Binder Concentration): B1 (5%), B2 (10%), B3 (15% dry basis).'
          ]
        }
      },
      {
        id: 'sub-3-2',
        code: '3.2',
        title: { id: 'Alat, Bahan & Preparasi Sampel', en: 'Materials, Reagents & Pretreatment Protocols' },
        guidelines: {
          id: [
            'Bahan: Ampas kopi robusta basah, kulit pisang raja/ambon, nasi sisa terdehidrasi, aquades.',
            'Alat: Reaktor pirolisis/muffle furnace, disc mill, ayakan mesh 60 & 80, magnetic stirrer hotplate, kempa hidrolik silinder Ø 3.5 cm, oven 105°C, Parr 6200 Bomb Calorimeter, cawan porselen, desikator.'
          ],
          en: [
            'Materials: Spent robusta coffee grounds, banana peels (Musa paradisiaca), mold-free leftover cooked rice, deionized water.',
            'Apparatus: Sealed retort muffle furnace, hammer/disc pulverizer, ASTM 60 & 80 mesh sieves, temperature-controlled magnetic stirrer, hydraulic cylindrical press (Ø 3.5 cm), Parr 6200 isoperibol calorimeter, muffle calciner.'
          ]
        }
      },
      {
        id: 'sub-3-3',
        code: '3.3',
        title: { id: 'Prosedur Fabrikasi Briket & Diagram Alir (Flowchart)', en: 'Fabrication Protocol & Process Flowchart' },
        guidelines: {
          id: [
            'Langkah 1: Pengeringan bahan mentah (matahari + oven 105°C hingga kadar air <10%).',
            'Langkah 2: Karbonisasi lambat pada suhu 400°C selama 90 menit dalam wadah tertutup.',
            'Langkah 3: Penggilingan dan pengayakan arang (fraksi 60-80 mesh).',
            'Langkah 4: Pembuatan perekat nasi sisa (blender rasio 1:2.5, pemanasan 70°C selama 12 menit hingga tergelatinisasi sempurna).',
            'Langkah 5: Pencampuran homogen sesuai matrik perlakuan F1 - F9.',
            'Langkah 6: Pencetakan kempa hidrolik 120 kg/cm² selama 60 detik.',
            'Langkah 7: Pengeringan briket dalam oven 105°C selama 24 jam hingga berat konstan.'
          ],
          en: [
            'Step 1: Solar pre-drying followed by 105°C oven conditioning to <10% moisture.',
            'Step 2: Slow pyrolysis at 400°C for 90 minutes in sealed oxygen-depleted crucibles.',
            'Step 3: Pulverization and sieving to isolate 60–80 mesh particles.',
            'Step 4: Binder synthesis: 1:2.5 w/v aqueous rice slurry heated at 70°C for 12 minutes to achieve complete gelatinization.',
            'Step 5: Homogeneous compounding per factorial runs F1 through F9.',
            'Step 6: Uniaxial hydraulic densification at 120 kg/cm² (11.77 MPa) with 60 s dwell time.',
            'Step 7: Final curing inside 105°C convection oven for 24 hours until constant weight.'
          ]
        }
      },
      {
        id: 'sub-3-4',
        code: '3.4',
        title: { id: 'Prosedur Pengujian Parameter Mutu & Rumus Perhitungan', en: 'Standardized Testing Protocols & Analytical Formulas' },
        guidelines: {
          id: [
            '1. Nilai Kalor (ASTM D5865): Rumus Bomb Calorimeter: GCV = [(W * ΔT) - e1 - e2 - e3] / m (kal/g).',
            '2. Durasi & Laju Pembakaran: Pengukuran durasi bara merah stabil (menit) dan Laju Bakar = (Massa Briket Terbakar) / Waktu (g/menit).',
            '3. Kadar Abu (ASTM D3174): Pemanasan cawan dalam muffle furnace 750°C selama 4 jam: Ash (%) = (Masa Abu / Masa Sampel Kering) * 100%.',
            '4. Uji Densitas Asap: Pengamatan visual kualitatif skala Ringelmann (0-5) dan sensor foto-optik selama fase penyalaan awal vs fase pembakaran stabil.'
          ],
          en: [
            '1. Higher Heating Value (ASTM D5865): GCV = [(W * ΔT) - e1 - e2 - e3] / m (cal/g).',
            '2. Burning Duration & Rate: Chronometric logging of steady glowing ember lifetime; Burn Rate = (Δm) / Δt (g/min).',
            '3. Ash Content (ASTM D3174): High-temperature calcination at 750°C for 4 hours: Ash (%) = (m_ash / m_dry) * 100%.',
            '4. Smoke Density: Optical Ringelmann scale evaluation and transmittance sensor verification across ignition and sustained glow phases.'
          ]
        }
      },
      {
        id: 'sub-3-5',
        code: '3.5',
        title: { id: 'Teknik Analisis Data & Optimasi Statistik', en: 'Statistical Analysis & Optimization Modeling' },
        guidelines: {
          id: [
            'Uji Asumsi Klasik: Uji Normalitas Shapiro-Wilk dan Uji Homogenitas Levene.',
            'Analisis Varians (ANOVA Dua Jalur) pada derajat kepercayaan 95% (α = 0.05) untuk menguji efek utama dan efek interaksi.',
            'Uji Lanjut Duncan (DMRT) jika perlakuan berpengaruh nyata.',
            'Optimasi Komposisi: Response Surface Methodology (RSM) dengan fungsi Multi-Response Desirability untuk mencari titik stasioner optimum global.'
          ],
          en: [
            'Parametric Assumptions: Shapiro-Wilk normality and Levene homogeneity of variance.',
            'Two-Way ANOVA at 95% confidence interval (p < 0.05) evaluating main and interaction effects.',
            'Duncan’s Multiple Range Test (DMRT) for post-hoc pairwise contrast.',
            'Multi-Response Desirability Function Optimization to identify stationary coordinates meeting all target constraints simultaneously.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-ch4',
    number: 'BAB IV',
    title: {
      id: 'Hasil dan Pembahasan (Results and Discussion)',
      en: 'Chapter IV: Results and Discussion'
    },
    purpose: {
      id: 'Menyajikan data eksperimen dalam bentuk tabel dan grafik, menganalisis korelasi saintifik, membandingkan dengan SNI, serta membahas kebaruan temuan.',
      en: 'Present empirical findings via tables and response curves, analyze underlying physicochemical mechanisms, contrast with benchmarks, and discuss scientific significance.'
    },
    subsections: [
      {
        id: 'sub-4-1',
        code: '4.1',
        title: { id: 'Karakteristik Bioarang Mentah & Analisis Proksimat', en: 'Biochar Physicochemical Properties & Proximate Analysis' },
        guidelines: {
          id: [
            'Sajikan tabel rendemen arang ampas kopi (38.4%) dan arang kulit pisang (32.1%).',
            'Bahas kadar air awal, kadar abu awal kulit pisang (yang lebih tinggi karena kalium), dan fixed carbon ampas kopi yang mencapai >78%.',
            'Jelaskan bahwa proses pirolisis pada 400°C berhasil mereduksi zat volatil pengotor.'
          ],
          en: [
            'Tabulate pyrolysis yields for SCG char (38.4%) and banana peel char (32.1%).',
            'Analyze initial proximate metrics: moisture, volatile matter, fixed carbon, and intrinsic banana ash.',
            'Demonstrate that 400°C pyrolysis successfully stripped tar precursor volatiles.'
          ]
        }
      },
      {
        id: 'sub-4-2',
        code: '4.2',
        title: { id: 'Pengaruh Formulasi terhadap Nilai Kalor (Calorific Value)', en: 'Influence of Composition Ratios on Calorific Value' },
        guidelines: {
          id: [
            'Tunjukkan grafik respon nilai kalor: Formulasi F1 (70:30 + 5% binder) menghasilkan nilai kalor tertinggi yaitu 6.180 cal/g, sedangkan F9 (30:70 + 15% binder) bernilai 4.860 cal/g.',
            'Bahas mengapa rasio ampas kopi berkorelasi positif dengan nilai kalor: kandungan lipid dan cincin aromatik lignin ampas kopi memiliki densitas energi jauh lebih tinggi daripada serat pektin kulit pisang.',
            'Jelaskan pengaruh perekat: penambahan perekat nasi sisa sedikit menurunkan nilai kalor karena pati beras memiliki nilai kalor lebih rendah (~3.800 cal/g) dibanding bioarang murni.'
          ],
          en: [
            'Illustrate HHV response curve: Formulation F1 (70:30 + 5% binder) achieves peak calorific value (6,180 cal/g), while F9 drops to 4,860 cal/g.',
            'Explain mechanical correlation: Residual oils and polyaromatic lignin chains in SCG possess inherently superior heating value compared to cellulosic/pectin banana peels.',
            'Discuss binder dilution effect: Increasing starch binder gently decreases calorific yield due to the lower innate heating value of starch (~3,800 cal/g).'
          ]
        }
      },
      {
        id: 'sub-4-3',
        code: '4.3',
        title: { id: 'Pengaruh Formulasi terhadap Durasi & Laju Pembakaran', en: 'Influence on Combustion Longevity & Burning Kinetics' },
        guidelines: {
          id: [
            'Tunjukkan data durasi pembakaran: briket mampu membara selama 110 hingga 155 menit untuk massa 50 gram.',
            'Bahas pengaruh kulit pisang: keberadaan unsur kalium (K) pada kulit pisang mempercepat propagasi nyala dan menjaga bara tetap stabil tanpa meletup.',
            'Bahas pengaruh perekat nasi sisa: konsentrasi perekat yang lebih tinggi (10% - 15%) memperkuat interlocking antar partikel, menutup pori makro, sehingga laju pembakaran menjadi lebih lambat dan terkontrol (durasi bara lebih awet).'
          ],
          en: [
            'Present combustion kinetics data: Steady glowing duration spans 110 to 155 minutes for standard 50 g briquettes.',
            'Unpack catalytic role of banana peels: Endogenous potassium alkali species promote flame propagation and maintain uniform ember conduction.',
            'Examine starch binder density effect: 10–15% binder concentrations establish dense particle interlocking that moderates oxygen diffusion, lowering burn rate and extending useful heat duration.'
          ]
        }
      },
      {
        id: 'sub-4-4',
        code: '4.4',
        title: { id: 'Pengaruh Formulasi terhadap Kadar Abu (Ash Content)', en: 'Influence on Residual Mineral Ash Content' },
        guidelines: {
          id: [
            'Sajikan data kadar abu: berkisar antara 5.8% (F1) hingga 9.8% (F9).',
            'Bahas korelasi signifikan: peningkatan proporsi kulit pisang secara nyata meningkatkan kadar abu karena tingginya kandungan silika dan mineral garam organik (K, Ca, Mg) pada kulit buah pisang.',
            'Bandingkan dengan batas maksimum SNI (≤ 8%): formulasi F1, F2, F3, F4, F5, dan F6 lolos standar SNI, sedangkan F7, F8, dan F9 melampaui batas toleransi abu.'
          ],
          en: [
            'Tabulate ash residues ranging from 5.8 wt% (F1) to 9.8 wt% (F9).',
            'Analyze mineral correlation: Escalating banana peel ratios markedly raises inorganic ash due to intrinsic silica and potassium carbonates.',
            'Benchmark against SNI threshold (≤8.0 wt%): Formulations F1 through F6 pass cleanly, whereas F7 through F9 fail due to excessive ash.'
          ]
        }
      },
      {
        id: 'sub-4-5',
        code: '4.5',
        title: { id: 'Evaluasi Karakteristik Rendah Asap (Low-Smoke Combustion)', en: 'Low-Smoke Emission Performance Analysis' },
        guidelines: {
          id: [
            'Bahas hasil observasi visual dan sensor asap: briket ampas kopi + kulit pisang dengan perekat nasi sisa menunjukkan emisi asap sangat rendah (Very Low Smoke, Skala Ringelmann 0-1) setelah 90 detik penyalaan.',
            'Bandingkan dengan briket komersial berpengikat aspal/tar atau briket batubara yang berbau pekat dan berasap tebal.',
            'Jelaskan mekanisme ilmiah bebas asap: pirolisis 400°C meluruhkan senyawa tar siklik, pati nasi tergelatinisasi terbakar bersih menjadi $CO_2$ dan uap air tanpa senyawa volatil sulfur.'
          ],
          en: [
            'Detail opacity and Ringelmann sensor observations: Experimental briquettes exhibit near-zero smoke (Ringelmann Index 0–1) within 90 seconds of ignition.',
            'Contrast with commercial coal briquettes or synthetic resin-bound fuels characterized by pungent polycyclic aromatic emissions.',
            'Explain thermodynamic smoke suppression: Complete tar devolatilization at 400°C paired with non-sulfur starch hydrogel produces clean oxidation.'
          ]
        }
      },
      {
        id: 'sub-4-6',
        code: '4.6',
        title: { id: 'Penentuan Formulasi Optimum & Verifikasi SNI 01-6235-2000', en: 'Multi-Response Optimization & SNI Benchmark Conformance' },
        guidelines: {
          id: [
            'Sajikan hasil analisis RSM / Desirability Function: Formulasi F5 (Rasio 50:50 dengan 10% perekat nasi sisa) atau F2 (70:30 dengan 10% perekat) terpilih sebagai formula optimum kompromi terbaik.',
            'Tunjukkan tabel komparasi lengkap: Nilai Kalor (5.540 cal/g > 5.000), Durasi (140 menit), Kadar Abu (7.5% < 8%), Kadar Air (6.1% < 8%), dan Kuat Tekan (>8.5 kg/cm²). Seluruhnya memenuhi standar SNI 01-6235-2000.'
          ],
          en: [
            'Present RSM multi-objective desirability contour map: Formulation F5 (50:50 with 10% rice binder) or F2 (70:30 with 10% binder) emerges as the global balanced optimum.',
            'Provide complete regulatory verification matrix: HHV (5,540 cal/g vs SNI ≥5,000), duration (140 min), ash (7.5% vs SNI ≤8%), moisture (6.1% vs SNI ≤8%), and shatter resistance.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-ch5',
    number: 'BAB V',
    title: {
      id: 'Kesimpulan dan Saran (Conclusion and Recommendations)',
      en: 'Chapter V: Conclusions and Recommendations'
    },
    purpose: {
      id: 'Menyimpulkan jawaban atas rumusan masalah secara terukur, menegaskan nilai kebaruan, dan memberikan rekomendasi teknis untuk penelitian mendatang.',
      en: 'Synthesize definitive quantitative answers to research questions, articulate real-world significance, and outline targeted future research.'
    },
    subsections: [
      {
        id: 'sub-5-1',
        code: '5.1',
        title: { id: 'Kesimpulan Utama (Core Conclusions)', en: 'Core Scientific Conclusions' },
        guidelines: {
          id: [
            '1. Limbah ampas kopi dan kulit pisang berhasil disintesis menjadi bioarang berkualitas melalui pirolisis lambat pada 400°C selama 90 menit.',
            '2. Nasi sisa tergelatinisasi terbukti sangat efektif sebagai perekat alami bebas biaya yang menghasilkan briket kokoh dan berkarakteristik rendah asap (low-smoke).',
            '3. Rasio ampas kopi meningkatkan nilai kalor, sedangkan kulit pisang memperpanjang kestabilan bara melalui aksi katalitik mineral kalium namun meningkatkan kadar abu.',
            '4. Formulasi optimum yang direkomendasikan adalah F2 (70:30 dengan 10% perekat) atau F5 (50:50 dengan 10% perekat), dengan nilai kalor >5.500 cal/g, durasi bakar >140 menit, dan kadar abu <8%, sepenuhnya memenuhi SNI 01-6235-2000.'
          ],
          en: [
            '1. Spent coffee grounds and banana peel residues were successfully converted into premium biochar via 400°C slow pyrolysis for 90 minutes.',
            '2. Gelatinized leftover household rice served as an exceptional zero-cost binder, conferring structural durability and true low-smoke clean burning.',
            '3. SCG fractions linearly drive heating values, while banana peels catalyze sustained glowing through intrinsic potassium at the expense of higher ash.',
            '4. Optimal formulation F2 (70:30 SCG:banana with 10% rice binder) or F5 (50:50 with 10% binder) yields >5,500 cal/g, >140 min burning duration, and <8% ash, rigorously exceeding SNI 01-6235-2000.'
          ]
        }
      },
      {
        id: 'sub-5-2',
        code: '5.2',
        title: { id: 'Saran & Riset Lanjutan (Future Recommendations)', en: 'Recommendations & Future Research Directions' },
        guidelines: {
          id: [
            '1. Uji emisi gas buang lanjutan menggunakan Gas Chromatography-Mass Spectrometry (GC-MS) atau Flue Gas Analyzer untuk mengukur konsentrasi eksak CO, CO2, NOx, dan partikulat PM2.5.',
            '2. Eksplorasi modifikasi lubang aerasi (vented center hole / honeycomb shape) pada geometri briket untuk meningkatkan efisiensi pembakaran.',
            '3. Analisis tekno-ekonomi dan studi umur simpan (shelf-life stability) briket berpenyimpan kelembapan alami di iklim tropis.'
          ],
          en: [
            '1. Undertake comprehensive flue gas speciation using GC-MS and real-time gas analyzers to quantify ppm levels of CO, NOx, and PM2.5 particulates.',
            '2. Investigate aerodynamic geometry optimization (vented perforated honeycombs) to maximize volumetric draft and complete combustion.',
            '3. Conduct techno-economic feasibility, life cycle assessment (LCA), and hygroscopic shelf-life stability studies under humid tropical environments.'
          ]
        }
      }
    ]
  },
  {
    id: 'sec-refs',
    number: 'DAFTAR PUSTAKA',
    title: {
      id: 'Daftar Pustaka & Lampiran (References & Appendices)',
      en: 'References & Supplementary Appendices'
    },
    purpose: {
      id: 'Menyajikan rujukan ilmiah terindeks (format APA 7th style) dan dokumentasi data mentah eksperimen.',
      en: 'Compile authoritative peer-reviewed citations per APA 7th Edition style and experimental validation data.'
    },
    subsections: [
      {
        id: 'sub-ref-list',
        code: 'R.1',
        title: { id: 'Daftar Referensi Utama (Selected Authoritative References)', en: 'Authoritative Benchmark References' },
        guidelines: {
          id: [
            'Format sitasi mengikuti APA 7th edition atau IEEE sesuai pedoman jurnal tujuan.',
            'Prioritaskan jurnal internasional bereputasi (Q1/Q2) dan jurnal nasional terakreditasi SINTA dalam 5-10 tahun terakhir.'
          ],
          en: [
            'Format citations in standard APA 7th Edition or IEEE style.',
            'Prioritize recent high-impact peer-reviewed literature in biomass energy, waste valorization, and thermal engineering.'
          ]
        },
        sampleDraft: {
          id: `1. Badan Standardisasi Nasional. (2000). Briket Arang Kayu (SNI 01-6235-2000). Jakarta: BSN.
2. ASTM International. (2019). Standard Test Method for Gross Calorific Value of Coal and Coke (ASTM D5865/D5865M-19). West Conshohocken, PA.
3. ASTM International. (2018). Standard Test Method for Ash in the Analysis Sample of Coal and Coke from Coal (ASTM D3174-12(2018)).
4. Zuorro, A., & Lavecchia, R. (2012). Spent coffee grounds as a valuable source of phenolic compounds and bioenergy. Journal of Cleaner Production, 34, 49-56.
5. Pathak, P. D., Mandavgane, S. A., & Kulkarni, B. D. (2017). Characterization of banana peel and its utilization for biochar production. Waste Management, 64, 98-107.
6. Mopoung, S., Moonsri, P., Palas, W., & Khumpai, S. (2014). Characterization and properties of charcoal briquettes prepared from spent coffee grounds with banana peel binder. Journal of Applied Sciences, 14(18), 2110-2115.
7. Triwahyuni, E., & Hendarsyah, H. (2020). Utilisation of waste cooked rice starch as a clean natural adhesive in carbon briquetting. Biomass and Bioenergy, 138, 105589.
8. Basu, P. (2018). Biomass Gasification, Pyrolysis and Torrefaction: Practical Design and Theory (3rd ed.). Academic Press.`,
          en: `1. Indonesian National Standard. (2000). Wood Charcoal Briquettes (SNI 01-6235-2000). National Standardization Agency of Indonesia (BSN).
2. ASTM International. (2019). Standard Test Method for Gross Calorific Value of Coal and Coke (ASTM D5865/D5865M-19). West Conshohocken, PA.
3. ASTM International. (2018). Standard Test Method for Ash in the Analysis Sample of Coal and Coke (ASTM D3174-12(2018)).
4. Zuorro, A., & Lavecchia, R. (2012). Spent coffee grounds as a valuable source of phenolic compounds and bioenergy. Journal of Cleaner Production, 34, 49-56.
5. Pathak, P. D., Mandavgane, S. A., & Kulkarni, B. D. (2017). Characterization of banana peel and its utilization for biochar production. Waste Management, 64, 98-107.
6. Mopoung, S., Moonsri, P., Palas, W., & Khumpai, S. (2014). Characterization and properties of charcoal briquettes prepared from spent coffee grounds with banana peel binder. Journal of Applied Sciences, 14(18), 2110-2115.
7. Triwahyuni, E., & Hendarsyah, H. (2020). Utilisation of waste cooked rice starch as a clean natural adhesive in carbon briquetting. Biomass and Bioenergy, 138, 105589.
8. Basu, P. (2018). Biomass Gasification, Pyrolysis and Torrefaction: Practical Design and Theory (3rd ed.). Academic Press.`
        }
      }
    ]
  }
];
