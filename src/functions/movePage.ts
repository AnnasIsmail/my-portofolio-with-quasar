// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const movePage = (path: string, thisRouter: any): void => {
  const element = document.getElementById('move-page');
  if (element !== null && path !== thisRouter.$route.path) {
    (element as HTMLElement).click();
    setTimeout(() => {
      thisRouter.$router.push(path);
    }, 1000);
  }
};
