const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_DIR = path.resolve(__dirname, '..');
const CLEAN_WS_DIR = path.join(BASE_DIR, 'worksheets', 'clean');
const CLEAN_PDF_DIR = path.join(BASE_DIR, 'pdf', 'clean');

if (!fs.existsSync(CLEAN_PDF_DIR)) {
  fs.mkdirSync(CLEAN_PDF_DIR, { recursive: true });
}

const tasks = [
  { html: 'ws01_concept_rigor_clean_en.html', pdf: 'WS01_Concept_Rigor_Clean_EN.pdf' },
  { html: 'ws01_concept_rigor_clean_cn.html', pdf: 'WS01_Concept_Rigor_Clean_CN.pdf' },
  { html: 'ws02_arithmetic_recovery_clean_en.html', pdf: 'WS02_Arithmetic_Recovery_Clean_EN.pdf' },
  { html: 'ws02_arithmetic_recovery_clean_cn.html', pdf: 'WS02_Arithmetic_Recovery_Clean_CN.pdf' },
  { html: 'ws03_g6_diagnostic_test_clean_en.html', pdf: 'WS03_G6_Diagnostic_Test_Clean_EN.pdf' },
  { html: 'ws03_g6_diagnostic_test_clean_cn.html', pdf: 'WS03_G6_Diagnostic_Test_Clean_CN.pdf' },
  { html: 'ws04_error_review_clean_en.html', pdf: 'WS04_Error_Review_Clean_EN.pdf' },
  { html: 'ws04_error_review_clean_cn.html', pdf: 'WS04_Error_Review_Clean_CN.pdf' },
  { html: 'ws05_decimals_place_value_clean_en.html', pdf: 'WS05_Decimals_Place_Value_Clean_EN.pdf' },
  { html: 'ws05_decimals_place_value_clean_cn.html', pdf: 'WS05_Decimals_Place_Value_Clean_CN.pdf' },
  { html: 'ws06_powers_multiplication_clean_en.html', pdf: 'WS06_Powers_Multiplication_Clean_EN.pdf' },
  { html: 'ws06_powers_multiplication_clean_cn.html', pdf: 'WS06_Powers_Multiplication_Clean_CN.pdf' },
  { html: 'ws07_fractions_operations_clean_en.html', pdf: 'WS07_Fractions_Operations_Clean_EN.pdf' },
  { html: 'ws07_fractions_operations_clean_cn.html', pdf: 'WS07_Fractions_Operations_Clean_CN.pdf' },
  { html: 'ws08_bodmas_geometry_clean_en.html', pdf: 'WS08_BODMAS_Geometry_Clean_EN.pdf' },
  { html: 'ws08_bodmas_geometry_clean_cn.html', pdf: 'WS08_BODMAS_Geometry_Clean_CN.pdf' },
  { html: 'ws09_5a_consolidation_clean_en.html', pdf: 'WS09_5A_Consolidation_Clean_EN.pdf' },
  { html: 'ws09_5a_consolidation_clean_cn.html', pdf: 'WS09_5A_Consolidation_Clean_CN.pdf' },
  { html: 'ws10_classrecord_mastery_clean_en.html', pdf: 'WS10_Classrecord_Mastery_Clean_EN.pdf' },
  { html: 'ws10_classrecord_mastery_clean_cn.html', pdf: 'WS10_Classrecord_Mastery_Clean_CN.pdf' },
  { html: 'ws11_school_workbook_algebra_geometry_clean_en.html', pdf: 'WS11_School_Workbook_Algebra_Geometry_Clean_EN.pdf' },
  { html: 'ws11_school_workbook_algebra_geometry_clean_cn.html', pdf: 'WS11_School_Workbook_Algebra_Geometry_Clean_CN.pdf' },
  { html: 'ws12_school_workbook_number_theory_spatial_clean_en.html', pdf: 'WS12_School_Workbook_Number_Theory_Spatial_Clean_EN.pdf' },
  { html: 'ws12_school_workbook_number_theory_spatial_clean_cn.html', pdf: 'WS12_School_Workbook_Number_Theory_Spatial_Clean_CN.pdf' },
];

console.log(`Starting generation of ${tasks.length} Clean Edition PDFs...`);

tasks.forEach((t, i) => {
  const htmlPath = path.join(CLEAN_WS_DIR, t.html);
  const pdfPath = path.join(CLEAN_PDF_DIR, t.pdf);
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

console.log('All Clean Edition PDF tasks completed!');
