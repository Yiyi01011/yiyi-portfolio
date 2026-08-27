import { HomeHeader } from "@/components/home/home-header";
import type { Dictionary, Locale } from "@/content/i18n";
import { getOtherWorksContent } from "@/content/projects/other-works";
import { OtherWorksGallery } from "./other-works-gallery";

type OtherWorksProjectProps = { locale: Locale; dictionary: Dictionary };

export function OtherWorksProject({ locale, dictionary }: OtherWorksProjectProps) {
  const content = getOtherWorksContent(locale);

  return (
    <div className="project-detail-page other-works-project" data-locale={locale}>
      <HomeHeader locale={locale} navigation={dictionary.navigation} activeItem="projects" />
      <main>
        <OtherWorksGallery content={content} backHref={`/${locale}#projects`} />
      </main>
    </div>
  );
}
