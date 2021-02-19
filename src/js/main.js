let languageWriterIterator = 0;
let languageWriterCharIterator = 0;
let direction = 0;
const languages = ["Javascript", "Java", "Ruby", "PHP", "HTML"];

function languageWriter() {
  if (direction === 0) {
    document.getElementById("languages").innerHTML += languages[languageWriterIterator].charAt(
      languageWriterCharIterator
    );
    languageWriterCharIterator++;
    if (languageWriterCharIterator === languages[languageWriterIterator].length) {
      languageWriterIterator++;
      if (languageWriterIterator === languages.length) languageWriterIterator = 0;
      direction = 1;
    }
    setTimeout(languageWriter, 150);
  } else if (direction === 1) {
    document.getElementById("languages").innerHTML = document.getElementById("languages").innerHTML.slice(0, -1);
    languageWriterCharIterator--;
    if (languageWriterCharIterator === 0) direction = 0;
    setTimeout(languageWriter, 150);
  }
}

languageWriter();
