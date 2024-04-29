import {
  meta,
  shopify,
  fa,
  aiconsultant,
  azure,
  az900,
  aichat,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  summiz,
  threads,
  typescript,
  python,
  dart,
  kubernetes,
} from "../assets/icons";

export interface Skill {
  imageUrl: string;
  name: string;
  type: string;
}

export const skills: Skill[] = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: dart,
    name: "dart",
    type: "Frontend",
  },
  {
    imageUrl: kubernetes,
    name: "kubernetes",
    type: "infra",
  },
];

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "工場内監視アプリ",
    company_name: "保守保全担当者向け",
    icon: fa,
    iconBg: "#accbe1",
    date: "2023-12",
    points: [
      "フロントエンドはTypeScript(React)を使用",
      "バックエンドはC#(ASP.NET)を使用",
      "データベースはMySQLを使用",
    ],
  },
  {
    title: "AIコンサルタント",
    company_name: "一般ユーザー向け",
    icon: aiconsultant,
    iconBg: "#fbc3bc",
    date: "2024-2",
    points: [
      "フロントエンドはDart言語(flutter)を使用",
      "バックエンドはPython(Django)を使用",
    ],
  },
  {
    title: "AIマッチングアプリ",
    company_name: "ゲームユーザー向け",
    icon: aichat,
    iconBg: "#b7e4c7",
    date: "2024-2",
    points: [
      "フロントエンドはDart言語(flutter)を使用",
      "バックエンドはPython(Django)を使用",
    ],
  },
];

export interface CloudThema {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const cloudthemas: CloudThema[] = [
  {
    title: "グローバル管理者",
    company_name: "業務",
    icon: azure,
    iconBg: "#accbe1",
    date: "2023-12",
    points: ["業務でAzureのグローバル管理者を実施"],
  },
  {
    title: "Kubernetes",
    company_name: "自己研鑽",
    icon: kubernetes,
    iconBg: "#fbc3bc",
    date: "2024-2",
    points: [
      "マルチプラットフォーム化に向けて自作アプリをdockerでコンテナ化し、kubectlコマンドでコンテナのライフサイクルを管理",
    ],
  },
  {
    title: "資格獲得",
    company_name: "自己研鑽",
    icon: az900,
    iconBg: "#fbc3bc",
    date: "2024-2",
    points: ["AZ-900"],
  },
];

export interface SocialLink {
  name: string;
  iconUrl: string;
  link: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/kojileo/",
  },
];

export interface Cloud {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link: string;
}

export const cloud: Cloud[] = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Azure",
    description:
      "マイクロソフトの管理するデータセンターを通してPaaS、IaaSを提供するクラウドコンピューティングサービス",
    link: "https://azure.microsoft.com/ja-jp/free/search/?ef_id=_k_180ffeeb72801bf3a1ef9b3070e6368d_k_&OCID=AIDcmmve823aza_SEM__k_180ffeeb72801bf3a1ef9b3070e6368d_k_&msclkid=180ffeeb72801bf3a1ef9b3070e6368d",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "AWS",
    description:
      "Amazon Web Services, Inc. により提供されるクラウドコンピューティングサービス",
    link: "https://aws.amazon.com/jp/free/?trk=087832ba-cf85-4f6c-8032-ed1c6f26a07c&sc_channel=ps&s_kwcid=AL!4422!10!71056166112754!71056691301350&ef_id=e0e31c66496f17a247b979bd4ba2116e:G:s&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "GCP",
    description: "Googleが提供しているクラウドコンピューティングサービス",
    link: "https://cloud.google.com/gcp/?utm_source=bing&utm_medium=cpc&utm_campaign=japac-JP-all-ja-dr-bkws-all-all-trial-e-dr-1009882&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+GCP+~+General_cloud+-+platform-KWID_43700071932281048-kwd-74904499603676:loc-96&userloc_140064-network_o&utm_term=KW_gcp&gclid=16193b068dcc10d995515edd8ecbb0be&gclsrc=3p.ds",
  },
];
