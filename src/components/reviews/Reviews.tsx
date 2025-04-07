import {ReviewsType} from "../../types/types";
import ReviewItem from "../review-item/ReviewItem";
import "./reviews.css"
type ReviewsProps = {
    reviews: ReviewsType[]
}
const Reviews = ({reviews}: ReviewsProps) => {
    return (<>
        <div className="reviews-wrapper">
            <h3 className="reviews-title">Reviews (Total {reviews.length})</h3>
            <div className="reviews-container">
                {
                    reviews.map(review => (
                        <ReviewItem review={review} key={review.date}/>
                    ))
                }
            </div>
        </div>
    </>)
}
export default Reviews;