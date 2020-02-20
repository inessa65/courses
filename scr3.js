let sec = +prompt('') ;

let h = sec/3600 ^ 0 ;

let m = (sec - h * 3600) / 60 ^ 0 ;

let s = sec - h * 3600 - m * 60 ;

alert((h < 10 ? "0" + h:h) + "ч." + (m < 10 ? "0" +m:m) + "мин." + (s < 10 ? "0" + s : s) + "сек.") ;
