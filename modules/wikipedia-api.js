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

export async function fetchBears() {
    let response = await fetch(BASE_URL + "?" + new URLSearchParams(params).toString());
    let data = await response.json();
    let someData = await data.parse.wikitext['*'];
    console.log(someData);
    return await extractBears(someData);
}

async function extractBears(wikitext) {
    const rows = wikitext.split('{{Species table/row');
    rows.shift();
    let bears = await addBears(rows);
    displayBears(bears, rows);
}

async function addBears(rows) {
    let rowBears = [];
    for (const row of rows) {
        rowBears.push(await addBear(row))
    }

    return rowBears;
}

async function addBear(row) {
    const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
    const binomialMatch = row.match(/\|binomial=(.*?)\n/);
    const imageMatch = row.match(/\|image=(.*?)\n/);
    const rangeMatch = row.match(/\|range=([^|\n]+)/);
    console.log(imageMatch);

    if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
        const fileName = imageMatch[1].trim().replace('File:', '');
        let imageUrl = await fetchImageUrl(fileName);

        return {
            name: nameMatch[1],
            binomial: binomialMatch[1],
            image: imageUrl,
            range: rangeMatch[1]
        };
    }
}

function displayBears(bears, rows) {
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

    try {
        let response = (await fetch(url));
        let data = await response.json();
        let pages = await data.query.pages;
        let page = await Object.values(pages)[0];
        return await page.imageinfo[0].url;
    } catch (error) {
        console.log('Error fetching image URL:', error);
        return 'media/placeholder.png';
    }
}
