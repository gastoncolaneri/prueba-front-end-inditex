const allowCors = (url: string) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

export { allowCors };
