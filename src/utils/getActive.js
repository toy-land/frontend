const calcDay = (pushedDate) => {
  const today = Date.now();
  const date = new Date(pushedDate);
  const elapsedMSec = today - date.getTime();
  const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24;
  return Math.floor(elapsedDay);
};

export const getActive = (pushedDate) => {
  const elapsedDayInt = calcDay(pushedDate);
  if (elapsedDayInt < 7) {
    return 0;
  } if (elapsedDayInt < 30) {
    return 1;
  } if (elapsedDayInt < 90) {
    return 2;
  } if (elapsedDayInt < 180) {
    return 3;
  }
  return 4;
};
