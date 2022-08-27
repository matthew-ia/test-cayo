import help from '../../nestedAsset/help.js';
import help2 from '../../help.js';
import { format } from 'date-fns';
import '../../style.scss';
// import './nestedAsset/help.js';
// import '/public.css';
// // import './style.css';

const cb = (node) => { 
  console.log('im side effecting');
  console.log(node);
  return node; 
}

function replaceContents ( node ) {
  node.innerHTML = '';
  console.log('im side effecting');
  return node;
}

help();
help2();
console.log('c');
console.log(format(new Date(), "'Today is a' eeee"));

renderCayos(replaceContents);
