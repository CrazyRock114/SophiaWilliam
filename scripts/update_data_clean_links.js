const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '..', 'js', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

const cleanMap = {
  'ws-sophia-01': {
    cleanPdf_cn: 'pdf/clean/WS01_Concept_Rigor_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS01_Concept_Rigor_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws01_concept_rigor_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws01_concept_rigor_clean_en.html',
    cleanFileSize: '579 KB / 921 KB'
  },
  'ws-william-01': {
    cleanPdf_cn: 'pdf/clean/WS02_Arithmetic_Recovery_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS02_Arithmetic_Recovery_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws02_arithmetic_recovery_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws02_arithmetic_recovery_clean_en.html',
    cleanFileSize: '459 KB / 743 KB'
  },
  'ws-dual-01': {
    cleanPdf_cn: 'pdf/clean/WS03_G6_Diagnostic_Test_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS03_G6_Diagnostic_Test_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws03_g6_diagnostic_test_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws03_g6_diagnostic_test_clean_en.html',
    cleanFileSize: '531 KB / 831 KB'
  },
  'ws-flashcards-01': {
    cleanPdf_cn: 'pdf/clean/WS04_Error_Review_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS04_Error_Review_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws04_error_review_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws04_error_review_clean_en.html',
    cleanFileSize: '293 KB / 396 KB'
  },
  'ws-foundation-01': {
    cleanPdf_cn: 'pdf/clean/WS05_Decimals_Place_Value_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS05_Decimals_Place_Value_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws05_decimals_place_value_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws05_decimals_place_value_clean_en.html',
    cleanFileSize: '387 KB / 592 KB'
  },
  'ws-foundation-02': {
    cleanPdf_cn: 'pdf/clean/WS06_Powers_Multiplication_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS06_Powers_Multiplication_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws06_powers_multiplication_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws06_powers_multiplication_clean_en.html',
    cleanFileSize: '477 KB / 669 KB'
  },
  'ws-foundation-03': {
    cleanPdf_cn: 'pdf/clean/WS07_Fractions_Operations_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS07_Fractions_Operations_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws07_fractions_operations_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws07_fractions_operations_clean_en.html',
    cleanFileSize: '385 KB / 572 KB'
  },
  'ws-foundation-04': {
    cleanPdf_cn: 'pdf/clean/WS08_BODMAS_Geometry_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS08_BODMAS_Geometry_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws08_bodmas_geometry_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws08_bodmas_geometry_clean_en.html',
    cleanFileSize: '426 KB / 677 KB'
  },
  'ws-sophia-5a-01': {
    cleanPdf_cn: 'pdf/clean/WS09_5A_Consolidation_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS09_5A_Consolidation_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws09_5a_consolidation_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws09_5a_consolidation_clean_en.html',
    cleanFileSize: '645 KB / 1020 KB'
  },
  'ws-dual-classrecord-01': {
    cleanPdf_cn: 'pdf/clean/WS10_Classrecord_Mastery_Clean_CN.pdf',
    cleanPdf_en: 'pdf/clean/WS10_Classrecord_Mastery_Clean_EN.pdf',
    cleanHtml_cn: 'worksheets/clean/ws10_classrecord_mastery_clean_cn.html',
    cleanHtml_en: 'worksheets/clean/ws10_classrecord_mastery_clean_en.html',
    cleanFileSize: '767 KB / 1.2 MB'
  }
};

// We evaluate trackerData or regex inject
for (const [id, c] of Object.entries(cleanMap)) {
  const targetPattern = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"fileSize":\\s*"[^"]+"`);
  content = content.replace(targetPattern, (match) => {
    if (match.includes('"cleanPdfUrl_cn"')) return match;
    return match + `,\n      "cleanPdfUrl_cn": "${c.cleanPdf_cn}",\n      "cleanPdfUrl_en": "${c.cleanPdf_en}",\n      "cleanHtmlUrl_cn": "${c.cleanHtml_cn}",\n      "cleanHtmlUrl_en": "${c.cleanHtml_en}",\n      "cleanFileSize": "${c.cleanFileSize}"`;
  });
}

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully updated data.js with clean edition links for all 10 worksheets!');
