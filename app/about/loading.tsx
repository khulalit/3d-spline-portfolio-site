import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <div className='p-8'>
        <Skeleton count={5} />
    </div>
  )
}
