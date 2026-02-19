export const careerData = {
  Science: [
    {
      id: 'eng',
      title: 'Engineering',
      icon: '⚙️',
      overview: 'Engineering is the application of science and mathematics to solve problems and design structures, machines, and systems.',
      skills: ['Mathematics', 'Physics', 'Problem Solving', 'Logical Reasoning', 'Technical Proficiency'],
      steps: [
        'Complete Class 12 with PCM (Physics, Chemistry, Mathematics).',
        'Appear for entrance exams like JEE Main, JEE Advanced, or state-level exams.',
        'Choose a specialization (Computer Science, Mechanical, Civil, etc.) and complete a B.Tech/B.E. degree.',
        'Optional: Pursue M.Tech or MBA for higher specialization or management roles.',
        'Gain experience through internships and projects.'
      ],
      entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'MHT-CET'],
      colleges: ['IITs (Indian Institutes of Technology)', 'NITs', 'BITS Pilani', 'III-Ts'],
      salary: '₹5 LPA - ₹50+ LPA',
      pros: ['High earning potential', 'Diverse specialization options', 'Global job opportunities', 'Intellectually stimulating work'],
      cons: ['Highly competitive exams', 'High-pressure work environments', 'Long study duration', 'Continuous need to update technical skills']
    },
    {
      id: 'med',
      title: 'Medical (MBBS/BDS)',
      icon: '🩺',
      overview: 'A career in medicine involves diagnosing and treating illnesses and injuries to improve human health.',
      skills: ['Biology', 'Empathy', 'Resilience', 'Attention to Detail', 'Critical Thinking'],
      steps: [
        'Complete Class 12 with PCB (Physics, Chemistry, Biology).',
        'Appear for the NEET-UG entrance exam.',
        'Secure admission to an MBBS or BDS program.',
        'Complete 4.5 years of study plus 1 year of mandatory internship.',
        'Optional: Pursue MD/MS for specialization.'
      ],
      entranceExams: ['NEET-UG', 'AIIMS', 'JIPMER'],
      colleges: ['AIIMS New Delhi', 'CMC Vellore', 'Armed Forces Medical College (AFMC)'],
      salary: '₹6 LPA - ₹25+ LPA',
      pros: ['Noble and respected profession', 'High job security', 'Ability to save lives', 'Continual professional growth'],
      cons: ['Extremely long study and training years', 'Poor work-life balance', 'High emotional and mental stress', 'Irregular and long working hours']
    },
    {
      id: 'biotech',
      title: 'Biotechnology',
      icon: '🧬',
      overview: 'Biotechnology uses living systems and organisms to develop or make products for various industries like health, agriculture, and environment.',
      skills: ['Biology', 'Chemistry', 'Research Skills', 'Laboratory Techniques', 'Analytical Thinking'],
      steps: [
        'Complete Class 12 with PCB.',
        'Pursue B.Sc/B.Tech in Biotechnology.',
        'Perform research projects and internships.',
        'Consider M.Sc or Ph.D. for research-heavy roles.',
        'Join pharmaceutical, agricultural, or environmental tech companies.'
      ],
      entranceExams: ['GAT-B', 'IIT-JAM', 'CUET', 'JEE (for B.Tech Biotechnology)'],
      colleges: ['IIT Bombay', 'JNU (Jawaharlal Nehru University)', 'University of Hyderabad'],
      salary: '₹4 LPA - ₹15 LPA',
      pros: ['Contribution to ground-breaking research', 'Growing field with future potential', 'Diverse career paths (Pharma, Agri, etc.)', 'Opportunity to work in labs'],
      cons: ['Requires advanced degrees for high growth', 'Can be repetitive research work', 'Initial salary can be lower than IT', 'Highly dependent on research funding']
    },
    {
        id: 'astro',
        title: 'Astronomy & Space',
        icon: '🔭',
        overview: 'Astronomy study the universe beyond earth, including planets, stars, galaxies and more.',
        skills: ['Advanced Mathematics', 'Physics', 'Programming (Python/C++)', 'Observational Skills', 'Data Analysis'],
        steps: [
          'Complete Class 12 with PCM.',
          'B.Sc. in Physics/Astronomy or B.Tech. in Aerospace Engineering.',
          'Clear exams like JEST or GATE.',
          'M.Sc. and Ph.D. in Astrophysics/Space Science.',
          'Secure a research or teaching position in organizations like ISRO or NASA.'
        ],
        entranceExams: ['JEST', 'GATE', 'BITSAT', 'ISRO Entrance Exam'],
        colleges: ['Indian Institute of Astrophysics (IIA)', 'Indian Institute of Space Science and Technology (IIST)'],
        salary: '₹8 LPA - ₹20+ LPA',
        pros: ['Deeply intellectual and fascinating', 'Opportunity to work with agencies like ISRO/NASA', 'Contributing to human knowledge', 'Access to advanced technology'],
        cons: ['Limited job positions available', 'Requires many years of higher education', 'Irregular hours for star observations', 'Heavily involves complex mathematics']
    },
    {
        id: 'forensic',
        title: 'Forensic Science',
        icon: '🔍',
        overview: 'Forensic science uses scientific methods to investigate crimes and analyze evidence for legal proceedings.',
        skills: ['Biology/Chemistry', 'Attention to Detail', 'Law Knowledge', 'Analytical Thinking', 'Ethics'],
        steps: [
          'Complete Class 12 with PCB or PCM.',
          'Complete a Bachelors degree in Forensic Science (B.Sc.).',
          'Specialize during M.Sc. in areas like Toxicology, DNA Profiling, or Fingerprints.',
          'Intern at forensic laboratories or with investigative agencies.',
          'Clear FACT or UGC-NET to join Government Forensic Labs.'
        ],
        entranceExams: ['CUET', 'AIFSET', 'FACT (Forensic Aptitude & Caliber Test)'],
        colleges: ['National Forensic Sciences University (NFSU)', 'Banaras Hindu University (BHU)'],
        salary: '₹3 LPA - ₹12 LPA',
        pros: ['Exciting and investigative work', 'Strong sense of serving justice', 'Unique combination of science and law', 'Growing demand in private sectors'],
        cons: ['Exposure to graphic crime scenes', 'High attention to detail required', 'Pressure to be 100% accurate', 'Work can be emotionally taxing']
    },
    {
        id: 'ds',
        title: 'Data Science',
        icon: '📈',
        overview: 'Data science involves extracting insights from large volumes of data using statistics, algorithms, and technology.',
        skills: ['Statistics', 'Python/R Programming', 'Machine Learning', 'Data Visualization', 'SQL'],
        steps: [
          'Complete Class 12 with Mathematics.',
          'B.Tech / B.Sc in CS or Statistics / BCA.',
          'Learn data tools like Python, R, and Tableau.',
          'Optional: Masters in Data Science or specialized certifications.',
          'Work on real-world projects and build a portfolio.'
        ],
        entranceExams: ['GATE', 'IIT-JAM', 'CUET'],
        colleges: ['IITs', 'ISI (Indian Statistical Institute)', 'BITS Pilani'],
        salary: '₹6 LPA - ₹35+ LPA',
        pros: ['Highest demand in modern industry', 'Excellent pay and remote opportunities', 'Applicable to almost every sector', 'Continuous learning and innovation'],
        cons: ['Highly technical and mathematical', 'Sitting for long hours at computers', 'Constant need to learn new tools', 'Messy real-world data can be frustrating']
    },
    {
        id: 'ai',
        title: 'AI & Robotics',
        icon: '🤖',
        overview: 'AI & Robotics focus on creating intelligent machines that can simulate human behavior and perform tasks autonomously.',
        skills: ['Mathematics', 'C++/Python/Java', 'Control Theory', 'Artificial Intelligence', 'Electronics'],
        steps: [
          'Complete Class 12 with PCM.',
          'B.Tech. in Computer Science, AI, or Robotics Engineering.',
          'Learn Deep Learning and Neural Networks.',
          'Work on robotics projects and participate in competitions.',
          'Masters or Research is highly recommended in this field.'
        ],
        entranceExams: ['JEE Main', 'JEE Advanced', 'GATE'],
        colleges: ['IIT Hyderabad', 'IIT Madras', 'IIIT Hyderabad'],
        salary: '₹10 LPA - ₹60+ LPA',
        pros: ['Working on the future of technology', 'High-impact work on world problems', 'Lucrative salary and research perks', 'Creative and innovative environment'],
        cons: ['Deeply competitive and difficult subjects', 'Ethical complexities to consider', 'Fast-paced (knowledge becomes obsolete fast)', 'Requires deep focus and patience']
    },
    {
        id: 'se',
        title: 'Sustainable Energy',
        icon: '🌱',
        overview: 'Sustainable Energy focuses on developing and managing renewable energy sources to reduce carbon footprints.',
        skills: ['Physics', 'Environmental Science', 'Problem Solving', 'Material Science', 'Policy Knowledge'],
        steps: [
          'Complete Class 12 with PCM.',
          'B.Tech. in Environmental, Mechanical, or Electrical Engineering.',
          'Specialize in Renewable Energy during Masters.',
          'Understand energy policies and grid systems.',
          'Work with green energy companies or research institutes.'
        ],
        entranceExams: ['JEE Main', 'GATE'],
        colleges: ['IIT Delhi', 'IIT Bombay', 'TERI School of Advanced Studies'],
        salary: '₹5 LPA - ₹18 LPA',
        pros: ['Contributing to saving the planet', 'Rapidly growing industry due to climate change', 'Government and global support', 'Satisfying ethical career'],
        cons: ['Highly dependent on government subsidies/policies', 'Technical implementation can be expensive', 'May involve working in remote outdoor sites', 'Field takes time to scale up']
    },
    {
        id: 'nano',
        title: 'Nanotechnology',
        icon: '🏗️',
        overview: 'Nanotechnology deals with manipulation of matter on an atomic and molecular scale to create new materials.',
        skills: ['Physics', 'Chemistry', 'Research Aptitude', 'Precision', 'Innovation'],
        steps: [
          'Complete Class 12 with PCM/PCB.',
          'B.Sc./B.Tech. in Nanotechnology or Biotechnology.',
          'M.Tech. or M.Sc. in Nanoscience.',
          'Engage in laboratory research and publishing papers.',
          'Work in R&D sectors of materials science, pharma, or electronics.'
        ],
        entranceExams: ['JEE Main', 'VITEEE', 'SRMJEEE'],
        colleges: ['Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)', 'IITs'],
        salary: '₹6 LPA - ₹22 LPA',
        pros: ['Cutting edge materials science', 'Multidisciplinary (Physics, Bio, Chem)', 'Massive potential in medicine and tech', 'Unique and rare expertise'],
        cons: ['Extremely technical and difficult study', 'Requires very expensive lab equipment', 'Safety concerns regarding nano-particles', 'Fewer jobs at entry level']
    },
    {
        id: 'pharma',
        title: 'Pharmacology',
        icon: '💊',
        overview: 'Pharmacology is the study of how drugs interact with living systems to cure diseases.',
        skills: ['Chemistry', 'Biology', 'Research Skills', 'Attention to Detail', 'Ethics'],
        steps: [
          'Complete Class 12 with PCB.',
          'Complete B.Pharm (Bachelor of Pharmacy).',
          'Prepare for GPAT (Graduate Pharmacy Aptitude Test).',
          'Complete M.Pharm in Pharmacology or Clinical Research.',
          'Work in pharmaceutical labs, drug testing, or regulatory bodies.'
        ],
        entranceExams: ['GPAT', 'NIPER JEE', 'CUET'],
        colleges: ['NIPERs', 'Jamia Hamdard', 'PCP (Poona College of Pharmacy)'],
        salary: '₹3.5 LPA - ₹12 LPA',
        pros: ['Vital to healthcare and drug discovery', 'Stable industry (Pharma always needed)', 'Good opportunities in R&D', 'Respected role in medical science'],
        cons: ['Strict regulatory environments', 'Involves long hours in labs', 'High level of legal and ethical responsibility', 'Relies heavily on meticulous documentation']
    }
  ],
  Commerce: [
    {
      id: 'ca',
      title: 'Chartered Accountancy',
      icon: '📊',
      overview: 'Chartered Accountants handle financial accounting and reporting, auditing, taxation, and financial management.',
      skills: ['Accountancy', 'Mathematics', 'Taxation Laws', 'Auditing', 'Analytical Skills'],
      steps: [
        'Register for the CA Foundation course after Class 10 or 12.',
        'Clear the CA Foundation exam.',
        'Enroll in the CA Intermediate course and clear both groups.',
        'Undergo 3 years of articleship (practical training).',
        'Clear the CA Final exam and register as a member of ICAI.'
      ],
      entranceExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
      colleges: ['The Institute of Chartered Accountants of India (ICAI)'],
      salary: '₹8 LPA - ₹30+ LPA',
      pros: ['Very safe and stable career', 'Respected social and professional status', 'Can start independent practice', 'No upper limit on earnings for experts'],
      cons: ['Extremely difficult exams (low pass rate)', 'High pressure during tax/audit seasons', 'Continuous learning of changing tax laws', 'Long hours of detailed desk work']
    },
    {
       id: 'inv',
       title: 'Investment Banking',
       icon: '💰',
       overview: 'Investment bankers help corporations, governments, and other entities raise capital and provide financial consultancy services.',
       skills: ['Financial Modeling', 'Valuation', 'Communication', 'Work Ethics', 'Excel Proficiency'],
       steps: [
         'Complete Class 12 with Commerce or Science (Math is crucial).',
         'Earn a Bachelors degree in Finance, Economics, or Commerce.',
         'Pursue an MBA in Finance from a top-tier business school or earn the CFA designation.',
         'Compete for internships in investment banks.',
         'Start as an Analyst and work towards Associate and VP roles.'
       ],
       entranceExams: ['CAT (for MBA)', 'CFA Level I, II, III'],
       colleges: ['IIMs', 'FMS Delhi', 'XLRI Jamshedpur'],
       salary: '₹10 LPA - ₹1+ Crore',
       pros: ['Incredibly high salary and bonuses', 'Work with top world leaders and CEOs', 'High-speed and exciting environment', 'Elite status in the finance world'],
       cons: ['Infamous for 100+ hour work weeks', 'Extremely high stress and burnout risk', 'Highly dependent on market conditions', 'Requires constant availability (24/7)']
    },
    {
      id: 'mkt',
      title: 'Marketing & Sales',
      icon: '📢',
      overview: 'Marketing involves identifying customer needs and promoting products or services to meet those needs.',
      skills: ['Communication', 'Creativity', 'Psychology', 'Strategy', 'Analytics'],
      steps: [
        'Complete Class 12 in any stream.',
        'BBA or B.Com in Marketing.',
        'MBA in Marketing from a good college.',
        'Gain experience through sales internships or social media marketing projects.',
        'Move up to Brand Manager or Marketing Director roles.'
      ],
      entranceExams: ['CAT', 'XAT', 'SNAP'],
      colleges: ['IIMs', 'MICA Ahmedabad', 'NMIMS Mumbai'],
      salary: '₹4 LPA - ₹30+ LPA',
      pros: ['Highly creative and dynamic', 'Performance-linked high incentives', 'Applicable to every business ever', 'Builds great people and networking skills'],
      cons: ['Highly target-driven (Sales pressure)', 'Uncertainty of some campaigns/ads', 'Requires constant adaptability', 'Can involve frequent travel']
    },
    {
      id: 'ent',
      title: 'Entrepreneurship',
      icon: '🚀',
      overview: 'Entrepreneurship is the process of designing, launching, and running a new business venture.',
      skills: ['Leadership', 'Risk-taking', 'Financial Management', 'Networking', 'Innovation'],
      steps: [
        'Identify a market gap or problem.',
        'Acquire basic business knowledge (BBA/MBA can help).',
        'Develop a Business Plan.',
        'Secure funding (Bootstrapping, Angel Investors, VC).',
        'Launch, iterate, and scale your business.'
      ],
      entranceExams: ['None (Experience is key)'],
      colleges: ['IIMs (Entrepreneurship cells)', 'S.P. Jain Institute of Management', 'EDII Ahmedabad'],
      salary: 'Variable (Uncapped potential)',
      pros: ['Be your own boss', 'Unlimited financial growth potential', 'Create jobs and solve social problems', 'Work on your passion projects'],
      cons: ['Very high risk of failure', 'Long hours with no guaranteed pay', 'High stress and immense responsibility', 'Social and financial instability in early days']
    },
    {
      id: 'eco',
      title: 'Economics',
      icon: '📉',
      overview: 'Economics studies how individuals, businesses, and governments allocate resources.',
      skills: ['Statistical Analysis', 'Mathematical Ability', 'Critical Thinking', 'Policy Reading', 'Logical Reasoning'],
      steps: [
        'Complete Class 12 with Mathematics.',
        'B.A. or B.Sc. in Economics.',
        'M.A./M.Sc. in Economics (Specializing in Finance, Econometrics, etc.).',
        'Work in financial institutions, research labs, or government bodies.',
        'Optional: Pursue Ph.D. for research roles or academia.'
      ],
      entranceExams: ['CUET-UG', 'IIT-JAM (for Economics)', 'DSE/ISI Entrance'],
      colleges: ['Delhi School of Economics (DSE)', 'St. Stephens College', 'ISI Kolkata'],
      salary: '₹5 LPA - ₹25 LPA',
      pros: ['Deep understanding of global systems', 'Respected roles in policy and finance', 'Versatile across public and private sectors', 'Intellectually challenging'],
      cons: ['Requires very high level of math/stats', 'Can be dry or theoretical for some', 'High competition in top-tier research institutes', 'Advanced degrees often required for good roles']
    },
    {
      id: 'drop',
      title: 'Dropshipping',
      icon: '📦',
      overview: 'Dropshipping is a retail fulfillment method where a store doesn’t keep the products it sells in stock.',
      skills: ['Digital Marketing', 'Sales Strategy', 'Customer Relations', 'Financial Planning', 'Supply Chain Management'],
      steps: [
        'Choose a niche (highly researched).',
        'Set up an e-commerce platform (Shopify, WooCommerce).',
        'Find reliable suppliers (AliExpress, CJ Dropshipping).',
        'Run targeted ads (FB, IG, Google).',
        'Handle customer support and optimize for conversions.'
      ],
      entranceExams: ['Self-taught (Courses like Coursera/Udemy help)'],
      colleges: ['N/A (Bootstrap your own venture)'],
      salary: '₹1 LPA - ₹10+ LPA (Profit-driven)',
      pros: ['Very low initial investment', 'Easy to start from home', 'Highly scalable if successful', 'Learn modern digital marketing'],
      cons: ['Thin profit margins after ad costs', 'Highly dependent on supplier reliability', 'Intense competition from other stores', 'Managing customer returns and complaints']
    },
    {
      id: 'cs',
      title: 'Company Secretary',
      icon: '📑',
      overview: 'Company Secretaries ensure that the company complies with financial and legal requirements.',
      skills: ['Legal Compliance', 'Company Law', 'Attention to Detail', 'Corporate Governance', 'Communication'],
      steps: [
        'Register with ICSI.',
        'Clear CS Executive Entrance Test (CSEET).',
        'Pass the CS Executive exams.',
        'Pass the CS Professional exams.',
        'Complete mandatory practical training and articleship.'
      ],
      entranceExams: ['CSEET', 'CS Executive', 'CS Professional'],
      colleges: ['The Institute of Company Secretaries of India (ICSI)'],
      salary: '₹5 LPA - ₹20 LPA',
      pros: ['Respected corporate position', 'Vital to business legality and ethics', 'Stable and secure corporate role', 'Good work-life balance compared to CA'],
      cons: ['High legal and compliance responsibility', 'Work can be very detailed and repetitive', 'Professional exams can be challenging', 'Relies on staying updated with changing laws']
    },
    {
      id: 'ba',
      title: 'Business Analytics',
      icon: '📈',
      overview: 'Business analytics translates data into actionable business insights to drive decision-making.',
      skills: ['Data Visualization', 'Excel', 'Tableau/Power BI', 'SQL', 'Strategic Thinking'],
      steps: [
        'Complete Class 12 with Math.',
        'B.Com/B.Sc. in CS, Stats, or BBA.',
        'Specialized certification in Business Analytics.',
        'Build projects using real datasets.',
        'Gain experience as an analyst and move into strategy roles.'
      ],
      entranceExams: ['CAT', 'GMAT', 'GRE'],
      colleges: ['IIM Bangalore', 'ISB Hyderabad', 'IIT Kharagpur'],
      salary: '₹6 LPA - ₹28 LPA',
      pros: ['Highly valued by every big company', 'Combines tech skills with business sense', 'Fast career progression', 'Remote work opportunities'],
      cons: ['Requires strong analytical and tech mindset', 'Constant pressure to produce insights', 'Complex tools required for data handled', 'Sitting for long hours staring at data']
    },
    {
      id: 'fp',
      title: 'Financial Planning',
      icon: '🏦',
      overview: 'Financial planners help individuals and organizations manage their money and reach long-term goals.',
      skills: ['Interest Calculation', 'Communication', 'Investment Knowledge', 'Empathy', 'Regulation Knowledge'],
      steps: [
        'Complete Class 12 with Commerce.',
        'B.Com or BBA in Finance.',
        'Pursue CFP (Certified Financial Planner) certification.',
        'Stay updated with tax laws and investment products.',
        'Build a client base or work with wealth management firms.'
      ],
      entranceExams: ['CFP certification exams'],
      colleges: ['Financial Planning Standards Board (FPSB) India authorized centers'],
      salary: '₹4 LPA - ₹22 LPA',
      pros: ['Help people secure their future', 'Can work as an independent consultant', 'Flexible working hours typically', 'Strong personal financial knowledge'],
      cons: ['Takes time to build a client base', 'Stressful to manage other people\'s money', 'Earnings can fluctuate with markets', 'Requires high patience and empathy']
    },
    {
      id: 'bc',
      title: 'Business Consulting',
      icon: '👔',
      overview: 'Consultants provide expert advice to businesses to improve their performance or solve specific problems.',
      skills: ['Problem Solving', 'Communication', 'Industry Expertise', 'Strategic Thinking', 'Presentation'],
      steps: [
        'Complete Class 12 in any stream.',
        'Earn a degree from a top-tier college.',
        'Pursue an MBA from a leading institute.',
        'Secure a campus placement with MBB (McKinsey, BCG, Bain) or Big 4 firms.',
        'Specialize in a domain like healthcare, tech, or retail.'
      ],
      entranceExams: ['CAT', 'GMAT'],
      colleges: ['IIMs', 'ISB', 'FMS Delhi'],
      salary: '₹12 LPA - ₹40+ LPA',
      pros: ['High prestige and exposure to many industries', 'Excellent salary and travel perks', 'Learn massive amounts of business knowledge', 'Great networking opportunities'],
      cons: ['Excessive travel requirements', 'Very long and unpredictable hours', 'High pressure to deliver impact', 'Initial years can be very demanding']
    }
  ],
  Arts: [
    {
      id: 'law',
      title: 'Law & Judiciary',
      icon: '⚖️',
      overview: 'Lawyers provide legal advice, represent clients in court, and interpret laws and regulations.',
      skills: ['Public Speaking', 'Legal Research', 'Critical Thinking', 'Writing', 'Negotiation'],
      steps: [
        'Complete Class 12 in any stream (Arts/Commerce/Science).',
        'Appear for law entrance exams like CLAT or AILET.',
        'Complete a 5-year integrated law degree (LL.B.).',
        'Enroll with the Bar Council of India (BCI).',
        'Practice in courts or join law firms.'
      ],
      entranceExams: ['CLAT', 'AILET', 'LSAT-India'],
      colleges: ['National Law Schools', 'Delhi University'],
      salary: '₹4 LPA - ₹20+ LPA',
      pros: ['Intellectually satisfying and powerful', 'High status and influence', 'Protect people\'s rights and seek justice', 'Broad career paths (Corporate, Civil, Criminal)'],
      cons: ['Long study hours and vast amount of reading', 'Initially lower pay in litigation', 'High pressure and stressful courtroom environments', 'Immense competition among lawyers']
    },
    {
      id: 'journ',
      title: 'Journalism & Media',
      icon: '🎙️',
      overview: 'Journalists gather, write, and distribute news across various media platforms.',
      skills: ['Communication', 'Writing', 'Storytelling', 'Video Editing', 'Curiosity'],
      steps: [
        'Complete Class 12 in any stream.',
        'B.A. in Journalism and Mass Communication.',
        'Build a portfolio through blogs and internships.',
        'Gain experience in a newsroom or digital media house.',
        'Specialize in field like sports, finance or investigative journalism.'
      ],
      entranceExams: ['CUET', 'IIMC Entrance', 'ACJ Entrance'],
      colleges: ['IIMC Delhi', 'Asian College of Journalism (ACJ)', 'MCRC Jamia'],
      salary: '₹3 LPA - ₹15 LPA',
      pros: ['Public visibility and influence', 'Exciting and non-routine work', 'Travel and meet interesting people', 'Shape public opinion on key issues'],
      cons: ['Initially low salary', 'High pressure and tight deadlines', 'Work in risky or uncomfortable conditions', 'Highly irregular working hours']
    },
    {
      id: 'psych',
      title: 'Psychology',
      icon: '🧠',
      overview: 'Psychologists study human behavior and mental processes to help people manage their mental health.',
      skills: ['Empathy', 'Listening', 'Research', 'Patience', 'Analytical Thinking'],
      steps: [
        'Complete Class 12 (Psychology subject is a plus).',
        'B.A./B.Sc. in Psychology.',
        'M.A./M.Sc. in Applied/Clinical Psychology.',
        'Pursue M.Phil or internship to get RCI registration (for Clinical).',
        'Start practice or join hospitals/schools.'
      ],
      entranceExams: ['CUET', 'GATE (for PhD)', 'NET'],
      colleges: ['TISS Mumbai', 'Lady Shri Ram College', 'LIP (IHBAS)'],
      salary: '₹3 LPA - ₹18 LPA',
      pros: ['Deeply meaningful and empathetic', 'Help people overcome mental challenges', 'Fascinating insight into human mind', 'Growing demand due to mental health awareness'],
      cons: ['Emotionally draining to hear about others\' pain', 'Takes many years to become a licensed professional', 'Initial pay is quite modest', 'Ongoing effort to maintain professional boundaries']
    },
    {
      id: 'design',
      title: 'Fashion & Product Design',
      icon: '👗',
      overview: 'Designers create aesthetic and functional products, from clothing to electronics.',
      skills: ['Creativity', 'Sketching', 'Visualization', 'Material Knowledge', 'Trends Awareness'],
      steps: [
        'Complete Class 12 in any stream.',
        'Appear for design entrance exams like NID DAT or NECT.',
        'Pursue B.Des (Bachelor of Design).',
        'Build a strong portfolio.',
        'Join design firms or start your own brand.'
      ],
      entranceExams: ['NID DAT', 'UCEED', 'NIFT Entrance'],
      colleges: ['NID Ahmedabad', 'NIFT Delhi', 'IIT Bombay (IDC)'],
      salary: '₹4 LPA - ₹20 LPA',
      pros: ['Creative freedom and expression', 'See your ideas come to life visually', 'Exciting industry and trends', 'Can lead to global fame and prestige'],
      cons: ['Highly competitive and subjective', 'Long and irregular working hours', 'Tight deadlines for collections/projects', 'Physical labor involved (prototypes/stitching)']
    },
    {
      id: 'civil',
      title: 'Civil Services (IAS/IPS)',
      icon: '🏛️',
      overview: 'Civil servants manage government administration and policy implementation in India.',
      skills: ['General Knowledge', 'Leadership', 'Decision Making', 'Hard Work', 'Ethics'],
      steps: [
        'Earn a graduation degree in any field.',
        'Start preparing for the UPSC Civil Services Exam early.',
        'Clear Prelims, Mains, and the Interview.',
        'Undergo training at LBSNAA or SVPNPA.',
        'Join as an SDM/ASP and serve the nation.'
      ],
      entranceExams: ['UPSC CSE'],
      colleges: ['Any recognized university'],
      salary: '₹56,100 (starting basic) + Perks',
      pros: ['Immense power and social impact', 'Highest job security in the country', 'Wide range of administrative experiences', 'Prestigious status and government perks'],
      cons: ['Extremely difficult exam (Success rate < 0.1%)', 'High political pressure and transfers', 'Vast and demanding work hours', 'Huge responsibility and public scrutiny']
    },
    {
      id: 'gd',
      title: 'Graphic Design',
      icon: '🎨',
      overview: 'Graphic designers create visual content to communicate messages through digital and print media.',
      skills: ['Adobe Creative Suite', 'Typography', 'Creativity', 'UI/UX basics', 'Color Theory'],
      steps: [
        'Complete Class 12.',
        'Learn tools like Photoshop, Illustrator, and Figma.',
        'Complete a degree or intense diploma in Graphic Design.',
        'Work on real projects and build a Behance/Dribbble profile.',
        'Join creative agencies or work as a freelancer.'
      ],
      entranceExams: ['UCEED', 'NID DAT'],
      colleges: ['National Institute of Design (NID)', 'MAHE Manipal'],
      salary: '₹3 LPA - ₹18 LPA',
      pros: ['Work on creative and visual projects', 'Growing demand in every digital field', 'Good options for freelancing and remote work', 'Flexible and modern work environment'],
      cons: ['Subjective feedback can be frustrating', 'Tight deadlines for creative tasks', 'Long hours sitting at a screen', 'Lower pay compared to engineering initially']
    },
    {
      id: 'id',
      title: 'Interior Design',
      icon: '🏠',
      overview: 'Interior designers plan and furnish the interiors of private homes and commercial buildings.',
      skills: ['Space Planning', 'Aesthetics', 'AutoCAD/3DS Max', 'Material Selection', 'Client Management'],
      steps: [
        'Complete Class 12.',
        'B.Des. in Interior Design.',
        'Learn CAD and 3D modeling software.',
        'Intern with architects or design firms.',
        'Get certified and start taking independent projects.'
      ],
      entranceExams: ['AIEED', 'NIFT', 'NID'],
      colleges: ['CEPT University Ahmedabad', 'NID'],
      salary: '₹3.5 LPA - ₹15 LPA',
      pros: ['Transform physical spaces beautifully', 'Dynamic and creative work every day', 'Can start your own design studio', 'Work with interesting clients and materials'],
      cons: ['Client management can be very stressful', 'Requires frequent visits to dusty construction sites', 'Deadlines are often very tight', 'Dependent on real-estate market cycles']
    },
    {
      id: 'hm',
      title: 'Hotel Management',
      icon: '🏨',
      overview: 'Hotel management involves overseeing the operations of hotels, resorts, and tourism entities.',
      skills: ['Hospitality', 'Communication', 'Multitasking', 'Leadership', 'Patience'],
      steps: [
        'Complete Class 12.',
        'Appear for NCHMCT JEE.',
        'Complete a B.Sc. in Hospitality and Hotel Administration.',
        'Gain experience through luxury hotel internships.',
        'Work in departments like Front Office, F&B, or Housekeeping.'
      ],
      entranceExams: ['NCHMCT JEE'],
      colleges: ['IHM Pusa', 'IHM Mumbai', 'Welcomgroup Graduate School (WGSHA)'],
      salary: '₹3 LPA - ₹12 LPA',
      pros: ['Work in luxurious and exciting environments', 'Travel and meet global people', 'Diverse career roles inside the hotel', 'Fast growth to manager levels'],
      cons: ['Very long and irregular hours', 'Weekend and holiday work required', 'Physical exertion and standing for long periods', 'Demanding customer service situations']
    },
    {
      id: 'fa',
      title: 'Fine Arts',
      icon: '🖌️',
      overview: 'Fine arts encompass visual arts created primarily for aesthetic and intellectual purposes.',
      skills: ['Painting/Sculpting', 'Creativity', 'Observation', 'History of Art', 'Individual Expression'],
      steps: [
        'Complete Class 12.',
        'Apply for Bachelor of Fine Arts (BFA).',
        'Specialize in Painting, Applied Art, Sculpture, etc.',
        'Host exhibitions and build an artist name.',
        'Work as art directors, educators, or independent artists.'
      ],
      entranceExams: ['University specific entrance tests'],
      colleges: ['Sir J.J. School of Art', 'College of Art (Delhi)'],
      salary: 'Highly variable (Portfolio-driven)',
      pros: ['Ultimate creative freedom', 'Fame and recognition in the art world', 'Flexible work on your own terms', 'Pure expression of personal identity'],
      cons: ['Highly unstable and unpredictable income initially', 'Difficulty in breaking into top galleries', 'Often requires a second job for stability', 'Work is highly subjective and personal']
    },
    {
      id: 'em',
      title: 'Event Management',
      icon: '🎫',
      overview: 'Event managers plan and execute large-scale events like weddings, concerts, and corporate summits.',
      skills: ['Organization', 'Networking', 'Budgeting', 'Negotiation', 'Crisis Management'],
      steps: [
        'Complete Class 12 in any stream.',
        'BBA in Event Management or a Diploma.',
        'Start as a volunteer at local events.',
        'Build a network of vendors (Catering, Décor, Audio).',
        'Join an event management firm or start your own agency.'
      ],
      entranceExams: ['None (CUET for some universities)'],
      colleges: ['NIEM (National Institute of Event Management)', 'EMDI'],
      salary: '₹3 LPA - ₹15 LPA',
      pros: ['High excitement and diverse work', 'Very rewarding to see results instantly', 'Excellent networking with high-profile people', 'Opportunities for entrepreneurship'],
      cons: ['Very high level of stress on the event day', 'Working when others are celebrating (Weekends/Holidays)', 'Requires extreme patience and multitasking', 'Physically demanding and long hours']
    }
  ]
};
