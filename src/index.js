import help from './nestedAsset/help.js';
// import './style.scss';
import './style.css';

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

renderCayos(replaceContents);
