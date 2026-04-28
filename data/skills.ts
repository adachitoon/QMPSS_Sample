export type Category = "Planning" | "Engineering" | "Design" | "Workflow";

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

export type CoverPalette =
  | "amber-rose"
  | "teal-sky"
  | "violet-pink"
  | "emerald-teal"
  | "stone-gray"
  | "orange-rose"
  | "sky-violet"
  | "fuchsia-orange"
  | "amber-emerald";

export type Tag = {
  label: string;
  color: TagColor;
};

export type Skill = {
  slug: string;
  name: string;
  category: Category;
  tags: Tag[];
  cover: CoverPalette;
  /** カードに出る一行説明 */
  description: string;
  /** 「使うタイミング」のヒント */
  whenToUse: string;
  /** 読了目安（分） */
  readMinutes: number;
  /** 詳細ページの本文 (Markdown) */
  body: string;
  /** カバー上に置く装飾グリフ */
  glyph: string;
};

export const CATEGORY_COLOR: Record<Category, TagColor> = {
  Planning: "purple",
  Engineering: "green",
  Design: "pink",
  Workflow: "blue",
};

/** カテゴリの日本語表示ラベル */
export const CATEGORY_LABEL: Record<Category, string> = {
  Planning: "計画",
  Engineering: "開発",
  Design: "デザイン",
  Workflow: "ワークフロー",
};

export const skills: Skill[] = [
  {
    slug: "brainstorming",
    name: "ブレインストーミング",
    category: "Planning",
    tags: [
      { label: "構想", color: "purple" },
      { label: "着手前", color: "gray" },
    ],
    cover: "violet-pink",
    glyph: "✺",
    description:
      "コードを一行も書く前に、一問一答の対話でぼんやりしたアイデアを妥当な設計まで磨き込む。",
    whenToUse:
      "あらゆる機能・コンポーネント・挙動変更に着手する前に。「単純そう」に見えるものほど。",
    readMinutes: 4,
    body: `## 概要

自然な対話を通じて、アイデアを完成度の高い設計とスペックに磨き込む。まずはプロジェクトの現状を把握し、一問ずつ質問してアイデアを詰めていく。何を作るかが見えたら、設計を提示してユーザーの承認を取る。

## ハードゲート

設計を提示してユーザーの承認を得るまでは、**いかなる**実装スキルの呼び出し、コードの記述、プロジェクトの足場作りも行わない。すべてのプロジェクトがこのゲートを通る ——「単純」に見えるものほど、検討されていない前提が一番無駄を生む。

## 進め方

1. **プロジェクトの文脈を把握する** — ファイル、ドキュメント、最近のコミット。
2. **明確化の質問をする** — 一度に一問、可能なら多肢選択で。
3. **2〜3 のアプローチを提示** — トレードオフと推奨案を添えて。
4. **設計をセクションごとに提示** — 規模に応じて分割し、段階的に検証する。
5. **設計ドキュメントを書く** — \`docs/plans/YYYY-MM-DD-<topic>-design.md\` に保存してコミット。
6. **writing-plans へ移行** — ブレインストーミングの後に呼び出して良いのはこのスキルだけ。

## 重要な原則

- 質問は一度に一問、できれば多肢選択。
- YAGNI を徹底する — 不要なものは削る。
- 決める前に必ず 2〜3 のアプローチを提示する。
- 違和感があれば前に戻って明確化する柔軟さを持つ。`,
  },
  {
    slug: "test-driven-development",
    name: "テスト駆動開発",
    category: "Engineering",
    tags: [
      { label: "品質", color: "green" },
      { label: "規律", color: "red" },
    ],
    cover: "emerald-teal",
    glyph: "◐",
    description:
      "Red → Green → Refactor。失敗するテストを先に書き、最小の変更で通してから整える。",
    whenToUse:
      "機能やバグ修正の実装前に。実装コードを書き始めるより先に。",
    readMinutes: 5,
    body: `## ループ

> Red → Green → Refactor.

1. **Red** — 次に欲しい振る舞いを表す、失敗するテストを書く。
2. **Green** — それを通す最小限のコードを書く。
3. **Refactor** — テストを green のまま、コードを整える。

## なぜ機能するのか

- 着手前に「完了」が定義される。
- すべての変更が \`git restore\` 一発で戻せる粒度になる。
- テストスイートが「実装の」ではなく「振る舞いの」ドキュメントになる。

## アンチパターン

- コードの**後**にテストを書く（これは TDD ではなく回帰テストの後付け）。
- 自分が所有していないものをモックする — 内部実装に依存した脆いテストになる。
- 「テストが通ったから」とリファクタを省略する。リファクタは省略不可。

## 何をテストするのか

実装ではなく、振る舞い。**何を**するかは変えずに**どうやって**動くかだけ変えたときにテストが壊れるなら、そのテストは結合度が高すぎる。`,
  },
  {
    slug: "systematic-debugging",
    name: "体系的なデバッグ",
    category: "Engineering",
    tags: [
      { label: "調査", color: "orange" },
      { label: "証拠", color: "yellow" },
    ],
    cover: "orange-rose",
    glyph: "◌",
    description:
      "あらゆるバグを仮説駆動の調査として扱う。再現 → 切り分け → 反証 → 修正、この順で。",
    whenToUse:
      "バグ・テスト失敗・想定外の挙動に出会ったら。修正案を出すよりも先に。",
    readMinutes: 6,
    body: `## 手順

1. **確実に再現する。** 再現できないバグは修正できない。
2. **仮説を立てる。** 一文で口に出せる形に。
3. **仮説を反証できるテストを設計する。** 確認しかできないテストはテストではない。
4. **テストを実行する。** 期待ではなく、観察した結果に基づいて仮説を更新する。
5. **切り分けが終わるまで繰り返す。** 最小再現が独立して立つまで絞り込む。

## 使うツール

- \`git bisect\` — 良いコミットがわかっている退行に。
- 入力の二分探索 — データを半分にして、どちらの半分で再現するか確かめる。
- print デバッグでもいい。デバッガでもいい。気取らない。

## 終了条件

以下に答えられるようになったら完了：

- *再現する最小の入力は何か？*
- *なぜその入力でこの出力になるのか？*
- *何を変えれば起こらなくなるのか、なぜそれが効くのか？*

3 つすべてに答えられるまでは、修正ではなく「たまたま動く推測」しか持っていない。`,
  },
  {
    slug: "frontend-design",
    name: "フロントエンドデザイン",
    category: "Design",
    tags: [
      { label: "UI", color: "blue" },
      { label: "React", color: "purple" },
      { label: "美意識", color: "pink" },
    ],
    cover: "amber-rose",
    glyph: "◆",
    description:
      "量産っぽい AI 風デザインを避け、はっきりした方向性に振り切ったプロダクション品質の UI を作る。",
    whenToUse:
      "Web コンポーネント・ページ・成果物・アプリのビルドや、既存 UI のスタイリング依頼があったとき。",
    readMinutes: 4,
    body: `## デザイン思考

コードを書く前に、**大胆な**方向性に振り切る。極端を選ぶ：

- ブルータルにミニマル
- マキシマリストなカオス
- レトロフューチャー
- エディトリアル / 雑誌風
- ブルータリスト / 生っぽい
- ソフト / パステル
- 工業的 / ユーティリティ志向

大胆なマキシマリズムも洗練されたミニマリズムも、どちらも機能する。鍵は**強度ではなく意図**。

## 美意識チェックリスト

- **タイポグラフィ** — Inter / Arial のデフォルトより、特徴のあるチョイスを。ディスプレイ書体と本文用書体をペアで。
- **色とテーマ** — 支配色 + 鋭いアクセントの方が、控えめに均一なパレットより強い。
- **モーション** — 一発で印象を残す瞬間を。散発的なマイクロインタラクションより、ページロード時のオーケストレートされた連鎖の方が効く。
- **空間構成** — 非対称、重なり、たっぷりの余白、または制御された密度。
- **背景** — 単色ではなく、グラデーションメッシュ・ノイズテクスチャ・重なる透明レイヤーを。

## 避けること

予測可能なレイアウト、量産型のヒーローセクション、白背景に紫グラデーション、デフォルトの Space Grotesk。生成のたびに変える。`,
  },
  {
    slug: "marketing-lp-builder",
    name: "マーケティング LP ビルダー",
    category: "Design",
    tags: [
      { label: "日本語", color: "red" },
      { label: "HTML", color: "orange" },
      { label: "Tailwind", color: "blue" },
    ],
    cover: "fuchsia-orange",
    glyph: "❖",
    description:
      "LP 台本から、Tailwind + Noto Sans JP のプロダクション品質な日本語 LP を 1 ファイルで生成。ヒーロー画像も自動。",
    whenToUse:
      "LP 台本（LP台本.md）を 1 枚の index.html に変換してほしいと依頼されたとき。",
    readMinutes: 3,
    body: `## このスキルがやること

3 つの入力を読み込む：

- \`LP台本.md\` — コピー台本。
- \`ビジネスナレッジ.md\` — トーンとブランドの文脈。
- \`案件概要.md\` — 案件の目的と制約。

そして、Tailwind CSS + Noto Sans JP でスタイリングされた **1 枚のレスポンシブ HTML** を出力する。ヒーロー / セクションの画像は Gemini API で生成して埋め込む。

## いつ使うか

- ユーザーが「LP を HTML で作って」「LP をコーディングして」と依頼したとき。
- \`seminar/06-lp\`、\`0to1/09-lp\`、\`evergreen/04-lp\` のフローから生成するとき。
- \`06_フロント集客LP/\` 配下の既存 LP を更新するとき。

## 出力規律

- 1 ファイル。必要がない限り外部アセットは使わない。
- モバイルファーストのレスポンシブ。縦のリズムをたっぷり取る。
- ファーストビューで 3 秒以内にオファーが伝わること。`,
  },
  {
    slug: "skill-creator",
    name: "スキル作成",
    category: "Workflow",
    tags: [
      { label: "メタ", color: "purple" },
      { label: "制作", color: "brown" },
    ],
    cover: "stone-gray",
    glyph: "✦",
    description:
      "エージェントスキルの作成・編集・ベンチマーク。発火精度を高める description チューニングまで。",
    whenToUse:
      "スキルを新規作成したい、既存の description を最適化したい、評価を回したいとき。",
    readMinutes: 4,
    body: `## このスキルが生成するもの

次のディレクトリ：

- \`SKILL.md\`（フロントマター \`name\`、\`description\` 付き）。本文には**いつ使うか**と**どう使うか**を書く。
- 必要に応じて補助プロンプト・参照資料・評価ケース。

## description のチューニング

オーケストレータがスキルの起動可否を判断するのは、フロントマターの \`description\`。次を意識する：

1. **トリガーフレーズ** — ユーザーが言いそうなフレーズをそのまま入れる。
2. **ネガティブスペース** — このスキルが**カバーしないこと**を書き、過発火を防ぐ。
3. **命令形** — 「Use when...」の方が「This is a skill for...」より効く。

## 評価ループ

- 起動 / 非起動のプロンプトを少量用意する。
- 走らせて、precision と recall を計測する。
- description を直して再走。繰り返したときの分散も平均と同じくらい重要。`,
  },
  {
    slug: "using-git-worktrees",
    name: "Git Worktrees",
    category: "Workflow",
    tags: [
      { label: "Git", color: "orange" },
      { label: "隔離", color: "gray" },
    ],
    cover: "teal-sky",
    glyph: "⌬",
    description:
      "現在の作業を乱さずに、機能ブランチを別チェックアウトに隔離する。安全・可逆・並列に。",
    whenToUse:
      "隔離が必要な機能開発を始めるとき、または実装プランの実行前に。",
    readMinutes: 3,
    body: `## なぜ worktree か

\`git worktree\` は、同じリポジトリの別ブランチを別ディレクトリにチェックアウトしたもの。これで：

- \`main\` で重いビルドを回しながら、機能ブランチで編集できる。
- stash せずにリスキーなリファクタを試せる。
- 並列のエージェントタスクを、隔離した作業コピーに対して走らせられる。

## ディレクトリの選び方

worktree はメインリポジトリの兄弟ディレクトリに置く：

\`\`\`
~/code/
  myrepo/             # メインのチェックアウト
  myrepo.feat-x/      # feat-x 用 worktree
  myrepo.bugfix-42/   # bugfix-42 用 worktree
\`\`\`

予測可能な命名にすると、後片付けが楽。

## 安全策

worktree を消す前に、コミット未済 / push 未済の変更がないか確認する。\`git worktree remove\` はデフォルトで dirty な状態だと拒否する — それは仕様。`,
  },
  {
    slug: "subagent-driven-development",
    name: "サブエージェント駆動開発",
    category: "Workflow",
    tags: [
      { label: "並列", color: "green" },
      { label: "計画", color: "blue" },
    ],
    cover: "sky-violet",
    glyph: "✥",
    description:
      "実装プランの独立タスクを、現在のセッション内でサブエージェントに振り分けて並列実行する。",
    whenToUse:
      "独立したタスクを含むプランがあって、同じ会話内で並列に進めたいとき。",
    readMinutes: 4,
    body: `## いつ並列に振るか

次の条件を 2 つ以上のタスクが満たすとき：

- **独立している** — 共有状態なし、順序依存なし。
- **スコープが明確** — それぞれを 1 段落で説明できる。
- **検証可能** — 親が結果を再実行せずに素早く確認できる。

## *使わない* とき

- タスクがファイルを共有している（マージ衝突で時間が溶ける）。
- 探索的な作業（「完了」が何かまだ分かっていない）。
- ユーザーとのタイトなループの方が早い場合。

## 親エージェントの責務

親エージェントは：

1. 各サブエージェントに**必要な文脈をすべて**渡す（彼らは親の履歴を見ない）。
2. 最終応答に何を返してほしいかを明示する。
3. 結果を統合する — サブエージェントの出力をそのままユーザーに流さない。`,
  },
  {
    slug: "verification-before-completion",
    name: "完了前の検証",
    category: "Engineering",
    tags: [
      { label: "規律", color: "red" },
      { label: "証拠", color: "yellow" },
    ],
    cover: "amber-emerald",
    glyph: "◉",
    description:
      "主張より証拠。検証コマンドが成功するのを目で確認するまで「完了」と言わない。",
    whenToUse:
      "完了・修正・成功を主張する前。コミットや PR 作成の前に。",
    readMinutes: 3,
    body: `## ルール

「修正した」「テストが通った」「ビルドが green」と言って良いのは、このセッション中に対応するコマンドを実行して、成功出力を**実際に見た**ときだけ。

## 検証になるもの

- バグ修正：失敗していた再現コードを走らせて、成功するのを見る。
- 機能：それをカバーするテストスイートを走らせる。
- ビルド：ビルドを走らせて、終了コードと警告をスキャンする。
- 型チェック / lint：チェッカ / linter を走らせて、出力を読む。

## 検証**にならない**もの

- 「正しそうに見える」
- 「ユーザーに依頼された変更はやった」
- 「前回走らせたときは動いた」
- *過去の*コミットでの green な CI。

## なぜ重要か

証拠なき自信は、ユーザーが利息を払い続ける負債になる。ループ全体は正直なステータス報告に依存している。`,
  },
];

export const allTags = Array.from(
  new Map(
    skills
      .flatMap((s) => s.tags)
      .map((t) => [`${t.label}|${t.color}`, t] as const),
  ).values(),
).sort((a, b) => a.label.localeCompare(b.label, "ja"));

export const allCategories: Category[] = [
  "Planning",
  "Engineering",
  "Design",
  "Workflow",
];
