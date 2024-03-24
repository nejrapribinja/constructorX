export interface ContactCard {
    Icon?: any; 
    title?: string;
    value?: string;
    linkText?: string;
    href?: string;
    className?: string,
    iconClassName?: string
}
  
export interface HeadingProps {
  subtitle: string; 
  title: string;
  className?: string;
}

export interface OurServicesCard {
  image: string;
  Icon?: any;
  title: string;
  text: string;
}

export interface PastProjectsCard {
  image: string;
  title: string;
  text: string;
  IconService: any;
  service: string;
  IconDate: any;
  date: string;
}

export interface TestimonialsCard {
  title: string;
  text: string;
  image: string;
  name: string;
  city: string;
  className?: string;
}

export interface BannerProps {
  text: string;
  buttonTitleOne: string;
  buttonTitleTwo: string;
}

export interface ArticlesandNewsCardInterface {
  image: string;
  title: string;
  date: string;
}

export interface FooterContactCard {
  Icon?: any; 
  title?: string;
  value?: string;
}