import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import lessons from './Lessons';
import './pages.css';

export default function PlayLesson() {
    const { id } = useParams();
    const lesson = lessons.find(l => l.id === parseInt(id));

    if (!lesson || !lesson.youtubeId) {
        return <div>Video not available</div>;
    }

    return (
        <div className="video-page">
            <h1>{lesson.title}</h1>
            <div className="video-wrapper">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${lesson.youtubeId}`}
                    controls
                    width="100%"
                    height="60vh"
                />
            </div>
            <div className="video-description">
                <p style={{ }}>{lesson.content}</p>
            </div>
        </div>
    );
}