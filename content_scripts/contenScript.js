(async()=>{
  const ii = browser.runtime.getURL("src/js/main.js");
  functionSearch1 = await import(ii);
  functionSearch1.initial();
  console.log("importado")
})();
