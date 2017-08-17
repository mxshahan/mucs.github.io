
var model = document.getElementById("model_preview");
model.style="display:none;";

function showModel(id){
	var modelPrev = document.getElementById("model_preview").style.display="block";
    
    window.onclick = function(event){
        if(event.target == model){
            model.style.display = "none";
        }
    }
}


var cls = document.getElementById("close_btn");
cls.style.cursor="pointer";
cls.onclick = function(){    	
    model.style.display = "none";
};