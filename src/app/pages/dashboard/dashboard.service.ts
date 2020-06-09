import { Injectable } from '@angular/core';

export class CardInfo {
  id: string;
  title: string;
  icon: string;
  icon_color: string;
  content: string;
  sub_title: string;
  sub_content: string;
}

export class Experience {
  id: string;
  entity: string;
  position: string;
  content: string;
  date: string;
  icon: string;
  category: string;
  tag: string;
  location: string;
}

export class Skills {
  id: string;
  name: string;
  category: string;
  proficiency: string;
}

export class Projects {
  id: string;
  name: string;
  description: string;
  tag: string;
  reference: string;
}

const CARDINFOS: CardInfo[] = [
    { id: '1', title: 'Job Status', icon: 'fa-eye', icon_color: 'bg-success',
      content: 'Open for opportunities', sub_title: 'Position', sub_content: 'Full-time' },
    { id: '2', title: 'Latest Working Experience', icon: 'fa-suitcase', icon_color: 'bg-warning',
      content: 'J.P.Morgan', sub_title: 'Time', sub_content: '07/2017 - 07/2019' },
    { id: '3', title: 'Highest Education', icon: 'fa-graduation-cap', icon_color: 'bg-yellow',
      content: 'New York University', sub_title: 'Time', sub_content: '09/2019 - 05/2021' },
    { id: '4', title: 'Most Experienced Language', icon: 'fa-code', icon_color: 'bg-info',
      content: 'Java', sub_title: 'Years of Experience', sub_content: '3' },
  ];

const experience: Experience[] = [
  {
    id: '0',
    entity: 'New York University',
    position: 'MS in Information System',
    content: '• GPA: 3.5 \n' +
    '• Course: Robo Advisors & Systematic Trading, Digital Strategy\n',
    date: 'Expected: 05/2021',
    icon: 'assets/img/theme/nyu-logo.jpg',
    category: 'Edu',
    tag: 'Digital Strategy,Bloomberg',
    location: 'New York'
  },
  {
    id: '1',
    entity: 'W/Purpose',
    position: 'Co-Founder',
    content: '• Admitted by NYU 300k Challenge as semi-finalist\n' +
    '• Applied NativeScript to develop cross-platform mobile app with one code base and nearly native performance\n' +
    '• Researched, designed and built product flow and system architecture\n' +
    '• Implemented market research and generated business plan & revenue model\n',
    date: '12/2019 - 04/2020',
    icon: 'assets/img/theme/wpurpose-logo.jpg',
    category: 'Work',
    tag: 'NativeScript,Firebase,Project Management,Market Research,Entrepreneurship,Leadership,Market Research,Communication',
    location: 'New York'
  },
  {
    id: '2',
    entity: 'JPMorgan Chase & Co.',
    position: 'Software Engineer',
    content: '• Researched, designed and developed scalable and cross-platform Web applications for global' +
    ' users and implemented auto test and deploying tool with more than 90% test case coverage\n' +
    '• APAC Scrum Master, communicated and delivered development tasks based on the requirement from global\n' +
    '• Coordinated, maintained and upgraded internal global tokenization system with Symantec Tech Support\n' +
    '• Application onboarding trainer to train 50+ internal users and got highly positive feedback from trainees\n',
    date: '07/2017 - 07/2019',
    icon: 'assets/img/theme/jpmorgan-logo.jpg',
    category: 'Work',
    tag: 'Angular,TypeScript,Jira,GitHub,Spring,Java,GAIA,Agile,Load Balancer,Leadership,Presentation,Communication,Business Intelligence',
    location: 'Taiwan'
  },
  {
    id: '3',
    entity: 'Client Network Service Inc.',
    position: 'Java Developer Intern',
    content: '• Developed service for auto uploading documents which increase 50% workflow efficiency\n ' +
    '• Maintained existing software to fix errors and upgrade interfaces \n',
    date: '01/2017 - 05/2017',
    icon: 'assets/img/theme/cnsi-logo.jpg',
    category: 'Work',
    tag: 'Java,Spring',
    location: 'Chennai, India'
  },
  {
    id: '4',
    entity: 'Lu/Chang Equity Research',
    position: 'Stock Analyst Intern',
    content: '• Analysed and generated commodities weekly report\n' +
    '• Visited 5 companies’ spokesman to get the latest investing information\n' +
    '• Personal return on investment 26%\n',
    date: '02/2016 - 06/2016',
    icon: 'assets/img/theme/no-result.jpg',
    category: 'Work',
    tag: 'Stock Analysis',
    location: 'Taiwan'
  },
  {
    id: '5',
    entity: 'National Central University',
    position: 'BA in Economics',
    content: '• Course: Intermediate Ａccounting, Intermediate Financail Management, Econometrics, Macro Economics, Micro Economics \n ' +
    '• Brown Prize of QianLiMa Entrepreneurship Challenge\n',
    date: '2012 - 2016',
    icon: 'assets/img/theme/ncu-logo.jpg',
    category: 'Edu',
    tag: 'Leadership,Communication,Presentation,Entrepreneurship',
    location: 'Taiwan'
  },
  {
    id: '6',
    entity: 'Wistron Corporation',
    position: 'Software Engineer Intern',
    content: '• Developed indoor located application by Android Studio and maximum connection stress test scripts\n' +
    '• Used Azure Event Hub to analyze realtime big data\n',
    date: '07/2015 - 09/2015',
    icon: 'assets/img/theme/wistron-logo.jpg',
    category: 'Work',
    tag: 'Azure,Java',
    location: 'Taiwan'
  },
  {
    id: '7',
    entity: 'AIESEC NCU',
    position: 'Co-Founder, Vice President ',
    content: '• Responsible to sales strategy making, timeline management and founding first AIESEC entry' +
    'in National Central University\n' +
    '• Recruited and managed seven people sales team and won the contract with company\n',
    date: '2013-2015',
    icon: 'assets/img/theme/aiesec-logo.jpg',
    category: 'Work',
    tag: 'Leadership,,Communication,Presentation,Entrepreneurship',
    location: 'Taiwan'
  }
];

const technologiesSkills: Skills[] = [
  {
    id: '0',
    name: 'Angular',
    category: 'Framework',
    proficiency: '4'
  },
  {
    id: '1',
    name: 'React',
    category: 'Framework',
    proficiency: '2'
  },
  {
    id: '2',
    name: 'Spring',
    category: 'Framework',
    proficiency: '3'
  },
  {
    id: '5',
    name: 'Karma',
    category: 'Framework',
    proficiency: '3'
  },
  {
    id: '7',
    name: 'Salesforce',
    category: 'Platform',
    proficiency: '3'
  },
  {
    id: '8',
    name: 'AWS',
    category: 'Cloud',
    proficiency: '2'
  },
  {
    id: '9',
    name: 'GAIA',
    category: 'Cloud',
    proficiency: '3'
  },
  {
    id: '10',
    name: 'Jira',
    category: 'Agile',
    proficiency: '4'
  },
  {
    id: '11',
    name: 'Bitbucket',
    category: 'Version Control',
    proficiency: '4'
  },
  {
    id: '12',
    name: 'GitHub',
    category: 'Version Control',
    proficiency: '4'
  },
  {
    id: '13',
    name: 'Bloomberg',
    category: 'Platform',
    proficiency: '3'
  },
  {
    id: '14',
    name: 'NativeScript',
    category: 'Mobile, Cross Platform',
    proficiency: '3'
  },
  {
    id: '15',
    name: 'IOS',
    category: 'Mobile',
    proficiency: '1'
  },
  {
    id: '16',
    name: 'Firebase',
    category: 'Cloud',
    proficiency: '3'
  },
  {
    id: '17',
    name: 'Java',
    category: 'Language',
    proficiency: '4'
  },
  {
    id: '18',
    name: 'Python',
    category: 'Language',
    proficiency: '3'
  },
  {
    id: '18',
    name: 'TypeScript',
    category: 'Language',
    proficiency: '4'
  },
  {
    id: '19',
    name: 'Bazel',
    category: 'Framework',
    proficiency: '2'
  },
  {
    id: '20',
    name: 'Pandas',
    category: 'Library',
    proficiency: '2'
  }
  ,
  {
    id: '21',
    name: 'Numpy',
    category: 'Library',
    proficiency: '2'
  }
];

const otherSkills: Skills[] = [
  {
    id: '1',
    name: 'Digital Strategy',
    category: 'Other',
    proficiency: '2'
  },
  {
    id: '2',
    name: 'Stock Analysis',
    category: 'Finance',
    proficiency: '2'
  },
  {
    id: '3',
    name: 'Presentation',
    category: 'Soft',
    proficiency: '4'
  },
  {
    id: '4',
    name: 'Leadership',
    category: 'Soft',
    proficiency: '3'
  },
  {
    id: '5',
    name: 'Agile',
    category: 'Management',
    proficiency: '5'
  },
  {
    id: '6',
    name: 'Communication',
    category: 'Soft',
    proficiency: '5'
  },
  {
    id: '7',
    name: 'Market Researh',
    category: 'Business',
    proficiency: '3'
  },
  {
    id: '8',
    name: 'Project Management',
    category: 'Management',
    proficiency: '3'
  },
  {
    id: '9',
    name: 'Business Intelligence',
    category: 'Business',
    proficiency: '4'
  }
];

const projects: Projects[] = [
  {
    id: '0',
    name: 'Angular',
    description: 'Contribute Angular open-source',
    tag: 'Angular,Bazel,Karma,Typescript,GitHub',
    reference: 'https://github.com/angular/angular'
  },
  {
    id: '1',
    name: 'Personal Dashboard',
    description: 'Personal website to display my skill sets and experience. (The web your are seeing now!)',
    tag: 'Angular9,AWS,AWS S3,AWS CodePipeline,AWS Codebuild,Typescript,GitHub',
    reference: 'https://github.com/eaglet/personal-website'
  },
  {
    id: '2',
    name: 'Risk Premium Chang After COVID-19',
    description: 'Short paper describing the shift in risk premia post COVID',
    tag: 'Bloomberg,Python3,Pandas,Numpy',
    reference: 'assets/projects/Risk-Premium-Change-After-COVID-19.html'
  },
  {
    id: '3',
    name: 'IMDB Movie Search Engine',
    description: 'Search movie from IMDB API',
    tag: 'React',
    reference: 'https://movielist-henry.herokuapp.com/'
  },
  {
    id: '4',
    name: 'W/Purpose',
    description: 'A cross platform app for people to search and order from sustainable restaurant in NYC.',
    tag: 'NativeScript,Bitbucket',
    reference: 'https://bitbucket.org/eagletou/wpurpose/src/master/'
  },
  {
    id: '5',
    name: 'Database in Python',
    description: 'Implement database system without any prebuilt libraries in Python.',
    tag: 'Python3,Firebase',
    reference: 'https://github.com/eaglet/databaseFinalProject'
  },
  {
    id: '6',
    name: 'Sales Workstation',
    description: 'A dashboard which organized sales data from multiple resources and display to sales people.',
    tag: 'Spring3,Angular4,Angular7,Java,Typescript,Salesforce,Jira,Karma,GAIA',
    reference: ''
  },
  {
    id: '7',
    name: 'Business Intelligence System',
    description: 'Create BI system for J.P.Morgan Asset Management Taiwan',
    tag: 'SAP, Business Intelligence',
    reference: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getCardInfos() {
    return CARDINFOS;
  }

  getExperience() {
    return experience;
  }

  getTechnologoesSkills() {
    return technologiesSkills;
  }

  getOtherSkills() {
    return otherSkills;
  }

  getProjects() {
    return projects;
  }
}
