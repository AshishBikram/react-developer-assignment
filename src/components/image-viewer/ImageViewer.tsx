import "./image-viewer.css"
import AvailabilityBadge from "../availability-badge/AvailabilityBadge";

type ImageViewerProps = {
    imageUrl: string,
    title: string,
    availabilityStatus: string
}

const ImageViewer = ({imageUrl, availabilityStatus, title}: ImageViewerProps) => {
    return (
        <>
            <div className="image-container">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    className="product-image"
                />

                {/* Availability badge */}
                <div className={`availability-badge-container`}>
                    <AvailabilityBadge availabilityStatus={availabilityStatus} />
                </div>
            </div>
        </>
    )
}
export default ImageViewer;