class PopUpInfo extends HTMLElement{
    constructor(){
        super();  
        // 创建一个 shadow root
        const shadow = this.attachShadow({mode: 'open'}); 
 
        const div = document.createElement("div");
        div.setAttribute("class", "power-tip-wrap");
        
        const divbox = document.createElement("div");
        divbox.setAttribute("class", "power-tip-box");
        const tipclose = document.createElement("a");
        tipclose.setAttribute("class", "power-tip-close"); 
        tipclose.onclick = function(){
            div.style.display = 'none';
        };
        const tipp = document.createElement("p");
        tipp.setAttribute("class", "power-tip-p");
        const tipbtn = document.createElement("a");
        tipbtn.classList.add('btn', 'btn-blue', 'power-tip-btn');
        tipbtn.innerText = '我知道了';
        tipbtn.onclick = function(){
            div.style.display = 'none';
        };
        const divshaw = document.createElement("div");
        divshaw.setAttribute("class", "shaw"); 
        const style = document.createElement("style");
        
        shadow.appendChild(style);  
        shadow.appendChild(div); 
        div.appendChild(divbox);   
        divbox.appendChild(tipclose);
        divbox.appendChild(tipp);
        divbox.appendChild(tipbtn);
        div.appendChild(divshaw);
    }
    connectedCallback(){
        updateStyle(this);
        const tip = this.getAttribute("data-content");
        const form = this.getAttribute("data-showform");
        this.shadowRoot.querySelector('.power-tip-p').innerText = tip;
        if(form == 'html'){
            this.shadowRoot.querySelector('.power-tip-wrap').classList.add('power-tip-html');
        }      
    }
} 
window.customElements.define('tip-info', PopUpInfo);

function updateStyle(elem) {
    const shadow = elem.shadowRoot; 
    shadow.querySelector('style').textContent = `
    body,h1,h2,h3,h4,h5,h6,p{margin:0} 
    a{text-decoration:none} 
    .power-tip-box{position:absolute;top:50%;left:50%;width:600px;padding-bottom: 37px;margin:-230px 0 0 -300px;text-align:center;background:#fff;border:1px solid #e6e6e6;background-color:#fff;border-radius:6px;z-index:101}
    .power-tip-p{font-size:16px;margin:30px 75px;line-height:1.7}
    .power-tip-a{color:#f80;margin:0 5px;transition:.3s}
    .power-tip-a:hover{color:#d78a32}
    .power-tip-btn{display:inline-block;padding:10px 28px;font-size:16px;color:#fff;background:#3594ff;border-radius:6px;transition:.3s}
    .power-tip-btn:hover{background:#3474d9}
    .power-tip-close:after,.power-tip-close:before{content:"";display:block;width:10px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:2px solid #e6e6e6;box-sizing:border-box;border-radius:1px;margin-left:auto;margin-right:auto;transition:.3s}
    .power-tip-close:before{border-top:none;border-left:none;margin-top:5px}
    .power-tip-close:after{border-bottom:none;border-right:none;margin-top:1px}
    .power-tip-close{position:absolute;top:6px;right:6px;width:32px;height:32px}
    .power-tip-close:hover:after,.power-tip-close:hover:before{border-color:#3594ff}
    .shaw{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.3);z-index:100}
    .power-tip-html .power-tip-box{width: 800px;text-align: center; margin:-345px 0 0 -400px;padding-bottom: 0;border:none;height:auto;}
    .power-tip-html .power-tip-p{    margin: 0 130px;}
    .power-tip-html .power-tip-footer{display:block;position:fixed;bottom:0;left:0;right:0; height: 32px;line-height: 32px;text-align: center; font-size: 14px;color:#666;background:rgba(243,243,243,1);}
    .power-tip-html .power-tip-close,.power-tip-html .shaw,.power-tip-footer{display:none;}
    `;
}







