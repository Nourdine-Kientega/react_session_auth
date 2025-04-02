import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertPanelComponent from "../components/AlertPanelComponent";

interface Alert {
    show: boolean;
    message: string;
    type: string; // 'success', 'error', 'info'
}

const AddCourseScreen = () => {

    const navigate = useNavigate();

    const [alert, setAlert] = useState<Alert>({
        show: false,
        message: '',
        type: '', // 'success', 'error', 'info'
    });

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        // const formDataObj = Object.fromEntries(formData.entries());

        // console.log(formDataObj);

        try {
            const response = await fetch('/api/add_course', {
                method: 'POST',
                // headers: {
                //   'Content-Type': 'application/json',
                // },
                body: formData,
            });

            const data = await response.json();


            if (response.ok) {
                // Signup successful
                setAlert({
                    show: true,
                    message: data.message || 'Course added successfully!',
                    type: 'success',
                });

                setTimeout(() => {
                    navigate("/");  // Navigate to the homepage
                    // (e.target as HTMLFormElement).reset();
                    // window.location.href = '/add_course';
                    // (e.target as HTMLFormElement).reset();
                }, 2000);

            } else {
                // Handle validation errors like email already exists
                setAlert({
                    show: true,
                    message: data.message || 'An error occurred!',
                    type: 'error',
                });

                setTimeout(() => {
                    (e.target as HTMLFormElement).reset();
                    window.location.href = '/add_course';
                }, 2000);
            }

            console.log(data);


        } catch (error) {
            setAlert({
                show: true,
                message: 'Server error occurred. Please try again later.',
                type: 'error',
            });

            setTimeout(() => {
                (e.target as HTMLFormElement).reset();
                window.location.href = '/add_course';
            }, 2000);
        }

    };

    return (
        <div className="container">
            <div className="form-container">

                {alert.show && (
                    <AlertPanelComponent
                        backgroundColor={alert.type === 'success' ? '#d4edda' : '#f8d7da'}
                        content={alert.message}
                    />
                )}

                <div className="form-content">
                    <i className="fas fa-book profile-img logo"></i>
                    <h2 className="title">Add new course</h2>
                    <form className="login-form" onSubmit={handleSubmit} encType="multipart/form-data">
                        <input type="text" id="title" name="title" placeholder="Enter course title" required className="input-field" />
                        <input type="time" id="time" name="time" placeholder="Enter course time (minutes)" required className="input-field" />
                        <input type="file" id="image" name="image" required className="input-field" accept="image/png, image/jpeg, image/jpg" />
                        <textarea id="description" name="description" placeholder="Enter course description" required className="input-field" />
                        <button type="submit" className="btn-login">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCourseScreen;