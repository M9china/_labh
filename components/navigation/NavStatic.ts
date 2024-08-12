import { INavigation  } from "./NavigationDto";

export const TOPNAVDATA: INavigation [] = [
    { name: 'Home', href: '/' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Info for Parents', href: '/info-for-parents' },
    { name: 'Wall of Fame', href: '/wall-of-fame' },
]

export const FOOTERDATA = {
    solutions: [
        { name: 'About LABH', href: '#' },
        {name: 'Affiliate & Influencer: Earn Commission', href: '#'},
  
      ],
      support: [
        { name: 'FAQ', href: '/FAQ' },
        { name: 'Policy', href: '/policy' },
  
      ],
  
      legal: [
        { name: '+27 82 395 0133', href: '#' },
        { name: 'hello@letsallbehappy.co.za', href: '#' },
  
      ],
    }