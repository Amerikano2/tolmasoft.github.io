VK.init(onInit, onError, '5.69'); 

function onInit(){
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){

}

function onPhoto(data){
	document.getElementById('#first_img').src = data[0]['photo_50'];
}