const desigModule = document.getElementById("desig-autom");

function desigAutomatic() {
    let str = desigModule.value.toLowerCase();
    let result = str.replace(/ /g, "-");
    desigModule.value = result;
    console.log(result);
}

function showSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display == "block") {
        sidebar.style.display = "none";
        return;
    }
    sidebar.style.display = "block";
}

desigModule.oninput = desigAutomatic;
