import { Link } from 'react-router-dom';
import lessons from './Lessons';
import './pages.css';

export default function Learning() {
    return(
        <>
        <div className='search'>
            <input type="text" placeholder='Search...'/>
            {/*<span className="search-icon">&#128269;</span>*/}
        </div>
        <div className='explore'><h1>Explore Lessons</h1></div>
        <div className='items'>
            {lessons.map((lesson) => (
                <div key={lesson.id}>
                    <Link to={`/learning/${lesson.id}`}>
                        <img src={lesson.image} alt={lesson.title} />
                    </Link>
                    <p>{lesson.description}</p>
                </div>
            ))}
        </div>
        </>
    );
}