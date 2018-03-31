window.addEventListener("load", function() {

    var createSrcSeq = document.getElementById("createSrcSeq");
    var createOutSeq = document.getElementById("createOutSeq");
    var showAbout = document.getElementById("showAbout");
    var windowAbout = document.getElementById("windowAbout");
    var closeWindowAbout = document.getElementById("closeWindowAbout");
    var seqSrc = document.getElementById("seqSrc");
    var seqRes = document.getElementById("seqRes");

    var minNumber = 0;
    var maxNumber = 1065;
    var colorCount = 100;
    var countNumber = maxNumber - minNumber;


    showAbout.addEventListener("click", function() {
        windowAbout.classList.remove("window_hide");
    });


    closeWindowAbout.addEventListener("click", function() {
        windowAbout.classList.add("window_hide");
    })


    // ультра магическая функция
    createSrcSeq.addEventListener("click", function() {
        // red = "ff0000"; 255 0 0
        // orange = "ff8800"; 255 136 0
        // yellow = "ffff00"; 255 255 0
        // green = "00ff00"; 0 255 0
        // lightblue = "0088ff"; 0 136 255
        // blue = "0000ff"; 0 0 255
        // purple = "8800ff"; 136 0 255
        var k = 0;
        for (var number = minNumber; number <= maxNumber; number++) {
            var seqNumber = document.createElement("div");
            seqNumber.classList.add("seq__number");
            seqNumber.innerHTML = number;
            var seqValue = document.createElement("div");
            if (number > maxNumber * 6/7) {
                var c1 = Math.trunc(maxNumber / 7 / 136 * number) % 255;
                if (c1 > 136) {
                    c1 = 136;
                }
                var c2 = 0;
                var c3 = 255;
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            } else if (number > maxNumber * 4/7) {
                var c1 = 0;
                var c2 = 136 - (Math.trunc(maxNumber / 7 / 136 * number)) % 136;
                if (c2 == 1) {
                    k = 1;
                }
                if (k == 1) {
                    c2 = 0;
                }
                var c3 = 255;
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            } else if (number > maxNumber * 3/7) {
                var c1 = 0;
                var c2 = 255 - (Math.trunc(maxNumber / 7 / 136) * number) % 255;
                if (c2 < 136) {
                    c2 = 255;
                }
                var c3 = (Math.trunc(maxNumber / 7 / 255  * number) - 272) * 3;
                if (c3 > 255) {
                    c3 = 255;
                }
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            } else if (number > maxNumber * 2/7) {
                var c1 = 255 - ((Math.trunc(maxNumber / 7 / 136) * number) - 255);
                var c2 = 255;
                var c3 = 0;
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            } else if (number > maxNumber * 1/7) {
                var c1 = 255;
                var c2 = Math.trunc(maxNumber / 7 / 136) * number;
                if (c2 > 255) {
                    c2 = 255;
                }
                var c3 = 0;
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            } else {
                var c1 = 255;
                var c2 = Math.trunc(maxNumber / 7 / 136) * number;
                if (c2 > 136) {
                    c2 = 136;
                }
                var c3 = 0;
                // console.log(number, `rgb(${c1}, ${c2}, ${c3})`);
            }
            seqValue.classList.add("seq__value");
            seqValue.innerHTML = "V<sub>" + number + "</sub>";
            seqValue.style = `background-color: rgb(${c1}, ${c2}, ${c3});`;
            var seqItem = document.createElement("div");
            seqItem.classList.add("seq__item");
            seqItem.appendChild(seqNumber);
            seqItem.appendChild(seqValue);
            seqSrc.appendChild(seqItem);
        }
    });


    createOutSeq.addEventListener("click", function() {
        for (var number = minNumber; number <= maxNumber; number++) {
            var new_number = l(number);
            var a_html = seq.childNodes[number].childNodes[1].innerHTML;
            var b_html = seq.childNodes[new_number].childNodes[1].innerHTML;
            var a_class = seq.childNodes[number].childNodes[1].className;
            var b_class = seq.childNodes[new_number].childNodes[1].className;
            seq.childNodes[number].childNodes[1].innerHTML = b_html;
            seq.childNodes[new_number].childNodes[1].innerHTML = a_html;
            seq.childNodes[number].childNodes[1].className = b_class;
            seq.childNodes[new_number].childNodes[1].className = a_class;
        }
    });


    function l(q) {
        return q * 99259 - 1066 * Math.trunc(q * 99259 / 1066);
    }

});
