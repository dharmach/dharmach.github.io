importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');
 
if (workbox){
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
	    { url: '/index.html', revision: '1' },
	    { url: '/nav.html', revision: '1' },
	    { url: '/css/materialize.min.css', revision: '1' },
	    { url: '/js/materialize.min.js', revision: '1' },
	    { url: '/js/script.js', revision: '1' },
  ]);
  workbox.routing.registerRoute(
	  new RegExp('/pages/'),
	  workbox.strategies.staleWhileRevalidate({
		  cacheName: 'pages'
	  })
  );

}
else{
  console.log(`Workbox gagal dimuat`);
}