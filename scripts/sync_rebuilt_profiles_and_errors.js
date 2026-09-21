const fs = require('fs');
const path = require('path');

// 1. Read existing data.js
const dataPath = path.resolve(__dirname, '../js/data.js');
const existing = require(dataPath);

// 2. Read error files
const jsonErrorsRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../Old_Teacher/学生档案/错题库/错题总览与干预卡.json'), 'utf8')).errors;

// Map jsonErrorsRaw to our target schema
const errorBank = jsonErrorsRaw.map(err => {
  // Map domain to our knowledgeDomains IDs
  let domain = "foundations_arithmetic";
  if (err.domain === "number_theory" || err.domain === "powers_algebra") domain = "number_theory_powers";
  else if (err.domain === "fractions") domain = "fractions";
  else if (err.domain === "decimals_percentages") domain = "decimals_percentages";
  else if (err.domain === "geometry_applications") domain = "geometry_applications";

  // Map to knowledgeNode ID
  let nodeId = "g3_01";
  switch (err.id) {
    case "ERR-SOP-01": nodeId = "div_06"; break;
    case "ERR-SOP-02": nodeId = "div_04"; break;
    case "ERR-SOP-03": nodeId = "div_01"; break;
    case "ERR-SOP-04": nodeId = "adv_01"; break;
    case "ERR-SOP-05": nodeId = "g4_02"; break;
    case "ERR-SOP-06": nodeId = "g5_06"; break;
    case "ERR-SOP-07": nodeId = "g5_04"; break;
    case "ERR-SOP-08": nodeId = "g3_03"; break;
    case "ERR-SOP-09": nodeId = "g4_03"; break;
    case "ERR-SOP-10": nodeId = "adv_01"; break;

    case "ERR-WIL-01": nodeId = "power_01"; break;
    case "ERR-WIL-02": nodeId = "power_02"; break;
    case "ERR-WIL-03": nodeId = "g4_01"; break;
    case "ERR-WIL-04": nodeId = "g4_02"; break;
    case "ERR-WIL-05": nodeId = "g5_02"; break;
    case "ERR-WIL-06": nodeId = "g3_03"; break;
    case "ERR-WIL-07": nodeId = "div_01"; break;
    case "ERR-WIL-08": nodeId = "div_02"; break;
    case "ERR-WIL-09": nodeId = "div_05"; break;
    case "ERR-WIL-10": nodeId = "g4_03"; break;
    case "ERR-WIL-11": nodeId = "frac_01"; break;
    case "ERR-WIL-12": nodeId = "g3_02"; break;
    case "ERR-WIL-13": nodeId = "adv_01"; break;
    case "ERR-WIL-14": nodeId = "div_07"; break;
    case "ERR-WIL-15": nodeId = "word_01"; break;
  }

  return {
    id: err.id,
    student: err.student,
    nodeId: nodeId,
    domain: domain,
    category: err.category,
    severity: err.severity, // critical | high | medium
    source: err.source,
    topic: err.topic,
    title: err.title,
    question: err.question,
    originalQuestion: err.question,
    studentAnswer: err.studentAnswer,
    rootCause: err.rootCause,
    standardSolution: err.standardSolution,
    mnemonic: err.mnemonic,
    teacherTip: err.mnemonic,
    status: err.status || "in_progress"
  };
});

// 3. Add the 4 additional rich error cards
errorBank.push({
  id: "ERR-SOP-11",
  student: "Sophia",
  nodeId: "g3_02",
  domain: "geometry_applications",
  category: "审题疏漏类",
  severity: "medium",
  source: "袋鼠数学C第3节 (2026-03-23)",
  topic: "周期循环问题与播放起点定位",
  title: "周期循环问题忽略播放起始点",
  question: "播放器循环播放5首歌曲A, B, C, D, E。当前正在播放C，问播放完第28首后正在播放哪一首？",
  originalQuestion: "播放器循环播放5首歌曲A, B, C, D, E。当前正在播放C，问播放完第28首后正在播放哪一首？",
  studentAnswer: "求出 28÷5=5...3 后，直接从歌单第1首A开始数3首答C（漏看起始播放位置C）。",
  rootCause: "周期余数模型死记硬背，做题前未在草稿圈出真实起点，忽视题目已知偏移量。",
  standardSolution: "当前正在播放C（第3首），后续播放28首即 3+28=31 首；31÷5=6...1，对应第1首歌A（或从C后第1首D数起：28÷5=5...3，第1首D、第2首E、第3首A）。",
  mnemonic: "周期问题定起点，余数数序莫抢先；当前哪首做基准，顺次往后数几位！",
  teacherTip: "周期问题定起点，余数数序莫抢先；当前哪首做基准，顺次往后数几位！",
  status: "mastered"
});

errorBank.push({
  id: "ERR-SOP-12",
  student: "Sophia",
  nodeId: "g3_03",
  domain: "foundations_arithmetic",
  category: "符号与规则类",
  severity: "medium",
  source: "英数G5+AMC8第6节 (2026-06-08)",
  topic: "有理数正负数运算与新定义运算",
  title: "嵌套新定义运算漏写负号",
  question: "定义新运算 a⊕b = 2a + 3b，求 3 ⊕ (-1) 与 2 × (-1) 的值。",
  originalQuestion: "定义新运算 a⊕b = 2a + 3b，求 3 ⊕ (-1) 与 2 × (-1) 的值。",
  studentAnswer: "在多层括号展开计算中，将 2×(-1) 算成 2，漏写负号导致最终结果符号反转。",
  rootCause: "对负数乘法“异号得负”法则心算不严密，在复合嵌套式子中括号脱漏。",
  standardSolution: "正负相乘必得负：2 × (-1) = -2；代入新运算得 2(3) + 3(-1) = 6 - 3 = 3。",
  mnemonic: "同号相乘得正数，异号相乘必带负；负数带进括号戴，脱掉括号看清楚！",
  teacherTip: "同号相乘得正数，异号相乘必带负；负数带进括号戴，脱掉括号看清楚！",
  status: "mastered"
});

errorBank.push({
  id: "ERR-WIL-16",
  student: "William",
  nodeId: "g5_03",
  domain: "decimals_percentages",
  category: "规则遗忘类",
  severity: "high",
  source: "英数G6暑期第7、8节 (2026-07-08/09)",
  topic: "有效数字规则与四舍五入近似值",
  title: "中间0不算有效数字 & 四舍五入直接抄原数",
  question: "(1) 指出 5.208 有几位有效数字；(2) 将 183.9591 精确到整数（或个位）。",
  originalQuestion: "(1) 指出 5.208 有几位有效数字；(2) 将 183.9591 精确到整数（或个位）。",
  studentAnswer: "(1) 认为 5.208 只有 3 位（跳过中间的 0）；(2) 直接抄写 183（忽略小数十分位 9 的进位）。",
  rootCause: "有效数字规则“两非零之间的零全部有效”未内化；四舍五入未形成画看线（看后一位）的条件反射。",
  standardSolution: "(1) 5.208 中从第一个非零数字 5 起所有数字均有效，共 4 位有效数字 (5, 2, 0, 8)；(2) 精确到个位看十分位 9，满五进一，183 + 1 = 184。",
  mnemonic: "首位非零开始数，中间零和末尾零都算数；四舍五入看后位，满五进一别忘了！",
  teacherTip: "首位非零开始数，中间零和末尾零都算数；四舍五入看后位，满五进一别忘了！",
  status: "in_progress"
});

errorBank.push({
  id: "ERR-WIL-17",
  student: "William",
  nodeId: "div_04",
  domain: "number_theory_powers",
  category: "方法不规范类",
  severity: "medium",
  source: "英数G6暑期第10节 (2026-07-11)",
  topic: "短除法质因数分解试商规范",
  title: "短除法跳过质数直接试除合数6",
  question: "用短除法对 72 进行质因数分解。",
  originalQuestion: "用短除法对 72 进行质因数分解。",
  studentAnswer: "第一步短除号外直接写 6，试除合数导致质因数不纯粹。",
  rootCause: "急于求快，混淆了“短除法求最大公因数”与“质因数分解”的除数限定（分解质因数必须且只能用质数）。",
  standardSolution: "分解质因数左侧除数必须为质数（从小到大试除：2, 3, 5, 7...）：72÷2=36, 36÷2=18, 18÷2=9, 9÷3=3，得到 72 = 2³ × 3²。",
  mnemonic: "质因数分解用短除，左边除数必须质；二三五七排队试，合数决不上除台！",
  teacherTip: "质因数分解用短除，左边除数必须质；二三五七排队试，合数决不上除台！",
  status: "mastered"
});

// Sort errorBank by id
errorBank.sort((a, b) => a.id.localeCompare(b.id));

// 4. Update Student Profiles with Rebuilt Data
existing.students.sophia = {
  name: "Sophia",
  grade: "6年级（初中预备班）· 协和双语虹桥融合班",
  initialDate: "2026年3月",
  totalLessons: 25,
  breakdown: "袋鼠C 4节 + 英数G5+AMC8 7节 + G6暑期 10节 + G6秋季 4节 = 累计25节",
  currentAccuracy: "80% ~ 85%",
  summerAverage: "70.5%",
  trend: [
    { label: "袋鼠1", date: "03/16", score: 70, stage: "袋鼠C" },
    { label: "袋鼠2", date: "03/20", score: 70, stage: "袋鼠C" },
    { label: "袋鼠3", date: "03/23", score: 70, stage: "袋鼠C" },
    { label: "袋鼠4", date: "03/27", score: 70, stage: "袋鼠C" },
    { label: "G5拔1", date: "04/13", score: 75, stage: "G5拔高" },
    { label: "G5拔2", date: "04/20", score: 70, stage: "G5拔高" },
    { label: "G5拔3", date: "04/27", score: 75, stage: "G5拔高" },
    { label: "G5拔4", date: "05/11", score: 70, stage: "G5拔高" },
    { label: "G5拔5", date: "05/25", score: 70, stage: "G5拔高" },
    { label: "G5拔6", date: "06/08", score: 70, stage: "G5拔高" },
    { label: "G5拔7", date: "06/15", score: 75, stage: "G5拔高" },
    { label: "G6暑1", date: "07/02", score: 75, stage: "G6暑期" },
    { label: "G6暑2", date: "07/03", score: 75, stage: "G6暑期" },
    { label: "G6暑3", date: "07/04", score: 70, stage: "G6暑期" },
    { label: "G6暑4", date: "07/05", score: 70, stage: "G6暑期" },
    { label: "G6暑5", date: "07/06", score: 70, stage: "G6暑期" },
    { label: "G6暑6", date: "07/07", score: 70, stage: "G6暑期" },
    { label: "G6暑7", date: "07/08", score: 70, stage: "G6暑期" },
    { label: "G6暑8", date: "07/09", score: 80, stage: "G6暑期" },
    { label: "G6暑9", date: "07/10", score: 65, stage: "G6暑期" },
    { label: "G6暑10", date: "07/11", score: 60, stage: "G6暑期" },
    { label: "G6秋1", date: "09/12", score: 85, stage: "G6秋季" },
    { label: "G6秋2", date: "09/16", score: 80, stage: "G6秋季" }
  ],
  radar: {
    fluency: 88,
    rigor: 62,
    modeling: 85,
    process: 68,
    focus: 82
  },
  strengths: [
    "敏捷与高直觉：解题速度极快，对图形空间（展开图、表面积、折纸模型）领悟力拔群",
    "生活化类比理解力强：如'花钱法'比分数大小一点即通，数感好",
    "短除法质因数分解基本功扎实：60和105的GCD熟练算出15",
    "前半堂课投入度极高，敢于主动表达观点与现场演算"
  ],
  weaknesses: [
    "通分商不变原理不牢：通分时分母乘倍数、分子忘记同步乘（最顽固问题）",
    "算术低级粗心失分严重：出现 18+5=90、同分母加法分母乱相加 3/6+5/6=8/12",
    "乘方与乘法概念偶有混淆：误把 6 认定为完全平方数（2×3=6）、面积为3求边长写成 3÷2",
    "解题习惯跳步：习惯直接报最终答案不写草稿推导，导致检查无从下手",
    "注意力抗干扰待加强：后半节课易受同伴疲倦与小动作带动而分散注意力"
  ]
};

existing.students.william = {
  name: "William",
  grade: "6年级（初中预备班）· 协和双语虹桥融合班",
  initialDate: "2026年3月",
  totalLessons: 19,
  breakdown: "袋鼠C 4节 + 英数G5 1节 + G6暑期 10节 + G6秋季 4节 = 累计19节",
  currentAccuracy: "72% ~ 78%",
  summerAverage: "49.0%",
  trend: [
    { label: "袋鼠1", date: "03/16", score: 50, stage: "袋鼠C" },
    { label: "袋鼠2", date: "03/20", score: 50, stage: "袋鼠C" },
    { label: "袋鼠3", date: "03/23", score: 50, stage: "袋鼠C" },
    { label: "袋鼠4", date: "03/27", score: 50, stage: "袋鼠C" },
    { label: "G5基1", date: "03/30", score: 80, stage: "G5强化" },
    { label: "G6暑1", date: "07/02", score: 65, stage: "G6暑期" },
    { label: "G6暑2", date: "07/03", score: 50, stage: "G6暑期" },
    { label: "G6暑3", date: "07/04", score: 55, stage: "G6暑期" },
    { label: "G6暑4", date: "07/05", score: 50, stage: "G6暑期" },
    { label: "G6暑5", date: "07/06", score: 65, stage: "G6暑期" },
    { label: "G6暑6", date: "07/07", score: 60, stage: "G6暑期" },
    { label: "G6暑7", date: "07/08", score: 40, stage: "G6暑期" },
    { label: "G6暑8", date: "07/09", score: 30, stage: "G6暑期" },
    { label: "G6暑9", date: "07/10", score: 35, stage: "G6暑期" },
    { label: "G6暑10", date: "07/11", score: 40, stage: "G6暑期" },
    { label: "G6秋1", date: "09/12", score: 75, stage: "G6秋季" },
    { label: "G6秋2", date: "09/16", score: 70, stage: "G6秋季" }
  ],
  radar: {
    fluency: 48,
    rigor: 45,
    modeling: 55,
    process: 42,
    focus: 48
  },
  strengths: [
    "动手实操悟性高：折纸 2ⁿ 幂次增长敏捷推算至 512，短除法求GCD熟练规范",
    "前半节课堂参与意愿强：主动上台板演，鼓励下表现积极自信",
    "数位位值判断敏捷：在数位读写与位值大小判断上反应快",
    "秋季学期大幅提振：从暑期后半段低谷（30%~40%）成功恢复至 70%~75%"
  ],
  weaknesses: [
    "乘方本质严重混淆（第一顽疾）：反复将指数当乘数（1³=3, 2³=6, 2⁴=8, 3⁴=18, 10⁴×10⁵=10²⁰）",
    "四五年级基础严重断层：小数进位混乱 0.9+0.1=4.1、小数除法移位反向 5.4÷0.6=0.9、tens/tenths混淆",
    "分数与运算符号短路：分数除法当乘法 2/8=16、倒数法则只翻转不改乘号、比号当乘号 C:D=3:5 变形乱写",
    "审题闭环与大题逃避：六位数整除压轴题漏解X、行程应用题缺乏分步框架直接空题",
    "注意力后半程断崖下滑：35分钟后易走神（玩文具、发出声响），需'35-10-35'分段管控",
    "曾有依赖外部工具痕迹：作业曾借助豆包查答案（3³抄成33），需强制手写验算推导"
  ]
};

// 5. Update Knowledge Nodes with linked errorRefIds
const nodeErrorMap = {
  "g3_01": ["ERR-SOP-05"],
  "g3_02": ["ERR-SOP-11", "ERR-WIL-12"],
  "g3_03": ["ERR-SOP-05", "ERR-SOP-08", "ERR-SOP-12", "ERR-WIL-06"],
  "g4_01": ["ERR-WIL-03"],
  "g4_02": ["ERR-SOP-05", "ERR-WIL-04", "ERR-WIL-06"],
  "g5_01": ["ERR-SOP-07", "ERR-WIL-05"],
  "g5_02": ["ERR-WIL-05"],
  "g5_03": ["ERR-WIL-16"],
  "g5_04": ["ERR-SOP-07"],
  "g4_03": ["ERR-SOP-09", "ERR-WIL-10", "ERR-WIL-12"],
  "g4_04": ["ERR-SOP-06"],
  "g5_05": ["ERR-WIL-10"],
  "g5_06": ["ERR-SOP-06", "ERR-SOP-08", "ERR-SOP-09"],
  "g5_07": [],
  "frac_01": ["ERR-WIL-10", "ERR-WIL-11"],
  "div_01": ["ERR-SOP-03", "ERR-WIL-07"],
  "div_02": ["ERR-WIL-08"],
  "div_03": ["ERR-WIL-14"],
  "div_04": ["ERR-SOP-02", "ERR-WIL-17"],
  "div_05": ["ERR-WIL-09"],
  "div_06": ["ERR-SOP-01"],
  "div_07": ["ERR-WIL-14"],
  "power_01": ["ERR-WIL-01"],
  "power_02": ["ERR-WIL-02"],
  "power_03": [],
  "power_04": ["ERR-WIL-16"],
  "power_05": [],
  "frac_02": [],
  "frac_03": [],
  "geom_01": [],
  "geom_02": ["ERR-SOP-01"],
  "geom_03": [],
  "word_01": ["ERR-WIL-15"],
  "word_02": ["ERR-SOP-11", "ERR-WIL-14", "ERR-WIL-15"],
  "adv_01": ["ERR-SOP-04", "ERR-SOP-10", "ERR-SOP-12", "ERR-WIL-13"],
  "adv_02": []
};

existing.knowledgeNodes.forEach(n => {
  n.errorRefIds = nodeErrorMap[n.id] || [];
});

existing.errorBank = errorBank;

// Write back to js/data.js
const fileContent = `/**
 * Sophia & William 专属数学知识图谱追踪网站核心数据库
 * 完整同步最新重建学生档案（Sophia 23节 / William 17节）
 * 与29道结构化高危错题库（Sophia 12题 / William 17题，含极高危/高危/中危分级）
 * 更新时间: ${new Date().toISOString()}
 */

const trackerData = ${JSON.stringify(existing, null, 2)};

if (typeof window !== "undefined") {
  window.trackerData = trackerData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = trackerData;
}
`;

fs.writeFileSync(dataPath, fileContent, 'utf8');
console.log('Sync completed successfully!');
console.log('Error bank total count:', errorBank.length);
console.log('Sophia error count:', errorBank.filter(e => e.student === 'Sophia').length);
console.log('William error count:', errorBank.filter(e => e.student === 'William').length);
console.log('Critical severity count:', errorBank.filter(e => e.severity === 'critical').length);
console.log('High severity count:', errorBank.filter(e => e.severity === 'high').length);
console.log('Medium severity count:', errorBank.filter(e => e.severity === 'medium').length);
