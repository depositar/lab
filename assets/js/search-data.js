// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-members",
          title: "members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "news-a-homepage-for-the-lab",
          title: 'A homepage for the lab',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230310_1/";
            },},{id: "news-we-are-hiring",
          title: 'We are hiring!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230310_2/";
            },},{id: "news-planning-for-long-term-access-to-covid-19-memory-websites",
          title: 'Planning for Long-Term Access to COVID-19 Memory Websites',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230406_1/";
            },},{id: "news-the-depositar-lab-visited-cires-at-the-national-dong-hwa-university",
          title: 'The depositar lab visited CIRES at the National Dong Hwa University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230505_1/";
            },},{id: "news-open-repositories-for-landscape-documentations",
          title: 'Open Repositories for Landscape Documentations',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230630_1/";
            },},{id: "news-thoughts-on-long-term-socio-ecological-research-ltser-data-management-and-preservation",
          title: 'Thoughts on Long-Term Socio-Ecological Research (LTSER) Data Management and Preservation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230703_1/";
            },},{id: "news-the-depositar-team-visited-the-national-center-for-high-performance-computing",
          title: 'The depositar team visited the National Center for High-Performance Computing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230709_1/";
            },},{id: "news-short-courses-on-qgis-qfield-openstreetmap-amp-wikidata",
          title: 'Short courses on QGIS, QField, OpenStreetMap &amp;amp; Wikidata',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230711_1/";
            },},{id: "news-data-sharing-a-responsibility-of-research-organizations",
          title: 'Data sharing a responsibility of research organizations',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230720_1/";
            },},{id: "news-the-depositar-team-presented-at-open-repositories-2023-or2023",
          title: 'The depositar team presented at Open Repositories 2023 (OR2023)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230725_1/";
            },},{id: "news-national-cheng-kung-university-academic-integrity-lecture-from-data-repository-to-research-data-management-practice",
          title: 'National Cheng Kung University Academic Integrity Lecture - From data repository to research...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230905_1/";
            },},{id: "news-2024-summer-internship",
          title: '2024 Summer Internship!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240304_1/";
            },},{id: "news-public-access-to-government-funded-research-new-developments-in-the-us-and-taiwan",
          title: 'Public Access to Government-funded Research: New Developments in the US and Taiwan',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240325_1/";
            },},{id: "news-report-on-the-2023-international-data-week",
          title: 'Report on the 2023 International Data Week',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240331_1/";
            },},{id: "news-binder-integration-at-the-depositar-and-the-challenges-of-computational-reproducibilty-of-research",
          title: 'Binder integration at the depositar and the challenges of computational reproducibilty of research...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240331_2/";
            },},{id: "news-memorabilia-of-protests-reflecting-on-the-sunflower-movement-archive",
          title: 'Memorabilia of Protests: Reflecting on the Sunflower Movement Archive',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/SunflowerMovementArchive/";
            },},{id: "news-year-2023-in-review",
          title: 'Year 2023 in Review',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240501_1/";
            },},{id: "news-how-would-the-future-remember-on-the-sunflower-movement-archive-covid-19-memory-and-activist-archiving",
          title: 'How Would the Future Remember? On the Sunflower Movement Archive, COVID-19 Memory, and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240513_1/";
            },},{id: "news-depositar-update-binder-user-manual-is-available",
          title: 'depositar Update: Binder User Manual is Available',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240524_1/";
            },},{id: "news-retrospect-and-prospect-of-archiving-for-contemporary-events-case-studies-from-the-318-civil-movment-and-covid-19-pandemic",
          title: 'Retrospect and Prospect of Archiving for Contemporary Events: Case Studies from the 318...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240528_1/";
            },},{id: "news-we-are-hiring",
          title: 'We are hiring!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240620_1/";
            },},{id: "news-welcome-2024-summer-interns",
          title: 'Welcome, 2024 Summer Interns!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240702_1/";
            },},{id: "news-depositar-syetem-update-source-code-updated-to-version-v6-7-0",
          title: 'depositar Syetem Update: Source Code Updated to Version v6.7.0',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240830_1/";
            },},{id: "news-report-on-the-computational-social-science-conference-28-29-october-2024-barcelona",
          title: 'Report on the Computational Social Science Conference, 28-29 October 2024, Barcelona',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241115_1/";
            },},{id: "news-report-on-the-19th-international-conference-on-open-repositories-or2024",
          title: 'Report on the 19th International Conference on Open Repositories (OR2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241203_1/";
            },},{id: "news-national-taiwan-normal-university-open-access-week-lecture-from-data-repository-to-research-data-management-practice",
          title: 'National Taiwan Normal University Open Access Week Lecture - From data repository to...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_3/";
            },},{id: "news-the-depositar-team-shared-experiences-in-the-ckan-monthly-live-online-meetup",
          title: 'The depositar team shared experiences in the CKAN Monthly Live online meetup',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_1/";
            },},{id: "news-the-depositar-team-invited-to-share-research-data-management-concepts-and-practices-at-the-workshop-hosted-by-the-taiwan-biodiversity-information-facility",
          title: 'The depositar team invited to share research data management concepts and practices at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_2/";
            },},{id: "news-wikidata-cross-domain-forum-2024-lecture-small-team-contemporary-archiving-looking-back-and-moving-forward",
          title: 'Wikidata Cross Domain Forum 2024 Lecture - Small-team Contemporary Archiving: Looking Back and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241218_1/";
            },},{id: "news-the-depositar-lab-is-hiring",
          title: 'The depositar lab is hiring!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241224_1/";
            },},{id: "news-research-data-management-and-sharing-a-short-talk-by-the-depositar-team-at-the-institute-of-earth-sciences-academia-sinica",
          title: 'Research Data Management and Sharing -- a short talk by the depositar team...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250220/";
            },},{id: "news-year-2024-in-review",
          title: 'Year 2024 in Review',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250227_1/";
            },},{id: "news-the-depositar-team-presented-at-the-2025-web-archiving-conference-wac",
          title: 'The Depositar Team Presented at the 2025 Web Archiving Conference (WAC)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250418_1/";
            },},{id: "news-the-depositar-lab-gave-a-talk-at-the-national-chengchi-university-library-on-quot-bringing-research-data-to-life-research-data-management-x-open-science-strategy-quot",
          title: 'The depositar lab gave a talk at the National Chengchi University Library on...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250527/";
            },},{id: "news-the-depositar-team-presented-at-the-20th-international-conference-on-open-repositories-or2025",
          title: 'The Depositar Team Presented at the 20th International Conference on Open Repositories (OR2025)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250630_1/";
            },},{id: "news-welcome-2025-summer-interns",
          title: 'Welcome, 2025 Summer Interns!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250630_2/";
            },},{id: "news-upcoming-webinar-july-9-research-data-alliance-amp-international-data-week-2025-webinar-taiwan-edition",
          title: 'Upcoming webinar - July 9 Research Data Alliance &amp;amp; International Data Week 2025...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250704/";
            },},{id: "news-report-on-the-2025-web-archiving-conference-wac",
          title: 'Report on the 2025 Web Archiving Conference (WAC)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250825/";
            },},{id: "news-the-depositar-stats-page-is-now-live",
          title: 'The depositar stats page is now live',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250909/";
            },},{id: "news-the-depositar-team-participated-in-the-international-data-week-2025-idw-2025",
          title: 'The depositar team participated in the International Data Week 2025 (IDW 2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251025/";
            },},{id: "news-the-new-research-data-management-hub-is-now-live",
          title: 'The new Research Data Management Hub is now live',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251205/";
            },},{id: "news-report-on-the-20th-international-conference-on-open-repositories-or2025",
          title: 'Report on the 20th International Conference on Open Repositories (OR2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251226/";
            },},{id: "news-report-on-international-data-week-2025",
          title: 'Report on International Data Week 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251230/";
            },},{id: "news-two-articles-published-at-the-science-and-technology-report",
          title: 'Two articles published at the Science and Technology Report',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251231/";
            },},{id: "news-year-2025-in-review",
          title: 'Year 2025 in Review',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260206/";
            },},{id: "news-qgis-traditional-chinese-interface-translated-with-llm-assisted-workflows",
          title: 'QGIS Traditional Chinese Interface Translated with LLM-assisted Workflows',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260210/";
            },},{id: "news-depositar-lab-at-g0v-summit-2026-come-by-and-say-hi",
          title: 'depositar lab (at) g0v Summit 2026: Come by and say hi!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260522/";
            },},{id: "news-depositar-update-data-package-support-is-available",
          title: 'depositar Update: Data Package support is available',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260525/";
            },},{id: "news-videos-and-slides-from-the-research-data-management-workshop-2026-are-now-available",
          title: 'Videos and slides from the Research Data Management Workshop 2026 are now available!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260528/";
            },},{id: "news-welcome-2026-summer-interns",
          title: 'Welcome, 2026 Summer Interns!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260707/";
            },},{id: "projects-sunflower-movement-archive",
          title: 'Sunflower Movement Archive',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/318_movement.html";
            },},{id: "projects-covid-19-images-and-stories",
          title: 'COVID-19 Images and Stories',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/covid-19.html";
            },},{id: "projects-depositar",
          title: 'depositar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/depositar.html";
            },},{id: "projects-research-data-management-hub",
          title: 'Research Data Management Hub',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/rdmhub.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%74%61.%63%6F%6E%74%61%63%74@%64%65%70%6F%73%69%74%61%72.%69%6F", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/depositar", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://social.coop/@depositar", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/_depositar", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@depositar", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
