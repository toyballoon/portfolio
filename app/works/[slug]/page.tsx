import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurFade } from "@/components/ui/blur-fade";
import { WorkMedia } from "@/components/work-media";
import { getWorkBySlug, works } from "@/lib/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        <BlurFade delay={0}>
          <Link
            href="/#works"
            className="text-sm font-bold text-[#FF4D00] transition-opacity hover:opacity-80"
          >
            ← 모든 작업물 보기
          </Link>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 overflow-hidden border-2 border-white">
            <WorkMedia src={work.thumbnail} alt={work.title} />
          </div>
        </BlurFade>

        <div className="mt-12 flex flex-col gap-8">
          <BlurFade delay={0.2}>
            <h1 className="text-4xl font-bold md:text-5xl">{work.title}</h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl">{work.body}</p>
          </BlurFade>

          {work.links.length > 0 && (
            <BlurFade delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {work.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white bg-[#FF4D00] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </main>
  );
}
