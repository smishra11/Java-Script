//Write a JavaScript program to calculate number of days left until next Christmas.

const nextChristmas = () => {
  let today = new Date();
  let christmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  let oneDay = 1000 * 60 * 60 * 24;
  console.log(
    Math.ceil((christmas.getTime() - today.getTime()) / oneDay) +
      ' days left until Christmas'
  );
};

nextChristmas();
