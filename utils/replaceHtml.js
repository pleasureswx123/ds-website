export default function replaceHtml(contentHtml) {
  function removeImgAndPTags(htmlString) {
    htmlString = htmlString.replace(/<img[^>]*>/g, '');
    htmlString = htmlString.replace(/<div[^>]*>|<\/div>/g, '');
    htmlString = htmlString.replace(/<p[^>]*>|<\/p>/g, '');
    htmlString = htmlString.replace(/<span[^>]*>|<\/span>/g, '')
    htmlString = htmlString.replace(/<strong[^>]*>|<\/strong>/g, '')
    return htmlString;
  }
  const res = removeImgAndPTags(contentHtml);
  return res.slice(0);
}