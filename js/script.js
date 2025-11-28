function entrar() {
    const loading = document.getElementById("loadingScreen");

    loading.style.display = "flex";

    setTimeout(() => {
        loading.style.display = "none";
        alert("Login realizado com sucesso!");
    }, 2000);
}