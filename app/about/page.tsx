import getSheetData from "@/utils/fetchData";
import SectionPage from "@/components/SectionPage";
import Timeline from "@/components/Timeline";

export default async function About() {
    const data: any = await getSheetData();
    if (!data) return 'Unable to fetch data.';
    return (
        <main>
            <SectionPage title='About Me' styleClasses=''>
                <Timeline data={data[1]} />
            </SectionPage>
        </main>
    )
}
