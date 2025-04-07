import "./availability-badge.css"

type AvailabilityBadgeProps = {
    availabilityStatus: string;
}

const AvailabilityBadge = ({availabilityStatus}: AvailabilityBadgeProps) => {
    const getAvailabilityBadge = (availabilityStatus: string) => {
        switch (availabilityStatus.toLowerCase()) {
            case "in stock":
                return "in-stock"
            case "low stock":
                return "low-stock"
            default:
                return "in-stock"
        }
    }

    return (
        <div className={`${getAvailabilityBadge(availabilityStatus)} availability-badge`}>
            {availabilityStatus}
        </div>
    )
}
export default AvailabilityBadge;