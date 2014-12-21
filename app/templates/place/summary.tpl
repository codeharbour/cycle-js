<li>
	<article class="cafe">
		<a class="details-link" href="">
			<div class="cafe__overview">
				<div class="more-button">&raquo;</div>
				<h2 class="cafe__title"><%- model.get('name') %></h2>
				<div class="rating">
					<div class="stars">
						<% if(model.averageRating() >= 5){ %>

							<span class="star-5 on">&#x2605;</span>

						<% }else{ %>

							<span class="star-5">&#x2605;</span>

						<%} if(model.averageRating() >= 4){ %>

							<span class="star-4 on">&#x2605;</span>

						<% }else{ %>

							<span class="star-4">&#x2605;</span>

						<% } if(model.averageRating() >= 3){ %>

							<span class="star-3 on">&#x2605;</span>

						<% }else{ %>

							<span class="star-3">&#x2605;</span>

						<% } if(model.averageRating() >= 2){ %>

							<span class="star-2 on">&#x2605;</span>

						<% }else{ %>

							<span class="star-2">&#x2605;</span>

						<% } if(model.averageRating() >= 1){ %>

							<span class="star-1 on">&#x2605;</span>

						<% }else{ %>

							<span class="star-1">&#x2605;</span>

						<% } %>
					</div>
					<div class="rating__meta">

						<% if(model.numRatings() == 1){ %>
							1 rating
						<% }else{ %>
							<%- model.numRatings() %> ratings
						<% } %>

					</div>
				</div>
				<div class="cafe__distance">? miles</div>
			</div>
		</a>
	</article>
</li>
