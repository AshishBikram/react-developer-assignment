import "./category-badge.css"
type CategoryBadgeProps = {
    category: string
}
const CategoryBadge = ({category}: CategoryBadgeProps) => {
    return (
        <>
            <div className="category-badge">{category}</div>
        </>
    )
}
export default CategoryBadge;