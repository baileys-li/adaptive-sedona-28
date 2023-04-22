import './utils/initNav';
import { initVideo } from './utils/initVideo';

const videos = document.querySelectorAll<HTMLElement>('.video');
videos.forEach(initVideo);
