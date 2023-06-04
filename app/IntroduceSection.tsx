import clsx from 'clsx';
export const IntroduceSection = () => {

  return (
    <div className="w-full h-[720px] flex justify-center items-center">
      <div className="m-auto w-fit h-fit">
        <h1 className={clsx(
          "font-nunito",
          "text-5xl text-center font-bold",
          "text-[#7E6F73]",
        )}>Hi, I'm Letanta</h1>

        <p className={clsx(
          "font-nunito",
          "text-2xl text-center text-[#7E6F73]",
          "mt-2"
        )}>Welcome to my website 🌱</p>
      </div>
    </div>
  )
}

