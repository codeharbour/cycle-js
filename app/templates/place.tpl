<div class="wrap">
	<header class="site-header">
		<h1 class="branding"><a href="#"><img src="images/fixie-logo.svg"></a></h1>
		<a href="#" class="home-link" title="return to home screen"><span class="icon-home"></span></a>
	</header>

	<section class="content">

		<h1>Old Betty's</h1>

		<div class="form">

			<div class="form__group">
				<label class="form__label" for="cafe-rating">Rating</label>
				<span class="form__helper">How would you rate this café for cyclists?</span>

				<select class="form__control form__control--full" id="cafe-rating" name="cafe-rating">
					<option value="1">1 star</option>
					<option value="2">2 stars</option>
					<option value="3">3 stars</option>
					<option value="4">4 stars</option>
					<option value="5">5 stars</option>
				</select>

			</div>

			<div class="form__group">
				<label class="form__label" for="cafe-comment">Leave a comment</label>
				<span class="form__helper">Are there bike racks? What's the coffee like? How much does the cake cost?</span>
				<textarea name="cafe-comment" id="cafe-comment" class="form__control form__control--full" rows="10"></textarea>
			</div>

			<button class="btn btn--red" id="addRating">Add rating</button>

		</div>
	</section>
</div>
