
interface CourseItemComponentProps {
    image: string;
    title: string;
    time: string;
};

const CourseItemComponent = ({ image, title, time }: CourseItemComponentProps) => {
    return (
        <div className="course-card">
            <img
                src={image}
                alt={title}
                className="course-image"
            />
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <div className="course-footer">
                    <button className="follow-button">Follow Course</button>
                    <span className="course-time">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default CourseItemComponent;