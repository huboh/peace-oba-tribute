import styles from "@/styles/home.module.scss";

import { NextPage } from "next";
import { PageProps } from "@/types";
import { getTributes } from "../lib/tributes";
import { getSliderImagesPaths } from "@/lib";
import { PT_Serif, Dancing_Script } from "@next/font/google";
import { default as Masonry, ResponsiveMasonry } from "react-responsive-masonry";

// components
import Seo from '@/components/Seo';
import Text from '@/components/Text';
import View from '@/components/View';
import Section from "@/components/Section";
import HeroForm from "@/components/HeroForm";
import Tribute from "@/components/cards/Tribute";
import HeroSlider from '@/components/HeroSlider';
import ScrollToTop from "@/components/ScrollToTop";

interface TributesPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getServerSideProps>>["props"], ""> { }

const ptSerif = PT_Serif({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "400",
    "700",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

const dancingScript = Dancing_Script({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

const getServerSideProps = async () => {
  return {
    props: {
      tributes: await getTributes(),
      images: await getSliderImagesPaths(),
    }
  };
};

const TributesPage: NextPage<TributesPageProps> = (props) => {
  return (
    <View className={ props.className }>
      <Seo
        title="Peace Iniolu Oba's Tribute"
      />
      <main>
        <HeroSlider imagesPaths={ props.images }>
          <Section className={ styles["hero"] }>
            <div className={ styles["form"] }>
              <Text.Paragraph className={ styles["notice"] }>
                This website is undergoing maintenance and improvements at the moment, however, we invite you to leave a tribute in honor of preserving the legacy of peace.
              </Text.Paragraph>
              <HeroForm className={ styles["form"] } />
            </div>

            <hgroup>
              <Text.Header.H1
                text="Peace Iniolu Oba."
                className={ ptSerif.className }
              />

              <Text.Header.H2
                size={ "large" }
                text={ "1993 - 2023" }
                className={ `${styles["lifespan"]} ${dancingScript.className}` }
              />
            </hgroup>
          </Section>
        </HeroSlider>

        <Section className={ styles["tributes"] } textAlignment={ "center" }>
          <hgroup className={ styles["section-heading"] }>
            <Text.Header.H1
              text="Tributes."
            />
            <Text.Paragraph
              text="showcase of the love and admiration that Peace inspired in her friends and family. Read on to see how Peace touched the lives of those around her and why she will always be remembered with fondness and respect."
            />
          </hgroup>

          <ResponsiveMasonry columnsCountBreakPoints={ { 350: 1, 760: 2, 1160: 3 } }>
            <Masonry className={ styles["tributes"] }>
              { props.tributes.items.map((tribute) => <Tribute key={ tribute.id } tribute={ tribute } />) }
            </Masonry>
          </ResponsiveMasonry>
        </Section>

        <Section className={ styles["youtube"] } textAlignment={ "center" }>
          <hgroup className={ styles["section-heading"] }>
            <Text.Header.H1
              text="on-screen memories."
            />
            <Text.Paragraph
              text="We've compiled a selection of Peace's most memorable and impactful videos, showcasing her talent and passion. these videos give us a glimpse into Peace's world and allow us to relive some of her most cherished moments. So sit back, hit play, and join us in celebrating Peace's amazing journey through her videos."
            />
          </hgroup>

          <ul>
            <li>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0AUdDFRNyxs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <hgroup>
                <Text.Header
                  text="songs of the spirit"
                />
                <Text.Paragraph
                  text="By Peace Iniolu Oba"
                />
              </hgroup>
            </li>

            <li>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0LH9Yjjmriw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <hgroup>
                <Text.Header
                  text="Yaweh"
                />
                <Text.Paragraph
                  text="By Peace Iniolu Oba"
                />
              </hgroup>
            </li>

            <li>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Ft0ehYMuwoc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <hgroup>
                <Text.Header
                  text="so good"
                />
                <Text.Paragraph
                  text="By Peace Iniolu Oba"
                />
              </hgroup>
            </li>
          </ul>
        </Section>

        <ScrollToTop />
      </main>
    </View >
  );
};

export {
  getServerSideProps,
  TributesPage as default
};