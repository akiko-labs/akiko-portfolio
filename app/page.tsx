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
            Front-End Developer in Training
          </p>

          <p className="mt-6 leading-7 text-slate-700">
            Webエンジニアを目指して学習中。
            React・Next.jsを中心にモダンなフロントエンド開発を学んでいます。
          </p>
        </section>

        {/* About */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
            About
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            ポートフォリオサイト制作を通して、
            Web開発の技術を実践的に学んでいます。
            ユーザーにとって使いやすいUIや体験を意識しながら開発に取り組んでいます。
          </p>
        </section>

        {/* Skills */}
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">
            Skills
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
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
                Coming Soon...
              </h3>

              <p className="mt-2 text-slate-600">
                今後制作したアプリを掲載予定。
              </p>
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