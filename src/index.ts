import Prism from 'prismjs';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript.min.js'
// Import PrismJS extensions
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-scss';

// Import Prism JS
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/keep-markup/prism-keep-markup';

import './style.scss';
import '../haredo.svg';

window.onload = () => Prism.highlightAll();
