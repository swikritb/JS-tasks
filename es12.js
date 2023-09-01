// es 12
function es12() {
  let urlObject = new URL("https://www.abc.com?name=johnDoe&age=22");
  let queryParam = {};
  for (const [key, value] of urlObject.searchParams) {
    queryParam[key] = value;
  }
  console.log(queryParam);
}
es12();
