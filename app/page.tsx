const supportChannels = [
  {
    title: '빠른 전화 상담',
    description: '교육 담당자가 즉시 연결되어 니즈를 파악하고 최적의 커리큘럼을 제안합니다.',
    detail: '010-1234-5678 (평일 09:00-18:00)',
  },
  {
    title: '맞춤형 이메일 제안서',
    description: '기관 정보와 교육 목표를 알려주시면 24시간 이내에 제안서를 보내드립니다.',
    detail: 'cs@rachelcoaching.kr',
  },
  {
    title: '카카오톡 실시간 상담',
    description: '비대면 상담, 자료 전송, 일정 조율까지 한 번에 해결하세요.',
    detail: '플러스친구 @라헬코칭교육원',
  },
];

const processSteps = [
  {
    title: '1. 상담 접수',
    points: ['교육 대상, 인원, 목표, 희망 일정 안내', '필요 시 기존 교육 사례 공유'],
  },
  {
    title: '2. 맞춤 제안',
    points: [
      '전문 코치단이 커리큘럼 구성 및 강사 매칭',
      '견적, 일정표, 기대효과를 포함한 제안서 전달',
    ],
  },
  {
    title: '3. 실행 & 피드백',
    points: [
      '현장 진행, 온·오프라인 선택 가능',
      '교육 후 효과 분석 리포트 및 사후 코칭 제공',
    ],
  },
];

const faqs = [
  {
    question: '기업 맞춤형 연수도 진행이 가능한가요?',
    answer:
      '네. 업종, 직무, 리더십 수준에 맞춘 진단부터 사후 평가까지 통합 솔루션을 제공합니다. 구성원 설문이나 인터뷰가 필요한 경우 함께 설계합니다.',
  },
  {
    question: '강의료와 비용은 어떻게 산정되나요?',
    answer:
      '교육 시간, 참여 인원, 강사 구성, 장소(온·오프라인)에 따라 달라집니다. 상담 시 예산 범위를 알려주시면 최적안을 설계해 드립니다.',
  },
  {
    question: '지방/해외 출장도 가능한가요?',
    answer:
      '네. 국내 전 지역 및 해외 법인 연수도 지원합니다. 출장 비용은 거리와 기간에 따라 변동되며, 사전에 상세 안내드립니다.',
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-12">
      <section className="flex flex-col gap-10 rounded-[32px] bg-white/80 p-10 text-center shadow-lg backdrop-blur md:flex-row md:items-center md:text-left">
        <div className="flex-1 space-y-6">
          <span className="badge w-fit">라헬코칭교육원 CS 센터</span>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            교육 문의가 필요하신가요?
            <br className="hidden md:block" />
            전문가가 24시간 이내 응답합니다.
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            기업 연수, 학교·기관 특강, 개인 코칭까지 상담부터 실행까지 전담 매니저가 함께합니다.
          </p>
          <div className="flex flex-col gap-3 text-left text-base text-slate-700 md:flex-row md:items-center">
            <div className="rounded-full bg-primary-100 px-4 py-2 font-semibold text-primary-700">
              02-345-6789
            </div>
            <p>
              평일 09:00-18:00 / 긴급 문의는{' '}
              <a href="mailto:cs@rachelcoaching.kr">cs@rachelcoaching.kr</a>
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 text-left">
          <h2 className="text-xl font-semibold text-slate-900">빠른 문의하기</h2>
          <form
            className="space-y-4"
            action="https://formspree.io/f/xnqekvvn"
            method="POST"
            target="_blank"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                담당자명
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-primary-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="홍길동"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-primary-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                  연락처
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-primary-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="organization">
                기관/회사명
              </label>
              <input
                id="organization"
                name="organization"
                className="w-full rounded-lg border border-primary-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="라헬코칭교육원"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-primary-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="교육 목표, 일정, 예산 등을 적어주세요."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-primary-600"
            >
              상담 요청하기
            </button>
            <p className="text-xs text-slate-500">
              제출 시 Formspree를 통해 안전하게 전송되며, 24시간 이내 담당자가 연락드립니다.
            </p>
          </form>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {supportChannels.map((channel) => (
          <div key={channel.title} className="card h-full space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">{channel.title}</h3>
            <p className="text-sm text-slate-600">{channel.description}</p>
            <p className="text-base font-medium text-primary-700">{channel.detail}</p>
          </div>
        ))}
      </section>

      <section className="card space-y-8">
        <header className="space-y-2 text-center">
          <h2 className="section-title">교육 진행 프로세스</h2>
          <p className="section-subtitle">
            상담부터 사후 관리까지, 라헬코칭교육원의 탄탄한 3단계 CS 프로세스입니다.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-green">{step.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-green" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-6">
        <header className="space-y-2 text-center">
          <h2 className="section-title">자주 묻는 질문</h2>
          <p className="section-subtitle">교육 진행 전 궁금한 사항을 먼저 확인해 보세요.</p>
        </header>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-primary-100 bg-white p-5">
              <summary className="cursor-pointer text-base font-semibold text-slate-800">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card flex flex-col gap-6 bg-gradient-to-r from-brand-green to-primary-600 text-white md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">교육 요청서를 보내주시면 24시간 이내 연락드립니다.</h2>
          <p className="text-sm text-white/80">
            대량 교육, 정기 코칭, 정부 지원 사업 등 복잡한 요청도 전담 매니저가 꼼꼼하게 대응합니다.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a
            className="rounded-full bg-white px-6 py-3 text-brand-green shadow-md transition hover:bg-primary-50"
            href="mailto:proposal@rachelcoaching.kr"
          >
            제안서 요청 메일 보내기
          </a>
          <span>또는 카카오톡에서 <strong>@라헬코칭교육원</strong> 을 검색하세요.</span>
        </div>
      </section>
    </main>
  );
}
