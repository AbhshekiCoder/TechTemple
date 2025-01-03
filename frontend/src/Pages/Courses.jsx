import CoursesBanner from "./Courses/CoursesBanner";
import Navbar from "../Components/Navbar";
import '../CSS/course.css'
import CoursesCriteria from "./Courses/CoursesCriteria";
function Courses(){
    return(
        <>
        <Navbar/>
        <CoursesBanner/>
        <CoursesCriteria/>
        </>
    )
}
export default Courses;