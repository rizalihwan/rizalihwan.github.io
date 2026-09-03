type ProjectType = {
    title: string;
    description: string;
    createdFor: string;
    asPosition: string;
    image: string | any;
    technology?: {
        name: string;
        color?: string;
        url?: string;
    }[];
    source?: string;
    url?: string;
    font: string;
    projectUrl: string;
    projectButton: string;
};

const laravel = {
    name: "laravel",
    color: "bg-red-300 dark:bg-red-600",
    url: "https://laravel.com/",
};

const mat = {
    name: "materializecss",
    color: "bg-pink-300 dark:bg-pink-600",
    url: "https://materializecss.com/",
};

const bootstrap = {
    name: "bootstrap",
    color: "bg-indigo-300 dark:bg-indigo-600",
    url: "https://getbootstrap.com/",
};

const lumen = {
    name: "lumen",
    color: "bg-amber-300 dark:bg-amber-600",
    url: "https://lumen.laravel.com/",
};

const mysql = {
    name: "mysql",
    color: "bg-amber-300 dark:bg-amber-600",
    url: "https://www.mysql.com/",
};

const vue = {
    name: "vuejs",
    color: "bg-emerald-300 dark:bg-emerald-600",
    url: "https://vuejs.org/",
};

const pg = {
    name: "postgresql",
    color: "bg-emerald-300 dark:bg-emerald-600",
    url: "https://www.postgresql.org/",
};

const tw = {
    name: "tailwindcss",
    color: "bg-sky-300 dark:bg-sky-600",
    url: "https://tailwindcss.com/",
};

const project: ProjectType[] = [
    {
        title: "PLN Marketplace Mobile",
        image: "/projects/plnmkp/mobile/1.png",
        description:
            "PLN Marketplace is a buying and selling platform to make things easier for PLN customers and the public. Collaborating with various UMKM and other companies.",
        createdFor: "Company Project",
        asPosition: "Backend",
        technology: [laravel, lumen, pg],
        font: "font-doodle",
        projectUrl:
            "https://play.google.com/store/apps/details?id=com.icon.plnmarketplace&hl=id&pli=1",
        projectButton: "➤ Visit Project",
    },
    {
        title: "PLN Marketplace BOT",
        image: "/projects/plnmkp/bot/1.png",
        description:
            "A website for monitoring stores, product transactions, product categories etc on the PLN mobile marketplace.",
        createdFor: "Company Project",
        asPosition: "Backend",
        technology: [laravel, tw, pg],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "PLN Insurance",
        image: "/projects/pln_insurance/1.png",
        description:
            "A webview that makes it easy for employees to register for various types of insurance provided by the company.",
        createdFor: "Company Project",
        asPosition: "Backend",
        technology: [laravel, tw, pg],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "WyvernPath Sistem Pakar",
        image: "/projects/wyvernpath/1.png",
        description:
            "An expert system developed to help students determine suitable major recommendations based on their RIASEC profile using a rule-based inference method, equipped with question, major, rule, and assessment level management, consultation features, and printable recommendation results in a formal document format.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, tw, pg],
        font: "font-doodle",
        projectUrl: "https://www.wyvernpath.com/",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Mantoy Project Solution",
        image: "/projects/mantoy/1.png",
        description:
            "A website for selling canopy, fence and other products, which includes an order form and admin page.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, pg],
        font: "font-doodle",
        projectUrl: "https://www.mantoyproject.com/",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Ditkuad Accounting",
        image: "/projects/akunting/1.png",
        description:
            "A website created to facilitate transactions regarding accounting and record reports based on modules such as Profit and Loss, Balance Sheet, General Journal, etc.",
        createdFor: "Company Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "Perpustakaan",
        image: "/projects/perpus/2.png",
        description:
            "A website created to facilitate borrowing & returning books at the library.",
        createdFor: "Open Source Study Project",
        asPosition: "Fullstack",
        technology: [laravel, tw, pg],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/perpustakaan",
        projectButton: "➤ Visit Project",
    },
    {
        title: "eKPR TWPAD",
        image: "/projects/etwpad/1.PNG",
        description:
            "A website was created to make it easier for TNI AD personnel to make home installment payments.",
        createdFor: "Company Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "LMS Kemlu",
        image: "/projects/lms/1.png",
        description:
            "A website created for a learning management system for foreign ministry staff.",
        createdFor: "Company Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, pg],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "SIM Hotel",
        image: "/projects/simhotel/2.jpeg",
        description:
            "A website created to make it easier to book hotel rooms efficiently.",
        createdFor: "Open Source Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/sim-hotel",
        projectButton: "➤ Visit Project",
    },
    {
        title: "PPDB Online",
        image: "/projects/ppdb/1.png",
        description:
            "A school website created to facilitate the acceptance of new students.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/ppdb-online",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Point of Sales",
        image: "/projects/pos/9.png",
        description:
            "A website to simplify the sales or purchasing process in retail businesses, so that customers can make payments faster.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, mat, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "Tropisianimal",
        image: "/projects/tropisi/3.png",
        description:
            "A website created to further introduce animal husbandry managed by the company tropisianimal to be known by more people. And this is one of my internship projects at cyberlabs.",
        createdFor: "Internship Project",
        asPosition: "Fullstack",
        technology: [laravel, mat, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/tropisi-animal",
        projectButton: "➤ Visit Project",
    },
    {
        title: "SIMRS",
        image: "/projects/simrs/2.png",
        description:
            "A website created to facilitate and manage the information system in the hospital.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "BordirKuy Landing Page",
        image: "/projects/bordirkuy/1.png",
        description:
            "An embroidery shop landing page website was created to further introduce its embroidery services so that everyone can see it easily anywhere and anytime.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [bootstrap],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "E-Ticketing",
        image: "/projects/ticketing/2.png",
        description:
            "This e-ticketing website is made to make it easier for everyone who will travel by bus. And before leaving, you must book first.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "Wedding App",
        image: "/projects/wedding/1.png",
        description:
            "A digital wedding invitation website that contains detailed information such as the wedding address and personal data of both partners.",
        createdFor: "Freelance Project",
        asPosition: "Frontend",
        technology: [vue, tw],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "Digital Presence",
        image: "/projects/presence/8.png",
        description:
            "A website was created to help teachers in the digital student attendance process, and a selfie feature is registered using the camera when students are going to take attendance, and when they are absent, the date and time of the student's attendance will be automatically recorded.",
        createdFor: "Freelance Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "",
        projectButton: "",
    },
    {
        title: "SIM Rayon",
        image: "/projects/simrayon/1.png",
        description:
            "A website created to help improve the effectiveness and efficiency of school management teacher activities, student information and parent-teacher relationships.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/sim-rayon",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Supervisor Digital",
        image: "/projects/supervisor/3.png",
        description:
            "A website created to handle the school learning system online so that teachers can give assignments easily and effectively. And it is equipped with a feature for assessing assignments given by teachers for their supervisor roles & a report feature to be viewed by the principal, and many more features.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/supervisor-digital",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Employee Presence",
        image: "/projects/absensi/4.png",
        description:
            "A website created to handle the school learning system online so that teachers can give assignments easily and effectively. And it is equipped with a feature for assessing assignments given by teachers for their supervisor roles & a report feature to be viewed by the principal, and many more features.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/absensi-karyawan",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Family Tree",
        image: "/projects/silsilah/1.png",
        description:
            "A website created to determine genealogy in a family, and I created this project to practice if conditional logic and correct my relational database.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/silsilah",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Covid Risk Test",
        image: "/projects/covid/1.png",
        description:
            "A website created to find out how far you are affected by the risk of the corona virus.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [bootstrap],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/covid-risk-test",
        projectButton: "➤ Visit Project",
    },
    {
        title: "Agenda Digital",
        image: "/projects/agenda/1.png",
        description:
            "A website application created to make it easier to list daily activities.",
        createdFor: "Study Project",
        asPosition: "Fullstack",
        technology: [laravel, bootstrap, mysql],
        font: "font-doodle",
        projectUrl: "https://github.com/rizalihwan/agenda-digital",
        projectButton: "➤ Visit Project",
    },
];

export default project;
