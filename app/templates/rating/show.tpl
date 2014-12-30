<li class="review">
	<span class="review__user">Unknown</span>
	<div class="rating">
		<div class="stars">
			<% if(model.get('stars') >= 5){ %>

				<span class="star-5 on">&#x2605;</span>

			<% }else{ %>

				<span class="star-5">&#x2605;</span>

			<%} if(model.get('stars') >= 4){ %>

				<span class="star-4 on">&#x2605;</span>

			<% }else{ %>

				<span class="star-4">&#x2605;</span>

			<% } if(model.get('stars') >= 3){ %>

				<span class="star-3 on">&#x2605;</span>

			<% }else{ %>

				<span class="star-3">&#x2605;</span>

			<% } if(model.get('stars') >= 2){ %>

				<span class="star-2 on">&#x2605;</span>

			<% }else{ %>

				<span class="star-2">&#x2605;</span>

			<% } if(model.get('stars') >= 1){ %>

				<span class="star-1 on">&#x2605;</span>

			<% }else{ %>

				<span class="star-1">&#x2605;</span>

			<% } %>
		</div>
		<div class="rating__meta">Rated <%- moment(model.createdAt).format('Mo MMM YYYY') %></div>
	</div>
	<div class="review__entry">
		<p><%- model.get('comment') %></p>
	</div>
</li>
