/**
 * Sophia & William 专属数学知识图谱追踪网站核心数据库
 * 完整同步最新重建学生档案（Sophia 25节 / William 19节）
 * 与53道结构化高危错题库（Sophia 33题 / William 20题，含极高危/高危/中危分级）
 * 全面整合 4B练习册、5A练习册、5B练习册 及 6A校本教材全景审计资产
 * 更新时间: 2026-09-21T09:45:12.108Z
 */

const trackerData = {
  "meta": {
    "school": "上海协和双语学校（虹桥校区）",
    "track": "融合班 (Integrated / Bilingual Track)",
    "grade": "小学六年级（初中预备班）第一学期",
    "semesterProgress": "开学第3周（已完成秋季4次系统课）",
    "asOfDate": "2026年9月21日",
    "curricula": [
      {
        "id": "shanghai",
        "name": "体制内教材",
        "version": "上海教育出版社（沪教版）初中预备班/六年级第一学期",
        "focus": "第1章《数的整除》全章学完结课；第2章《分数》全面展开：分数的概念、假带互化、通分约分、四则混合运算与裂项求和"
      },
      {
        "id": "international",
        "name": "英数教材",
        "version": "《International Mathematics》G6 Preview Handout (Book A)",
        "focus": "Ch01-03 Real Numbers, Primes, HCF & LCM; Ch08 Scientific Notation & Powers; Ch09 Fractions Operations; 3D Solids & Surface Area"
      },
      {
        "id": "school_based",
        "name": "校本与思维拓展",
        "version": "协和双语融合班特色探究与思维拔高",
        "focus": "维度进率（长度、面积、体积换算与科学记数法估算）、长正方体拼接表面积扣减与堆叠极值比较、裂项相消求和、短除法性质 a×b=GCD×LCM"
      }
    ]
  },
  "students": {
    "sophia": {
      "name": "Sophia",
      "grade": "6年级（初中预备班）· 协和双语虹桥融合班",
      "initialDate": "2026年3月",
      "totalLessons": 25,
      "breakdown": "袋鼠C 4节 + 英数G5+AMC8 7节 + G6暑期 10节 + G6秋季 4节 = 累计25节",
      "currentAccuracy": "82% ~ 88%",
      "summerAverage": "70.5%",
      "trend": [
        {
          "label": "袋鼠1",
          "date": "03/16",
          "score": 70,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠2",
          "date": "03/20",
          "score": 70,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠3",
          "date": "03/23",
          "score": 70,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠4",
          "date": "03/27",
          "score": 70,
          "stage": "袋鼠C"
        },
        {
          "label": "G5拔1",
          "date": "04/13",
          "score": 75,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔2",
          "date": "04/20",
          "score": 70,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔3",
          "date": "04/27",
          "score": 75,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔4",
          "date": "05/11",
          "score": 70,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔5",
          "date": "05/25",
          "score": 70,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔6",
          "date": "06/08",
          "score": 70,
          "stage": "G5拔高"
        },
        {
          "label": "G5拔7",
          "date": "06/15",
          "score": 75,
          "stage": "G5拔高"
        },
        {
          "label": "G6暑1",
          "date": "07/02",
          "score": 75,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑2",
          "date": "07/03",
          "score": 75,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑3",
          "date": "07/04",
          "score": 70,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑4",
          "date": "07/05",
          "score": 70,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑5",
          "date": "07/06",
          "score": 70,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑6",
          "date": "07/07",
          "score": 70,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑7",
          "date": "07/08",
          "score": 70,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑8",
          "date": "07/09",
          "score": 80,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑9",
          "date": "07/10",
          "score": 65,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑10",
          "date": "07/11",
          "score": 60,
          "stage": "G6暑期"
        },
        {
          "label": "G6秋1",
          "date": "09/12",
          "score": 85,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋2",
          "date": "09/16",
          "score": 80,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋3",
          "date": "09/19",
          "score": 85,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋4",
          "date": "09/20",
          "score": 88,
          "stage": "G6秋季"
        }
      ],
      "radar": {
        "fluency": 88,
        "rigor": 62,
        "modeling": 85,
        "process": 68,
        "focus": 82
      },
      "strengths": [
        "敏捷与高直觉：解题速度极快，对图形空间（展开图、表面积、折纸模型）领悟力拔群",
        "生活化类比理解力强：如'花钱法'比分数大小一点即通，数感好",
        "短除法质因数分解基本功扎实：60和105的GCD熟练算出15",
        "前半堂课投入度极高，敢于主动表达观点与现场演算"
      ],
      "weaknesses": [
        "通分商不变原理不牢：通分时分母乘倍数、分子忘记同步乘（最顽固问题）",
        "算术低级粗心失分严重：出现 18+5=90、同分母加法分母乱相加 3/6+5/6=8/12",
        "乘方与乘法概念偶有混淆：误把 6 认定为完全平方数（2×3=6）、面积为3求边长写成 3÷2",
        "解题习惯跳步：习惯直接报最终答案不写草稿推导，导致检查无从下手",
        "注意力抗干扰待加强：后半节课易受同伴疲倦与小动作带动而分散注意力"
      ]
    },
    "william": {
      "name": "William",
      "grade": "6年级（初中预备班）· 协和双语虹桥融合班",
      "initialDate": "2026年3月",
      "totalLessons": 19,
      "breakdown": "袋鼠C 4节 + 英数G5 1节 + G6暑期 10节 + G6秋季 4节 = 累计19节",
      "currentAccuracy": "72% ~ 78%",
      "summerAverage": "49.0%",
      "trend": [
        {
          "label": "袋鼠1",
          "date": "03/16",
          "score": 50,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠2",
          "date": "03/20",
          "score": 50,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠3",
          "date": "03/23",
          "score": 50,
          "stage": "袋鼠C"
        },
        {
          "label": "袋鼠4",
          "date": "03/27",
          "score": 50,
          "stage": "袋鼠C"
        },
        {
          "label": "G5基1",
          "date": "03/30",
          "score": 80,
          "stage": "G5强化"
        },
        {
          "label": "G6暑1",
          "date": "07/02",
          "score": 65,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑2",
          "date": "07/03",
          "score": 50,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑3",
          "date": "07/04",
          "score": 55,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑4",
          "date": "07/05",
          "score": 50,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑5",
          "date": "07/06",
          "score": 65,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑6",
          "date": "07/07",
          "score": 60,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑7",
          "date": "07/08",
          "score": 40,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑8",
          "date": "07/09",
          "score": 30,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑9",
          "date": "07/10",
          "score": 35,
          "stage": "G6暑期"
        },
        {
          "label": "G6暑10",
          "date": "07/11",
          "score": 40,
          "stage": "G6暑期"
        },
        {
          "label": "G6秋1",
          "date": "09/12",
          "score": 75,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋2",
          "date": "09/16",
          "score": 70,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋3",
          "date": "09/19",
          "score": 74,
          "stage": "G6秋季"
        },
        {
          "label": "G6秋4",
          "date": "09/20",
          "score": 78,
          "stage": "G6秋季"
        }
      ],
      "radar": {
        "fluency": 48,
        "rigor": 45,
        "modeling": 55,
        "process": 42,
        "focus": 48
      },
      "strengths": [
        "动手实操悟性高：折纸 2ⁿ 幂次增长敏捷推算至 512，短除法求GCD熟练规范",
        "前半节课堂参与意愿强：主动上台板演，鼓励下表现积极自信",
        "数位位值判断敏捷：在数位读写与位值大小判断上反应快",
        "秋季学期大幅提振：从暑期后半段低谷（30%~40%）成功恢复至 70%~75%"
      ],
      "weaknesses": [
        "乘方本质严重混淆（第一顽疾）：反复将指数当乘数（1³=3, 2³=6, 2⁴=8, 3⁴=18, 10⁴×10⁵=10²⁰）",
        "四五年级基础严重断层：小数进位混乱 0.9+0.1=4.1、小数除法移位反向 5.4÷0.6=0.9、tens/tenths混淆",
        "分数与运算符号短路：分数除法当乘法 2/8=16、倒数法则只翻转不改乘号、比号当乘号 C:D=3:5 变形乱写",
        "审题闭环与大题逃避：六位数整除压轴题漏解X、行程应用题缺乏分步框架直接空题",
        "注意力后半程断崖下滑：35分钟后易走神（玩文具、发出声响），需'35-10-35'分段管控",
        "曾有依赖外部工具痕迹：作业曾借助豆包查答案（3³抄成33），需强制手写验算推导"
      ]
    }
  },
  "mutualAnalysis": {
    "title": "双人同桌学习动力学与互补互抑分析",
    "dynamics": [
      {
        "tag": "思维速度与归纳互补",
        "desc": "Sophia思维敏锐，理解快、能快速抓住题意，但欠缺从特例到通则的严密归纳；William速度较慢，但愿意跟随动手尝试。前半节课两人形成良性竞合，思维碰撞有助于活跃课堂氛围。"
      },
      {
        "tag": "后半程专注力负向溢出",
        "desc": "William在课堂第45分钟后注意力常呈断崖式下滑（吃东西、玩文具、闲聊乐理），直接导致Sophia分心，Sophia秋季第2节后半段正确率明显受到波动（由前半节85%滑落至80%并抱怨'有点困'）。"
      },
      {
        "tag": "解题习惯共同病灶",
        "desc": "两人均存在严重'直接报答案、不愿写推导步骤'的毛病，导致无法在计算过程中自我排查。且两人在乘方与乘法、分数通分同步性上具有相似的模糊区，极易互相强化错误认知。"
      }
    ],
    "recommendations": [
      "前半节课（0-40分）：集中攻坚新概念、压轴高难推导，充分调动两人积极性；",
      "中场休息（40-45分）：强制起立活动、眼保健操与深呼吸，切忌继续做题；",
      "后半节课（45-80分）：实行'分层任务+动手操作'——给Sophia安排高阶归纳与竞赛变式题，给William安排小数竖式纠错与具象卡片实操，避免注意力交叉感染；",
      "解题规程：推行'无过程不给分'制度，每题强制至少书写3步标准演算。"
    ]
  },
  "knowledgeDomains": [
    {
      "id": "foundations_arithmetic",
      "name": "基础数感与四则运算",
      "icon": "🧱",
      "color": "#0284c7"
    },
    {
      "id": "decimals_percentages",
      "name": "小数概念与数位百分数",
      "icon": "🔢",
      "color": "#0ea5e9"
    },
    {
      "id": "fractions",
      "name": "分数意义与通分运算",
      "icon": "➗",
      "color": "#ec4899"
    },
    {
      "id": "number_theory_powers",
      "name": "因数倍数与方幂代数",
      "icon": "⚡",
      "color": "#8b5cf6"
    },
    {
      "id": "geometry_applications",
      "name": "几何度量与应用建模",
      "icon": "📐",
      "color": "#10b981"
    }
  ],
  "knowledgeNodes": [
    {
      "id": "g3_01",
      "domain": "foundations_arithmetic",
      "stage": "Stage 1 (G3-G4)",
      "title": "万以内加减法与竖式对齐",
      "bilingual": "Multi-digit Addition & Subtraction Alignment",
      "shanghaiChapter": "沪教版三年级上册 万以内加减法",
      "englishChapter": "International Maths G3 Addition & Subtraction",
      "terms": [
        "Carry Over (进位)",
        "Borrowing (退位)",
        "Column Alignment (竖式对齐)"
      ],
      "description": "多位数竖式加减法规则、数位精准垂直对齐、连续进位与退位借一当十运算，建立严密数位感。",
      "prerequisites": [],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "进退位熟练，计算速度快，但偶有草稿字迹潦草跳步导致抄写数字看错。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "多位数竖式加减法垂直对齐标准规范，连续进退位熟练稳定。",
      "errorRefIds": [
        "ERR-SOP-05"
      ]
    },
    {
      "id": "g3_02",
      "domain": "foundations_arithmetic",
      "stage": "Stage 1 (G3-G4)",
      "title": "乘法口诀与带余除法本质",
      "bilingual": "Multiplication Table & Division with Remainder",
      "shanghaiChapter": "沪教版三年级 表内乘除法与有余数除法",
      "englishChapter": "International Maths G3 Division with Remainder",
      "terms": [
        "Quotient (商)",
        "Remainder (余数)",
        "Divisor (除数)",
        "Dividend (被除数)"
      ],
      "description": "九九乘法口诀逆用、带余除法本质（被除数=商×除数+余数，余数必小于除数），披萨切片与份数实操。",
      "prerequisites": [
        "g3_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 95,
      "sophiaNote": "表内乘除极其熟练，能迅速根据余数范围判断除数的最小可能值。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "乘法口诀熟练，带余除法本质清晰，商与余数书写规范。",
      "errorRefIds": [
        "ERR-SOP-11",
        "ERR-WIL-12"
      ]
    },
    {
      "id": "g3_03",
      "domain": "foundations_arithmetic",
      "stage": "Stage 1 (G3-G4)",
      "title": "四则运算顺序与括号法则 (BODMAS)",
      "bilingual": "Order of Operations & BODMAS Rules",
      "shanghaiChapter": "沪教版三年级下册 四则混合运算",
      "englishChapter": "International Maths G3-G4 BODMAS / PEMDAS",
      "terms": [
        "Brackets (括号)",
        "Order/Powers (乘方)",
        "Division/Multiplication (乘除)",
        "Addition/Subtraction (加减)"
      ],
      "description": "四则混合运算绝对优先级：先括号、再乘方、乘除从左往右、加减从左往右。严禁无括号时擅自调换顺序。",
      "prerequisites": [
        "g3_01",
        "g3_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "清楚优先级，但心算草稿时偶尔出现18+5=90这类草稿脱缰低级笔误，需坚持双栏草稿规程。",
      "williamMastery": "proficient",
      "williamScore": 66,
      "williamNote": "运算顺序受视觉吸引容易冲动先算加法，需强制画出运算顺序辅助下划线。",
      "errorRefIds": [
        "ERR-SOP-05",
        "ERR-SOP-08",
        "ERR-SOP-12",
        "ERR-WIL-06",
        "ERR-SOP-22"
      ]
    },
    {
      "id": "g4_01",
      "domain": "foundations_arithmetic",
      "stage": "Stage 1 (G3-G4)",
      "title": "十进制位值与数位对照 (Tens vs Tenths)",
      "bilingual": "Place Value & Tens vs. Tenths System",
      "shanghaiChapter": "沪教版四年级上册 大数的认识与数位顺序表",
      "englishChapter": "International Maths G4 Place Value & Decimals",
      "terms": [
        "Tens (十位)",
        "Tenths (十分位)",
        "Hundreds (百位)",
        "Hundredths (百分位)",
        "Decimal Point (小数点)"
      ],
      "description": "以个位/小数点为基准的十进制数位对称系统。左侧为整数十百千，右侧为分数十分位百分位千分位。",
      "prerequisites": [
        "g3_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "已能准确辨析英文中-s与-ths后缀所代表的位置和量级差异。",
      "williamMastery": "needs_work",
      "williamScore": 55,
      "williamNote": "极易混淆tens与tenths，听到tenth仍本能往十位去写；需使用色块数位对照板辅助固定。",
      "errorRefIds": [
        "ERR-WIL-03",
        "ERR-WIL-19"
      ]
    },
    {
      "id": "g4_02",
      "domain": "decimals_percentages",
      "stage": "Stage 2 (G4-G5)",
      "title": "小数加减法与进退位法则",
      "bilingual": "Decimal Addition & Subtraction Alignment",
      "shanghaiChapter": "沪教版四年级下册 小数的加法和减法",
      "englishChapter": "International Maths G4-G5 Decimal Arithmetic",
      "terms": [
        "Decimal Alignment (小数点对齐)",
        "Carrying into Units (向个位进位)",
        "Trailing Zeros (末尾补零)"
      ],
      "description": "小数点垂直对齐、低位不足补0、向个位进位加法（0.9+0.1=1.0杜绝4.1）与借位减法。",
      "prerequisites": [
        "g4_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 94,
      "sophiaNote": "加减法竖式非常规范，对齐与进位零失误。",
      "williamMastery": "needs_work",
      "williamScore": 52,
      "williamNote": "心算加法进位脱节，曾脱口报出0.9+0.1=4.1；必须严格禁止纯心算，要求手写对齐竖式。",
      "errorRefIds": [
        "ERR-SOP-05",
        "ERR-WIL-04",
        "ERR-WIL-06"
      ]
    },
    {
      "id": "g5_01",
      "domain": "decimals_percentages",
      "stage": "Stage 2 (G4-G5)",
      "title": "小数乘法与小数点位置移动",
      "bilingual": "Decimal Multiplication & Position Shift",
      "shanghaiChapter": "沪教版五年级上册 小数乘法",
      "englishChapter": "International Maths G5 Multiplying Decimals",
      "terms": [
        "Decimal Places (小数位数)",
        "Power of Ten Shift (10的幂次移位)"
      ],
      "description": "小数乘法先按整数相乘，积的小数位数等于因数小数位数之和；乘10/100/1000小数点向右平移。",
      "prerequisites": [
        "g4_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 86,
      "sophiaNote": "位数统计准确，偶有乘积末尾有0时去0时机把握过早的粗心。",
      "williamMastery": "proficient",
      "williamScore": 68,
      "williamNote": "平移方向基本分清，但对0.04×0.05=0.0020=0.002补0去0过程易纠结。",
      "errorRefIds": [
        "ERR-SOP-07",
        "ERR-WIL-05",
        "ERR-SOP-26",
        "ERR-SOP-30"
      ]
    },
    {
      "id": "g5_02",
      "domain": "decimals_percentages",
      "stage": "Stage 2 (G4-G5)",
      "title": "小数除法与除数整数化",
      "bilingual": "Decimal Division & Divisor Integer Shift",
      "shanghaiChapter": "沪教版五年级上册 小数除法",
      "englishChapter": "International Maths G5 Dividing by Decimals",
      "terms": [
        "Divisor Integer Shift (除数整数化)",
        "Dividend Scaling (被除数同步扩倍)"
      ],
      "description": "除数是小数时先平移小数点化为整数，被除数同步平移；除以0.5即乘2（30÷0.5=60而非15）。",
      "prerequisites": [
        "g5_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 88,
      "sophiaNote": "能清晰阐明除以小于1的数商反而变大的数学原理。",
      "williamMastery": "needs_work",
      "williamScore": 54,
      "williamNote": "除法移位常忘扩被除数（5.4÷0.6误答0.9），除以0.5误当乘0.5算成15；需强化商不变模型。",
      "errorRefIds": [
        "ERR-WIL-05",
        "ERR-SOP-13"
      ]
    },
    {
      "id": "g5_03",
      "domain": "decimals_percentages",
      "stage": "Stage 2 (G4-G5)",
      "title": "有效数字与近似值精度 (6 vs 6.0)",
      "bilingual": "Significant Figures & Precision Bounds",
      "shanghaiChapter": "沪教版五年级/六年级 四舍五入与近似数",
      "englishChapter": "International Maths G6 Ch08 Significant Figures",
      "terms": [
        "Significant Figures (有效数字)",
        "Leading Zeros (前导零)",
        "Precision Level (精确度)",
        "Bounds (取值范围)"
      ],
      "description": "前导零不计入有效数字（0.00397为3位）；末尾零体现精度（6表示[5.5, 6.5)，6.0表示[5.95, 6.05)）。",
      "prerequisites": [
        "g5_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 80,
      "sophiaNote": "有效数字辨识良好，但在物理测量精度范围上限（如6.5是否可取）偶有模糊。",
      "williamMastery": "needs_work",
      "williamScore": 58,
      "williamNote": "常把0.00397当成5位有效数字，认为6与6.0没有任何区别，需用测量尺刻度直观演示。",
      "errorRefIds": [
        "ERR-WIL-16",
        "ERR-SOP-14",
        "ERR-SOP-15"
      ]
    },
    {
      "id": "g5_04",
      "domain": "decimals_percentages",
      "stage": "Stage 2 (G4-G5)",
      "title": "小数与百分数互化 (0.075 to 7.5%)",
      "bilingual": "Decimals to Percentages Conversion",
      "shanghaiChapter": "沪教版六年级上册 百分数的意义与互化",
      "englishChapter": "International Maths G5-G6 Decimals to Percentages",
      "terms": [
        "Percentage (百分数)",
        "Shift 2 Places (小数点右移两位)",
        "Hundredth (百分之一)"
      ],
      "description": "小数化百分数小数点右移两位加%（0.075=7.5%，杜绝75%或0.75%）；百分数化小数逆向左移两位。",
      "prerequisites": [
        "g5_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "转化速度极快，常用基准分数对应百分数（1/8=12.5%）张口就来。",
      "williamMastery": "needs_work",
      "williamScore": 56,
      "williamNote": "移位位数摇摆不定，0.075曾报出75%或0.75%；需强调乘以100%的本质含义。",
      "errorRefIds": [
        "ERR-SOP-07",
        "ERR-SOP-18"
      ]
    },
    {
      "id": "g4_03",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "分数意义与真假带分数互化",
      "bilingual": "Proper, Improper & Mixed Fractions",
      "shanghaiChapter": "沪教版四年级下册 分数的初步认识",
      "englishChapter": "International Maths G4-G5 Fractions Basics",
      "terms": [
        "Proper Fraction (真分数)",
        "Improper Fraction (假分数)",
        "Mixed Number (带分数)"
      ],
      "description": "分数的整体与部分含义；分子分母大小关系分类；带余除法商为整数、余数为分子的假带互化。",
      "prerequisites": [
        "g3_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 94,
      "sophiaNote": "假带互化速度快且准确，披萨图形建模清晰。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "假分数与带分数互化原理理解透彻，能准确进行改写。",
      "errorRefIds": [
        "ERR-SOP-09",
        "ERR-WIL-10",
        "ERR-WIL-12"
      ]
    },
    {
      "id": "g4_04",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "分数基本性质与商不变原理",
      "bilingual": "Equivalent Fractions Principle",
      "shanghaiChapter": "沪教版四年级下册 / 六年级上册 2.1 分数的基本性质",
      "englishChapter": "International Maths G5 Equivalent Fractions",
      "terms": [
        "Equivalent Fractions (等值分数)",
        "Multiply/Divide Same Non-zero (同乘同除不为0)"
      ],
      "description": "分数的分子和分母同时乘或除以相同的非零数，分数大小不变；等价于除法商不变定律。",
      "prerequisites": [
        "g4_03"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "性质理解透彻，能自如应用在复杂比例化简中。",
      "williamMastery": "mastered",
      "williamScore": 76,
      "williamNote": "深刻理解分数基本性质，商不变原理运用熟练。",
      "errorRefIds": [
        "ERR-SOP-06"
      ]
    },
    {
      "id": "g5_05",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "最简分数与公因数约分",
      "bilingual": "Simplifying Fractions & HCF Reduction",
      "shanghaiChapter": "沪教版五年级下册 / 六年级上册 2.2 约分与最简分数",
      "englishChapter": "International Maths G5-G6 Simplifying Fractions",
      "terms": [
        "Simplest Form (最简分数)",
        "Coprime Numerator/Denominator (分子分母互质)",
        "Cancel Down (约分)"
      ],
      "description": "分子分母互质即最简分数；提取最大公因数（HCF）一步约分法与短除分步法。",
      "prerequisites": [
        "g4_04"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "能敏锐捕捉大公因数，约分一步到位。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "最简分数概念清楚，能熟练通过逐步除以公因数或求GCD约分至最简。",
      "errorRefIds": [
        "ERR-WIL-10"
      ]
    },
    {
      "id": "g5_06",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "异分母通分与分子同步扩倍",
      "bilingual": "Common Denominator & Fraction Addition",
      "shanghaiChapter": "沪教版六年级上册 2.3 分数的加减法",
      "englishChapter": "International Maths G6 Ch09 Fraction Addition",
      "terms": [
        "Lowest Common Denominator (最小公分母 LCD)",
        "Synchronous Expansion (分子同步扩倍)"
      ],
      "description": "异分母加减必须通分求LCD；分母扩倍几倍分子严格扩倍几倍，严禁直接分子相加（3/4+2/5≠5/20）。",
      "prerequisites": [
        "g5_05"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 76,
      "sophiaNote": "异分母加减通分规律已掌握，需在多项连续通分与大题综合应用中保持分子分母同步扩倍习惯。",
      "williamMastery": "proficient",
      "williamScore": 66,
      "williamNote": "通分容易漏乘分子，异分母加法容易冲动将分子分母各自直接相加；需强制书写中间通分式。",
      "errorRefIds": [
        "ERR-SOP-06",
        "ERR-SOP-08",
        "ERR-SOP-09"
      ]
    },
    {
      "id": "g5_07",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "巧比分数大小 (残差法与同分子法)",
      "bilingual": "Comparing Fractions: Same Numerator & Residual",
      "shanghaiChapter": "沪教版六年级上册 2.4 分数的大小比较",
      "englishChapter": "International Maths G6 Fraction Comparison",
      "terms": [
        "Cross Multiplication (交叉相乘)",
        "Residual Method (残差法 1-x)",
        "Same Numerator (同分子比分母)"
      ],
      "description": "通分比较、同分子比分母、化小数比较、残差法（比谁距离1更近，11/12与12/13）及花钱生活化模型。",
      "prerequisites": [
        "g5_06"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 84,
      "sophiaNote": "残差法领悟极快，能自如应用生活化花钱模型解释11/12与12/13的大小差异。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "生活化'花钱法'比分数大小掌握透彻，反应敏捷准确。",
      "errorRefIds": []
    },
    {
      "id": "frac_01",
      "domain": "fractions",
      "stage": "Stage 3 (G4-G5)",
      "title": "分数乘除法与倒数法则",
      "bilingual": "Fraction Multiplication, Division & Reciprocal",
      "shanghaiChapter": "沪教版六年级上册 2.5-2.6 分数乘法与除法",
      "englishChapter": "International Maths G6 Ch09 Fraction Operations",
      "terms": [
        "Reciprocal (倒数)",
        "Keep-Change-Flip (除法变乘倒数)",
        "Cross Cancel (交叉约分)"
      ],
      "description": "乘法分子乘分子分母乘分母且先约后乘；除法变乘倒数（乘除互逆）；带分数先化假分数再乘除。",
      "prerequisites": [
        "g5_06"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "倒数法则运用准确，先约分后计算习惯好。",
      "williamMastery": "proficient",
      "williamScore": 70,
      "williamNote": "乘法良好；除法偶尔忘记将除数翻转为倒数，直接进行约分，需牢记'变乘翻转'口诀。",
      "errorRefIds": [
        "ERR-WIL-10",
        "ERR-WIL-11",
        "ERR-SOP-19"
      ]
    },
    {
      "id": "div_01",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "整除与因数倍数",
      "bilingual": "Divisibility, Factors & Multiples",
      "shanghaiChapter": "沪教版六上 1.1-1.2 节",
      "englishChapter": "International Maths Ch01 Real Numbers",
      "terms": [
        "Divisible (整除)",
        "Factor (因数)",
        "Multiple (倍数)"
      ],
      "description": "整数整除的定义、因数与倍数的相互依存关系、找一个数的所有因数（成对寻找）。",
      "prerequisites": [
        "g3_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "能写出24的所有8种因数分解，准确理解排列与组合的区别，表现优秀。",
      "williamMastery": "mastered",
      "williamScore": 80,
      "williamNote": "因数与倍数列举完备规范，能避免遗漏两端数对。",
      "errorRefIds": [
        "ERR-SOP-03",
        "ERR-WIL-07",
        "ERR-WIL-18"
      ]
    },
    {
      "id": "div_02",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "质数与合数本质",
      "bilingual": "Prime & Composite Numbers",
      "shanghaiChapter": "沪教版六上 1.4 节",
      "englishChapter": "International Maths Ch02-03 Prime Numbers",
      "terms": [
        "Prime Number (质数/素数)",
        "Composite Number (合数)",
        "Coprime (互质)"
      ],
      "description": "质数只有1和自身两个因数，2是唯一的偶质数；合数至少有3个因数；1既不是质数也不是合数。",
      "prerequisites": [
        "div_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 88,
      "sophiaNote": "准确用'光棍'比喻质数本质，能快速识别83、97等大质数，100以内质数判断准确。",
      "williamMastery": "needs_work",
      "williamScore": 58,
      "williamNote": "质数定义反复遗忘'只能'二字；依赖直觉判断常误将77、91判为质数，对91=7×13需反复提醒。",
      "errorRefIds": [
        "ERR-WIL-08"
      ]
    },
    {
      "id": "div_03",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "整除特征判定法 (2/3/5/9/4/8)",
      "bilingual": "Divisibility Rules & Characteristics",
      "shanghaiChapter": "沪教版六上 1.3 节",
      "englishChapter": "International Maths Ch01 Divisibility Tests",
      "terms": [
        "Last Digit Rule (末尾法则)",
        "Digit Sum Rule (数位和法则)",
        "Last 2/3 Digits (末两位/末三位)"
      ],
      "description": "2和5看末位，4和25看末两位，8看末三位；3和9看各位数字之和。整除性质的组合应用。",
      "prerequisites": [
        "div_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "熟练掌握各数判定法则，能自如应用到六位数整除综合题中。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "2、3、5 整除特征判定熟练，能灵活运用各数位之和与末位数法则。",
      "errorRefIds": [
        "ERR-WIL-14"
      ]
    },
    {
      "id": "div_04",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "质因数分解与短除法",
      "bilingual": "Prime Factorization & Factor Trees",
      "shanghaiChapter": "沪教版六上 1.5 节",
      "englishChapter": "International Maths Ch03 Prime Factorization",
      "terms": [
        "Prime Factor (质因数)",
        "Factor Tree (因数树)",
        "Short Division (短除法)"
      ],
      "description": "合数写成质数连乘积的形式；树状分解与短除法规范操作；分解质因数结果用指数形式表达。",
      "prerequisites": [
        "div_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 95,
      "sophiaNote": "因数树与短除法运用娴熟，质因数连乘书写规范（如36=2²×3²）。",
      "williamMastery": "mastered",
      "williamScore": 76,
      "williamNote": "质因数分解短除法格式规范，坚持每次试除质数除数，分解完全。",
      "errorRefIds": [
        "ERR-SOP-02",
        "ERR-WIL-17"
      ]
    },
    {
      "id": "div_05",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "最大公因数与最小公倍数 (GCD / LCM)",
      "bilingual": "HCF & LCM via Prime Powers",
      "shanghaiChapter": "沪教版六上 1.6-1.7 节",
      "englishChapter": "International Maths Ch03 HCF and LCM",
      "terms": [
        "GCD / HCF (最大公因数)",
        "LCM (最小公倍数)",
        "Index Extraction (指数法提取)"
      ],
      "description": "短除法与指数形式提取GCD（公共质因数最低次幂之积）和LCM（所有质因数最高次幂之积）。",
      "prerequisites": [
        "div_04"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "能自如在短除法和指数法之间切换，准确理解GCD和LCM的本质区别。",
      "williamMastery": "mastered",
      "williamScore": 82,
      "williamNote": "最大公因数与最小公倍数求法扎实，理解 a×b = GCD×LCM 性质并能解方程反求未知数。",
      "errorRefIds": [
        "ERR-WIL-09",
        "ERR-SOP-31"
      ]
    },
    {
      "id": "div_06",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "完全平方数特性与辨析",
      "bilingual": "Square Numbers vs. Factor Pairs",
      "shanghaiChapter": "沪教版六上 拓展专题",
      "englishChapter": "International Maths Ch08 Square Numbers",
      "terms": [
        "Square Number (完全平方数)",
        "Odd Factors (奇数个因数)",
        "Factor Recombination (因数重组)"
      ],
      "description": "完全平方数质因数分解中所有指数均为偶数；因数个数为奇数；严格区分平方数（1,4,9,16,25...）与合数因数分解（6=2×3非平方数）。",
      "prerequisites": [
        "div_04"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "needs_work",
      "sophiaScore": 65,
      "sophiaNote": "在判断'6是否为完全平方数'时曾直觉误判为'是'（把6=2×3的两个因数误当成了平方），需用几何正方形拼图加深感知。",
      "williamMastery": "needs_work",
      "williamScore": 55,
      "williamNote": "对平方数缺乏量感，无法迅速写出1~20的平方表，与乘法2倍关系混淆严重。",
      "errorRefIds": [
        "ERR-SOP-01"
      ]
    },
    {
      "id": "div_07",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "同余与大数整除 (AMC8思维题)",
      "bilingual": "Remainder Modulo & Large Number Divisibility",
      "shanghaiChapter": "沪教版六上 压轴思维拓展",
      "englishChapter": "International Maths AMC8 Number Theory",
      "terms": [
        "Modulo Arithmetic (同余)",
        "Split Remainder (同余拆分)",
        "Constraint System (约束联立)"
      ],
      "description": "大数整除（如六位数91X93Y能被65整除）：拆解为5和13的倍数，末位Y取0或5，分别代入同余检验求解X。",
      "prerequisites": [
        "div_03",
        "div_05"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "能理解同余拆分思想，但在代入13检验时计算过程跳步，易出现算错余数情况。",
      "williamMastery": "needs_work",
      "williamScore": 50,
      "williamNote": "能解出Y=0或5，但解出Y后就以为大题已完成，漏解X；缺乏联立方程与多解排查的完整意识。",
      "errorRefIds": [
        "ERR-WIL-14"
      ]
    },
    {
      "id": "power_01",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "乘方概念与连乘展开式",
      "bilingual": "Powers as Repeated Multiplication",
      "shanghaiChapter": "沪教版六上 拓展 / 预备代数初步",
      "englishChapter": "International Maths Ch08 Indices and Powers",
      "terms": [
        "Base (底数)",
        "Exponent / Index (指数)",
        "Repeated Multiplication (连乘展开)"
      ],
      "description": "乘方的本质是相同因数的连乘积（2³=2×2×2=8，绝不是2×3=6；3⁴=81绝不是3×4=12）。严格区分乘法与乘方。",
      "prerequisites": [
        "div_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 88,
      "sophiaNote": "概念清晰，但在快速抢答时偶尔被William带偏，需保持定力。",
      "williamMastery": "needs_work",
      "williamScore": 48,
      "williamNote": "全课最大薄弱点：1³=3、2³=6、2⁴=8、3⁴=18全错成底数×指数；必须强制要求手写展开式并口诵'几个几相乘'。",
      "errorRefIds": [
        "ERR-WIL-01",
        "ERR-SOP-29"
      ]
    },
    {
      "id": "power_02",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "指数加法法则与方幂运算",
      "bilingual": "Index Laws: Multiplication & Powers",
      "shanghaiChapter": "沪教版预备数学 指数法则初步",
      "englishChapter": "International Maths Ch08 Laws of Indices",
      "terms": [
        "Product of Powers (同底数幂乘法)",
        "Add Indices (指数相加)",
        "Power of a Power (幂的乘方)"
      ],
      "description": "同底数幂相乘，底数不变指数相加：aᵐ · aⁿ = aᵐ⁺ⁿ（如10⁴ × 10⁵ = 10⁹，严禁算成10²⁰）。",
      "prerequisites": [
        "power_01"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "掌握指数相加法则，对(2³)²=2⁶能通过展开验证理解。",
      "williamMastery": "needs_work",
      "williamScore": 50,
      "williamNote": "10⁴×10⁵曾脱口算出10²⁰（指数相乘）；经过列式展开4个10乘5个10是9个10后理解，仍需练习巩固。",
      "errorRefIds": [
        "ERR-WIL-02"
      ]
    },
    {
      "id": "power_03",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "0指数与负整数指数初步",
      "bilingual": "Zero & Negative Exponents",
      "shanghaiChapter": "沪教版预备数学 指数拓展",
      "englishChapter": "International Maths Ch08 Zero and Negative Powers",
      "terms": [
        "Zero Exponent a⁰=1 (0指数为1)",
        "Negative Exponent (负整数指数倒数)"
      ],
      "description": "任何非零数的0次幂等于1（a⁰=1，10⁰=1绝不是10或0）；负整数指数为倒数（10⁻¹=1/10=0.1，10⁻²=0.01）。",
      "prerequisites": [
        "power_02"
      ],
      "currentPhase": "preview",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "能用除法模式规律推导10⁰=1与10⁻¹=0.1，逻辑严密。",
      "williamMastery": "needs_work",
      "williamScore": 52,
      "williamNote": "直觉容易认为10⁰=0或10，需用连续除以10的阶梯模式图示法引导理解。",
      "errorRefIds": []
    },
    {
      "id": "power_04",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "科学记数法与十进制展开",
      "bilingual": "Scientific Notation & Standard Form",
      "shanghaiChapter": "沪教版预备数学 / 英语数学 Book A",
      "englishChapter": "International Maths Ch08 Scientific Notation",
      "terms": [
        "Scientific Notation (科学记数法)",
        "Coefficient 1≤a<10 (有效系数)",
        "Order of Magnitude (数量级)"
      ],
      "description": "大数与微小数值规范书写：a × 10ⁿ，其中1 ≤ a < 10，n为整数；结合宇宙天体与微观尺度应用。",
      "prerequisites": [
        "power_03",
        "g5_03"
      ],
      "currentPhase": "preview",
      "sophiaMastery": "proficient",
      "sophiaScore": 85,
      "sophiaNote": "熟练书写标准形式，系数有效数字统计准确。",
      "williamMastery": "proficient",
      "williamScore": 65,
      "williamNote": "大数科学记数法能写，但对微小数值（如0.00035=3.5×10⁻⁴）移动位数的负指数容易数错。",
      "errorRefIds": [
        "ERR-WIL-16",
        "ERR-SOP-21",
        "ERR-SOP-24"
      ]
    },
    {
      "id": "power_05",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "奇数偶数同余与奇偶性分析",
      "bilingual": "Parity & Modulo 2 in AMC8",
      "shanghaiChapter": "沪教版六上 奇数与偶数性质",
      "englishChapter": "International Maths Number Theory Parity",
      "terms": [
        "Odd & Even (奇数与偶数)",
        "Parity Invariance (奇偶性不变性)",
        "Prime 2 Uniqueness (质数2的唯一性)"
      ],
      "description": "加减乘法奇偶性规律（奇+奇=偶，奇×奇=奇）；质数与奇偶性交叉（如果两质数之和为奇数，必有其一为2）。",
      "prerequisites": [
        "div_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "能敏锐运用奇偶性排除竞赛题中的不可能情况，逻辑严密。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "奇数偶数同余与运算性质掌握牢固，能准确推导代数式奇偶性。",
      "errorRefIds": [
        "ERR-SOP-32"
      ]
    },
    {
      "id": "frac_02",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "分数化小数与循环小数",
      "bilingual": "Fractions to Recurring & Terminating Decimals",
      "shanghaiChapter": "沪教版六年级上册 2.7 分数与小数的互化",
      "englishChapter": "International Maths G6 Recurring Decimals",
      "terms": [
        "Terminating Decimal (有限小数)",
        "Recurring Decimal (循环小数)",
        "Denominator Factors 2 and 5 (分母质因数只含2和5)"
      ],
      "description": "最简分数分母质因数只含2或5可化为有限小数；含其他质因数必化为无限循环小数；循环节记号与互化。",
      "prerequisites": [
        "g5_05"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "mastered",
      "sophiaScore": 88,
      "sophiaNote": "快速识别分母质因数结构判断有限还是循环小数，掌握1/7的循环节序列。",
      "williamMastery": "proficient",
      "williamScore": 68,
      "williamNote": "通过长除法能求出小数，但在直接观察分母质因数判定时偶有遗漏需先化简为最简分数的前提。",
      "errorRefIds": []
    },
    {
      "id": "frac_03",
      "domain": "number_theory_powers",
      "stage": "Stage 4 (G5-G6)",
      "title": "分数实际应用题与工程行程率",
      "bilingual": "Fraction Word Problems & Work/Speed Rates",
      "shanghaiChapter": "沪教版六年级上册 2.8 分数的应用",
      "englishChapter": "International Maths G6 Fraction Applications",
      "terms": [
        "Unit 1 (单位'1')",
        "Fraction of Remainder (剩余量的几分之几)",
        "Work Rate (工效)"
      ],
      "description": "找准单位'1'、区分分率与具体数量、多步分数的剩余量计算（第一天用去3/8，第二天用去余下的2/5）。",
      "prerequisites": [
        "frac_01"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "线段图画法规范，能准确区分第2天所乘的分数基底是余量而非总量。",
      "williamMastery": "needs_work",
      "williamScore": 60,
      "williamNote": "审题容易看漏'余下的'三个字，直接用总量乘以第二个分数；需用荧光笔划关键词强化审题。",
      "errorRefIds": []
    },
    {
      "id": "geom_01",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "周长概念与长正方形周长",
      "bilingual": "Perimeter of Rectangles & Squares",
      "shanghaiChapter": "沪教版三年级下册 周长",
      "englishChapter": "International Maths G3-G4 Perimeter",
      "terms": [
        "Perimeter (周长)",
        "Boundary Length (边框总长)",
        "Formula 2(l+w) (长方形周长公式)"
      ],
      "description": "封闭图形一周的长度；长方形周长P=2(长+宽)；正方形周长P=4×边长；等长铁丝围成不同图形周长不变。",
      "prerequisites": [
        "g3_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 95,
      "sophiaNote": "概念清晰，计算准确，能灵活处理复杂拼图的周长变化。",
      "williamMastery": "mastered",
      "williamScore": 80,
      "williamNote": "深刻理解周长是一维线段长度的物理本质，周长公式运用准确规范。",
      "errorRefIds": [
        "ERR-SOP-20"
      ]
    },
    {
      "id": "geom_02",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "面积概念与正方形面积反求边长",
      "bilingual": "Area vs. Perimeter: Sqrt(A) vs. A/2",
      "shanghaiChapter": "沪教版四年级上册 / 预备几何 面积与平方根",
      "englishChapter": "International Maths G4-G5 Area of Squares & Rectangles",
      "terms": [
        "Area (面积)",
        "Square Root (平方根)",
        "Common Error A/2 (除以2致命误区)"
      ],
      "description": "面积是二维平面的覆盖大小；正方形面积A=s²；已知面积反求边长必须开方s=√A，严禁写成A/2（如36cm²边长为6cm不是18cm）！",
      "prerequisites": [
        "geom_01",
        "div_06"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "面积维度概念清晰，已掌握通过正方形面积求边长；长正方体拼接扣减重叠面直觉敏锐。",
      "williamMastery": "proficient",
      "williamScore": 66,
      "williamNote": "极易混淆周长与面积、开平方与除以2；必须强制在草稿上写出s×s=36因此s=6的中间式。",
      "errorRefIds": [
        "ERR-SOP-01",
        "ERR-SOP-33"
      ]
    },
    {
      "id": "geom_03",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "度量衡单位换算与维度进率",
      "bilingual": "Metric Units Scale: cm³ to m³ & Litres",
      "shanghaiChapter": "沪教版五年级 体积与容积单位",
      "englishChapter": "International Maths G5-G6 Metric Conversions",
      "terms": [
        "Linear 100 (一维百进制)",
        "Area 10000 (二维万进制)",
        "Volume 1000000 (三维百万进制)",
        "Capacity Litre (容积升)"
      ],
      "description": "长度1m=100cm，面积1m²=10000cm²，体积1m³=1000000cm³（三维进率是三次方！）；1升=1000毫升=1000cm³。",
      "prerequisites": [
        "geom_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "清楚100³=1,000,000的推导逻辑，但在快速答题时偶尔少写一个0。",
      "williamMastery": "proficient",
      "williamScore": 66,
      "williamNote": "把体积进率和长度进率混为一谈（曾认为1m³=100cm³）；需用魔方与1立方米大木箱实物模型直观建立空间感。",
      "errorRefIds": []
    },
    {
      "id": "word_01",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "行程问题与速度时间单位对齐",
      "bilingual": "Speed, Distance, Time: 40 min = 2/3 hr",
      "shanghaiChapter": "沪教版四年级/五年级 行程问题",
      "englishChapter": "International Maths G5-G6 Speed, Distance, Time",
      "terms": [
        "Speed = Distance / Time (速度公式)",
        "Unit Consistency (单位一致性)",
        "Minutes to Fraction Hours (分钟化分数小时)"
      ],
      "description": "速度=路程÷时间；计算时单位必须严格匹配；40分钟必须化为40/60=2/3小时（严禁写成0.4小时！）再与千米/小时相乘。",
      "prerequisites": [
        "g4_02",
        "frac_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 86,
      "sophiaNote": "单位转换严谨，能自如将分钟折算为最简真分数参与相乘。",
      "williamMastery": "needs_work",
      "williamScore": 50,
      "williamNote": "见到40分钟直接当成0.4小时或直接乘40导致数值荒谬；缺乏对答案常识性检验的习惯。",
      "errorRefIds": [
        "ERR-WIL-15",
        "ERR-SOP-16",
        "ERR-SOP-17",
        "ERR-SOP-25",
        "ERR-SOP-27",
        "ERR-WIL-20"
      ]
    },
    {
      "id": "word_02",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "大题审题三部曲与规范解题",
      "bilingual": "Three-Step Structured Problem Solving",
      "shanghaiChapter": "协和双语融合班特色 解题规程",
      "englishChapter": "SUIS Integrated Math Problem Solving Template",
      "terms": [
        "Step 1 Identify (第一步列已知与未知)",
        "Step 2 Multi-step Working (第二步完整推导)",
        "Step 3 Check & Reality Test (第三步验算与常识检验)"
      ],
      "description": "针对两人'抢报答案、不写过程、漏解第二问'的顽疾推行解题三部曲：设列已知→分步演算→单位与生活常识排查。",
      "prerequisites": [
        "g3_03",
        "word_01"
      ],
      "currentPhase": "in_progress",
      "sophiaMastery": "proficient",
      "sophiaScore": 80,
      "sophiaNote": "开始主动分步写草稿，答题完整度明显提升，漏题现象杜绝。",
      "williamMastery": "needs_work",
      "williamScore": 52,
      "williamNote": "仍有图快直接报数的冲动，后半节课疲劳时解题过程缩水；需采用填空式模板约束。",
      "errorRefIds": [
        "ERR-SOP-11",
        "ERR-WIL-14",
        "ERR-WIL-15",
        "ERR-SOP-23"
      ]
    },
    {
      "id": "adv_01",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "折纸指数模型与AMC8思维拓展",
      "bilingual": "Paper Folding 2ⁿ & AMC8 Thinking",
      "shanghaiChapter": "协和校本思维探究",
      "englishChapter": "International Maths AMC8 Exponents",
      "terms": [
        "Exponential Growth (指数爆炸)",
        "Doubling Sequence (翻倍数列)",
        "Spatial Reasoning (空间折叠)"
      ],
      "description": "折纸1次2层、2次4层、n次2ⁿ层；推导对折42次厚度超过地月距离；培养指数增长直觉与空间推理能力。",
      "prerequisites": [
        "power_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "不仅能算出2ⁿ各层厚度，还能主动追问'为什么对折超过8次实际纸张折不动'的物理边界，思维活跃。",
      "williamMastery": "mastered",
      "williamScore": 88,
      "williamNote": "折纸 2ⁿ 幂次增长模型直觉优异，动手推导敏捷自信。",
      "errorRefIds": [
        "ERR-SOP-04",
        "ERR-SOP-10",
        "ERR-SOP-12",
        "ERR-WIL-13"
      ]
    },
    {
      "id": "adv_02",
      "domain": "geometry_applications",
      "stage": "Stage 5 (G3-G6)",
      "title": "24点逆向因数重组与算筹",
      "bilingual": "24-Point Game Factor Recombination",
      "shanghaiChapter": "协和校本数学活动",
      "englishChapter": "International Maths Mathematical Games",
      "terms": [
        "Factor Pairs of 24 (24的因数对)",
        "3×8, 4×6, 2×12 Target",
        "Inverse Thinking (逆向思维)"
      ],
      "description": "利用给定的4张牌通过加减乘除括号凑出24；本质是将目标24分解为3×8、4×6、2×12或25-1、48/2等逆向因数结构。",
      "prerequisites": [
        "g3_03",
        "div_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 96,
      "sophiaNote": "速度极快，能同时在脑海中并列构建3×8和4×6两条路线，多次秒杀胜出。",
      "williamMastery": "mastered",
      "williamScore": 78,
      "williamNote": "24点因数重组与逆向拆分运算能力强，反应敏捷。",
      "errorRefIds": [
        "ERR-SOP-28"
      ]
    }
  ],
  "errorBank": [
    {
      "id": "ERR-SOP-01",
      "student": "Sophia",
      "nodeId": "div_06",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "high",
      "source": "英数G6暑期第1节 (2026-07-02)",
      "topic": "完全平方数与平方根",
      "title": "面积边长求法混淆 & 误认6为完全平方数",
      "question": "(1) 正方形面积为3，求边长；(2) 判断6是否为完全平方数。",
      "originalQuestion": "(1) 正方形面积为3，求边长；(2) 判断6是否为完全平方数。",
      "studentAnswer": "(1) 边长=3÷2=1.5；(2) 认为6是完全平方数，理由是2×3=6。",
      "rootCause": "混淆周长与面积逆运算公式；未内化完全平方数是相同整数自乘的本质。",
      "standardSolution": "边长为√3；完全平方数如1,4,9,16，6在4和9之间不是完全平方数。",
      "mnemonic": "完全平方孪生汉，自己乘自己才算数；面积求边开平方，除以二那是算半边！",
      "teacherTip": "完全平方孪生汉，自己乘自己才算数；面积求边开平方，除以二那是算半边！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-02",
      "student": "Sophia",
      "nodeId": "div_04",
      "domain": "number_theory_powers",
      "category": "算法步骤类",
      "severity": "high",
      "source": "英数G6暑期第4节 (2026-07-05)",
      "topic": "质因数分解终止条件",
      "title": "质因数分解未除尽提前终止",
      "question": "对1080进行质因数分解。",
      "originalQuestion": "对1080进行质因数分解。",
      "studentAnswer": "短除法除到商为9即停止，未将9继续分解为3×3。",
      "rootCause": "终止条件意识薄弱，未坚持'除到商为质数才停'的流程规则。",
      "standardSolution": "1080 = 2³ × 3³ × 5。",
      "mnemonic": "短除法分解因数，除到质数才能停；最后商是合数9，必须继续除以3！",
      "teacherTip": "短除法分解因数，除到质数才能停；最后商是合数9，必须继续除以3！",
      "status": "mastered"
    },
    {
      "id": "ERR-SOP-03",
      "student": "Sophia",
      "nodeId": "div_01",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "medium",
      "source": "英数G6暑期第5节 (2026-07-06)",
      "topic": "质因数分解与幂次",
      "title": "81分解因数计数混淆",
      "question": "写出81的质因数分解式。",
      "originalQuestion": "写出81的质因数分解式。",
      "studentAnswer": "脱口而出说'8个3'。",
      "rootCause": "把因数9×9与每个9含有2个3的乘加逻辑在大脑中混淆。",
      "standardSolution": "81 = 9 × 9 = (3×3) × (3×3) = 3⁴（是4个3相乘）。",
      "mnemonic": "因数拆解两步走，九九八十一是两个九，每个九里两个三，加在一起四个三！",
      "teacherTip": "因数拆解两步走，九九八十一是两个九，每个九里两个三，加在一起四个三！",
      "status": "mastered"
    },
    {
      "id": "ERR-SOP-04",
      "student": "Sophia",
      "nodeId": "adv_01",
      "domain": "foundations_arithmetic",
      "category": "代数变形类",
      "severity": "high",
      "source": "英数G6暑期第5节 (2026-07-06)",
      "topic": "比例等式性质",
      "title": "比例变形受移项变号机械干扰",
      "question": "已知比例 C:D = 3:5，将D用含C的代数式表示。",
      "originalQuestion": "已知比例 C:D = 3:5，将D用含C的代数式表示。",
      "studentAnswer": "D = C × 3 ÷ 5。",
      "rootCause": "受机械口诀'移项变号'干扰，未建立天平两边同乘同除的本质理解。",
      "standardSolution": "C/D = 3/5 ⟹ 3D = 5C ⟹ D = 5C/3。",
      "mnemonic": "比例先化分数式，交叉相乘稳如山；目标字母留在边，伴身数字两边除！",
      "teacherTip": "比例先化分数式，交叉相乘稳如山；目标字母留在边，伴身数字两边除！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-SOP-05",
      "student": "Sophia",
      "nodeId": "g4_02",
      "domain": "foundations_arithmetic",
      "category": "计算规范类",
      "severity": "high",
      "source": "英数G6暑期第6节 (2026-07-07)",
      "topic": "小数四则运算与进位",
      "title": "小数进位遗漏与四则乱加括号",
      "question": "列竖式计算小数加法并在四则混合运算中按序计算。",
      "originalQuestion": "列竖式计算小数加法并在四则混合运算中按序计算。",
      "studentAnswer": "十分位6+4=10漏进1算出62；四则运算随意加括号破坏运算顺序。",
      "rootCause": "运算顺序层级意识模糊，做题急躁导致上标进位未标注。",
      "standardSolution": "十分位满十向个位进1，个位结果加1为63；严格按先乘除后加减顺序运算。",
      "mnemonic": "四则运算看清级，先乘后除再加减；竖式进位点小点，算完回头验一验！",
      "teacherTip": "四则运算看清级，先乘后除再加减；竖式进位点小点，算完回头验一验！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-SOP-06",
      "student": "Sophia",
      "nodeId": "g5_06",
      "domain": "fractions",
      "category": "算法机制类",
      "severity": "critical",
      "source": "暑期第9-10节 & 秋季第2节 (2026-09-16)",
      "topic": "通分与商不变原理",
      "title": "通分时分子不同步相乘（最顽固问题）",
      "question": "计算异分母分数加法：2/3 + 1/5。",
      "originalQuestion": "计算异分母分数加法：2/3 + 1/5。",
      "studentAnswer": "化公分母15后分子直接抄写：2/15 + 1/15 = 3/15 = 1/5。",
      "rootCause": "商不变原理未形成自动化肌肉记忆，通分仅操作分母而遗漏分子。",
      "standardSolution": "2/3 = 10/15, 1/5 = 3/15，10/15 + 3/15 = 13/15。",
      "mnemonic": "通分三步走：找公分母、分子同步乘、同分母相加；分母变几倍分子紧跟跑！",
      "teacherTip": "通分三步走：找公分母、分子同步乘、同分母相加；分母变几倍分子紧跟跑！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-07",
      "student": "Sophia",
      "nodeId": "g5_04",
      "domain": "foundations_arithmetic",
      "category": "数位位移类",
      "severity": "medium",
      "source": "英数G6暑期第10节 (2026-07-11)",
      "topic": "小数与百分数互化",
      "title": "小数化百分数移位方向搞反",
      "question": "将小数0.075化为百分数。",
      "originalQuestion": "将小数0.075化为百分数。",
      "studentAnswer": "写成75%或0.75%。",
      "rootCause": "对百分号代表÷100的本质理解不扎实，小数点移位方向与位数混淆。",
      "standardSolution": "0.075 = 0.075 × 100% = 7.5%。",
      "mnemonic": "添上百分号，数值要变大，小数点往右跳两步！",
      "teacherTip": "添上百分号，数值要变大，小数点往右跳两步！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-SOP-08",
      "student": "Sophia",
      "nodeId": "g3_03",
      "domain": "fractions",
      "category": "严重粗心类",
      "severity": "critical",
      "source": "英数G6秋季第2节 (2026-09-16)",
      "topic": "基础算术监控与估算",
      "title": "分数通分加法中发生荒谬算术错误 (18+5=90)",
      "question": "计算带分数加法：2又1/3 + 3又5/6。",
      "originalQuestion": "计算带分数加法：2又1/3 + 3又5/6。",
      "studentAnswer": "通分草稿中算分子时出现 18 + 5 = 90，导致最终结果荒诞庞大。",
      "rootCause": "做题急躁，大脑将加号看成乘号(18×5=90)；完全缺乏算前估算合理性监控。",
      "standardSolution": "算前估算结果在6~7之间；18+5=23，最终结果为6又1/6。",
      "mnemonic": "动笔之前先估算，心里先放一把尺；加法莫当乘法算，算完回头验合理！",
      "teacherTip": "动笔之前先估算，心里先放一把尺；加法莫当乘法算，算完回头验合理！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-09",
      "student": "Sophia",
      "nodeId": "g4_03",
      "domain": "fractions",
      "category": "概念混淆类",
      "severity": "high",
      "source": "英数G6秋季第2节 (2026-09-16)",
      "topic": "同分母分数加法",
      "title": "同分母加法分母乱相加",
      "question": "计算：3/6 + 5/6。",
      "originalQuestion": "计算：3/6 + 5/6。",
      "studentAnswer": "算出 (3+5)/(6+6) = 8/12 = 2/3。",
      "rootCause": "未理解分母是分数单位（等分份数），只有分子在做数量累加。",
      "standardSolution": "3/6 + 5/6 = (3+5)/6 = 8/6 = 4/3 = 1又1/3。",
      "mnemonic": "同分母相加减，分母是老祖宗——纹丝不能动，只有分子做运算！",
      "teacherTip": "同分母相加减，分母是老祖宗——纹丝不能动，只有分子做运算！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-10",
      "student": "Sophia",
      "nodeId": "adv_01",
      "domain": "foundations_arithmetic",
      "category": "概念混淆类",
      "severity": "high",
      "source": "英数G5+AMC8第7节 (2026-06-15)",
      "topic": "独立事件概率与乘法原理",
      "title": "独立事件同时发生误用加法",
      "question": "一枚硬币掷出正面且转盘停在2的概率（硬币正面1/2，转盘2的概率1/3）。",
      "originalQuestion": "一枚硬币掷出正面且转盘停在2的概率（硬币正面1/2，转盘2的概率1/3）。",
      "studentAnswer": "用加法算成 1/2 + 1/3 = 2/5。",
      "rootCause": "混淆'且(and)'与'或(or)'，未理解独立事件同时发生必须用乘法原理。",
      "standardSolution": "P(正面且2) = 1/2 × 1/3 = 1/6。",
      "mnemonic": "苛刻条件同时来，乘法原理相乘算；宽松条件二选一，加法原理求总和！",
      "teacherTip": "苛刻条件同时来，乘法原理相乘算；宽松条件二选一，加法原理求总和！",
      "status": "mastered"
    },
    {
      "id": "ERR-SOP-11",
      "student": "Sophia",
      "nodeId": "g3_02",
      "domain": "geometry_applications",
      "category": "审题疏漏类",
      "severity": "medium",
      "source": "袋鼠数学C第3节 (2026-03-23)",
      "topic": "周期循环问题与播放起点定位",
      "title": "周期循环问题忽略播放起始点",
      "question": "播放器循环播放5首歌曲A, B, C, D, E。当前正在播放C，问播放完第28首后正在播放哪一首？",
      "originalQuestion": "播放器循环播放5首歌曲A, B, C, D, E。当前正在播放C，问播放完第28首后正在播放哪一首？",
      "studentAnswer": "求出 28÷5=5...3 后，直接从歌单第1首A开始数3首答C（漏看起始播放位置C）。",
      "rootCause": "周期余数模型死记硬背，做题前未在草稿圈出真实起点，忽视题目已知偏移量。",
      "standardSolution": "当前正在播放C（第3首），后续播放28首即 3+28=31 首；31÷5=6...1，对应第1首歌A（或从C后第1首D数起：28÷5=5...3，第1首D、第2首E、第3首A）。",
      "mnemonic": "周期问题定起点，余数数序莫抢先；当前哪首做基准，顺次往后数几位！",
      "teacherTip": "周期问题定起点，余数数序莫抢先；当前哪首做基准，顺次往后数几位！",
      "status": "mastered"
    },
    {
      "id": "ERR-SOP-12",
      "student": "Sophia",
      "nodeId": "g3_03",
      "domain": "foundations_arithmetic",
      "category": "符号与规则类",
      "severity": "medium",
      "source": "英数G5+AMC8第6节 (2026-06-08)",
      "topic": "有理数正负数运算与新定义运算",
      "title": "嵌套新定义运算漏写负号",
      "question": "定义新运算 a⊕b = 2a + 3b，求 3 ⊕ (-1) 与 2 × (-1) 的值。",
      "originalQuestion": "定义新运算 a⊕b = 2a + 3b，求 3 ⊕ (-1) 与 2 × (-1) 的值。",
      "studentAnswer": "在多层括号展开计算中，将 2×(-1) 算成 2，漏写负号导致最终结果符号反转。",
      "rootCause": "对负数乘法“异号得负”法则心算不严密，在复合嵌套式子中括号脱漏。",
      "standardSolution": "正负相乘必得负：2 × (-1) = -2；代入新运算得 2(3) + 3(-1) = 6 - 3 = 3。",
      "mnemonic": "同号相乘得正数，异号相乘必带负；负数带进括号戴，脱掉括号看清楚！",
      "teacherTip": "同号相乘得正数，异号相乘必带负；负数带进括号戴，脱掉括号看清楚！",
      "status": "mastered"
    },
    {
      "id": "ERR-SOP-13",
      "student": "Sophia",
      "nodeId": "g5_02",
      "domain": "decimals_percentages",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "5A 练习册 P13 (2.7)",
      "topic": "商的变化规律与小数点位移",
      "title": "商的变化规律与小数点位移百倍偏差",
      "question": "基于 54÷24=2.25，口算 5.4÷24, 0.54÷24, 0.054÷24, 0.0054÷24。",
      "originalQuestion": "基于 54÷24=2.25，口算 5.4÷24, 0.54÷24, 0.054÷24, 0.0054÷24。",
      "studentAnswer": "填入 22.5, 2.25, 0.225, 0.0225，结果系统性扩大100倍。",
      "rootCause": "混淆移位规则，将向左缩小误做向右扩大，且严重缺乏基本估算感。",
      "standardSolution": "除数不变，被除数缩小多少倍商同步缩小：0.225, 0.0225, 0.00225, 0.000225。",
      "mnemonic": "除数纹丝未曾动，被除数缩商同缩；小数除以大整数，商必零点莫反扩！",
      "teacherTip": "除数纹丝未曾动，被除数缩商同缩；小数除以大整数，商必零点莫反扩！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-14",
      "student": "Sophia",
      "nodeId": "g5_03",
      "domain": "decimals_percentages",
      "category": "算法步骤类",
      "severity": "critical",
      "source": "5A 练习册 P20 (2.11)",
      "topic": "除数是小数竖式商对齐",
      "title": "除数是小数竖式商小数点对齐原位置",
      "question": "276.5 km 耗油 7.9 L，求每升油行驶公里数。",
      "originalQuestion": "276.5 km 耗油 7.9 L，求每升油行驶公里数。",
      "studentAnswer": "竖式化为 2765÷79=35，但商的小数点对齐原被除数写成 3.5 km。",
      "rootCause": "算法对齐规则断漏，商的小数点未与移动后的新位置对齐，缺少估算校验。",
      "standardSolution": "同扩10倍为 2765÷79=35 km/L，商为整数35。",
      "mnemonic": "除数有小同移位，商点跟着新点走；算前先估三百除八，三十五来莫点错！",
      "teacherTip": "除数有小同移位，商点跟着新点走；算前先估三百除八，三十五来莫点错！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-15",
      "student": "Sophia",
      "nodeId": "g5_03",
      "domain": "decimals_percentages",
      "category": "概念混淆类",
      "severity": "high",
      "source": "5A 练习册 P16 (2.9)",
      "topic": "乘除纯小数的大小规律",
      "title": "纯小数乘除大小比较思维定势倒置",
      "question": "不计算填入比较符号：7.2 × 0.9 [ ] 7.2 ÷ 0.9。",
      "originalQuestion": "不计算填入比较符号：7.2 × 0.9 [ ] 7.2 ÷ 0.9。",
      "studentAnswer": "填入 >，认为乘法结果必然大于除法。",
      "rootCause": "整数经验负迁移，不知乘纯小数结果变小、除以纯小数结果变大。",
      "standardSolution": "7.2×0.9 = 6.48 < 7.2，7.2÷0.9 = 8 > 7.2，故 6.48 < 8，填 <。",
      "mnemonic": "乘纯小数越乘越小，除纯小数越除越大；别拿整数旧经验，套进小数闹笑话！",
      "teacherTip": "乘纯小数越乘越小，除纯小数越除越大；别拿整数旧经验，套进小数闹笑话！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-16",
      "student": "Sophia",
      "nodeId": "word_01",
      "domain": "geometry_applications",
      "category": "审题综合类",
      "severity": "critical",
      "source": "5A 练习册 P17 (2.10)",
      "topic": "多步应用题前置条件",
      "title": "均分问题遗漏剩余量降维列式",
      "question": "8.6 kg白糖均分入5个瓶子，剩下0.35 kg，求每瓶装糖质量。",
      "originalQuestion": "8.6 kg白糖均分入5个瓶子，剩下0.35 kg，求每瓶装糖质量。",
      "studentAnswer": "直接计算 8.6÷5=1.72 kg，完全忽视剩余0.35 kg条件。",
      "rootCause": "冲动做题，抓取表面数字直接相除，将两步应用题降维为一步题。",
      "standardSolution": "(8.6 - 0.35) ÷ 5 = 8.25 ÷ 5 = 1.65 kg。",
      "mnemonic": "应用题里有剩余，先减剩余再平均；动笔之前先划句，单步两步分清明！",
      "teacherTip": "应用题里有剩余，先减剩余再平均；动笔之前先划句，单步两步分清明！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-17",
      "student": "Sophia",
      "nodeId": "word_01",
      "domain": "geometry_applications",
      "category": "审题综合类",
      "severity": "critical",
      "source": "5A 练习册 P18 (2.10)",
      "topic": "多元数据匹配与量纲",
      "title": "多变量应用题数据错位（重量乘重量）",
      "question": "鸡肉5.75元/kg买14kg，牛肉7.45元/kg买21kg，共花多少钱？",
      "originalQuestion": "鸡肉5.75元/kg买14kg，牛肉7.45元/kg买21kg，共花多少钱？",
      "studentAnswer": "计算牛肉总价写成 21×14=294（牛肉重量乘鸡肉重量），合计374.5元。",
      "rootCause": "多元数据处理超载，注意力漂移，量纲物理意义完全丧失。",
      "standardSolution": "14×5.75 + 21×7.45 = 80.5 + 156.45 = 236.95 元。",
      "mnemonic": "单价数量配成对，鸡对鸡来牛对牛；公斤绝不乘公斤，量纲对齐不出糗！",
      "teacherTip": "单价数量配成对，鸡对鸡来牛对牛；公斤绝不乘公斤，量纲对齐不出糗！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-18",
      "student": "Sophia",
      "nodeId": "g5_04",
      "domain": "decimals_percentages",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "5A 练习册 P22 (2.13)",
      "topic": "循环小数与周期性规律",
      "title": "循环小数有限性混淆与第100位余数错位",
      "question": "(1) 比较 0.825825 与 0.825(循环)；(2) 12÷37=0.324(循环)，求第100位小数。",
      "originalQuestion": "(1) 比较 0.825825 与 0.825(循环)；(2) 12÷37=0.324(循环)，求第100位小数。",
      "studentAnswer": "(1) 填 =；(2) 第100位填2，数字总和填324。",
      "rootCause": "忽视无限循环小数延展性；100÷3=33...1 余数1误对应第2位数字。",
      "standardSolution": "(1) 0.8258250... < 0.8258258...，填 <；(2) 余数1对应首位3，前100位和为300。",
      "mnemonic": "循环展开比多位，末尾添零见高低；周期整除看余数，余几就是第几个！",
      "teacherTip": "循环展开比多位，末尾添零见高低；周期整除看余数，余几就是第几个！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-19",
      "student": "Sophia",
      "nodeId": "frac_01",
      "domain": "fractions",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "5A 练习册 P29 (3.5)",
      "topic": "整体单位1与切片单位",
      "title": "整体1与切片混淆（每人得1.5个完整蛋糕）",
      "question": "1个大蛋糕切成12片分给8位客人，每人分得整个蛋糕的几分之几？",
      "originalQuestion": "1个大蛋糕切成12片分给8位客人，每人分得整个蛋糕的几分之几？",
      "studentAnswer": "计算 12÷8=1.5，答语写 Each guest will get 1.5 cake。",
      "rootCause": "混淆分率与切片数，将1.5片错安上蛋糕单位，违背生活常识常理。",
      "standardSolution": "每人分得整个蛋糕的 1÷8 = 1/8 = 0.125 个蛋糕（片数为1.5片）。",
      "mnemonic": "问占整体几分几，单位是一不是块；分物常识验大小，哪能一人一整个！",
      "teacherTip": "问占整体几分几，单位是一不是块；分物常识验大小，哪能一人一整个！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-20",
      "student": "Sophia",
      "nodeId": "geom_01",
      "domain": "geometry_applications",
      "category": "算法步骤类",
      "severity": "critical",
      "source": "5A 练习册 P32 (4.2)",
      "topic": "三角形面积公式与除以2",
      "title": "三角形面积漏除以2及二次数位失误",
      "question": "三角形底0.44m，高0.15m，求面积。",
      "originalQuestion": "三角形底0.44m，高0.15m，求面积。",
      "studentAnswer": "算成 0.44×0.15=0.066 m²；订正除以2时又算成 0.33 m²。",
      "rootCause": "平行四边形公式负迁移遗漏除以2；小数除法十分位漏商0占位。",
      "standardSolution": "S = 0.44 × 0.15 ÷ 2 = 0.22 × 0.15 = 0.033 m²。",
      "mnemonic": "三角梯形亲兄弟，算完面积必除二；平四矩形才直接，丢了除二全白费！",
      "teacherTip": "三角梯形亲兄弟，算完面积必除二；平四矩形才直接，丢了除二全白费！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-21",
      "student": "Sophia",
      "nodeId": "power_04",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "5A 练习册 P39 (5.4)",
      "topic": "同类项与常数项合并",
      "title": "混淆同类项与常数项（强行合并为10x）",
      "question": "判断正误：5x + 4 + x = 10x。",
      "originalQuestion": "判断正误：5x + 4 + x = 10x。",
      "studentAnswer": "判断为正确 (√)。",
      "rootCause": "违背代数运算法则，将未知数系数5,1与常数项4相加（5+4+1=10）。",
      "standardSolution": "5x + 4 + x = (5x + 1x) + 4 = 6x + 4 ≠ 10x，命题为假 (X)。",
      "mnemonic": "代数化简分类别，同类才能并一家；字母同胞系数加，孤单常数别乱拉！",
      "teacherTip": "代数化简分类别，同类才能并一家；字母同胞系数加，孤单常数别乱拉！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-22",
      "student": "Sophia",
      "nodeId": "g3_03",
      "domain": "foundations_arithmetic",
      "category": "运算性质类",
      "severity": "critical",
      "source": "5A 练习册 P39 (5.4)",
      "topic": "正负号性质与相反数相消",
      "title": "相反数相消概念缺失（-m+m算成-2m）",
      "question": "判断正误：n + n - m + m = 2n - 2m。",
      "originalQuestion": "判断正误：n + n - m + m = 2n - 2m。",
      "studentAnswer": "判断为正确 (√)。",
      "rootCause": "符号法则混淆，未掌握互为相反数的项相加抵消为0（-m+m=0）。",
      "standardSolution": "n + n - m + m = 2n + (-m + m) = 2n + 0 = 2n ≠ 2n - 2m，命题为假 (X)。",
      "mnemonic": "加减符号随身走，一正一负抵成空；减去再加等于零，莫把相消当翻倍！",
      "teacherTip": "加减符号随身走，一正一负抵成空；减去再加等于零，莫把相消当翻倍！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-23",
      "student": "Sophia",
      "nodeId": "word_02",
      "domain": "geometry_applications",
      "category": "审题综合类",
      "severity": "critical",
      "source": "5A 练习册 P40背 (3.7)",
      "topic": "平均数总量差逻辑",
      "title": "平均数应用题总量差逻辑缺失",
      "question": "8场均分27，10场均分31，求最后2场总得分。",
      "originalQuestion": "8场均分27，10场均分31，求最后2场总得分。",
      "studentAnswer": "列式 31÷2=15.5 分，完全遗漏前8场均分27的条件。",
      "rootCause": "把均分当总分，缺乏后2场总分=10场总分-8场总分的总量差模型。",
      "standardSolution": "(31 × 10) - (27 × 8) = 310 - 216 = 94 分。",
      "mnemonic": "平均数题总量求，均乘场数总分留；两期总分做减法，后段得分立刻出！",
      "teacherTip": "平均数题总量求，均乘场数总分留；两期总分做减法，后段得分立刻出！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-24",
      "student": "Sophia",
      "nodeId": "power_04",
      "domain": "number_theory_powers",
      "category": "解题规范类",
      "severity": "critical",
      "source": "5A 练习册 P40 (5.5)",
      "topic": "代数符号抽象与化简指令",
      "title": "代数符号特例替代与抗拒先化简",
      "question": "(1) 正方形边长a求面积；(2) 先化简再求值：x=2.5时求 18x-8x。",
      "originalQuestion": "(1) 正方形边长a求面积；(2) 先化简再求值：x=2.5时求 18x-8x。",
      "studentAnswer": "(1) 填具体算式 4x4=16；(2) 不化简直接代入 18×2.5-8×2.5 算出35。",
      "rootCause": "抽象符号障碍，用特例逃避代数式；漠视题目指令抗拒化简。",
      "standardSolution": "(1) S = a²；(2) 18x - 8x = 10x，代入得 10×2.5 = 25。",
      "mnemonic": "字母代表万千数，公式莫填特例数；先化简来后求值，轻舟已过万重山！",
      "teacherTip": "字母代表万千数，公式莫填特例数；先化简来后求值，轻舟已过万重山！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-25",
      "student": "Sophia",
      "nodeId": "word_01",
      "domain": "geometry_applications",
      "category": "解题规范类",
      "severity": "high",
      "source": "5A 练习册 P44 (5.9)",
      "topic": "条形线段模型等量关系",
      "title": "条形线段模型总长守恒断裂（3y=0荒唐赋值）",
      "question": "三层等长条形：4x = x + 4.5，第三层为3y，求y的方程。",
      "originalQuestion": "三层等长条形：4x = x + 4.5，第三层为3y，求y的方程。",
      "studentAnswer": "解出x=1.5后，第二问写 3y=0, y=0。",
      "rootCause": "缺乏总长守恒意识，面对第二未知数跨行时思维卡壳。",
      "standardSolution": "总长 4×1.5 = 6，第三层 3y = 6，解得 y = 2。",
      "mnemonic": "条形等长总长定，解出 x 算全长；全长守恒挂在心，第二变量迎刃解！",
      "teacherTip": "条形等长总长定，解出 x 算全长；全长守恒挂在心，第二变量迎刃解！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-26",
      "student": "Sophia",
      "nodeId": "g5_01",
      "domain": "decimals_percentages",
      "category": "算法步骤类",
      "severity": "critical",
      "source": "5A 练习册 P46 (6.2)",
      "topic": "小数四则混合运算",
      "title": "混合运算乘法漏小数位且除法混同减法",
      "question": "计算：0.4 × (3.2 - 0.8) ÷ 1.2。",
      "originalQuestion": "计算：0.4 × (3.2 - 0.8) ÷ 1.2。",
      "studentAnswer": "写出 = 0.4×2.4÷1.2 = 9.6÷1.2 = 9.3。",
      "rootCause": "乘法漏点小数位（0.4×2.4算成9.6），急躁将除法看成减法（9.6-0.3=9.3）。",
      "standardSolution": "0.4 × 2.4 ÷ 1.2 = 0.96 ÷ 1.2 = 0.8（或 0.4 × 2 = 0.8）。",
      "mnemonic": "小数相乘数位数，一位加一得两位；除号莫当减号看，巧用结合算得快！",
      "teacherTip": "小数相乘数位数，一位加一得两位；除号莫当减号看，巧用结合算得快！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-27",
      "student": "Sophia",
      "nodeId": "word_01",
      "domain": "geometry_applications",
      "category": "审题综合类",
      "severity": "high",
      "source": "5A 练习册 P13/P14",
      "topic": "双语数学审题与句式陷阱",
      "title": "英文倍数句式倒置与分物遗漏自身",
      "question": "(1) How many times 26 is 65? (2) 73.85 between herself and 4 friends。",
      "originalQuestion": "(1) How many times 26 is 65? (2) 73.85 between herself and 4 friends。",
      "studentAnswer": "(1) 列 26÷65=0.4；(2) 直接除以4算成 18.4625。",
      "rootCause": "语序定势机械套用；只抓数字four漏看代词herself（实为5人）。",
      "standardSolution": "(1) 65÷26 = 2.5；(2) 73.85 ÷ (1+4) = 73.85 ÷ 5 = 14.77。",
      "mnemonic": "times 谁谁就是除数，herself 出现必加一；圈画主语找基准，双语题眼不马虎！",
      "teacherTip": "times 谁谁就是除数，herself 出现必加一；圈画主语找基准，双语题眼不马虎！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-28",
      "student": "Sophia",
      "nodeId": "adv_02",
      "domain": "geometry_applications",
      "category": "解题规范类",
      "severity": "critical",
      "source": "5A 练习册 P25 (3.1)",
      "topic": "统计图坐标刻度与趋势外推",
      "title": "折线图纵轴刻度不均与昼夜温差外推谬误",
      "question": "根据白天温差数据画折线图，并预测未来几天气温。",
      "originalQuestion": "根据白天温差数据画折线图，并预测未来几天气温。",
      "studentAnswer": "纵轴0~2画1格、2~4画2格；傍晚降温机械预测未来降到4~5°C。",
      "rootCause": "坐标轴刻度均匀性认知缺失；单日昼夜温差误当长期天气走势。",
      "standardSolution": "每格代表1°C则0~2必须画2格；未来几天气温呈日周期在6~14°C波动。",
      "mnemonic": "坐标轴上线段齐，一格几度定死规；单日升降是昼夜，跨日预测莫妄推！",
      "teacherTip": "坐标轴上线段齐，一格几度定死规；单日升降是昼夜，跨日预测莫妄推！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-29",
      "student": "Sophia",
      "nodeId": "power_01",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "high",
      "source": "6A校本讲义 P.3 (Photo 74)",
      "topic": "平方数的奇偶性",
      "title": "平方运算奇偶性认知倒置",
      "question": "计算各式并判断结果是Odd还是Even：(1) 3²；(2) 4²。",
      "originalQuestion": "计算各式并判断结果是Odd还是Even：(1) 3²；(2) 4²。",
      "studentAnswer": "算出 3²=9 填 even；算出 4²=16 填 odd，两题奇偶判断完全颠倒。",
      "rootCause": "高认知负荷下偶数/奇数英文概念瞬时反转，注意力被指数运算占满导致基础概念断路。",
      "standardSolution": "3²=9是Odd（奇数）；4²=16是Even（偶数）。奇数的平方必为奇，偶数的平方必为偶。",
      "mnemonic": "平方奇偶看底数，底奇平方也是奇；Even偶数双双对，Odd奇数单个立！",
      "teacherTip": "平方奇偶看底数，底奇平方也是奇；Even偶数双双对，Odd奇数单个立！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-30",
      "student": "Sophia",
      "nodeId": "g5_01",
      "domain": "decimals_percentages",
      "category": "算法步骤类",
      "severity": "critical",
      "source": "5B练习册 P.34 (Photo 36)",
      "topic": "小数简便运算与数位量感",
      "title": "小数简算乘积位值与基数错乱",
      "question": "(1) (1.25+2.5)×4；(2) 0.5×1.6×125；(3) 8.4×2.5 与 0.05×0.23。",
      "originalQuestion": "(1) (1.25+2.5)×4；(2) 0.5×1.6×125；(3) 8.4×2.5 与 0.05×0.23。",
      "studentAnswer": "(1) 展开写成 1.25×4+2.5×4=2+1=3；(2) 0.5×0.4算成2得2000；(3) 8.4×2.5算成1700；0.05×0.23算成0.0125。",
      "rootCause": "分配律公式掌握但基数乘积分项位值严重崩溃，估算监控系统失灵产生百倍偏差。",
      "standardSolution": "(1) 1.25×4+2.5×4=5+10=15；(2) (0.5×0.2)×(8×125)=0.1×1000=100；(3) 8.4×2.5=21；0.05×0.23=0.0115。",
      "mnemonic": "简算分配律很棒，分项乘积莫慌张；一点二五乘四是五，算前算后估一估！",
      "teacherTip": "简算分配律很棒，分项乘积莫慌张；一点二五乘四是五，算前算后估一估！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-31",
      "student": "Sophia",
      "nodeId": "div_05",
      "domain": "number_theory_powers",
      "category": "方法不规范类",
      "severity": "critical",
      "source": "6A校本讲义 P.6 (Photo 77)",
      "topic": "指数形式求HCF与LCM",
      "title": "质因数指数幂形式HCF降维转化失效",
      "question": "已知 E=2¹⁰×3⁴，F=2⁶×3×5⁵，求E和F的HCF并用index form表示。",
      "originalQuestion": "已知 E=2¹⁰×3⁴，F=2⁶×3×5⁵，求E和F的HCF并用index form表示。",
      "studentAnswer": "试图在草稿纸上暴力硬算E=1024×81和F的大数乘积，因计算量过大崩溃放弃留白。",
      "rootCause": "对指数形式即质因数清单的结构认知缺失，未掌握求HCF公共底数取最小指数min法则。",
      "standardSolution": "公共底数为2和3；底数2取最小指数6，底数3取最小指数1，HCF = 2⁶ × 3。",
      "mnemonic": "质因数幂求公因，切莫展开算大数；公共底数挑出来，指数选小即是真！",
      "teacherTip": "质因数幂求公因，切莫展开算大数；公共底数挑出来，指数选小即是真！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-32",
      "student": "Sophia",
      "nodeId": "power_05",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "6A校本讲义 P.8 (Photo 79)",
      "topic": "科学记数法与负指数",
      "title": "科学记数法负指数前导零与标准型系数规范",
      "question": "(1) 3.04×10⁻³写成普通小数；(2) 0.0000000901用科学记数法表示；(3) 65200用科学记数法表示。",
      "originalQuestion": "(1) 3.04×10⁻³写成普通小数；(2) 0.0000000901用科学记数法表示；(3) 65200用科学记数法表示。",
      "studentAnswer": "(1) 写成 0.0000304（多移2位）；(2) 写成 1×10⁻¹⁰（忽略901数错指数）；(3) 写成 652×10²（系数不规范）。",
      "rootCause": "负指数平移机制混淆；标准形式 a×10ⁿ 中 1≤a<10 刚性规范意识缺失。",
      "standardSolution": "(1) 小数点左移3位得 0.00304；(2) 右移8位得 9.01 × 10⁻⁸；(3) 6.52 × 10⁴。",
      "mnemonic": "科学记数标准型，系数一至十之间；负指小数往左跳，几次方就跳几步！",
      "teacherTip": "科学记数标准型，系数一至十之间；负指小数往左跳，几次方就跳几步！",
      "status": "in_progress"
    },
    {
      "id": "ERR-SOP-33",
      "student": "Sophia",
      "nodeId": "geom_02",
      "domain": "geometry_applications",
      "category": "算法步骤类",
      "severity": "medium",
      "source": "5B练习册 P.17 (Photo 19)",
      "topic": "复合立体图形小正方体体积",
      "title": "阶梯复合立体体积数积漏格",
      "question": "棱长1cm小正方体拼成的阶梯状复合立体图形，求总体积。",
      "originalQuestion": "棱长1cm小正方体拼成的阶梯状复合立体图形，求总体积。",
      "studentAnswer": "拆块计算得 96 cm³，比实际体积漏算 4 cm³。",
      "rootCause": "三维视角遮挡盲区，底层被遮挡的小正方体在视线盲区中被遗漏，缺乏自下而上的分层标数法。",
      "standardSolution": "采用自下而上分层计数法或立面标数法，底层25个，逐层汇总共100个小正方体，总体积为 100 cm³。",
      "mnemonic": "立体直观易遮挡，底层基石莫漏掉；自下而上分层数，标数汇总最靠谱！",
      "teacherTip": "立体直观易遮挡，底层基石莫漏掉；自下而上分层数，标数汇总最靠谱！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-01",
      "student": "William",
      "nodeId": "power_01",
      "domain": "foundations_arithmetic",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "英数G6暑期1~10节全期反复出现",
      "topic": "乘方本质 vs 乘法",
      "title": "反复混淆乘方与乘法（全学期第一顽疾）",
      "question": "计算：2³, 2⁴, 3⁴, 2¹⁰, 10⁰。",
      "originalQuestion": "计算：2³, 2⁴, 3⁴, 2¹⁰, 10⁰。",
      "studentAnswer": "2³=6, 2⁴=8, 3⁴=18, 2¹⁰=20, 10⁰=10。",
      "rootCause": "视觉惰性导致看见角标本能当作乘数相乘，未建立手写连乘展开习惯。",
      "standardSolution": "2³=2×2×2=8; 2⁴=16; 3⁴=81; 2¹⁰=1024; 10⁰=1。",
      "mnemonic": "右上角是分身术，底数是本人；角标是几分身几个，连乘起来才是真！连乘乘方莫当加！",
      "teacherTip": "右上角是分身术，底数是本人；角标是几分身几个，连乘起来才是真！连乘乘方莫当加！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-02",
      "student": "William",
      "nodeId": "power_02",
      "domain": "foundations_arithmetic",
      "category": "算法机制类",
      "severity": "critical",
      "source": "英数G6暑期第4、9节 (2026-07-10)",
      "topic": "同底数幂乘除法则",
      "title": "同底数幂相乘指数误相乘",
      "question": "简化计算：10⁴ × 10⁵。",
      "originalQuestion": "简化计算：10⁴ × 10⁵。",
      "studentAnswer": "10⁴ × 10⁵ = 10²⁰（指数4×5=20）。",
      "rootCause": "死记公式记混，不理解公式代表因数个数相加，将同底相乘与幂的乘方混淆。",
      "standardSolution": "10⁴ × 10⁵ = 10⁴⁺⁵ = 10⁹。",
      "mnemonic": "同底相乘把数数，前面几个加后面几个；同底相乘指数加，千万别把指数乘！",
      "teacherTip": "同底相乘把数数，前面几个加后面几个；同底相乘指数加，千万别把指数乘！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-03",
      "student": "William",
      "nodeId": "g4_01",
      "domain": "foundations_arithmetic",
      "category": "概念断层类",
      "severity": "critical",
      "source": "英数G6暑期第6节 (2026-07-07)",
      "topic": "十进制数位 (Tens vs Tenths)",
      "title": "十位与十分位数位全错",
      "question": "在数值 483.59 中指出数字 8 和 5 所在数位。",
      "originalQuestion": "在数值 483.59 中指出数字 8 和 5 所在数位。",
      "studentAnswer": "十分位5答为十位(tens)，十位8答为十分位(tenths)，三道数位题全错。",
      "rootCause": "四五年级英文数位基础断层，对以个位为中心的对称性及-ths词根缺失语感。",
      "standardSolution": "8在十位(Tens=10)，5在十分位(Tenths=0.1)。",
      "mnemonic": "小数点右边带-ths，咬舌尖的分数位；小数点左边无-ths，整数位值大十倍！",
      "teacherTip": "小数点右边带-ths，咬舌尖的分数位；小数点左边无-ths，整数位值大十倍！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-04",
      "student": "William",
      "nodeId": "g4_02",
      "domain": "foundations_arithmetic",
      "category": "严重断层类",
      "severity": "critical",
      "source": "英数G6暑期第8节 (2026-07-09)",
      "topic": "小数加法竖式与进位",
      "title": "小数进位混乱导致荒诞结果 (0.9+0.1=4.1)",
      "question": "列竖式计算：0.9 + 0.1。",
      "originalQuestion": "列竖式计算：0.9 + 0.1。",
      "studentAnswer": "竖式算出 0.9 + 0.1 = 4.1。",
      "rootCause": "竖式未对齐小数点，进位机制断路，完全丧失生活化数感量感监控。",
      "standardSolution": "十分位9+1=10，写0向个位进1，点下小数点得 1.0。",
      "mnemonic": "小数加减点对齐，对齐才能做加减；满十进一头上标，常识估算验一遍！",
      "teacherTip": "小数加减点对齐，对齐才能做加减；满十进一头上标，常识估算验一遍！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-05",
      "student": "William",
      "nodeId": "g5_02",
      "domain": "foundations_arithmetic",
      "category": "算法机制类",
      "severity": "critical",
      "source": "英数G6暑期第6节 (2026-07-07)",
      "topic": "小数除法移位规律",
      "title": "小数除法移位方向搞反 (5.4÷0.6=0.9)",
      "question": "计算：5.4 ÷ 0.6。",
      "originalQuestion": "计算：5.4 ÷ 0.6。",
      "studentAnswer": "答出 0.9。",
      "rootCause": "不理解商不变性质将除数化为整数的本质，小数点移反方向；未理解除以纯小数商变大。",
      "standardSolution": "5.4 ÷ 0.6 = 54 ÷ 6 = 9。",
      "mnemonic": "除数变整数，被除数跟着扩大；除数缩小小，商反而往大跑！",
      "teacherTip": "除数变整数，被除数跟着扩大；除数缩小小，商反而往大跑！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-06",
      "student": "William",
      "nodeId": "g3_03",
      "domain": "foundations_arithmetic",
      "category": "严重断层类",
      "severity": "high",
      "source": "英数G6暑期第6节 (2026-07-07)",
      "topic": "四则运算顺序与小数加法",
      "title": "小数加法说'不会'与四则乱加括号",
      "question": "计算多步四则混合算式。",
      "originalQuestion": "计算多步四则混合算式。",
      "studentAnswer": "面对小数加法宣称'不会做'；四则运算随意加括号破坏先乘除后加减顺序。",
      "rootCause": "四五年级四则运算基本功严重不扎实，存在畏难逃避心理。",
      "standardSolution": "严格遵守先乘除、后加减，有括号先算括号内的层级法则。",
      "mnemonic": "运算顺序不可乱，先乘除来后加减；括号里面先算完，规矩做题不添乱！",
      "teacherTip": "运算顺序不可乱，先乘除来后加减；括号里面先算完，规矩做题不添乱！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-07",
      "student": "William",
      "nodeId": "div_01",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "high",
      "source": "英数G6暑期第10节 (2026-07-11)",
      "topic": "因数定义与质因数分解",
      "title": "因数概念与连加加数混淆",
      "question": "写出16的质因数分解式并列出所有正因数。",
      "originalQuestion": "写出16的质因数分解式并列出所有正因数。",
      "studentAnswer": "回答16的因数是'8个2'。",
      "rootCause": "混淆加法与乘法逻辑，把 2+2+...+2=16 与 2⁴=16 混为一谈。",
      "standardSolution": "质因数分解：16 = 2⁴（4个2相乘）；正因数有 1, 2, 4, 8, 16。",
      "mnemonic": "因数是乘出来的，不是加出来的！找因数成对找，两头往中间挤！",
      "teacherTip": "因数是乘出来的，不是加出来的！找因数成对找，两头往中间挤！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-08",
      "student": "William",
      "nodeId": "div_02",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "high",
      "source": "暑期第3节 & 秋季第1节 (2026-09-12)",
      "topic": "质数合数严格定义",
      "title": "质数定义漏'只能'，误判77、91为质数",
      "question": "判断 77、83、91、97 是否为质数。",
      "originalQuestion": "判断 77、83、91、97 是否为质数。",
      "studentAnswer": "圈选 77 和 91 为质数；背定义漏'只能'，说'可以被自己整除的数'。",
      "rootCause": "质数定义不严密；对百以内常见伪装合数（7×11=77, 7×13=91）缺乏敏感度。",
      "standardSolution": "77=7×11（合数），91=7×13（合数）；83与97为质数。",
      "mnemonic": "质数必须带'只能'；7和13要小心，七十三乘九十一，三七二十一，全是披羊皮的狼！",
      "teacherTip": "质数必须带'只能'；7和13要小心，七十三乘九十一，三七二十一，全是披羊皮的狼！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-09",
      "student": "William",
      "nodeId": "div_05",
      "domain": "number_theory_powers",
      "category": "算法机制类",
      "severity": "high",
      "source": "英数G6暑期第4节 (2026-07-05)",
      "topic": "HCF与LCM算法",
      "title": "HCF与LCM求法指数错误求和",
      "question": "求 54 和 90 的 LCM 与 HCF。",
      "originalQuestion": "求 54 和 90 的 LCM 与 HCF。",
      "studentAnswer": "LCM中将3的指数相加写成 3⁵；HCF中把7个2和3个2相加得10。",
      "rootCause": "不理解 HCF 是公共取少、LCM 是全覆盖取多，把覆盖关系当成指数加法。",
      "standardSolution": "54=2×3³, 90=2×3²×5。HCF=2×3²=18; LCM=2×3³×5=270。",
      "mnemonic": "最大公因门槛高，只看公共取小的；最小公倍胃口大，全部质因取大的；两边指数绝不加！",
      "teacherTip": "最大公因门槛高，只看公共取小的；最小公倍胃口大，全部质因取大的；两边指数绝不加！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-10",
      "student": "William",
      "nodeId": "g4_03",
      "domain": "fractions",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "英数G6暑期第9节 (2026-07-10)",
      "topic": "分数本质与除法",
      "title": "分数除法当乘法 (2/8=16)",
      "question": "将分数 2/8 化简并转为小数；计算 25 ÷ 100 最简分数。",
      "originalQuestion": "将分数 2/8 化简并转为小数；计算 25 ÷ 100 最简分数。",
      "studentAnswer": "2/8 写成 2×8=16；25 ÷ 100 写成 100/25 = 4。",
      "rootCause": "分数线代表除号的物理代数意义脱节，被除数除数颠倒或当乘法。",
      "standardSolution": "2/8 = 2 ÷ 8 = 1/4 = 0.25；25 ÷ 100 = 25/100 = 1/4 = 0.25。",
      "mnemonic": "分子在上被除数，分母在下是除数；分数横线就是除，绝不能够变成乘！",
      "teacherTip": "分子在上被除数，分母在下是除数；分数横线就是除，绝不能够变成乘！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-11",
      "student": "William",
      "nodeId": "frac_01",
      "domain": "fractions",
      "category": "算法步骤类",
      "severity": "high",
      "source": "英数G6暑期第10节 (2026-07-11)",
      "topic": "分数除法与倒数法则",
      "title": "倒数法则两步不同步",
      "question": "计算：5/12 ÷ 15/16。",
      "originalQuestion": "计算：5/12 ÷ 15/16。",
      "studentAnswer": "除数颠倒成 16/15，但中间依然写除号 5/12 ÷ 16/15。",
      "rootCause": "把'除以一个数等于乘以倒数'割裂开，未形成改除号为乘号与颠倒除数的强绑定。",
      "standardSolution": "5/12 ÷ 15/16 = 5/12 × 16/15 = (1×4)/(3×3) = 4/9。",
      "mnemonic": "除号变乘号，除数翻跟头！两步必须一块走，千万别留半边头！",
      "teacherTip": "除号变乘号，除数翻跟头！两步必须一块走，千万别留半边头！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-12",
      "student": "William",
      "nodeId": "g3_02",
      "domain": "fractions",
      "category": "概念混淆类",
      "severity": "high",
      "source": "英数G6暑期第10节 (2026-07-11)",
      "topic": "带余除法与带分数",
      "title": "带余除法商余数除数位置混乱",
      "question": "计算 52 ÷ 24 并化为带分数最简形式。",
      "originalQuestion": "计算 52 ÷ 24 并化为带分数最简形式。",
      "studentAnswer": "写成'24又4/2'。",
      "rootCause": "对商（整数部分）、余数（新分子）、除数（分母）的空间对应关系完全混乱。",
      "standardSolution": "52 ÷ 24 = 2 余 4 = 2又4/24 = 2又1/6。",
      "mnemonic": "带余除法转带分：商当整数站在前，余数顶天当分子，除数趴地当地基！",
      "teacherTip": "带余除法转带分：商当整数站在前，余数顶天当分子，除数趴地当地基！",
      "status": "needs_consolidation"
    },
    {
      "id": "ERR-WIL-13",
      "student": "William",
      "nodeId": "adv_01",
      "domain": "foundations_arithmetic",
      "category": "代数变形类",
      "severity": "critical",
      "source": "英数G6暑期第5节 (2026-07-06)",
      "topic": "比例性质与代数等式",
      "title": "比例运算把比号当乘号",
      "question": "已知比例 C:D = 3:5，求用C表示D的代数式。",
      "originalQuestion": "已知比例 C:D = 3:5，求用C表示D的代数式。",
      "studentAnswer": "写成 D = C × 3 ÷ 5，比号当乘号。",
      "rootCause": "缺乏方程天平思想，背诵口诀但完全不会应用，符号认知混乱。",
      "standardSolution": "C/D = 3/5 ⟹ 3D = 5C ⟹ D = 5C/3。",
      "mnemonic": "比例写成分数式，交叉相乘成等式；要留字母在左边，两边同除伴身数！",
      "teacherTip": "比例写成分数式，交叉相乘成等式；要留字母在左边，两边同除伴身数！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-14",
      "student": "William",
      "nodeId": "div_07",
      "domain": "foundations_arithmetic",
      "category": "审题综合类",
      "severity": "medium",
      "source": "英数G6秋季第2节 (2026-09-16)",
      "topic": "大数同余整除压轴",
      "title": "大数整除压轴题条件严重遗漏",
      "question": "六位数 91X93Y 能被 65 整除，求X和Y。",
      "originalQuestion": "六位数 91X93Y 能被 65 整除，求X和Y。",
      "studentAnswer": "由65=5×13解出Y=0或5即停笔交卷，完全遗漏X的求解。",
      "rootCause": "半途满足心理，解题缺乏标准化闭环流水线，未联立13整除条件求解X。",
      "standardSolution": "Y=0时代入91X930，同余化简-X+7为13倍数解得X=7；Y=5无解。解为X=7, Y=0。",
      "mnemonic": "压轴大数双字母，先拆条件再联立；解出Y来绝不停，代回大数剥洋葱！",
      "teacherTip": "压轴大数双字母，先拆条件再联立；解出Y来绝不停，代回大数剥洋葱！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-15",
      "student": "William",
      "nodeId": "word_01",
      "domain": "foundations_arithmetic",
      "category": "解题规范类",
      "severity": "medium",
      "source": "英数G6秋季第2节 (2026-09-16)",
      "topic": "行程与分率应用题",
      "title": "行程应用题缺乏分步解题框架直接空题",
      "question": "小明15分钟走900米，(1)求平均速度；(2)每分钟走全程几分之几？",
      "originalQuestion": "小明15分钟走900米，(1)求平均速度；(2)每分钟走全程几分之几？",
      "studentAnswer": "两问全部空白不写，缺乏起步框架。",
      "rootCause": "应用题畏难情绪，未建立'圈条件→写公式→代入计算'的解题三部曲习惯。",
      "standardSolution": "(1) v = 900 ÷ 15 = 60米/分；(2) 1 ÷ 15 = 1/15。",
      "mnemonic": "应用题三部曲：第一步画图圈数字，第二步写出公式，第三步代入求答案！",
      "teacherTip": "应用题三部曲：第一步画图圈数字，第二步写出公式，第三步代入求答案！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-16",
      "student": "William",
      "nodeId": "g5_03",
      "domain": "decimals_percentages",
      "category": "规则遗忘类",
      "severity": "high",
      "source": "英数G6暑期第7、8节 (2026-07-08/09)",
      "topic": "有效数字规则与四舍五入近似值",
      "title": "中间0不算有效数字 & 四舍五入直接抄原数",
      "question": "(1) 指出 5.208 有几位有效数字；(2) 将 183.9591 精确到整数（或个位）。",
      "originalQuestion": "(1) 指出 5.208 有几位有效数字；(2) 将 183.9591 精确到整数（或个位）。",
      "studentAnswer": "(1) 认为 5.208 只有 3 位（跳过中间的 0）；(2) 直接抄写 183（忽略小数十分位 9 的进位）。",
      "rootCause": "有效数字规则“两非零之间的零全部有效”未内化；四舍五入未形成画看线（看后一位）的条件反射。",
      "standardSolution": "(1) 5.208 中从第一个非零数字 5 起所有数字均有效，共 4 位有效数字 (5, 2, 0, 8)；(2) 精确到个位看十分位 9，满五进一，183 + 1 = 184。",
      "mnemonic": "首位非零开始数，中间零和末尾零都算数；四舍五入看后位，满五进一别忘了！",
      "teacherTip": "首位非零开始数，中间零和末尾零都算数；四舍五入看后位，满五进一别忘了！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-17",
      "student": "William",
      "nodeId": "div_04",
      "domain": "number_theory_powers",
      "category": "方法不规范类",
      "severity": "medium",
      "source": "英数G6暑期第10节 (2026-07-11)",
      "topic": "短除法质因数分解试商规范",
      "title": "短除法跳过质数直接试除合数6",
      "question": "用短除法对 72 进行质因数分解。",
      "originalQuestion": "用短除法对 72 进行质因数分解。",
      "studentAnswer": "第一步短除号外直接写 6，试除合数导致质因数不纯粹。",
      "rootCause": "急于求快，混淆了“短除法求最大公因数”与“质因数分解”的除数限定（分解质因数必须且只能用质数）。",
      "standardSolution": "分解质因数左侧除数必须为质数（从小到大试除：2, 3, 5, 7...）：72÷2=36, 36÷2=18, 18÷2=9, 9÷3=3，得到 72 = 2³ × 3²。",
      "mnemonic": "质因数分解用短除，左边除数必须质；二三五七排队试，合数决不上除台！",
      "teacherTip": "质因数分解用短除，左边除数必须质；二三五七排队试，合数决不上除台！",
      "status": "mastered"
    },
    {
      "id": "ERR-WIL-18",
      "student": "William",
      "nodeId": "div_01",
      "domain": "number_theory_powers",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "6A校本教材 P.1-P.4 (2026-09)",
      "topic": "因数完备性与整除多分支",
      "title": "因数边界遗漏与整除多分支漏解",
      "question": "(1) 写出28所有因数；(2) 集合{105,232,510,895,901}找被5整除的数；(3) 六位数5A342B被3和5整除求A和B。",
      "originalQuestion": "(1) 写出28所有因数；(2) 集合{105,232,510,895,901}找被5整除的数；(3) 六位数5A342B被3和5整除求A和B。",
      "studentAnswer": "(1) 漏最大因数28；(2) 漏510；(3) 仅做B=0分支，完全遗漏B=5分支导致大面积漏解。",
      "rootCause": "因数未成对列举；对被5整除末位为0或5存在盲区；多元整除缺乏穷尽分支的分类讨论习惯。",
      "standardSolution": "(1) 1, 2, 4, 7, 14, 28；(2) 105, 510, 895；(3) B=0时A=1,4,7；B=5时A=2,5,8，共6组解。",
      "mnemonic": "因数成对两头找，一与本身少不了；个位零五五整除，分类讨论两头堵！",
      "teacherTip": "因数成对两头找，一与本身少不了；个位零五五整除，分类讨论两头堵！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-19",
      "student": "William",
      "nodeId": "g4_01",
      "domain": "decimals_percentages",
      "category": "概念混淆类",
      "severity": "critical",
      "source": "4B练习册 P.35 (2025-S2)",
      "topic": "小数位值与大小比较",
      "title": "小数数位逆序混淆与量感倒置",
      "question": "在横线上填入合适的小数使不等式成立：33.6 > ____。",
      "originalQuestion": "在横线上填入合适的小数使不等式成立：33.6 > ____。",
      "studentAnswer": "填入 34.01，写成 33.6 > 34.01 产生荒谬逆转。",
      "rootCause": "大于小于符号方向混淆，孤立比对十分位忽视整数部分，缺乏生活化量感监控。",
      "standardSolution": "开口向左左大右小，右边必须填小于33.6的数，如33.5、32等。",
      "mnemonic": "大于开口朝左边，左大右小记心间；先看整数谁威风，整数大来全盘赢！",
      "teacherTip": "大于开口朝左边，左大右小记心间；先看整数谁威风，整数大来全盘赢！",
      "status": "in_progress"
    },
    {
      "id": "ERR-WIL-20",
      "student": "William",
      "nodeId": "word_01",
      "domain": "geometry_applications",
      "category": "解题规范类",
      "severity": "high",
      "source": "6A校本教材 P.6-P.7 (2026-09)",
      "topic": "代数方程整除与公因数建模",
      "title": "字母代数盲猜与实际应用题留白",
      "question": "(1) 正整数解 mnp=5(m+n+p)；(2) 48cm×36cm纸板裁最大相同正方形无剩余求边长和块数。",
      "originalQuestion": "(1) 正整数解 mnp=5(m+n+p)；(2) 48cm×36cm纸板裁最大相同正方形无剩余求边长和块数。",
      "studentAnswer": "(1) 方程不推导盲猜填 1111；(2) 文字应用题直接完全留白交卷。",
      "rootCause": "代数整除分析能力薄弱，退化为乱猜；应用题阅读畏难，未能抽象为求最大公因数模型。",
      "standardSolution": "(1) 5整除mnp设m=5，分解(n-1)(p-1)=6解得(5,3,4)；(2) HCF(48,36)=12cm，总块数(48÷12)×(36÷12)=12块。",
      "mnemonic": "字母方程看倍数，分解因式设主元；文字长题别害怕，长宽裁剪求公因！",
      "teacherTip": "字母方程看倍数，分解因式设主元；文字长题别害怕，长宽裁剪求公因！",
      "status": "in_progress"
    }
  ],
  "actionPlans": {
    "currentPhaseSummary": "目前处于小学六年级第一学期开学第3周结束阶段（已完成秋季4次系统授课）。体制内沪教版第一章《数的整除》已全章结课并完成压轴攻坚，第二章《分数》全面展开（通分、假带互化、四则混合、裂项初步）；立体几何板块已完成长正方体拼接表面积扣减与维度进率推导。两人的关键攻坚战是'分数的严谨运算与规范书写'、'维度单位换算的乘方理解'，以及 William '乘方与乘法本质辨析和小数竖式补漏'。",
    "roadmap": [
      {
        "week": "第1-2周（已完成）",
        "status": "completed",
        "shanghaiTopic": "第1章《数的整除》全部内容（素数合数、整除判定、短除法、HCF/LCM）",
        "englishTopic": "Ch01-03 Real Numbers & Primes, HCF, LCM",
        "schoolBasedTopic": "折纸探索2ⁿ幂次增长、六位数整除压轴(91X93Y)同余法",
        "assessment": "Sophia 80-85%（快但粗心，有概念混淆）；William 70-75%（参与意愿高但有严重断层，压轴题遗漏条件）"
      },
      {
        "week": "第3周（已完成·秋季第3-4课）",
        "status": "completed",
        "shanghaiTopic": "第2章《分数》2.1-2.4节（分数意义、花钱法比大小、通分、异分母加减法、假带分数互化、分数乘法）",
        "englishTopic": "Ch09 Fractions Operations (Multiplication & Division, Reciprocals), 3D Solids & Surface Area",
        "schoolBasedTopic": "维度进率（长度、面积、体积换算与科学记数法估算）、长方体三种拼法表面积极值比较、裂项相消求和、短除法性质 a×b=GCD×LCM",
        "assessment": "Sophia 85-88%（空间感知与裂项领悟快，仍需防范漏写单位与跳步）；William 74-78%（立体拼搭直觉良好、短除法规范，需巩固四五年级小数与单位规范）"
      },
      {
        "week": "第4-5周（即将进行·攻坚强化期）",
        "status": "current",
        "shanghaiTopic": "第2章 2.5-2.6 分小互化与分数工程/行程应用题 → 第3章《比和比例》",
        "englishTopic": "Ch10-14 Percentages, Discounts & Simple Interest; Ch15-17 Ratios",
        "schoolBasedTopic": "双语比例方程建模、单利息公式应用、复合多步应用题分步解析",
        "assessment": "核心目标：强化代数等式变形规范，提升两人的独立审题与严谨推导书写能力"
      },
      {
        "week": "第6-8周（后续规划·期中冲刺）",
        "status": "upcoming",
        "shanghaiTopic": "第3章比例性质与第4章《圆和扇形》初步",
        "englishTopic": "Comprehensive Review & Mid-term Preparation",
        "schoolBasedTopic": "初中预备班期中综合压轴模考、竞赛思维衔接",
        "assessment": "阶段性能力达标考核与知识图谱全绿验收"
      }
    ],
    "sophiaPlan": [
      {
        "priority": "高",
        "area": "通分与运算机制",
        "action": "强制推行【通分三步法】手写演算单：第1步写LCM公分母，第2步写分子同步乘以倍数，第3步再合并分子。严禁心算直接报答案。"
      },
      {
        "priority": "高",
        "area": "估算与粗心遏制",
        "action": "建立【算前估算，算后验算】检查卡：计算 2又1/3 + 3又5/6 前先在草稿纸标注预估范围 6 < S < 7，彻底杜绝 18+5=90 类似失误。"
      },
      {
        "priority": "中",
        "area": "归纳推理与概念辨析",
        "action": "每周完成 2 道'找规律与完全平方数'概念辨析题，要求用中英双语口头复述'为什么6不是完全平方数'，锻炼从特例到通则的抽象归纳能力。"
      },
      {
        "priority": "中",
        "area": "课堂抗干扰机制",
        "action": "后半节课若 William 出现分心，老师主动给 Sophia 递送【高阶思维卡】（如自编整除压轴题或竞赛拓展），保持其高速思维运转，避免被同伴拖累。"
      }
    ],
    "williamPlan": [
      {
        "priority": "极高",
        "area": "四五年级运算补漏",
        "action": "每日固定 5 道【小数竖式与数位特训】（3道加减+2道乘除）：重点标出小数点对齐线与进位小红点，强化 0.9+0.1=1.0 与 5.4÷0.6=9 的位移直觉。"
      },
      {
        "priority": "极高",
        "area": "乘方本质实物建模",
        "action": "制作【乘方与连乘特训卡】：每次遇到指数，必须先手写展开为连乘形式（如 2³ → 2 × 2 × 2 = 8），坚决杜绝 2³=6 惯性，连续打卡两周。"
      },
      {
        "priority": "高",
        "area": "审题完整度与解题流水线",
        "action": "大题与应用题强制实行【三部曲模板】：①圈画已知条件并分类列出；②写出核心公式（如 65=5×13 或 v=S/t）；③分步联立求解，绝不允许做完一半即交卷。"
      },
      {
        "priority": "高",
        "area": "课堂精力与独立自信",
        "action": "课堂前 35 分钟集中攻坚重点，后半段切换为积木/折纸等动手探究任务；严禁课后用豆包等 AI 工具抄作业答案，建立'错题不怕，过程写清即加星'的激励机制。"
      }
    ]
  },
  "consolidationWorksheets": [
    {
      "id": "ws-sophia-01",
      "targetStudent": "sophia",
      "studentBadge_en": "🌸 Sophia Exclusive",
      "studentBadge_cn": "🌸 Sophia 专属",
      "title_en": "[Sophia Exclusive] Concept Rigor & Careless Mistake Elimination (Set 1)",
      "title_cn": "【Sophia 专属】概念严谨性与运算防粗心攻坚卷（第1期）",
      "timeLimit_en": "30 Mins",
      "timeLimit_cn": "30 分钟",
      "totalPoints": 100,
      "badgeColor": "#ec4899",
      "targetAreas_en": "Square Number Fallacies · Equivalent Fractions Synchronous Expansion · Double-column Draft · Modulo Divisibility",
      "targetAreas_cn": "概念反向辨析 · 异分母通分同扩倍 · 双栏草稿防笔误 · 同余整除压轴",
      "desc_en": "Tailored to eliminate careless calculation errors and conceptual traps: square numbers (6 is NOT square), finding side from square area (sqrt(A) vs A/2), expanding numerators synchronously when finding common denominators, and 6-digit divisibility.",
      "desc_cn": "针对完全平方数反向辨析（破解6是平方数错觉）、正方形面积求边长（杜绝除以2）、分数异分母通分同扩倍双步填空、双栏草稿防笔误实操、六位数同余大数整除完整求解。内含详细参考答案与评分标准。",
      "tags_en": [
        "Square Numbers",
        "Equivalent Fractions",
        "Draft Discipline",
        "Modulo Divisibility"
      ],
      "tags_cn": [
        "完全平方数",
        "通分同扩倍",
        "双栏草稿",
        "大数同余"
      ],
      "pdfUrl_en": "pdf/WS01_Sophia_Concept_Rigor_EN.pdf",
      "pdfUrl_cn": "pdf/WS01_Sophia_Concept_Rigor_CN.pdf",
      "htmlUrl_en": "worksheets/sophia_practice_set1_en.html",
      "htmlUrl_cn": "worksheets/sophia_practice_set1_cn.html",
      "fileSize": "711 KB / 1.1 MB",
      "cleanPdfUrl_cn": "pdf/clean/WS01_Concept_Rigor_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS01_Concept_Rigor_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws01_concept_rigor_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws01_concept_rigor_clean_en.html",
      "cleanFileSize": "579 KB / 921 KB"
    },
    {
      "id": "ws-william-01",
      "targetStudent": "william",
      "studentBadge_en": "⚡ William Exclusive",
      "studentBadge_cn": "⚡ William 专属",
      "title_en": "[William Exclusive] Basic Arithmetic Recovery & Powers Foundation (Set 1)",
      "title_cn": "【William 专属】四则运算基础复原与乘方本质攻坚卷（第1期）",
      "timeLimit_en": "35 Mins",
      "timeLimit_cn": "35 分钟",
      "totalPoints": 100,
      "badgeColor": "#3b82f6",
      "targetAreas_en": "Decimal Arithmetic Clinic · Powers as Repeated Multiplication · Three-Step Word Problem Template · Comparing Fractions",
      "targetAreas_cn": "小数四则微特训 · 乘方连乘展开 · 审题三部曲模板 · 巧比分数大小",
      "desc_en": "Systematic remediation of Grade 4-5 arithmetic gaps: decimal alignment (0.9+0.1=1.0, 5.4/0.6=9, 30/0.5=60), repeated multiplication tables to cure 2^3=6 & 3^4=18, structured 3-step word problem template, and residual fraction comparison.",
      "desc_cn": "针对小学四五年级小数四则运算脱节（0.9+0.1=1.0、5.4÷0.6=9）、乘方连乘手写展开表（杜绝2³=6、3⁴=18）、大题审题“三部曲模板”（完整求出X与Y）、巧比分数大小。内含详细参考答案与评分标准。",
      "tags_en": [
        "Decimal Clinic",
        "Powers Expansion",
        "3-Step Template",
        "Fraction Comparison"
      ],
      "tags_cn": [
        "小数四则微特训",
        "乘方连乘展开",
        "审题三部曲模板",
        "巧比大小"
      ],
      "pdfUrl_en": "pdf/WS02_William_Arithmetic_Recovery_EN.pdf",
      "pdfUrl_cn": "pdf/WS02_William_Arithmetic_Recovery_CN.pdf",
      "htmlUrl_en": "worksheets/william_practice_set1_en.html",
      "htmlUrl_cn": "worksheets/william_practice_set1_cn.html",
      "fileSize": "576 KB / 969 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS02_Arithmetic_Recovery_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS02_Arithmetic_Recovery_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws02_arithmetic_recovery_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws02_arithmetic_recovery_clean_en.html",
      "cleanFileSize": "459 KB / 743 KB"
    },
    {
      "id": "ws-dual-01",
      "targetStudent": "dual",
      "studentBadge_en": "👥 Dual Integrated",
      "studentBadge_cn": "👥 双人合卷",
      "title_en": "[Dual Track] SUIS G6 Integrated Math Diagnostic Test",
      "title_cn": "【双人合卷】协和双语融合班 · 六上期初三轨融合达标测试卷",
      "timeLimit_en": "40 Mins",
      "timeLimit_cn": "40 分钟",
      "totalPoints": 100,
      "badgeColor": "#4f46e5",
      "targetAreas_en": "Shanghai Prep Ch1 Concluding · International Book A Terms · SUIS School-based Thinking · 40-Min Test",
      "targetAreas_cn": "沪教预备第1章收官 · Book A双语考点 · 协和校本思维压轴 · 随堂测验",
      "desc_en": "Covers all key testing points from Shanghai Ch1 Divisibility (factors, prime factorization, GCD/LCM) + International Maths Book A terms + SUIS school-based thinking (24-point factor recombination). Ideal for in-class 40-minute diagnostic comparison.",
      "desc_cn": "沪教预备版第1章《数的整除》全考点精炼（因数倍数、质因数分解、公因数公倍数）+ International Math Book A 英文考点 + 协和校本思维压轴与24点。适合课堂40分钟双人对比测验。附分步评分细则。",
      "tags_en": [
        "Tri-Track Integration",
        "40-Min Quiz",
        "Divisibility Mastery",
        "Bilingual Math"
      ],
      "tags_cn": [
        "三轨教材融合",
        "随堂40分钟",
        "数的整除结课",
        "双语考点"
      ],
      "pdfUrl_en": "pdf/WS03_SUIS_G6_Diagnostic_Test_EN.pdf",
      "pdfUrl_cn": "pdf/WS03_SUIS_G6_Diagnostic_Test_CN.pdf",
      "htmlUrl_en": "worksheets/suis_g6_diagnostic_test_en.html",
      "htmlUrl_cn": "worksheets/suis_g6_diagnostic_test_cn.html",
      "fileSize": "564 KB / 889 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS03_G6_Diagnostic_Test_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS03_G6_Diagnostic_Test_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws03_g6_diagnostic_test_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws03_g6_diagnostic_test_clean_en.html",
      "cleanFileSize": "531 KB / 831 KB"
    },
    {
      "id": "ws-flashcards-01",
      "targetStudent": "all",
      "studentBadge_en": "🌟 Daily Flashcards",
      "studentBadge_cn": "🌟 两人打卡",
      "title_en": "[Daily Deck] Historical Error Review & Pedagogical Mnemonics Cards",
      "title_cn": "【打卡卡包】经典错题变式回访与名师口诀速记卡包",
      "timeLimit_en": "5 Mins Daily",
      "timeLimit_cn": "每日 5 分钟",
      "totalPoints": "Continuous",
      "badgeColor": "#059669",
      "targetAreas_en": "17 Historical Error Variations · Rhyming Mnemonics · 5-Min Warmup · Weekend Review",
      "targetAreas_cn": "17道典型错题举一反三 · 教师点拨口诀 · 课前5分钟热身 · 周末自主打卡",
      "desc_en": "Selected from classroom error archives with parallel variations of all 17 classic mistakes, catchy English & Chinese teacher mnemonics, and habit check-in boxes. Ideal for 5-minute pre-class warmups.",
      "desc_cn": "精选错题本中的典型错题进行同题型变式，配备朗朗上口的名师记忆口诀与打卡进度栏，适合课前 5 分钟热身或周末自主巩固。附每道题的参考答案与反思提示。",
      "tags_en": [
        "Error Variations",
        "Mnemonics",
        "5-Min Drill",
        "Check-in Cards"
      ],
      "tags_cn": [
        "错题变式",
        "名师口诀",
        "每日5分钟",
        "打卡卡包"
      ],
      "pdfUrl_en": "pdf/WS04_Daily_Error_Flashcards_EN.pdf",
      "pdfUrl_cn": "pdf/WS04_Daily_Error_Flashcards_CN.pdf",
      "htmlUrl_en": "worksheets/error_review_flashcards_en.html",
      "htmlUrl_cn": "worksheets/error_review_flashcards_cn.html",
      "fileSize": "345 KB / 502 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS04_Error_Review_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS04_Error_Review_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws04_error_review_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws04_error_review_clean_en.html",
      "cleanFileSize": "293 KB / 396 KB"
    },
    {
      "id": "ws-foundation-01",
      "targetStudent": "william",
      "studentBadge_en": "⚡ Foundational Clinic 1",
      "studentBadge_cn": "⚡ 基础专练一",
      "title_en": "[Clinic 1] Grade 4-5 Decimals, Place Value & Percentages Mastery",
      "title_cn": "【基础专练一】四五年级小数位值、对齐进位与百分数换算特训",
      "timeLimit_en": "35 Mins",
      "timeLimit_cn": "35 分钟",
      "totalPoints": 100,
      "badgeColor": "#0ea5e9",
      "targetAreas_en": "Tens vs Tenths · Decimal Carrying · Divisor Integer Shift · Percentage Conversion (0.075 to 7.5%) · Sig Figs (6 vs 6.0)",
      "targetAreas_cn": "Tens与Tenths辨析 · 小数进位加法 · 小数除法移位 · 百分数互化(0.075化7.5%) · 有效数字与精度",
      "desc_en": "Root-cause remediation for G4-5 decimals: column alignment for addition, integer shift for decimal division (5.4/0.6=9, 30/0.5=60), shifting 2 decimal places to percentages (0.075=7.5% not 75%), and precision bounds (6 vs 6.0).",
      "desc_cn": "针对四五年级小数核心断层：Tens与Tenths数位板对照、带零竖式除法商0占位、小数加减垂直进位、小数除法除数整数化（30÷0.5=60）、百分数换算（0.075=7.5%杜绝75%或0.75%）、有效数字前导零辨析。",
      "tags_en": [
        "Place Value",
        "Tens vs Tenths",
        "Decimal Division",
        "Percentages",
        "Sig Figs"
      ],
      "tags_cn": [
        "数位对照",
        "Tens与Tenths",
        "小数除法移位",
        "百分数换算",
        "有效数字"
      ],
      "pdfUrl_en": "pdf/WS05_G45_Decimals_Place_Value_EN.pdf",
      "pdfUrl_cn": "pdf/WS05_G45_Decimals_Place_Value_CN.pdf",
      "htmlUrl_en": "worksheets/g45_decimals_place_value_en.html",
      "htmlUrl_cn": "worksheets/g45_decimals_place_value_cn.html",
      "fileSize": "497 KB / 734 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS05_Decimals_Place_Value_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS05_Decimals_Place_Value_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws05_decimals_place_value_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws05_decimals_place_value_clean_en.html",
      "cleanFileSize": "387 KB / 592 KB"
    },
    {
      "id": "ws-foundation-02",
      "targetStudent": "william",
      "studentBadge_en": "⚡ Foundational Clinic 2",
      "studentBadge_cn": "⚡ 基础专练二",
      "title_en": "[Clinic 2] Grade 4-5 Powers, Exponents & Multiplication Clinic",
      "title_cn": "【基础专练二】四五年级乘方本质、指数法则与连乘展开特训",
      "timeLimit_en": "35 Mins",
      "timeLimit_cn": "35 分钟",
      "totalPoints": 100,
      "badgeColor": "#8b5cf6",
      "targetAreas_en": "Powers as Repeated Multiplication · Dispel 2^3=6 & 3^4=18 · Index Law a^m * a^n · Zero Power a^0=1 · Prime Factorization",
      "targetAreas_cn": "乘方连乘本质 · 破除2³=6与3⁴=18乘法混淆 · 指数相加法则 · 0指数a⁰=1 · 质因数指数形式",
      "desc_en": "Eradicates the chronic confusion between multiplication and powers: handwritten repeated expansion tables (2^3=8 vs 2*3=6; 3^4=81 vs 3*4=12), factor pairs vs repeated factors (16 is 2^4, not 8 twos), index laws (10^4 * 10^5 = 10^9), and 10^0=1.",
      "desc_cn": "根除William乘方全错顽疾：手写连乘展开表（2³=8不是6；3⁴=81不是12）、因数相乘与因数相加区别（16是4个2相乘不是8个2）、同底数幂乘法指数相加（10⁴×10⁵=10⁹杜绝10²⁰）、10⁰=1模式推导。",
      "tags_en": [
        "Powers Clinic",
        "Repeated Multiplication",
        "Index Laws",
        "Zero Exponents",
        "Prime Powers"
      ],
      "tags_cn": [
        "乘方特训",
        "连乘展开表",
        "指数法则",
        "零指数",
        "质因数分解"
      ],
      "pdfUrl_en": "pdf/WS06_G45_Powers_Multiplication_EN.pdf",
      "pdfUrl_cn": "pdf/WS06_G45_Powers_Multiplication_CN.pdf",
      "htmlUrl_en": "worksheets/g45_powers_multiplication_en.html",
      "htmlUrl_cn": "worksheets/g45_powers_multiplication_cn.html",
      "fileSize": "570 KB / 820 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS06_Powers_Multiplication_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS06_Powers_Multiplication_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws06_powers_multiplication_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws06_powers_multiplication_clean_en.html",
      "cleanFileSize": "477 KB / 669 KB"
    },
    {
      "id": "ws-foundation-03",
      "targetStudent": "dual",
      "studentBadge_en": "🌸 Sophia & ⚡ William",
      "studentBadge_cn": "🌸 Sophia & ⚡ William",
      "title_en": "[Clinic 3] Grade 4-5 Fraction Basics, Equivalent Fractions & Operations",
      "title_cn": "【基础专练三】四五年级分数基本性质、通分约分与假带互化特训",
      "timeLimit_en": "35 Mins",
      "timeLimit_cn": "35 分钟",
      "totalPoints": 100,
      "badgeColor": "#ec4899",
      "targetAreas_en": "Equivalent Fractions · Synchronous Expansion · Division with Remainder to Mixed Number · Borrowing Subtraction · Division Reciprocal",
      "targetAreas_cn": "分数基本性质 · 通分分子同步扩倍 · 带余除法化带分数 · 带分数借位减法 · 倒数除法",
      "desc_en": "Focuses on common fraction traps from classroom notes: invariant ratio principle (expand both numerator and denominator), quotient-remainder conversion (52/24 = 2 4/24 = 2 1/6, not 24 4/2), borrowing 1 in mixed subtraction, and Keep-Change-Flip division.",
      "desc_cn": "针对分数核心痛点：商不变原理与通分同扩倍（分母乘几分子必须乘几，杜绝3/4+2/5=5/20）、有余数除法写带分数（52÷24=2又4/24杜绝24又4/2）、带分数减法借位转化为假分数、分数除法倒数两步走、残差法巧比大小。",
      "tags_en": [
        "Equivalent Fractions",
        "Common Denominator",
        "Mixed Numbers",
        "Fraction Division",
        "Residual Comparison"
      ],
      "tags_cn": [
        "分数基本性质",
        "通分同扩倍",
        "假带互化",
        "倒数除法",
        "残差比大小"
      ],
      "pdfUrl_en": "pdf/WS07_G45_Fractions_Operations_EN.pdf",
      "pdfUrl_cn": "pdf/WS07_G45_Fractions_Operations_CN.pdf",
      "htmlUrl_en": "worksheets/g45_fractions_operations_en.html",
      "htmlUrl_cn": "worksheets/g45_fractions_operations_cn.html",
      "fileSize": "471 KB / 719 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS07_Fractions_Operations_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS07_Fractions_Operations_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws07_fractions_operations_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws07_fractions_operations_clean_en.html",
      "cleanFileSize": "385 KB / 572 KB"
    },
    {
      "id": "ws-foundation-04",
      "targetStudent": "dual",
      "studentBadge_en": "🌸 Sophia & ⚡ William",
      "studentBadge_cn": "🌸 Sophia & ⚡ William",
      "title_en": "[Clinic 4] Grade 3-5 Order of Operations, Geometry Measurement & Word Problems",
      "title_cn": "【基础专练四】三四五年级运算优先级(BODMAS)、几何周长面积与行程应用题",
      "timeLimit_en": "35 Mins",
      "timeLimit_cn": "35 分钟",
      "totalPoints": 100,
      "badgeColor": "#10b981",
      "targetAreas_en": "BODMAS Order · Square Side from Area (sqrt(A) not A/2) · Metric Scale Factors (cm3 to m3) · Speed Time Unit Alignment (40 min = 2/3 hr)",
      "targetAreas_cn": "运算优先级(BODMAS) · 正方形面积反求边长(杜绝除以2) · 度量衡进率换算 · 行程问题单位对齐(40分化2/3小时)",
      "desc_en": "Addresses fundamental order of operations and measurement gaps: BODMAS strict priority (avoiding 18+5=90 slip), square side length sqrt(Area) not Area/2, 3D metric scale factors (1m3 = 1,000,000 cm3), and converting 40 minutes to 2/3 hr (not 0.4 hr).",
      "desc_cn": "攻克三四五年级综合应用痛点：四则混合运算顺序BODMAS、正方形面积反求边长（边长=√面积绝不能除以2）、长正方形周长与面积辨析、度量衡高低阶进率（1m³=1,000,000cm³）、速度时间单位统一（40分钟=2/3小时绝非0.4小时）、水箱水深上升三步法。",
      "tags_en": [
        "BODMAS",
        "Square Area vs Side",
        "Metric Units",
        "Speed Distance Time",
        "Aquarium Volume"
      ],
      "tags_cn": [
        "运算顺序BODMAS",
        "面积反求边长",
        "度量衡进率",
        "行程时间单位",
        "水箱容积模型"
      ],
      "pdfUrl_en": "pdf/WS08_G35_BODMAS_Geometry_Word_Problems_EN.pdf",
      "pdfUrl_cn": "pdf/WS08_G35_BODMAS_Geometry_Word_Problems_CN.pdf",
      "htmlUrl_en": "worksheets/g35_bodmas_geometry_word_problems_en.html",
      "htmlUrl_cn": "worksheets/g35_bodmas_geometry_word_problems_cn.html",
      "fileSize": "504 KB / 837 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS08_BODMAS_Geometry_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS08_BODMAS_Geometry_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws08_bodmas_geometry_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws08_bodmas_geometry_clean_en.html",
      "cleanFileSize": "426 KB / 677 KB"
    },
    {
      "id": "ws-sophia-5a-01",
      "targetStudent": "sophia",
      "studentBadge_en": "🌸 Sophia Exclusive",
      "studentBadge_cn": "🌸 Sophia 专属",
      "title_en": "[Sophia Exclusive] Grade 5A Workbook Error Remediation & Ch6 Review Mastery",
      "title_cn": "【Sophia 专属】五年级上册（5A）练习册错题靶向修复与总复习盲区攻坚卷",
      "timeLimit_en": "45-50 Mins",
      "timeLimit_cn": "45-50 分钟",
      "totalPoints": 100,
      "badgeColor": "#ec4899",
      "targetAreas_en": "Quotient Scaling · Combining Like Terms & Sign Rules · Strict Column Division · Triangle Area Halving · Ch6 Review Gaps",
      "targetAreas_cn": "商的变化与小数位移 · 代数同类项与符号抵消 · 严谨竖式商对齐 · 三角面积必除二 · 第6单元总复习盲区",
      "desc_en": "Full-spectrum targeted remediation developed from Sophia's complete 5A workbook error audit (16 diagnostic cards) and Chapter 6 unsupervised blank pages: decimal division scaling, pure decimal comparisons, recurring decimal cycles, algebraic combining like terms (avoiding 4x+7=11x), additive inverse cancellation, triangle area (halving), multi-variable shopping, average score delta, bar-model length conservation, work collaboration, opposite-direction travel, and boat rental surplus/deficit.",
      "desc_cn": "基于Sophia校内5A练习册52页作业全量审计（16张专属错题诊断卡）与第6单元总复习空白盲区定制：全面攻克除数是小数列竖式移位对齐、商的变化规律、代数同类项与常数项严禁合并（杜绝4x+7+2x=13x）、符号法则与相反数相消、三角形面积必除以2、双语分物分率辨析、彩带条形总长守恒方程、两队合作工程、相向而行相遇方程、租船盈亏压轴题。附名师避坑口诀与完整评分细则。",
      "tags_en": [
        "5A Workbook Audit",
        "Algebraic Rigor",
        "Decimal Division",
        "Triangle Area",
        "Ch6 Review Blind Spots"
      ],
      "tags_cn": [
        "5A练习册全册审计",
        "代数同类项规范",
        "小数除法严谨竖式",
        "三角面积除以二",
        "第6单元总复习攻坚"
      ],
      "pdfUrl_en": "pdf/WS09_Sophia_5A_Consolidation_Test_EN.pdf",
      "pdfUrl_cn": "pdf/WS09_Sophia_5A_Consolidation_Test_CN.pdf",
      "htmlUrl_en": "worksheets/sophia_5a_consolidation_test_en.html",
      "htmlUrl_cn": "worksheets/sophia_5a_consolidation_test_cn.html",
      "fileSize": "709 KB / 1.2 MB",
      "cleanPdfUrl_cn": "pdf/clean/WS09_5A_Consolidation_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS09_5A_Consolidation_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws09_5a_consolidation_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws09_5a_consolidation_clean_en.html",
      "cleanFileSize": "645 KB / 1020 KB"
    },
    {
      "id": "ws-dual-classrecord-01",
      "targetStudent": "dual",
      "studentBadge_en": "🌸 Sophia & ⚡ William",
      "studentBadge_cn": "🌸 Sophia & ⚡ William",
      "title_en": "[Classroom Transcript Targeted Mastery] Grade 6 Fortnight Vulnerability & Cognitive Blind Spot Comprehensive Exam (WS10)",
      "title_cn": "【课堂实录全量靶向】六年级开学两周高频易错与认知盲区综合攻坚卷（WS10）",
      "timeLimit_en": "50-60 Mins",
      "timeLimit_cn": "50-60 分钟",
      "totalPoints": 100,
      "badgeColor": "#8b5cf6",
      "targetAreas_en": "Powers of 10 Divisibility · Dimensional Reduction (24cm3÷3cm=8cm2) · Glued Cuboids Double-Overlap · Modulo 13 (91X93Y) · Telescoping Sums",
      "targetAreas_cn": "十进制幂次整除 · 体积除法降维(24cm³÷3cm=8cm²) · 粘合立体双重遮挡扣除 · 模13同余大题(91X93Y) · 裂项相消求和",
      "desc_en": "Fully compiled from line-by-line audits of 4 authentic classroom audio transcripts (1702 lines total) and 53 historical error cards. Targets exact vulnerabilities: powers of 10 divisibility principles (8 and 125 last 3 digits), prime/composite truth statements with counterexamples, unit digit cycles (2^2026 and 3^2026), 1D/2D/3D metric unit scaling, physical interpretation of dividing volume by height (base/top faces), scientific notation fast checking, distributive property proof of trapezoid area, mixed number addition avoiding 18+5=90 slip, true LCM finding, HCF/LCM in prime index form, product theorem (a×b=GCD×LCM), telescoping sum 1/(1×2)+...+1/(2025×2026)=2025/2026, glued 3×4×5 cuboid and 2×2×2 cube painted surface area (double-overlap subtraction: 94+24-8=110), three stacking configurations of two 2×3×5 cuboids (correcting school teacher's marking slip: 112 maximum), constant-speed journey fractions (7/20), spending money comparison model (C>A>B>D), and the grand modulo 13 divisibility finale (91X93Y divisible by 65 -> X=7, Y=0). Complete answer key and scoring criteria included.",
      "desc_cn": "全量基于9月12~20日四次正课转录录音全文（1702行真实师生问答与错答实录）及53张结构化错题卡靶向定制：全面突破十进制整除判定本质（8和125看末三位）、质数合数反例证伪（5的倍数/合数与质数比大小）、乘方周期性末位（2²⁰²⁶与3²⁰²⁶个位数推演）、一二三维高低阶进率换算、体积除以高产生降维的几何空间本质（对应顶面底面绝非侧面）、科学记数法速算与估算检验法（2×30=60抓错）、梯形公式逆用分配律推导、带分数假化运算（严防18+5=90手滑）、短除法真LCM通分、指数形式求HCF/LCM（严禁硬乘万级草稿）、两数之积等于GCD与LCM之积定理、裂项相消经典求和（1/(1×2)+...+1/(2025×2026)=2025/2026）、长方体与正方体粘合表面积（重叠面双倍扣除：94+24-8=110）、两个长方体三种叠放表面积（纠正校内批改104误区，证明112为最大极值）、行程应用题时间分率（最后7分钟占7/20）、花钱收钱法代数大小比较（C>A>B>D）、以及大数同余整除压轴六位数破解（91X93Y能被65整除，模13递推唯一解X=7, Y=0）。内含完整参考答案与详细评分细则。",
      "tags_en": [
        "Classroom Audio Audit",
        "Powers of 10 Divisibility",
        "Dimensional Reduction",
        "Glued Cuboids Surface Area",
        "Modulo 13 Finale",
        "Telescoping Sums"
      ],
      "tags_cn": [
        "录音实录全量靶向",
        "十进制整除本质",
        "除法降维几何意义",
        "粘合立体双倍扣除",
        "大数同余模13",
        "裂项相消"
      ],
      "pdfUrl_en": "pdf/WS10_Classrecord_Targeted_Mastery_EN.pdf",
      "pdfUrl_cn": "pdf/WS10_Classrecord_Targeted_Mastery_CN.pdf",
      "htmlUrl_en": "worksheets/ws10_classrecord_targeted_mastery_en.html",
      "htmlUrl_cn": "worksheets/ws10_classrecord_targeted_mastery_cn.html",
      "fileSize": "840 KB / 1.5 MB",
      "cleanPdfUrl_cn": "pdf/clean/WS10_Classrecord_Mastery_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS10_Classrecord_Mastery_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws10_classrecord_mastery_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws10_classrecord_mastery_clean_en.html",
      "cleanFileSize": "767 KB / 1.2 MB"
    },
    {
      "id": "ws11-school-workbook-algebra-geometry",
      "targetStudent": "dual",
      "studentBadge_en": "📚 School Workbook Targeted (Set 11)",
      "studentBadge_cn": "📚 校本练习册靶向卷（十一）",
      "title_en": "School Math Workbook Targeted Mastery Worksheet (Set 11): Numbers, Algebra, Equations & Geometry",
      "title_cn": "中小学数学校本练习册典型错题针对性巩固卷（十一）：数与代数·方程与几何",
      "timeLimit_en": "60 Mins",
      "timeLimit_cn": "60 分钟",
      "totalPoints": 100,
      "badgeColor": "#2563eb",
      "targetAreas_en": "Decimal Place Value · Column Division Alignment · Algebraic Combining Like Terms · Triangle Area Halving · Real-World Word Problems",
      "targetAreas_cn": "小数数位与计数单位 · 列竖式商对齐与补零 · 代数式化简同类项 · 三角形面积除以2 · 综合实际应用题",
      "desc_en": "Designed directly from authentic school workbook mistakes (G4B, G5A, G5B audits): decimal place value (tens vs tenths), pure decimal multiplication/division comparisons, quotient scaling rules, repeating decimal cycles, rounding carrying table, algebraic expression simplification (avoiding 5x+4+x=10x), solving multi-step linear equations, triangle & trapezoid areas, composite shape decomposition, and multi-step word problems with remainders.",
      "desc_cn": "严格基于中小学校本练习册（4B、5A、5B作业与错题库全景）真实错题研制：全面覆盖小数数位认知（十位与十分位）、乘除纯小数大小规律、商的变化与小数点位移、循环小数周期与展开式、四舍五入进位表、代数式同类项化简（杜绝5x+4+x=10x）、解方程与代数求值、直角三角形与梯形逆运算、复合图形割补面积、以及带余包装、单价购物、行程速度与线段方程等综合应用题。",
      "tags_en": [
        "School Workbook Audit",
        "Decimal Place Value",
        "Column Division",
        "Algebra & Equations",
        "Geometry & Measurement"
      ],
      "tags_cn": [
        "校本练习册全景审计",
        "小数数位与计数",
        "除法竖式规范",
        "代数化简与解方程",
        "几何测量与应用题"
      ],
      "pdfUrl_en": "pdf/WS11_School_Workbook_Algebra_Geometry_EN.pdf",
      "pdfUrl_cn": "pdf/WS11_School_Workbook_Algebra_Geometry_CN.pdf",
      "htmlUrl_en": "worksheets/ws11_school_workbook_algebra_geometry_en.html",
      "htmlUrl_cn": "worksheets/ws11_school_workbook_algebra_geometry_cn.html",
      "fileSize": "680 KB / 920 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS11_School_Workbook_Algebra_Geometry_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS11_School_Workbook_Algebra_Geometry_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws11_school_workbook_algebra_geometry_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws11_school_workbook_algebra_geometry_clean_en.html",
      "cleanFileSize": "650 KB / 890 KB",
      "gradingPdfUrl": "pdf/William_WS11_Grading_and_Error_Analysis.pdf",
      "gradingHtmlUrl": "worksheets/william_ws11_grading_and_error_analysis.html"
    },
    {
      "id": "ws12-school-workbook-number-theory-spatial",
      "targetStudent": "dual",
      "studentBadge_en": "📐 School Workbook Targeted (Set 12)",
      "studentBadge_cn": "📐 校本练习册靶向卷（十二）",
      "title_en": "School Math Workbook Targeted Mastery Worksheet (Set 12): Number Theory, Factors, Fractions & 3D Geometry",
      "title_cn": "中小学数学校本练习册典型错题针对性巩固卷（十二）：数论因倍·分数与立体几何",
      "timeLimit_en": "60 Mins",
      "timeLimit_cn": "60 分钟",
      "totalPoints": 100,
      "badgeColor": "#059669",
      "targetAreas_en": "Complete Factors Listing · Prime Factorization Index Form · Short Division Standards · Unlike Fractions Operations · 3D Blocks & Glued Surface Area",
      "targetAreas_cn": "完备因数列举 · 质因数分解指数形式 · 短除法规范 · 异分母通分四则 · 空间立体积木与表面积",
      "desc_en": "Designed directly from authentic school workbook and textbook mistakes (G6A textbook and G5B spatial geometry): complete factors listing without omissions (28, 48), prime/composite classification (77, 91), index form powers and HCF/LCM, prime-only short division, improper/mixed fractions conversions, unlike fractions addition/subtraction, Keep-Change-Flip division, rectangular prism stacking extremes, tiered unit-cube composite models with painted surface area, 2/3/5 divisibility branches, and statistical metrics (range, mode, median, mean).",
      "desc_cn": "严格基于中小学校本教材与练习册（6A校本教材数论因倍、5B立体空间几何及错题库）真实错题研制：全面覆盖正因数完备列举（28与48防漏两端）、质数合数严格辨析（77与91合数辨识）、乘方本质与指数运算、短除法规范试商、指数形式求HCF与LCM、假分数带分数互化、异分母通分四则混合运算、长方体拼接表面积极值比较、阶梯状正方体积木涂漆表面积与体积、多位数2/3/5整除多分支求解、统计特征数（极差、众数、中位数、平均数）及周期相遇综合应用。",
      "tags_en": [
        "School Textbook Audit",
        "Number Theory",
        "Prime Factorization",
        "Fractions Operations",
        "3D Spatial Geometry"
      ],
      "tags_cn": [
        "校本教材深度审计",
        "数论因倍质合",
        "短除法质因数分解",
        "分数通分与四则",
        "3D空间立体几何"
      ],
      "pdfUrl_en": "pdf/WS12_School_Workbook_Number_Theory_Spatial_EN.pdf",
      "pdfUrl_cn": "pdf/WS12_School_Workbook_Number_Theory_Spatial_CN.pdf",
      "htmlUrl_en": "worksheets/ws12_school_workbook_number_theory_spatial_en.html",
      "htmlUrl_cn": "worksheets/ws12_school_workbook_number_theory_spatial_cn.html",
      "fileSize": "690 KB / 940 KB",
      "cleanPdfUrl_cn": "pdf/clean/WS12_School_Workbook_Number_Theory_Spatial_Clean_CN.pdf",
      "cleanPdfUrl_en": "pdf/clean/WS12_School_Workbook_Number_Theory_Spatial_Clean_EN.pdf",
      "cleanHtmlUrl_cn": "worksheets/clean/ws12_school_workbook_number_theory_spatial_clean_cn.html",
      "cleanHtmlUrl_en": "worksheets/clean/ws12_school_workbook_number_theory_spatial_clean_en.html",
      "cleanFileSize": "660 KB / 910 KB"
    },
    {
      "id": "william-ws11-grading-analysis",
      "targetStudent": "william",
      "studentBadge_en": "⚡ William WS11 Real Paper Grading & Analysis",
      "studentBadge_cn": "⚡ William WS11 真实答卷逐题精批与深度精讲",
      "title_en": "William WS11 Diagnostic Grading Report & 7 Fatal Traps Deep Breakdown",
      "title_cn": "William WS11 真实试卷逐题精细批改报告与考前核心错题深度精讲 (PDF)",
      "timeLimit_en": "Diagnostic Report",
      "timeLimit_cn": "学情诊断报告",
      "totalPoints": 100,
      "badgeColor": "#f59e0b",
      "targetAreas_en": "Transposition & Divisor Rules · Unlike Terms Merging · Geometry Halving Formulas · Remainder Word Problems · Step-by-Step Scoring",
      "targetAreas_cn": "移项变号与除数法则 · 代数同类项辨析 · 几何面积除以2公式 · 审题差价与余数 · 考场大题步步得分",
      "desc_en": "Full question-by-question handwriting audit of William's WS11 test paper (43/100, with outstanding 90% score in Section 2 column operations and convenient math). Features comprehensive error analysis, teacher annotations, standard solutions, seven fatal exam traps with mnemonics, and tomorrow's 4-step exam game plan (+35~40 pts potential).",
      "desc_cn": "基于 William 真实手写 WS11 答卷全景精细批改（实考43/100分，第二大题计算竖式斩获90%卓越高分！）。深入剖析五大板块失分根因，包含逐题红绿标注、标准分步解答、移项变号/几何除以2/审题做差等七大考场丢分陷阱与速记口诀，附明日分班考4步抢分秘籍（冲刺80+分空间）。",
      "tags_en": [
        "Handwriting Audit",
        "Section 2 (90%)",
        "Equations Transposition",
        "Geometry Reverse",
        "Word Problem Pitfalls"
      ],
      "tags_cn": [
        "手写答卷全景精批",
        "计算90%惊艳得分",
        "方程移项与除数",
        "几何逆运算除以2",
        "大题步骤分抢分"
      ],
      "pdfUrl_en": "pdf/William_WS11_Grading_and_Error_Analysis.pdf",
      "pdfUrl_cn": "pdf/William_WS11_Grading_and_Error_Analysis.pdf",
      "htmlUrl_en": "worksheets/william_ws11_grading_and_error_analysis.html",
      "htmlUrl_cn": "worksheets/william_ws11_grading_and_error_analysis.html",
      "fileSize": "2.3 MB",
      "cleanPdfUrl_cn": null,
      "cleanPdfUrl_en": null
    },
    {
      "id": "g6-placement-exam-dual-handbook",
      "targetStudent": "dual",
      "studentBadge_en": "🏆 G6 Placement Exam English Mastery Handbook",
      "studentBadge_cn": "🏆 六年级纯英文分班考考前冲刺通关秘籍",
      "title_en": "SUIS G6 Placement Exam Dual-Student Secret Review Handbook (Pure English Test Prep)",
      "title_cn": "协和双语六年级分班考·双人针对性考前复习秘籍 (纯英文试卷冲刺)",
      "timeLimit_en": "Exam Prep",
      "timeLimit_cn": "考前密卷",
      "totalPoints": 100,
      "badgeColor": "#6366f1",
      "targetAreas_en": "English Math Glossary · Sophia Concept Traps · William Arithmetic Rules · 3D Spatial Geometry · High-Frequency Mistakes",
      "targetAreas_cn": "纯英文数学术语表 · Sophia概念陷阱防粗心 · William四则运算与乘方 · 3D积木立体空间 · 考场必背口诀",
      "desc_en": "Custom-tailored for tomorrow's Grade 6 Placement Exam (pure English paper). Contains dedicated survival guides for both Sophia (precision & multi-step rigor) and William (place value, arithmetic safety, algebraic transposition, and fraction conversions), plus a 40-word English-Chinese math vocabulary cheat sheet.",
      "desc_cn": "专为明日六年级分班考（纯英文试卷）量身定制。涵盖 Sophia 专属避坑指南（通分、几何单位、概念辨析）与 William 专属抢分秘籍（小数数位、乘方本质、解方程移项、分数互化），配齐40大核心纯英文数学术语速记表与考场口诀。",
      "tags_en": [
        "Placement Exam",
        "English Terminology",
        "Sophia Checklist",
        "William Checklist",
        "Dual Handbook"
      ],
      "tags_cn": [
        "分班考纯英必胜",
        "专业英文数学词汇",
        "Sophia避坑清单",
        "William保分口诀",
        "双人考前合卷"
      ],
      "pdfUrl_en": "pdf/G6_Placement_Exam_Dual_Secret_Handbook.pdf",
      "pdfUrl_cn": "pdf/G6_Placement_Exam_Dual_Secret_Handbook.pdf",
      "htmlUrl_en": "worksheets/g6_placement_exam_dual_handbook.html",
      "htmlUrl_cn": "worksheets/g6_placement_exam_dual_handbook.html",
      "fileSize": "1.2 MB",
      "cleanPdfUrl_cn": null,
      "cleanPdfUrl_en": null
    },
    {
      "id": "sophia-fractions-operation-interactive",
      "targetStudent": "sophia",
      "studentBadge_en": "🌸 Sophia Interactive Lab · Fractions Mastery",
      "studentBadge_cn": "🌸 Sophia 专属互动实验室 · 分数运算与应用题全通关",
      "title_en": "Interactive Fraction Mixed Operations & Word Problem Breakthrough (SUIS G6 Topic: Fractions Operation)",
      "title_cn": "Sophia 专属数学互动实验室 · 分数四则混合运算与应用题全通关（协和双语六上最新校本作业精讲）",
      "timeLimit_en": "Interactive Lab",
      "timeLimit_cn": "交互探索工坊",
      "totalPoints": 100,
      "badgeColor": "#ec4899",
      "targetAreas_en": "BODMAS with Fractions · Cross-Cancelling · Singapore Bar Model · Unit '1' Identification · Algebraic Modeling",
      "targetAreas_cn": "分数四则混合运算 · 交叉大约分 · 新加坡数学条形建模 · 基准量单位1锁定 · 代数未知数建模",
      "desc_en": "Dedicated interactive tutorial designed for Sophia's authentic SUIS worksheet (Topic: Fractions operation p.9). Features interactive BODMAS step-by-step breakdowns, Singapore Bar Model for brother ages, and the interactive candidate simulator for Ellen's interview calls.",
      "desc_cn": "针对 Sophia 真实校本作业（Topic: Fractions operation 第9页）量身研制的深度交互教学工坊。全面覆盖混合运算顺序、假分数保留规范、新加坡条形建模法破解三兄弟年龄、以及互动滑块彻底解开最后一题 Ellen 招聘电话的“代数思维与条件缺失”之谜！",
      "tags_en": [
        "Interactive Lab",
        "Fractions BODMAS",
        "Singapore Bar Model",
        "Algebraic Modeling",
        "Ellen Interview Mystery"
      ],
      "tags_cn": [
        "动态交互工坊",
        "混合运算运算律",
        "新加坡条形建模",
        "代数思维破局",
        "Ellen面试电话之谜"
      ],
      "pdfUrl_en": "worksheets/sophia_fractions_operation_interactive.html",
      "pdfUrl_cn": "worksheets/sophia_fractions_operation_interactive.html",
      "htmlUrl_en": "worksheets/sophia_fractions_operation_interactive.html",
      "htmlUrl_cn": "worksheets/sophia_fractions_operation_interactive.html",
      "fileSize": "Dynamic Web App",
      "cleanPdfUrl_cn": null,
      "cleanPdfUrl_en": null
    }
  ]
};

if (typeof window !== "undefined") {
  window.trackerData = trackerData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = trackerData;
}
