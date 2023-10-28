import getSheetData from '@/utils/fetchData';
import SectionPage from '@/components/SectionPage';


export default async function SkillSection() {
    const data: any = await getSheetData();
    if (!data) return 'Unable to fetch data.';
    return (
        <main>
            <SectionPage title='Technologies I work with' styleClasses='technologies'>
                <ul>
                    {data[0]?.map((e: string) => <li key={e}>{e}</li>)}
                </ul>
            </SectionPage>
        </main>
    )
}
