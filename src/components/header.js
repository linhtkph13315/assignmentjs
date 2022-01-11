const Header = {
  print() {
    return /*html*/`<header>
      <div class="bg-indigo-800 py-4">
        <a href=""><img src="https://picsum.photos/1500/500"  alt="" class="mx-auto  w-40"></a>
      </div>
      <div class="bg-orange-600 flex">
        <ul class="flex">
          <li><a href="/" class="block px-2 py-2 hover:bg-indigo-500 hover:text-white">Trang chủ</a></li>
          <li><a href="/tuyen-sinh" class="block px-2 py-2 hover:bg-indigo-500 hover:text-white">Tuyển sinh</a></li>
          <li><a href="/chuong-trinh-dao-tao" class="block px-2 py-2 hover:bg-indigo-500 hover:text-white">Chương trình đào tạo</a></li>
          <li><a href="/tuyen-dung" class="block px-2 py-2 hover:bg-indigo-500 hover:text-white">Tuyển dụng</a></li>
          <li><a href="/goc-sinh-vien" class="block px-2 py-2 hover:bg-indigo-500 hover:text-white">Góc sinh viên</a></li>
        </ul>
        <label for="search-bar">
          <input type="text" class="block my-2 focus:outline-none pl-1 mx-12 w-56 bg-white" name="" id="">
        </label>
        <button class="bg-blue-900 border border-white text-white px-3 my-2">Tìm kiếm</button>
      </div>
    </header>`;
  }
}
export default Header;