export function usuarioLogado() {
  return localStorage.getItem("token") ? true : false;
}

export function usuarioLogout() {
  localStorage.removeItem("token");
}