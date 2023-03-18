import { Meta } from '@/layouts/Meta';
import Section1 from '@/templates/home/Section1';
import Section2 from '@/templates/home/Section2';
import Section3 from '@/templates/home/Section3';
import Section4 from '@/templates/home/Section4';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="NextVerse"
          description="NextVerse is a VR-ready social-oriented Metaverse which aims to build a strong community where users can present themselves and communicate immersively, as well as earn assets by playing games, watching videos and many more"
        />
      }
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Main>
  );
};

export default Index;
