import { InfinityIcon, RefreshCcw, ChartNoAxesColumn, Grid2X2, Star, Zap } from 'lucide-react';

import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

export const navLinks = [
	{
		label: 'Why portia.io?',
		href: '/why-portia-io',
	},
	{
		label: 'Our plans',
		href: '/our-plans',
	},
	{
		label: 'Resources',
		href: '/resources',
		links: [
			{
				label: 'Blogs',
				href: '/resources/blogs',
			},
			{
				label: 'Services',
				href: '/resources/services',
			},
		],
	},
	{
		label: 'Contact Us',
		href: '/contact-us',
	},
];
export const statisticData = [
	{
		value: '40k+',
		name: 'Happy Customers',
		description: "We've helped over 40k amazing customers.",
	},
	{
		value: '125+',
		name: 'Proxy Locations',
		description: 'Switch between proxies quickly to access global content seamlessly.',
	},
	{
		value: '99.9%',
		name: 'Uptime',
		description: "Get proxies from different sources, like Portia's mobile network.",
	},
	{
		value: '200+',
		name: '5-star reviews',
		description: "We're proud of our 5-star rating with over 200 reviews.",
	},
];
export const featuresData = [
	{
		icon: InfinityIcon,
		title: 'Unlimited Data Usage',
		description: 'No Extra Charges Enjoy unlimited data with no hidden fees.',
	},
	{
		icon: RefreshCcw,
		title: 'Free Country Switching',
		description: 'Switch between multiple countries without additional costs.',
	},
	{
		icon: ChartNoAxesColumn,
		title: 'Ip Rotation',
		description: 'Change IPs easily with automatic, API, or manual rotation methods.',
	},
	{
		icon: Grid2X2,
		title: 'Multi Protocol Support',
		description: 'Compatible with both HTTPS and SOCKS5 protocols, ensuring adaptability with various software solutions.',
	},
	{
		icon: Star,
		title: 'High-Quality, Reliable Proxies',
		description: 'Join over 40,000 satisfied clients worldwide.',
	},
	{
		icon: Zap,
		title: 'Fast Proxy Speeds',
		description: 'Enjoy speeds around 15 Mbps with a ping less than 900 ms,perfect for seamless browsing and operations.',
	},
];
export const plansData = [
	{
		price: '15/mth',
		type: 'Basic plan',
		features: ['feature 1', 'feature 2', 'feature 3', 'feature 4', 'feature 5'],
	},
	{
		price: '30/mth',
		type: 'Standard plan',
		features: ['All in Basic plus', 'feature 1', 'feature 2', 'feature 3', 'feature 4'],
	},
	{
		price: '40/mth',
		type: 'Premium plan',
		features: ['All in Standard plus', 'feature 1', 'feature 2', 'feature 3', 'feature 4'],
	},
];
export const faqsData = [
	{
		question: 'Is there a any trial available?',
		answer: 'Yes, you can try us for only 0.25$ for 2 hours. and then if you want you can upgrade to one of our plans.',
	},
	{
		question: 'Can I change my plan later?',
		answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		question: 'What is your cancellation policy?',
		answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		question: 'Can other info be added to an invoice?',
		answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		question: 'How dose billing work?',
		answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
];
export const footerLinks = [
	{
		title: 'Company',
		links: [
			{
				label: 'Why portia.io?',
				href: '/why-portia-io',
			},
			{
				label: 'Pricing',
				href: '/pricing',
			},
			{
				label: 'Testimonials',
				href: '/testimonials',
			},
			{
				label: 'Affiliate program',
				href: '/affiliate-program',
			},
			{
				label: 'Contact us',
				href: '/contact-us',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				label: 'Blog',
				href: '/blog',
			},
			{
				label: 'Our Faqs',
				href: '/our-faqs',
			},
		],
	},
	{
		title: 'Social',
		links: [
			{
				label: 'Twitter',
				href: '/',
			},
			{
				label: 'LinkedIn',
				href: '/',
			},
			{
				label: 'Facebook',
				href: '/',
			},
			{
				label: 'Github',
				href: '/',
			},
		],
	},
	{
		title: 'Legal',
		links: [
			{
				label: 'Terms',
				href: '/terms',
			},
			{
				label: 'Privacy',
				href: '/privacy-policy',
			},
			{
				label: 'Licenses',
				href: '/licenses',
			},
		],
	},
];
export const footerIcons = [
	{
		name: 'Twitter',
		icon: FaTwitter,
		href: '/',
	},
	{
		name: 'Linkedin',
		icon: FaLinkedinIn,
		href: '/',
	},
	{
		name: 'Facebook',
		icon: FaFacebook,
		href: '/',
	},
	{
		name: 'Github',
		icon: FaGithub,
		href: '/',
	},
	{
		name: 'Telegram',
		icon: FaTelegram,
		href: '/',
	},
];
export const testimonials = [
	{
		rate: '⭐⭐⭐⭐⭐',
		comment:
			'Portia.io has the best proxies with unmatched IP rotation, speed, and reliability. Essential for social media professionals!',
		name: 'Katherine Moss',
		position: 'social media manager',
	},
	{
		rate: '⭐⭐⭐',
		comment:
			'Portia.io has the best proxies with unmatched IP rotation, speed, and reliability. Essential for social media professionals!',
		name: 'Jon Doe',
		position: 'social media manager',
	},
	{
		rate: '⭐⭐⭐⭐',
		comment:
			'Portia.io has the best proxies with unmatched IP rotation, speed, and reliability. Essential for social media professionals!',
		name: 'Portia Founder',
		position: 'social media manager',
	},
];
export const plansData2 = [
	{
		type: 'Basic plan',
		status: 'Popular',
		price: '$15',
		description: 'Basic features for protect browsing usage  with everything you need.',
		features: ['1', '2', '3', '4', '5'],
		message: null,
	},
	{
		type: 'Standard plan',
		status: null,
		price: '$30',
		description: 'Growing teams up to 20 users.',
		features: ['1', '2', '3', '4', '5'],
		message: 'Everything in Basic plus....',
	},
	{
		type: 'Premium plan',
		status: null,
		price: '$40',
		description: 'Large teams with unlimited users.',
		features: ['1', '2', '3', '4', '5'],
		message: 'Everything in Standard plus....',
	},
];
export const countriesData = [
	{
		name: 'United States',
		users: '1000,000',
		flagUrl: '/icons/flags/US.svg',
	},
	{
		name: 'United Kingdom',
		users: '1000,000',
		flagUrl: '/icons/flags/GB.svg',
	},
	{
		name: 'Germany',
		users: '1000,000',
		flagUrl: '/icons/flags/DE.svg',
	},
	{
		name: 'Canada',
		users: '1000,000',
		flagUrl: '/icons/flags/CA.svg',
	},
	{
		name: 'Italy',
		users: '1000,000',
		flagUrl: '/icons/flags/IT.svg',
	},
	{
		name: 'Australia',
		users: '1000,000',
		flagUrl: '/icons/flags/AU.svg',
	},
	{
		name: 'Spain',
		users: '1000,000',
		flagUrl: '/icons/flags/ES.svg',
	},
	{
		name: 'France',
		users: '1000,000',
		flagUrl: '/icons/flags/FR.svg',
	},
];
export const pricingData = [
	{
		name: 'Basic',
		price: '$15',
		isPopular: true,
		description: 'Basic features for protect browsing usage  with everything you need.',
		url: '/',
		overview: {
			basic_features: true,
			users: '10',
			Individual_data: '20GB',
			support: true,
			automated_workflows: false,
			integrations: false,
		},
		analytics: {
			analytics: 'Basic',
			export_reports: true,
			scheduled_reports: true,
			API_access: false,
			advanced_reports: false,
			saved_reports: false,
			customer_properties: false,
			custom_fields: false,
		},
		user_access: {
			sso_saml: true,
			advanced_permissions: false,
			audit_log: false,
			data_history: false,
		},
	},
	{
		name: 'Standard',
		price: '$30',
		isPopular: false,
		description: 'based  on features we can tell this is perfect for them ?',
		url: '/',
		overview: {
			basic_features: true,
			users: '20',
			Individual_data: '40GB',
			support: true,
			automated_workflows: true,
			integrations: true,
		},
		analytics: {
			analytics: 'Advanced',
			export_reports: true,
			scheduled_reports: true,
			API_access: true,
			advanced_reports: true,
			saved_reports: true,
			customer_properties: false,
			custom_fields: false,
		},
		user_access: {
			sso_saml: true,
			advanced_permissions: true,
			audit_log: false,
			data_history: false,
		},
	},
	{
		name: 'Premium',
		price: '$40',
		isPopular: false,
		description: 'Personalized service and enterprise security for large teams.',
		url: '/',
		overview: {
			basic_features: true,
			users: 'Unlimited',
			Individual_data: 'Unlimited',
			support: true,
			automated_workflows: true,
			integrations: true,
		},
		analytics: {
			analytics: 'Advanced',
			export_reports: true,
			scheduled_reports: true,
			API_access: true,
			advanced_reports: true,
			saved_reports: true,
			customer_properties: true,
			custom_fields: true,
		},
		user_access: {
			sso_saml: true,
			advanced_permissions: true,
			audit_log: true,
			data_history: true,
		},
	},
];
export const basicPlan = {
	name: 'Basic',
	price: '$15',
	isPopular: true,
	description: 'Basic features for protect browsing usage  with everything you need.',
	overview: {
		basic_features: true,
		users: '10',
		Individual_data: '20GB',
		support: true,
		automated_workflows: false,
		integrations: false,
	},
	analytics: {
		analytics: 'Basic',
		export_reports: true,
		scheduled_reports: true,
		API_access: false,
		advanced_reports: false,
		saved_reports: false,
		customer_properties: false,
		custom_fields: false,
	},
	user_access: {
		sso_saml: true,
		advanced_permissions: false,
		audit_log: false,
		data_history: false,
	},
};
export const standardPlan = {
	name: 'Standard',
	price: '$30',
	isPopular: false,
	description: 'based  on features we can tell this is perfect for them ?',
	overview: {
		basic_features: true,
		users: '20',
		Individual_data: '40GB',
		support: true,
		automated_workflows: true,
		integrations: true,
	},
	analytics: {
		analytics: 'Advanced',
		export_reports: true,
		scheduled_reports: true,
		API_access: true,
		advanced_reports: true,
		saved_reports: true,
		customer_properties: false,
		custom_fields: false,
	},
	user_access: {
		sso_saml: true,
		advanced_permissions: true,
		audit_log: false,
		data_history: false,
	},
};
export const premiumPlan = {
	name: 'Premium',
	price: '$40',
	isPopular: false,
	description: 'Personalized service and enterprise security for large teams.',
	overview: {
		basic_features: true,
		users: 'Unlimited',
		Individual_data: 'Unlimited',
		support: true,
		automated_workflows: true,
		integrations: true,
	},
	analytics: {
		analytics: 'Advanced',
		export_reports: true,
		scheduled_reports: true,
		API_access: true,
		advanced_reports: true,
		saved_reports: true,
		customer_properties: true,
		custom_fields: true,
	},
	user_access: {
		sso_saml: true,
		advanced_permissions: true,
		audit_log: true,
		data_history: true,
	},
};
export const customersData = [
	{
		rate: [{ icon: Star }, { icon: Star }, { icon: Star }, { icon: Star }, { Star }],
		name: 'Alisa Hester',
		position: 'PM, Hourglass',
		agency: 'Web Design Agency',
		comment: '“We’ve really sped up our workflow using Untitled.”',
		imgUrl: '/images/users/user1.png',
	},
	{
		rate: [{ icon: Star }, { icon: Star }, { icon: Star }, { icon: Star }, { Star }],
		name: 'Rich Wilson',
		position: 'COO, Command+R',
		agency: 'Web Development Agency',
		comment: '“We’ve really sped up our workflow using Untitled.”',
		imgUrl: '/images/users/user2.png',
	},

	{
		rate: [{ icon: Star }, { icon: Star }, { icon: Star }, { icon: Star }, { Star }],
		name: 'Johnny Bell',
		position: 'PM, Sisyphus',
		agency: 'Machine Learning',
		comment: '“We’ve really sped up our workflow using Untitled.”',
		imgUrl: '/images/users/user3.png',
	},
	{
		rate: [{ icon: Star }, { icon: Star }, { icon: Star }, { icon: Star }, { Star }],
		name: 'Annie Stanley',
		position: 'Designer, Catalog',
		agency: 'UX Agency',
		comment: '“We’ve really sped up our workflow using Untitled.”',
		imgUrl: '/images/users/user4.png',
	},
];
