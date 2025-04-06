import "./brand-title.css"

type BrandTitleProps = {
    brand: string;
    title: string;
}
const BrandTitle = ({brand, title}: BrandTitleProps) => {
    return (
        <div className="title-section">
            <div className="brand">{brand}</div>
            <h3 className="title">{title}</h3>
        </div>
    )
}
export default BrandTitle;