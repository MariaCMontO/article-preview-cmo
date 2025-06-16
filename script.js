shareButton = document.getElementById("shareButton");
tooltip = document.getElementById("tooltip")
avatarContainer = document.getElementById("avatar-container");
shareIconTooltip=document.getElementById("share-icon-tooltip");

shareButton.addEventListener("click", () => {

    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) {
        avatarContainer.classList.add("is-hidden");
    }else{
        shareIconTooltip.classList.toggle("is-hidden");
        shareButton.classList.toggle("active")
    }
    tooltip.classList.toggle("is-hidden");
    tooltip.classList.toggle("tooltip-container");
})