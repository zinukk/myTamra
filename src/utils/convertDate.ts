export const convertDate = (dateType: string | undefined) => {
  const day = new Date();

  const year = dateType === 'today' ? day.getFullYear() : 2060;

  const month = day.getMonth() + 1;

  const date = day.getDate();

  return `${year}년 ${month}월 ${date}일`;
};
