$("input").keypress(function(letter){
	if (letter.which === 13 && $("input").val().length !== 0) {
		var newTodo = $("input").val();
		console.log(newTodo);
		$("ul").append("<li>" + "<span><i class=\"fa fa-trash\"></i></span> "  + newTodo + "</li>")
		console.log($("li")[$("li").length - 1]);
		// $("li")[$("li").length - 1].click(function(){
		// 	alert("hello");
		// 	$(this).toggleClass("completed");
		// });
		$(this).val("");	
	}
	$("li").on("click", "span", function(){
		$(this).parent().fadeOut(400);
		return false;
	});
});

// $("li").on("click", function() {
// 	$(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("li").on("click", "span", function(){
	$(this).parent().fadeOut(400);
	return false;
});


input = true
$(".fa-plus").on("click", function() {
	if(input === true){
		$("input").fadeOut(400);
		input = false;
	} else {
		$("input").fadeIn(400);
		input = true;
	}
});