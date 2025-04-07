import "./title-subtitle.css"
type TitleSubTitleProps = {
    title: string
    subTitle?: string | number
}
const TitleSubTitle= ({title, subTitle}: TitleSubTitleProps) => {
    return (
        <div className="title-sub-title-container">
            <div className="title-wrap">{title}</div>
            <div className="sub-title-wrap">{subTitle}</div>
        </div>
    )
}
export default TitleSubTitle;