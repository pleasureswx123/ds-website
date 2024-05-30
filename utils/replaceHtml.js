export default function replaceHtml(contentHtml) {
  function removeImgAndPTags(htmlString) {
    htmlString = htmlString.replace(/<img[^>]*>/g, '');
    htmlString = htmlString.replace(/<div[^>]*>|<\/div>/g, '');
    htmlString = htmlString.replace(/<p[^>]*>|<\/p>/g, '');
    htmlString = htmlString.replace(/<span[^>]*>|<\/span>/g, '')
    htmlString = htmlString.replace(/<strong[^>]*>|<\/strong>/g, '')
    htmlString = htmlString.replace(/<h[^>]*>|<\/h[^>]>/g, '')
    htmlString = htmlString.replace(/&nbsp;/g, '')
    return htmlString;
  }
  const res = contentHtml ? removeImgAndPTags(contentHtml) : '';
  return res.slice(0);
}