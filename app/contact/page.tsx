import clsx from 'clsx';

const ContactPage = () => {

  return (
    <div className={clsx(
      "w-[1024px] max-h-[600px]",
      "bg-[#FFFCFB]",
      "shadow-lg rounded-md",
      "m-auto px-10 py-10",
    )}>
      <h1 className={clsx(
        "font-nunito",
        "text-2xl font-bold text-[#7E6F73]",
        "leading-snug"
        )}>
        Contact
      </h1>

      <div className={clsx(
        "flex items-center ml-2 mt-1",
      )}>
        <i className={clsx(
          "ri-map-pin-line",
          "text-xl text-[#7E6F73]",
        )} />

        <p className={clsx(
          "font-nunito",
          "text-base font-semibold text-[#7E6F73]",
          "ml-2"
        )}>
          Saigon, Vietnam
        </p>
      </div>


      <div className={clsx(
        "flex items-center ml-2 mt-1",
      )}>
        <i className={clsx(
          "ri-mail-line",
          "text-xl text-[#7E6F73]",
        )} />

        <p className={clsx(
          "font-nunito",
          "text-base font-semibold text-[#7E6F73]",
          "ml-2"
        )}>
          thanhtam180298@gmail.com
        </p>
      </div>

      <div className={clsx(
        "flex items-center ml-2 mt-1",
      )}>
        <i className={clsx(
          "ri-github-line",
          "text-xl text-[#7E6F73]",
        )} />

        <p className={clsx(
          "font-nunito",
          "text-base font-semibold text-[#7E6F73]",
          "ml-2"
        )}>
          Lentanta
        </p>
      </div>
    </div>
  )
}

export default ContactPage;