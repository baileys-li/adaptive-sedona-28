import { initNav } from './utils/initNav';
import { initVideo } from './utils/initVideo';

initNav();

const videos = document.querySelectorAll<HTMLElement>('.video');
videos.forEach(initVideo);
