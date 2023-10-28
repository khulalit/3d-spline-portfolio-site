import HeroSection from '@/components/HeroSection'
import '../global-styles/styles.scss';
import getSheetData from '@/utils/fetchData';

export default async function Home() {
  const data: any = await getSheetData();
  if (!data) return 'Unable to fetch data.';
  return (
      <main className="">
        <HeroSection/>
      </main>
  )
}
