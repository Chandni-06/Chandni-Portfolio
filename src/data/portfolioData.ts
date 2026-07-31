export interface ProjectImage {
  id: string;
  title: string;
  caption: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Power BI" | "SQL" | "Python" | "Excel" | "Data Analytics" | string;
  duration: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  gallery: ProjectImage[];
  coverImage: string;
  githubUrl: string;
  liveDemoUrl: string;
  reportUrl?: string;
  caseStudy: {
    problemStatement: string;
    datasetDetails: string;
    dataCleaningProcess: string[];
    daxMeasures: string[];
    keyInsights: string[];
    businessImpact: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    description: string;
    icon: string;
    featured?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  score?: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chandni Kumari",
    title: "Aspiring Data Analyst",
    subtitle: "Turning Data into Meaningful Insights",
    summary:
      "Aspiring Data Analyst with knowledge of SQL, Python, Excel and Power BI. Passionate about data visualization, dashboard development and solving business problems using data. Continuously learning new technologies and building practical projects.",
    avatar:
      "https://drive.google.com/file/d/1znYJDQgVi73ERlIgFrsYzkPmqMksNDrH/view?usp=sharing",
    profileImage:
      "https://drive.google.com/file/d/1znYJDQgVi73ERlIgFrsYzkPmqMksNDrH/view?usp=sharing",
    email: "vchandni040@gmail.com",
    phone: "+91 7019549199",
    location: "Bengaluru, Karnataka, India",
    github: "https://github.com/Chandni-06",
    linkedin: "https://www.linkedin.com/in/chandni-kumari-099117371",
    resumePdf: "/Chandni_Kumari_Resume.pdf",
    targetCompanies: [
      { name: "Deloitte", logo: "Building2" },
      { name: "Accenture", logo: "Briefcase" },
      { name: "EY", logo: "Building" },
      { name: "KPMG", logo: "TrendingUp" },
      { name: "TCS", logo: "Cpu" },
      { name: "Cognizant", logo: "Code" },
      { name: "Capgemini", logo: "Globe" },
      { name: "Infosys", logo: "Terminal" },
      { name: "Amazon", logo: "ShoppingBag" },
    ],
    stats: [
      {
        label: "Interactive Dashboards Built",
        value: "5+",
        icon: "LayoutDashboard",
      },
      { label: "SQL Queries Practiced", value: "120+", icon: "Database" },
      { label: "Data Cleaning Accuracy", value: "99%", icon: "CheckCircle2" },
      { label: "Academic CGPA", value: "7.5", icon: "GraduationCap" },
    ],
    interests: [
      {
        title: "Business Intelligence",
        description:
          "Designing end-to-end Power BI solutions, data models, and DAX calculations to convert raw numbers into strategic decisions.",
        icon: "BarChart3",
      },
      {
        title: "Dashboard Development",
        description:
          "Crafting intuitive, highly interactive executive dashboards with seamless filters, KPI cards, and custom drill-through views.",
        icon: "LayoutDashboard",
      },
      {
        title: "Data Visualization",
        description:
          "Selecting optimal visual formats—geographical maps, distribution plots, and trendlines—to tell compelling data stories.",
        icon: "PieChart",
      },
      {
        title: "Data Cleaning & Prep",
        description:
          "Transforming messy, incomplete datasets using SQL queries, Power Query, and Python Pandas for analysis-ready integrity.",
        icon: "Sparkles",
      },
      {
        title: "SQL & Relational DBs",
        description:
          "Writing complex queries, joins, subqueries, CTEs, and window functions to extract precise answers from databases.",
        icon: "Database",
      },
      {
        title: "Python Data Analysis",
        description:
          "Utilizing Pandas, NumPy, and Matplotlib/Seaborn for exploratory data analysis (EDA) and statistical modeling.",
        icon: "FileCode2",
      },
    ],
  },

  skills: [
    {
      title: "Programming & Databases",
      iconName: "Code2",
      skills: [
        {
          name: "SQL",
          level: 90,
          description:
            "Joins, Aggregations, Subqueries, CTEs, Window Functions, Data Manipulation (DML/DDL)",
          icon: "Database",
          featured: true,
        },
        {
          name: "Python",
          level: 80,
          description:
            "Data Analysis with Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebooks",
          icon: "FileCode2",
          featured: true,
        },
      ],
    },
    {
      title: "Visualization & BI Tools",
      iconName: "BarChart3",
      skills: [
        {
          name: "Power BI",
          level: 92,
          description:
            "Power Query (M Language), DAX Calculations, Star Schema Modeling, Interactive Reports, Custom Slicers",
          icon: "LayoutDashboard",
          featured: true,
        },
        {
          name: "Excel",
          level: 88,
          description:
            "Pivot Tables, XLOOKUP/VLOOKUP, Advanced Formulas, Power Pivot, Conditional Formatting, Data Validation",
          icon: "Sheet",
          featured: true,
        },
      ],
    },
    {
      title: "Soft Skills & Analytical Mindset",
      iconName: "BrainCircuit",
      skills: [
        {
          name: "Problem Solving",
          level: 95,
          description:
            "Deconstructing complex business dilemmas into actionable data-driven solution workflows",
          icon: "Lightbulb",
        },
        {
          name: "Analytical Thinking",
          level: 92,
          description:
            "Identifying patterns, anomalies, root causes, and forecasting trends from large datasets",
          icon: "TrendingUp",
        },
        {
          name: "Communication",
          level: 88,
          description:
            "Translating technical data findings into executive summaries for non-technical stakeholders",
          icon: "MessageSquare",
        },
        {
          name: "Quick Learner",
          level: 96,
          description:
            "Rapidly adapting to new tools, cloud analytics platforms, and industry analytics frameworks",
          icon: "Zap",
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "zomato-restaurant-analysis-dashboard",
      title: "Zomato Restaurant Analysis Dashboard",
      category: "Power BI",
      duration: "2026",
      description:
        "Developed an interactive Power BI dashboard to analyze Zomato restaurant data. The dashboard provides insights into restaurant performance, customer ratings, pricing, cuisines, online delivery, table booking availability, and city-wise trends.",
      longDescription:
        "Transformed raw Zomato restaurant datasets into an executive Power BI analytics report. It empowers stakeholders to evaluate restaurant performance across cities, analyze customer preferences, examine price sensitivity, measure online delivery adoption, and discover high-margin culinary market gaps.",
      technologies: [
        "Microsoft Power BI",
        "Microsoft Excel",
        "Data Cleaning",
        "Data Visualization",
        "DAX",
        "Business Analytics",
      ],
      features: [
        "Interactive KPI Cards (Restaurant Count, Avg Rating, Avg Cost for Two)",
        "Online Delivery Analysis & Table Booking Availability Metrics",
        "City-wise Restaurant Distribution & Geographic Mapping",
        "Popular Cuisine Share, Rating Distribution & Price Range Analysis",
        "Interactive Filters, Dynamic Slicers & Drill-through Analytics",
      ],
      coverImage: "/images/projects/zomato-dashboard/Img-1.jpeg",
      githubUrl:
        "https://github.com/Chandni-06/zomato-restaurant-analysis-dashboard",
      liveDemoUrl: "/images/projects/zomato-dashboard/Img-1.jpeg",
      reportUrl: "/images/projects/zomato-dashboard/Img-1.jpeg",
      gallery: [
        {
          id: "zom-1",
          title: "Dashboard Overview Banner",
          caption:
            "Main executive Power BI banner displaying 9,551 total restaurants, 4.21 average rating, ₹580 average cost for two, and 78.4% online delivery share.",
          url: "/images/projects/zomato-dashboard/Img-1.jpeg",
        },
        {
          id: "zom-2",
          title: "Full Power BI Interactive Dashboard View",
          caption:
            "Interactive report view with filter slicers, rating scatter plot, price range buckets, and city distribution.",
          url: "/images/projects/zomato-dashboard/img-2.jpg",
        },
        {
          id: "zom-3",
          title: "Executive Summary & Leaderboard",
          caption:
            "Executive KPI cards and city-wise leaderboard comparing New Delhi, Gurgaon, Noida, Bengaluru, and Mumbai.",
          url: "/images/projects/zomato-dashboard/img-3.jpg",
        },
        {
          id: "zom-4",
          title: "Customer Rating Distribution",
          caption:
            "Rating breakdown histogram comparing ratings from 1.0 to 5.0 stars and customer sentiment clusters.",
          url: "/images/projects/zomato-dashboard/img-4.jpg",
        },
        // {
        //   id: "zom-5",
        //   title: "Popular Cuisines & Diversity Matrix",
        //   caption:
        //     "Treemap and donut charts identifying North Indian (34%), Chinese (22%), Fast Food (18%), and Italian offerings.",
        //   url: "/images/projects/zomato-dashboard/cuisines.png",
        // },
        // {
        //   id: "zom-6",
        //   title: "Geographic City-wise Distribution",
        //   caption:
        //     "Detailed city matrix comparing restaurant counts, average rating, average cost for two, and delivery adoption.",
        //   url: "/images/projects/zomato-dashboard/city-analysis.png",
        // },
        // {
        //   id: "zom-7",
        //   title: "Online Delivery & Table Booking Analysis",
        //   caption:
        //     "Key service capability analysis showing 78.4% online delivery adoption vs 12.1% table booking availability.",
        //   url: "/images/projects/zomato-dashboard/online-delivery.png",
        // },
        // {
        //   id: "zom-8",
        //   title: "Price Range Segmentation",
        //   caption:
        //     "Price bucket breakdown across Budget (Range 1: 46.5%), Mid-Range (Range 2: 32.6%), Premium (14.7%), and Luxury (6.2%).",
        //   url: "/images/projects/zomato-dashboard/price-analysis.png",
        // },
        // {
        //   id: "zom-9",
        //   title: "Dynamic Slicers & Filter Controls",
        //   caption:
        //     "Power BI dynamic filter pane allowing multi-select city filters, online delivery toggles, and rating sliders.",
        //   url: "/images/projects/zomato-dashboard/filters.png",
        // },
        // {
        //   id: "zom-10",
        //   title: "Strategic Business Insights",
        //   caption:
        //     "Executive insights highlighting delivery impact (+0.4★ rating boost), cuisine gaps, and market expansion opportunities.",
        //   url: "/images/projects/zomato-dashboard/insights.png",
        // },
      ],
      caseStudy: {
        problemStatement:
          "Restaurant businesses generate large amounts of data but often struggle to identify customer preferences, pricing patterns, and high-performing locations. This dashboard helps stakeholders understand restaurant performance and make data-driven decisions.",
        datasetDetails:
          "Zomato Restaurant Dataset containing 9,551+ global restaurant records, attributes for location, city, cuisines, average cost for two, price range, ratings, online delivery, and table booking availability.",
        dataCleaningProcess: [
          "Cleaned and transformed raw restaurant data using Microsoft Excel and Power Query",
          "Handled missing values, standardized currency formatting, and encoded price tiers",
          "Created multiple KPIs and custom DAX measures for rating aggregations and percentages",
          "Designed responsive charts, maps, and dynamic slicers for interactive filtering",
          "Improved data storytelling using modern Power BI visualizations",
        ],
        daxMeasures: [
          "Total Restaurants = COUNT(Zomato[RestaurantID])",
          "Average Rating = AVERAGE(Zomato[AggregateRating])",
          "Average Cost for Two = AVERAGE(Zomato[AverageCostForTwo])",
          'Online Delivery % = DIVIDE(CALCULATE(COUNT(Zomato[RestaurantID]), Zomato[HasOnlineDelivery] = "Yes"), [Total Restaurants], 0)',
          'Table Booking % = DIVIDE(CALCULATE(COUNT(Zomato[RestaurantID]), Zomato[HasTableBooking] = "Yes"), [Total Restaurants], 0)',
        ],
        keyInsights: [
          "Identify top-rated restaurants and compare performance across global cities.",
          "Analyze customer rating trends and discover most popular cuisines (North Indian & Chinese).",
          "Evaluate online delivery availability (78.4%) and its direct positive correlation with higher customer ratings.",
          "Understand pricing distribution across budget, mid-range, and fine-dining tiers.",
          "Support better business decision-making for restaurant expansion and revenue optimization.",
        ],
        businessImpact:
          "Provided actionable commercial insights enabling restaurant operators, food-tech partners, and investors to optimize menu pricing, improve online delivery availability, and target high-satisfaction urban markets.",
      },
    },
    {
      id: "company-sales-dashboard",
      title: "Company Sales Dashboard",
      category: "Power BI",
      duration: "2 Weeks",
      description:
        "Developed an interactive Power BI dashboard to analyze company sales performance, revenue trends, profit margins, and regional distributions.",
      longDescription:
        "An end-to-end Business Intelligence solution created for executive decision-makers. It consolidates multi-regional transaction data to monitor key performance indicators (KPIs), track revenue growth rates, analyze product category profitability, and identify top sales representatives.",
      technologies: ["Power BI", "Excel", "Power Query", "DAX", "Star Schema"],
      features: [
        "Interactive KPIs (Total Revenue, YoY Growth, Profit Margin, Orders)",
        "Regional Sales Distribution Map with hover details",
        "Dynamic Multi-criteria Filters and Time Slicers",
        "Top 10 Products & Category Profitability Breakdown",
        "Actionable Business Insights & Trend Forecasting",
      ],
      coverImage: "/images/projects/company-sales/img-1.jpg",
      githubUrl: "https://github.com/chandni-kumari/company-sales-dashboard",
      liveDemoUrl: "/images/projects/company-sales/img-1.jpg",
      gallery: [
        {
          id: "cs-1",
          title: "Executive Overview Dashboard",
          caption:
            "Main executive screen displaying total sales ($4.8M), YoY growth (+18.4%), and top product performance.",
          url: "/images/projects/company-sales/img-1.jpg",
        },
        {
          id: "cs-2",
          title: "Regional Sales Map",
          caption:
            "Geographical heatmap analysis showing revenue density across North America and Europe.",
          url: "/images/projects/company-sales/img-2.jpg",
        },
        {
          id: "cs-3",
          title: "Category & Monthly Charts",
          caption:
            "Deep dive into Technology vs Office Supplies sales seasonality and quarterly profit margins.",
          url: "/images/projects/company-sales/img-3.jpg",
        },
        {
          id: "cs-4",
          title: "KPI Breakdown & Slicers",
          caption:
            "Custom DAX-powered KPI cards dynamically updating based on date range and region slicers.",
          url: "/images/projects/company-sales/img-4.jpg",
        },
      ],
      caseStudy: {
        problemStatement:
          "The client faced difficulties tracking sales trends across 4 geographic regions, resulting in delayed inventory restocking and unoptimized regional marketing spend.",
        datasetDetails:
          "Historical sales transactions dataset containing 50,000+ orders, product metadata, regional distribution centers, and customer segment info.",
        dataCleaningProcess: [
          "Imported raw CSV and Excel data into Power Query for transformation",
          "Removed null values, duplicate records, and standardized date formats",
          "Established Star Schema relationships between Sales (Fact), Products, Customers, and Calendar tables",
          "Created custom date table for time-intelligence calculations",
        ],
        daxMeasures: [
          "Total Revenue = SUM(Sales[Revenue])",
          "YoY Revenue Growth = DIVIDE([Total Revenue] - [Prior Year Revenue], [Prior Year Revenue], 0)",
          "Profit Margin % = DIVIDE([Total Profit], [Total Revenue], 0)",
          "Dynamic Rank = RANKX(ALL(Products[ProductName]), [Total Revenue], , DESC)",
        ],
        keyInsights: [
          "Technology category accounted for 42% of total revenue with the highest profit margin of 24.5%.",
          "Q4 sales experienced a 35% surge driven primarily by West region online orders.",
          "Identified 3 underperforming product sub-categories contributing to 12% excess inventory.",
        ],
        businessImpact:
          "Helped optimize regional stock allocation, reducing inventory holding costs by estimated 14% and improving Q4 revenue projection accuracy.",
      },
    },
    {
      id: "population-of-india-dashboard",
      title: "Population of India Dashboard",
      category: "Power BI",
      duration: "2 Weeks",
      description:
        "Interactive Power BI dashboard showing state-wise population analysis, density comparison, literacy rates, and geographical demographic insights.",
      longDescription:
        "A comprehensive demographic data analytics project analyzing census datasets of India. It provides state-level and union-territory level visualizations including gender ratio, literacy percentages, population growth trajectories, and land area density rankings.",
      technologies: ["Power BI", "Excel", "Shape Maps", "Demographic Analysis"],
      features: [
        "Interactive India State Choropleth Map",
        "State-wise Population & Growth Analysis",
        "Land Area vs Population Density Comparison",
        "Gender Ratio & Literacy Rate Correlational Slicers",
        "Top & Bottom 5 States Performance Charts",
      ],
      coverImage: "/images/projects/population-dashboard/img-3.jpg",
      githubUrl:
        "https://github.com/chandni-kumari/population-of-india-dashboard",
      liveDemoUrl: "/images/projects/population-dashboard/img-3.jpg",
      gallery: [
        {
          id: "pop-1",
          title: "Population of India Power BI Dashboard",
          caption:
            "Interactive Power BI report featuring 1Bn+ Total Population, 623M Male count, interactive India State/UT map, Rural vs Urban bar chart, and Area table.",
          url: "/images/projects/population-dashboard/img-3.jpg",
        },
        {
          id: "pop-2",
          title: "India State & UT Geographical Map",
          caption:
            "Map visualization displaying spatial distribution across all Indian States and Union Territories.",
          url: "/images/projects/population-dashboard/img-2.jpg",
        },
        {
          id: "pop-3",
          title: "Rural vs Urban Population Split",
          caption:
            "Stacked horizontal bar charts comparing rural and urban demographic composition by State/UT.",
          url: "/images/projects/population-dashboard/img-1.jpg",
        },
        {
          id: "pop-4",
          title: "Geographical Land Area Breakdown",
          caption:
            "Detailed tabular view displaying total land area per state (Sum of Area = 3,289,360 sq km).",
          url: "/images/projects/population-dashboard/img-4.jpg",
        },
        {
          id: "pop-5",
          title: "Executive Report View",
          caption:
            "Full view of the Power BI interface with field pane, custom DAX measures, and active slicers.",
          url: "/images/projects/population-dashboard/img-5.jpg",
        },
      ],
      caseStudy: {
        problemStatement:
          "Demographic census data is often stored across large unstructured sheets, making it difficult for researchers and analysts to understand regional distribution, sex ratio metrics, and urban/rural population density.",
        datasetDetails:
          "India Demographic Dataset covering Indian States and Union Territories with attributes for Area[52], Female, Male, Population, Rural[51], Urban[51], and Sex ratio.",
        dataCleaningProcess: [
          "Imported Sheet1 raw Excel dataset into Power Query for data cleaning and schema transformation",
          "Calculated Total Population (1 Bn), Sum of Male (623M), and Sum of Sex Ratio (427K)",
          "Mapped state boundaries and land area metrics (Total Area = 3,289,360 sq km)",
          "Configured dynamic slicers for State/UT filtering across Map, Bar Chart, and Table visuals",
        ],
        daxMeasures: [
          "Sum of Population = SUM(Sheet1[Population])",
          "Sum of Male = SUM(Sheet1[Male])",
          "Sum of Rural = SUM(Sheet1[Rural])",
          "Sum of Urban = SUM(Sheet1[Urban])",
          "Sum of Area = SUM(Sheet1[Area])",
        ],
        keyInsights: [
          "National total population recorded at 1 Billion with 623 Million male population.",
          "Total land area mapped across all states equals 3,289,360 sq km, with Rajasthan (342,239 sq km) and Madhya Pradesh (308,245 sq km) leading in land area.",
          "Uttar Pradesh, Bihar, and West Bengal show the highest rural population counts, while Maharashtra and Tamil Nadu demonstrate higher urban distribution.",
        ],
        businessImpact:
          "Created an intuitive, executive-ready Power BI dashboard providing instant geographic and demographic data exploration.",
      },
    },
    {
      id: "ecommerce-churn-analytics",
      title: "E-Commerce Customer Churn Analysis",
      category: "Python",
      duration: "3 Weeks",
      description:
        "Python-driven Exploratory Data Analysis (EDA) identifying key churn drivers and customer retention strategies using Pandas and Seaborn.",
      longDescription:
        "Analyzed customer transaction history, tenure, support ticket frequency, and payment methods to discover why e-commerce customers churn.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "SQL",
        "Jupyter",
      ],
      features: [
        "Exploratory Data Analysis (EDA) on 10,000+ customer records",
        "Churn rate breakdown by tenure, order frequency, and discount usage",
        "Heatmap correlation matrix of customer friction metrics",
        "Actionable customer retention recommendations report",
      ],
      coverImage: "/images/projects/churn-analysis/cover.svg",
      githubUrl: "https://github.com/chandni-kumari/ecommerce-churn-analysis",
      liveDemoUrl:
        "https://github.com/chandni-kumari/ecommerce-churn-analysis#readme",
      gallery: [
        {
          id: "churn-1",
          title: "EDA Correlation Heatmap",
          caption:
            "Seaborn correlation matrix showing strong link between delayed delivery and customer churn rates.",
          url: "/images/projects/churn-analysis/cover.svg",
        },
      ],
      caseStudy: {
        problemStatement:
          "An online store experienced a 22% annual customer churn rate without clear insights into root causes.",
        datasetDetails:
          "10,000 customer profiles with transaction behavior, shipping feedback, and customer support ticket history.",
        dataCleaningProcess: [
          "Handled missing values in customer age and tenure using median imputation",
          "Encoded categorical variables (payment type, membership tier) with One-Hot Encoding",
          "Calculated Recency, Frequency, Monetary (RFM) scores using Python Pandas",
        ],
        daxMeasures: [],
        keyInsights: [
          "Customers experiencing delivery delays over 3 days were 3x more likely to churn.",
          "First-time buyers with cash-on-delivery had a 34% drop-off rate after order #1.",
        ],
        businessImpact:
          "Recommended targeted automated re-engagement offers that could reduce customer churn by up to 8%.",
      },
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bengaluru City University",
      period: "2022 - Present",
      status: "Pursuing (Final Year)",
      score: "CGPA: 7.5 / 10",
      description:
        "Specializing in Computer Science fundamentals, Database Management Systems (DBMS), Data Analytics, Python Programming, and Software Engineering.",
      highlights: [
        "Core Coursework: DBMS, SQL, Python for Analytics, Statistics, Web Development",
        "Academic Project Lead for Business Intelligence & Database projects",
        "Active member of the University Data & Technology Club",
      ],
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "CBSE Board",
      period: "2022 - 2024",
      status: "Completed",
      score: "60%",
      description:
        "Completed Higher Secondary Education with focus on Commerce, IT, Mathematics, and English.",
      highlights: [
        "School topper in English",
        "Scored 60% overall in 12th Board Examinations",
        "Participated in inter-school analytics and quiz competitions",
      ],
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "JAC Board",
      period: "2020",
      status: "Completed",
      score: "79.06%",
      description:
        "Completed Matriculation with distinction in Science, Mathematics, and Social Sciences.",
      highlights: [
        "Scored 79.06% in 10th Board Examinations",
        "Distinction in Mathematics and Information Technology",
        "Awarded Certificate of Merit for Academic Excellence",
      ],
    },
  ] as EducationItem[],
};
