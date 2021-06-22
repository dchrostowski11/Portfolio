import { Job } from './job';

export const JOBS: Job[] = [
    {
        companyName: 'ConnectiveRx',
        position: 'Jr. Applications Developer',
        startDate: new Date('12/3/2019'),
        endDate: new Date('1/15/2021'),
        about: 'Company that works with biopharmaceutical manufactureres to help commercialize and maximize the benefits of specialty and branded medications.',
        summary: [
            'Developed single-page responsive designs utilizing Angular with Typescript, HTML and CSS',
            'Improved program selection speed across platform by creating a reusable component with multi-selectable clients',
            'Focused on test-driven web development with CI/CD pipelines in Azure DevOps',
            'Worked in a medium-sized team utilizing Azure Dev Ops and GitFlow as version control'
        ],
        logoUrl: '../../assets/icons/crx-logo.svg',
        state: 'default'
    },
    {
        companyName: 'Memorial Sloan Kettering Cancer Center',
        position: 'Information Systems Intern',
        startDate: new Date('6/1/2018'),
        endDate: new Date('8/31/2018'),
        about: 'A non-profit hospital that is a leader in cancer research and treatment.',
        summary: [
            'Assisted in server setup and restoring backed up servers',
            'Designed a Java program to decrease backup server search',
        ],
        logoUrl: '../../assets/icons/msk.svg',
        state: 'default'
    },
    {
        companyName: 'BMW of North America',
        position: 'Automotive Technician Intern',
        startDate: new Date('9/1/2014'),
        endDate: new Date('6/31/2015'),
        about: 'A vehicle manufacturer that provides customers with vehicles that have a great mix of luxury and performance.',
        summary: [
            'Performed automotive repairs and general maintenance while shadowing experienced technicians',
            'Performed quality checks and inspections on new vehicle and motorcycle deliveries',
        ],
        logoUrl: '../../assets/icons/bmw.svg',
        state: 'default'
    }
];
