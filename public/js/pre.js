$(function(){
	$('#carousel').on('slide.bs.carousel', function () {
		var self = $(this);
		var id = self.find(".item.active").attr("id");
		$("#subitem_" + id).siblings().removeClass("active");
		$("#subitem_" + id).addClass("active");
	});
	$("body").on("click", '.carousel-mover', function(){
		var self = $(this);
		var index = self.attr("data-index");
		$("#carousel").carousel(parseInt(index));
		self.siblings().removeClass("active");
		self.addClass("active");
	});
});

