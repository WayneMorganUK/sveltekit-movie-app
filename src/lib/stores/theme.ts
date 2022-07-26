export function toggleTheme(theme: any, $theme: any): void {
  if ($theme.mode === 'light') {
    theme.set({ ...$theme, mode: 'dark' });
    updateDocument('theme', 'dark', 'light');
  } else {
    theme.set({ ...$theme, mode: 'light' });
    updateDocument('theme', 'light', 'dark');
  }
}

function updateDocument(name: string, newMode: string, prevMode: string) {
  document.cookie = `${name}=${newMode};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  let element = document.getElementById('core')
  if (element != null) {
    element.classList.remove(prevMode);
    document.documentElement.classList.remove(prevMode);
    element.classList.add(newMode);
    document.documentElement.classList.add(newMode);
  }
}
