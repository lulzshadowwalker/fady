import { getTranslations } from "next-intl/server";

export async function InfoCard() {
  const t = await getTranslations('about-us');
  const title = t('title');

  const [firstWord, ...rest] = title.split(' ');

  return (
    <section className="container mx-auto mb-12 md:mb-26">
      <p className="text-lg leading-7 font-semibold md:text-2xl md:leading-[35px] text-secondary-content bg-secondary mx-4 px-4 py-6 md:px-16 md:py-10 rounded-box">
        <span className="font-bold">{firstWord}</span>{' '}
        {rest.join(' ')}
      </p>
    </section>
  );
}
