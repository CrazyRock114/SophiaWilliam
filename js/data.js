/**
 * Sophia & William 专属数学知识图谱追踪网站核心数据库
 * 升级包含三四五六年级全景知识图谱（36节点）与8套全英文默认针对性练习
 * 更新时间: 2026-09-19T01:41:47.055Z
 */

const trackerData = {
  "meta": {
    "school": "上海协和双语学校（虹桥校区）",
    "track": "融合班 (Integrated / Bilingual Track)",
    "grade": "小学六年级（初中预备班）第一学期",
    "semesterProgress": "开学半个月（第2周刚结束）",
    "asOfDate": "2026年9月18日",
    "curricula": [
      {
        "id": "shanghai",
        "name": "体制内教材",
        "version": "上海教育出版社（沪教版）初中预备班/六年级第一学期",
        "focus": "第1章《数的整除》刚学完/压轴拓展；第2章《分数》刚切入概念、大小比较与异分母加减通分"
      },
      {
        "id": "international",
        "name": "英数教材",
        "version": "《International Mathematics》G6 Preview Handout (Book A)",
        "focus": "Ch01-03 Real Numbers, Primes, HCF & LCM; Ch08 Scientific Notation & Powers; Ch09 Fractions Operations"
      },
      {
        "id": "school_based",
        "name": "校本与思维拓展",
        "version": "协和双语融合班特色探究与思维拔高",
        "focus": "折纸探索2ⁿ幂次增长、同余大数整除压轴题(91X93Y)、24点因数重组、生活化花钱法分数比较"
      }
    ]
  },
  "students": {
    "sophia": {
      "name": "Sophia",
      "grade": "6年级",
      "initialDate": "2026年3月",
      "totalLessons": 17,
      "breakdown": "英数G5+AMC8共5节 + G6暑期10节 + G6秋季2节",
      "currentAccuracy": "80% ~ 85%",
      "trend": [
        {
          "label": "G5春1",
          "score": 75
        },
        {
          "label": "G5春2",
          "score": 70
        },
        {
          "label": "G5春3",
          "score": 75
        },
        {
          "label": "G5春4",
          "score": 70
        },
        {
          "label": "G5春5",
          "score": 70
        },
        {
          "label": "G6暑1",
          "score": 75
        },
        {
          "label": "G6暑2",
          "score": 60
        },
        {
          "label": "G6暑3",
          "score": 55
        },
        {
          "label": "G6暑4",
          "score": 55
        },
        {
          "label": "G6暑5",
          "score": 50
        },
        {
          "label": "G6暑6",
          "score": 50
        },
        {
          "label": "G6暑7",
          "score": 55
        },
        {
          "label": "G6暑8",
          "score": 60
        },
        {
          "label": "G6暑9",
          "score": 55
        },
        {
          "label": "G6暑10",
          "score": 50
        },
        {
          "label": "G6秋1",
          "score": 85
        },
        {
          "label": "G6秋2",
          "score": 80
        }
      ],
      "strengths": [
        "课堂参与度极高，听课专注，解题反应迅速敏锐",
        "直观与几何空间悟性好（如折纸快速理解2⁶=64、光反射单向阀）",
        "生活化类比理解能力强（如'花钱法'秒懂分数大小比较）",
        "短除法质因数分解与GCD操作规范熟练"
      ],
      "weaknesses": [
        "核心概念混淆：混淆乘方与乘法（把6当完全平方数）、混淆加法与乘法（面积÷2=边长）",
        "分数运算机制不牢：带分数与假分数运算混淆(3/6+5/6=8/6)、通分时分子忘记同步相乘",
        "低级粗心失分严重：分数加法中计算出18+5=90、小数与百分数转换移位搞反(0.075→75%)",
        "归纳推理与本质抽象能力偏弱，习惯直接报答案不写中间推导过程",
        "课堂后半段偶有精力疲惫，易受同伴非教学话题分散注意力"
      ],
      "radar": {
        "numericalFluency": 78,
        "conceptualRigor": 68,
        "spatialAlgebraic": 88,
        "stepDiscipline": 62,
        "focusEndurance": 82
      }
    },
    "william": {
      "name": "William",
      "grade": "6年级",
      "initialDate": "2026年3月",
      "totalLessons": 16,
      "breakdown": "袋鼠数学C共4节 + G6暑期10节 + G6秋季2节",
      "currentAccuracy": "70% ~ 75%",
      "trend": [
        {
          "label": "袋鼠C1",
          "score": 50
        },
        {
          "label": "袋鼠C2",
          "score": 50
        },
        {
          "label": "袋鼠C3",
          "score": 55
        },
        {
          "label": "袋鼠C4",
          "score": 50
        },
        {
          "label": "G6暑1",
          "score": 65
        },
        {
          "label": "G6暑2",
          "score": 45
        },
        {
          "label": "G6暑3",
          "score": 35
        },
        {
          "label": "G6暑4",
          "score": 40
        },
        {
          "label": "G6暑5",
          "score": 35
        },
        {
          "label": "G6暑6",
          "score": 30
        },
        {
          "label": "G6暑7",
          "score": 20
        },
        {
          "label": "G6暑8",
          "score": 15
        },
        {
          "label": "G6暑9",
          "score": 35
        },
        {
          "label": "G6暑10",
          "score": 30
        },
        {
          "label": "G6秋1",
          "score": 75
        },
        {
          "label": "G6秋2",
          "score": 70
        }
      ],
      "strengths": [
        "课堂前半段积极主动，敢于上讲台尝试，有很强的参与愿望",
        "折纸与动手实操能力强，能迅速推算2的幂次（128→256→512）",
        "合数整除分解思路清晰，能正确拆解65=5×13得出Y=0或5",
        "短除法求最大公因数（GCD）掌握扎实，能迅速算出24与88的GCD=8"
      ],
      "weaknesses": [
        "四五年级基础严重断层：小数加减乘除与数位概念模糊（0.9+0.1=4.1、5.4÷0.6=0.9、tens/tenths混淆）",
        "乘方与乘法概念极度混淆：1³=3、2³=6、2⁴=8、3⁴=18、10⁴×10⁵=10²⁰（指数相乘而非相加）",
        "质数与合数定义不牢固：反复遗忘质数'只能'被1和自身整除，将因数16说成'8个2'",
        "审题与条件遗漏严重：大数整除压轴题仅解出Y未联立解X；行程问题因缺乏分步框架空题不写",
        "注意力持久度低：后半节课走神显著（玩尺子、画画、吃东西），频繁带动干扰Sophia",
        "依赖外部工具：作业曾用豆包查答案并抄错（3³抄成33），缺乏独立攻坚信心"
      ],
      "radar": {
        "numericalFluency": 55,
        "conceptualRigor": 52,
        "spatialAlgebraic": 72,
        "stepDiscipline": 50,
        "focusEndurance": 48
      }
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
      "williamMastery": "proficient",
      "williamScore": 78,
      "williamNote": "整数加减能算，但在小数进位时习惯未完全迁移，需持续规范数位对齐意识。",
      "errorRefIds": [
        "err_05"
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
      "williamMastery": "proficient",
      "williamScore": 74,
      "williamNote": "带余除法能算，但商与余数写为假分数或带分数时偶有倒置（如52÷24写成24又4分之2）。",
      "errorRefIds": [
        "err_07",
        "err_12"
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
      "williamMastery": "needs_work",
      "williamScore": 60,
      "williamNote": "运算顺序受视觉吸引容易冲动先算加法，需强制画出运算顺序辅助下划线。",
      "errorRefIds": [
        "err_05",
        "err_15"
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
        "err_13"
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
        "err_08"
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
        "err_08",
        "err_14"
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
        "err_09",
        "err_14"
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
        "err_13",
        "err_14"
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
        "err_13"
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
      "williamMastery": "proficient",
      "williamScore": 72,
      "williamNote": "理解互化原理，但在带余除法直接化带分数时偶有商余倒置（52÷24=2又4/24需确认商写前面）。",
      "errorRefIds": [
        "err_07",
        "err_12"
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
      "williamMastery": "proficient",
      "williamScore": 76,
      "williamNote": "概念能复述，但在通分加法时偶有只乘分母忘乘分子现象。",
      "errorRefIds": [
        "err_06",
        "err_12"
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
      "williamMastery": "proficient",
      "williamScore": 75,
      "williamNote": "能熟练采用逐步除以2/3的方法约分至最简。",
      "errorRefIds": [
        "err_04"
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
      "sophiaMastery": "needs_work",
      "sophiaScore": 68,
      "sophiaNote": "曾出现通分时只乘分母、分子抄原数的粗心失误；经双步模板训练已纠正，需持续巩固。",
      "williamMastery": "needs_work",
      "williamScore": 62,
      "williamNote": "通分容易漏乘分子，异分母加法容易冲动将分子分母各自直接相加；需强制书写中间通分式。",
      "errorRefIds": [
        "err_06",
        "err_12"
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
      "williamMastery": "proficient",
      "williamScore": 78,
      "williamNote": "生活化'谁花的钱少剩得多'理解深刻，但在交叉相乘时偶有上下乘颠倒情况。",
      "errorRefIds": [
        "err_06"
      ]
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
        "err_12"
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
      "williamMastery": "proficient",
      "williamScore": 80,
      "williamNote": "因数分解能成对寻找，但偶尔对因数与加数混淆（曾把16的因数说成8个2）。",
      "errorRefIds": [
        "err_03"
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
        "err_01"
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
      "williamMastery": "proficient",
      "williamScore": 78,
      "williamNote": "掌握2、5、3法则，能正确分解65=5×13得出末位Y=0或5，但在4和8的法则上偶尔遗忘。",
      "errorRefIds": [
        "err_02"
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
      "williamMastery": "proficient",
      "williamScore": 76,
      "williamNote": "掌握短除法，短除求GCD速度快，但有时除数使用了合数未除到质数为止。",
      "errorRefIds": [
        "err_04"
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
      "williamMastery": "proficient",
      "williamScore": 82,
      "williamNote": "短除法求GCD非常熟练（如24与88的GCD=8快速算出），但求LCM时有时漏乘底部的互质数。",
      "errorRefIds": [
        "err_04"
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
        "err_10"
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
        "err_02",
        "err_11"
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
        "err_15"
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
        "err_15"
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
      "errorRefIds": [
        "err_13"
      ]
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
        "err_13"
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
      "williamMastery": "proficient",
      "williamScore": 75,
      "williamNote": "掌握奇偶判定，但在代数推导中偶有忘记质数2是唯一的偶质数。",
      "errorRefIds": [
        "err_01"
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
      "errorRefIds": [
        "err_07"
      ]
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
      "errorRefIds": [
        "err_16"
      ]
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
      "williamMastery": "proficient",
      "williamScore": 80,
      "williamNote": "周长公式掌握，但有时和面积公式搞混，需口头强调'周长是一维线长'。",
      "errorRefIds": [
        "err_17"
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
      "sophiaMastery": "needs_work",
      "sophiaScore": 65,
      "sophiaNote": "曾把正方形面积36cm²反求边长误算为18cm（除以2）；经正方形方格网拼图纠错后已深刻警醒。",
      "williamMastery": "needs_work",
      "williamScore": 56,
      "williamNote": "极易混淆周长与面积、开平方与除以2；必须强制在草稿上写出s×s=36因此s=6的中间式。",
      "errorRefIds": [
        "err_17"
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
      "williamMastery": "needs_work",
      "williamScore": 54,
      "williamNote": "把体积进率和长度进率混为一谈（曾认为1m³=100cm³）；需用魔方与1立方米大木箱实物模型直观建立空间感。",
      "errorRefIds": [
        "err_17"
      ]
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
        "err_16"
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
        "err_11",
        "err_16"
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
      "williamNote": "本堂课最大亮点！动手折纸极快，能迅速口算推导128→256→512→1024，展现了优秀的直观空间感知力。",
      "errorRefIds": []
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
      "williamMastery": "proficient",
      "williamScore": 78,
      "williamNote": "积极上台参与，能找到常见的3×8组合，但在遇到需要利用分数或先乘除后加减的较难牌面时容易急躁。",
      "errorRefIds": []
    }
  ],
  "errorBank": [
    {
      "id": "err_01",
      "student": "William",
      "nodeId": "div_02",
      "domain": "number_theory",
      "category": "概念混淆类",
      "source": "G6秋季第1节 (09/12) & 暑期第3节",
      "title": "质数概念记忆不牢，误判大合数为质数",
      "originalQuestion": "判断下列各数中哪些是质数（素数），哪些是合数：2, 51, 77, 83, 91, 97",
      "studentAnswer": "将 77、91 圈为质数，并在定义提问时漏掉'只能'，仅回答'可以被自己整除的数'。",
      "rootCause": "质数定义内化不深刻，未能牢记'只有1和自身两个因数'；对百以内常见伪装合数（如 7×11=77, 7×13=91, 3×17=51）无因数分解敏感度，凭直觉猜测。",
      "standardSolution": "1. 质数定义：一个大于1的整数，**只能**被1和它自身整除（即只有2个正因数）。\n2. 逐一验证与分解：\n• 2：因数仅有 1, 2 → 质数（且是唯一的偶质数）\n• 51：各位数之和 5+1=6 能被3整除，分解得 51 = 3 × 17 → 合数\n• 77：明显含有质因数7与11，77 = 7 × 11 → 合数\n• 83：尝试试除 2, 3, 5, 7 均不能整除 → 质数\n• 91：高频易错题！检验 91 ÷ 7 = 13，即 91 = 7 × 13 → 合数\n• 97：尝试试除 2, 3, 5, 7 均不能整除 → 质数\n3. 结论：质数有 2, 83, 97；合数有 51, 77, 91。",
      "teacherTip": "【避坑口诀】：质数必须带'只能'；7和13要小心，七十三乘九十一（7×13=91），三七二十一（3×17=51），七十一（7×11=77）全是披着羊皮的狼！"
    },
    {
      "id": "err_02",
      "student": "William",
      "nodeId": "pv_04",
      "domain": "place_value",
      "category": "概念混淆类",
      "source": "小学综合学情报告 & G6暑期第1-5节 & 秋季多次",
      "title": "乘方本质未内化，反复混淆乘方与乘法",
      "originalQuestion": "计算并比较下列各组算式的值：(1) 2³ 与 2×3；(2) 2⁴ 与 2×4；(3) 3⁴ 与 3×4；(4) 10⁴ × 10⁵ 的简化形式",
      "studentAnswer": "(1) 2³ = 6；(2) 2⁴ = 8；(3) 3⁴ = 18；(4) 10⁴ × 10⁵ = 10²⁰（指数相乘）。",
      "rootCause": "乘方的本质是'相同因数的连乘'，而非底数乘以指数。William思维惰性导致看见上角标数字本能当作乘法乘数；遇到同底数幂相乘时，又误将指数直接相乘而非相加。",
      "standardSolution": "1. 乘方定义：aⁿ = a × a × ... × a（n个a连乘）\n2. 逐题纠错：\n• (1) 2³ = 2 × 2 × 2 = 8，而 2 × 3 = 6。(8 ≠ 6)\n• (2) 2⁴ = 2 × 2 × 2 × 2 = 16，而 2 × 4 = 8。(16 ≠ 8)\n• (3) 3⁴ = 3 × 3 × 3 × 3 = 81，而 3 × 4 = 12。\n• (4) 同底数幂相乘法则：10⁴ × 10⁵ = (10×10×10×10) × (10×10×10×10×10) = 10⁴⁺⁵ = 10⁹。指数是相加得到9，而不是 4×5=20！",
      "teacherTip": "【避坑口诀】：指数是'分身术'，底数是本人；右上角是几，本人就乘自己几次！连乘乘方莫当加，同底相乘指数加！"
    },
    {
      "id": "err_03",
      "student": "William",
      "nodeId": "div_01",
      "domain": "number_theory",
      "category": "概念混淆类",
      "source": "学情报告 & G6暑期第10节",
      "title": "因数概念与加数混淆",
      "originalQuestion": "写出整数 16 的质因数分解式，并列出 16 的所有正因数。",
      "studentAnswer": "回答 16 的因数是'8个2'。",
      "rootCause": "混淆了加法与乘法逻辑，把 2+2+...+2=16（8个2相加）和 2×2×2×2=16（4个2相乘）混为一谈，因数树与累加概念混乱。",
      "standardSolution": "1. 质因数分解：16 = 2 × 2 × 2 × 2 = 2⁴（是4个2相乘，而不是8个2相加！）\n2. 16 的所有正因数（成对寻找）：\n• 1 × 16 = 16\n• 2 × 8 = 16\n• 4 × 4 = 16\n3. 结论：16 的正因数共有 5 个，分别是：1, 2, 4, 8, 16。",
      "teacherTip": "【避坑口诀】：因数是乘出来的，不是加出来的！找因数成对找，两头往中间挤，漏掉中间找平方！"
    },
    {
      "id": "err_04",
      "student": "Sophia",
      "nodeId": "pv_04",
      "domain": "place_value",
      "category": "概念混淆类",
      "source": "学情报告 & 春季报告",
      "title": "面积与边长关系混淆 / 误认6为完全平方数",
      "originalQuestion": "(1) 已知正方形面积为 3，求其边长；(2) 判断 6 是否为完全平方数。",
      "studentAnswer": "(1) 边长 = 3 ÷ 2；(2) 认为 6 是完全平方数，理由是 2 × 3 = 6。",
      "rootCause": "混淆了正方形周长公式与面积公式（周长=4×边长，面积=边长×边长）；将'两个不同数相乘得到合数'误解为'完全平方数'（必须是同一个整数自乘）。",
      "standardSolution": "1. (1) 正方形面积公式：S = a²（边长为 a），因此边长 a = √S = √3。正方形面积求边长必须开平方，不可除以2（3÷2=1.5，而 1.5²=2.25≠3）。\n2. (2) 完全平方数定义：若一个整数 n = k²（k为整数），则 n 为完全平方数。常见完全平方数表：1, 4, 9, 16, 25, 36... 因为 2²=4 < 6 < 3²=9，所以 6 绝不是完全平方数！2×3 是两个不同整数相乘，不是自乘。",
      "teacherTip": "【避坑口诀】：完全平方必须自己乘自己（孪生兄弟）！不同因数相乘只是普通合数；面积开方求边长，除以2是求半边！"
    },
    {
      "id": "err_05",
      "student": "William",
      "nodeId": "div_05",
      "domain": "number_theory",
      "category": "算法步骤类",
      "source": "学情报告 & 暑期第4节",
      "title": "HCF与LCM求法混淆，因子指数错误求和",
      "originalQuestion": "已知 A = 2³ × 3² × 5，B = 2² × 3³ × 7。求 A 与 B 的最大公因数（HCF）和最小公倍数（LCM）。",
      "studentAnswer": "在求 LCM 时，将 3 的因子写成 3²⁺³ = 3⁵；在求 HCF 时，将共有因子的个数加起来。",
      "rootCause": "机械套用公式，不理解 HCF 是'交集取少'（两边都必须满足），LCM 是'并集取多'（全部覆盖），误把集合覆盖关系当成了指数加法。",
      "standardSolution": "1. 分解式对齐比较：\nA = 2³ × 3² × 5¹ × 7⁰\nB = 2² × 3³ × 5⁰ × 7¹\n2. 求最大公因数 HCF（公共质因数取指数较小者）：\n• 质因数 2：min(3, 2) = 2 → 2²\n• 质因数 3：min(2, 3) = 2 → 3²\n• 质因数 5 和 7：非双方共有，不取\nHCF = 2² × 3² = 4 × 9 = 36\n3. 求最小公倍数 LCM（所有出现过的质因数取指数较大者）：\n• 质因数 2：max(3, 2) = 3 → 2³\n• 质因数 3：max(2, 3) = 3 → 3³\n• 质因数 5：max(1, 0) = 1 → 5¹\n• 质因数 7：max(0, 1) = 1 → 7¹\nLCM = 2³ × 3³ × 5 × 7 = 8 × 27 × 35 = 7560。绝不能把质因数 3 的指数相加写成 3⁵！",
      "teacherTip": "【避坑口诀】：最大公因门槛高，只看公共取小的；最小公倍胃口大，全部质因取大的；两边指数绝不加，谁的幂大选定他！"
    },
    {
      "id": "err_06",
      "student": "William",
      "nodeId": "div_07",
      "domain": "number_theory",
      "category": "审题综合类",
      "source": "G6秋季第2节 (09/16) 压轴题",
      "title": "大数整除压轴题条件严重遗漏，仅求末位未解首位",
      "originalQuestion": "已知六位数 91X93Y 能被 65 整除，求未知数字 X 和 Y。",
      "studentAnswer": "将 65 分解为 5 × 13，得出 Y = 0 或 5，随后便停止解题，没有继续求解 X。",
      "rootCause": "缺乏多步综合题的完整求解意识，完成第一阶段（末位判断）后产生'做完感'，未能建立将已知条件代入大数、再利用 13 的整除条件列出同余方程求解第二未知数的闭环。",
      "standardSolution": "1. 质因数分解除数：65 = 5 × 13（5 与 13 互质）。六位数必须同时满足被 5 和被 13 整除。\n2. 第一步判定 Y：由个位数性质知，末位 Y 必须是 0 或 5。\n3. 第二步分情况代入，检验被 13 整除：\n【情况一】：若 Y = 0，六位数为 91X930。大数拆分：91X930 = 910000 + 1000X + 930。因为 91=7×13，910000必被13整除。只需 1000X + 930 能被 13 整除。1000 = 77×13 - 1 ≡ -1 (mod 13)，930 = 71×13 + 7 ≡ 7 (mod 13)。因此 -X + 7 必须是 13 的倍数。由于 0 ≤ X ≤ 9，唯一解为 X = 7。检验：917930 ÷ 65 = 14122，整除成立！\n【情况二】：若 Y = 5，余数 -X + 12 必须是 13 的倍数，在 0 ≤ X ≤ 9 内无整数解。\n4. 综合结论：X = 7，Y = 0。",
      "teacherTip": "【避坑口诀】：压轴双字母，先拆再联立；解完Y绝不停，代回大数剥洋葱，首尾呼应才算完！"
    },
    {
      "id": "err_07",
      "student": "William",
      "nodeId": "frac_01",
      "domain": "fractions",
      "category": "概念混淆类",
      "source": "学情报告 & G6暑期第9节",
      "title": "分数除法当乘法，商的物理意义未内化",
      "originalQuestion": "将分数 2/8 化简并写成小数形式；计算 25 ÷ 100 的最简分数。",
      "studentAnswer": "将 2/8 写成 2 × 8 = 16；将 25 ÷ 100 倒置为 100/25 = 4。",
      "rootCause": "分数符号的几何与代数意义脱节，把分数线视作乘号运算，或者在把除法写成分数时被除数与除数位置颠倒。",
      "standardSolution": "1. 分数基本定义：a/b = a ÷ b（分子 a = 被除数，分母 b = 除数）。\n2. 纠错计算：\n• 2/8 = 2 ÷ 8 = 1/4 = 0.25（绝对不是 2 × 8 = 16）\n• 25 ÷ 100 = 25/100 = 1/4 = 0.25（被除数 25 在上面当分子，除数 100 在下面当分母）。",
      "teacherTip": "【避坑口诀】：分子在上被除数，分母在下是除数；分数横线就是除，绝不能够变成乘！"
    },
    {
      "id": "err_08",
      "student": "Sophia",
      "nodeId": "frac_03",
      "domain": "fractions",
      "category": "算法步骤类",
      "source": "学情报告 & G6暑期第9节 & 秋季第2节",
      "title": "通分时分子不同步相乘，商不变原理遗漏",
      "originalQuestion": "计算异分母分数加法：2/3 + 1/5",
      "studentAnswer": "通分时把分母都化成 15，但分子直接写成 2/15 + 1/15 = 3/15 = 1/5。",
      "rootCause": "对分数基本性质'商不变原理'未形成自动化执行习惯，只关注了分母的公倍数转换，注意力未分配到分子需要同步放大对应倍数。",
      "standardSolution": "1. 找出分母 3 和 5 的最小公倍数：LCM(3, 5) = 15。\n2. 严格通分三步法（分子分母同乘相同因数）：\n• 对于 2/3：分母 3×5=15，分子必须同步 2×5=10，即 2/3 = 10/15。\n• 对于 1/5：分母 5×3=15，分子必须同步 1×3=3，即 1/5 = 3/15。\n3. 同分母相加分子：2/3 + 1/5 = 10/15 + 3/15 = (10+3)/15 = 13/15。",
      "teacherTip": "【避坑口诀】：通分三步走：找公分母、分子同步乘、分子相加减！分母变几倍，分子跟着变几倍，千万不能搞差别待遇！"
    },
    {
      "id": "err_09",
      "student": "Sophia",
      "nodeId": "frac_04",
      "domain": "fractions",
      "category": "计算粗心类",
      "source": "G6秋季第2节 (09/16)",
      "title": "分数通分加法中发生严重低级算术错误",
      "originalQuestion": "计算带分数加法：2又1/3 + 3又5/6",
      "studentAnswer": "在通分过程中出现步骤 18 + 5 = 90，导致最终得出荒谬答案。",
      "rootCause": "极度低级粗心，计算时由于精力疲惫或急于出结果，在大脑中将加号直接看成了乘号（18 × 5 = 90），且缺乏'估算校验'的检查机制（两数相加大致在 6 左右，绝不可能突变成 90 多的结果）。",
      "standardSolution": "1. 估算合理性校验：2又1/3 ≈ 2.33，3又5/6 ≈ 3.83，2.33 + 3.83 ≈ 6.16。最终结果必定在 6 到 7 之间！\n2. 正规解法：\n2又1/3 + 3又5/6 = (2 + 3) + (1/3 + 5/6)\n• 通分分数部分：1/3 = 2/6\n• 分数相加：2/6 + 5/6 = 7/6 = 1又1/6\n• 合并整数：5 + 1又1/6 = 6又1/6\n（注意：18+5=23，绝对不是90！）",
      "teacherTip": "【避坑口诀】：动笔先估算，心里有杆秤；加法莫乘算，写完反向验！"
    },
    {
      "id": "err_10",
      "student": "Sophia",
      "nodeId": "frac_04",
      "domain": "fractions",
      "category": "概念混淆类",
      "source": "G6秋季第2节 (09/16)",
      "title": "同分母加法分母乱相加，混淆带分数假分数",
      "originalQuestion": "计算：3/6 + 5/6",
      "studentAnswer": "算出 (3+5)/(6+6) = 8/12 或写成带分数混乱形式。",
      "rootCause": "未理解分母代表的是'等分的份数（度量单位）'，分子代表的是'份数数量'。同分母加法本质是计数单位相同，直接将计数单位的数量相加，单位本身保持不变。",
      "standardSolution": "1. 原理剖析：3/6 是 3 个 1/6，5/6 是 5 个 1/6。把 3 个 1/6 和 5 个 1/6 放在一起，一共有 3+5=8 个 1/6。\n2. 规范演算：3/6 + 5/6 = (3+5)/6 = 8/6。\n3. 约分并化为带分数：8/6 = 4/3 = 1又1/3。分母 6 绝不能加成 12！",
      "teacherTip": "【避坑口诀】：同分母相加减，分母看作老祖宗，分母纹丝不能动，只有分子做运算！"
    },
    {
      "id": "err_11",
      "student": "William",
      "nodeId": "frac_05",
      "domain": "fractions",
      "category": "算法步骤类",
      "source": "学情报告 & 暑期第10节",
      "title": "分数除法倒数法则执行未同步",
      "originalQuestion": "计算：5/12 ÷ 15/16",
      "studentAnswer": "把除数颠倒成 16/15，但中间依然写成除号 5/12 ÷ 16/15；或者直接把分子分母交叉乱乘。",
      "rootCause": "把'除以一个数等于乘以它的倒数'的两步动作割裂开来，未能形成'改除号为乘号'与'除数分子分母颠倒'的强绑定协同。",
      "standardSolution": "1. 核心法则：除以一个不为0的数，等于乘以这个数的倒数。\n2. 规范步骤：5/12 ÷ 15/16 = 5/12 × 16/15\n3. 交叉约分：5 与 15 约分除以 5 得 1 和 3；12 与 16 约分除以 4 得 3 和 4。最终结果 = (1×4)/(3×3) = 4/9。",
      "teacherTip": "【避坑口诀】：除号变乘号，除数翻跟头！两步必须一块走，千万别留半边头！"
    },
    {
      "id": "err_12",
      "student": "William",
      "nodeId": "pv_01",
      "domain": "place_value",
      "category": "概念混淆类",
      "source": "学情报告 & 暑期第6节",
      "title": "数位名称混淆（Tens vs Tenths）",
      "originalQuestion": "在数值 483.59 中，指出数字 8 和数字 5 分别位于什么数位，表示什么数值。",
      "studentAnswer": "将十分位的 5 答为'十位(tens)'，将十位的 8 答为'十分位(tenths)'，数位全错。",
      "rootCause": "英文数位中以个位(Ones)为中心左右发散的对称规律未建立，对后缀-ths（表示分数）与-s（表示整数十百千）的词根语感缺失。",
      "standardSolution": "1. 以小数点为界限的数位对照表：\n• 十位 (Tens) → 10¹ = 10（数字 8 所在位置，表示 8 × 10 = 80）\n• 个位 (Ones) → 10⁰ = 1（数字 3 所在位置，表示 3 × 1 = 3）\n• 【小数点 Decimal Point】\n• 十分位 (Tenths) → 10⁻¹ = 0.1（数字 5 所在位置，表示 5 × 0.1 = 0.5）\n• 百分位 (Hundredths) → 10⁻² = 0.01（数字 9 所在位置，表示 9 × 0.01 = 0.09）\n2. 结论：数字 8 在十位 (Tens)，代表 80；数字 5 在十分位 (Tenths)，代表 0.5。",
      "teacherTip": "【避坑口诀】：小数点右边带-ths，咬舌尖的分数位；小数点左边无-ths，整数位值大十倍！"
    },
    {
      "id": "err_13",
      "student": "William",
      "nodeId": "pv_02",
      "domain": "place_value",
      "category": "计算粗心类",
      "source": "学情报告 & 暑期第8节",
      "title": "小数加法进位混乱，出现反常算术错误",
      "originalQuestion": "列竖式计算：0.9 + 0.1",
      "studentAnswer": "答出 0.9 + 0.1 = 4.1。",
      "rootCause": "竖式未对齐小数点，或在心算过程中进位机制严重短路，缺乏数感直觉（9毛钱加上1毛钱等于1块钱，怎么可能算出4块1毛）。",
      "standardSolution": "1. 生活常识比对：0.9 是 9 个 0.1，再加 1 个 0.1 是 10 个 0.1，即 1.0。\n2. 列竖式规范对齐：\n  0.9\n+ 0.1\n------\n  1.0\n十分位 9+1=10，写 0 向上进 1；个位 0+0+1=1；点下小数点得 1.0。",
      "teacherTip": "【避坑口诀】：小数加减小数点对齐，空位补0再运算；逢十进一标小点，算完先拿常识验！"
    },
    {
      "id": "err_14",
      "student": "William",
      "nodeId": "pv_03",
      "domain": "place_value",
      "category": "计算粗心类",
      "source": "学情报告 & 暑期第6-8节",
      "title": "小数除法小数点移位方向搞反",
      "originalQuestion": "计算：5.4 ÷ 0.6",
      "studentAnswer": "答出 0.9（将除法扩大反而除小了）。",
      "rootCause": "不理解除数是小数时需要'商不变性质'将除数变成整数，把被除数和除数的小数点移动方向搞乱，或者计算出 9 后又莫名其妙点上一位小数点。",
      "standardSolution": "1. 利用商不变的性质：被除数和除数同时乘 10，商不变。5.4 ÷ 0.6 = (5.4 × 10) ÷ (0.6 × 10) = 54 ÷ 6 = 9。\n2. 直观常识验证：5.4 里面有几个 0.6？因为 0.6 × 9 = 5.4，所以显然是 9，绝不是 0.9！",
      "teacherTip": "【避坑口诀】：除数变整数，被除数跟着跑；除数缩小小，商反而往大跑！"
    },
    {
      "id": "err_15",
      "student": "Sophia",
      "nodeId": "pv_03",
      "domain": "place_value",
      "category": "计算粗心类",
      "source": "学情报告 & 暑期第10节",
      "title": "小数化百分数小数点移位方向混淆",
      "originalQuestion": "将小数 0.075 化为百分数。",
      "studentAnswer": "写成 75% 或 0.75%。",
      "rootCause": "对百分号'%'相当于'× 1/100'的本质理解不扎实，移位时混淆是向左移还是向右移两位。",
      "standardSolution": "1. 百分数本质：1 = 100%。因此把一个数变成百分数，相当于乘 100%：0.075 = 0.075 × 100% = 7.5%。\n2. 检查：7.5% = 7.5/100 = 0.075，等式完全成立。若写成 75% = 0.75，比原数放大了 10 倍！",
      "teacherTip": "【避坑口诀】：添上百分号，数值要变大，小数点往右跳两步；去掉百分号，数值要缩小，小数点往左跳两步！"
    },
    {
      "id": "err_16",
      "student": "William",
      "nodeId": "rat_01",
      "domain": "ratios_percent",
      "category": "概念混淆类",
      "source": "学情报告 & 暑期第5节",
      "title": "比例等式变形混淆乘除",
      "originalQuestion": "已知比例 C : D = 3 : 5，若 C = 12，求 D 的值，并写出将 D 用 C 表示的代数式。",
      "studentAnswer": "将代数关系写成 D = C × 3 ÷ 5，把比号当乘号。",
      "rootCause": "代数方程天平思想未建立，死记硬背'同加同减同乘同除'口诀但不会实操，遇到比例变形时乱选运算符号。",
      "standardSolution": "1. 比例改写为分数等式（交叉相乘）：C/D = 3/5 ⟹ 3 × D = 5 × C。\n2. 两边同时除以 3，解出 D：D = 5C/3 = (5/3)C。\n3. 代入 C = 12：D = (5 × 12)/3 = 20。检验：12 : 20 = 3 : 5，完全吻合！",
      "teacherTip": "【避坑口诀】：比例写成分数式，交叉相乘成等式；要留字母在左边，两边同除伴身数！"
    },
    {
      "id": "err_17",
      "student": "William",
      "nodeId": "adv_02",
      "domain": "advanced_topics",
      "category": "审题综合类",
      "source": "G6秋季第2节 (09/16)",
      "title": "行程应用题缺乏分步解题框架，直接空题",
      "originalQuestion": "小明从家去学校，15 分钟一共步行了 900 米。(1) 求小明的平均速度（米/分）；(2) 小明平均每分钟走了全程的几分之几？",
      "studentAnswer": "第(1)问和第(2)问均空白未做，在老师分步提问下才勉强作答。",
      "rootCause": "对两步或复合应用题存在畏难情绪，没有建立'审题 → 明确求什么 → 检索公式 → 代入计算 → 标注单位'的标准化做题流水线。",
      "standardSolution": "1. 识别核心量与公式：路程 S = 900 米，时间 t = 15 分钟，速度公式 v = S/t。\n2. 第(1)小问解答：v = 900 ÷ 15 = 60 (米/分钟)。答：小明的平均速度是每分钟 60 米。\n3. 第(2)小问解答（考查分率，与具体米数无关）：把全程看作单位'1'，一共走了 15 分钟，每分钟走全程的：1 ÷ 15 = 1/15。答：小明平均每分钟走全程的 1/15。",
      "teacherTip": "【避坑口诀】：应用题三部曲：第一步画图圈数字，第二步写出路程公式，第三步代入数字求答案，绝不留白空卷子！"
    }
  ],
  "actionPlans": {
    "currentPhaseSummary": "目前处于小学六年级第一学期开学第2周结束（半个月节点）。体制内沪教版第一章《数的整除》已基本学完，正攻坚大数整除压轴，并平稳切入第二章《分数》；英数教材同步进入 Fractions Operations。两人的关键攻坚战是'分数的概念与四则运算'，以及'乘方与乘法本质的纠偏'。",
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
        "week": "第3-4周（即将进行·攻坚期）",
        "status": "current",
        "shanghaiTopic": "第2章《分数》2.1-2.4节（分数意义、花钱法比大小、通分、异分母加减法、假带分数互化、分数乘法）",
        "englishTopic": "Ch09 Fractions Operations (Multiplication & Division, Reciprocals)",
        "schoolBasedTopic": "分数应用题分步建模、披萨模型通分三步法、去工具化思维训练",
        "assessment": "核心目标：攻克 Sophia 的通分同步与粗心问题；彻底根治 William 的乘方乘法混淆与小数加减除断层"
      },
      {
        "week": "第5-7周（后续规划）",
        "status": "upcoming",
        "shanghaiTopic": "第2章 2.5-2.6 分小互化与分数工程/行程应用题 → 第3章《比和比例》",
        "englishTopic": "Ch10-14 Percentages, Discounts & Simple Interest; Ch15-17 Ratios",
        "schoolBasedTopic": "双语比例方程建模、单利息公式应用、复合多步应用题",
        "assessment": "核心目标：强化代数等式变形规范，提升两人的独立审题与严谨推导书写能力"
      },
      {
        "week": "第8周及以后（期中与拓展）",
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
      "fileSize": "711 KB / 1.1 MB"
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
      "fileSize": "576 KB / 969 KB"
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
      "fileSize": "564 KB / 889 KB"
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
      "fileSize": "345 KB / 502 KB"
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
      "fileSize": "497 KB / 734 KB"
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
      "fileSize": "570 KB / 820 KB"
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
      "fileSize": "471 KB / 719 KB"
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
      "fileSize": "504 KB / 837 KB"
    }
  ]
};

if (typeof window !== "undefined") {
  window.trackerData = trackerData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = trackerData;
}
