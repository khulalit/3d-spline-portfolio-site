import ProjectCard from '@/components/ProjectCard';
import SectionPage from '@/components/SectionPage';
import getSheetData from '@/utils/fetchData';
import { Fragment } from 'react';

export default async function Projects() {
    const data: any = await getSheetData();
    if (!data) return 'Unable to fetch data.';
    return (
        <main>
            <SectionPage title='Projects' styleClasses='flex gap-8 flex-wrap'>
                {
                    data[2].map((e: any) => {
                        const [title, discription, gitlink, projectlink, image] = e.split('-');
                        return (<Fragment key={title}>
                            <ProjectCard title={title} discription={discription} link={projectlink} image={image}/>
                        </Fragment>)
                    })
                }
            </SectionPage>
        </main>
    )
}
