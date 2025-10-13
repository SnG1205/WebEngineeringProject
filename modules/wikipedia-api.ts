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

export const fetchBears = async (): Promise<void> => {
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
  const bears: Bear[] = await addBears(rows);
  addBearsAsHtml(bears, rows);
};

const addBears = async (rows: string[]): Promise<Bear[]> => {
  const rowBears: Bear[] = [];
  for (const row of rows) {
    try {
      rowBears.push(await addBear(row));
    } catch (e) {
      console.log(`Error while trying to add bear for a row: ${row}`, e);
    }
  }

  return rowBears;
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

const addBearsAsHtml = (bears: Bear[], rows: string[]): void => {
  if (bears.length === rows.length) {
    const moreBears = document.querySelector('.more_bears');
    bears.forEach((bear) => {
      const html =
        '<div class="bear">' +
        '<img src="' +
        bear.imageUrl +
        '" alt="Image of ' +
        bear.nameMatch +
        '" style="width:200px; height:auto;">' +
        '<p><b>' +
        bear.nameMatch +
        '</b> (' +
        bear.binomialMatch +
        ')</p>' +
        '<p>Range: ' +
        bear.rangeMatch +
        '</p>' +
        '</div>';
      moreBears.innerHTML += html;
    });
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
    console.log(pages);
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
