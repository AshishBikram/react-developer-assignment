import {Star} from "lucide-react";
import "./rating.css";

type RatingProps = {
    rating: number;
    total: number;
}
const Rating = ({total, rating}: RatingProps) => {
    return (
        <div className="rating">
            <div className="stars">
                {[...Array(total)].map((_, i) => (
                    <Star key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`} size={12} />
                ))}
            </div>
            <span className="rating-value">{rating}</span>
        </div>
    )
}
export default Rating;