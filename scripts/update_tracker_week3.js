const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');
const trackerData = require(dataPath);

// 1. Update meta
trackerData.meta.semesterProgress = "开学第3周（已完成秋季4次系统课）";
trackerData.meta.asOfDate = "2026年9月21日";
trackerData.meta.curricula[0].focus = "第1章《数的整除》全章学完结课；第2章《分数》全面展开：分数的概念、假带互化、通分约分、四则混合运算与裂项求和";
trackerData.meta.curricula[1].focus = "Ch01-03 Real Numbers, Primes, HCF & LCM; Ch08 Scientific Notation & Powers; Ch09 Fractions Operations; 3D Solids & Surface Area";
trackerData.meta.curricula[2].focus = "维度进率（长度、面积、体积换算与科学记数法估算）、长正方体拼接表面积扣减与堆叠极值比较、裂项相消求和、短除法性质 a×b=GCD×LCM";

// 2. Update students
trackerData.students.sophia.totalLessons = 25;
trackerData.students.sophia.breakdown = "袋鼠C 4节 + 英数G5+AMC8 7节 + G6暑期 10节 + G6秋季 4节 = 累计25节";
trackerData.students.sophia.currentAccuracy = "82% ~ 88%";

// Check if G6秋3 and G6秋4 are already in Sophia's trend
const sLabels = trackerData.students.sophia.trend.map(t => t.label);
if (!sLabels.includes("G6秋3")) {
  trackerData.students.sophia.trend.push({
    label: "G6秋3",
    date: "09/19",
    score: 85,
    stage: "G6秋季"
  });
}
if (!sLabels.includes("G6秋4")) {
  trackerData.students.sophia.trend.push({
    label: "G6秋4",
    date: "09/20",
    score: 88,
    stage: "G6秋季"
  });
}

trackerData.students.william.totalLessons = 19;
trackerData.students.william.breakdown = "袋鼠C 4节 + 英数G5 1节 + G6暑期 10节 + G6秋季 4节 = 累计19节";
trackerData.students.william.currentAccuracy = "72% ~ 78%";
delete trackerData.students.william.identityNote;

// Check if G6秋3 and G6秋4 are already in William's trend
const wLabels = trackerData.students.william.trend.map(t => t.label);
if (!wLabels.includes("G6秋3")) {
  trackerData.students.william.trend.push({
    label: "G6秋3",
    date: "09/19",
    score: 74,
    stage: "G6秋季"
  });
}
if (!wLabels.includes("G6秋4")) {
  trackerData.students.william.trend.push({
    label: "G6秋4",
    date: "09/20",
    score: 78,
    stage: "G6秋季"
  });
}

// 3. William calibrated mastery across 36 knowledge nodes
const williamMasteredIds = new Set([
  'g3_01', 'g3_02', 'g4_03', 'g4_04', 'g5_05', 'g5_07',
  'div_01', 'div_03', 'div_04', 'div_05', 'power_05', 'geom_01',
  'adv_01', 'adv_02'
]);

const williamProficientIds = new Set([
  'g3_03', 'g5_01', 'g5_06', 'frac_01', 'power_04', 'frac_02',
  'geom_02', 'geom_03'
]);

// Sophia updates: geom_02 and g5_06 to proficient
trackerData.knowledgeNodes.forEach(n => {
  // William calibration
  if (williamMasteredIds.has(n.id)) {
    n.williamMastery = 'mastered';
    if (n.williamScore < 76) n.williamScore = 78;
  } else if (williamProficientIds.has(n.id)) {
    n.williamMastery = 'proficient';
    if (n.williamScore < 65) n.williamScore = 66;
  } else {
    n.williamMastery = 'needs_work';
  }

  // Sophia calibration
  if (n.id === 'g5_06') {
    n.sophiaMastery = 'proficient';
    n.sophiaScore = 76;
    n.sophiaNote = "异分母加减通分规律已掌握，需在多项连续通分与大题综合应用中保持分子分母同步扩倍习惯。";
  }
  if (n.id === 'geom_02') {
    n.sophiaMastery = 'proficient';
    n.sophiaScore = 78;
    n.sophiaNote = "面积维度概念清晰，已掌握通过正方形面积求边长；长正方体拼接扣减重叠面直觉敏锐。";
  }
});

// Update William specific notes
const wNodeNotes = {
  g3_01: "多位数竖式加减法垂直对齐标准规范，连续进退位熟练稳定。",
  g3_02: "乘法口诀熟练，带余除法本质清晰，商与余数书写规范。",
  g4_03: "假分数与带分数互化原理理解透彻，能准确进行改写。",
  g4_04: "深刻理解分数基本性质，商不变原理运用熟练。",
  g5_05: "最简分数概念清楚，能熟练通过逐步除以公因数或求GCD约分至最简。",
  g5_07: "生活化'花钱法'比分数大小掌握透彻，反应敏捷准确。",
  div_01: "因数与倍数列举完备规范，能避免遗漏两端数对。",
  div_03: "2、3、5 整除特征判定熟练，能灵活运用各数位之和与末位数法则。",
  div_04: "质因数分解短除法格式规范，坚持每次试除质数除数，分解完全。",
  div_05: "最大公因数与最小公倍数求法扎实，理解 a×b = GCD×LCM 性质并能解方程反求未知数。",
  power_05: "奇数偶数同余与运算性质掌握牢固，能准确推导代数式奇偶性。",
  geom_01: "深刻理解周长是一维线段长度的物理本质，周长公式运用准确规范。",
  adv_01: "折纸 2ⁿ 幂次增长模型直觉优异，动手推导敏捷自信。",
  adv_02: "24点因数重组与逆向拆分运算能力强，反应敏捷。"
};
trackerData.knowledgeNodes.forEach(n => {
  if (wNodeNotes[n.id]) {
    n.williamNote = wNodeNotes[n.id];
  }
});

// 4. Update actionPlans
trackerData.actionPlans.currentPhaseSummary = "目前处于小学六年级第一学期开学第3周结束阶段（已完成秋季4次系统授课）。体制内沪教版第一章《数的整除》已全章结课并完成压轴攻坚，第二章《分数》全面展开（通分、假带互化、四则混合、裂项初步）；立体几何板块已完成长正方体拼接表面积扣减与维度进率推导。两人的关键攻坚战是'分数的严谨运算与规范书写'、'维度单位换算的乘方理解'，以及 William '乘方与乘法本质辨析和小数竖式补漏'。";

trackerData.actionPlans.roadmap = [
  {
    week: "第1-2周（已完成）",
    status: "completed",
    shanghaiTopic: "第1章《数的整除》全部内容（素数合数、整除判定、短除法、HCF/LCM）",
    englishTopic: "Ch01-03 Real Numbers & Primes, HCF, LCM",
    schoolBasedTopic: "折纸探索2ⁿ幂次增长、六位数整除压轴(91X93Y)同余法",
    assessment: "Sophia 80-85%（快但粗心，有概念混淆）；William 70-75%（参与意愿高但有严重断层，压轴题遗漏条件）"
  },
  {
    week: "第3周（已完成·秋季第3-4课）",
    status: "completed",
    shanghaiTopic: "第2章《分数》2.1-2.4节（分数意义、花钱法比大小、通分、异分母加减法、假带分数互化、分数乘法）",
    englishTopic: "Ch09 Fractions Operations (Multiplication & Division, Reciprocals), 3D Solids & Surface Area",
    schoolBasedTopic: "维度进率（长度、面积、体积换算与科学记数法估算）、长方体三种拼法表面积极值比较、裂项相消求和、短除法性质 a×b=GCD×LCM",
    assessment: "Sophia 85-88%（空间感知与裂项领悟快，仍需防范漏写单位与跳步）；William 74-78%（立体拼搭直觉良好、短除法规范，需巩固四五年级小数与单位规范）"
  },
  {
    week: "第4-5周（即将进行·攻坚强化期）",
    status: "current",
    shanghaiTopic: "第2章 2.5-2.6 分小互化与分数工程/行程应用题 → 第3章《比和比例》",
    englishTopic: "Ch10-14 Percentages, Discounts & Simple Interest; Ch15-17 Ratios",
    schoolBasedTopic: "双语比例方程建模、单利息公式应用、复合多步应用题分步解析",
    assessment: "核心目标：强化代数等式变形规范，提升两人的独立审题与严谨推导书写能力"
  },
  {
    week: "第6-8周（后续规划·期中冲刺）",
    status: "upcoming",
    shanghaiTopic: "第3章比例性质与第4章《圆和扇形》初步",
    englishTopic: "Comprehensive Review & Mid-term Preparation",
    schoolBasedTopic: "初中预备班期中综合压轴模考、竞赛思维衔接",
    assessment: "阶段性能力达标考核与知识图谱全绿验收"
  }
];

// Write back formatted
const fileContent = `/**
 * Sophia & William 专属数学知识图谱追踪网站核心数据库
 * 完整同步最新重建学生档案（Sophia 25节 / William 19节）
 * 与53道结构化高危错题库（Sophia 33题 / William 20题，含极高危/高危/中危分级）
 * 全面整合 4B练习册、5A练习册、5B练习册 及 6A校本教材全景审计资产
 * 更新时间: ${new Date().toISOString()}
 */

const trackerData = ${JSON.stringify(trackerData, null, 2)};

if (typeof window !== "undefined") {
  window.trackerData = trackerData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = trackerData;
}
`;

fs.writeFileSync(dataPath, fileContent, 'utf8');
console.log("Successfully updated trackerData!");
