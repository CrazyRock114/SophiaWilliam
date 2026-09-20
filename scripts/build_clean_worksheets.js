const fs = require('fs');
const path = require('path');

const WS_DIR = path.resolve(__dirname, '..', 'worksheets');
const CLEAN_DIR = path.join(WS_DIR, 'clean');

if (!fs.existsSync(CLEAN_DIR)) {
  fs.mkdirSync(CLEAN_DIR, { recursive: true });
}

// Definition of 10 worksheet pairs
const worksheets = [
  {
    id: 'ws01',
    src_cn: 'sophia_practice_set1_cn.html',
    src_en: 'sophia_practice_set1_en.html',
    out_cn: 'ws01_concept_rigor_clean_cn.html',
    out_en: 'ws01_concept_rigor_clean_en.html',
    title_cn: '六年级数学思维与运算严谨性巩固检测卷（一）',
    title_en: 'Grade 6 Mathematics Concept Rigor & Careless Error Remediation Exam (Set 1)',
    time_cn: '30 分钟',
    time_en: '30 Mins',
  },
  {
    id: 'ws02',
    src_cn: 'william_practice_set1_cn.html',
    src_en: 'william_practice_set1_en.html',
    out_cn: 'ws02_arithmetic_recovery_clean_cn.html',
    out_en: 'ws02_arithmetic_recovery_clean_en.html',
    title_cn: '六年级数学四则运算与乘方本质强化检测卷（二）',
    title_en: 'Grade 6 Arithmetic Recovery & Powers Foundation Exam (Set 2)',
    time_cn: '35 分钟',
    time_en: '35 Mins',
  },
  {
    id: 'ws03',
    src_cn: 'suis_g6_diagnostic_test_cn.html',
    src_en: 'suis_g6_diagnostic_test_en.html',
    out_cn: 'ws03_g6_diagnostic_test_clean_cn.html',
    out_en: 'ws03_g6_diagnostic_test_clean_en.html',
    title_cn: '六年级数学期初核心素养全景诊断测试卷（三）',
    title_en: 'Grade 6 Integrated Mathematics Comprehensive Diagnostic Exam (Set 3)',
    time_cn: '60 分钟',
    time_en: '60 Mins',
  },
  {
    id: 'ws04',
    src_cn: 'error_review_flashcards_cn.html',
    src_en: 'error_review_flashcards_en.html',
    out_cn: 'ws04_error_review_clean_cn.html',
    out_en: 'ws04_error_review_clean_en.html',
    title_cn: '六年级数学高频典型易错题综合过关检测卷（四）',
    title_en: 'Grade 6 High-Frequency Typical Error Remediation Exam (Set 4)',
    time_cn: '25 分钟',
    time_en: '25 Mins',
  },
  {
    id: 'ws05',
    src_cn: 'g45_decimals_place_value_cn.html',
    src_en: 'g45_decimals_place_value_en.html',
    out_cn: 'ws05_decimals_place_value_clean_cn.html',
    out_en: 'ws05_decimals_place_value_clean_en.html',
    title_cn: '小学数与代数微特训：小数数位、移位除法与百分数（五）',
    title_en: 'Arithmetic Foundation: Decimals, Place Value & Operations Exam (Set 5)',
    time_cn: '30 分钟',
    time_en: '30 Mins',
  },
  {
    id: 'ws06',
    src_cn: 'g45_powers_multiplication_cn.html',
    src_en: 'g45_powers_multiplication_en.html',
    out_cn: 'ws06_powers_multiplication_clean_cn.html',
    out_en: 'ws06_powers_multiplication_clean_en.html',
    title_cn: '小学数与代数微特训：乘方本质、指数法则与连乘展开（六）',
    title_en: 'Arithmetic Foundation: Powers, Exponents & Repeated Multiplication Exam (Set 6)',
    time_cn: '30 分钟',
    time_en: '30 Mins',
  },
  {
    id: 'ws07',
    src_cn: 'g45_fractions_operations_cn.html',
    src_en: 'g45_fractions_operations_en.html',
    out_cn: 'ws07_fractions_operations_clean_cn.html',
    out_en: 'ws07_fractions_operations_clean_en.html',
    title_cn: '小学数与代数微特训：分数性质、异分母通分与带假互化（七）',
    title_en: 'Arithmetic Foundation: Fractions Operations & Common Denominators Exam (Set 7)',
    time_cn: '35 分钟',
    time_en: '35 Mins',
  },
  {
    id: 'ws08',
    src_cn: 'g35_bodmas_geometry_word_problems_cn.html',
    src_en: 'g35_bodmas_geometry_word_problems_en.html',
    out_cn: 'ws08_bodmas_geometry_clean_cn.html',
    out_en: 'ws08_bodmas_geometry_clean_en.html',
    title_cn: '小学综合应用微特训：运算顺序、几何度量与行程应用（八）',
    title_en: 'Comprehensive Foundation: BODMAS, Geometry & Word Problems Exam (Set 8)',
    time_cn: '35 分钟',
    time_en: '35 Mins',
  },
  {
    id: 'ws09',
    src_cn: 'sophia_5a_consolidation_test_cn.html',
    src_en: 'sophia_5a_consolidation_test_en.html',
    out_cn: 'ws09_5a_consolidation_clean_cn.html',
    out_en: 'ws09_5a_consolidation_clean_en.html',
    title_cn: '五年级数学核心素养与易错考点综合巩固检测卷（九）',
    title_en: 'Grade 5 Comprehensive Mathematics Mastery & Error Remediation Exam (Set 9)',
    time_cn: '45-50 分钟',
    time_en: '45-50 Mins',
  },
  {
    id: 'ws10',
    src_cn: 'ws10_classrecord_targeted_mastery_cn.html',
    src_en: 'ws10_classrecord_targeted_mastery_en.html',
    out_cn: 'ws10_classrecord_mastery_clean_cn.html',
    out_en: 'ws10_classrecord_mastery_clean_en.html',
    title_cn: '六年级数学开学阶段高频易错与认知盲区综合检测卷（十）',
    title_en: 'Grade 6 Mathematics High-Frequency Vulnerability & Cognitive Blind Spot Exam (Set 10)',
    time_cn: '50-60 分钟',
    time_en: '50-60 Mins',
  }
];

// Helper to remove nested divs cleanly
function removeElementByClass(html, className) {
  const startTag = `<div class="${className}"`;
  while (true) {
    const startIndex = html.indexOf(startTag);
    if (startIndex === -1) break;
    let depth = 0;
    let pos = startIndex;
    let matched = false;
    while (pos < html.length) {
      if (html.startsWith('<div', pos)) {
        depth++;
        pos += 4;
      } else if (html.startsWith('</div>', pos)) {
        depth--;
        pos += 6;
        if (depth === 0) {
          html = html.slice(0, startIndex) + html.slice(pos);
          matched = true;
          break;
        }
      } else {
        pos++;
      }
    }
    if (!matched) break;
  }
  return html;
}

function cleanCommon(html, lang, meta) {
  let res = html;

  // 1. Remove prompt/hint boxes with nested-aware div stripper
  res = removeElementByClass(res, 'tip-box');
  res = removeElementByClass(res, 'mnemonic-box');
  res = removeElementByClass(res, 'dialogue-quote');
  res = removeElementByClass(res, 'card-mnemonic');

  // Also remove unused CSS rules
  res = res.replace(/\.tip-box\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.mnemonic-box\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.mnemonic-title\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.dialogue-quote\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.card-mnemonic\s*\{[\s\S]*?\}/g, '');

  // 2. Remove tags in question titles
  res = res.replace(/【靶向\s*[^】]+】/g, '');
  res = res.replace(/【实录\s*[^】]+】/g, '');
  res = res.replace(/\[Target\s*[^\]]+\]/g, '');
  res = res.replace(/\[Audio\s*[^\]]+\]/g, '');

  // 3. Remove spoilery subtexts / rules
  res = res.replace(/<div class="q-subtext">\s*(口诀|Rule|Hints?|名师|避坑)[\s\S]*?<\/div>/gi, '');
  res = res.replace(/<div class="q-desc">\s*(口诀|Rule|Hints?|名师|避坑)[\s\S]*?<\/div>/gi, '');

  // 4. Remove hints in parentheses within questions
  res = res.replace(/（严禁误写为\s*8）/g, '');
  res = res.replace(/（严禁误写为\s*[^）]+）/g, '');
  res = res.replace(/（严防\s*18\+5=90[^）]*）/g, '');
  res = res.replace(/（严防\s*[^）]+）/g, '');
  res = res.replace(/（杜绝[^）]+）/g, '');
  res = res.replace(/（要求写出完整的通分与化简步骤，严防[^）]+）/g, '（要求写出完整的通分与化简步骤）：');
  res = res.replace(/（要求寻找最小公倍数通分，禁止直接盲目乘成\s*48）/g, '（用最小公倍数通分）：');
  res = res.replace(/（严禁写成\s*0\.4\s*小时）/g, '');
  res = res.replace(/（如\s*\$16 = 4\^2\$\s*）/g, '');
  res = res.replace(/\(Never confuse with[^)]+\)/gi, '');
  res = res.replace(/\(⚠️ 不是\s*0\.9！\)/g, '');
  res = res.replace(/\(⚠️ Not\s*0\.9!\)/gi, '');
  res = res.replace(/（共7个）/g, '（写出全部）');
  res = res.replace(/\(7 numbers in total\)/gi, '(list all)');
  res = res.replace(/（William 瞪眼法：[^）]+）/g, '');
  res = res.replace(/（William 看到文字应用题就直接留空！[^）]*）/g, '');
  res = res.replace(/（Sophia 扣了3次[^）]*）/g, '');

  // WS06 answer-box pre-printed rule
  res = res.replace(/法则：乘法分配律\s*\$a \\times \(b \+ c\) = a \\times b \+ a \\times c\$[^\n<]+/g, '理由说明：');
  res = res.replace(/Rule: The distributive property\s*\$a \\times \(b \+ c\) = a \\times b \+ a \\times c\$[^\n<]+/gi, 'Explanation:');

  // 5. Specific question adjustments
  // WS10 Q15(5)
  res = res.replace(/在校内作业批改中，老师曾将拼法二和拼法三都批注为\s*\$104\\text\{ cm\}\^2\$。请你写出理由，纠正这一批改误区，并总结“重叠面积与组合体表面积大小”的反向规律/g,
    '某同学计算出拼法二和拼法三的表面积均为 $104\\text{ cm}^2$。请通过严谨计算判断该结论是否正确，并给出理由，总结“重叠面积与组合体表面积大小”的反向规律');
  res = res.replace(/In class, Sophia's school teacher marked both Config B and Config C as \$104\\text\{ cm\}\^2\$\. Provide mathematical proof correcting this marking slip, and state the general inverse rule connecting overlap area and exposed surface area/gi,
    'A student calculated that both Configuration B and Configuration C yield a surface area of $104\\text{ cm}^2$. Determine whether this conclusion is correct through rigorous calculation, provide your reasoning, and state the general inverse law between overlap area and resulting surface area');

  // WS10 Q17(1)
  res = res.replace(/请运用课堂上的“花钱与收钱”通俗思维模型，直接解释为什么/g, '请结合生活实际中资金增减的代数逻辑，解释为什么');
  res = res.replace(/Use the intuitive "spending \/ receiving money" analogy to explain why/gi, 'Explain algebraically or logically why');

  // WS10 Q18(4)
  res = res.replace(/分类讨论求解未知数（严防半途而废）：/g, '分类讨论求解未知数：');
  res = res.replace(/Complete the branch analysis to find all valid single-digit solutions:/gi, 'Solve for the unknown digits through branch analysis:');

  // 6. De-identify locations, schools, classes, students
  res = res.replace(/上海协和双语高级学校（虹桥校区）/g, '某实验学校');
  res = res.replace(/上海协和双语高级学校/g, '某实验学校');
  res = res.replace(/上海协和双语学校（虹桥校区）/g, '某实验学校');
  res = res.replace(/上海协和双语学校/g, '某实验学校');
  res = res.replace(/协和双语虹桥校区/g, '实验学校');
  res = res.replace(/协和双语/g, '实验学校');
  res = res.replace(/一辆协和校车从虹桥校区开往运动场/g, '一辆校车从学校开往运动场');
  res = res.replace(/一辆协和校车/g, '一辆校车');
  res = res.replace(/协和校车/g, '校车');
  res = res.replace(/协和科技节布展/g, '校园科技节布展');
  res = res.replace(/协和科技节/g, '校园科技节');
  res = res.replace(/协和学校/g, '某校');
  res = res.replace(/协和/g, '学校');
  res = res.replace(/Shanghai United International School \(Hongqiao\)/gi, 'Experimental School');
  res = res.replace(/Shanghai United International School/gi, 'Experimental School');
  res = res.replace(/SUIS Hongqiao/gi, 'School');
  res = res.replace(/SUIS Science Fair/gi, 'School Science Fair');
  res = res.replace(/SUIS school bus/gi, 'school bus');
  res = res.replace(/SUIS/gi, 'School');
  res = res.replace(/初中预备融合班/g, '初中预备班');
  res = res.replace(/六年级融合班/g, '六年级');
  res = res.replace(/橡心国际专属数学教研/g, '数学学科教研组');
  res = res.replace(/橡心国际数学教研/g, '数学学科教研组');
  res = res.replace(/橡心国际/g, '数学教研组');
  res = res.replace(/虹桥校区/g, 'A校区');
  res = res.replace(/浦东校区/g, 'B校区');

  // Student Names
  if (lang === 'cn') {
    res = res.replace(/Sophia 和 William/g, '小明和小华');
    res = res.replace(/William 和 Sophia/g, '小华和小明');
    res = res.replace(/Sophia/g, '小明');
    res = res.replace(/William/g, '小华');
    res = res.replace(/小明 专属/g, '纯净测试版');
    res = res.replace(/小华 专属/g, '纯净测试版');
    res = res.replace(/【小明 专属】/g, '【纯净测试版】');
    res = res.replace(/【小华 专属】/g, '【纯净测试版】');
    res = res.replace(/【双人合卷】/g, '【纯净测试版】');
    res = res.replace(/🌸 小明 & ⚡ 小华 · /g, '');
    res = res.replace(/🌸 小明 & ⚡ 小华/g, '学生测试卷');
    res = res.replace(/小明 & 小华/g, '学生测试卷');
    res = res.replace(/小明/g, '小明'); // keep clean names
  } else {
    res = res.replace(/Sophia and William/g, 'Student A and Student B');
    res = res.replace(/William and Sophia/g, 'Student B and Student A');
    res = res.replace(/Sophia's/g, "Student A's");
    res = res.replace(/William's/g, "Student B's");
    res = res.replace(/Sophia/g, 'Student A');
    res = res.replace(/William/g, 'Student B');
    res = res.replace(/\[Sophia Exclusive\]/gi, '[Clean Test]');
    res = res.replace(/\[William Exclusive\]/gi, '[Clean Test]');
    res = res.replace(/\[Dual Test\]/gi, '[Clean Test]');
    res = res.replace(/🌸 Student A & ⚡ Student B · /g, '');
    res = res.replace(/🌸 Student A & ⚡ Student B/g, 'Student Exam');
    res = res.replace(/Student A & Student B/g, 'Student Exam');
  }

  // 7. Fix Titles and School Titles
  const title = lang === 'cn' ? meta.title_cn : meta.title_en;
  const time = lang === 'cn' ? meta.time_cn : meta.time_en;
  
  res = res.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  res = res.replace(/<div class="school-title">[\s\S]*?<\/div>/, `<div class="school-title">${lang === 'cn' ? '中小学数学核心素养与思维能力拓展系列 · 强化检测卷' : 'Middle School Mathematics Comprehensive Practice Series'}</div>`);
  res = res.replace(/<div class="paper-title">[\s\S]*?<\/div>/, `<div class="paper-title">${title}</div>`);

  // 8. Replace .meta-box cleanly
  const cleanMetaBoxCn = `<div class="meta-box">
        <div>姓名：<span class="fill-blank" style="min-width: 80px;"></span></div>
        <div>班级：<span class="fill-blank" style="min-width: 80px;"></span></div>
        <div>学号：<span class="fill-blank" style="min-width: 60px;"></span></div>
        <div>测试用时：${time}</div>
        <div>满分：100 分</div>
        <div>得分：<span class="fill-blank" style="min-width: 50px;"></span></div>
      </div>`;

  const cleanMetaBoxEn = `<div class="meta-box">
        <div>Name: <span class="fill-blank" style="min-width: 80px;"></span></div>
        <div>Class: <span class="fill-blank" style="min-width: 80px;"></span></div>
        <div>Student ID: <span class="fill-blank" style="min-width: 60px;"></span></div>
        <div>Time: ${time}</div>
        <div>Total: 100 Pts</div>
        <div>Score: <span class="fill-blank" style="min-width: 50px;"></span></div>
      </div>`;

  // Use tag-aware replacement for meta-box
  res = removeElementByClass(res, 'meta-box');
  res = res.replace(/(<div class="paper-title">[\s\S]*?<\/div>)/, `$1\n      ${lang === 'cn' ? cleanMetaBoxCn : cleanMetaBoxEn}`);

  // 9. Update Print button text
  res = res.replace(/<button class="no-print" onclick="window\.print\(\)">[\s\S]*?<\/button>/, `<button class="no-print" onclick="window.print()">🖨️ ${lang === 'cn' ? '打印纯净版试卷 / 另存为 PDF' : 'Print Clean Exam / Save as PDF'}</button>`);

  // 10. Ensure Answer Key Box starts on a clean page with page-break-before: always
  res = res.replace(/\.answer-key-box\s*\{/g, `.answer-key-box { page-break-before: always; `);
  res = res.replace(/\.answer-key-section\s*\{/g, `.answer-key-section { page-break-before: always; `);

  // 11. Clean up answer key title and text
  res = res.replace(/（教师批改与家长备课专用）/g, '（纯净教师版）');
  res = res.replace(/（教师批改参考）/g, '（纯净教师版）');
  res = res.replace(/\(For Parent & Educator Reference\)/gi, '(Teacher Reference)');
  res = res.replace(/\(For Parent Reference\)/gi, '(Teacher Reference)');
  res = res.replace(/小明 在草稿纸上[^，。；]*[，。；]/g, '');
  res = res.replace(/小华 在做[^，。；]*[，。；]/g, '');

  return res;
}

// Custom cleaner for WS04 (Flashcards to clean exam)
function cleanWS04(html, lang, meta) {
  let res = cleanCommon(html, lang, meta);
  
  // WS04 has .meta-bar instead of .meta-box
  const time = lang === 'cn' ? meta.time_cn : meta.time_en;
  const cleanMetaBarCn = `
    <div class="meta-box" style="margin-bottom: 14px;">
      <div>姓名：<span class="fill-blank" style="min-width: 80px;"></span></div>
      <div>班级：<span class="fill-blank" style="min-width: 80px;"></span></div>
      <div>学号：<span class="fill-blank" style="min-width: 60px;"></span></div>
      <div>建议用时：${time}</div>
      <div>满分：100 分</div>
      <div>得分：<span class="fill-blank" style="min-width: 50px;"></span></div>
    </div>`;
  const cleanMetaBarEn = `
    <div class="meta-box" style="margin-bottom: 14px;">
      <div>Name: <span class="fill-blank" style="min-width: 80px;"></span></div>
      <div>Class: <span class="fill-blank" style="min-width: 80px;"></span></div>
      <div>Student ID: <span class="fill-blank" style="min-width: 60px;"></span></div>
      <div>Time: ${time}</div>
      <div>Total: 100 Pts</div>
      <div>Score: <span class="fill-blank" style="min-width: 50px;"></span></div>
    </div>`;

  res = res.replace(/<div class="meta-bar">[\s\S]*?<\/div>/, lang === 'cn' ? cleanMetaBarCn : cleanMetaBarEn);

  // Remove card-mnemonic from cards
  res = removeElementByClass(res, 'card-mnemonic');
  
  // Remove tags like "· William 重点"
  res = res.replace(/<span class="card-tag">[\s\S]*?<\/span>/g, '');

  // Extract all card answers and move them to an answer key at the bottom
  const answers = [];
  res = res.replace(/<div class="card-answer">([\s\S]*?)<\/div>/g, (m, p1) => {
    answers.push(p1.trim());
    return ''; // remove from card face
  });

  // Create clean answer key box
  let answerKeyHtml = '';
  if (answers.length > 0) {
    answerKeyHtml = `
    <div class="answer-key-box" style="page-break-before: always; margin-top: 24px; padding: 14px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
      <div style="font-weight: 800; font-size: 14px; color: #0f172a; margin-bottom: 8px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">
        📋 ${lang === 'cn' ? '【参考答案与评分标准】（纯净教师版）' : '[Answer Key & Scoring Guide] (Teacher Reference)'}
      </div>
      <div style="font-size: 12px; line-height: 1.6; color: #334155;">
        ${answers.map((ans, idx) => `<div><strong>${lang === 'cn' ? `第 ${idx + 1} 题` : `Question ${idx + 1}`}</strong>: ${ans}</div>`).join('')}
      </div>
    </div>`;
  }

  // Insert before </div>\s*<script>
  res = res.replace(/(<\/div>\s*<script>)/, answerKeyHtml + '\n  $1');

  return res;
}

// Process all worksheets
worksheets.forEach(ws => {
  console.log(`Processing Clean Edition for ${ws.id}...`);

  // CN
  const cnPath = path.join(WS_DIR, ws.src_cn);
  if (fs.existsSync(cnPath)) {
    const rawCn = fs.readFileSync(cnPath, 'utf8');
    let cleanCn = (ws.id === 'ws04') ? cleanWS04(rawCn, 'cn', ws) : cleanCommon(rawCn, 'cn', ws);
    fs.writeFileSync(path.join(CLEAN_DIR, ws.out_cn), cleanCn, 'utf8');
    console.log(`  -> Generated clean CN: ${ws.out_cn}`);
  } else {
    console.error(`  -> ERROR: Missing source ${ws.src_cn}`);
  }

  // EN
  const enPath = path.join(WS_DIR, ws.src_en);
  if (fs.existsSync(enPath)) {
    const rawEn = fs.readFileSync(enPath, 'utf8');
    let cleanEn = (ws.id === 'ws04') ? cleanWS04(rawEn, 'en', ws) : cleanCommon(rawEn, 'en', ws);
    fs.writeFileSync(path.join(CLEAN_DIR, ws.out_en), cleanEn, 'utf8');
    console.log(`  -> Generated clean EN: ${ws.out_en}`);
  } else {
    console.error(`  -> ERROR: Missing source ${ws.src_en}`);
  }
});

console.log('All 20 clean worksheets successfully generated in worksheets/clean/!');
