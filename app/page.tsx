export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <section className="rounded-2xl bg-white p-10 shadow-md">
          <h1 className="text-5xl font-bold text-slate-900">
            Akiko
          </h1>

          <p className="mt-4 text-xl text-slate-600">
            AI & Business Process Improvement Engineer
          </p>

          <p className="mt-6 leading-7 text-slate-700">
            Copilot Studio、Salesforce、Power Platformを活用した
            <br />
            業務改善・自動化ソリューションの開発に取り組んでいます。
            <br />
            生成AIを活用したDX推進を得意としています。
          </p>
        </section>

        {/* About */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
            About
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            企業の業務改善やDX推進をテーマに、
            <br />
            Copilot Studio、Salesforce、Power Platformを用いた
            <br />
            システム開発・自動化に取り組んでいます。
            <br />
            生成AIを活用した業務効率化や、
            <br />
            現場で利用されるアプリケーション開発を得意としています。
          </p>
        </section>

        {/* Skills */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h3 className="mb-3 font-semibold">
  Platform
</h3>

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

<h3 className="mt-6 mb-3 font-semibold">
  Development
</h3>

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
              <h3 className="text-lg font-semibold">
             Copilot Studio
              </h3>

              <p className="mt-2 text-slate-600">
                就業規則回答チャットボットを構築。
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
  <h3 className="text-lg font-semibold">
    Salesforce
  </h3>

  <p className="mt-2 text-slate-600">
    構造物自動判定機能を開発。
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
  <h3 className="text-lg font-semibold">
    Power Platform
  </h3>

  <p className="mt-2 text-slate-600">
    熱中症対策報告アプリを開発。
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

        {/* Contact */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
            Contact
          </h2>

          <div className="mt-4">
            <a
              href="https://github.com/akiko-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}