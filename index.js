window.addEventListener("load", function() {

    var createSrcSeq = document.getElementById("createSrcSeq");
    var createOutSeq = document.getElementById("createOutSeq");
    var showAbout = document.getElementById("showAbout");
    var windowAbout = document.getElementById("windowAbout");
    var closeWindowAbout = document.getElementById("closeWindowAbout");
    var seq = document.getElementById("seq");

    var minNumber = 0;
    var maxNumber = 1065;
    var countNumber = maxNumber - minNumber;


    showAbout.addEventListener("click", function() {
        windowAbout.classList.remove("window_hide");
    });


    closeWindowAbout.addEventListener("click", function() {
        windowAbout.classList.add("window_hide");
    })


    createSrcSeq.addEventListener("click", function() {
        seq.innerHTML = "";
        for (var number = minNumber; number <= maxNumber; number++) {
            var seqNumber = document.createElement("div");
            seqNumber.classList.add("seq__number");
            seqNumber.innerHTML = number;
            var seqValue = document.createElement("div");
            seqValue.classList.add("seq__value");
            if (number > maxNumber * 6/7) {
                seqValue.classList.add("seq__value_purple")
            } else if (number > maxNumber * 5/7) {
                seqValue.classList.add("seq__value_blue")
            } else if (number > maxNumber * 4/7) {
                seqValue.classList.add("seq__value_lightblue")
            } else if (number > maxNumber * 3/7) {
                seqValue.classList.add("seq__value_green")
            } else if (number > maxNumber * 2/7) {
                seqValue.classList.add("seq__value_yellow")
            } else if (number > maxNumber * 1/7) {
                seqValue.classList.add("seq__value_orange")
            }  else {
                seqValue.classList.add("seq__value_red")
            }
            seqValue.innerHTML = "v<sub>" + number + "</sub>";
            var seqItem = document.createElement("div");
            seqItem.classList.add("seq__item");
            seqItem.appendChild(seqNumber);
            seqItem.appendChild(seqValue);
            seq.appendChild(seqItem);
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
