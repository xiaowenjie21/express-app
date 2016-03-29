/**
 * Created by Administrator on 2016/1/14.
 */
window.addEventListener('load',initAll,false);

var xhr=false;




function  initAll(){
    document.getElementById('ajaxClick').onclick=ajaxClick;



}
function ajaxClick(evt){
    xhr=new XMLHttpRequest();
    xhr.addEventListener('readystatechange',showPictures,false);
    xhr.open('GET','test.xml',true);
    xhr.send(null);
    xhr.responseText
    evt.preventDefault();
}


function showPictures(){

    if(xhr.readyState==4){
        if(xhr.status==200){
            var xmlContent=xhr.responseXML.getElementsByTagName('content');
            for(var i=0;i<xmlContent.length;i++){
                document.getElementById('pictureBar').innerHTML=xmlContent[i].textContent;
            }



            }
        }
    }

