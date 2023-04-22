import './utils/initNav';
import { initVideo } from './utils/initVideo';
import { checkWebPSupport } from './utils/webp';

const videos = document.querySelectorAll<HTMLElement>('.video');
videos.forEach(initVideo);

checkWebPSupport();
