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
  date: string;
  description: string;
  tag: string;
  reference: string;
}

const CARDINFOS: CardInfo[] = [
    { id: '1', title: 'Job Status', icon: 'fa-eye', icon_color: 'bg-success',
      content: 'Looking for opportunities', sub_title: 'Position', sub_content: 'Full-time' },
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
    content: '1. There are so much countries in the world,hello\n2. hellp world',
    date: '2016 - 2019',
    icon: 'https://image.flaticon.com/icons/svg/214/214335.svg',
    category: 'Edu',
    tag: ''
  },
  {
    id: '1',
    title: 'My Job',
    content: 'The best job I could possibly get!',
    date: '2015 - 2016',
    icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg',
    category: 'Work',
    tag: ''
  },
  {
    id: '2',
    title: 'My Education',
    content: 'This is the university I went...',
    date: '2011',
    icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg',
    category: 'Edu',
    tag: ''
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
    content: 'The best job I could possibly get!',
    date: '2015 - 2016',
    icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg',
    category: 'Work',
    tag: ''
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

const skills: Skills[] = [
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
    id: '3',
    name: 'Communication',
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
    name: 'CRM',
    category: 'Domain',
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

  getSkills() {
    return skills;
  }
}
