'use strict';

const QUESTION_BANK = [
      {
        id: "v1",
        type: "词汇选择",
        title: "词汇题 1",
        stem: "To improve productivity, students should ______ enough time for deep reading instead of endless scrolling.",
        options: ["allocate", "decline", "withdraw", "capture"],
        answer: "allocate",
        explain: "allocate time 表示“分配时间”，与语境最匹配。"
      },
      {
        id: "v2",
        type: "词汇选择",
        title: "词汇题 2",
        stem: "The speaker offered a ______ explanation that changed the audience's understanding of the issue.",
        options: ["visible", "profound", "abrupt", "scarce"],
        answer: "profound",
        explain: "profound explanation 指“深刻的解释”。"
      },
      {
        id: "v3",
        type: "词汇选择",
        title: "词汇题 3",
        stem: "Online learning is useful, but digital ______ may reduce the quality of study sessions.",
        options: ["incentive", "distraction", "foundation", "priority"],
        answer: "distraction",
        explain: "digital distraction 指“数字干扰”。"
      },
      {
        id: "v4",
        type: "词汇选择",
        title: "词汇题 4",
        stem: "Many educators believe that reading widely can ______ students' creativity and empathy.",
        options: ["cultivate", "eliminate", "withdraw", "justify"],
        answer: "cultivate",
        explain: "cultivate creativity / empathy 是自然搭配。"
      },
      {
        id: "v5",
        type: "词汇选择",
        title: "词汇题 5",
        stem: "Because of budget limits, the proposal was not financially ______ at that stage.",
        options: ["relevant", "controversial", "feasible", "dominant"],
        answer: "feasible",
        explain: "financially feasible 表示“在经济上可行”。"
      },
      {
        id: "v6",
        type: "词汇选择",
        title: "词汇题 6",
        stem: "Regular review is ______ for students who want to retain new vocabulary.",
        options: ["urgent", "consecutive", "crucial", "genuine"],
        answer: "crucial",
        explain: "crucial for 表示“对……至关重要”。"
      },
      {
        id: "v7",
        type: "词汇选择",
        title: "词汇题 7",
        stem: "Universities should ______ theory with practice so that students are better prepared for work.",
        options: ["integrate", "cite", "decline", "resist"],
        answer: "integrate",
        explain: "integrate theory with practice 是常见搭配。"
      },
      {
        id: "v8",
        type: "词汇选择",
        title: "词汇题 8",
        stem: "A good introduction should ______ the reader's attention within the first few lines.",
        options: ["capture", "yield", "maintain", "qualify"],
        answer: "capture",
        explain: "capture attention 表示“吸引注意力”。"
      },
      {
        id: "v9",
        type: "词汇选择",
        title: "词汇题 9",
        stem: "The article presents a ______ argument with clear examples and smooth transitions.",
        options: ["coherent", "ethical", "tangible", "scarce"],
        answer: "coherent",
        explain: "coherent argument 指“连贯清晰的论证”。"
      },
      {
        id: "v10",
        type: "词汇选择",
        title: "词汇题 10",
        stem: "Students need a ______ schedule so they can balance study, exercise and rest.",
        options: ["dominant", "flexible", "abrupt", "controversial"],
        answer: "flexible",
        explain: "flexible schedule 表示“灵活的安排”。"
      },
      {
        id: "v11",
        type: "词汇选择",
        title: "词汇题 11",
        stem: "The government launched new policies to ______ rising housing prices.",
        options: ["stabilize", "absorb", "boost", "bond"],
        answer: "stabilize",
        explain: "stabilize prices 指“稳定价格”。"
      },
      {
        id: "v12",
        type: "词汇选择",
        title: "词汇题 12",
        stem: "Many young people are eager to ______ meaningful careers instead of chasing quick success.",
        options: ["pursue", "deteriorate", "neglect", "withdraw"],
        answer: "pursue",
        explain: "pursue a career / pursue goals 是高频搭配。"
      },
      {
        id: "v13",
        type: "词汇选择",
        title: "词汇题 13",
        stem: "The use of AI in education has raised ______ concerns about privacy and fairness.",
        options: ["comprehensive", "ethical", "consecutive", "visible"],
        answer: "ethical",
        explain: "ethical concerns 指“伦理问题”。"
      },
      {
        id: "v14",
        type: "词汇选择",
        title: "词汇题 14",
        stem: "The chart clearly ______ the gap between what students plan and what they actually do.",
        options: ["highlights", "resists", "facilitates", "undergoes"],
        answer: "highlights",
        explain: "highlight the gap 表示“突出差距”。"
      },
      {
        id: "v15",
        type: "词汇选择",
        title: "词汇题 15",
        stem: "A resilient learner can ______ difficulties without losing confidence.",
        options: ["overcome", "expand", "yield", "capture"],
        answer: "overcome",
        explain: "overcome difficulties 是固定表达。"
      },
      {
        id: "v16",
        type: "词汇选择",
        title: "词汇题 16",
        stem: "When information is ______, people must learn to judge what is worth their attention.",
        options: ["genuine", "scarce", "abrupt", "dominant"],
        answer: "scarce",
        explain: "scarce 表示“稀缺的”，这里强调注意力和时间有限。"
      },
      {
        id: "v17",
        type: "词汇选择",
        title: "词汇题 17",
        stem: "Strong evidence is needed to ______ such a costly decision.",
        options: ["justify", "decline", "emerge", "maintain"],
        answer: "justify",
        explain: "justify a decision 表示“证明某个决定合理”。"
      },
      {
        id: "v18",
        type: "词汇选择",
        title: "词汇题 18",
        stem: "Face-to-face discussion can ______ communication and reduce misunderstanding.",
        options: ["facilitate", "retain", "eliminate", "withdraw"],
        answer: "facilitate",
        explain: "facilitate communication 指“促进沟通”。"
      },
      {
        id: "t1",
        type: "翻译练习",
        title: "翻译实例 1",
        stem: "请将下面句子译成英文：\n在信息爆炸的时代，大学生不仅要获取知识，还要学会筛选 relevant information 并合理安排时间。",
        options: [],
        answer: "In an age of information explosion, college students should not only acquire knowledge, but also learn to identify relevant information and allocate their time wisely.",
        explain: "核心表达：in an age of..., identify relevant information, allocate time wisely。"
      },
      {
        id: "t2",
        type: "翻译练习",
        title: "翻译实例 2",
        stem: "请将下面句子译成英文：\n持续而稳定的努力比短暂而激烈的冲刺更能带来 visible progress。",
        options: [],
        answer: "Consistent and steady effort is more likely to bring visible progress than short but intense bursts of work.",
        explain: "关键词：consistent, steady effort, visible progress, bursts of work。"
      },
      {
        id: "t3",
        type: "翻译练习",
        title: "翻译实例 3",
        stem: "请将下面句子译成英文：\n如果学生想提高写作水平，他们就需要广泛阅读，并培养 coherent thinking。",
        options: [],
        answer: "If students want to improve their writing, they need to read widely and cultivate coherent thinking.",
        explain: "注意 improve writing, read widely, cultivate coherent thinking。"
      },
      {
        id: "t4",
        type: "翻译练习",
        title: "翻译实例 4",
        stem: "请将下面句子译成英文：\n技术可以 facilitate learning，但它不应该 replace independent judgment。",
        options: [],
        answer: "Technology can facilitate learning, but it should not replace independent judgment.",
        explain: "句子简洁有力，注意 facilitate learning 和 independent judgment。"
      },
      {
        id: "t5",
        type: "翻译练习",
        title: "翻译实例 5",
        stem: "请将下面句子译成英文：\n面对压力时，保持规律作息对于稳定情绪和 sustain attention 都很 crucial。",
        options: [],
        answer: "When facing pressure, maintaining a regular routine is crucial to stabilizing emotions and sustaining attention.",
        explain: "可积累 maintaining a regular routine, stabilize emotions, sustain attention。"
      },
      {
        id: "t6",
        type: "翻译练习",
        title: "翻译实例 6",
        stem: "请将下面句子译成英文：\n很多社会问题并不会 suddenly disappear，因此我们需要 long-term and feasible solutions。",
        options: [],
        answer: "Many social problems will not suddenly disappear, so we need long-term and feasible solutions.",
        explain: "注意 long-term solutions 与 feasible solutions 的并列。"
      },
      {
        id: "w1",
        type: "写作思路",
        title: "作文实例 1",
        stem: "写作主题：Should College Students Rely on AI Tools for Learning?\n请用 120-180 词表达观点，并从效率、独立思考和使用边界三个角度展开。",
        options: [],
        answer: "可以采用三段式：先承认 AI 的效率优势，再论证独立思考不可替代，最后提出合理使用原则。",
        explain: "起始句可写：While AI tools can enhance learning efficiency, students should avoid becoming excessively dependent on them."
      },
      {
        id: "w2",
        type: "写作思路",
        title: "作文实例 2",
        stem: "写作主题：The Value of Doing Difficult Things Slowly\n请从长期主义、抗挫能力、持续积累三个角度展开。",
        options: [],
        answer: "中心观点可以是：slow progress is still real progress when it is consistent and purposeful。",
        explain: "结尾可强调：small but steady efforts often yield substantial and lasting results."
      },
      {
        id: "w3",
        type: "写作思路",
        title: "作文实例 3",
        stem: "写作主题：How Can Students Reduce Digital Distractions?\n建议结合环境管理、习惯养成和目标拆解来写。",
        options: [],
        answer: "结构建议：问题引入 + 三个措施 + 总结长期影响。",
        explain: "可用表达：set priorities, resist temptation, maintain focus, cultivate self-discipline。"
      },
      {
        id: "w4",
        type: "写作思路",
        title: "作文实例 4",
        stem: "写作主题：Should Universities Offer More Practical Courses?\n请从就业能力、学术基础和课程平衡三个方面展开。",
        options: [],
        answer: "可主张增加 practical courses，但强调理论和实践要 integrate rather than compete。",
        explain: "句型：It is advisable for universities to..., provided that academic depth is not sacrificed."
      },
      {
        id: "w5",
        type: "写作思路",
        title: "作文实例 5",
        stem: "写作主题：Why Reading Still Matters in the Age of Short Videos\n请从注意力、深度思考和表达能力三个角度展开。",
        options: [],
        answer: "先指出短视频的便利，再说明阅读在深度理解和 coherent expression 上的独特价值。",
        explain: "可用表达：sustain attention, broaden perspectives, lay a solid foundation for writing。"
      },
      {
        id: "w6",
        type: "写作思路",
        title: "作文实例 6",
        stem: "写作主题：What Makes a Student Truly Resilient?\n请从失败经历、情绪恢复和长期目标三个角度写。",
        options: [],
        answer: "建议先定义 resilience，再结合具体学习场景展开论述。",
        explain: "可用句：A resilient student does not avoid setbacks but learns how to recover from them constructively."
      }
    ];

const DAILY_PLAN_BANK = [
      {
        day: 1,
        title: "第 1 天：建立节奏",
        translation: "请翻译：真正高效的人，不是把每一分钟都排满，而是知道什么最重要，并能持续专注。",
        writing: "作文题：How Can Students Build a Sustainable Study Routine?\n建议角度：时间分配、休息管理、长期坚持。",
        tips: "可用表达：set priorities, allocate time wisely, maintain focus, sustainable routine。"
      },
      {
        day: 2,
        title: "第 2 天：独立思考",
        translation: "请翻译：获取信息从未如此容易，但独立判断 relevant information 的能力却比以往任何时候都更重要。",
        writing: "作文题：Why Independent Thinking Matters in the Digital Age\n建议角度：信息筛选、观点形成、社会责任。",
        tips: "可用表达：independent judgment, relevant information, form one's own opinion。"
      },
      {
        day: 3,
        title: "第 3 天：克服分心",
        translation: "请翻译：如果学生不能 resist digital distractions，再多学习软件也难以真正提高效率。",
        writing: "作文题：Should Universities Restrict Smartphone Use in Class?\n建议角度：课堂效率、自律意识、执行边界。",
        tips: "可用表达：resist temptation, digital distractions, classroom discipline。"
      },
      {
        day: 4,
        title: "第 4 天：慢就是快",
        translation: "请翻译：缓慢但 consistent 的积累，往往比短暂而激烈的冲刺更能带来 visible progress。",
        writing: "作文题：The Power of Small Daily Improvements\n建议角度：语言学习、习惯养成、长期回报。",
        tips: "可用表达：consistent effort, visible progress, long-term returns。"
      },
      {
        day: 5,
        title: "第 5 天：阅读能力",
        translation: "请翻译：广泛阅读不仅可以 expand knowledge，还能帮助学生形成更 coherent 的表达。",
        writing: "作文题：Why Reading Is Still Irreplaceable\n建议角度：深度思考、词汇积累、写作基础。",
        tips: "可用表达：expand knowledge, coherent expression, lay a solid foundation。"
      },
      {
        day: 6,
        title: "第 6 天：科技与教育",
        translation: "请翻译：技术应该 facilitate learning，而不是让学生 neglect independent thinking。",
        writing: "作文题：Can Technology Make Education More Fair?\n建议角度：资源可及性、数字鸿沟、使用方式。",
        tips: "可用表达：facilitate learning, access to resources, digital divide。"
      },
      {
        day: 7,
        title: "第 7 天：情绪恢复",
        translation: "请翻译：在高压环境下，规律作息和适当运动对于 recover from mental fatigue 都很 crucial。",
        writing: "作文题：How Should Students Deal with Stress Before Exams?\n建议角度：作息管理、情绪调节、同伴支持。",
        tips: "可用表达：recover from fatigue, stabilize emotions, maintain balance。"
      },
      {
        day: 8,
        title: "第 8 天：校园课程",
        translation: "请翻译：大学课程不仅要传授理论知识，还应 integrate practical experience into learning.",
        writing: "作文题：Should More Practical Courses Be Added to University Education?\n建议角度：就业能力、学术基础、课程平衡。",
        tips: "可用表达：integrate theory with practice, practical experience, academic depth。"
      },
      {
        day: 9,
        title: "第 9 天：公共表达",
        translation: "请翻译：如果缺乏 compelling evidence，再响亮的观点也难以 justify a major decision。",
        writing: "作文题：What Makes an Argument Truly Convincing?\n建议角度：证据质量、逻辑结构、语言表达。",
        tips: "可用表达：compelling evidence, justify a decision, coherent argument。"
      },
      {
        day: 10,
        title: "第 10 天：时间价值",
        translation: "请翻译：当时间变得 scarce 时，能否明确 priority 往往决定一个人的学习质量。",
        writing: "作文题：How Should Students Manage Limited Time?\n建议角度：优先级、任务拆分、减少无效忙碌。",
        tips: "可用表达：scarce time, set priorities, avoid ineffective busyness。"
      },
      {
        day: 11,
        title: "第 11 天：创新能力",
        translation: "请翻译：真正 innovative 的解决方案，往往来自对 conventional ideas 的重新审视。",
        writing: "作文题：Why Innovation Requires More Than Technology\n建议角度：思维方式、试错空间、教育支持。",
        tips: "可用表达：innovative solutions, conventional ideas, rethink old assumptions。"
      },
      {
        day: 12,
        title: "第 12 天：长期目标",
        translation: "请翻译：有 ambitious goals 固然重要，但更重要的是 sustain effort over a long period of time。",
        writing: "作文题：Dream Big or Act Daily?\n建议角度：目标设定、执行力、耐心。",
        tips: "可用表达：ambitious goals, sustain effort, daily action。"
      },
      {
        day: 13,
        title: "第 13 天：校园生活",
        translation: "请翻译：新生需要时间融入校园，而友善的环境可以 facilitate this process.",
        writing: "作文题：How Can Universities Help Freshmen Adapt Faster?\n建议角度：社交支持、学习指导、心理适应。",
        tips: "可用表达：adapt to campus life, facilitate the process, supportive environment。"
      },
      {
        day: 14,
        title: "第 14 天：信息判断",
        translation: "请翻译：在社交媒体时代，学会 cite reliable sources 比单纯表达情绪更重要。",
        writing: "作文题：Should Students Be Taught Media Literacy?\n建议角度：信息真伪、公共讨论、责任意识。",
        tips: "可用表达：cite reliable sources, media literacy, verify information。"
      },
      {
        day: 15,
        title: "第 15 天：环境议题",
        translation: "请翻译：减少一次性消费并不会立刻 transform the world, but it can yield tangible benefits over time.",
        writing: "作文题：What Small Habits Can Help Protect the Environment?\n建议角度：消费选择、公共参与、长期影响。",
        tips: "可用表达：yield benefits, tangible change, long-term impact。"
      },
      {
        day: 16,
        title: "第 16 天：复盘与修正",
        translation: "请翻译：如果学习方法效果不佳，学生应及时调整，而不是 reluctantly repeating the same mistakes.",
        writing: "作文题：Why Reflection Matters More Than Busy Work\n建议角度：复盘习惯、错误利用、方法优化。",
        tips: "可用表达：reflect on mistakes, adjust methods, avoid repetition。"
      },
      {
        day: 17,
        title: "第 17 天：心理韧性",
        translation: "请翻译：真正 resilient 的人不是从不失败，而是能在 setbacks 之后稳定情绪并重新出发。",
        writing: "作文题：How Can Failure Become a Resource for Growth?\n建议角度：认知调整、情绪恢复、经验转化。",
        tips: "可用表达：resilient mindset, recover from setbacks, grow through failure。"
      },
      {
        day: 18,
        title: "第 18 天：工作选择",
        translation: "请翻译：年轻人 pursue meaningful work 的愿望，与获得稳定收入并不 necessarily conflict.",
        writing: "作文题：Meaningful Work or High Salary?\n建议角度：现实压力、价值追求、长期平衡。",
        tips: "可用表达：meaningful work, financial stability, compatible goals。"
      },
      {
        day: 19,
        title: "第 19 天：教育公平",
        translation: "请翻译：优质教育资源分布不均，仍然是一个 urgent and controversial issue.",
        writing: "作文题：Can Online Education Reduce Educational Inequality?\n建议角度：资源共享、设备差异、学习支持。",
        tips: "可用表达：educational inequality, urgent issue, uneven distribution。"
      },
      {
        day: 20,
        title: "第 20 天：团队合作",
        translation: "请翻译：清晰分工和 mutual trust 是建立 a strong bond within a team 的 foundation。",
        writing: "作文题：What Makes Teamwork Effective?\n建议角度：分工、沟通、信任。",
        tips: "可用表达：strong bond, clear division of tasks, mutual trust。"
      },
      {
        day: 21,
        title: "第 21 天：健康习惯",
        translation: "请翻译：长期 neglect sleep may deteriorate both memory and emotional stability.",
        writing: "作文题：Why Young People Should Take Sleep More Seriously\n建议角度：学习效率、情绪状态、生活方式。",
        tips: "可用表达：neglect sleep, deteriorate health, emotional stability。"
      },
      {
        day: 22,
        title: "第 22 天：公众行动",
        translation: "请翻译：如果市民真正 advocate greener lifestyles，城市环境就更有可能 undergo visible improvement.",
        writing: "作文题：Can Individual Action Really Change a City?\n建议角度：微小行动、集体效应、政策配合。",
        tips: "可用表达：advocate greener lifestyles, collective effect, visible improvement。"
      },
      {
        day: 23,
        title: "第 23 天：考试备考",
        translation: "请翻译：连续复习比临时抱佛脚更能 help students retain information accurately.",
        writing: "作文题：Cramming or Daily Revision?\n建议角度：记忆保持、压力管理、学习节奏。",
        tips: "可用表达：retain information, daily revision, avoid last-minute pressure。"
      },
      {
        day: 24,
        title: "第 24 天：技术伦理",
        translation: "请翻译：当算法在教育中扮演 increasingly dominant role 时，ethical standards become even more crucial.",
        writing: "作文题：Should AI Decisions Always Be Reviewed by Humans?\n建议角度：效率、公平、责任归属。",
        tips: "可用表达：dominant role, ethical standards, human review。"
      },
      {
        day: 25,
        title: "第 25 天：语言表达",
        translation: "请翻译：一篇优秀作文不仅要观点明确，还要结构 coherent、例证 relevant。",
        writing: "作文题：What Makes Writing Clear and Persuasive?\n建议角度：结构、证据、语言准确性。",
        tips: "可用表达：coherent structure, relevant examples, accurate language。"
      },
      {
        day: 26,
        title: "第 26 天：社会变化",
        translation: "请翻译：一些新问题 emerge so quickly that old rules may no longer be feasible.",
        writing: "作文题：How Should Society Respond to Rapid Change?\n建议角度：制度调整、公众教育、灵活应对。",
        tips: "可用表达：rapid change, new problems emerge, flexible response。"
      },
      {
        day: 27,
        title: "第 27 天：消费与自控",
        translation: "请翻译：如果人们不能 resist impulsive consumption, any budgeting plan will be hard to maintain.",
        writing: "作文题：Why Self-Discipline Matters in Modern Life\n建议角度：消费控制、屏幕使用、长期目标。",
        tips: "可用表达：resist impulsive behavior, maintain a plan, self-discipline。"
      },
      {
        day: 28,
        title: "第 28 天：学习动力",
        translation: "请翻译：外部 incentive 可以 boost motivation, but genuine curiosity is more sustainable.",
        writing: "作文题：What Motivates People to Learn for a Lifetime?\n建议角度：兴趣、目标、环境支持。",
        tips: "可用表达：external incentives, genuine curiosity, lifelong learning。"
      },
      {
        day: 29,
        title: "第 29 天：公共沟通",
        translation: "请翻译：清晰而 attentive 的沟通，可以 eliminate many unnecessary misunderstandings.",
        writing: "作文题：Why Good Communication Is a Practical Skill\n建议角度：学习合作、职场效率、人际关系。",
        tips: "可用表达：attentive communication, eliminate misunderstandings, practical skill。"
      },
      {
        day: 30,
        title: "第 30 天：回顾与升级",
        translation: "请翻译：真正的成长，往往 derive from repeated reflection rather than sudden transformation.",
        writing: "作文题：What Have You Learned from 30 Days of Consistent Practice?\n建议角度：习惯变化、能力积累、自我认识。",
        tips: "可用表达：derive from reflection, gradual growth, consistent practice。"
      }
    ];

window.QUESTION_BANK = QUESTION_BANK;
window.DAILY_PLAN_BANK = DAILY_PLAN_BANK;
