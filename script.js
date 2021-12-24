async function fetchHolidays(year, country_code) {
    const api_key = "57486e154e27bc61b29410a9acd88bfd0ae471c9";
    let data = await fetch(
        'https://calendarific.com/api/v2/holidays?api_key=' +
        api_key + '&country=' + country_code +
        '&year=' + year
    ).then(res => {
        return res.json()
    }).then(data => {
        return data ?.response ?.holidays;
    });


    data.forEach((element) => {
        let html = '<td class="p-2 whitespace-nowrap"> <div class="flex items-center"> <div class="font-medium text-gray-800">' +
            element.name +
            '</div> </div> </td> <td class="p-2 whitespace-nowrap"> <div class="text-left">' +
            element.description +
            '</div> </td> <td class="p-2 whitespace-nowrap"> <div class="text-right">' +
            element.date.datetime.year + '-' + element.date.datetime.month + '-' +
            element.date.datetime.day +
            '</div> </td>'

        let tr = document.createElement('tr');
        tr.innerHTML = html.trim();
        document.getElementById("table-body").append(tr);
    });

}

fetchHolidays(2022, "NP")