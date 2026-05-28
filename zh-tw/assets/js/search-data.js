// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-關於",
    title: "關於",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-消息",
          title: "消息",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-成員",
          title: "成員",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-專案",
          title: "專案",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-程式",
          title: "程式",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "news-實驗室有首頁了",
          title: '實驗室有首頁了',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230310_1/";
            },},{id: "news-人才徵求中",
          title: '人才徵求中！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230310_2/";
            },},{id: "news-planning-for-long-term-access-to-covid-19-memory-websites",
          title: 'Planning for Long-Term Access to COVID-19 Memory Websites',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230406_1/";
            },},{id: "news-跨領域研究的資料管理實務-cires-和-depositar-交流報導",
          title: '跨領域研究的資料管理實務：CIRES 和 depositar 交流報導',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230505_1/";
            },},{id: "news-可用於地景紀錄的開放儲存庫",
          title: '可用於地景紀錄的開放儲存庫',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230630_1/";
            },},{id: "news-淺談長期社會生態研究的資料管理與保存",
          title: '淺談長期社會生態研究的資料管理與保存',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230703_1/";
            },},{id: "news-研究資料寄存所團隊拜訪國家高速網路與計算中心",
          title: '研究資料寄存所團隊拜訪國家高速網路與計算中心',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230709_1/";
            },},{id: "news-qgis-qfield-openstreetmap-amp-wikidata-短期課程",
          title: 'QGIS, QField, OpenStreetMap &amp;amp; Wikidata 短期課程',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230711_1/";
            },},{id: "news-資料共享是科研機構的責任",
          title: '資料共享是科研機構的責任',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230720_1/";
            },},{id: "news-研究資料寄存所團隊於-open-repositories-2023-會議發表成果",
          title: '研究資料寄存所團隊於 Open Repositories 2023 會議發表成果',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230725_1/";
            },},{id: "news-成大學術誠信演講-從研究資料儲存庫出發的研究資料管理實務",
          title: '成大學術誠信演講：「從研究資料儲存庫出發的研究資料管理實務」',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/230905_1/";
            },},{id: "news-研究資料寄存所-2024-年暑期實習生招募",
          title: '研究資料寄存所 2024 年暑期實習生招募！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240304_1/";
            },},{id: "news-讓公眾取用政府資助的科學研究-美國與台灣的新近發展",
          title: '讓公眾取用政府資助的科學研究：美國與台灣的新近發展',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240325_1/";
            },},{id: "news-2023-年國際資料週的報導",
          title: '2023 年國際資料週的報導',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240331_1/";
            },},{id: "news-研究資料寄存所與-binder-的整合-以及運算可再現性於研究的挑戰",
          title: '研究資料寄存所與 Binder 的整合，以及運算可再現性於研究的挑戰',
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
            },},{id: "news-未來將如何記得-太陽花運動典藏庫-covid-19-記憶-行動典藏",
          title: '未來將如何記得？太陽花運動典藏庫、COVID-19 記憶、行動典藏',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240513_1/";
            },},{id: "news-研究資料寄存所功能更新-增加-binder-使用手冊",
          title: '研究資料寄存所功能更新：增加 Binder 使用手冊',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240524_1/";
            },},{id: "news-由-318-公民運動與-covid-19-疫情-回首與展望當代事件的數位典藏系統",
          title: '由 318 公民運動與 COVID-19 疫情 回首與展望當代事件的數位典藏系統',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240528_1/";
            },},{id: "news-depositar-lab-擴編囉-we-39-re-hiring",
          title: 'depositar lab 擴編囉~  We&amp;#39;re hiring!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240620_1/";
            },},{id: "news-welcome-2024-summer-interns",
          title: 'Welcome, 2024 Summer Interns!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240702_1/";
            },},{id: "news-研究資料寄存所系統更新-程式碼版本已更新為-v6-7-0",
          title: '研究資料寄存所系統更新：程式碼版本已更新為 v6.7.0',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/240830_1/";
            },},{id: "news-report-on-the-computational-social-science-conference-28-29-october-2024-barcelona",
          title: 'Report on the Computational Social Science Conference, 28-29 October 2024, Barcelona',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241115_1/";
            },},{id: "news-2024-開放儲存庫國際會議-直擊研究資料基礎設施的新進展",
          title: '2024 開放儲存庫國際會議 直擊研究資料基礎設施的新進展',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241203_1/";
            },},{id: "news-臺師大-open-access-week-演講-研究資料管理-保存與共享",
          title: '臺師大 Open Access Week 演講：「研究資料管理、保存與共享」',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_3/";
            },},{id: "news-研究資料寄存所團隊受邀於-ckan-monthly-live-線上活動分享經驗",
          title: '研究資料寄存所團隊受邀於 CKAN Monthly Live 線上活動分享經驗',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_1/";
            },},{id: "news-研究資料寄存所團隊受邀於臺灣生物多樣性資訊機構工作坊推廣研究資料管理",
          title: '研究資料寄存所團隊受邀於臺灣生物多樣性資訊機構工作坊推廣研究資料管理',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241217_2/";
            },},{id: "news-2024-維基數據跨領域論壇演講-當代典藏小隊伍-回首與展望",
          title: '2024 維基數據跨領域論壇演講：「當代典藏小隊伍：回首與展望」',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241218_1/";
            },},{id: "news-研究資料寄存所實驗室-depositar-lab-誠徵軟體工程師",
          title: '研究資料寄存所實驗室 (depositar lab) 誠徵軟體工程師',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/241224_1/";
            },},{id: "news-研究資料寄存所團隊於中研院地球所英文短講-研究資料管理及分享",
          title: '研究資料寄存所團隊於中研院地球所英文短講：研究資料管理及分享',
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
            },},{id: "news-研究資料寄存所團隊於政治大學圖書館演講-讓研究資料活起來-研究資料管理-x-開放科學攻略",
          title: '研究資料寄存所團隊於政治大學圖書館演講「讓研究資料活起來—研究資料管理 x 開放科學攻略」',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250527/";
            },},{id: "news-研究資料寄存所團隊於第二十屆開放儲存庫國際會議-or2025-進行報告",
          title: '研究資料寄存所團隊於第二十屆開放儲存庫國際會議 (OR2025) 進行報告',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250630_1/";
            },},{id: "news-welcome-2025-summer-interns",
          title: 'Welcome, 2025 Summer Interns!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250630_2/";
            },},{id: "news-活動宣傳-7-月-9-日研究資料聯盟與國際資料週-2025-網路說明會-台灣場次",
          title: '活動宣傳：7 月 9 日研究資料聯盟與國際資料週 2025 網路說明會 - 台灣場次',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250704/";
            },},{id: "news-2025-年網際網路典藏會議-web-archiving-conference-wac-報導",
          title: '2025 年網際網路典藏會議 (Web Archiving Conference, WAC) 報導',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250825/";
            },},{id: "news-depositar-資料收錄統計網頁上線",
          title: 'depositar 資料收錄統計網頁上線',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/250909/";
            },},{id: "news-研究資料寄存所團隊參與-2025-年國際資料週-idw-2025",
          title: '研究資料寄存所團隊參與 2025 年國際資料週 (IDW 2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251025/";
            },},{id: "news-新版研究資料管理推進室網站正式上線",
          title: '新版研究資料管理推進室網站正式上線',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251205/";
            },},{id: "news-report-on-the-20th-international-conference-on-open-repositories-or2025",
          title: 'Report on the 20th International Conference on Open Repositories (OR2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251226/";
            },},{id: "news-2025-年國際資料週紀要",
          title: '2025 年國際資料週紀要',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251230/";
            },},{id: "news-研究資料管理實務報導兩篇-新刊於-科技報導",
          title: '研究資料管理實務報導兩篇，新刊於《科技報導》',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/251231/";
            },},{id: "news-year-2025-in-review",
          title: 'Year 2025 in Review',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260206/";
            },},{id: "news-運用大型語言模型補綴-qgis-繁體中文介面-成果已於研究資料寄存所釋出",
          title: '運用大型語言模型補綴 QGIS 繁體中文介面，成果已於研究資料寄存所釋出',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260210/";
            },},{id: "news-研究資料寄存所-at-g0v-summit-2026-歡迎來串門子聊聊哦",
          title: '研究資料寄存所 (at)  g0v Summit 2026  歡迎來串門子聊聊哦！',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260522/";
            },},{id: "news-研究資料寄存所功能更新-data-package-支援上線",
          title: '研究資料寄存所功能更新：Data Package 支援上線',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260525/";
            },},{id: "news-2026-研究資料管理工作坊-會議錄影與簡報已上線",
          title: '「2026 研究資料管理工作坊」會議錄影與簡報已上線',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/260528/";
            },},{id: "projects-318-公民運動文物紀錄典藏庫",
          title: '318 公民運動文物紀錄典藏庫',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zh-tw/318_movement.html";
            },},{id: "projects-covid-19-影像與敘述",
          title: 'COVID-19 影像與敘述',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zh-tw/covid-19.html";
            },},{id: "projects-研究資料寄存所",
          title: '研究資料寄存所',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zh-tw/depositar.html";
            },},{id: "projects-研究資料管理推進室",
          title: '研究資料管理推進室',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zh-tw/rdmhub.html";
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
