import {json} from '@sveltejs/kit';

export async function GET(){
    await fetchBears();
    const bears: Bear[] = [];
    for (const bear of unparsedBears) {
        try {
            bears.push(await addBear(bear));
        } catch (e) {
            console.log(`Error while trying to add bear for a row: ${bear}`, e);
        }
    }

    return json(bears);
}

const BASE_URL = 'https://en.wikipedia.org/w/api.php';
const TITLE = 'List_of_ursids';

const params: Record<string, string> = {
    action: 'parse',
    page: TITLE,
    prop: 'wikitext',
    section: '3',
    format: 'json',
    origin: '*',
};

let unparsedBears: string[] = [];

const fetchBears = async (): Promise<void> => {
    try {
        const response = await fetch(
            BASE_URL + '?' + new URLSearchParams(params).toString()
        );
        const data = await response.json();
        const parsedData = (await data.parse.wikitext['*']) as string;
        await displayBears(parsedData);
    } catch (e) {
        console.log(`Error fetching bear data from Wikipedia from ${BASE_URL}`, e);
    }
};

const displayBears = async (wikitext: string): Promise<void> => {
    const rows: string[] = wikitext.split('{{Species table/row');
    rows.shift();
    unparsedBears = rows;
};

const addBear = async (row: string): Promise<Bear> => {
    const nameMatch: string = row.match(/\|name=\[\[(.*?)\]\]/)[1];
    const binomialMatch: string = row.match(/\|binomial=(.*?)\n/)[1];
    const imageMatch: string = row.match(/\|image=(.*?)\n/)[1];
    const rangeMatch: string = row.match(/\|range=([^|\n]+)/)[1];

    if (areNotNulls(nameMatch, binomialMatch, imageMatch, rangeMatch)) {
        const fileName = imageMatch.trim().replace('File:', '');
        const imageUrl = await fetchImageUrl(fileName);

        return {
            nameMatch,
            binomialMatch,
            imageUrl,
            rangeMatch,
        };
    }
};

const fetchImageUrl = async (fileName: string): Promise<string> => {
    const imageParams: Record<string, string> = {
        action: 'query',
        titles: 'File:' + fileName,
        prop: 'imageinfo',
        iiprop: 'url',
        format: 'json',
        origin: '*',
    };
    const url = BASE_URL + '?' + new URLSearchParams(imageParams).toString();

    try {
        const response = await fetch(url);
        const data = await response.json();
        const pages: WikiQueryResponse = data.query.pages;
        const pagesArray: WikiPage[] = Object.values(pages);
        const firstPage = pagesArray[0];
        return firstPage.imageinfo[0].url;
    } catch (error) {
        console.log('Error fetching image URL:', error);
        return 'media/placeholder.png';
    }
};

const areNotNulls = (
    nameMatch: string,
    binomialMatch: string,
    imageMatch: string,
    rangeMatch: string
): boolean => {
    return (
        nameMatch !== null &&
        binomialMatch !== null &&
        imageMatch !== null &&
        rangeMatch !== null
    );
};

interface Bear {
    nameMatch: string;
    binomialMatch: string;
    imageUrl: string;
    rangeMatch: string;
}

interface WikiPage {
    imageinfo: {
        url: string;
    };
}

interface WikiQueryResponse {
    query: {
        pages: Record<string, WikiPage>;
    };
}