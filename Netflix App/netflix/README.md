
 <div className="md:pl-14 sm:ml-0 ml-4 relative">
      <p className="mb-2 md:absolute lg:ml-3 md:ml-[2px] sm:ml-3 text-gray-300 font-bold md:text-[18px] lg:text-lg text-sm pt-10">
        {title}
      </p>
      <div
        id="slider"
        className="flex scroll whitespace-nowrap overflow-x-scroll scroll-smooth md:h-[450px] md:justify-center md:items-center"
      >
        <div className="text-white cursor-pointer hidden lg:block absolute left-0 z-50 group h-[267px] opacity-50 bg-black w-[40px]">
          <AiOutlineLeft
            onClick={() => slide("left")}
            className="h-full relative w-full"
          />
        </div>
        <div
          ref={listRef}
          id="list"
          className="flex transition-all ease-in duration-500 2xl:translate-x-[750px] xl:translate-x-[1220px] md:gap-1 w-max sm:gap-2 gap-3 lg:ml-[80%] xl:ml-[82%]"
        >
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="text-white cursor-pointer hidden lg:block absolute right-0 z-50 group h-[267px] opacity-50 bg-black w-[40px]">
          <AiOutlineRight
            onClick={() => slide("right")}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>