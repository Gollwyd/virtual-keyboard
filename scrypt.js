
const kyElement = document.createElement("div");
document.body.appendChild(kyElement);
kyElement.innerHTML = `<textarea class="use-keyboard-input" style="width: 100%; height: 100px;"></textarea>`;
//document.body.appendChild(`<textarea class="use-keyboard-input" style="width: 100%; height: 100px;"></textarea>`);
const Keyboard = {
    lab(key) {
        switch (key) {
            case "192":
                return {
                    eng: ["~", "`"],
                    ru: ["Ё","ё"]
                }
             case "49":
                return {
                    eng: ["!", "1"],
                    ru: ["!","1"]
                }
             case "50":
                return {
                    eng: ["@", "2"],
                    ru: ["\"","2"]
                }
             case "51":
                return {
                    eng: ["#", "3"],
                    ru: ["№","3"]
                }
             case "52":
                return {
                    eng: ["$", "4"],
                    ru: [";","4"]
                }    
            case "53":
                return {
                    eng: ["%", "5"],
                    ru: ["%","5"]
                }
             case "54":
                return {
                    eng: ["^", "6"],
                    ru: [":","6"]
                }
             case "55":
                return {
                    eng: ["&", "7"],
                    ru: ["?","7"]
                }
             case "56":
                return {
                    eng: ["*", "8"],
                    ru: ["*","8"]
                }     
             case "57":
                return {
                    eng: ["(", "9"],
                    ru: ["(","9"]
                }  
             case "48":
                return {
                    eng: [")", "0"],
                    ru: [")","0"]
                }                    
             case "189":
                return {
                    eng: ["_", "-"],
                    ru: ["_","-"]
                }                     
             case "187":
                return {
                    eng: ["+", "="],
                    ru: ["+","="]
                }  
             case "8":
                return {
                    eng: ["Backspace", "Backspace"],
                    ru: ["Backspace","Backspace"]
                }                    
             case "9":
                return {
                    eng: [" ", " "],
                    ru: [" "," "]
                }                                 
             case "81":
                return {
                    eng: ["Q", "q"],
                    ru: ["Й","й"]
                }  
             case "87":
                return {
                    eng: ["W", "w"],
                    ru: ["Ц","ц"]
                }                    
             case "69":
                return {
                    eng: ["E", "e"],
                    ru: ["У","у"]
                }                     
             case "82":
                return {
                    eng: ["R", "r"],
                    ru: ["К","к"]
                }  
             case "84":
                return {
                    eng: ["T", "t"],
                    ru: ["Е","е"]
                }                    
             case "89":
                return {
                    eng: ["Y", "y"],
                    ru: ["Н","н"]
                }                            
             case "85":
                return {
                    eng: ["U", "u"],
                    ru: ["Г","г"]
                }  
             case "73":
                return {
                    eng: ["I", "i"],
                    ru: ["Ш","ш"]
                }                    
             case "79":
                return {
                    eng: ["O", "o"],
                    ru: ["Щ","щ"]
                }                     
             case "80":
                return {
                    eng: ["P", "p"],
                    ru: ["З","з"]
                }  
             case "219":
                return {
                    eng: ["{", "["],
                    ru: ["Х","х"]
                }                    
             case "221":
                return {
                    eng: ["}", "]"],
                    ru: ["Ъ","ъ"]
                }                                 
             case "220":
                return {
                    eng: ["|", "\\"],
                    ru: ["/","\\"]
                }  
             case "46":
                return {
                    eng: ["Del", "Del"],
                    ru: ["Del","Del"]
                }                    
             case "20":
                return {
                    eng: ["Caps", "Caps"],
                    ru: ["Caps","Caps"]
                }                     
             case "65":
                return {
                    eng: ["A", "a"],
                    ru: ["Ф","ф"]
                }  
             case "83":
                return {
                    eng: ["S", "s"],
                    ru: ["Ы","ы"]
                }                    
             case "68":
                return {
                    eng: ["D", "d"],
                    ru: ["В","в"]
                }   
             case "70":
                return {
                    eng: ["F", "f"],
                    ru: ["А","а"]
                }  
             case "71":
                return {
                    eng: ["G", "g"],
                    ru: ["П","п"]
                }                    
             case "72":
                return {
                    eng: ["H", "h"],
                    ru: ["Р","р"]
                }                     
             case "74":
                return {
                    eng: ["J", "j"],
                    ru: ["О","о"]
                }  
             case "75":
                return {
                    eng: ["K", "k"],
                    ru: ["Л","л"]
                }                    
             case "76":
                return {
                    eng: ["L", "l"],
                    ru: ["Д","д"]
                }                                 
             case "186":
                return {
                    eng: [":", ";"],
                    ru: ["Ж","ж"]
                }  
             case "22":
                return {
                    eng: ["\"", "'"],
                    ru: ["Э","э"]
                }                    
             case "13":
                return {
                    eng: ["\n", "\n"],
                    ru: ["\n", "\n"]
                }                     
             case "16":
                return {
                    eng: ["Shift", "Shift"],
                    ru: ["Shift","Shift"]
                }  
             case "999":
                return {
                    eng: ["\\", "\\"],
                    ru: ["\\","\\"]
                }                    
             case "90":
                return {
                    eng: ["Z", "z"],
                    ru: ["Я","я"]
                }                        
             case "88":
                return {
                    eng: ["X", "x"],
                    ru: ["Ч","ч"]
                }  
             case "67":
                return {
                    eng: ["C", "c"],
                    ru: ["С","с"]
                }                    
             case "86":
                return {
                    eng: ["V", "v"],
                    ru: ["М","м"]
                }                     
             case "66":
                return {
                    eng: ["B", "b"],
                    ru: ["И","и"]
                }  
             case "78":
                return {
                    eng: ["N", "n"],
                    ru: ["Т","т"]
                }                    
             case "77":
                return {
                    eng: ["M", "m"],
                    ru: ["Ь","ь"]
                }                                 
             case "188":
                return {
                    eng: ["<", ","],
                    ru: ["Б","б"]
                }  
             case "190":
                return {
                    eng: [">", "."],
                    ru: ["Ю","ю"]
                }                    
             case "191":
                return {
                    eng: ["?", "/"],
                    ru: [",","."]
                }   
             case "38":
                return {
                    eng: ["Up", "Up"],
                    ru: ["Up","Up"]
                }                    
             case "16":
                return {
                    eng: ["Shift", "Shist"],
                    ru: ["Shift","Shift"]
                }  
             case "17":
                return {
                    eng: ["Ctrl", "Ctrl"],
                    ru: ["Ctrl","Ctrl"]
                }                    
             case "91":
                return {
                    eng: ["Win", "Win"],
                    ru: ["Win","Win"]
                }                        
             case "18":
                return {
                    eng: ["Alt", "Alt"],
                    ru: ["Alt","Alt"]
                }  
             case "32":
                return {
                    eng: [" ", " "],
                    ru: [" "," "]
                }                    
             case "18":
                return {
                    eng: ["Alt", "Alt"],
                    ru: ["Alt","Alt"]
                }                     
             case "17":
                return {
                    eng: ["Ctrl", "Ctrl"],
                    ru: ["Ctrl","Ctrl"]
                }  
             case "37":
                return {
                    eng: ["Left", "Left"],
                    ru: ["Left","Left"]
                }                    
             case "40":
                return {
                    eng: ["Down", "Down"],
                    ru: ["Down","Down"]
                }                                 
             case "39":
                return {
                    eng: ["Right", "Right"],
                    ru: ["Right","Right"]
                }  
             
            default:
                return {
                    eng: ["y", 'U'],
                    ru: "ё"
                }
        }
    },
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

   

    properties: {
        value: "",
        capsLock: false,
        lang: "eng"
    },

  

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

             
        
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "192", "49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "8",
            "9", "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219","221", "220", "46",
            "20", "65", "83", "68", "70", "71", "72", "74", "75", "76","186", "22", "13",
            "1666", "999", "90", "88", "67", "86", "66", "78", "77", "188", "190", "191", "38", "16",
            "17", "91", "18", "32", "18", "17", "37", "40", "39"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["8", "46", "13", "16"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");
            keyElement.classList.add("key_"+key);
            
            switch (key) {
                case "38":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Up"
                    break;
                 case "40":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Down"
                    break;
                case "9":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Tab"
                    keyElement.addEventListener("click", () => {
                        defButt(key);
                       
                    });
                    break;
                case "18":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Alt"
                    break;
                    case "17":
                        keyElement.classList.add("keyboard__key--wide");
                        keyElement.textContent = "Ctrl"
                        break;
                case "91":
                        keyElement.classList.add("keyboard__key--wide");
                        keyElement.textContent = "Win"
                        break;
                case "1666":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Shift"
                    break;
                    
                case "16":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Shift"
                    break;
                    
                case "46":
                    //keyElement.classList.add("keyboard__key--wide");
                    keyElement.textContent = "Del";

                    keyElement.addEventListener("click", () => {
                        del();
                        
                    });

                    break;
               
                case "8":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        backspace();
                        
                    });

                    break;

                case "20":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        caps();
                    });

                    break;

                case "13":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        defButt(key);
                        
                    });

                    break;

                case "32":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        defButt(key);
                    });

                    break;
                case "37" :
                    
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("arrow_left");

                    keyElement.addEventListener("click", () => {
                        
                        cursor_end(-1)  ;
                        
                    });
                    break;     
              
                 case "39" :
                    
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("arrow_right");

                    keyElement.addEventListener("click", () => {
                        
                        cursor_end(1)  ;
                        
                        
                    });
                    break;  

                default:
                    if (Keyboard.properties.lang == "eng"){
                    keyElement.textContent = Keyboard.lab(key).eng[1].toLowerCase();
                    } else {
                        
                        keyElement.textContent = Keyboard.lab(key).ru[1]; 
                    }


                    keyElement.addEventListener("click", () => {
                        defButt(key);
                       
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

   
    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },


    
    
    
   
};

let position = 0;

function cursor_end(n){
position += n;
var area=document.querySelector(".use-keyboard-input");

if (area.selectionStart)
{
 var len=area.value.length+position;
 area.focus();
 area.setSelectionRange(len,len);
 area.focus();
 console.log(area.selectionStart);
}}


addEventListener("keydown", (e)=>{
    e.preventDefault() ;
    let karea=document.querySelector("button.keyboard__key.key_"+e.which);
    console.log(karea);
    let h ="Keyboard__key__active";
    karea.classList.add(h);
    addEventListener("keyup", ()=>{
        karea.classList.remove(h);
    })
    
    switch (e.which.toString()) {
        case '18': 
            alt(e.shiftKey);
        break;
        case '17': 
            ;
        break;
        case '16': 
            alt(e.altKey);
            break;
        case '38': 
            
            break;
        case '40': 
            
            break;
        case '91': 
            
            break;          
        
        case '46': 
            del();
            break;
        case '8': 
            backspace();
            break;
        case '20': 
            caps();
            break;
        case '39': 
            cursor_end(1);
            break;
    
        case '37': 
            cursor_end(-1);
            break;
        default:
            defButt(e.which.toString(), e.shiftKey)
            break;
    }

    
    console.log(e.key);
});



window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});


function obnovi() {
    let n =document.querySelector(".use-keyboard-input").selectionStart;
    console.log(Keyboard.properties.value);
    document.querySelector(".use-keyboard-input").value = Keyboard.properties.value;
    
    document.querySelector(".use-keyboard-input").focus();
}


function insert(str, char) {
    let arr = str.split('');
    let arrrr = [];
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let n = area.selectionStart;
    
    for (let i=0; i<arr.length || i==0; i++) {
        arrrr.push(arr[i]);
        if (i==n-1 || arr.length == 0)  arrrr.push(char);
    }
    console.log(arrrr);
    return arrrr.join('');
}

function defButt(key, shift){
    let k = 1;
    let l = 0;
    
    if (shift) {k = 0; l = 1;}
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let n = area.selectionStart;
    if (Keyboard.properties.lang == "eng") {Keyboard.properties.value = insert(Keyboard.properties.value, Keyboard.properties.capsLock ? Keyboard.lab(key).eng[l] : Keyboard.lab(key).eng[k]);}
    else {Keyboard.properties.value = insert(Keyboard.properties.value, Keyboard.properties.capsLock ? Keyboard.lab(key).ru[l] : Keyboard.lab(key).ru[k]);}
    
    obnovi();
    area.setSelectionRange(n+1,n+1);
    
}
function caps() {
    Keyboard._toggleCapsLock();
    keyElement.classList.toggle("keyboard__key--active", Keyboard.properties.capsLock);
}

function backspace() {
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let n = area.selectionStart;

    let arr = Keyboard.properties.value.split('');
    let arrrr = [];
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let m = area.selectionStart;
    
    for (let i=0; i<arr.length || i==0; i++) {
        
        if (i==m-1 || arr.length == 0)  {} else {arrrr.push(arr[i]);}
    }
    
    Keyboard.properties.value = arrrr.join('');

    obnovi();
    area.setSelectionRange(m-1, m-1);
}

function del() {
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let n = area.selectionStart;

    let arr = Keyboard.properties.value.split('');
    let arrrr = [];
    var area=document.querySelector(".use-keyboard-input");
    area.focus();    
    let m = area.selectionStart;
    
    for (let i=0; i<arr.length || i==0; i++) {
        
        if (i==m || arr.length == 0)  {} else {arrrr.push(arr[i]);}
    }
    
    Keyboard.properties.value = arrrr.join('');

    obnovi();
    area.setSelectionRange(m, m);
}

function alt(shift) {
    if (shift) {
        if (Keyboard.properties.lang == "eng") {
            Keyboard.properties.lang = "ru";
            
        }else{Keyboard.properties.lang = "eng";}
        document.querySelector('.keyboard').remove();
        Keyboard.init();
    }
}

