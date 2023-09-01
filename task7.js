function validatingJson(json) {
  try {
    JSON.parse(json);
    console.log("valid Json");
  } catch (e) {
    console.log("Invalid Json");
  }
}
validatingJson("{name : 'John', age : 20}");
validatingJson('{"name": "Doe", "age": 45}');
