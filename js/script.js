Fancybox.bind("[data-fancybox]", {
   // Your custom options
   Thumbs: {
      type: "classic",
      width: 50,
      height: 50,
   },
});

const galleryCadrs = document.querySelector(".cadrs-list");
const cadrs = [
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/6e4f3d02-eeca-4210-83cb-169321c1e3aa/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/5a4737ad-18b8-4608-bd5d-20be9326cdbc/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/ee27cd44-3176-412f-bee8-826ac9e57ea2/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/b44350c4-8f21-462e-9b3f-e0dd8dd02083/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/f7d76211-a796-4224-8539-e737a8405db2/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10812607/7edd462e-34cc-4755-99b5-5574b9d3302f/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/b81b2d58-c134-4dde-9dcd-cc1082b40c9b/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10812607/2a92e77f-7cc3-4447-be28-799cad91cbdf/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/6f718c59-ea7d-422c-9052-462b3d45242d/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/5904ac71-354f-4c16-a5b4-710ef62728df/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2ec12aa8-009c-40a3-ae81-44ac5805df77/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/69ac8713-d46c-49f5-8ce5-b89ead811db6/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/957a07f6-9db4-46dc-aea4-497154265dc6/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/060589eb-e2e7-42ce-88bc-64664c5ca031/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/9a6fe15c-9269-492b-be25-bb10a0881acd/1920x",
   "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/f92e74d7-b6e0-4ca8-9e62-bc59ef1ecb50/1920x",
];

cadrs.forEach((url) => {
   const cadr = document.createElement("a");
   cadr.setAttribute("class", "cadrs-list__item");
   cadr.setAttribute("href", url);
   cadr.setAttribute("data-fancybox", "galleryCadrs");
   cadr.innerHTML = `
<img
   src="${url}"
   alt="Кадр"
/>
`;

   galleryCadrs.appendChild(cadr);
});

const actorsList = document.querySelector(".actors__list");
const actors = [
   {
      first_name: "Сергей",
      last_name: "Чихачёв",
      role: "Николай",
      photo: "https://www.kinopoisk.ru/images/sm_actor/1539232.jpg",
   },
   {
      first_name: "Григорий",
      last_name: "Скряпкин",
      role: "Барагозин",
      photo: "https://www.kinopoisk.ru/images/sm_actor/1141993.jpg",
   },
   {
      first_name: "Артем",
      last_name: "Семакин",
      role: "зам Барагозина",
      photo: "https://www.kinopoisk.ru/images/sm_actor/1193331.jpg",
   },
   {
      first_name: "Сергей",
      last_name: "Чихачёв",
      role: "Николай",
      photo: "https://www.kinopoisk.ru/images/sm_actor/231398.jpg",
   },
   {
      first_name: "Ольга",
      last_name: "Жевакина",
      role: "Надя, жена Николая",
      photo: "https://www.kinopoisk.ru/images/sm_actor/1942532.jpg",
   },
   {
      first_name: "Елена",
      last_name: "Махова",
      role: "Галина, жена зама Барагозина",
      photo: "https://www.kinopoisk.ru/images/sm_actor/1960517.jpg",
   },
   {
      first_name: "Ренат",
      last_name: "Мухамбаев",
      role: "Василий",
      photo: "https://www.kinopoisk.ru/images/sm_actor/3195363.jpg",
   },
];
actorsList.innerHTML = "";

actors.forEach((actor) => {
   const actorDiv = document.createElement("div");
   actorDiv.setAttribute("class", "actors__item");
   actorDiv.innerHTML = `
<div class="photo">
   <img
      src="${actor.photo}"
      alt="Фото"
   />
</div>
<div class="info">
   <strong class="name"> 
      ${actor.first_name}
      ${actor.last_name}
   </strong>
   <span>${actor.role}</span>
</div>
`;

   {
      /* <div class="actors__item">
<div class="photo"></div>
<div class="info">
<strong class="name">Сергей Чихачёв</strong>
<span>Роль</span>
</div>
</div> */
   }
   actorsList.appendChild(actorDiv);
});
