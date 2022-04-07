const franc = required('langs');
const langs = required('franc');

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
  console.log('Please try typing more characters')
} else {
  const language = langs.where('3', langCode);
  console.log(`Our best language guess it: ${language.name}`)
}