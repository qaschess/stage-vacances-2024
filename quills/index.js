import './formats/boldBlot.js';
import './formats/italicBlot.js';
import './formats/underlineBlot.js'
import './formats/linkBlot.js'
import './formats/blockquotes.js'
import './formats/headerBlot.js'
import './formats/imageBlot.js'
import './formats/videoBlot.js'
import './formats/tweetBlot.js'
import './formats/dividerBlot.js'


/*
const onClick = (selector, callback) => {
    document.querySelector(selector).addEventListener('click',callback);
};
*/
 
function onClick(selector,callback) {
    console.log(selector)
    console.log(callback)
    document.querySelector(selector).addEventListener('click',callback);
}

function boldCallback() {
    quill.format('bold',true)
}

onClick('#bold-button', boldCallback);



onClick('#italic-button',() => {
    quill.format('italic', true);
});

onClick('#underline-button',() => {
    quill.format('underline' ,true);
});

onClick('#link-button', () => {
    const value = prompt('Enter link URL');
    quill.format('link', value);
  });

onClick('#blockquote-button', () => {
    quill.format('blockquote', true);
  });
  
onClick('#header-1-button', () => {
    quill.format('header', 1);
  });
  
onClick('#header-2-button', () => {
    quill.format('header', 2);
  });

onClick('#divider-button', () => {
    const range = quill.getSelection(true);
    quill.insertText(range.index, '\n', Quill.sources.USER);
    quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
    quill.setSelection(range.index + 2, Quill.sources.SILENT);
  });
  
onClick('#image-button', () => {
    const imageUrl = prompt('Enter image URL');
    console.log(imageUrl)

    let range = quill.getSelection(true);
    quill.insertText(range.index, '\n', Quill.sources.USER);
    
    quill.insertEmbed(range.index + 1, 'image', {
      alt: 'My Image',
      url: imageUrl
    }, Quill.sources.USER);
    quill.setSelection(range.index + 2, Quill.sources.SILENT);
  });
  
onClick('#video-button', () => {
    let videoUrl = prompt('enter video URL');
    console.log(`https://www.youtube.com/embed/${videoUrl}`)

    let range = quill.getSelection(true);
    quill.insertText(range.index, '\n', Quill.sources.USER);

    quill.insertEmbed(range.index + 1, 'video',{
      alt : 'My Video' , 
      url : `https://www.youtube.com/embed/${videoUrl}`
    }, Quill.sources.USER);
    quill.formatText(range.index + 1, 1, { height: '170', width: '400' });
    quill.setSelection(range.index + 2, Quill.sources.SILENT);
  });
  
onClick('#tweet-button', () => {
    const range = quill.getSelection(true);
    const id = '464454167226904576';
    quill.insertText(range.index, '\n', Quill.sources.USER);
    quill.insertEmbed(range.index + 1, 'tweet', id, Quill.sources.USER);
    quill.setSelection(range.index + 2, Quill.sources.SILENT);
  });
  
const quill = new Quill('#editor');

