/**
 * Created by Administrator on 2016/1/14.
 */
window.addEventListener('load',initAll,false);
var xhr=false;

function initAll(){
    document.getElementById('makeTextRequest').addEventListener('click',getNewFile,false);
    document.getElementById('makeXMLRequest').addEventListener('click',getNewFile,false);

}

function getNewFile(evt){

    xhr=new XMLHttpRequest();
    xhr.addEventListener('readystatechange',showContents,false);
    xhr.open('GET',this.href,true);
    xhr.send(null);
    evt.preventDefault();
}

function showContents(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            if(xhr.responseXML && xhr.responseXML.childNodes.length > 0){
                var outMsg = (xhr.responseXML.getElementsByTagName('choices')[0]).textContent;
            } else {
                var outMsg = xhr.responseText;
            }
        }
        else {
            var outMsg = "there was a problem with the request" + xhr.status;
        }


        document.getElementById('updateArea').innerHTML =outMsg;
    }



}