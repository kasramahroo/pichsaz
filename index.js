const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElement = document.querySelectorAll(".hidden");
const hiddenElement1 = document.querySelectorAll(".hidden1");
hiddenElement.forEach((el) => observer.observe(el));
hiddenElement1.forEach((el) => observer.observe(el));

const products = [
    {
        title: "ye chizi",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
        link: "",
        image: "./images/1.jpg",
    },
    {
        title: "ye chizi second",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
        link: "",
        image: "./images/2.jpg",
    },
];

const links = [
    {
        name: "call",
        link: "tel:+989120000000",
    },
    {
        name: "sms",
        link: "sms:+989120000000",
    },
    {
        name: "whatsapp",
        link: "https://api.whatsapp.com/send?phone=989120000000",
    },
    {
        name: "eeta",
        link: "https://api.whatsapp.com/send?phone=989120000000",
    },
];

const aboutStats = [
    {
        value: "1000+",
        label: "محصول",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="m21.71 10.12l-7.83-7.83a1 1 0 0 0-1.7.57L11.45 8l-2 2l-.33-.19A1 1 0 0 0 8 11.44l-1.15 1.17l-.33-.19a1 1 0 0 0-1.11 1.63l-1.17 1.16l-.32-.21a1 1 0 0 0-1.37.37a1 1 0 0 0 .25 1.26l-.51.51a.93.93 0 0 0-.21.33a1 1 0 0 0-.08.38V21a1 1 0 0 0 1 1h3.13a1 1 0 0 0 .38-.08a.93.93 0 0 0 .33-.21L8.54 20l.33.19a1 1 0 0 0 1.37-.36a1 1 0 0 0-.24-1.27l1.17-1.16l.33.19a1 1 0 0 0 .49.13a1 1 0 0 0 .6-1.72l1.17-1.16l.33.19a1 1 0 0 0 .49.13a1 1 0 0 0 .62-1.77l.79-.79l5.15-.73a1 1 0 0 0 .81-.68a1 1 0 0 0-.24-1.07M5.72 20H4v-1.72l.57-.57L6.75 19Zm2.49-2.5L6 16.25l1.14-1.14l2.17 1.25Zm2.61-2.6l-2.18-1.26l1.15-1.14L12 13.75Zm2.61-2.61L11.25 11l1.14-1.14l1.72 1.72Zm2.45-1.74l-2.43-2.43l.43-3l5 5Z"></path>
                    </svg>`,
    },
    {
        value: "10+",
        label: "سال تجربه",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"></path>
                    </svg>`,
    },
    {
        value: "500+",
        label: "مشتری",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1.001 1.001 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1.001 1.001 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z"></path>
                        <path
                            fill="currentColor"
                            d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.986 2.986 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2"></path>
                    </svg>`,
    },
];

const coworkers = [
    { name: "همکار اول", image: "./images/1.jpg" },
    { name: "همکار دوم", image: "./images/2.jpg" },
    { name: "همکار سوم", image: "./images/3.jpg" },
    { name: "همکار چهارم", image: "./images/4.jpg" },
];

const contactNames = {
    call: "تماس بگیرید",
    sms: "ارسال پیامک",
    whatsapp: "واتساپ",
    eeta: "ایتا",
};

const contactLinksContainer = document.querySelector("#contact-us-section-links");

const aboutStatsContainer = document.querySelector("#about-us-section-content-stats");
aboutStatsContainer.replaceChildren();

aboutStats.forEach((stat) => {
    const statCard = document.createElement("div");
    statCard.className = "about-us-section-content-stats-stat";

    const value = document.createElement("h4");
    value.className = "about-us-section-content-stats-stat-num";
    value.textContent = stat.value;

    const label = document.createElement("h3");
    label.textContent = stat.label;

    const iconTemplate = document.createElement("template");
    iconTemplate.innerHTML = stat.icon.trim();
    const icon = iconTemplate.content.firstElementChild;
    icon.setAttribute("aria-hidden", "true");

    statCard.append(icon, value, label);
    aboutStatsContainer.append(statCard);
});

const coworkersScroller = document.querySelector("#coworkers-scroller");
coworkers.forEach((coworker) => {
    const image = document.createElement("img");
    image.src = coworker.image;
    image.alt = coworker.name;
    coworkersScroller.append(image);
});

function getContactValue(contact) {
    if (contact.name === "call" || contact.name === "sms") {
        return contact.link.replace(/^(tel|sms):/, "");
    }

    const url = new URL(contact.link);
    return url.searchParams.get("phone") || url.pathname.split("/").filter(Boolean).pop() || url.hostname;
}

links.forEach((contact, index) => {
    const contactLink = document.createElement("a");
    contactLink.className = `contact-us-section-links-${contact.name} hidden`;
    contactLink.href = contact.link;
    contactLink.style.transitionDelay = `${200 + index * 200}ms`;

    const contactName = document.createElement("p");
    contactName.textContent = contactNames[contact.name] || contact.name;

    const contactValue = document.createElement("p");
    contactValue.textContent = getContactValue(contact);

    contactLink.append(contactName, contactValue);
    contactLinksContainer.append(contactLink);
    observer.observe(contactLink);
});

const productsContainer = document.querySelector("#products-section-content");

products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "products-section-content-product hidden";

    const textContainer = document.createElement("div");
    textContainer.className = "products-section-content-product-text";

    const titleLink = document.createElement("a");
    titleLink.href = product.link || "#";
    titleLink.style.textDecoration = "none";

    const title = document.createElement("h3");
    title.textContent = product.title;
    titleLink.append(title);

    const description = document.createElement("p");
    description.textContent = product.description;

    const moreInfoLink = document.createElement("a");
    moreInfoLink.className = "products-section-content-product-button";
    moreInfoLink.href = product.link || "#";
    moreInfoLink.textContent = "اطلاعات بیشتر";

    textContainer.append(titleLink, description, moreInfoLink);

    const imageContainer = document.createElement("div");
    imageContainer.className = "products-section-content-product-image";

    const imageLink = document.createElement("a");
    imageLink.href = product.link || "#";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    imageLink.append(image);
    imageContainer.append(imageLink);

    productCard.append(textContainer, imageContainer);
    productsContainer.append(productCard);
    observer.observe(productCard);
});
