$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
$(".mostpick .btn button").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $tab = $(this).attr("dataid");
    $($tab).addClass("active");
    $($tab).siblings().removeClass("active");
});
const container1 = document.querySelector("#productlist-1");
const container2 = document.querySelector("#productlist-2");
const container3 = document.querySelector("#productlist-3");
const container4 = document.querySelector("#productlist-4");

const listcard1 = [
    {
        image: "img/product/por/por_1.jpeg",
        title: "Porsche Macan SUV blue",
    },
    {
        image: "img/product/por/por_2.webp",
        title: "Porsche Macan SUV pink",
    },
    {
        image: "img/product/por/por_3.jpeg",
        title: "Porsche Macan SUV grey",
    },
    {
        image: "img/product/por/por_4.jpeg",
        title: "Porsche Cayenne SUV velvet",
    },
];
const listcard2 = [
    {
        image: "img/product/mer/mer_1.webp",
        title: "Mercedes AMG grey",
    },
    {
        image: "img/product/mer/mer_2.webp",
        title: "Mercedes G63 white",
    },
    {
        image: "img/product/mer/mer_3.webp",
        title: "Mercedes GLC blue",
    },
    {
        image: "img/product/mer/mer_4.jpeg",
        title: "Mercedes C300 white",
    },
];
const listcard3 = [
    {
        image: "img/product/audi/audi_1.jpeg",
        title: "Audi A8 red",
    },
    {
        image: "img/product/audi/audi_2.jpeg",
        title: "Audi A8 brown-grey",
    },
    {
        image: "img/product/audi/audi_3.avif",
        title: "Mercedes GLC blue",
    },
    {
        image: "img/product/audi/audi_4.jpeg",
        title: "Audi A8 black",
    },
];
const listcard4 = [
    {
        image: "img/product/kia/kia_1.jpeg",
        title: "Kia K5 atlantic blue",
    },
    {
        image: "img/product/kia/kia_2.jpeg",
        title: "Kia Sportage darkblue",
    },
    {
        image: "img/product/kia/kia_3.jpeg",
        title: "Kia Sorento white",
    },
    {
        image: "img/product/kia/kia_4.jpeg",
        title: "Kia Carnival tint",
    },
];
function renderCard(listcard, container) {
    listcard.forEach((element) => {
        container.innerHTML += `<div class="cardview col-6 col-md-6 col-lg-3">
        <div class="card">
            <div class="card-img"><img class="card-img-top" src="${element.image}" alt="Card image" /></div>
            <div class="card-body">
                <h6 class="card-title m-0">${element.title}</h6>
                <div class="price">
                    <h5 class="m-0">$14,600</h5>
                </div>
                <div class="card-subtitle d-flex align-items-center mt-3">
                    <ul class="d-flex m-0">
                        <li><p class="m-0">2018</p></li>
                        <li><p class="m-0 mt-1">190.000 miles</p></li>
                        <li><p class="m-0 mt-1">Automatic</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
    });
}
renderCard(listcard1, container1);
renderCard(listcard2, container2);
renderCard(listcard3, container3);
renderCard(listcard4, container4);
$(".popularmake .title-btn button").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $tab = $(this).attr("dataid");
    $($tab).parent().addClass("active");
    $($tab).parent().siblings().removeClass("active");
});
$(".dropdown-item").click(function () {
    $text = $(this).text();
    $(this).closest(".dropdown").find("button").text($text);
    $(this).closest(".dropdown").find("button").addClass("active");
});
