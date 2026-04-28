export type MainCategory = "general" | "sns" | "qmpss";

export type SubCategory =
  // SNS
  | "instagram"
  | "threads"
  | "x"
  | "tiktok"
  | "yt-shorts"
  // QMPSS
  | "core"
  | "zero-to-one"
  | "evergreen"
  | "seminar"
  | "large-funnel"
  | "value-ladder"
  | "auto-webinar";

export type TagColor =
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export type Skill = {
  /** URL用ローマ字スラッグ */
  slug: string;
  /** 表示名（日本語） */
  name: string;
  mainCategory: MainCategory;
  /** 汎用カテゴリは null */
  subCategory: SubCategory | null;
  /** カードに出る一行説明（任意） */
  description?: string;
  /** 「使うタイミング」ヒント（任意） */
  whenToUse?: string;
  /** 詳細ページの本文 Markdown（任意） */
  body?: string;
};

export const MAIN_CATEGORY_LABEL: Record<MainCategory, string> = {
  general: "汎用",
  sns: "SNS",
  qmpss: "QMPSS",
};

export const MAIN_CATEGORY_ORDER: MainCategory[] = ["general", "sns", "qmpss"];

export const MAIN_CATEGORY_COLOR: Record<MainCategory, TagColor> = {
  general: "blue",
  sns: "pink",
  qmpss: "purple",
};

export const SUB_CATEGORY_LABEL: Record<SubCategory, string> = {
  instagram: "インスタ攻略",
  threads: "Threads講座",
  x: "X講座",
  tiktok: "tiktok講座",
  "yt-shorts": "YT shorts講座",
  core: "全ての根幹",
  "zero-to-one": "0→1必達コース",
  evergreen: "エバーグリーン",
  seminar: "セミナーローンチ",
  "large-funnel": "大型企画 Funnel",
  "value-ladder": "Value Ladder Funnel",
  "auto-webinar": "Auto Webinar Funnel",
};

export const SUB_CATEGORY_COLOR: Record<SubCategory, TagColor> = {
  instagram: "pink",
  threads: "gray",
  x: "blue",
  tiktok: "green",
  "yt-shorts": "red",
  core: "yellow",
  "zero-to-one": "orange",
  evergreen: "green",
  seminar: "brown",
  "large-funnel": "purple",
  "value-ladder": "blue",
  "auto-webinar": "gray",
};

/** 各大カテゴリ内の小カテゴリ表示順 */
export const SUB_ORDER: Record<MainCategory, (SubCategory | null)[]> = {
  general: [null],
  sns: ["instagram", "threads", "x", "tiktok", "yt-shorts"],
  qmpss: [
    "core",
    "zero-to-one",
    "evergreen",
    "seminar",
    "large-funnel",
    "value-ladder",
    "auto-webinar",
  ],
};

export const skills: Skill[] = [
  // ── 汎用 ────────────────────────────────────────────
  { slug: "contract-drafting", name: "契約書作成", mainCategory: "general", subCategory: null },
  { slug: "research", name: "リサーチ", mainCategory: "general", subCategory: null },
  { slug: "banner", name: "バナー", mainCategory: "general", subCategory: null },
  { slug: "slide", name: "スライド", mainCategory: "general", subCategory: null },
  { slug: "rich-menu", name: "リッチメニュー", mainCategory: "general", subCategory: null },
  { slug: "lp-design", name: "LPデザイン", mainCategory: "general", subCategory: null },
  { slug: "web-design", name: "WEBサイトデザイン", mainCategory: "general", subCategory: null },
  { slug: "carousel", name: "カルーセル作成", mainCategory: "general", subCategory: null },

  // ── SNS / インスタ攻略 ──────────────────────────────
  { slug: "insta-concept-making", name: "インスタコンセプトメイキングAI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "insta-profile-writer", name: "インスタプロフィール文自動生成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "reel-buzz-analyzer", name: "リールバズ投稿分析AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "reel-theme-30days", name: "リールテーマ30日分生成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "reel-script", name: "リール台本作成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "reel-caption", name: "リールキャプション生成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "story-script", name: "ストーリー台本作成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "live-theme-and-script", name: "ライブテーマ&台本作成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "insta-comment-perk", name: "インスタコメント誘導特典作成AI", mainCategory: "sns", subCategory: "instagram" },
  { slug: "insta-insight-analyzer", name: "インスタインサイト分析&改善提案AI", mainCategory: "sns", subCategory: "instagram" },

  // ── SNS / Threads講座 ──────────────────────────────
  { slug: "threads-post-writer", name: "Threads投稿作成AI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-tap-post", name: "Threadsタップ投稿作成AI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-competitor-deepdive", name: "Threads競合アカウント深掘りAI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-account-design", name: "Threadsアカウント設計サポートAI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-anything-advisor", name: "Threadsなんでも相談AI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-post-checker", name: "Threads投稿チェックAI", mainCategory: "sns", subCategory: "threads" },
  { slug: "threads-insight-analyzer", name: "Threadsインサイト分析AI", mainCategory: "sns", subCategory: "threads" },

  // ── SNS / X講座 ────────────────────────────────────
  { slug: "x-competitor-research", name: "X競合バズ投稿リサーチAI", mainCategory: "sns", subCategory: "x" },
  { slug: "x-buzz-structure-advisor", name: "X競合バズ投稿分析・構成提案AI", mainCategory: "sns", subCategory: "x" },
  { slug: "x-buzz-post-generator", name: "Xバズポスト量産AI", mainCategory: "sns", subCategory: "x" },
  { slug: "x-tone-rewriter", name: "Xポスト表現リライトAI（自分の口調に合わせるやつ）", mainCategory: "sns", subCategory: "x" },
  { slug: "x-insight-analyzer", name: "Xインサイト分析&改善提案AI", mainCategory: "sns", subCategory: "x" },

  // ── SNS / tiktok講座 ──────────────────────────────
  { slug: "tiktok-buzz-structure-advisor", name: "tiktok競合バズ投稿分析・構成提案AI", mainCategory: "sns", subCategory: "tiktok" },
  { slug: "tiktok-insight-analyzer", name: "tiktokインサイト分析&改善提案AI", mainCategory: "sns", subCategory: "tiktok" },
  { slug: "tiktok-buzz-generator", name: "tiktokバズ投稿量産AI", mainCategory: "sns", subCategory: "tiktok" },

  // ── SNS / YT shorts講座 ───────────────────────────
  { slug: "yt-shorts-competitor-research", name: "YT shorts競合アカウントリサーチAI", mainCategory: "sns", subCategory: "yt-shorts" },
  { slug: "yt-shorts-buzz-structure-advisor", name: "YT shorts競合バズ投稿分析・構成提案AI", mainCategory: "sns", subCategory: "yt-shorts" },
  { slug: "yt-shorts-insight-analyzer", name: "YT shortsインサイト分析&改善提案AI", mainCategory: "sns", subCategory: "yt-shorts" },
  { slug: "yt-shorts-buzz-generator", name: "YT shortsバズ投稿量産AI", mainCategory: "sns", subCategory: "yt-shorts" },

  // ── QMPSS / 全ての根幹 ────────────────────────────
  { slug: "business-knowledge", name: "ビジネスナレッジ作成", mainCategory: "qmpss", subCategory: "core" },

  // ── QMPSS / 0→1必達コース ────────────────────────
  { slug: "z2o-self-analysis", name: "自己分析", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-position-making", name: "ポジションメイク設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-product-concept", name: "商品コンセプト設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-product-curriculum", name: "商品カリキュラム設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-product-content", name: "商品内容（中身）の設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-reel-themes", name: "リール動画テーマ作成", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-reel-script", name: "リール台本作成", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-story-script", name: "ストーリー台本作成", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-individual-concept", name: "個別コンセプト設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-proposal-deck", name: "提案資料の設計", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-perk-design", name: "特典設計 内容決定", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-overview-video", name: "企画概要動画", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-story-launch", name: "ストーリーローンチ台本", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-front-lp", name: "フロント集客LP台本", mainCategory: "qmpss", subCategory: "zero-to-one" },
  { slug: "z2o-line-funnel", name: "LINE導線台本", mainCategory: "qmpss", subCategory: "zero-to-one" },

  // ── QMPSS / エバーグリーン ────────────────────────
  { slug: "eg-overview-video-script", name: "企画概要動画台本", mainCategory: "qmpss", subCategory: "evergreen" },
  { slug: "eg-pinned-concept", name: "企画ピン留めコンセプト", mainCategory: "qmpss", subCategory: "evergreen" },
  { slug: "eg-highlight-script", name: "ハイライト台本", mainCategory: "qmpss", subCategory: "evergreen" },
  { slug: "eg-front-lp", name: "フロント集客LP台本", mainCategory: "qmpss", subCategory: "evergreen" },
  { slug: "eg-line-funnel", name: "LINE導線台本", mainCategory: "qmpss", subCategory: "evergreen" },

  // ── QMPSS / セミナーローンチ ──────────────────────
  { slug: "sem-concept", name: "コンセプト設計", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-deck-script", name: "セミナー資料台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-overview-video-script", name: "企画概要動画台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-front-lp", name: "フロント集客LP台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-story-launch", name: "ストーリーローンチ台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-prelaunch-reel", name: "プリローンチリール台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-youtube-promo", name: "Youtube告知動画台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-x-promo", name: "X告知動画台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-x-post", name: "Xポスト文章台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-day-of-post", name: "当日告知投稿台本", mainCategory: "qmpss", subCategory: "seminar" },
  { slug: "sem-line-funnel", name: "LINE導線台本", mainCategory: "qmpss", subCategory: "seminar" },

  // ── QMPSS / 大型企画 Funnel ───────────────────────
  { slug: "lf-concept", name: "コンセプト設計【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-long-launch-video", name: "長尺ローンチ動画台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-front-lp", name: "フロント集客LP台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-story-launch", name: "ストーリーローンチ台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-x-post", name: "Xポスト台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-instagram-promo", name: "Instagram告知動画台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-youtube-promo", name: "Youtube告知動画台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-x-promo", name: "X告知動画台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-feed-post", name: "フィード投稿台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },
  { slug: "lf-line-funnel", name: "LINE導線台本【大型企画】", mainCategory: "qmpss", subCategory: "large-funnel" },

  // ── QMPSS / Value Ladder Funnel ───────────────────
  { slug: "vl-overview-video", name: "企画概要動画台本【Value Ladder】", mainCategory: "qmpss", subCategory: "value-ladder" },
  { slug: "vl-story-launch", name: "ストーリーローンチ台本【Value Ladder】", mainCategory: "qmpss", subCategory: "value-ladder" },
  { slug: "vl-x-post", name: "Xポスト台本【Value Ladder】", mainCategory: "qmpss", subCategory: "value-ladder" },
  { slug: "vl-feed-post", name: "フィード投稿台本【Value Ladder】", mainCategory: "qmpss", subCategory: "value-ladder" },
  { slug: "vl-line-funnel", name: "LINE導線台本【Value Ladder】", mainCategory: "qmpss", subCategory: "value-ladder" },

  // ── QMPSS / Auto Webinar Funnel ───────────────────
  { slug: "aw-highlight-script", name: "ハイライト台本【Auto Webinar】", mainCategory: "qmpss", subCategory: "auto-webinar" },
  { slug: "aw-line-funnel", name: "LINE導線台本【Auto Webinar】", mainCategory: "qmpss", subCategory: "auto-webinar" },
];

export const skillsByMain: Record<MainCategory, Skill[]> = {
  general: skills.filter((s) => s.mainCategory === "general"),
  sns: skills.filter((s) => s.mainCategory === "sns"),
  qmpss: skills.filter((s) => s.mainCategory === "qmpss"),
};
