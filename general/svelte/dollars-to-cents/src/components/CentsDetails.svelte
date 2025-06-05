<script>
	let src = 'images/cent.png';
	export let cents = [];
</script>

<div class="cents">
	{#each cents as cent (cent.type)}
		{#if cent.quantity > 0}
			<div class="cent-details">
				<div class="cent-details-info">
					<img {src} class="cent-details-info-icon" alt="cent" />
					<p>{cent.type}</p>
				</div>
				<div class="cent-details-info-qty">
					<p>{cent.quantity}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.cents {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 250px;
		width: 125px;
	}
	.cent-details {
		display: flex;
		width: 100px;
	}
	.cent-details-info {
		width: 50px;
		height: 50px;
		font-size: small;
		font-weight: bold;
		color: #636262;
	}
	.cent-details-info-icon {
		width: 25px;
		height: 25px;
	}
	.cent-details-info-qty {
		width: 50px;
		height: 50px;
		background-color: #f2f2f2;
		position: relative;
	}

	.cent-details-info-qty p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: large;
		font-weight: bold;
		color: #636262;
	}
</style>
