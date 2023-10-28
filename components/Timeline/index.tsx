import './styles.scss';
import { Fragment } from 'react';
interface TimelinePropsType {
    data : string[];
}
export default function Timeline({data} : TimelinePropsType) {
    return (
        <div className='flex justify-center'>
            {data.map((e)=><Fragment key={e}>
                <Box text={e}/>
            </Fragment>)}     
        </div>
    )
}


function Box({text} : {text : string}) {
    return (
        <div className='box'>
            <div className='line'>

            </div>
            {/* <span>
                fdsfdsf
            </span> */}
            <br />
            <p>
                {text}
            </p>
        </div>
    )
}