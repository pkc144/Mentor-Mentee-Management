
<script>

	var start=0, end=0, count=0;
	var flag1 = 0, flag2=0;
	function toggle1(el){
	if(flag1==0 && count!=10)
	{
		if(el.className!="pause1")
		{
			el.src="includes/producer_consumer_items/PAUSE.png";
			el.className="pause1";
			flag2 = 1;
			document.getElementById("prod").src="includes/producer_consumer_items/popcornmaking.gif";
			document.getElementById("producer").src="includes/producer_consumer_items/PRODUCING.png";
			var intclear = setInterval(function(){
				if(el.className!="play1") {
				str="empty"+(end+1);
				count++;
				document.getElementById(str).src="includes/producer_consumer_items/popcorn.jpg";
				document.getElementById("count").innerHTML = "Counter : "+count;
				end = (end+1)%10;
				if(count==10)
				{
					flag2 = 0;
					el.src='includes/producer_consumer_items/PLAY.png';
					el.className="play1";
					document.getElementById("prod").src="includes/producer_consumer_items/popcornmaking-0.png";
					document.getElementById("producer").src="includes/producer_consumer_items/PRODUCER.png";
					clearInterval(intclear);
					start = 0;
					end = 0;
				}
				}
			},1000);
		}
		else if(el.className=="pause1")
		{
			flag2 = 0;
			el.src='includes/producer_consumer_items/PLAY.png';
			el.className="play1";
			document.getElementById("prod").src="includes/producer_consumer_items/popcornmaking-0.png";
			document.getElementById("producer").src="includes/producer_consumer_items/PRODUCER.png";
		}
	}
	else if(count==10)
	{
		alert("Produce limit is reached");
	}
	else
	{
		alert("Cannot produce now");
	}

    return false;
	}

	function toggle2(el) {
	if(flag2==0)
	{
		if(el.className!="pause2" && count>0)
		{
			el.src="includes/producer_consumer_items/PAUSE.png";
			el.className="pause2";
			flag1 = 1;
			document.getElementById("cons").src="includes/producer_consumer_items/popcornConsuming.gif";
			document.getElementById("consumer").src="includes/producer_consumer_items/CONSUMING.png";
			var intclear = setInterval(function(){
				if(el.className!="play2") {
				str="empty"+(start+1);
				count--;
				document.getElementById(str).src="includes/producer_consumer_items/popcornempty.png";
				document.getElementById("count").innerHTML = "Counter : "+count;
				start = (start+1)%10;
				if(count==0)
				{
					flag1 = 0;
					flag2 = 1;
					el.src='includes/producer_consumer_items/PLAY.png';
					el.className="play2";
					document.getElementById("cons").src="includes/producer_consumer_items/popcornConsuming-0.png";
					document.getElementById("consumer").src="includes/producer_consumer_items/CONSUMER.png";
					clearInterval(intclear);
					start = 0;
					end = 0;
				}
				}
			},1000);
		}
		else if(el.className=="pause2")
		{
			flag1 = 0;
			el.src='includes/producer_consumer_items/PLAY.png';
			el.className="play2";
			document.getElementById("cons").src="includes/producer_consumer_items/popcornConsuming-0.png";
			document.getElementById("consumer").src="includes/producer_consumer_items/CONSUMER.png";
		}
	}
	else if(count==0)
	{
		alert("All items consumed");
	}
	else
	{
		alert("Cannot consume now!");
	}

	return false;
	}

</script>

