async function fetchData() {
    let response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-08-06&sortBy=publishedAt&apiKey=f498ad77f5a94a7a9a25b3104232f37c');
    console.log(await response.json());
}
fetchData();