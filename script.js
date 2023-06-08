const buttons = document.querySelectorAll('.btn');
console.log(buttons);

// buttons.forEach((item) => {
//     item.addEventListener("click", function () {
//         item.classList.toggle('active');

//         if (item.classList.contains('active')) {
//             buttons.forEach((item) => {
//                 item.classList.remove('active');
//             })
//             item.classList.toggle('active');
//         }
//     })
// })


buttons.forEach((item) => {
    item.addEventListener('click', function () {
        if (item.classList.contains('active')) {
            item.classList.toggle('active');
        } else {
            buttons.forEach((item) =>
                item.classList.remove('active'))
            item.classList.add('active');
        }
    })
})
