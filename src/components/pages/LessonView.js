import { useParams } from 'react-router-dom';
import lessons from './Lessons';

export default function LessonView() {
    const { id } = useParams();
    const lesson = lessons.find((lesson) => lesson.id === parseInt(id)); // Find the lesson by ID

    if (!lesson) {
        return <div><p>Lesson not found!</p></div>; // Handle invalid IDs
    }

    return (
        <div className='DetailsPage'>
            <div className='lesson'>
                <img src={lesson.image} alt={lesson.title} className='img'/>
            </div>
            <div className='description'>
                <h1>{lesson.description}</h1>
                <p>{lesson.content}</p>
                <br/><br/>
                <button className='take-action'>Take Lesson</button>
            </div>
        </div>
    );
}