<div class="wrap">

	<header class="site-header">
		<h1 class="branding"><a href="index.html"><img src="images/fixie-logo.svg"></a></h1>
		<a href="#" class="home-link" title="return to home screen"><span class="icon-home"></span></a>
	</header>

	<div class="centered">

		<h1>Where are you right now?</h1>

		<!-- If there are cafés nearby -->

		<% if(nearby.length){ %>

			<p>

				<% _.each(nearby, function(item){ %>

					<a href="#place/<%- item.id %>" class="btn btn--blue"><%- item.get('name') %></a>

				<% }); %>

			</p>

		<% }else{ %>

			<p>We couldn't find any cafés nearby</p>

		<% } %>

		<a href="/add.html" class="btn btn--red">Add somewhere new at this location</a>

	</div>

</div>
