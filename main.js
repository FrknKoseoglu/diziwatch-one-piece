const puppeteer = require('puppeteer');

(async () => {
    // Dinamik import kullanarak open modülünü yükle
    const open = (await import('open')).default;

    // Start timer to measure execution time
    console.time('İşlem Süresi : ');

    // Start interval for "Loading" effect
    const loadingInterval = setInterval(() => {
        process.stdout.write('.');
    }, 500);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://diziwatch.net/calendar/'); // Add target URL here

    const result = await page.evaluate(() => {
        const seriesList = Array.from(document.querySelectorAll('.dw-series'));
        const seriesElement = seriesList.find(el => el.querySelector('.tv-title').innerText.trim() === 'One Piece');

        if (seriesElement) {
            // Check if the .dw-series element contains 'filter' in its style attribute
            const styleAttr = seriesElement.getAttribute('style');
            const hasFilterStyle = styleAttr ? styleAttr.includes('filter') : false;

            // Get the text inside .dw-status
            const statusElement = seriesElement.querySelector('.dw-status');
            const statusText = statusElement ? statusElement.innerText.trim() : null;

            // Get the text inside .turler
            const nameElement = seriesElement.querySelector('.turler');
            const nameText = nameElement ? nameElement.innerText.trim() : null;

            // Get the text inside the .date above .dw-series and make it a single line
            const calendarItem = seriesElement.closest('.calendar-item');
            const dateText = calendarItem ? calendarItem.querySelector('.date').innerText.replace(/\n/g, ' ').trim() : null;

            // Get the link inside .dw-detail a
            const detailLinkElement = seriesElement.querySelector('a.dw-detail');
            const detailLink = detailLinkElement ? detailLinkElement.href : null;

            return {
                hasFilterStyle,
                statusText,
                nameText,
                dateText,
                detailLink
            };
        } else {
            return null;
        }
    });

    // Stop "Loading" effect and add a newline
    clearInterval(loadingInterval);
    process.stdout.write('\n');

    if (result) {
        console.log('Tarih : ', result.dateText);
        console.log('Bölüm : ', 'One Piece ' + result.nameText);
        console.log('Statü : ', result.statusText ? result.statusText : 'Yayında Değil');

        // Check if statusText contains 'yayınlandı' (case-insensitive)
        if (result.statusText && result.statusText.toLowerCase().includes('yayınlandı')) {
            if (result.detailLink) {
                console.log('Link Açılıyor : ', result.detailLink);
                await open(result.detailLink);
            } else {
                console.log('Link bulunamadı');
            }
        }
    } else {
        console.log('One Piece Bulunamadı :(');
    }

    await browser.close();

    // End timer and print the duration
    console.log('----');
    console.timeEnd('İşlem Süresi : ');
})();
