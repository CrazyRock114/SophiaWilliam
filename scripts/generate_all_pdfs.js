const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_DIR = path.resolve(__dirname, '..');
const WS_DIR = path.join(BASE_DIR, 'worksheets');
const PDF_DIR = path.join(BASE_DIR, 'pdf');

if (!fs.existsSync(PDF_DIR)) {
  fs.mkdirSync(PDF_DIR, { recursive: true });
}

const tasks = [
  { html: 'sophia_practice_set1_en.html', pdf: 'WS01_Sophia_Concept_Rigor_EN.pdf' },
  { html: 'sophia_practice_set1_cn.html', pdf: 'WS01_Sophia_Concept_Rigor_CN.pdf' },
  { html: 'william_practice_set1_en.html', pdf: 'WS02_William_Arithmetic_Recovery_EN.pdf' },
  { html: 'william_practice_set1_cn.html', pdf: 'WS02_William_Arithmetic_Recovery_CN.pdf' },
  { html: 'suis_g6_diagnostic_test_en.html', pdf: 'WS03_SUIS_G6_Diagnostic_Test_EN.pdf' },
  { html: 'suis_g6_diagnostic_test_cn.html', pdf: 'WS03_SUIS_G6_Diagnostic_Test_CN.pdf' },
  { html: 'error_review_flashcards_en.html', pdf: 'WS04_Daily_Error_Flashcards_EN.pdf' },
  { html: 'error_review_flashcards_cn.html', pdf: 'WS04_Daily_Error_Flashcards_CN.pdf' },
  { html: 'g45_decimals_place_value_en.html', pdf: 'WS05_G45_Decimals_Place_Value_EN.pdf' },
  { html: 'g45_decimals_place_value_cn.html', pdf: 'WS05_G45_Decimals_Place_Value_CN.pdf' },
  { html: 'g45_powers_multiplication_en.html', pdf: 'WS06_G45_Powers_Multiplication_EN.pdf' },
  { html: 'g45_powers_multiplication_cn.html', pdf: 'WS06_G45_Powers_Multiplication_CN.pdf' },
  { html: 'g45_fractions_operations_en.html', pdf: 'WS07_G45_Fractions_Operations_EN.pdf' },
  { html: 'g45_fractions_operations_cn.html', pdf: 'WS07_G45_Fractions_Operations_CN.pdf' },
  { html: 'g35_bodmas_geometry_word_problems_en.html', pdf: 'WS08_G35_BODMAS_Geometry_Word_Problems_EN.pdf' },
  { html: 'g35_bodmas_geometry_word_problems_cn.html', pdf: 'WS08_G35_BODMAS_Geometry_Word_Problems_CN.pdf' },
  { html: 'sophia_5a_consolidation_test_en.html', pdf: 'WS09_Sophia_5A_Consolidation_Test_EN.pdf' },
  { html: 'sophia_5a_consolidation_test_cn.html', pdf: 'WS09_Sophia_5A_Consolidation_Test_CN.pdf' },
  { html: 'ws10_classrecord_targeted_mastery_en.html', pdf: 'WS10_Classrecord_Targeted_Mastery_EN.pdf' },
  { html: 'ws10_classrecord_targeted_mastery_cn.html', pdf: 'WS10_Classrecord_Targeted_Mastery_CN.pdf' },
  { html: 'ws11_school_workbook_algebra_geometry_en.html', pdf: 'WS11_School_Workbook_Algebra_Geometry_EN.pdf' },
  { html: 'ws11_school_workbook_algebra_geometry_cn.html', pdf: 'WS11_School_Workbook_Algebra_Geometry_CN.pdf' },
  { html: 'ws12_school_workbook_number_theory_spatial_en.html', pdf: 'WS12_School_Workbook_Number_Theory_Spatial_EN.pdf' },
  { html: 'ws12_school_workbook_number_theory_spatial_cn.html', pdf: 'WS12_School_Workbook_Number_Theory_Spatial_CN.pdf' },
];

console.log(`Starting generation of ${tasks.length} PDFs...`);

tasks.forEach((t, i) => {
  const htmlPath = path.join(WS_DIR, t.html);
  const pdfPath = path.join(PDF_DIR, t.pdf);
  const fileUrl = `file://${htmlPath}`;
  
  console.log(`[${i + 1}/${tasks.length}] Generating ${t.pdf} from ${t.html}...`);
  const cmd = `"${CHROME_PATH}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2500 --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
  
  try {
    execSync(cmd, { stdio: 'pipe' });
    const stat = fs.statSync(pdfPath);
    console.log(`  -> Successfully created ${t.pdf} (${Math.round(stat.size / 1024)} KB)`);
  } catch (err) {
    console.error(`  -> ERROR generating ${t.pdf}:`, err.message);
  }
});

console.log('All PDF tasks completed!');
