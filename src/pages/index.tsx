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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
