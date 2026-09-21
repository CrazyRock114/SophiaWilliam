const fs = require('fs');
const path = require('path');
const katex = require('katex');

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
    title_en: 'Grade 6 Mathematics Concept Rigor & Foundation Exam (Set 1)',
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
    title_en: 'Grade 6 Arithmetic Foundation & Powers Diagnostic Exam (Set 2)',
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
    title_en: 'Grade 6 High-Frequency Typical Problem Remediation Exam (Set 4)',
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
    title_en: 'Grade 5 Comprehensive Mathematics Mastery & Foundation Exam (Set 9)',
    time_cn: '45-50 分钟',
    time_en: '45-50 Mins',
  },
  {
    id: 'ws10',
    src_cn: 'ws10_classrecord_targeted_mastery_cn.html',
    src_en: 'ws10_classrecord_targeted_mastery_en.html',
    out_cn: 'ws10_classrecord_mastery_clean_cn.html',
    out_en: 'ws10_classrecord_mastery_clean_en.html',
    title_cn: '六年级数学开学阶段高频考点与思维模型综合检测卷（十）',
    title_en: 'Grade 6 Mathematics Core Concept Mastery & Problem Solving Exam (Set 10)',
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

  // 1. Remove all hint/dialogue/quote/mnemonic containers
  res = removeElementByClass(res, 'tip-box');
  res = removeElementByClass(res, 'mnemonic-box');
  res = removeElementByClass(res, 'dialogue-quote');
  res = removeElementByClass(res, 'card-mnemonic');

  // Remove unused CSS rules for hint containers
  res = res.replace(/\.tip-box\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.mnemonic-box\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.mnemonic-title\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.dialogue-quote\s*\{[\s\S]*?\}/g, '');
  res = res.replace(/\.card-mnemonic\s*\{[\s\S]*?\}/g, '');

  // 2. Remove tags in question titles
  res = res.replace(/【靶向\s*[^】]+】/g, '');
  res = res.replace(/【实录\s*[^】]+】/g, '');
  res = res.replace(/\[Target\s*[^\]]+\]/gi, '');
  res = res.replace(/\[Audio\s*[^\]]+\]/gi, '');

  // 3. Remove rule/subtext/hint divs completely
  res = res.replace(/<div class="q-subtext">[\s\S]*?<\/div>/gi, '');
  res = res.replace(/<div class="q-desc">\s*(口诀|Rule|Hints?|名师|避坑|注意|提示)[\s\S]*?<\/div>/gi, '');

  // 4. Clean up KaTeX issues and HTML entities inside math
  res = res.replace(/\$&gt;\$/g, ' &gt; ');
  res = res.replace(/\$&lt;\$/g, ' &lt; ');
  res = res.replace(/(\$[^$]*?)&lt;([^$]*?\$)/g, '$1<$2');
  res = res.replace(/(\$[^$]*?)&gt;([^$]*?\$)/g, '$1>$2');
  res = res.replace(/\\\$210/g, '210\\text{ dollars}');

  // WS09 stray dollar fixes
  res = res.replace(/Total length\s*\$=\$\s*<span class="fill-blank"><\/span>\s*\$\\text\{dm\}\$/g, 'Total length: <span class="fill-blank"></span> $\\text{dm}$');
  res = res.replace(/彩带总长\s*\$=\$\s*<span class="fill-blank"><\/span>\s*\$\\text\{dm\}\$/g, '彩带总长：<span class="fill-blank"></span> $\\text{dm}$');

  // 5. Purge all parenthetical hints, warnings, negative instructions, and scaffolds in questions
  // Chinese removals
  res = res.replace(/（写出计算思路，禁止直接除以\s*2）/g, '（写出计算思路）');
  res = res.replace(/（必须写出通分过程，严禁跳步）/g, '（写出通分计算过程）');
  res = res.replace(/（写出巧妙比较思路）/g, '（写出比较过程）');
  res = res.replace(/（提示：不要盲目通分大分母，可用“与 1 相比相差多少”的相差法）/g, '');
  res = res.replace(/（提示：展开写出第\s*\d+\s*位小数）/g, '');
  res = res.replace(/（<strong>严禁直接展开硬代入<\/strong>）/g, '');
  res = res.replace(/（严禁直接展开硬代入）/g, '');
  res = res.replace(/（清晰标出小数点移动与对齐痕迹）/g, '');
  res = res.replace(/（写出分步计算与单位）/g, '');
  res = res.replace(/（按照小数点移动法则迅速计算）/g, '');
  res = res.replace(/（先化假分数，除法变乘倒数再约分！）/g, '');
  res = res.replace(/（商\s*\\frac\{\\text\{余数\}\}\{\\text\{除数\}\}）/g, '');
  res = res.replace(/（借\s*1\s*为\s*\\frac\{4\}\{4\}）/g, '');
  res = res.replace(/（乘\s*100\\%）/g, '');
  res = res.replace(/（注意：40比42小，整数部分商0并点小数点）/g, '');
  res = res.replace(/（⚠️\s*严禁写\s*0\.9！\s*）/g, '');
  res = res.replace(/（⚠️\s*严禁写成\s*0\.9！\s*）/g, '');
  res = res.replace(/（严禁写成\s*\$75\\%\$\s*或\s*\$0\.75\\%\$）/g, '');
  res = res.replace(/（牢记：\$18\+5\s*\\neq\s*90\$）/g, '');
  res = res.replace(/（严禁写\s*\$49\s*\\div\s*2\$！?）/g, '');
  res = res.replace(/（严禁写成\s*0\.4\s*小时）/g, '');
  res = res.replace(/（先乘后加，牢记不是\s*90！\s*）/g, '');
  res = res.replace(/（因为\s*\$7\s*\\times\s*7\s*=\s*49\$，绝不能除以\s*2！\s*）/g, '');
  res = res.replace(/（因为\s*\$6\s*\\times\s*6\s*=\s*36\$）/g, '');
  res = res.replace(/（从左到右）/g, '');
  res = res.replace(/（坚决杜绝）/g, '');
  res = res.replace(/（严禁算成\s*12）/g, '');
  res = res.replace(/（严禁算成\s*\$10\^\{20\}\$）/g, '');
  res = res.replace(/（绝不是\s*10）/g, '');
  res = res.replace(/（\$2\s*\\times\s*3\s*=\s*6\$\s*是大忌）/g, '');
  res = res.replace(/（严禁指数相乘算成\s*\$10\^\{20\}\$）/g, '');
  res = res.replace(/（严禁将商与除数倒置写成[^）]+）/g, '');
  res = res.replace(/（8个2相加）/g, '');
  res = res.replace(/（总共有几个 2 连乘？）/g, '');
  res = res.replace(/（4个2连续相乘）/g, '');
  res = res.replace(/（攻克历史错因）/g, '');
  res = res.replace(/（Keep-Change-Flip）/g, '');
  res = res.replace(/（必须包含正确单位）/g, '');
  res = res.replace(/（要求写出完整的通分与化简步骤[^\n）]*）[：:]*/g, '');
  res = res.replace(/（要求寻找最小公倍数通分[^\n）]*）[：:]*/g, '');
  res = res.replace(/（写出通分验证过程）/g, '');
  res = res.replace(/（严防半途而废）/g, '');
  res = res.replace(/（严防\s*18\+5=90[^）]*）/g, '');
  res = res.replace(/（严防[^）]+）/g, '');
  res = res.replace(/（严禁[^）]+）/g, '');
  res = res.replace(/（杜绝[^）]+）/g, '');
  res = res.replace(/（如\s*\$16 = 4\^2\$\s*）/g, '');
  res = res.replace(/（共7个）/g, '（写出全部）');
  res = res.replace(/（William 瞪眼法：[^）]+）/g, '');
  res = res.replace(/（William 看到文字应用题就直接留空！[^）]*）/g, '');
  res = res.replace(/（Sophia 扣了3次[^）]*）/g, '');

  // English removals
  res = res.replace(/\(Show your reasoning;\s*DO NOT divide by 2\)/gi, '(Show your reasoning)');
  res = res.replace(/\(Hint:\s*DO NOT cross-multiply large numbers; use the "distance to 1" benchmark method\)/gi, '');
  res = res.replace(/\(Hint:\s*expand and compare the 7th decimal place\)/gi, '');
  res = res.replace(/\(<strong>Direct substitution without simplifying is strictly prohibited<\/strong>\)/gi, '');
  res = res.replace(/\(Direct substitution without simplifying is strictly prohibited\)/gi, '');
  res = res.replace(/\(clearly show shifted decimal points\)/gi, '');
  res = res.replace(/（警惕\s*\$18\+5\$\s*笔误！\s*）[：:]*/g, '');
  res = res.replace(/\(Beware of impulsive\s*\$18\+5\$\s*slip!\)[：:]*/gi, '');
  res = res.replace(/双栏草稿防笔误实操/g, '分步书写与计算综合');
  res = res.replace(/Dual-column Scratchpad & Error Prevention/gi, 'Multi-step Arithmetic & Problem Solving');
  res = res.replace(/\((?:William's|Student B's)\s*Focus:\s*DO NOT STOP HERE!\)[：:]*/gi, '');
  res = res.replace(/（(?:William|小华)\s*重点突破：绝不能停笔！\s*）[：:]*/g, '');
  res = res.replace(/\(Do NOT write\s*\$49\s*\\div\s*2\$\)/gi, '');
  res = res.replace(/\(NOT\s*\$49\s*\\div\s*2\$!\)/gi, '');
  res = res.replace(/\(Remember:\s*when 40 is smaller than 42, the first digit after decimal point is 0\)/gi, '');
  res = res.replace(/\(NOT\s*\$75\\%\$\s*or\s*\$0\.75\\%\$\)/gi, '');
  res = res.replace(/\(DO NOT MAKE\)/gi, '');
  res = res.replace(/\(NOT\s*12\)/gi, '');
  res = res.replace(/\(NEVER\s*\$10\^\{20\}\$\)/gi, '');
  res = res.replace(/\(NOT\s*\$10\$\)/gi, '');
  res = res.replace(/\(Keep-Change-Flip\)/gi, '');
  res = res.replace(/\(LCD\s*=\s*20\)/gi, '');
  res = res.replace(/\(Sophia & William check:\s*do not flip quotient & remainder!\)/gi, '');
  res = res.replace(/\(Student Exam check:\s*do not flip quotient & remainder!\)/gi, '');
  res = res.replace(/\(Check:\s*\$18\+5\s*\\neq\s*90\$!\)/gi, '');
  res = res.replace(/\(not\s*90!\)/gi, '');
  res = res.replace(/\(\$7\s*\\times\s*7\s*=\s*49\$,\s*not\s*\$24\.5\$!\)/gi, '');
  res = res.replace(/\(since\s*\$6\s*\\times\s*6\s*=\s*36\$\)/gi, '');
  res = res.replace(/\(left to right\)/gi, '');
  res = res.replace(/\(Never confuse with[^)]+\)/gi, '');
  res = res.replace(/\(Include proper units!\)/gi, '');
  res = res.replace(/\(Show full working,\s*avoiding the[\s\S]*?\)[：:]*/gi, '');
  res = res.replace(/\(Use\s*\$\\text\{LCM\}[\s\S]*?\)[：:]*/gi, '');
  res = res.replace(/\(1\)\s*Calculate:\s*\$2\\frac\{1\}\{3\}\s*\+\s*3\\frac\{5\}\{6\}\$[^<\n]*/g, '(1) Calculate: $2\\frac{1}{3} + 3\\frac{5}{6}$');
  res = res.replace(/\(2\)\s*Calculate:\s*\$\\frac\{1\}\{6\}\s*\+\s*\\frac\{1\}\{8\}\$[^<\n]*/g, '(2) Calculate: $\\frac{1}{6} + \\frac{1}{8}$');
  res = res.replace(/\(1\)\s*计算：\s*\$2\\frac\{1\}\{3\}\s*\+\s*3\\frac\{5\}\{6\}\$[^<\n]*/g, '(1) 计算：$2\\frac{1}{3} + 3\\frac{5}{6}$');
  res = res.replace(/\(2\)\s*计算：\s*\$\\frac\{1\}\{6\}\s*\+\s*\\frac\{1\}\{8\}\$[^<\n]*/g, '(2) 计算：$\\frac{1}{6} + \\frac{1}{8}$');
  res = res.replace(/\(four 2s multiplied\)/gi, '');
  res = res.replace(/\(7 numbers in total\)/gi, '(list all)');
  res = res.replace(/\(Total 3x\)/g, '');
  res = res.replace(/\(Total x \+ 8\)/g, '');
  res = res.replace(/\(Total 4y\)/g, '');
  res = res.replace(/\(总长 3x\)/g, '');
  res = res.replace(/\(总长 x \+ 8\)/g, '');
  res = res.replace(/\(总长 4y\)/g, '');

  // Clean double punctuation artifacts
  res = res.replace(/：：/g, '：');
  res = res.replace(/::/g, ':');
  res = res.replace(/：\s*：/g, '：');

  // 6. Purge solution scaffolds from answer boxes
  // WS10 Question 8: Remove formula scaffold and text{___}
  res = res.replace(/<div>\$2,400,000 \\times 0\.000035 = \(240 \\times 10[^\)]+\) \\times \(3\.5 \\times 10[^\)]+\) = \s*\$<\/div>/g, '');
  // WS10 Question 8: Remove formula scaffold and text{___}
  res = res.replace(/<div>\$2,400,000 \\times 0\.000035 = [^<]+<\/div>/g, '');
  res = res.replace(/<div>推导过程：\$S = S_1 \+ S_2 = \s*\$<\/div>/g, '');
  res = res.replace(/<div>Proof:\s*\$S = S_1 \+ S_2 = \s*\$<\/div>/g, '');
  res = res.replace(/<div>解：原式\s*=\s*<\/div>/g, '');
  res = res.replace(/<div>Working:\s*<\/div>/g, '');
  res = res.replace(/<div>证明：\$\\frac\{1\}\{n\} - \\frac\{1\}\{n\+1\}\s*=\s*\$<\/div>/g, '');
  res = res.replace(/<div>Proof:\s*\$\\frac\{1\}\{n\} - \\frac\{1\}\{n\+1\}\s*=\s*\$<\/div>/g, '');
  res = res.replace(/<div>证明：\$1000X = 1001X - X = \s*\$<\/div>/g, '');
  res = res.replace(/<div>Proof:\s*\$1000X = 1001X - X = \s*\$<\/div>/g, '');
  res = res.replace(/<div><strong>分支一<\/strong>：若\s*\$Y = 0\$，则：<\/div>/g, '');
  res = res.replace(/<div><strong>Branch 1<\/strong>:\s*If\s*\$Y = 0\$,\s*then:<\/div>/g, '');
  res = res.replace(/<div style="margin-top:20px;"><strong>分支二<\/strong>：若\s*\$Y = 5\$，则：<\/div>/g, '');
  res = res.replace(/<div style="margin-top:20px;"><strong>Branch 2<\/strong>:\s*If\s*\$Y = 5\$,\s*then:<\/div>/g, '');
  res = res.replace(/<div style="margin-top:20px;"><strong>结论<\/strong>：唯一解为\s*\$X = \$\s*<span class="fill-blank"[^>]*><\/span>,\s*\$Y = \$\s*<span class="fill-blank"[^>]*><\/span>；该六位数为\s*<span class="fill-blank"[^>]*><\/span>。<\/div>/g, '');
  res = res.replace(/<div style="margin-top:20px;"><strong>Conclusion<\/strong>:\s*Unique solution is\s*\$X = \$\s*<span class="fill-blank"[^>]*><\/span>,\s*\$Y = \$\s*<span class="fill-blank"[^>]*><\/span>; the 6-digit number is\s*<span class="fill-blank"[^>]*><\/span>\.<\/div>/g, '');

  // WS02 answer box scaffold
  res = res.replace(/<div class="answer-box">\s*\$10\^4 \\times 10\^5[\s\S]*?<\/div>/g, '<div class="answer-box" style="min-height: 45px;"></div>');

  // WS09 answer boxes
  res = res.replace(/<div class="answer-box">\s*<div>(?:请写出正确化简过程|Write the correct simplification)[\s\S]*?<\/div>\s*<\/div>/g, '<div class="answer-box" style="min-height: 45px;"></div>');
  res = res.replace(/<div class="answer-box">\s*<div>(?:请写出标准分步化简过程|Write the standard step-by-step simplification)[\s\S]*?<\/div>\s*<\/div>/g, '<div class="answer-box" style="min-height: 45px;"></div>');
  res = res.replace(/<div class="answer-box">\s*<div>(?:第一步（合并同类项化简）|Step 1 \(Combine like terms\))[\s\S]*?<\/div>\s*<\/div>/g, '<div class="answer-box" style="min-height: 50px;"></div>');
  res = res.replace(/<div class="answer-box">\s*<div>(?:解：设货车的平均速度|Let the truck\'s average speed)[\s\S]*?<\/div>\s*<\/div>/g, '<div class="answer-box" style="min-height: 60px;"></div>');
  res = res.replace(/<div class="answer-box answer-box-large">\s*<div>(?:解：设原计划租了|Let the number of rented boats)[\s\S]*?<\/div>\s*<\/div>/g, '<div class="answer-box answer-box-large" style="min-height: 80px;"></div>');

  // WS06 answer boxes
  res = res.replace(/<div class="answer-box"[^>]*>\s*(?:法则：乘法分配律|Rule: The distributive property)[\s\S]*?<\/div>/g, '<div class="answer-box" style="min-height: 45px; margin-top: 8px;"></div>');
  res = res.replace(/<div class="answer-box" style="min-height:\s*80px;">\s*（1）\s*\$3\^2\s*=\s*\$[\s\S]*?<\/div>/g, '<div class="answer-box" style="min-height: 80px;"></div>');
  res = res.replace(/<div class="answer-box" style="min-height:\s*80px;">\s*\(a\)\s*\$3\^2\s*=\s*\$[\s\S]*?<\/div>/g, '<div class="answer-box" style="min-height: 80px;"></div>');
  res = res.replace(/（1）该同学把加法与乘法混淆了：\$8 \\times 2 = 16\$ 是 \$2\+2\+2\+2\+2\+2\+2\+2\$[^\n<]*<br>\s*（2）质因数分解：\$16 = \$\s*_{5,}/g,
    '（1）分析错误原因：<br><br>（2）质因数分解：$16 = $ ____________________');
  res = res.replace(/\(a\) The student is confusing addition with multiplication:[^<]+<br>\s*\(b\) Prime factorization:\s*\$16 = \$\s*_{5,}[^<]*/gi,
    '(a) Identify the misconception:<br><br>(b) Prime factorization: $16 = $ ____________________');

  // WS08 distance formula in answer box
  res = res.replace(/\$\\text\{路程\}\s*=\s*\\text\{速度\}\s*\\times\s*\\text\{时间\}\s*=\s*\$/g, '');
  res = res.replace(/\$\\text\{Distance\}\s*=\s*\\text\{Speed\}\s*\\times\s*\\text\{Time\}\s*=\s*\$/g, '');

  // WS03 Q14 scaffold
  res = res.replace(/（2）\s*因为\s*\$2\^8\s*=\s*\$\s*_{3,}[\s\S]*?所以最小的正整数\s*\$n\s*=\s*\$\s*_{3,}。/g, '（2）最小正整数 $n = $ _________。');
  res = res.replace(/\(b\)\s*Because\s*\$2\^8\s*=\s*\$\s*_{3,}[\s\S]*?therefore the smallest positive integer\s*\$n\s*=\s*\$\s*_{3,}\./gi, '(b) Smallest positive integer $n = $ _________.');

  // WS05 long division prompt in answer box
  res = res.replace(/竖式计算过程（注意：40比42小，整数部分商0并点小数点）：/g, '竖式计算过程：');
  res = res.replace(/Show your long division here \(Remember: when 40 is smaller than 42, the first digit after decimal point is 0\):/gi, 'Show your long division here:');

  // 7. De-identify locations, schools, classes, students
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

  // Specific question adjustments
  // WS10 Q15(5)
  res = res.replace(/在校内作业批改中，老师曾将拼法二和拼法三都批注为\s*\$104\\text\{ cm\}\^2\$。请你写出理由，纠正这一批改误区，并总结“重叠面积与组合体表面积大小”的反向规律/g,
    '某同学计算出拼法二和拼法三的表面积均为 $104\\text{ cm}^2$。请通过严谨计算判断该结论是否正确，并给出理由，总结“重叠面积与组合体表面积大小”的反向规律');
  res = res.replace(/In class, Sophia's school teacher marked both Config B and Config C as \$104\\text\{ cm\}\^2\$\. Provide mathematical proof correcting this marking slip, and state the general inverse rule connecting overlap area and exposed surface area/gi,
    'A student calculated that both Configuration B and Configuration C yield a surface area of $104\\text{ cm}^2$. Determine whether this conclusion is correct through rigorous calculation, provide your reasoning, and state the general inverse law between overlap area and resulting surface area');

  // WS10 Q17(1)
  res = res.replace(/请运用课堂上的“花钱与收钱”通俗思维模型，直接解释为什么/g, '请结合生活实际中数量增减的代数逻辑，解释为什么');
  res = res.replace(/Use the intuitive "spending \/ receiving money" analogy to explain why/gi, 'Explain algebraically or logically why');

  // WS10 Q18(4)
  res = res.replace(/分类讨论求解未知数（严防半途而废）：/g, '分类讨论求解未知数：');
  res = res.replace(/Complete the branch analysis to find all valid single-digit solutions:/gi, 'Solve for the unknown digits through branch analysis:');

  // WS10 Q8(3)
  res = res.replace(/William 在计算 \$1\.5 \\times 36\$ 时由于点错小数点误算为 \$5\.4\$。请写出如何利用“估算检验法”一眼识破该错误：/g,
    '某同学在计算 $1.5 \\times 36$ 时误算为 $5.4$。请写出如何利用“估算检验法”判断该计算结果明显错误：');
  res = res.replace(/When calculating \$1\.5 \\times 36\$, a student placed the decimal point incorrectly and wrote \$5\.4\$\. Explain how mental estimation catches this error instantly:/gi,
    'A student mistakenly calculated $1.5 \\times 36 = 5.4$. Explain how to verify that this result is incorrect using estimation:');

  // Student Names replacement
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
    res = res.replace(/小明 在草稿纸上[^，。；]*[，。；]/g, '');
    res = res.replace(/小华 在做[^，。；]*[，。；]/g, '');
    res = res.replace(/小明 在计算/g, '某同学在计算');
    res = res.replace(/小华 在计算/g, '某同学在计算');
    res = res.replace(/小明在计算/g, '某同学在计算');
    res = res.replace(/小华在计算/g, '某同学在计算');
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
    res = res.replace(/Student A wrote on scratch paper[^.;]*[.;]/gi, '');
    res = res.replace(/Student B wrote[^.;]*[.;]/gi, '');
  }

  // 8. Fix Titles and School Titles
  const title = lang === 'cn' ? meta.title_cn : meta.title_en;
  const time = lang === 'cn' ? meta.time_cn : meta.time_en;
  
  res = res.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  res = res.replace(/<div class="school-title">[\s\S]*?<\/div>/, `<div class="school-title">${lang === 'cn' ? '中小学数学核心素养与思维能力拓展系列 · 强化检测卷' : 'Middle School Mathematics Comprehensive Practice Series'}</div>`);
  res = res.replace(/<div class="paper-title">[\s\S]*?<\/div>/, `<div class="paper-title">${title}</div>`);

  // 9. Standard clean .meta-box
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

  res = removeElementByClass(res, 'meta-box');
  res = res.replace(/(<div class="paper-title">[\s\S]*?<\/div>)/, `$1\n      ${lang === 'cn' ? cleanMetaBoxCn : cleanMetaBoxEn}`);

  // 10. Update Print button text
  res = res.replace(/<button class="no-print" onclick="window\.print\(\)">[\s\S]*?<\/button>/, `<button class="no-print" onclick="window.print()">🖨️ ${lang === 'cn' ? '打印纯净版试卷 / 另存为 PDF' : 'Print Clean Exam / Save as PDF'}</button>`);

  // 11. Ensure Answer Key Box starts on a clean page
  res = res.replace(/\.answer-key-box\s*\{/g, `.answer-key-box { page-break-before: always; `);
  res = res.replace(/\.answer-key-section\s*\{/g, `.answer-key-section { page-break-before: always; `);

  // 12. Clean up answer key title and text
  res = res.replace(/（教师批改与家长备课专用）/g, '（纯净教师版）');
  res = res.replace(/（教师批改参考）/g, '（纯净教师版）');
  res = res.replace(/（供批改与反思）/g, '（纯净教师版）');
  res = res.replace(/\(For Parent & Educator Reference\)/gi, '(Teacher Reference)');
  res = res.replace(/\(For Parent Reference\)/gi, '(Teacher Reference)');
  res = res.replace(/\(For Teacher Reference\)/gi, '(Teacher Reference)');

  return res;
}

// Custom cleaner for WS04 (Flashcards to clean exam)
function cleanWS04(html, lang, meta) {
  let res = cleanCommon(html, lang, meta);
  
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

  res = removeElementByClass(res, 'card-mnemonic');
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

  res = res.replace(/(<\/div>\s*<script>)/, answerKeyHtml + '\n  $1');
  return res;
}

// Generate all 20 clean worksheets
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

console.log('\n--- Running Rigorous KaTeX Verification on Clean Worksheets ---');
let totalKaTeXErrors = 0;
const cleanFiles = fs.readdirSync(CLEAN_DIR).filter(f => f.endsWith('.html'));

cleanFiles.forEach(file => {
  const filePath = path.join(CLEAN_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const bodyMatch = content.match(/<body[\s\S]*?<\/body>/i);
  const body = bodyMatch ? bodyMatch[0] : content;

  let i = 0;
  while (i < body.length) {
    if (body.slice(i, i + 2) === '$$') {
      let end = body.indexOf('$$', i + 2);
      if (end !== -1) {
        let math = body.slice(i + 2, end);
        try {
          katex.renderToString(math, { displayMode: true, throwOnError: true });
        } catch (e) {
          totalKaTeXErrors++;
          console.error(`[KATEX ERROR] in ${file}: $$${math}$$ -> ${e.message}`);
        }
        i = end + 2;
        continue;
      }
    } else if (body[i] === '$' && body[i - 1] !== '\\') {
      let end = body.indexOf('$', i + 1);
      while (end !== -1 && body[end - 1] === '\\') {
        end = body.indexOf('$', end + 1);
      }
      if (end !== -1) {
        let math = body.slice(i + 1, end);
        try {
          katex.renderToString(math, { displayMode: false, throwOnError: true });
        } catch (e) {
          totalKaTeXErrors++;
          console.error(`[KATEX ERROR] in ${file}: $${math}$ -> ${e.message}`);
        }
        i = end + 1;
        continue;
      }
    }
    i++;
  }
});

if (totalKaTeXErrors > 0) {
  console.error(`\nFAILED: Found ${totalKaTeXErrors} KaTeX errors in clean worksheets!`);
  process.exit(1);
} else {
  console.log('SUCCESS: All 20 clean worksheets passed KaTeX validation with 0 errors!\n');
}
