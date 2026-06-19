import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { WorkMedia } from "@/components/work-media";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section id="hero" className="relative flex min-h-screen bg-background">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 text-white md:grid-cols-2 md:px-12">
          <div className="flex flex-col gap-8">
            <BlurFade delay={0}>
              <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
                Jeeyoung Han
              </h1>
            </BlurFade>
            <BlurFade delay={0.1}>
              <p className="text-xl md:text-2xl">
                20 years of asking &ldquo;Why?&rdquo;
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <a
                href="#about"
                className="w-fit border-2 border-white bg-[#FF4D00] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                About Me →
              </a>
            </BlurFade>
          </div>

          <BlurFade delay={0.15} className="flex items-end justify-center md:justify-end">
            <img
              src="/hero-avatar.png"
              alt="Jeeyoung Han avatar"
              className="avatar-bounce w-64 drop-shadow-2xl md:w-80 lg:w-96"
            />
          </BlurFade>
        </div>
      </section>

      <section id="about" className="relative bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-12 text-white md:px-12">
          <BlurFade inView delay={0}>
            <div className="h-1 bg-[#FF4D00]" />
          </BlurFade>

          <div className="flex flex-col gap-12 pt-12">
            <div className="flex flex-col gap-6">
              <BlurFade inView delay={0.1}>
                <h2 className="text-4xl font-bold md:text-5xl">About</h2>
              </BlurFade>
              <BlurFade inView delay={0.2}>
                <p className="max-w-2xl text-lg leading-relaxed md:text-xl">
                  I want do everything, and absolutely nothing.
                  <br />
                  Yet every day, I keep thinking, moving, and chasing whatever
                  happens to spark my curiosity.
                </p>
              </BlurFade>
            </div>

            <div className="flex flex-col gap-6">
              <BlurFade inView delay={0.3}>
                <h3 className="text-2xl font-bold md:text-3xl">Experience</h3>
              </BlurFade>
              <BlurFade inView delay={0.4}>
                <ul className="flex flex-col border-t-2 border-white">
                  <li className="grid grid-cols-2 gap-4 border-b-2 border-white py-4">
                    <span>2023 – Present</span>
                    <span>UX Designer</span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 border-b-2 border-white py-4">
                    <span>2019 – 2023</span>
                    <span>UX Strategist</span>
                  </li>
                </ul>
              </BlurFade>
            </div>

            <BlurFade inView delay={0.5}>
              <p className="text-lg font-bold text-[#FF4D00]">@1day_1self</p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="works" className="relative bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24 text-white md:px-12">
          <BlurFade inView delay={0}>
            <div className="h-1 bg-[#FF4D00]" />
          </BlurFade>

          <div className="flex flex-col gap-12 pt-12">
            <BlurFade inView delay={0.1}>
              <h2 className="text-4xl font-bold md:text-5xl">Works</h2>
            </BlurFade>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, index) => (
                <BlurFade key={work.slug} inView delay={0.2 + index * 0.1}>
                  <Link
                    href={`/works/${work.slug}`}
                    className="group flex flex-col border-2 border-white transition-colors hover:border-[#FF4D00]"
                  >
                    <div className="overflow-hidden border-b-2 border-white transition-colors group-hover:border-[#FF4D00]">
                      <WorkMedia src={work.thumbnail} alt={work.title} />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <h3 className="text-lg font-bold">{work.title}</h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {work.description}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
