export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Swara Khakhkhar',
    subtitle: 'Psychologist In Making',
    description: 'Hi, I am Swara; an aspiring clinical psychologist.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/swara-khakhkhar-195565260/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/_swara2211'
        }
    ],
    hero: {
        title: 'Hi there! Good to see you here; welcome to my space!',
        text: "I'm **Swara Khakhkhar**, a BA (Honours) graduate with a major in Psychology, aspiring a career in clinical psychology. My drive for this ambition stems from a deep-rooted purpose: to empower individuals by helping them navigate through mental health challeneges and thereby help build emotionally-healthy families. In this space, I intend to write about my learnings and reflections as I take this path. Feel free to <a href='https://swarakhakhkhar.com/projects'>explore my work</a> and know more about <a href='https://swarakhakhkhar.com/about'>me</a>.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
