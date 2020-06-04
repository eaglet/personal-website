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
  title: string;
  content: string;
  date: string;
  icon: string;
  category: string;
  tag: string;
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
      content: 'J.P.Morgan', sub_title: 'Time', sub_content: '2017.07 - 2019-07' },
    { id: '3', title: 'Highest Education', icon: 'fa-graduation-cap', icon_color: 'bg-yellow',
      content: 'New York University', sub_title: 'Time', sub_content: '2019.09 - 2021.05' },
    { id: '4', title: 'Most Experienced Language', icon: 'fa-code', icon_color: 'bg-info',
      content: 'Java', sub_title: 'Years of Experience', sub_content: '3' },
  ];

const experience: Experience[] = [
  {
    id: '0',
    title: 'My last travel',
    content: '1. Agileo\n2. Digital Strategy',
    date: '2016 - 2019',
    icon: 'https://image.flaticon.com/icons/svg/214/214335.svg',
    category: 'Edu',
    tag: 'Agile,Digital Strategy'
  },
  {
    id: '1',
    title: 'My Job',
    content: '1. Bloomberg\n 2.NativeScript',
    date: '2015 - 2016',
    icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg',
    category: 'Work',
    tag: 'Bloomberg,NativeScript'
  },
  {
    id: '2',
    title: 'My Education',
    content: 'Jira\nJavaScript',
    date: '2011',
    icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg',
    category: 'Edu',
    tag: 'Jira,JavaScript'
  },
  {
    id: '3',
    title: 'My last travel',
    content: 'There are so much countries in the world...',
    date: '2016 - 2019',
    icon: 'https://image.flaticon.com/icons/svg/214/214335.svg',
    category: 'Edu',
    tag: ''
  },
  {
    id: '4',
    title: 'My Job',
    content: 'Leadership\nCommunication\nPresentation',
    date: '2015 - 2016',
    icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg',
    category: 'Work',
    tag: 'Leadership,Communication,Presentation'
  },
  {
    id: '5',
    title: 'My Education',
    content: 'This is the university I went...',
    date: '2011',
    icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg',
    category: 'Edu',
    tag: ''
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
    proficiency: '2'
  },
  {
    id: '6',
    name: 'Webpack',
    category: 'Framework',
    proficiency: '2'
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
    name: 'JIRA',
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
    proficiency: '3'
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
    category: 'Cross Platform',
    proficiency: '3'
  },
  {
    id: '15',
    name: 'IOS',
    category: 'mobile',
    proficiency: '3'
  },
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
    category: 'Other',
    proficiency: '2'
  },
  {
    id: '3',
    name: 'Presentation',
    category: 'Soft skill',
    proficiency: '4'
  },
  {
    id: '4',
    name: 'Leadership',
    category: 'Soft Skill',
    proficiency: '2'
  },
  {
    id: '5',
    name: 'Agile',
    category: 'Management',
    proficiency: '2'
  },
  {
    id: '6',
    name: 'Communication',
    category: 'Soft skill',
    proficiency: '4'
  },
  {
    id: '7',
    name: 'Market Researh',
    category: 'Soft skill',
    proficiency: '4'
  },
  {
    id: '7',
    name: 'Market Researh',
    category: 'Soft skill',
    proficiency: '3'
  },
  {
    id: '8',
    name: 'Project Management',
    category: 'Soft skill',
    proficiency: '3'
  }
];

const projects: Projects[] = [
  {
    id: '0',
    name: 'Personal Dashboard',
    description: 'Personal dashboard to display my skill sets and experience.',
    tag: 'Angular9,AWS,AWS S3,AWS CodePipeline,AWS Codebuild,Typescript',
    reference: ''
  },
  {
    id: '1',
    name: 'W/Purpose',
    description: 'A cross platform app for people to search and order from sustainable restaurant in NYC.',
    tag: 'NativeScript',
    reference: ''
  },
  {
    id: '2',
    name: 'Database in Python',
    description: 'Implement database system without any prebuilt libraries in Python.',
    tag: 'Python',
    reference: ''
  },
  {
    id: '3',
    name: 'Sales Workstation',
    description: 'A dashboard which organized sales data from multiple resources and display to sales people.',
    tag: 'Spring3,Angular4,Angular7,Java,Typescript',
    reference: ''
  },
  {
    id: '4',
    name: 'Tokenization System',
    description: 'Tokenize sensitive data before push to public cloud and detokenize the data when user download from public could.',
    tag: 'Load Balance,Elastic Search',
    reference: ''
  },
  {
    id: '5',
    name: 'Risk Premium Chang After COVID-19',
    description: '',
    tag: '',
    reference: ''
  },
  {
    id: '6',
    name: 'Business Intelligence System',
    description: '',
    tag: '',
    reference: ''
  },
  {
    id: '7',
    name: '',
    description: '',
    tag: '',
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
