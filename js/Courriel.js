$(document).ready(function(){
	$("#MessagesButton").click(function(){
		refreshMessages();
		for(var i=0;i<pages.length;i++){
			$(pages[i]).css("display", "none");
		}
		$(pages[0]).css("display","block")
	})
	$("#AddressesButton").click(function(){
		refreshAddresses();
		for(var i=0;i<pages.length;i++){
			$(pages[i]).css("display", "none");
		}
		$(pages[1]).css("display","block")
	})
	$("#NewMessageButton").click(function(){
		for(var i=0;i<pages.length;i++){
			$(pages[i]).css("display", "none");
		}
		$(pages[2]).css("display","block")
	})
	$("#NewAddresseButton").click(function(){
		for(var i=0;i<pages.length;i++){
			$(pages[i]).css("display", "none");
		}
		$(pages[3]).css("display","block")
	})
});

function resetWarning(){
	$("#Warning").css("display","none");
	$("#Warning").html("");
}

function setWarningText(text){
	$("#Warning").html(text);
	$("#Warning").css("display","block");
}

function refreshMessages(){
	$("#MessagesList").html("<tr><th>A</th><th>De</th><th>Date</th><th>Message</th>");
	for(var i=0;i<courrielStorage.messages.length;i++){
		$("#MessagesList").append("<tr><td>"+courrielStorage.messages[i].to+"</td><td>"+courrielStorage.messages[i].from+"</td><td>"+courrielStorage.messages[i].date+"</td><td>"+courrielStorage.messages[i].message+"</td></tr>");
	}
}

function refreshAddresses(){
	$("#AddressesList").html("<tr><th>Clé Publique</th><th>Nom</th></tr>");
	clesPubliques=Object.keys(courrielStorage.addresses);
	for(var i=0;i<clesPubliques.length;i++){
		$("#AddressesList").append("<tr><td>"+clesPubliques[i]+"</td><td>"+courrielStorage.addresses[clesPubliques[i]]["name"]+"</td></tr>");
	}
}

var pages=["#Messages", "#Addresses", "#NewMessage", "#NewAddresse"];
var courrielStorage={
	"messages":[
	{
		"to":"Cle Publique 1",
		"from":"Cle Publique 2",
		"date":"2019 02 22 10:59:30",
		"message":"Ceci est un exemple de message"
	},
	{
		"to": "Cle Publique 2",
		"from":"Cle Publique 1",
		"date":"2020 02 24 18:56:26",
		"message":"Ceci est un autre exemple de message"
	}
	],
	"addresses":
	{
	"Cle Publique 1":{"name":"Bill Gates"},
	"Cle Publique 2":{"name":"Steve Jobs"}
	}
};