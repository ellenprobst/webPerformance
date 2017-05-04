const questions = [
	{
		q: "Are your CSS files combined?",
		info: "Combining all of your CSS into one file substantially reduces the amount of time it takes to load your web pages. The more files you have, the more requests are required and the more time a web browser needs to load your page. "
	},
	{
		q: "Did you remove any unused CSS?",
		info: "Unused entries in your CSS files affect the site’s performance as the browser has to do extra work parsing all the extra rules. You can easily check for unused CSS in the Chrome DevTools under the Audits tab."

	},
	{
		q: "Did you compress all images?",
		info: "It's best to keep your file sizes as small as possible and up to 400KB max. If you are using Photoshop you can use the save for web option. Or you can use a free tool like Kraken or Pixlr to compress the files."
	},
	{
		q: "Are all your images sized correctly?",
		info: "Reduce the number of unnecessary pixels by scaling your images to their display size. If you are displaying a 200×200 image, then don’t display a 400×400 at 200×200 size."
	},
	{
		q: "Are your images optimized for viewport size and display density?",
		info: `Do you switch images based on display density or viewport size? You can use the "srcset" and "sizes" attributes to define various images and "hints" that help the browser to determine the most appropriate image to display (e.g. high-resolution displays, mobile, etc).`
	},
	{
		q: "Did you replace images with CSS where possible? (e.g. logo's)",
		info: "You can use CSS features to create styles, like gradients and shadow, that would previously have required images. However if over-used it may hinder performance. Also don't embed text into images, place it in your markup where it is accessible and searchable."
	},
	{
		q: "Are you using less than 3 fonts?",
		info: "It is better not to use too many fonts on your pages, and, for each font, minimize the number of used variants. This helps produce a more consistent and a faster experience for your users."
	},
	{
		q: "Did you minify your CSS file?",
		info: "The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources."
	},
	{
		q: "Did you minify your JavaScript file?",
		info: "The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources."
	},
	{
		q: "xxIs everything needed?",
		info: "Is everything needed?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nulla nobis sunt modi, sed dolore assumenda ut possimus ducimus accusamus at laboriosam! Explicabo aliquid inventore tempore ea, dolores dolore. Natus."
	},
	{
		q: "Are you using CDN for popular libraries?",
		info: "Are you using CDN?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestias aut dignissimos iure a maxime error, distinctio fuga quisquam ipsa nihil eius culpa incidunt laudantium fugiat eligendi asperiores ea expedita."
	},
	{
		q: "Did you remove any broken urls?",
		info: "Are there any broken urls?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus iste iure, iusto, modi sequi impedit molestiae, distinctio aspernatur, ipsa temporibus voluptatem molestias odit commodi pariatur. Laborum facere voluptas, mollitia."
	},
	{
		q: "Are there any unnecessary redirects?",
		info: "Are there any unnecessary redirects?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime tenetur, voluptates, dolorum modi commodi voluptas, ullam consectetur odit soluta dignissimos explicabo impedit. Repellat quibusdam fuga dolores sit laborum, numquam."
	}
]

export default questions;