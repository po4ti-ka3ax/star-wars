import s from './ErrorMessage.module.css';
import video from './video/christ.mp4'
import UiVideo from '@ui/UiVideo';

const ErrorMessage = ({ people }) => {
    return (
        <div>
            <p className={s.text}>
                The dark side of the force has won. <br />
                We cannot display data. <br />
                Come back when we fix everything <br />
            </p>
            <UiVideo playbackRate={1.0} src={video} classes={s.video}/>
        </div>
    )
}

export default ErrorMessage;