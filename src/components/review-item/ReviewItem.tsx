import {ReviewsType} from "../../types/types";
import "./review-item.css"
import Rating from "../rating/Rating";
import dayjs from "dayjs";

type ReviewItemProps = {
    review: ReviewsType
}
const ReviewItem = ({review}: ReviewItemProps) => {
    return (<>
        <div className="review-item-wrapper">
            <div className="review-item-container">
                <div className={"review-item-user-info"}>
                    <div className={"review-item-user-info-name"}>{review.reviewerName}</div>
                    <Rating rating={review.rating} total={5}/>
                </div>
                <div className={"review-item-comment"}>
                    {review.comment}
                </div>
            </div>
            <div className={"review-item-date"}>
                {dayjs(review.date).format("MMM, DD YYYY hh:mm a")}
            </div>

        </div>
    </>)
}
export default ReviewItem