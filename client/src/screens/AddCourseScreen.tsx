import { FormEvent } from "react";

const AddCourseScreen = () => {

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();
        console.log('Hi');

    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-content">
                    <i className="fas fa-book profile-img logo"></i>
                    <h2 className="title">Add new course</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" id="title" name="title" placeholder="Enter course title" required className="input-field" />
                        <input type="number" id="time" name="time" placeholder="Enter course time (minutes)" required className="input-field" />
                        <input type="file" id="courseImage" name="courseImage" required className="input-field" />
                        <textarea id="description" name="description" placeholder="Enter course description" required className="input-field" />
                        <button type="submit" className="btn-login">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCourseScreen;