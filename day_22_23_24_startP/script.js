// const url = 'https://spotify23.p.rapidapi.com/track_lyrics/?id=1brwdYwjltrJo7WHpIvbYt';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '03ae607ac5mshace65388d0f805ep1fa8ebjsn445b2fe45de1',
//         'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//     }
// };

// async function getsongs() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Fetch JSON instead of text
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
//     let songs=
// }
// getsongs();

// async function main(){
//     let songs=await getsongs();
//     console.log(songs);

//     var audio =new Audio(songs[0]);
//     audio.play();
// }
// main()


// const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=1brwdYwjltrJo7WHpIvbYt';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '03ae607ac5mshace65388d0f805ep1fa8ebjsn445b2fe45de1',
//         'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//     }
// };

// async function main() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
        
//         // Assuming result.tracks is an array and the first item has the preview_url
//         const previewUrl = result.tracks[0].preview_url;
        
//         // Create an audio element and play the track
//         const audio = new Audio(previewUrl);
//         audio.play();
        
//         console.log(`Playing: ${result.tracks[0].name} by ${result.tracks[0].artists[0].name}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();


// const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '03ae607ac5mshace65388d0f805ep1fa8ebjsn445b2fe45de1',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };
// async function main() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     const previewUrl = result.tracks[0].preview_url;
//     const audio = new Audio(previewUrl);
//         audio.play();
// console.log(`Playing: ${result.tracks[0].name} by ${result.tracks[0].artists[0].name}`);
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// main();



const url = 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '03ae607ac5mshace65388d0f805ep1fa8ebjsn445b2fe45de1',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
async function main() {
try {
	const response = await fetch(url, options);
	const result = await response.json();
    const previewUrl = result.tracks[0].preview_url;
    const audio = new Audio(previewUrl);
        audio.play();
console.log(`Playing: ${result.tracks[0].name} by ${result.tracks[0].artists[0].name}`);
	console.log(result);
} catch (error) {
	console.error(error);
}
}
main();
