import { Link, useParams } from 'react-router-dom';
import lessons from './Lessons';

export default function LessonView() {
    const { id } = useParams();
    const lesson = lessons.find((lesson) => lesson.id === parseInt(id)); // Find the lesson by ID

    if (!lesson) {
        return <div><p>Lesson not found!</p></div>; // Handle invalid IDs
    }

    const handleTakeLesson = () => {
        <Link to="/lesson-video/${lesson.id}"></Link>; // Navigate to video page with lesson ID
    };

    return (
        <div className='DetailsPage'>
            <div className='lesson'>
                <img src={lesson.image} alt={lesson.title} className='img'/>
            </div>
            <div className='description'>
                <h1>{lesson.description}</h1>
                <p>{lesson.content}</p>
                <br/>

                {lesson.requirements && (
                <p className="requirements">
                    <p>What you'll need:</p>
                        {lesson.requirements.map((req, index) => (
                            <li key={index}>
                                <Link to={`/shop/${req.shopItemId}`}>
                                    {req.text}
                                </Link>
                            </li>
                        ))}
                    
                 </p>
                )}
                <br/><br/>
                <Link to={`/lesson-video/${lesson.id}`}>
                    <button className='take-action'>Take Lesson</button>
                </Link>
            </div>
        </div>
    );
}