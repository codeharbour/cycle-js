<% collection.each(function(item){ %>

	<li>
	    <article class="cafe">
		    <a class="details-link" href="#">
		    <div class="cafe__overview">
			    <div class="more-button">&raquo;</div>
		    	<h2 class="cafe__title"><%- item.get('name') %></h2>
		    	<div class="rating">
			    	<div class="stars">
							<span class="star-5">&#x2605;</span>
							<span class="star-4 on">&#x2605;</span>
							<span class="star-3 on">&#x2605;</span>
							<span class="star-2 on">&#x2605;</span>
							<span class="star-1 on">&#x2605;</span>
						</div>
						<div class="rating__meta">4 ratings</div>
		    	</div>
		    	<div class="cafe__distance">0.1 miles</div>
		    </div>
	     	</a>
	    </article>
    </li>

<% }); %>
