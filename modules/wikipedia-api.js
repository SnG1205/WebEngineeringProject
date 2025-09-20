export async function fetchBears() {
    /*return fetch(BASE_URL + "?" + new URLSearchParams(params).toString())
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            extractBears(data.parse.wikitext['*']);
        });*/

    let response = await fetch(BASE_URL + "?" + new URLSearchParams(params).toString());
    let data = await response.json();
    let someData = await data.parse.wikitext['*'];
    console.log(someData);
    return await extractBears(someData);
}

const BASE_URL = "https://en.wikipedia.org/w/api.php";
const TITLE = "List_of_ursids";

const params = {
    action: "parse",
    page: TITLE,
    prop: "wikitext",
    section: 3,
    format: "json",
    origin: "*"
};

async function extractBears(wikitext) {
    const speciesTables = wikitext.split('{{Species table/end}}');
    console.log(speciesTables.length);
    console.log(speciesTables);
    let bears = [];
    for (const table of speciesTables) {
        const rows = table.split('{{Species table/row');
        console.log(rows.length);
        console.log(rows);
        for (const row of rows) {
            const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
            const binomialMatch = row.match(/\|binomial=(.*?)\n/);
            const imageMatch = row.match(/\|image=(.*?)\n/);
            console.log(imageMatch);
            //const rangeMatch = row.match(/range=(.*?)\s*\(/);

            if (nameMatch && binomialMatch && imageMatch) {
                const fileName = imageMatch[1].trim().replace('File:', '');

                let imageUrl = await fetchImageUrl(fileName);
                const bear = {
                    name: nameMatch[1],
                    binomial: binomialMatch[1],
                    image: imageUrl,
                    range: "TODO extract correct range"
                };
                bears.push(bear);

                if (bears.length === rows.length) {
                    let moreBears = document.querySelector('.more_bears');
                    bears.forEach((bear) => {
                        const html = '<div class="bear">' +
                            '<img src="' + bear.image + '" alt="Image of ' + bear.name + '" style="width:200px; height:auto;">' +
                            '<p><b>' + bear.name + '</b> (' + bear.binomial + ')</p>' +
                            '<p>Range: ' + bear.range + '</p>' +
                            '</div>';
                        moreBears.innerHTML += html;
                    });
                }
            }
        }
    }

// Fetching bear data

    async function fetchImageUrl(fileName) {
        const imageParams = {
            action: "query",
            titles: "File:" + fileName,
            prop: "imageinfo",
            iiprop: "url",
            format: "json",
            origin: "*"
        };
        const url = BASE_URL + "?" + new URLSearchParams(imageParams).toString();

        try{
            let response = (await fetch(url));
            let data = await response.json();
            console.log(data);
            let pages = await data.query.pages;
            let page = await Object.values(pages)[0];
            return await page.imageinfo[0].url;
            /*return fetch(URL).then(function (res) {
                return res.json();
            }).then(function (data) {
                var pages = data.query.pages;
                var page = Object.values(pages)[0];
                return page.imageinfo[0].url;
            });*/
        } catch (error){
            console.log('Error fetching image URL:', error);
            return '';
        }
    }
}
