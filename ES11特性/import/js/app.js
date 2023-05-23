// import * as m1 from "./ma.js"

const btn = document.getElementById('btn');
btn.onclick = function () {
    import("./hello.js").then(module => {
        // console.log(module);
        module.hello();
    })
}