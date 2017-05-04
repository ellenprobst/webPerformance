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
		q: "Are you leveraging browser caching?",
		info: "Caching can be used to reduce the number of requests made to a server. Cache-Control directives control who can cache the response, under which conditions, and for how long. Audit your pages to identify which resources can be cached and ensure that they return appropriate Cache-Control and ETag headers."
	},
	{
		q: "Are you using CDN for popular libraries?",
		info: "There’s a high probability that someone visiting your pages has already visited a site using the same CDN. Therefore, the file has already been cached by the browser and won’t need to be downloaded again."
	},
	{
		q: "Did you remove any broken urls?",
		info: "HTTP requests are expensive so making a request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience."
	},
	{
		q: "Are you defer loading JavaScript?",
		info: "The loading and execution of scripts that are not necessary for the initial page render should be made asynchronous or deferred until after the first render or other critical parts of the page have finished loading. Doing so can help reduce resource contention and improve performance."
	}
]

export default questions;