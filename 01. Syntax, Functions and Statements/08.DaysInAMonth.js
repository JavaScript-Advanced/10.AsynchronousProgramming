function days(month,year){
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

days(2, 2011);