import Image from 'next/image';
import './styles.scss';

export default function ProjectCard({
  title, discription, link, image
}: {
  title: string, discription: string, link: string, image: string
}) {
  return (
    <div className='card'>
      <Image src={image} className='image' alt='image' width={275} height={180} />
      <h3>{title}</h3>
      <p>
        {discription}
      </p>
      <button>
        <a href={link} target='_blank'>
          Look it up
        </a>
      </button>
    </div>
  )
}
