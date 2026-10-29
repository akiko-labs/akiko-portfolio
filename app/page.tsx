export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <section className="rounded-2xl bg-white p-12 shadow-md">
          <h1 className="text-5xl font-bold text-slate-900">
            Akiko
          </h1>

<p className="mt-4 text-2xl text-slate-600">
  AI & DX Engineer
</p>
<p className="mt-8 text-lg text-slate-700 leading-relaxed">
  生成AIとローコード開発を活用し、
  <br />
  現場業務の効率化とDX推進を支援しています。
</p>

<div className="mt-8 flex gap-4">
  <a
    href="https://www.linkedin.com/in/akiko-m-b0072a40b/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/akiko-labs/akiko-portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
  >
    GitHub
  </a>
</div>
        </section>

        {/* About */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
            About
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            企業の業務改善やDX推進をテーマに、
            <br />
            Copilot Studio、Power Platform、Salesforceを活用した
            <br />
            業務アプリケーション開発やプロセス自動化に取り組んでいます。
            <br /><br />
            生成AIを活用したチャットボット構築や、
            <br />
            Power Platformによる業務改善アプリ開発、
            <br />
            Salesforceを活用した業務システム開発を経験しています。
          </p>
        </section>

        {/* Skills */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
<h2 className="text-2xl font-bold mb-6">
  Skills
</h2>

<p className="mb-3 text-lg font-semibold text-slate-700">
  Platform
</p>

<div className="flex flex-wrap gap-3">
  {[
    "Copilot Studio",
    "Power Platform",
    "Power Apps",
    "Power Automate",
    "Salesforce",
  ].map((skill) => (
    <span
      key={skill}
      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
    >
      {skill}
    </span>
  ))}
</div>

<p className="mt-6 mb-3 text-lg font-semibold text-slate-700">
  Development
</p>

<div className="flex flex-wrap gap-3">
  {[
    "Next.js",
    "Git",
    "GitHub",
  ].map((skill) => (
    <span
      key={skill}
      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
    >
      {skill}
    </span>
  ))}
</div>
        </section>

        {/* Works */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
          Featured Projects
          </h2>

          <div className="mt-5 grid gap-4">

            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-xl font-semibold">
             Copilot Studio
              </h3>

              <p className="text-base text-slate-700 leading-relaxed">
                就業規則回答チャットボットを構築。
                <br />
                Copilot StudioとPower Automateを活用し、
                社内問い合わせ対応の効率化を実現。
                <br />

                使用技術:
                Copilot Studio / Power Automate

              </p>
              <a
  href="https://catkin-rice-b6c.notion.site/Copilot-Studio-33eeb09b545380a694a7c8d008e9774c"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-block text-blue-600 hover:underline"
>
  詳細を見る
</a>
            </div>

<div className="rounded-xl border border-slate-200 p-5">
  <h3 className="text-xl font-semibold">
    Salesforce
  </h3>

  <p className="text-base text-slate-700 leading-relaxed">
    構造物画像の判定支援機能を開発。
    <br />
    Salesforce上でデータ管理と業務フローを設計し、
    作業効率化と入力品質向上を実現。
    <br />

使用技術:
Salesforce / Apex / Flow
  </p>

  <a
    href="https://catkin-rice-b6c.notion.site/Salesforce-39eeb09b545380a4833aeb76414ae940"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block text-blue-600 hover:underline"
  >
    詳細を見る
  </a>
</div>
<div className="rounded-xl border border-slate-200 p-5">
  <h3 className="text-xl font-semibold">
    Power Platform
  </h3>

  <p className="text-base text-slate-700 leading-relaxed">
    熱中症対策報告アプリを開発。
    <br />
    現場作業者がモバイルから報告できる仕組みを構築し、
    管理者による状況把握を効率化。
    <br />

    使用技術:
    Power Apps / Power Automate
  </p>

  <a
    href="https://catkin-rice-b6c.notion.site/Power-Platform-3feeb09b54538056a4c1c0ecbc2274bc"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block text-blue-600 hover:underline"
  >
    詳細を見る
  </a>
</div>

          </div>
        </section>


      </div>
    </main>
  );
}