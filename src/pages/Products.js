function Products() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="group/btn w-[500px] h-[100px] bg-btn rounded-xl hover:h-[200px] transition-all">
        <div className="w-full h-full text-center text-white text-5xl font-bold cursor-pointer hover:text-center mt-5">
          Products
          <div className="invisible w-full text-white text-3xl mt-10 transition-none group-hover/btn:visible">
            <a className="text-aqua text-cyan-400 hover:text-cyan-600 transition-colors" href="https://terrafarm.store/">Redirect on site</a>
          </div>
          </div>
      </div>
    </div>
    );
}

export default Products;