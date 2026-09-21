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
  {
    html: 'sophia_g6_placement_exam_guide.html',
    pdf: 'Sophia_G6_Placement_Exam_Cheat_Sheet.pdf'
  },
  {
    html: 'william_g6_placement_exam_guide.html',
    pdf: 'William_G6_Placement_Exam_Cheat_Sheet.pdf'
  },
  {
    html: 'g6_placement_exam_dual_handbook.html',
    pdf: 'G6_Placement_Exam_Dual_Secret_Handbook.pdf'
  }
];

console.log(`Starting generation of ${tasks.length} Placement Exam Cheat Sheet PDFs...`);

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

console.log('Placement Exam PDFs generation completed!');
