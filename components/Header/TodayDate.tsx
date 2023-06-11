
import clsx from 'clsx';
import dayjs from "dayjs";

export const TodayDate = () => {
  return (
    <div className="flex items-center gap-2">
      <i className="ri-calendar-line text-lg font-normal text-A3" />
      <div className={clsx(
        "font-nunito",
        "text-base font-normal text-A3",
      )}>
        {dayjs(new Date()).format("MMMM D, YYYY")}
      </div>
    </div>

  )
};