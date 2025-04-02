
interface CourseItemComponentProps {
    id: string;
    image: string;
    title: string;
    time: string;
};

const CourseItemComponent = ({ id, image, title, time }: CourseItemComponentProps) => {
    return (
        <div className="course-card">
            <img src={`/api/${image}`} alt={title} className="course-image" />
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <div className="course-footer">
                    <a href={`/read_course/${id}`} className="follow-button">Follow Course</a>
                    <span className="course-time">{`${time.split(":")[0]+ 'h'}:${time.split(":")[1] + 'min'}`}</span>
                </div>
            </div>
        </div>
    )
}

export default CourseItemComponent;