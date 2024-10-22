export const WelcomeBanner = () => {
  return (
    <div className="flex flex-col items-center h-[300px] md:h-[500px] w-full bg-dark-bg 
      col-span-full rounded-lg">
      <div className="p-5 bg-dark-bg h-full rounded-lg flex flex-col justify-center items-center">
        <p className="text-xl md:text-subTitle ml-1 font-bold text-dark-fg0">Welcome to my website</p>
        <div className='rounded-lg mt-1 border-2 py-5 px-9 border-dark-blue2'>
          <h1 className="text-3xl md:text-8xl font-bold text-dark-blue2">Lambduck_</h1>
        </div>
        <p className="text-xl mt-2 ml-1 font-semibold text-dark-fg0">Lambda + Duck</p>
      </div>
    </div>
  )
}
