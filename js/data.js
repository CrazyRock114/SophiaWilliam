/**
 * Sophia & William 专属数学知识图谱追踪网站核心数据库
 * 自动生成于: 2026-09-18T17:25:43.493Z
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
      "id": "number_theory",
      "name": "数的整除与数论",
      "icon": "🔢",
      "color": "#6366f1"
    },
    {
      "id": "fractions",
      "name": "分数与小数运算",
      "icon": "➗",
      "color": "#ec4899"
    },
    {
      "id": "place_value",
      "name": "数位与基础四则运算",
      "icon": "🧮",
      "color": "#f59e0b"
    },
    {
      "id": "ratios_percent",
      "name": "比、比例与百分数",
      "icon": "📊",
      "color": "#10b981"
    },
    {
      "id": "advanced_topics",
      "name": "高阶思维与综合建模",
      "icon": "🧩",
      "color": "#8b5cf6"
    }
  ],
  "knowledgeNodes": [
    {
      "id": "div_01",
      "domain": "number_theory",
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
      "prerequisites": [],
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
      "domain": "number_theory",
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
      "williamNote": "质数定义讲了4遍仍记不住'只能'二字；依赖直觉判断常误将77、91判为质数，对91=7×13需反复提醒。",
      "errorRefIds": [
        "err_01"
      ]
    },
    {
      "id": "div_03",
      "domain": "number_theory",
      "title": "整除特征判定法",
      "bilingual": "Divisibility Rules (2/3/4/5/8/9/25/125)",
      "shanghaiChapter": "沪教版六上 1.3 节",
      "englishChapter": "International Maths Ch01 & Handout",
      "terms": [
        "Divisibility Rule (整除判定)",
        "Last Digits (末几位)",
        "Sum of Digits (数字之和)"
      ],
      "description": "基于十进制原理：2/5看末1位；4/25看末2位(100=4×25)；8/125看末3位(1000=8×125)；3/9看各位数字之和。",
      "prerequisites": [
        "div_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "深度理解10、100、1000的质因数分解原理，熟练判定2、3、4、5、8倍数。",
      "williamMastery": "proficient",
      "williamScore": 75,
      "williamNote": "2和5熟练；4和8能跟随规则，但3的倍数特征在秋季第1节初期有遗忘，需提示数字之和。",
      "errorRefIds": []
    },
    {
      "id": "div_04",
      "domain": "number_theory",
      "title": "分解素因数与短除法",
      "bilingual": "Prime Factorization & Short Division",
      "shanghaiChapter": "沪教版六上 1.4 节",
      "englishChapter": "International Maths Ch02 Prime Factorization",
      "terms": [
        "Prime Factor (质因数/素因数)",
        "Short Division (短除法)",
        "Factor Tree (因数树)"
      ],
      "description": "每个大于1的合数都能唯一分解为素数乘积；从小到大试除质数，商为素数时终止。",
      "prerequisites": [
        "div_02"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 95,
      "sophiaNote": "短除法非常熟练，能规范除到商为素数，指数形式书写工整。",
      "williamMastery": "proficient",
      "williamScore": 78,
      "williamNote": "短除法操作基本规范，偶有试商顺序混乱（跳过2直接试3，或试除非质数6）。",
      "errorRefIds": [
        "err_04"
      ]
    },
    {
      "id": "div_05",
      "domain": "number_theory",
      "title": "最大公因数 (HCF/GCD)",
      "bilingual": "Highest Common Factor / Greatest Common Divisor",
      "shanghaiChapter": "沪教版六上 1.5 节",
      "englishChapter": "International Maths Ch02 HCF",
      "terms": [
        "Common Factor (公因数)",
        "HCF / GCD (最大公因数)"
      ],
      "description": "两个数公共因数中最大的一个；短除法左侧公共质因数连乘，或分解式中公共质因数指数取较小者。",
      "prerequisites": [
        "div_04"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 85,
      "sophiaNote": "短除法求GCD操作正确（如60和105的GCD=15），但在质因数指数取多还是取少上偶有犹豫。",
      "williamMastery": "proficient",
      "williamScore": 76,
      "williamNote": "能熟练用短除法求出24与88的GCD=8、48与120的GCD=24；但曾出现将因子相加而非相乘的严重混淆。",
      "errorRefIds": [
        "err_05"
      ]
    },
    {
      "id": "div_06",
      "domain": "number_theory",
      "title": "最小公倍数 (LCM)",
      "bilingual": "Lowest Common Multiple",
      "shanghaiChapter": "沪教版六上 1.6 节",
      "englishChapter": "International Maths Ch03 LCM",
      "terms": [
        "Common Multiple (公倍数)",
        "LCM (最小公倍数)"
      ],
      "description": "公共倍数中最小的一个；短除法中L型（左侧与底端）所有因数连乘，或分解式中各质因数指数取较大者。",
      "prerequisites": [
        "div_04",
        "div_05"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "能够正确计算LCM，理解两数互质时LCM等于两数之积。",
      "williamMastery": "needs_work",
      "williamScore": 50,
      "williamNote": "核心概念易混淆：常将LCM'取多'理解为'加起来'（如将54和90的LCM中3的因子加起来算成3⁵）。",
      "errorRefIds": [
        "err_05"
      ]
    },
    {
      "id": "div_07",
      "domain": "number_theory",
      "title": "同余性质与大数整除压轴",
      "bilingual": "Modular Congruence & Multi-digit Divisibility",
      "shanghaiChapter": "沪教版六上 第1章压轴拓展",
      "englishChapter": "校本综合思维挑战",
      "terms": [
        "Remainder (余数)",
        "Congruence (同余)",
        "Combined Divisibility"
      ],
      "description": "合数倍数整除须同时满足各互质因数条件（如65=5×13）；大数拆分同余化简法解决六位数填空题（如91X93Y能被65整除）。",
      "prerequisites": [
        "div_02",
        "div_03"
      ],
      "currentPhase": "current",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "能理解拆分为5和13的倍数，能跟随同余化简推导，但独立解题时对13的试除不够熟练。",
      "williamMastery": "needs_work",
      "williamScore": 45,
      "williamNote": "严重条件遗漏：秋季第2节压轴题仅解出Y=0或5即停止，完全忽略13的整除条件，导致X未解。",
      "errorRefIds": [
        "err_06"
      ]
    },
    {
      "id": "frac_01",
      "domain": "fractions",
      "title": "分数的意义与商的关系",
      "bilingual": "Concept of Fractions & Division Relationship",
      "shanghaiChapter": "沪教版六上 2.1 节",
      "englishChapter": "International Maths Ch09 Fractions",
      "terms": [
        "Numerator (分子)",
        "Denominator (分母)",
        "Fraction as Division (a/b = a÷b)"
      ],
      "description": "分数表示把单位1平均分成若干份取其中几份；分子相当于被除数，分母相当于除数，分数线相当于除号。",
      "prerequisites": [],
      "currentPhase": "current",
      "sophiaMastery": "proficient",
      "sophiaScore": 82,
      "sophiaNote": "理解较好，能用披萨分切比喻分子分母的物理含义。",
      "williamMastery": "needs_work",
      "williamScore": 50,
      "williamNote": "底层概念未内化：曾将分数除法当乘法（2/8写成2×8=16），且常将25/100混写为25÷100反向混淆。",
      "errorRefIds": [
        "err_07"
      ]
    },
    {
      "id": "frac_02",
      "domain": "fractions",
      "title": "分数大小比较与花钱法",
      "bilingual": "Comparing Fractions & Real-life Analogy",
      "shanghaiChapter": "沪教版六上 2.2 节",
      "englishChapter": "International Maths Ch09 Comparing",
      "terms": [
        "Common Denominator (同分母)",
        "Comparing Fractions (比大小)",
        "Benchmark Method"
      ],
      "description": "同分母比分子；同分子比分母；异分母通分或找中间量1/2比较；校本'花钱法'（减去大数后剩下相同，说明原数更大）。",
      "prerequisites": [
        "frac_01"
      ],
      "currentPhase": "current",
      "sophiaMastery": "mastered",
      "sophiaScore": 90,
      "sophiaNote": "秋季第2节表现亮点，'花钱类比'一点即通，能快速判断异分母相对大小。",
      "williamMastery": "proficient",
      "williamScore": 72,
      "williamNote": "在花钱类比引导下能选对，但尚未内化'同分子看分母'的通用通式，脱离类比后容易犹豫。",
      "errorRefIds": []
    },
    {
      "id": "frac_03",
      "domain": "fractions",
      "title": "通分与商不变基本性质",
      "bilingual": "Finding Common Denominator & Invariance Property",
      "shanghaiChapter": "沪教版六上 2.2 节",
      "englishChapter": "International Maths Ch09 Equivalent Fractions",
      "terms": [
        "Equivalent Fraction (等值分数)",
        "Reduce/Simplify (约分)",
        "Common Denominator (通分)"
      ],
      "description": "分数的分子和分母同时乘以或除以同一个不为0的数，分数大小不变；通分必须分子分母同步操作。",
      "prerequisites": [
        "div_06",
        "frac_01"
      ],
      "currentPhase": "current",
      "sophiaMastery": "needs_work",
      "sophiaScore": 65,
      "sophiaNote": "通分时常出现'分子不同步'低级错误（分母×5，分子忘记同步×5），商不变原理未形成自动化肌肉记忆。",
      "williamMastery": "needs_work",
      "williamScore": 48,
      "williamNote": "通分概念不牢固，找公分母困难，分子经常不同步操作；约分找到GCD后仍习惯性再去重复试除。",
      "errorRefIds": [
        "err_08"
      ]
    },
    {
      "id": "frac_04",
      "domain": "fractions",
      "title": "异分母分数加减与带假互化",
      "bilingual": "Addition/Subtraction of Fractions & Mixed Numbers",
      "shanghaiChapter": "沪教版六上 2.3 节",
      "englishChapter": "International Maths Ch09 Fractions Operations",
      "terms": [
        "Improper Fraction (假分数)",
        "Mixed Number (带分数)",
        "Common Denominator Addition"
      ],
      "description": "异分母加减必须先通分再计算分子；带分数加减先化假分数或整数部分与真分数部分分别结合。",
      "prerequisites": [
        "frac_03"
      ],
      "currentPhase": "current",
      "sophiaMastery": "needs_work",
      "sophiaScore": 60,
      "sophiaNote": "秋季第2节暴露双重严重问题：①18+5=90超低级粗心；②将3/6+5/6误算为8/6混淆带分数与假分数运算机制。",
      "williamMastery": "needs_work",
      "williamScore": 55,
      "williamNote": "带余除法商/余数/除数混乱（52÷24写成'24又4/2'）；四则运算缺乏分步规范，跳步出错严重。",
      "errorRefIds": [
        "err_09",
        "err_10"
      ]
    },
    {
      "id": "frac_05",
      "domain": "fractions",
      "title": "分数乘除法与倒数法则",
      "bilingual": "Multiplication, Division & Reciprocal Law",
      "shanghaiChapter": "沪教版六上 2.4 节",
      "englishChapter": "International Maths Ch09 Fractions Multiplication",
      "terms": [
        "Reciprocal (倒数)",
        "Cross Cancel (交叉约分)",
        "Multiply Fractions"
      ],
      "description": "除以一个分数等于乘它的倒数；带分数必须先化假分数；交叉约分简化计算；分子乘分子、分母乘分母。",
      "prerequisites": [
        "frac_04"
      ],
      "currentPhase": "upcoming",
      "sophiaMastery": "proficient",
      "sophiaScore": 70,
      "sophiaNote": "能理解除法变乘法的倒数翻转，但在复杂带分数乘法时容易漏约分。",
      "williamMastery": "needs_work",
      "williamScore": 40,
      "williamNote": "倒数法则两步不同步（颠倒了分母分子却忘记把÷改成×）；分数乘法本能套用分配律强行展开。",
      "errorRefIds": [
        "err_11"
      ]
    },
    {
      "id": "pv_01",
      "domain": "place_value",
      "title": "十进制数位与位值概念",
      "bilingual": "Decimal Place Value (Tens vs Tenths)",
      "shanghaiChapter": "小学四五年级基础回溯 / 沪教六上预备",
      "englishChapter": "International Maths Ch04 Decimals",
      "terms": [
        "Place Value (位值)",
        "Tens (十位)",
        "Tenths (十分位)",
        "Hundredths (百分位)"
      ],
      "description": "十进制小数点对称性；th后缀代表几分之一（tenths=十分位=0.1，tens=十位=10）。",
      "prerequisites": [],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "数位概念基本清楚，但快速做题时偶将十位(tens)与十分位(tenths)看混。",
      "williamMastery": "needs_work",
      "williamScore": 35,
      "williamNote": "四五年级严重断层：G6暑期第6节tens/tenths三道题目全错；无法分清十分位与十位的精度量级差。",
      "errorRefIds": [
        "err_12"
      ]
    },
    {
      "id": "pv_02",
      "domain": "place_value",
      "title": "小数竖式加减与进位对齐",
      "bilingual": "Decimal Addition/Subtraction & Alignment",
      "shanghaiChapter": "小学四五年级基础回溯",
      "englishChapter": "International Maths Ch04 Decimals",
      "terms": [
        "Decimal Point Alignment (小数点对齐)",
        "Carry Over (进位)",
        "Column Addition"
      ],
      "description": "小数加减法核心是小数点必须上下严格对齐；进位与退位必须做好上标标记，不可心算盲进。",
      "prerequisites": [
        "pv_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 88,
      "sophiaNote": "竖式计算规范，偶尔进位遗漏，整体运算质量稳定。",
      "williamMastery": "needs_work",
      "williamScore": 42,
      "williamNote": "重大隐患：进位计算极度混乱（出现0.9+0.1=4.1惊人错误），对位不清，需每日强制竖式巩固。",
      "errorRefIds": [
        "err_13"
      ]
    },
    {
      "id": "pv_03",
      "domain": "place_value",
      "title": "小数乘除与小数点位移规律",
      "bilingual": "Decimal Multiplication/Division & Scaling",
      "shanghaiChapter": "小学四五年级基础回溯 / 六上预备",
      "englishChapter": "International Maths Ch04 & Ch08",
      "terms": [
        "Decimal Shift (小数点移位)",
        "Scaling (乘除因数缩放)",
        "Estimation (估算)"
      ],
      "description": "乘10/100向右移位；除以10/100向左移位；除数是小数时转化为除数是整数的等价除法（商不变）。",
      "prerequisites": [
        "pv_01"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "proficient",
      "sophiaScore": 75,
      "sophiaNote": "在百分数化小数时偶尔将小数点移位方向搞反（如0.075误写为75%）。",
      "williamMastery": "needs_work",
      "williamScore": 38,
      "williamNote": "移位方向频繁混淆（5.4÷0.6算成0.9，移反方向）；除数缩小商扩大的反比规律未能建立条件反射。",
      "errorRefIds": [
        "err_14"
      ]
    },
    {
      "id": "pv_04",
      "domain": "place_value",
      "title": "乘方本质与幂次指数规律",
      "bilingual": "Exponents, Powers of 2 & Order of Operations",
      "shanghaiChapter": "沪教六上综合与初中衔接",
      "englishChapter": "International Maths Ch08 Scientific Notation",
      "terms": [
        "Exponent/Power (指数/幂)",
        "Base (底数)",
        "Repeated Multiplication (连乘本质)"
      ],
      "description": "乘方是相同因数的连乘：aⁿ=a×a×...×a（n个a相乘）；乘方≠乘法；同底数幂相乘指数相加而非相乘。",
      "prerequisites": [
        "pv_01"
      ],
      "currentPhase": "current",
      "sophiaMastery": "proficient",
      "sophiaScore": 78,
      "sophiaNote": "折纸实验快速理解2ⁿ幂次增长，但曾把6当完全平方数，混淆过面积÷2=边长。",
      "williamMastery": "needs_work",
      "williamScore": 30,
      "williamNote": "全学期最顽固核心错误：反复将乘方写成乘法（1³=3, 2³=6, 2⁴=8, 3⁴=18），且将10⁴×10⁵算成10²⁰（指数相乘）。",
      "errorRefIds": [
        "err_02",
        "err_15"
      ]
    },
    {
      "id": "rat_01",
      "domain": "ratios_percent",
      "title": "比的意义与比例等式性质",
      "bilingual": "Ratios, Proportions & Equality Properties",
      "shanghaiChapter": "沪教版六上 第3章 3.1-3.2 节",
      "englishChapter": "International Maths Ch15-17 Ratios",
      "terms": [
        "Ratio (比)",
        "Proportion (比例)",
        "Cross Multiplication (交叉相乘)"
      ],
      "description": "比表示两个数相除；比例表示两个比相等的等式；等式基本性质（两边同乘同除）。",
      "prerequisites": [
        "frac_01"
      ],
      "currentPhase": "upcoming",
      "sophiaMastery": "proficient",
      "sophiaScore": 72,
      "sophiaNote": "能理解比即除法，但在比例等式变形时偶尔受机械'移项变号'干扰（应为除以3误写为乘3）。",
      "williamMastery": "needs_work",
      "williamScore": 35,
      "williamNote": "代数等式变形严重薄弱：将比号当乘号（C:D=3:5写成C×3÷5），能背口诀但完全不会操作。",
      "errorRefIds": [
        "err_16"
      ]
    },
    {
      "id": "rat_02",
      "domain": "ratios_percent",
      "title": "百分数与简单利息应用",
      "bilingual": "Percentages, Discounts & Simple Interest",
      "shanghaiChapter": "沪教版六上 第3章 3.4 节",
      "englishChapter": "International Maths Ch10-14 Percentage & Interest",
      "terms": [
        "Percentage (百分比)",
        "Simple Interest (单利息 I=P·r·t)",
        "Principal (本金)"
      ],
      "description": "百分数是分母为100的特殊比；简单利息公式I=P·r·t；折旧与增长率应用题分析。",
      "prerequisites": [
        "rat_01",
        "pv_03"
      ],
      "currentPhase": "upcoming",
      "sophiaMastery": "upcoming",
      "sophiaScore": 65,
      "sophiaNote": "待后续教学深入推进，目前已初步接触百分数互化。",
      "williamMastery": "upcoming",
      "williamScore": 40,
      "williamNote": "待后续教学深入推进，需提前巩固百分数与小数转换基准量。",
      "errorRefIds": []
    },
    {
      "id": "adv_01",
      "domain": "advanced_topics",
      "title": "折纸实验与指数爆破模型",
      "bilingual": "Paper Folding & Exponential Explosion",
      "shanghaiChapter": "校本探究课程 / 沪教拓展",
      "englishChapter": "Hands-on Modeling & Powers",
      "terms": [
        "Exponential Growth (指数增长)",
        "Linear vs Exponential (线性vs指数)",
        "Layers (层数)"
      ],
      "description": "每对折一次，层数翻倍（对折n次为2ⁿ层）；区分线性增长(+2)与指数增长(×2)的巨大差异。",
      "prerequisites": [
        "pv_04"
      ],
      "currentPhase": "completed",
      "sophiaMastery": "mastered",
      "sophiaScore": 92,
      "sophiaNote": "折纸操作非常积极，能迅速推导出折6次=64格=2⁶，模型建构清晰完整。",
      "williamMastery": "mastered",
      "williamScore": 88,
      "williamNote": "动手实操极具优势，对折纸层数翻倍反应敏捷，能快速推算至512层，当堂表现优异。",
      "errorRefIds": []
    },
    {
      "id": "adv_02",
      "domain": "advanced_topics",
      "title": "双语应用题分步建模（行程与分数）",
      "bilingual": "Multi-step Word Problems (Speed & Fractions)",
      "shanghaiChapter": "沪教六上 2.6 分数应用题",
      "englishChapter": "International Maths Word Problems",
      "terms": [
        "Average Speed (平均速度)",
        "Distance-Time (路程时间)",
        "Step-by-step Modeling"
      ],
      "description": "平均速度=总路程÷总时间；把具体量转化为占全长几分之几的分率；多步文字题结构化拆解。",
      "prerequisites": [
        "frac_01"
      ],
      "currentPhase": "current",
      "sophiaMastery": "proficient",
      "sophiaScore": 80,
      "sophiaNote": "能理解题目情境并列式，计算稳定。",
      "williamMastery": "needs_work",
      "williamScore": 45,
      "williamNote": "缺乏分步解题意识：秋季第2节行程问题第6题直接空着，在老师引导下才能写出1000÷20=50米/分。",
      "errorRefIds": [
        "err_17"
      ]
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
  }
};

if (typeof window !== "undefined") {
  window.trackerData = trackerData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = trackerData;
}

