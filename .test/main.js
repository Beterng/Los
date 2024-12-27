// function downloadInnerHtml(filename, elId) {
//     var elHtml = document.getElementById(elId).innerHTML;
//     var link = document.createElement('a');
//     link.setAttribute('download', filename);   
//     link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml));
//     link.click();     
// }


// txtBtn.addEventListener("click", () => {
//     const a = document.createElement("a")
//     const blob = new Blob([content.innerText])
//     const dataUrl = URL.createObjectURL(blob)
//     a.href = dataUrl
//     a.download = filename.value + ".txt"
//     a.click()
// })


const docBtn = document.querySelector("#doc-Btn")
const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")

docBtn.addEventListener("click", () => {
    // Using "googoose" from 
    var DValue = {
        filename: filename.value + ".doc"
    };

    var a = document.createElement('a')
    a.download = $(document).googoose(DValue);
    a.click(); 
})
