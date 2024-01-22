document.addEventListener("DOMContentLoaded", function () {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
});

// datepicker initialization
document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {
            done: "Select"
        }
    });
});

// select initialization
document.addEventListener('DOMContentLoaded', function () {
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});


// collapsible initialization
document.addEventListener('DOMContentLoaded', function() {
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });