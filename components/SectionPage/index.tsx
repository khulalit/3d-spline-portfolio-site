import './styles.scss';
interface SectionPageProps{
    children: React.ReactNode,
    title : string,
    styleClasses : string | undefined,
} 

export default function SectionPage({ children, title, styleClasses } : SectionPageProps) {
  return (
    <section className="sectionpage">
        <h2>
            {title}
        </h2>
        <div className={styleClasses}>
            {children}
        </div>
    </section>
  )
}
